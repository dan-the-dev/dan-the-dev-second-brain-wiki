---
title: "Is High Quality Software Worth the Cost?"
type: article
topics: ["agile-software-development", "product-development", "technical-excellence"]
status: done
raw_source: raw/knowledge/article/is-high-quality-software-worth-the-cost/content.md
updated: 2026-08-19
---

# Is High Quality Software Worth the Cost?

**Autore: [[../person/martin-fowler-software-engineer|Martin Fowler]]**

Articolo che affronta di petto il dibattito, ricorrente in ogni progetto software, fra investire tempo nella qualità e rilasciare più funzionalità — un dibattito che, nota Fowler, viene quasi sempre vinto dalla pressione a consegnare, a scapito di architettura e qualità del codice. La tesi, rivolta esplicitamente anche a un pubblico non tecnico (i "clienti" del team di sviluppo), è controintuitiva: il software di alta qualità è più economico da produrre, non più costoso.

## Qualità esterna e qualità interna

Fowler distingue la qualità **esterna** del software (interfaccia utente, affidabilità — ciò che utenti e clienti possono percepire) dalla qualità **interna** (l'organizzazione del codice sorgente, invisibile dall'esterno ma con impatto diretto su manutenibilità e costo di sviluppo futuro). Due applicazioni possono avere la stessa qualità esterna e una qualità interna completamente diversa — ed è questo secondo asse, non il primo, il centro dell'articolo.

## Il concetto di "cruft"

Poiché gli sviluppatori passano la maggior parte del tempo a modificare codice esistente, la qualità interna determina quanto velocemente si riesce a capire come funziona l'applicazione, aggiungere funzionalità e apportare modifiche senza introdurre errori. Fowler chiama **cruft** la differenza fra il codice attuale e la sua versione ideale: più cruft si accumula, più rallenta lo sviluppo, aumenta la probabilità di errori e compromette la competitività del prodotto — perché ai clienti interessa la velocità con cui arrivano nuove funzionalità, anche se non vedono direttamente il codice che le produce.

L'articolo illustra il punto con un esempio narrativo — due sviluppatori, Rebecca (alta qualità interna) e il narratore (bassa qualità interna) — che partono dallo stesso punto ma divergono nel tempo: Rebecca riesce ad aggiungere funzionalità rapidamente ed economicamente, guadagnando un vantaggio competitivo, mentre il narratore fatica sempre di più a modificare il proprio software e perde clienti a favore dell'applicazione più ricca di funzionalità di Rebecca.

> [!info] Approfondimento aggiunto in fase di compilazione
> Questo articolo è la versione estesa e aggiornata di quella che Fowler stesso chiamava "Design Stamina Hypothesis" — l'idea, illustrata dal celebre grafico a due curve (funzionalità cumulate nel tempo, con e senza design/qualità interna), secondo cui la qualità interna non ha un costo netto ma un ritorno economico positivo che si manifesta dopo poche settimane di sviluppo continuo.

## Perché il trade-off costo/qualità non si applica alla qualità interna

Il nucleo economico dell'articolo: mentre per la qualità esterna vale il normale trade-off "più qualità, più costo" (es. un'interfaccia utente più curata costa di più), per la qualità interna il rapporto è rovesciato — trascurarla nel breve termine può sembrare più produttivo, ma quel vantaggio dura tipicamente solo poche settimane, secondo l'esperienza di sviluppatori esperti citati da Fowler, prima che le curve si incrocino e l'alta qualità interna diventi nettamente più conveniente. Anche i team migliori producono cruft — la differenza è che ne producono meno e ne rimuovono a sufficienza per continuare ad aggiungere funzionalità rapidamente, tramite test automatizzati che fanno emergere i problemi in fretta e refactoring frequente.

## Perché è difficile spiegarlo al management

Fowler chiude notando come gli sviluppatori spesso giustifichino l'attenzione alla qualità interna invocando il "professionismo" — un argomento che implicitamente suggerisce che la qualità costi di più, quando in realtà l'argomento corretto è economico: l'alta qualità interna *riduce* il costo delle funzionalità future. Capire questa relazione controintuitiva fra costo e qualità interna è, secondo l'autore, essenziale per sviluppare software con la massima efficienza.

## Vedi anche

- [[../person/martin-fowler-software-engineer|Martin Fowler]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/is-high-quality-software-worth-the-cost/content.md`
- [martinfowler.com](https://www.martinfowler.com/articles/is-quality-worth-cost.html)
