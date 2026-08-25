import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { External } from "./quartz/components/external"
import MobileOnly from "./quartz/components/MobileOnly"
import { QuartzComponent } from "./quartz/components/types"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes"

const config = await loadQuartzConfig()
export default config

const pageTitle = External("page-title")
const search = External("search")
const darkmode = External("darkmode")
const readerMode = External("reader-mode")
const toc = External("TableOfContents")
const mobileToc = MobileOnly(toc)

const headerWithReader: QuartzComponent[] = [pageTitle, search, darkmode, readerMode]
const headerWithoutReader: QuartzComponent[] = [pageTitle, search, darkmode]

function appendMobileToc(components: QuartzComponent[] | undefined): QuartzComponent[] {
  return [...(components ?? []), mobileToc]
}

export const layout = await loadQuartzLayout()

layout.defaults.header = headerWithReader
layout.defaults.beforeBody = appendMobileToc(layout.defaults.beforeBody)

for (const [name, pageLayout] of Object.entries(layout.byPageType)) {
  const hideReader = name === "folder" || name === "tag"
  pageLayout.header = hideReader ? headerWithoutReader : headerWithReader
  if (name !== "404") {
    pageLayout.beforeBody = appendMobileToc(pageLayout.beforeBody)
  }
}

// loadQuartzConfig() already wired a dispatcher from YAML-only layout.
// Replace it so the header slot and mobile TOC actually render.
const dispatcherIdx = config.plugins.emitters.findIndex(
  (emitter) => emitter.name === "PageTypeDispatcher",
)
if (dispatcherIdx === -1) {
  throw new Error("PageTypeDispatcher not found; cannot apply header and mobile TOC layout")
}
config.plugins.emitters[dispatcherIdx] = PageTypeDispatcher({
  defaults: layout.defaults,
  byPageType: layout.byPageType,
})
