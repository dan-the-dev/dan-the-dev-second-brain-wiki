# BUNDLE type=conference count=2



========8<======== ID: italian-agile-days-2021 ========
TITLE: Italian Agile Days 2021
AUTHOR: None
TOPICS: ['agile-software-development']
SOURCE: {'type': 'website', 'url': ''}
STUDY: {'method': 'attend', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/conference/italian-agile-days-2021/content.md
---BODY---

# Italian Agile Days 2021

## Summary

Psychological safety is defined as an environment where people believe that candor is welcome.

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Sessions

[https://www.notion.so/dan-the-dev/IAD-2021-d6cd93a2837f4c2bad86fa559a3dad5f?source=copy_link](https://www.notion.so/dan-the-dev/IAD-2021-d6cd93a2837f4c2bad86fa559a3dad5f?source=copy_link)


### Unconference

#### Che Agile sarebbe senza Psychological safety
Psychological safety is defined as an environment where people believe that candor is welcome.

Psychological safety is present when colleagues trust and respect each other and feel able, even obligated, to be candid. The belief that the team is safe for interpersonal risk-taking.

[Psychological Safety](https://blog.codiceplastico.com/psychological-safety)


#### Il progetto Aristotele: le cinque caratteristiche di un team efficiente
> *Il tutto e maggiore della somma delle parti [Aristotele]*

Se sommi tutte le componenti ottieni piu di quello che ti aspetti.

**Il progetto Aristotele**: studio di Google per capire i tratti comuni dei team piu efficienti.


##### Variabili non significative
- collocazione dei membri (sedere insieme)
- sistema decisionale basato sul consenso (democrazia)
- loquacita dei membri del team
- performance individuale o intelligenza dei singoli membri
- carico di lavoro
- anzianita di servizio o anni di esperienza
- dimensione del team
- mandato (anni di lavoro in azienda)
A sorpresa c'e anche l'intelligenza individuale, ma intelligente ≠ capace di giocare di squadra ≠ team piu efficiente.


##### Le 5 caratteristiche identificate
1. **Sicurezza psicologica**: "*Se commetto un errore nei confronti del team, questo non sara usato contro di me" - capacita di fare tentativi e di sbagliare - SuperMario effect*
2. **Affidabilita**: "*quando un membro del mio team dice che fara qualcosa, lo fara in tempo e bene*" - si puo sempre dire "non ce la faccio" ma se dico che lo faccio, significa che lo faro
3. **Struttura e chiarezza**: "Il team ha chiari obiettivi, una struttura che lo aiuta a raggiungerli e un efficiente processo decisionale"
4. **Scopo e significato**: "Il lavoro che faccio per il team e importante per me e mi da un senso di appagamento" - si intende a livello individuale, ovviamente rispetto al lavoro di tutto il team
5. **Impatto**: "*io capisco come il lavoro del nostro team contribuisce agli obiettivi dell'organizzazione*"




[01.05 L'Essenziale 05 - Il Progetto Aristotele - Le cinque caratteristiche di un team efficente](https://open.spotify.com/episode/2joftNtyZQWSTWu4NBdlI5?si=7nLKNet3RIKsGWhLsA7wJQ)


### Conference

#### L'illusione dell'ortogonalita - la sfiga non esiste (A. Brandolini)
Cose che in teoria funzionano ma a volte no:

- TDD ![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b3dcb6fc-b389-472f-9f95-e8d838c31f9a/Screenshot_2021-11-13_at_09.10.26.png)
In quali contesti quindi: nei progetti con un solo developer oppure dove il team e allineato sull'approccio TDD. Mancava un ingrediente: i confini definiti, regole a livello di team. ![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77aa4f07-6fa9-4108-b7a0-bab8bf85f0c2/Screenshot_2021-11-13_at_09.14.26.png)
Note: **I confini contano per far funzionare le pratiche!** Rifacendosi al DDD, i confini sono i bounded context: porzione di elemento software che ha un singolo scopo e quindi e' piu facile ottimizzare per un solo obiettivo.
    - limitano il rischio
    - liberta di sperimentare
    - focus su obiettivo
    - team responsabilizzato
    - il contesto serve a capire se una cosa puo funzionare
    - guardiamo a quello che nei content (blog post, articoli, libri, ecc) e' sottinteso
    - per capire il sottinteso devo provare contesti diversi o confrontarmi con colleghi'
    - **Non sempre funziona pero**:
        - "I miei colleghi non fanno TDD" → copertura a macchia di reparto, commit distruttivi di altri, WTF!
    - **Se fatto bene**: design migliore, codice affidabile, disponibile alle evoluzioni, stime piu precise, aperti ad opportunita
    - quindi TDD non e una pratica strettamente ingegneristica, ha impatti a livello di ansia, pianificazione, reattivita di business
Parliamo delle stime: possono funzionare! In quale contesto?

- le attivita senza dipendenze esterne sono molto piu facili da stimare
- le dipendenze ci impediscono di avere stime precise
- i confini contano ma sono difficili da difendere
Se abbiamo sistemi con piu team, le dipendenze possono rendere il problema molto forte.

Da dove vengono le dipendenze:

- il mammut nel guardaroba: data-driven design






Non abbiamo nessuna notizia di aziende che cerchino aiuto per uscire da architettura esagonale. Non perche sia perfetta ma perche e facile uscirne.

Problema con database e stored procedures:

- non tutte le dipendenze sono uguali
- ci sono aziende che hanno questo problema da 20 anni
- possiamo evitare che si ripeta


1. Non possiamo risolvere i problemi da specialisti
2. Non possiamo risolvere i problemi da soli
3. i dettagli fanno la differenza
Es: su una board fisica i vincoli sono fisici, su una board digitale no. **NON E UGUALE**

1. proteggiamo i confini
2. minimizziamo le dipendenze
3. massimizziamo il lavoro non fatto

#### Neuroscienze del feedback nel coaching - (Pierpaolo Muzzolon)
Platone diceva che tra noi c'e una battaglia tra tre elementi:

- istinti fondamentali
- emozioni
- pensiero razionale
Video dal film "Interstate 60".

Le parole sono potenti.


#### "Working software" is not enough, now we need "Working products" - (Lorenzo Cassulo)
Different context, same old problems:

- contract game tra stakeholder prodotto e team
- feedback business lenti
- "voi non conoscete il business noi si"
- ...
Agile Manifesto ha ormai 20 anni. A good software can be very bad in supporting change.

Le piramidi sono stupende strutture architettoniche costruite migliaia di anni fa, ma che ci siamo dimenticati come le abbiamo costruite.

Il software che produciamo adesso deve sostenere l'azienda per tutta la sua vita.

come passare allo sviluppo di prodotto:

1. la prima cosa da fare e capire chi e il vero cliente e assicurarci che l'informazione sia condivisa tra tutti: non ci possono essere customer differenti, deve essere uno solo:
2. creare una definizione comune di "valore" per un dato cliente, che e soggettivo e cambia nel tempo: spesso e quantificabile in termini economici o comunque si puo capire se qualcosa ha piu o meno valore e discuterne: in particolare identificare cosa non ha valore e quindi non va fatto: il disallineamento con gli stakeholder su cosa fare spesso e colpa del disallineamento di un valore comune
Dobbiamo quindi creare una organizzazione product-driven, una Product Community: non un team, ma un gruppo di persone che collaborano a generare valore per il cliente, stakeholder inclusi.

Questa visione ha bisogno di essere supportata da aspetti tecnologici e dall'architettura software, anche e sopratutto per la collaborazione con le altre Product Community dell'azienda.

Questo e un ambiente collaborativo che puo cambiare nel tempo ed evolvere col business: grazie alla piattaforma di prodotto l'azienda puo testare e cambiare il cliente, il valore, ecc.

Ovviamente non e facile: e un **enorme cambiamento culturale**!

Dobbiamo creare un ambiente sicuro, dove le persone si possano sentire tranquilli: approcci prescrittivi non funzionano, dobbiamo lavorare insieme per diffonderlo.

Far crescere la coscienza di prodotto, la voglia di smontare e capire i problemi, di capire il valore di quello che si fa.

**Da approccio software ad approccio di prodotto**

- da conoscenza a → **cultura**
- da comunicazione a → **relazioni**
- da team a → **community**
- da stakeholders a → **product contributor**
- da dipartimenti a → **skills**
Il cambiamento riguarda tutta l'azienda e deve coinvolgere tutta l'azienda.

La riflessione deve partire dalla sensibilita di prodotto e il team di sviluppo deve pretendere di conoscere, discutere ed essere d'accordo sul valore delle cose che si chiede di fare.

La prima domanda deve essere: perche la vogliamo fare? qual'e il valore, qual'e il problema da risolvere?


#### Agile Coaching - portiamo Londra a Milano (e viceversa)! (Carlo Beschi)





















#### Agile Testing Matrix (Ferdinando Santacroce)
Come facciamo a produrre software di qualita? Conoscendo a menadito tecnologie e dominio. 😄

Come acquisisco queste competenze? I test sono uno strumento. Non l'unico: XP, cicli di feedback, mob programming, ecc.

Stimolare il team a ragionare sui test.

Ipotizziamo di volerli imparare tutti: ci sono centinaia di differenti tipi di testing, impossibile. Difficilissimo anche catalogarli:



**Brian Marick e la matrice dei test**



**Agile Testing Matrix**



I confini tra i diversi tipi di testing non sono cosi netti: il senso non e capire tutti i confini ma capire come orientarsi per poter trovare il percorso adatto, la strategia di testing adatta alla situazione. Ma come stabilire priorita e strategia?





**Definire effort**



**Definire valore**



Questo e solo un modo per fare una riflessione, non una formula matematica.

L-obiettivo ultimo e gestire il rischio ed evitare di:

- testare la cosa sbagliata
- testare la cosa giusta ma troppo tardi
**Euristiche**

- approccio alla risoluzione dei problemi
- approccio alla scoperta
- metodo pratico che non e garantito essere ottimale
**Da dove partire?**

Capiamo insieme al business il valore delle funzionalita esistenti, dando un ranking di valore.

Negoziamo poi il ranking finale basato sul ranking di effort necessario.





Non bisogna testare tutto e non bisogna fare i test per il gusto di farli: i test hanno un costo e vanno fatti *cum granu salis*. Non mi spacco la testa sicuramente per testare qualcosa che se non funziona non fa niente.


#### Se non hai un contratto agile non sarai mai agile (Alessandro Violini)
L'importanza del contratto nello sviluppo di un prodotto / software.

**Terminologia**

- Contratto: *Accordo tra due o piu parti per costituire, regolare o estinguere tra loro un rapporto giuridico patrimoniale*. [Il contratto non porta valore agli obiettivi di business, ma e un attivatore della collaborazione, quindi non eve contenere vincoli sull'organizzaizone]
- Backlog: Quantita di operazioni che attendono di essere eseguite da un computer / Elenco di procedure da attuare → **il cosa**
- Pianificazione: Fare un piano, ponderare con calma il da farsi in futuro: previsione dei tempi giusti per compiere un attivita. → **il come**
**Antipattern**

- **Antipattern del backlog:**
    - il backlog diventa lo scopo - *ha senso lavorare ad un backlog di attivita per l'obiettivo che ha dato vita a quel backlog! Non per le attivita in se, ma perche quell'elenco di attivita ci porta allo scopo*
- **Antipattern della pianificazione:**
    - pretendere che non cambi
    - avanzare senza raccogliere dati - *la pianificazione che non cambia e che non raccoglie dati e quella del prossimo secondo*
**Backlog life**

E inutile prevedere un cosa senza fare i conti con il come e con il come nella vita reale, che cambiare e si modifica di continuo.



**Tipi di contratto**



Il contratto a corpo e quello classico in cui si fa un ipotesi, si dice il costo e qualunque cosa cambia il pagamento rimane quello senza benefici sull'eventuale successo o insuccesso del prodotto. Se va bene, probabile il cliente paghi piu del previsto, se va male probabile il fornitore ci perda. Questa condizione non e ottimale per la collaborazione.



Il contratto time & material e il classico in cui ti compro il tot di giornate. Ogni discussione si basa sul numero di giorni che vengono stimati e venduti. Piu le giornate stanno finendo piu i compromessi sullo sviluppo saranno alti.



Il contraggo agile prevede che il fornitore, sulla base di un team, decreta un costo settimanale o di sprint del team e lo dedica alle necessita del cliente tramite una pianificazione periodica.

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: php-day-2024 ========
TITLE: PHP Day 2024
AUTHOR: None
TOPICS: ['php', 'software-development']
SOURCE: {'type': 'website', 'url': ''}
STUDY: {'method': 'attend', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/conference/php-day-2024/content.md
---BODY---

# PHP Day 2024

## Summary

**Crafty elegant APIs with Laravel**

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Sessions

### Day 1
**Crafty elegant APIs with Laravel**

An interesting talks about how to implement some good patterns in Laravel, a couple of interesting points:

- [ETag HTTP Response Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) for caching on client side: The **ETag** (or **entity tag**) HTTP response header is an identifier for a specific version of a resource. I didn’t know about, and the speaker suggested it for caching API responses without putting cache on server side.
- I didn’t know about it, but Laravel allow testing an api response against an OpenAI specification (a smarter way of keeping the doc close to the code than generating the doc from annotations, IMHO).
- [https://github.com/Redocly/redoc](https://github.com/Redocly/redoc) —> A library that automatically creates a nice doc website for Openapi spec.
**PHP 8.3 news**

A talk from a PHP maintainer about the news of php 8.1/2/3/4. Here are some I didn’t knew much about:

- PHP 8.2 [sensitive parameters](https://www.php.net/manual/en/class.sensitiveparameter.php) to automatically hide sensitive data in stack traces and string print of objects.
- PHP 8.3 [json_validate](https://www.php.net/manual/en/function.json-validate.php) is useful only for use cases where validation is the only thing to do because then you need to reparse the json if you want to turn it in object/array
**Monionlith (onion architecture in a monolith)**

- Tip for refactoring: start slicing it from the outside in
- Testing legacy code talk [https://youtu.be/U5BkMJpv_ZQ?si=eWu_n-Rr7CY0YJHl](https://youtu.be/U5BkMJpv_ZQ?si=eWu_n-Rr7CY0YJHl)
- A static code analysis tool for PHP that helps you communicate, visualize and enforce architectural decisions in your project —> [https://github.com/qossmic/deptrac](https://github.com/qossmic/deptrac)

### Day 2
**Decision making**

- 7 steps to effective decision making
    1. identify the decision
    2. Gather relevant information
    3. Identify alternatives
    4. Weigh the evidence
    5. Choose among alternatives
    6. Take action
    7. Review your decision and hit the consequences
- Pre-mortem: imagine toy are one year in the future and the decision was a disaster. Take 5-10 minutes to write a brief history of the disaster.
- Decision making within a team framework <aside> 💡 Lead developer doesn’t take the decision: it facilitated the team taking it. </aside>
    1. Decide who is responsible for the final decision (usually the lead?) [responsible doesn’t mean he takes it]
    2. Give them sudo rights
    3. Taking decisions is easier with 3 devs than with 2
    4. As the lead, involve others in the decision to create support
    5. Creare a shared technical vision and reiterate it often
    6. Document the decision with ADR
- documenting decisions
    - ADR
- crucial skills
    - Time management
    - Recognize critical moments —> critical moments are not when an important thing happen, but a few moments/minutes before
        - to recognize critical moments you need to review previous critical moments
- Technical retrospectives —> php metrics
**GitHub actions**

The talk provide some nice examples of “uncommon” things you can automate via pipelines (examples in github actions):

- License of dependencies
- Cache routes
- Check tailwind compilation
- Upload assets to an S3/whatever bucket
- Tag and release by milestones
    - Automaticallly calculate version semver (GitHub action next semver)
- Compile and upload binaries
Other nice info:

- You can run actions [locally](https://github.com/nektos/act) (can be used both for testing them but also replace a makefile with the pipeline execution to set shared automated scripts)
- Conditionals can be used to optimize pipelines (example: No php unit tests when only css changed)
- You can use python instead of bash
- You can test multiple php versions
**How to contribute to php**

A talk from a PHP core contributor about how to contribute. Besides the technicalities, some info about PHP Foundation and how to start contributing:

- Some extensions has 8% code coverage so doc translation and adding coverage is a nice way to start contributing
- PHP foundation needs support to ensure PHP to evolve successfully and avoid risks (a few years ago at some point there were only 2 maintainers and one had to take a break for personal reasons so it was a very risky situation for the PHP world)
**Gen AI IN PHP**

A great talk from Zimuel from Elasticsearch. It has a great intro to how AI/LLM works, one of the ones where I understood the most about it. It also talks about some libraries that makes it easy to introduce AI in PHP applications, and then suggest the main use case promoted by Elasticsearch at the moment: creating a vector DB to give context to the AI and then receive better answers.

- [OLLAMA](https://github.com/ollama/ollama) —> A sort of Docker approach to LLMs: Get up and running with large language models locally. A nice tool to self-host an open source LLM.
- LLPhant - [https://github.com/theodo-group/LLPhant](https://github.com/theodo-group/LLPhant) —> The PHP library that provide interfaces for populating the vector DB but also interact with AI. It support not only OpenAI but also OLLAMA
- Here you can see the slides!
> Content around the talk would be a nice idea! A blog post for sure.

**Upgrade legacy to new version of php**

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*

