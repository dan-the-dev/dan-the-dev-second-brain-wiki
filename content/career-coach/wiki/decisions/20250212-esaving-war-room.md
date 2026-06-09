---
title: War room eSaving — gestire un cliente in produzione con feature rotte
date: 2025-02-12
company: muffin
outcome: mixed
updated: 2026-06-09
tags: [decision, muffin]
---

# War room eSaving — gestire un cliente in produzione con feature rotte

## Contesto
eSaving (cliente strategico, poi noto anche come Ardor) è uno dei primi grandi consulenti ad andare in produzione sulla piattaforma Muffin. Il giorno del go-live — intorno al day 48 (febbraio 2025) — emergono feature non funzionanti che bloccano il flusso operativo del cliente. Il team si trova a dover gestire un'emergenza in diretta, con un cliente che ha dipendenze reali sull'uso del sistema.

La situazione si ripete: dopo la pausa estiva, a day 122 (settembre 2025), eSaving torna in produzione in un secondo momento critico, di nuovo con problemi su feature non pienamente testate.

## Opzioni valutate
- Rallentare il go-live e rimandare a quando le feature sono stabili
- Procedere con il go-live e gestire i problemi in diretta ("war room")

## Scelta fatta
Dan e il team scelgono di procedere con il go-live e gestire i problemi in modo reattivo — modalità war room. Si aprono sessioni intensive di fix, coordinamento diretto con il cliente, prioritizzazione emergenziale delle segnalazioni.

## Outcome
Misto. Il cliente è operativo, ma con un costo elevato di stress, reattività e debito tecnico accumulato nella fretta dei fix. L'episodio diventa uno degli argomenti ricorrenti per spingere verso test automatici, qualità in uscita, e processi più strutturati di QA prima del rilascio. Il rinforzo di Qmates (Gianni, Fabio) nel 2025-2026 è in parte motivato dalla necessità di avere più copertura in questi momenti critici.

## Note
Questo tipo di "crisis launch" è un pattern ricorrente nel B2B SaaS in early stage: il primo cliente strategico che va in prod spesso scopre gap che i test interni non avevano individuato. La scelta di andare in war room invece di rimandare è discutibile ma comprensibile nel contesto del bisogno di dimostrare traction.
