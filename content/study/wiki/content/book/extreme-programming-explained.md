---
title: "Extreme Programming Explained"
type: book
author:
  - "Kent Beck"
topics: ["extreme-programming"]
status: done
study:
  method: full_reading
  started_at: "2020-02-17"
  completed_at: "2020-03-13"
raw_source: raw/knowledge/book/extreme-programming-explained/content.md
updated: 2026-08-19
---

# Extreme Programming Explained

**Autore: [[../person/kent-beck|Kent Beck]]**

Il testo fondativo dell'Extreme Programming, inquadrato fin dalle prime righe non come una raccolta di pratiche tecniche, ma come un **cambiamento sociale**: abbandonare abitudini che erano adattive in passato ma che oggi ostacolano il miglior lavoro possibile. XP viene definito su quattro livelli concentrici: una filosofia fondata sui valori di comunicazione, feedback, semplicità, coraggio e rispetto; un corpo di pratiche che si amplificano a vicenda; un insieme di principi — tecniche intellettuali per tradurre i valori in pratiche quando non ne esiste una pronta all'uso; e una comunità che condivide questi valori.

## I cinque valori

**Comunicazione**: la causa più comune dei problemi in un team non è la mancanza di comunicazione, ma la mancanza di *conoscenza* — e quando emerge un problema, vale la pena chiedersi se derivi da un deficit comunicativo. **Semplicità**: il valore più intellettualmente esigente di XP — creare un sistema abbastanza semplice da risolvere solo il problema di oggi, guidati dalla domanda "qual è la cosa più semplice che potrebbe funzionare?". **Feedback**: poiché non sempre sappiamo fare le cose bene la prima volta, e ciò che è giusto oggi può essere sbagliato domani, i team XP lavorano per generare quanto più feedback possibile, il più rapidamente possibile — accorciando il ciclo a minuti o ore invece che settimane o mesi. **Coraggio**: agire efficacemente di fronte alla paura — un valore pericoloso se non bilanciato dagli altri, ma che alimenta comunicazione, semplicità e feedback quando è ben calibrato. **Rispetto**: se i membri del team non si curano l'uno dell'altro e di ciò che stanno facendo, XP semplicemente non funziona.

## I principi: il ponte fra valori e pratiche

Beck introduce i principi come ponte fra valori (troppo astratti per guidare direttamente il comportamento) e pratiche (troppo specifiche per situazioni diverse). Fra i più distintivi: **Umanità** — il software è scritto da persone, che hanno bisogno di sicurezza di base, senso di realizzazione, appartenenza, crescita e intimità; ignorare questo ha un costo alto sia umano che di business. **Economia** — lo sviluppo software non dovrebbe puntare al "successo tecnico" fine a sé stesso, ma tenere conto del valore temporale del denaro e del valore opzionale di sistemi e team. **Beneficio reciproco** — il principio più importante e più difficile da rispettare: cercare pratiche che beneficino me ora, me in futuro, e il cliente insieme (i test automatizzati sono l'esempio canonico: mi aiutano a progettare meglio oggi, e aiuteranno i programmatori futuri).

**Miglioramento**: in XP, "perfetto" è un verbo, non un aggettivo — non esiste design perfetto, ma si può *perfezionare* il processo, il design, le storie: non aspettare la perfezione per iniziare. **Qualità**: la qualità non è una variabile di controllo — i progetti non vanno più veloci accettando qualità più bassa; spingere la qualità verso l'alto spesso produce consegne più rapide, non più lente. **Baby Steps**: preferire tanti passi piccolissimi a pochi passi grandi. **Responsabilità accettata**: la responsabilità non si può assegnare, si può solo accettare.

## Le pratiche primarie

Fra le pratiche primarie: **Sit Together** (lavorare in uno spazio aperto condiviso, riconoscendo che più tempo faccia a faccia produce più umanità e produttività — pur ammettendo che team distribuiti possano fare XP); **Whole Team** (includere tutte le competenze necessarie al successo del progetto, in modo dinamico); **Pair Programming** (tutto il codice di produzione scritto da due persone insieme — un dialogo continuo che tiene entrambi concentrati, genera idee, e responsabilizza reciprocamente rispetto alle pratiche del team; la maggior parte dei programmatori regge non più di cinque-sei ore al giorno in coppia); **Stories** (pianificare per unità di funzionalità visibili al cliente, con stima anticipata come momento di interazione fra prospettiva di business e tecnica); **Weekly Cycle** e **Quarterly Cycle** (pianificazione settimanale e trimestrale, quest'ultima dedicata a riflettere su temi e allineamento con gli obiettivi più ampi); **Ten-Minute Build** (costruire l'intero sistema ed eseguire tutti i test in dieci minuti, un ideale verso cui avvicinarsi gradualmente); **Continuous Integration** (integrare e testare i cambiamenti al massimo ogni paio d'ore, perché lo sviluppo in team non è un problema di "dividi e conquista" ma di "dividi, conquista e integra"); **Test-First Programming** (scrivere un test automatico che fallisce prima di cambiare qualunque codice — affronta contemporaneamente scope creep, accoppiamento/coesione, fiducia nel team e ritmo di lavoro); **Incremental Design** (investire nel design ogni giorno, mantenendo basso il costo del cambiamento nel tempo).

## Teoria dei vincoli e scalabilità

Beck applica la Teoria dei Vincoli — illustrata con l'esempio della lavatrice/asciugatrice/piegatura del bucato — per ricordare che in ogni sistema esiste tipicamente un solo vincolo alla volta: per migliorare il throughput complessivo bisogna prima trovarlo, poi risolverlo, senza illudersi che migliorare una fase non-vincolante aiuti davvero. Sul tema della scalabilità di XP (numero di persone, investimento, dimensione dell'organizzazione, tempo, complessità del problema e della soluzione, conseguenze del fallimento), la risposta di Beck è pragmatica: quando un team sembra dover crescere, spesso il problema si può ancora risolvere con un team piccolo, o scomponendolo in sottoproblemi affrontabili da più team piccoli.

## Purezza: "è il mio team extreme?"

Il libro chiude senza una risposta binaria alla domanda se un team sia "davvero" XP: la domanda giusta è se i membri del team stiano facendo, in modo sostenibile, tutte le cose che hanno senso per loro — valori, principi e pratiche esistono per fornire guida, sfida e responsabilizzazione, non come checklist di conformità.

## Vedi anche

- [[../person/kent-beck|Kent Beck]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/extreme-programming-explained/content.md`
