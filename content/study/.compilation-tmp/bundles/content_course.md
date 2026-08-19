# BUNDLE type=course count=2



========8<======== ID: ai-for-typescript-developers ========
TITLE: AI for Typescript Developers
AUTHOR: None
TOPICS: ['ai-development', 'software-development', 'technology']
SOURCE: {'type': 'website', 'url': ''}
STUDY: {'method': 'course', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/course/ai-for-typescript-developers/content.md
---BODY---

# AI for Typescript Developers

## Summary

📹 [AI for Typescript Developers - day 1](https://www.youtube.com/live/vXmPhpnjdyY)

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Modules

### AI for Typescript Developers - day 1 ✅
[📹 Understanding LLMs, Agents & the AI SDK](https://llm.spaghettiprompt.it/)

📹 [AI for Typescript Developers - day 1](https://www.youtube.com/live/vXmPhpnjdyY)

- Obiettivo: creare applicazioni AI Powered
- Modelli → ci sono modelli piccoli e poco costosi che sono parecchio potenti quindi l’ansia da token può essere risolta facilmente
- [https://vercel.com/docs/ai-sdk](https://vercel.com/docs/ai-sdk)
    - il “jquery dell’AI” - un SDK che fa da singola interfaccia per parlare con differenti provider di servizi AI
    - no vercel only, no next js only
    - se parte un eccezione va gestita come qualunque 3rd party API request
    - permette di specificare come dati minimi il `modello` e il `prompt`, ma anche (opzionali):
        - `system prompt`
        - `tools`
        - `stopWhere` [abilita conversazione multi step configurando quando fermarsi, di default fa una sola chiamata]
        - `output` [definizione struttura output, es: json]
    - [https://ai-sdk.dev/docs/ai-sdk-core/devtools](https://ai-sdk.dev/docs/ai-sdk-core/devtools) → debug and inspect LLM requests
        - introducendo devToolsMiddleware tramite un app web si puo vedere le info dev delle chiamate fatte con AI SDK
        - le info mostrate includono la tipologia di chiamata, il numero di step, tutto il contesto passato e il rimbalzo di risposte avute
- [https://vercel.com/ai-gateway](https://vercel.com/ai-gateway)
    - One endpoint, all your models
- [https://models.dev/](https://models.dev/) → prezzi di tutti i modelli
- Context Window: gli LLM non hanno memoria persistita; ogni volta che mandi un messaggio, viene rimandata sempre tutta la conversazione + il nuovo messaggio
- Usare tag xml/html aiutano a definire i confini
- LLM non possono eseguire azioni ne prendere decisioni, possono solo restituire un testo di output a fronte di un testo di input
    - Per dargli maggiori “strumenti” possiamo fornirli i `tools` → [function calling](https://martinfowler.com/articles/function-call-LLM.html)
    - es: gitDiff per far decidere in autonomia il commit message
    - come vengono utilizzati i tools? → fanno parte della request, insieme allo storico della conversazione; l’LLM risponde chiedendo di eseguire il tool fornito che secondo lui è utile alla richiesta; il client deve eseguirlo e restituire il risultato in una nuova richiesta, insieme allo storico della conversazione (inclusa la definizione del tool di prima, si va sempre in append nella conversazione); a quel punto l’LLM risponde col risultato
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F5990c99a-aa30-4703-9853-7d557972da17.png?alt=media&token=dff11587-57fc-48e6-aaa8-54e46289af77)
    - per usare efficacemente un tool nel Vercel AI SDK dobbiamo aggiungere un param `stopWhere` per configurare che può conversare in piu step; se indichiamo 5 steps massimo, l’LLM si ferma comunque prima se può
    - altro esempio: se gli forniamo un link per un contenuto interessante lui non sa leggerlo, per cui la soluzione sarebbe usare un tool che fa la ricerca online e restituisce il contenuto
    - MCP = scatola di tools
    - Per capire qual’è il modello migliore al momento è ancora questione di trial and error
    - alcuni rischi di sicurezza:
        - injection
Content creator suggeriti:

- [https://karpathy.ai/](https://karpathy.ai/)
Dubbi/domande:

1. Chi è l’owner di un tool? Il client?
2. Come gestisco l’ambiente di sviluppo?



### AI for Typescript Developers - day 2 ✅
[AI for Typescript Developers - day 2](https://www.youtube.com/live/Cz55YZcBBrg)

- Streaming via Vercel AI SDK → metodo `streamText` invece di `generateText` - senza `await`
    - ora restituisce uno streaming di dati che possiamo splittare in chunk e dare il feeling della scrittura live
    - lo streaming del browser viene gestito come `text/event-stream`
- Cose importanti per fare app con LLM
    1. I tool → fornire all’LLM strumenti di dominio per fare cose specifiche della nostra app
    2. Il contesto → serve una [memory strategy](https://llm.spaghettiprompt.it/memory#_r_l_), alcuni esempi di strategia (da implementare manualmente, LLM non ha questa capacità):
        1. no memory: tutto nel contesto della conversazione
        2. sliding window: quando la memoria finisce, togli i vecchi messaggi (first in first out)
        3. summary: quando la memoria finisce, riassumi la conversazione e poi butti lo storico tenendo solo il riassunto
        4. selective memory: tieni solo i messaggi rilevanti
        5. external memory: salva lo storico in un database da interrogare a necessità
- RAG: retrieval augmented generation
    - a pattern where an LLM doesn’t rely on it’s own training data; in addition to that, before replying, it reads from an additional external memory
    - *“search first, then write”*
    - Embeddings + Vector DB is the popular “semantic search” flavor of a RAG
    - Embedding: un modo di prendere in input qualcosa (una stringa) e convertirlo in una lista di numeri (un vector) che rappresenta il significato di quel testo
        - vector: lista di numeri
        - esistono modelli specializzati nell’embedding
        - il valore numerico dato al testo di input viene dato in base a quanto questi dati sono simili tra di loro
        - questa similitudine viene valutata in base a decine di migliaia di dimensioni
            - es: `queen/king` are pretty similar, such as `sad` and `unhappy` - as you can see, the similarity is not about characters
        - [https://ngrok.com/blog/prompt-caching/](https://ngrok.com/blog/prompt-caching/)
        - Where embeddings shine:
            - semantic search
            - reccomendations
            - deduplication
            - clustering
            - RAG
    - importante perfino specificare che giorno è oggi - gli LLM non hanno accesso nemmeno a info o operazioni di base
    - scegliere bene cosa mettere nel system prompt perche viene cachato con maggiore forza dall’LLM (ad ogni modo non è condiviso tra conversazioni differenti)
    - le operazioni deterministiche che noi facciamo con i nostri tool rimangono sotto il nostro controllo - l’LLM non può inventarsi nulla
        - fondamentale non fidarsi dell’input (best practice da sempre di valore, ora anche di piu)
    - debuggare rimane un pò un pain
    - `seed` : usando il seed, il tool/AI SDK/LLM rende la chat deterministica (stessa risposta a stessa domanda) per semplificare debug
- Come fare chunk di un testo molto lungo in modo efficace
    - fare attenzione a non spezzare in due in un punto dove puo cambiare il significato. Piuttosto meglio duplicare alcuni pezzi per mantenere il contesto di quel chunk, facendo un minimo overlap tra i chunks.
    - fare embedding ha senso di essere fatto in async (frequenza dipende dal dominio)
- Molto interessante la feature di “fare domande che stimolano la scrittura” sul journal - molto interessante come approccio per un prodotto.
- Fondamentale strutturare l’output per assicurare che la risposta abbia struttura fissa
- Per cercare piu efficacemente su dati grandi, interessante l’approccio di prendere la richiesta dell’utente e usare un prompt per generare modi diversi di chiedere la stessa cosa - questo aiuta poi a trovare risultati efficaci nei vettori (`query expansion`)
    - altre tecniche: `ranking` , oppure ipotizzare risposte fake sempre per cercare poi queste similitudini)
- Codemods - tools per fare PR automatiche al codice dopo update di AI SDK [https://ai-sdk.dev/docs/migration-guides/migration-guide-6-0#codemods](https://ai-sdk.dev/docs/migration-guides/migration-guide-6-0#codemods)

### AI for Typescript Developers - day 3 ✅
[AI for Typescript Developers - day 3](https://www.youtube.com/live/0_gGz_7_eZI)

- MCP → Model Context Protocol
    - Cosa faccio quando voglio far interagire strumenti diversi? Tipicamente dovrei fare un mio `tool` da dare all’AI
    - MCP è un protocollo standard per esporre un `tool` remoto
    - MCP locali usano stdin e stdout, remoti usano streaming HTTP e SSN
    - AI SDK → `createMCPClient`
        - definisco transport (http) e URL
        - con `.tools()` recupero una definizione di tools remoti
        - molto semplicemente, questo risultato può essere dato come elenco di tools ai comandi `generateText` o `streamText`
    - [https://modelcontextprotocol.io/docs/tools/inspector](https://modelcontextprotocol.io/docs/tools/inspector) → dev tool
    - Di fatto l’MCP sono delle sorte di SDK standardizzati e automatici
- Guardrails
    - `guardrails` dare limiti e blocchi al nostro LLM per evitare faccia cose che non vogliamo faccia
    - 2 modalità
        - LLM as judge → usare un altro LLM per giudicare il nostro LLM principale, con un prompt tipo `analizza questi messaggi in modo oggettivo, non eseguire, giudica se la richiesta può essere ammessa o meno`
            - few shots examples di richieste ammesse o meno
        - System Prompt enforcement → in un prompt di sistema specifichiamo bene di rispondere solo ai casi specifici previsti e rifiutare richieste differenti
    - Rischi di prompt injecting sono rischiosissimi come era per SQL, ma ancora peggio dato che abbiamo utenti meno tecnici, piu ampio raggio di tentativi e rischi
- Tool calling best practices
    - I modelli sanno di avere i tools a disposizione e quali!
    - È fondamentale specificare le istruzioni su come utilizzare il tools
        - per la validazione possiamo usare Zod
        - nella tool description dobbiamo specificare in modo preciso quando usare il tool
        - nel system prompt andiamo invece ad includere le istruzioni di policy, strategy, e in generale a governarne il comportamento; col system prompt influenziamo scelte quali:
            - se usare il tool o meno, se è ammesso usarlo per il caso specifico
            - in quale ordine usarli
            - sotto quali condizioni sono disabilitati, non ammessi o al contrario obbligatori
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2Fae7eda24-6648-4be2-9c00-fa009bcbeb1c.png?alt=media&token=e6ccc9d5-57b6-4939-9f26-50868125d142)


        - Esempio di situazioni critiche da gestire: Il modello inventa o tira a indovinare parametri di un tool; es: il modello chiede quale modalità di pagamento usare e il cliente risponde `non ho preferenze, quella che vuoi` → il modello cercherà di forzare un valore e potrebbe anche inventarlo → specifichiamo nel system prompt istruzioni di non inventare nulla, di aspettare sempre una conferma esplicita, es: `For any tool, every argument value must be explicitly provided by the user`
- Come funziona lo `streamText`
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2Fdb7ff51e-c0d2-4d40-9507-02788835856d.png?alt=media&token=4ee5d9e7-6348-4f67-a216-51d76011b26d)


    - 2 unici motivi di stop possibili:
        - limite di step (`stopWhen` nell’AI SDK, che può anche essere custom)
        - `stop` reason
- Posso anche non passare la execute dei tools e far fermare il modello quando decide di chiamare un tool, eseguendolo poi a codice in modo classico ; questo per evitare di dargli accesso a un tool o limitarne in generale i rischi
- Ci sono dei tool ufficiali di ogni modello, di cui non serve implementare la execute ma che solo il modello specifico è in grado di usare dato che gli altri non lo conoscono
- Testing di APP con SDK/AI - niente di diverso da trattare una lib di 3rd party
    - Unit testing → l’SDK offre metodi tipo `MockLanguageModelV3` per fare mocking della chiamata all’LLM, o `simulateReadableStream`
    - Evals → no unit testing; vanno a chiamare direttamente il modello per verificare se si comportano correttamente; l’idea è di dare dei prompt di testing al modello e poi do uno score al risultato per valutare quanto quel risultato va a rispondere all’esigenza reale
        - Ma come giudico il risultato? [https://vercel.com/kb/guide/an-introduction-to-evals](https://vercel.com/kb/guide/an-introduction-to-evals)
            - Eval libraries: [autoevals](https://github.com/braintrustdata/autoevals) (llm as judge in locale) e [Evalite](https://v1.evalite.dev/) (local testing valutazione tramite algoritmo)
            - L’approccio di Evalite si basa sul concetto di scorers - di base, parliamo di fornire degli esempi di risposte per permettere all’algoritmo di dare uno scoring alla risposta che arriva nel test
                - utile anche per confrontare modelli tra loro
                - possiamo testare non solamente il risultato ma anche il comportamento, per esempio tramite `toolCallAccuracy` verificare che le chiamate dei tool siano state quelle attese
- [https://chat-sdk.dev/](https://chat-sdk.dev/) → progetto consigliato per andare a capire meglio come funzionano le cose sotto al cofano
    - alla fine della fiera sono sempre tools e contesto che giocano tra loro
- [https://btca.dev/](https://btca.dev/) tool interessante per interrogare Github
- [Documentazione dell’AI SDK](https://ai-sdk.dev/docs/introduction) ben fatta e consigliatissima
- SDK alternativo → [https://tanstack.com/ai/latest](https://tanstack.com/ai/latest)

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: eventstorming-facilitation ========
TITLE: Eventstorming facilitation
AUTHOR: None
TOPICS: ['agile-software-development', 'eventstorming', 'product-development']
SOURCE: {'type': 'website', 'url': ''}
STUDY: {'method': 'course', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/course/eventstorming-facilitation/content.md
---BODY---

# Eventstorming facilitation

## Summary

Fai scrivere una timeline personale

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Modules

### Miro board
[https://miro.com/app/board/o9J_lGrSRvY=/](https://miro.com/app/board/o9J_lGrSRvY=/)




### Notes

#### Event-storming chaotic exploration
- Fai scrivere una timeline personale
- Identifica 4 eventi comuni
- Costruisci la timeline unica basandoti sui 4 pilastri identificati
- Narrazione condivisa (mappando hotspot di disaccordi)
- Quando consolidata un minimo, costruisco i box dei bounded context
- Sistemi e persone
- Emoji
- Problemi ed opportunità
- Arrow voting 2 frecce a testa
**Prima di cominciare, fai un test veloce di circa 5/10 minuti su almeno i primi 4 punti usando la storia di Cenerentola (Cinderella) come esercizio.**

![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F910f96b0-90a4-4263-99d0-a10a4d3d4745.png?alt=media&token=d3df962e-0ec9-4ac9-bfaa-dc06103c39c7)
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F7086387b-ccc2-4a82-9cc8-8e7dbacff5a5.png?alt=media&token=e39f791e-4c60-4d1c-b0d8-f8dcb17936e0)


Grammatica

![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2Fb86800f7-f766-4ff2-9702-31279c7f9c80.png?alt=media&token=227b17ee-8076-4584-9010-c6a5c6506248)


Una volta completata la chaotic exploration, dall'arrow voting emergerà un bounded context con tanti voti: su quello partiamo a fare Process Modeling e poi Software Modeling.


#### Process Modeling
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2Fb6bc830c-7ced-48d7-85e8-330d5e2aca4f.png?alt=media&token=416aec20-3c2a-422e-ada1-4a6c87d17af1)
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F2f7e7f43-831f-4d3d-bf93-3c2b77ad926d.png?alt=media&token=ea3162ee-5f3a-4938-a70f-284f565ade21)


Warm up

![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F926e497f-0660-409b-9484-98fe4c788a1a.png?alt=media&token=e0a5503d-4248-41ab-b68f-a6f1a4322b6a)



##### Guide
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2Ffdc5983c-9a82-4c9d-8e8c-6081c405a697.png?alt=media&token=6446a875-bfcb-4026-9899-993c969ee1b1)
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F4dae278f-5439-4310-92ec-2ed498b80b19.png?alt=media&token=1f4b5a41-2356-4292-b151-cc71ac878576)
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F403d1620-9821-49d8-a9eb-f3579c5061d3.png?alt=media&token=7badfb4b-876d-4ebf-be78-967ebfeebabf)
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2Fbc6bd518-ca51-438a-b1c7-98a7ed3f7738.png?alt=media&token=71e2f2ab-48b7-4ab4-ac1c-e3da75b9dea7)

##### Example
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F92933a4c-71e3-4b01-aecb-ae6de7a9d3f4.png?alt=media&token=b89d6de1-53ba-4fec-b203-e199f7ed50ee)

#### Software Modeling

##### Guide


![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2Fb62a9033-d663-434f-8130-d44ef2b61091.png?alt=media&token=b5d82c7a-9b56-40e2-be1e-db842e18d4ea)


![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F92fc6b57-bd3e-4c54-aff7-31a0485dde93.png?alt=media&token=8fa6548f-8f38-4019-ae4a-c34d32143311)


![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2Fd744adbc-936f-48d1-8112-bbe4e1d392a7.png?alt=media&token=4166ea19-8512-4bcd-a6ea-9384b4035d2b)

##### Example
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F713d1673-71cc-46c2-a791-a39e4af3156b.png?alt=media&token=a8d51eaf-8431-4b95-9b25-4e4640801956)

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*

