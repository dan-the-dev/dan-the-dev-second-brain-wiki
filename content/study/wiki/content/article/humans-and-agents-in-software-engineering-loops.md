---
title: "Humans and Agents in Software Engineering Loops"
type: article
topics: ["agile-software-development", "ai"]
status: done
raw_source: raw/knowledge/article/humans-and-agents-in-software-engineering-loops/content.md
updated: 2026-08-19
---

# Humans and Agents in Software Engineering Loops

**Autore: Martin Fowler (martinfowler.com)**

L'articolo parte da una tesi semplice — lo scopo dello sviluppo software è trasformare idee in risultati (outcome) — per costruire un modello a due loop: il "why loop", che itera sulle idee e sul software prodotto, e lo "how loop", che crea, seleziona e usa artefatti intermedi (codice, test, strumenti, infrastruttura) per costruire il software. Lo how loop contiene a sua volta molti loop interni più piccoli, che possono seguire pratiche come design review o pattern architetturali (microservizi, CUPID).

## Delegare lo "how loop" agli agenti

Alcuni approcci — il "vibe coding" e certe interpretazioni dello Spec Driven Development — propongono che gli umani si concentrino solo sul why loop, lasciando lo how loop interamente agli LLM, che generano e testano codice senza intervento umano. L'attrattiva è evidente: l'umano si concentra sul risultato desiderato, lasciando i dettagli implementativi all'agente, e la qualità interna del codice conterebbe solo nella misura in cui influisce sulla qualità esterna. Ma Fowler nota un limite pratico: gli LLM non hanno a cuore la developer experience e possono produrre codebase sovracomplicati e "spaghetti", che nel lungo periodo diventano un problema anche per la qualità esterna.

## Dal "in the loop" al "on the loop"

Man mano che gli agenti generano codice più velocemente di quanto un umano possa ispezionarlo manualmente, il modello "umano nel loop" — che controlla e corregge al livello più basso — diventa un collo di bottiglia. La proposta è uno spostamento verso lo "shift left": dare agli agenti stessi la capacità di valutare la qualità del proprio output, mentre gli umani forniscono indicazioni su cosa cercare e come ottenerlo. L'insieme di specifiche, controlli di qualità e indicazioni di workflow che governano i diversi loop del processo di sviluppo viene chiamato **harness** dell'agente; costruirlo e mantenerlo è "Harness Engineering" — il modo in cui gli umani lavorano *sul* loop, non *dentro* il loop.

## Il "flywheel agentico"

Il livello successivo è lo "agentic flywheel": gli umani dirigono gli agenti affinché gestiscano e migliorino essi stessi l'harness, fornendo loro segnali sempre più ricchi — test, valutazioni, dati operativi — per ampliare ciò che possono analizzare autonomamente. Con la fiducia crescente nel sistema, raccomandazioni sopra una certa soglia di punteggio possono essere approvate e applicate automaticamente, avvicinandosi a uno scenario in cui l'intervento umano diretto non è più necessario per compiti standard e ripetitivi — pur restando l'obiettivo dichiarato quello di costruire sistemi robusti e "anti-fragili" che migliorano se stessi, non soluzioni una tantum.

## Il "ralph loop"

L'articolo chiude notando come il termine "ralph loop", nato per descrivere un'operazione autonoma di agenti, si sia colloquialmente allontanato dalla sua descrizione originale — che invece enfatizzava il ruolo cruciale dell'operatore umano nel dirigere gli agenti e guidarne i loop di miglioramento: un promemoria che l'autonomia degli agenti, anche quando cresce, non elimina la necessità di supervisione umana intenzionale.

## Vedi anche

- [[../concept/large-language-model|Large Language Model]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/humans-and-agents-in-software-engineering-loops/content.md`
- [martinfowler.com](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html)
