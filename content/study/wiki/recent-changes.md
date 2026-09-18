---
title: "Ultime Modifiche"
type: recent-changes
updated: 2026-09-18
---

# Ultime Modifiche

Registro delle pagine toccate nell'ultima sessione di lavoro sul piano di studio — non uno storico cumulativo: a ogni nuova sessione questa pagina viene sovrascritta con il nuovo elenco, non integrata. Serve a ritrovare rapidamente cosa è cambiato senza dover confrontare a mano `raw/` e `wiki/`.

**Sessione del 2026-09-18 (quindicesima e ultima)** — Quindicesima e ultima sessione di lettura di *Peopleware: Productive Projects and Teams*: compilazione dei Capitoli 37 ("Chaos and Order"), 38 ("Free electrons") e 39 ("Holgar Danks"), che chiudono la **Parte 6** e il libro per intero. Diff rispetto agli appunti raw della quattordicesima sessione del 2026-09-17 (Capitoli 33-36, chiusura Parte 5). A seguire, nella stessa giornata, una seconda passata di coerenza ha verificato ed esteso tutte le pagine wiki correlate al libro ora completato — non solo quella dedicata.

## Raw aggiornati

- **Peopleware: Productive Projects and Teams** — `raw/knowledge/book/peopleware-productive-projects-and-teams/content.md`
  Corpo esteso con l'introduzione alla Parte 6, il Capitolo 37 (caos costruttivo, progetti pilota, coding war games, brainstorming), il Capitolo 38 (free electrons) e il Capitolo 39 (chiusura del libro, aneddoto di El Cordobés, Holger Danske). Frontmatter aggiornato: `status: done`, `study.completed_at: 2026-09-18`. Key Concepts, My Notes e My Takeaways completati (rimossi i placeholder `[... todo ...]` / `[... in progress ...]`).
- **El Cordobés** — `raw/knowledge/person/el-cordobes/content.md` (nuovo)
  Creato per la persona citata nell'aneddoto di chiusura del Capitolo 39. Nota trasparente in frontmatter: l'aneddoto specifico riportato da *Peopleware* non è stato rintracciato in una fonte primaria verificabile — la pagina riporta solo la biografia reale e verificata del torero.

## Pagina wiki compilata aggiornata

- **Peopleware: Productive Projects and Teams** — [[content/book/peopleware-productive-projects-and-teams|pagina]]
  Estesa con la Parte 6 per intero (Capitoli 37-39), con un box di approfondimento sulla corrispondenza fra i Coding War Games del libro e il moderno "hackathon" (origine 1999, doppia nascita indipendente a Calgary/OpenBSD e alla JavaOne di Sun Microsystems) e uno sulla figura storica di Holger Danske/Holgar Danks. "Concetti chiave" esteso con quattro nuovi bullet, "My Takeaways" con cinque nuovi punti (33-37). Banner aggiornato da "lettura in corso" a "lettura completata — 15 sessioni, dal 2026-08-23 al 2026-09-18". Frontmatter: `status: done`, `study.completed_at: 2026-09-18`.
- **El Cordobés** — [[content/person/el-cordobes|pagina]] (nuova)
  Biografia di Manuel Benítez Pérez, con nota trasparente sulla non verificabilità dell'aneddoto specifico citato dal libro.

## Pagine del piano e indice aggiornate

- **Learning Plan** — [[plan/learning-plan|pagina]]
  Topic "People & Software Management" segnato come completato (`Peopleware` → `status: done`). Aggiunta la sezione "Cosa leggere dopo Peopleware", con le 5 opzioni concrete già presenti nel piano (Infrastructure as Code, AI Engineering, Empowered, Finance for Managers, Just Enough Research) e un richiamo al Backlog. Nota storica sul disallineamento dell'agosto 2026 preservata, non riscritta.
- **`raw/learning/current.yml`** — Learning Item `Peopleware` → `status: done`.
- **Study LLM Wiki — Index** — [[index|pagina]]
  "Stato attuale" aggiornato per riflettere 1 Topic completato su 6 e il link alla sezione "Cosa leggere dopo Peopleware".

## Pagine Topic aggiornate (seconda passata di coerenza, stessa giornata)

Verifica esplicita di tutti i Topic dichiarati nel frontmatter della pagina compilata (`tech-lead`, `leadership`, `psychological-safety`, `technical-excellence`): solo `tech-lead` risultava aggiornato dalla sessione precedente, gli altri tre citavano *Peopleware* solo come link passivo (`leadership`) o non lo citavano affatto (`psychological-safety`, `technical-excellence`), nonostante il libro fosse dichiarato pertinente fin dall'inizio. Integrati tutti e tre con contenuto reale tratto dal libro ora completo, non solo con il link:

- **Tech Lead** — [[topics/tech-lead|pagina]]
  Box di approfondimento sostituito: da "appunti ancora uno stub" a sintesi diretta del libro completo, con collegamento fra il potere di veto sulla delivery (*Peopleware*) e lo slack di controllo (*Slack*, stesso autore), e fra brain time/body time e la Legge di Lister già citata. *(Aggiornato nella sessione precedente, 2026-09-17; solo la data di frontmatter è stata allineata oggi.)*
- **Psychological Safety** — [[topics/psychological-safety|pagina]] (nuova sezione)
  Aggiunta "Teamicidio: le tecniche, spesso involontarie, con cui i manager distruggono la sicurezza psicologica" — le nove tecniche di teamicidio dei Capitoli 23-24 (defensive management, burocrazia, separazione fisica, frammentazione del tempo, riduzione della qualità, scadenze fasulle, controllo delle cricche, poster motivazionali, straordinario), lo stile Open Kimono del Capitolo 27 come loro opposto, e la citazione "the right to be right is irrelevant; it's only the right to be wrong that makes you free" collegata esplicitamente alla definizione di Edmondson. Box di approfondimento sullo Skunk Works. Sintesi e "Vedi anche" estesi con i link a Peopleware, Tom DeMarco, Timothy Lister.
- **Leadership** — [[topics/leadership|pagina]] (nuova sezione)
  Aggiunta "Autorità, autonomia e cambiamento in Peopleware" — Open Kimono, potere di veto, free electrons (Capitolo 38), e il parallelo di chiusura del libro (l'aneddoto di El Cordobés, Capitolo 39) collegato esplicitamente alla definizione di leadership come arruolamento già discussa nel libro *Slack* dello stesso DeMarco. Nuova nota a piè di pagina `[^peopleware]`, "Vedi anche" esteso con DeMarco, Lister, El Cordobés.
- **Technical Excellence** — [[topics/technical-excellence|pagina]] (nuova sezione)
  Aggiunta "La qualità come standard del team, non del mercato: l'argomento di Peopleware" — il Capitolo 4 ("Quality, if time permit"): flight from excellence, Philip Crosby e *Quality Is Free*, l'esempio giapponese (Tajima/Matsubara), il potere di veto collegato alla stessa argomentazione economica già presente nel topic tramite Fowler. Box di approfondimento su Crosby. Sintesi, indice delle fonti e "Vedi anche" estesi.

## Vedi anche

- [[content/book/peopleware-productive-projects-and-teams|Peopleware: Productive Projects and Teams]]
- [[content/person/el-cordobes|El Cordobés]]
- [[content/person/tom-demarco|Tom DeMarco]]
- [[content/person/timothy-lister|Timothy Lister]]
- [[plan/learning-plan|Learning Plan]]
- [[topics/tech-lead|Tech Lead]]
- [[topics/leadership|Leadership]]
- [[topics/psychological-safety|Psychological Safety]]
- [[topics/technical-excellence|Technical Excellence]]
