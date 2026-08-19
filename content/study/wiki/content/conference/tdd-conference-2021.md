---
title: "TDD Conference 2021"
type: conference
year: 2021
topics: [tdd, agile-software-development, technical-excellence]
raw_source: raw/knowledge/conference/tdd-conference-2021/content.md
updated: 2026-08-19
---

# TDD Conference 2021

**First International TDD Conference** · sabato 10 luglio 2021 · [registrazione integrale](https://youtu.be/-_noEVCR__I) · [tddconf.com](http://tddconf.com/)

> [!info] Approfondimento aggiunto in fase di compilazione
> È stata la prima edizione internazionale di una conferenza interamente dedicata al Test-Driven Development. Gli interventi sono stati successivamente raccolti in forma scritta da Codurance nel "TDD Knowledge Book" (Matheus Marabesi, ottobre 2021), e singolarmente riassunti da Maximiliano Contieri sul proprio blog e su DEV Community.
> Fonti: [Codurance — TDD Knowledge Book](https://www.codurance.com/publications/tdd-knowledge-book-insights-from-the-first-tdd-conference) · [maximilianocontieri.com — TDD Conference 2021, all talks](https://maximilianocontieri.com/tdd-conference-2021-all-talks)

## TDD all the things: BDD come lente migliore

Un filo conduttore della conferenza è che il BDD sia una definizione migliore del TDD stesso, perché sposta il discorso dal "testare" al "descrivere comportamento" — anche negli unit test, strutturando il pensiero con Given/When/Then.

Una sessione ha usato una metafora insolita ma efficace: **le persone hanno comportamenti pre-esistenti, sono come legacy code**. Come per il codice legacy, prima di introdurre un cambiamento bisogna "coprire" il comportamento esistente (nel caso delle persone: amplificare i positivi), poi descrivere il comportamento desiderato (il test che fallisce) e infine ottenerlo (farlo passare). I tre modelli di feedback discussi — amplificare i positivi, il "sandwich model" fatto bene, la radical candour — sono presentati esplicitamente come tecniche di leadership prima ancora che di TDD.

Il **Dreyfus Model** è stato usato per definire i livelli di competenza in TDD, dal novizio (copia e modifica test esistenti, scrive test dopo il codice) all'esperto, passando per chi inizia a scrivere test prima del codice e usa i test per guidare il design (competent), fino a chi insegna TDD e sa quando usare invece lo *spike-and-stabilize* (knowledgeable practitioner).

## Perché potresti non voler usare il TDD

Una sessione ha affrontato onestamente le ragioni per cui il TDD è difficile da adottare: è difficile iniziare (i test rossi spaventano, ma vanno visti come alleati — test sempre verdi nel lungo periodo sono un segnale di allarme, non di salute), è difficile seguirne il processo (la tentazione di scrivere più codice del necessario quando si è già sicuri della soluzione), ed è difficile fare il salto di livello dai kata al codice di produzione reale, con i suoi vincoli di strumenti, requisiti, processi e persone.

## Il TDD Manifesto

Presentato in occasione del ventesimo anniversario dell'Agile Manifesto, il [TDD Manifesto](https://tddmanifesto.com/) elenca cinque valori per contrasto: baby step invece di cambi su larga scala, refactoring continuo invece di miglioramenti tardivi, test automatici invece di script di test manuali, documentazione eseguibile invece di documenti statici, codice minimale invece di soluzioni "gold-plated". Ribadisce anche cosa il TDD *non* è: non è una strategia di testing, non è un principio di design, non è pensato per lo shell imperativo, non è per test di performance/UX, non risolve problemi umani.

## TDD su sistemi legacy

Definizione ribadita in questa sessione: tecnica di sviluppo software basata su brevissimi cicli di programmazione, in cui i requisiti diventano casi di test automatici concreti e specifici, implementando sempre la soluzione più semplice (l'hard-coding iniziale è incoraggiato). Tra i benefici elencati: testabilità, design più semplici (KISS, YAGNI, evitare il *gold plating*), isolamento dei fallimenti, modularizzazione, feedback immediato. Punto importante: **il TDD non garantisce di per sé un buon design** — richiede comunque giudizio.

## Collegamenti

- Topic: [[../topics/tdd|TDD]] · [[../topics/agile-software-development|Agile Software Development]] · [[../topics/technical-excellence|Technical Excellence]]
- Contenuti collegati: [[../book/test-driven-development-by-example|Test-Driven Development: By Example]] · [[../book/agile-technical-practices-distilled-a-learning|Agile Technical Practices Distilled]] · [[../article/breaking-through-that-first-tdd-block|Breaking Through That First TDD Block]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/conference/tdd-conference-2021/content.md`
- Registrazione: [youtu.be/-_noEVCR__I](https://youtu.be/-_noEVCR__I)
