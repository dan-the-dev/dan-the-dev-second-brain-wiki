# BUNDLE type=resource count=1



========8<======== ID: github-deanpeters-product-manager-skills-product ========
TITLE: GitHub - deanpeters/Product-Manager-Skills: Product Management skills framework built on battle-tested methods for Claude Code, Cowork, Codex, and AI agents.
ROLE/META: 
TOPICS: ['product-development']
SOURCE: {'type': 'website', 'url': 'https://github.com/deanpeters/Product-Manager-Skills'}
---BODY---

# GitHub - deanpeters/Product-Manager-Skills: Product Management skills framework built on battle-tested methods for Claude Code, Cowork, Codex, and AI agents.

## Summary

Detailed summary


## Introduction and Overview of the Product Manager Skills Framework
- The Product Manager Skills framework is a collection of 42 battle-tested frameworks designed to teach AI agents how to perform product management work professionally, with the goal of enabling users to work faster and more consistently at a higher strategic level.
- The framework is compatible with various AI agents, including [[claude-language-model|Claude]] Code, Cowork, [[openai-codex|OpenAI Codex]], [[chatgpt|ChatGPT]], and [[gemini-language-model|Gemini]], and is built on methods from renowned product management experts and organizations, such as Teresa Torres, [[geoffrey-moore|Geoffrey Moore]], [[amazon-company|Amazon]], and [[mitre-corporation|MITRE]].
- The framework provides AI agents with the knowledge and skills to structure a Product Requirements Document (PRD), ask relevant questions to stakeholders, use appropriate prioritization frameworks, conduct customer discovery interviews, and break down epics using proven patterns.
- The framework has undergone updates, including the v0.4 Facilitation Protocol Fix, which addressed a regression in interactive flows and introduced a standardized facilitation protocol, as well as the addition of new features such as mandatory session heads-up, context dump bypass, and best guess mode.

## Framework Features and Reusability
- The framework is designed to be reusable and adaptable, allowing users to make sharper decisions, create better documentation, and achieve improved outcomes, and is available as an open-source repository, with accompanying documentation and resources, including a skills repository and a prior prompts repository.
- Before using any skill in the framework, users are advised to review the skill file and linked resources, prefer least privilege, and ensure that skills do not require secrets or network access unless explicitly documented, in order to maintain safety and evaluation standards.

## Framework Announcements and Licensing
- The framework has been announced on various platforms, including LinkedIn and Substack, with accompanying article drafts and announcement indexes, and is available under the CC BY-NC-SA 4.0 license, with credits given to Codex for identifying and implementing the facilitation protocol fix.
- The document provides a framework for product management skills, including a section on creating and refining skills with realistic prompts, and it is recommended to do a quick dry run before refining the name and description for better discoverability.

## Skill Creation and Script Utilities
- Some skills include optional scripts, such as deterministic helpers for calculations or formatting, which can be found in the scripts/ folder and should be audited before running, avoiding network calls or external dependencies, with examples including market-sizing.py and user-story-template.py.
- The skill creation utility provides several scripts to assist in creating and managing skills, including add-a-skill.sh, build-a-skill.sh, find-a-skill.sh, test-a-skill.sh, and zip-a-skill.sh, which can be used to generate complete skill files, validate metadata, and build upload-ready zip files.
- The add-a-skill.sh script can be used to create new skills from notes or frameworks, and it analyzes content, suggests skill types, generates complete skill files with examples, validates metadata for marketplace compliance, and updates documentation automatically.
- The usage of the scripts is explained, including running them from a file, using a guided wizard, finding a skill, testing a skill, building [[claude-language-model|Claude]] upload zip files, and building curated starter packs, with options to specify skills, types, or presets, and to output files to a specific directory.

## Upload Process and Agent Support
- The document also provides a checklist for Claude web upload, including keeping frontmatter name and description within character limits, ensuring the skill folder name matches the name value, and using scripts to generate upload-ready zip files, as well as advanced options for unpacked upload-ready folders and validating metadata.
- Additionally, the document mentions that agent support is available for Claude Code, Manual mode, and custom adapters via scripts/adapters/ADAPTER_TEMPLATE.sh, and that more information can be found in the Add-a-Skill Utility Guide and Building PM Skills documents.

## Framework Architecture and Skill Types
- The product management skills framework is organized into a three-tier architecture, consisting of Workflow Skills, Interactive Skills, and Component Skills, which build on each other to provide a comprehensive approach to product management.
- The 42 skills are categorized into three types: Workflow Skills, which comprise 5 skills that complete end-to-end PM processes, such as running a product strategy session, over a timeline of 2-4 weeks; Interactive Skills, which comprise 18 skills that provide guided discovery with adaptive questions, such as determining which prioritization framework to use, over a timeline of 30-90 minutes; and Component Skills, which comprise 19 skills that offer templates for specific PM deliverables, such as writing a user story, over a timeline of 10-30 minutes.
- Component Skills provide reusable templates for creating specific PM deliverables, such as user stories, positioning statements, and product requirements documents (PRDs), and can be used when a standard template or format is needed for a specific deliverable.
- Interactive Skills provide multi-turn conversational flows where AI asks 3-5 adaptive questions, then offers smart recommendations based on the user's context, and can be used when help is needed in deciding which approach to take or gathering context before executing a task.
- Workflow Skills orchestrate multiple component and interactive skills over days or weeks to complete end-to-end PM processes, and can be used to run complete product management processes, such as a product strategy session.
- The skills framework is designed to work together, with Workflow Skills orchestrating Interactive Skills, which in turn use Component Skills, to provide a comprehensive and structured approach to product management.

## Documentation and Use Cases
- The framework is supported by documentation, including the "Using PM Skills with [[claude-language-model|Claude]]" guide, which provides information on how to use the skills framework with Claude, a code-based AI agent, and can be accessed through the GitHub ZIP upload flow.
- The product management skills framework is designed to be used when running a full product management workflow from start to finish, which includes strategy sessions, discovery cycles, roadmap planning, and PRD creation, and can be applied to various product management tasks, such as aligning stakeholders on product strategy.
- The framework provides a comprehensive catalog of 42 skills, which are divided into two categories: Component Skills and Interactive Skills, with 19 Component Skills and 18 Interactive Skills, and each skill has a specific use case, such as company research, customer journey mapping, and finance metrics quick reference.

## Component and Interactive Skills Examples
- The Component Skills include skills such as company-research, which is used for deep-dive competitor or company analysis, customer-journey-map, which is used to map customer experience across all touchpoints using the NNGroup framework, and eol-message, which is used to communicate product or feature deprecation gracefully, and other skills like epic-hypothesis, finance-metrics-quickref, and jobs-to-be-done.
- The Interactive Skills include skills such as acquisition-channel-advisor, which evaluates acquisition channels using unit economics, customer quality, and scalability, agent-orchestration-advisor, which designs multi-agent workflows, and ai-shaped-readiness-advisor, which assesses if an organization is AI-first or AI-shaped, and other skills like business-health-diagnostic, context-engineering-advisor, and customer-journey-mapping-workshop.

## Methodologies and Frameworks Integration
- The framework also provides guidance on how to use these skills, such as running a product-strategy-session, which guides you through positioning, problem framing, solution exploration, and roadmap planning over 2-4 weeks, and using specific frameworks and methodologies, such as the [[geoffrey-moore|Geoffrey Moore]] framework for positioning statements, the [[amazon-company|Amazon]] Working Backwards approach for press releases, and the [[dean-peters|Dean Peters]] PoL framework for defining validation experiments.
- The skills framework is built on battle-tested methods and is designed to be used with [[claude-language-model|Claude]] Code, Cowork, Codex, and AI agents, and provides a comprehensive set of skills and tools for product managers to use in their daily work, including skills like pestel-analysis, pol-probe, and proto-persona, and interactive skills like discovery-interview-prep, epic-breakdown-advisor, and feature-investment-advisor.

## Additional Skills and Workflow Tools
- The Product Manager Skills framework is built on battle-tested methods for various AI agents, including Claude Code, Cowork, Codex, and [[chatgpt|ChatGPT]], providing a comprehensive set of skills for product managers to deliver effective results.
- The framework includes a range of skills, such as finance-based pricing advisor, lean UX canvas, opportunity solution tree, and prioritization advisor, which can be used to evaluate pricing changes, set up hypothesis-driven planning, generate opportunities and solutions, and recommend the right prioritization framework.
- The framework also includes workflow skills, such as discovery process, PRD development, product strategy session, roadmap planning, and skill authoring workflow, which can be used to complete discovery cycles, develop structured PRDs, create full product strategies, plan strategic roadmaps, and author new skills.
- Additionally, the framework is developing new skills, including dangerous animals of product management, pricing for product managers, classic business strategy frameworks, storytelling for product managers, prompt building for product managers, and nightmares of product management, which can be used to negotiate with stakeholders, develop value-based pricing strategies, apply business strategy frameworks, and prevent and mitigate product management nightmares.

## Usage Methods and Flexibility
- To use the framework, users can start with the PM Skills Rule-of-Thumb Guide and then use various methods, such as opening a conversation with [[claude-language-model|Claude]], using Claude Code, or discovering and installing skills with npx, to apply the skills to their work.
- The framework provides detailed documentation, including guides for using PM skills with Claude, Codex, and [[chatgpt|ChatGPT]], as well as information on how to import skills as knowledge modules and invoke them via natural language with Cowork or other agents.
- The framework is designed to be flexible and adaptable, allowing users to discover and install skills using npx, and to use local workspace paths, GitHub-connected Codex on ChatGPT, or discover and install skills directly with npx, making it easy to integrate the skills into their existing workflows.

## Tools, Resources, and Real-World Applications
- The Product Manager Skills framework is built on battle-tested methods and provides a comprehensive guide for product managers, including a rule-of-thumb guide for non-technical setup choices, marketplace strategy, and submission runbook.
- The framework includes various tools and resources, such as the PM Tooling Operations Charter, Add-a-Skill Utility Guide, and Building PM Skills, which help product managers to distill sources into agent-ready skills and automate the process of generating and validating new skills.
- The framework provides real-world use cases for product managers, including aligning stakeholders on product strategy, validating customer problems, testing hypotheses, and creating roadmaps, and offers interactive tools such as the pol-probe-advisor, ai-shaped-readiness-advisor, and context-engineering-advisor to support these use cases.

## Skill Design Principles and Philosophy
- The skills provided in the framework are designed to be reusable, consistent, and professional, and are optimized for AI comprehension, with each skill following a standard format that includes purpose, key concepts, application, examples, common pitfalls, and references.
- The framework is based on proven methods from experts such as [[geoffrey-moore|Geoffrey Moore]], Jeff Patton, Teresa Torres, [[amazon-company|Amazon]], Richard Lawrence, and [[mitre-corporation|MITRE]], and is built on decades of PM consulting experience across various industries, including healthcare, finance, manufacturing, and tech.
- The framework is designed to be practical, example-rich, and free of fluff, with a focus on outcome-driven, evidence-based, and clear solutions, and provides opportunities for contribution and feedback from the community, with guidelines outlined in the CONTRIBUTING.md file.

## Community Contributions and Licensing Details
- The philosophy behind the framework is centered on principles such as outcome-driven over output-driven, evidence over vibes, clarity beats completeness, and examples beat explanations, with a focus on providing simple, usable, and effective solutions for product managers.
- The document 'GitHub - deanpeters/Product-Manager-Skills' provides a product management skills framework built on battle-tested methods for various AI agents, including [[claude-language-model|Claude]] Code, Cowork, Codex, and AI agents, with the goal of helping product managers work smarter with AI.
- The framework is supported by related resources, including Product Manager Prompts for task-specific prompts, Productside for AI-powered product management training and consulting, and Dean Peters' LinkedIn essays on AI-amplified product work.
- The document is licensed under CC BY-NC-SA 4.0, which allows for non-commercial use with share-alike, and users can report bugs or suggest features through GitHub Issues or connect with [[dean-peters|Dean Peters]] on LinkedIn.

## Release History and Contributors
- The latest release, v0.4, includes fixes to a facilitation protocol regression, promotes workshop-facilitation to the canonical source of truth, and adds new features such as consistent opening heads-up and best-guess mode.
- The previous release, v0.3, introduced 42 total skills, including Phase 7 finance skills and a new skill-authoring-workflow, as well as new skill tooling and onboarding docs for various AI agents.
- The framework was built by Dean Peters, Principal Consultant and Trainer at Productside.com, with the help of Anthropic [[claude-language-model|Claude]] and [[openai-codex|OpenAI Codex]], and is designed to provide a comprehensive skills framework for product managers working with AI.

## Connections

- [[claude-language-model]]
- [[openai-codex]]
- [[chatgpt]]
- [[gemini-language-model]]
- [[geoffrey-moore]]
- [[amazon-company]]
- [[mitre-corporation]]
- [[dean-peters]]

## Sources

- [website](https://github.com/deanpeters/Product-Manager-Skills)

