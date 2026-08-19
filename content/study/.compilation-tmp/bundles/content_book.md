# BUNDLE type=book count=23



========8<======== ID: accelerate ========
TITLE: Accelerate
AUTHOR: ['Nicole Forsgren', 'Jez Humble', 'Gene Kim']
TOPICS: ['agile-software-development', 'devops', 'tech-lead']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/accelerate/content.md
---BODY---

# Accelerate

## Summary

23000 survey responses all over the world

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

# Preface
- the research
    - 23000 survey responses all over the world
    - 2000’unique organizations from small startups to large enterprises
    - Both new system building and legacy code work
<aside> 💡 Improvement is possible for everyon, as long as leadership provides consistent support, including time, actions and resources.

</aside>

1st step Questions: 2014

- what does it mean to deliver software? Can it be measured?
- Does software delivery impact organizations?
- Does culture matter? How we measure it?
- What technical practices appear to be important?
We were pleasantly surprised by the results: software dev and delivery can be measured in a meaningful way, high performers do it in ways that are significantly better than others, throughput and stability moves together, and software done well has an actual impact on profitability, productivity and market share. Culture and technical practices matter, and we can measure them.

2nd step questions: 2015

- can we revalidate that software delivery impact organizational performances?
- To technical practices and automation impact software delivery?
- Do lean management practices impact software delivery?
- Do technical practices and lean management practices impact aspect of work like anxiety associated to code and burnout?
Both great confirmations and surprises came up.

3rd step questions: 2016

- does security into software development and delivery help the process or slow it down?
- Does trunk base dev contribute to better software delivery?
- Is Lean product management an important aspect?
- Do good tech practices contribute to strong company loyalty?
4th step questions: 2017

- what architectural practices drive improvement in software delivery performance?
- How does transformational leadership impact software delivery?
- Does software delivery impact non-for-profit outcomes?

# Part 1: What we found

## Accelerate
“Business as usual” is not enough to remain competitive.

To remain competitive and excel in the market, organizations must accelerate:

- Delivery of goods and services to delight their customers
- Engagement with the market to detect and understand customer demand
- Anticipation of compliance and regulatory changes that impact their systems
- Response to potential risks such as security threats or changes in the economy
At the heart of this acceleration is software.

Technology leaders need to deliver software quickly and reliably to win in the market. The key is measuring and understanding the right things with a **focus on capabilities, not maturity.**

Maturity models are not the appropriate tool to use or mindset to have, even if they are very popular - for 4 reasons:

1. Maturity models focus on helping an organization “arriva” at a “mature state” - like if they are done then. Capability models focus on helping the organization continuously improve and progress, realizing that the technological and business landscape is ever changing.
2. Maturity model are often a lock step, prescribing a similar set of tech and tools to every team and organizations, like if Level 1 and a level 2 look the same everywhere. This is not true, that why capabilities models are dynamic, allowing different parts of the org to take customized approach.
3. Capability models focus on key outcomes and how capabilities/levers can drive improvement in those outcomes. Maturity models, instead, simply measure tech proficiency without considering outcomes - this leads to have vanity metrics that don’t tell anything about the impact on the business.
4. Maturity models suggest a static level of tech, process and abilities to achieve. By focusing on a capabilities paradigm, orgs can continuously drive improvement.
Our research has identified 24 key capabilities that drive improvement in software delivery performance, and then org performance.

How do we know that these capabilities are drivers of tech and org performance, and why can we say it with such confidence? Here are some numbers of high-performance teams vs low performers:

- 46x times more frequent deploys
- 440x times faster lead time
- 170x times faster mean time recovering from downtime
- 5x times lower change failure rate
How do high performance team achieve such amazing performances? By improving the right capabilities.


## Measuring performance
Measuring performance in software is hard - mainly because the inventory is invisible.

Typically, old attempts of measuring used things like lines of code, velocity or utilization. Those are bad because they focus on outputs, not outcomes.

LOC → useless, using less lines in general is better, but it can also become bad if it’s too short. Using lines of codes doesn’t add anything to business

VELOCITY → is not objective and is relative to the team.

UTILIZATION → 100% of busy time is bad, There should always be a stack of free time available. Also, queue theory in math tell us that as utilization approaches 100%, lead time approach infinity - more the team is close to 100% of utilization, more time any work will take.

A successful measure has 2 characteristics:

1. Focus on global outcomes to ensure teams are not fighting against each other
2. Focus on outcomes
The 4 used in this book:

1. Delivery lead time
2. Deployment frequency (batch size)
3. Time to restore service (Mean Time To Recover MTTR)
4. Change fail rate
Lead time → time from a customer making a request to the Request being satisfied. Using it as a metric is a Lean idea.

Research from the book demonstrate that there is no trade off between improving performance and achieve higher levels of stability and quality: HIGH PERFORMERS DO BETTER AT ALL OF THOSE MEASURES.

Does software delivery performance matter Yes, it does.


## Measuring and changing culture
There are 3 types of organizations, according to the sociologist Ron Westrum:

1. Pathological: large amount of fear and threat. People hoard informations or withhold it for political reasons - or distort it to make themselves better
2. Bureaucratic (rule-oriented) - organizations protect departments. Those in the department want to insist on their own rules, and generally do things by the book - their book
3. Generative (performance oriented) - focus on the mission. How do we accomplish our goal?
The organizational culture can predict how information flows through an organization; a good information is made of 3 elements:

1. It provides answer to the questions the receiver needs answered
2. It is timely
3. It is presented in a way that can be effectively be used by the receiver
The organizational culture can also predict performance outcomes.



To measure culture, a survey was used. (See the book for the survey).

In a generative culture company, the generative culture enables information processing through 3 mechanism:

1. More effective collaboration, high level of trust both horizontal and vertical
2. Emphasis on the mission that allow people to put aside personal or department issues that bureaucratic organization highlight instead
3. Hierarchy is not very important
Bureaucracy is not necessarily bad: it’s goal is to “ensure fairness by applying rules to administrative behavior to avoid preferential or discriminatory treatment. Rules also represent the accumulated knowledge of the organization.”. The problem is when following the rules is more important than achieving the mission.

Westrum predict that organizations with better information flow works more effectively.

A generative culture has several prerequisites:

- trust and cooperation between people
- Higher quality decision making
- Better people management
“Who is on a team matters less than how the team members interact, structure their work, and view their contributions”. It’s all about team dynamics.

How do we change culture? “The way to change culture is not to first change how people think, but instead start by changing how people behave (what they do)”. Implementing Agile practices will affect the culture of the company.


## Technical Practices
The research wants to assess continuous delivery impact on software delivery performance, organizational culture, and other outcome measures, such as team burnout and deployment pain.

**Continuous Delivery:** a set of capabilities that enable us to get changes of all kind (geatures, config changes, bug fixes, experiments) into production or into the hands of users safely, quickly and sustainably.

5 key principles of CD:

- **Build quality in** - we invest in building a culture where we can detect any issue quickly (supported by tools and people)
- **Work in small batches** - split work up into much smaller chunks to get essential feedback on the work we are doing; it adds some overhead, but it’s enormously rewarded
- **Computer performs repetitive tasks, while people solve problems** - invest in simplifying and automating all the repetitive work such as regression testing and software deployment, to free up people for higher value problem solving work
- **Relentlessly pursue continuous improvement** - High-performing teams are never satisfied, they always strive to get better - improvement is part of the daily job
- **Everyone is responsible** - All the important outcomes (throughput, quality, and stability) are achievable only by close collaboration between everyone involved in the process
If we want to successfully implement CD, we must create some foundations:

- Comprehensive configuration management → we should be able to provision our environments and build, test and deploy our software in a fully automated fashion from what is stored in version control
- Continuous Integration → Following the “small batches” principle, we want to daily integrate our changes to the main branch; each change triggers a build process that includes running unit tests; if any part of the process fails, developers will fix it immediately
- Continuous Testing → Since testing is essential, we should not test only when “dev work is done”, we should make testing part of the entire process; automated unit tests and acceptance test should be run at every commit against version control system, but also locally, very frequently, from each developer. Testers should perform exploratory testing against the last version continuously.
**The impact of CD**

If you want to improve your culture, implementing CD practices will help.

We was able to demonstrate the positive impact of CD to achieve:

- ability to release to production on demand
- fast feedback on the quality and deployability of the system available to everyone
Also some positive impacts on organizations:

- strong identification with the organization
- higher level of software delivery performance (lead time, deploy frequency, time to restore service)
- lower change fail rates
- a generative, performance oriented culture
CD also proofed to be able to help in achieving one of the twelve principles of the Agile manifesto: “Agile processes promote sustainable development. The sponsors, developers and users should be able to maintain a constant pace indefinitely”:

- lower level of deployment pain
- reduces team burnout
Positive impacts was also on quality:

- perception of quality from the team
- percentage of time spent in unplanned work
- percentage of time spent working on defects identified by the end users


**CD practices: what work and what doesn’t**

- Version control
    - keeping system and application config in version control was more highly correlated with software delivery performance than keeping application code in version control
    - configuration is often considered a secondary concern, but the research show this is a misconception
- Test automation
    - the following practices predict IT performances
        - having automated tests that are reliable (enough that if it’s green it’s releasable)
        - developers primarily creates and maintain acceptance tests
    - this doesn’t means we should get rid of testers! they have an essential role, for example in:
        - manual testing (exploratory, usability, and acceptance testing)
        - helping devs in creating and evolving the automates tests suite
- Test data management
    - You should be able to create a fake set of data, adequate and big enough to run the test suite
- Trunk-Based Dev
    - teams that did well had less than 3 branches active any time, and branches with very short lifetimes (less than a day)
    - never had code freeze or stabilization periods
    - leave feature branches / GitFlow for open source projects
- Information security
    - Incorporate information security into the delivery process
**Adopting CD**

The research shows that adopting CD practices has a huge impact on many aspect of an organization - improving delivery performance, quality, culture - reducing burnout and deployment pain.

Implementing this practices sometimes requires to rethink everything (how the team works / interct with each other/ tools and processes).


## Architecture
The architecture of your software and the services it depends on can be a significant barrier to increasing both tempo and stability of release process.

High performance is possible with all kind of systems, but only if that systems (and the teams that build and maintain them) are loosely coupled.

Types of system:

- greenfield (new system)
- System of engagement (used by end user)
- System of record (used to store business critical info)
- Custom software developed by others
- Custom software developed in house
- Packaged, commercial software
- Embedded software
- Software with a user-installed component (it includes apps)
- Non mainframe software running on servers from Another company
- Non mainframe software running on our own servers
- Mainframe software
Low performance is more likely to happen when team is working on a custom software developed by others, and mainframe systems.

In the rest of cases, no significant correlation exists between the type of system and delivery performance.

You can achieve loosely coupled teams and architecture in all of these systems.

Focus on deployability and testability:

- deployability: we can and do deploy or release independently from other services
- Testability: we can do most of our testing without an integrated environment
Those 2 are important to achieve high performance.

Conway’s law: “teams are constrained to produce designs which are copies of the communication structure of the organization”.

With “inverse Conway maneuver”, companies should start by fixing their team and org structure to then enable teams to achieved the consequent architecture.

By loosely coupled, we don’t meant that teams shouldn’t work together: the goal is to ensure that communication bandwidth is not overwhelmed by fine grained decision making, but instead focus on discussing high level shared goals.

Loosely coupled teams and architecture also enable scaling: high performance teams are the only one able to increase deployments per developer when adding new people to the team.

Allow teams to choose their own tools! To ensure security provide a list of pre approved and easy to consume libraries, packages, ecc to make life of dev easier and let them choose among them.


## Integrating Infosec into the Delivery Lifecycle
The DevOps movement is poorly named: the original intent of the movement was to bring together developers and operation teams to create win win solutions - but this kind of behaviour occurs whenever different functions don’t work effectively together: testing, product management, and information security.

Shifting left on security: building security into software development improves both delivery performance and security quality, positively impacting their ability to achieve Continuous Delivery.

The rugged movement: some names have been proposed to extend devops to security - one is DevSecOps, another is Rugged DevOps, taking inspiration from the Rugged Manifesto.


## Management practices for software
Lean Management Practices:

- limit wip to increase throughput
- Visual management to show key quality and productivity metrics
- Use data from app performance and infra to make business decision daily
Those practices reduce burnout and lead to a more generative culture.

Lightweight change process:

Sometimes, changes to the codebase requires some approval. We found out that approval only for high risk changes was not related to higher software performance.

Raccomendation: use a simple lightway process based on peer review/pair, combined with a deployment pipeline to detect and reject bad changes.


## Product Development
Lean product development practices:

- the team slice up products and features into small batches that can be completed in less than a week and released frequently, including the use of MVPs
- The team has a good understanding Of the flow of work from business to customers and they have visibility on it
- Organizations actively and regularly seek feedback from customers and incorporate that feedback into the design of the product
- The team has the authority to create and change specifications as part of the development process without approval
These factors were statistically significant in predicting higher software delivery performance.

Experimentation: if a development team isn’t allowed to change requirements or specifications without authorization in response to what they discover (example: from customer feedback) the ability to innovate is inhibited.

Effective product management drives performance: the virtuous cycle of increased delivery performance and lean product management practices drives better outcomes for your organizations.


## Making Work sustainable
**Deployment pain**

The fear and anxiety that engineers and technical staff feel when they push code to production can tell us a lot about a team’s software delivery performance - this can be an indication that software development and delivery is not sustainable.

It’s also a concern when developers and testers have no idea what a deployment look like.

Improving key technical capabilities reduces deployment pain.

Most deployment problems are caused by a complex, brittle deployment process, typically caused by 3 factors:

1. Software is not written with deployability in mind
2. Manual changes are required as part of the deployment process
3. Multiple handoffs between teams
In order to reduce deployment pain, we can:

- build systems that are designed to be deployed easily into multiple environments
- Ensure that the state of production system can be reproduced in an automated way from info in version control (except production data of course)
- Build intelligence into the application and the platform so that the deployment process can be as simple as possible
**Burnout**

Burnout is a physical, mental, or emotional exhaustion caused by overwork or stress.

Managers that wants to avoid burnout for their employee should concentrate on:

- fostering a respectful, supportive work environment that emphasizes learning from failures rather than blaming
- Communicating a strong sense of purpose
- Investing in employee deployment
- Asking employees what is preventing them from achieving their objectives and then fix those things
- Give employees time space and resources to experiment and learn
- Give employees the authority to make decisions that affect their work and their outcomes.
Common problem that can lead to burnout:

- Work overload
- Inability to influence decisions affecting your job
- Insufficient rewards
- Unsupportive work environment
- Lack of fairness in decision making process
- Mismatch in org values and individual values
To reduce or fight burnout, focus on improving:

- organizational culture
- Deployment pain
- Effectiveness of leaders
- investment on devops
- Organizational performances

## Employee satisfaction, identity, and engagement
Employees in the high performing teams were 2.2 times more likely to recommend their organization to a friend as a great place to work, and 1.8 times more likely to recommend their team.

Companies with highly engaged workers grew revenues two and a half times more.

Employee engagement is not just a feel good metric, it drives business outcomes.

**Changing organizational culture and identity**

When leaders invest in their people and enable them to do their best work, they will identify more strongly with the organization and are willing to go the extra mile to help it be successful.

In todays fast moving and competitive world, the best thing you can do for your products, company and people is to institute a culture of experimentation and learning.

**How does job satisfaction impact organizational performance?**

People who feel supported by their employers, have the tools and resources to do their work, and feel their judgement is valued, turn out better work.

**How does devops contribute job satisfaction?**

Although DevOps is about culture, it’s important to note that job satisfaction depends strongly on having the right tools and resources to do your work. Good DevOps technical practices predict job satisfaction.


## Leaders and managers
**Transformational leadership**

Leadership have a powerful impact on results. Being a leader doesn’t mean you have people reporting on results - is about inspiring and motivating those around you.

A good leader affects a teams ability to deliver code, architect good systems, and apply Lean principles.

Transformational leadership is essential for:

- Establishing and supporting generative high trust cultural norms
- Creating technology that enable dev productivity, reducing code deployment lead times and supporting more reliable infrastructures
- Supporting team experimentation and innovation, and creating and implementing better product faster
- Working across organizational silos to achieve strategic alignment
The five characteristics of a transformational leader are:

1. Vision - a clear understanding of where the company is found and where it should be in five years
2. Inspirational communication - inspires and motivates when communicating, even kn uncertain or changing environment
3. Intellectual stimulation - challenge followers to think about problems in a different way
4. Supportive leadership - care about personal needs and feelings
5. Personal recognition - acknowledge achievements and improvements, personally compliments others
**The role of managers**

Managers should invest in DevOps initiatives to facilitate the team, some examples:

- create space and opportunities for learning and improvement, ensuring all the resources are available to everyone
- Establish a dedicated budget for training (also time counts!) and let people choose training they are interested in
- Encourage staff to attend conferences and events at least once a year and share what they learn with the team
- Setup internal hack days (hackathons) and yak days (tech debt)
- Hold regular internal mini conferences
- Give staff a dedicated time to experiment with new tools and technologies
**Tips to improve culture and support your teams**

Enable cross functional collaboration by:

- building trust with your counterparts in other teams
- Encourage practitioners to move between departments
- Actively seek, encourage and reward work that facilitates collaboration
Help create a climate of learning by:

- create a training budget and advocate for it internally
- Ensure your team has the resources to engage in informal learning and the space to explore ideas
- Make it safe to fail to create a culture of innovation
- Create opportunities and space to share informations
- Encourage sharing and innovation by having demo days and forums
Make effective use of tools:

- ensure your team can choose their tools (unless there is a very good reason)
- Make monitoring a priority

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: clean-code-a-handbook-of-agile-software ========
TITLE: Clean Code: A Handbook of Agile Software Craftsmanship
AUTHOR: ['Robert C. Martin']
TOPICS: ['agile-software-development', 'clean-code', 'technical-excellence']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/clean-code-a-handbook-of-agile-software/content.md
---BODY---

# Clean Code: A Handbook of Agile Software Craftsmanship

## Summary

There are two parts to learning craftsmanship: knowledge and work. You must gain the knowledge of principles, patterns, practices and heuristics needed, but then you need to work hard and practice: you can learn everything about a by circle and you would still fail the first time riding it.

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

> Writing clean code is what you just do in order to call yourself a professional. There is no reasonable excuse for doing anything less than your best.

There are two parts to learning craftsmanship: knowledge and work. You must gain the knowledge of principles, patterns, practices and heuristics needed, but then you need to work hard and practice: you can learn everything about a by circle and you would still fail the first time riding it.


# Clean code

### There will be code
Abstraction level of programming languages will increase, they will become more closer to natural languages of the requirements, but that will still be code.


### Bad code
We wade through bad code: we struggle to find our way.

So then, if you experienced this, why did you write bad code after? usually because we were trying to move faster and felt we didn’t have enough time to make a good job.


### The total cost of owning a mess
With bad code the productivity decrease over time: in a year or two, teams that were incredibly fast became incredibly slow.




### The grand redesign in the sky
When the teams rebels, the usual solution is a redesign: it never works.

When it happens, the “elite team” start working on the new system, and the two team are now in a race: the new system must do the same than the current system, while it keeps growing. Sometimes it can take 10 years, and meanwhile people is already requiring to replace the new system again.


### Attitude
When we produce bad code, it’s our responsibility; it’s our fault; we have to be professionals and avoid it. It’s your job to defend the code.

What if you were a doctor and someone ask you to skip the silly hand washing before a surgery because you have to be quicker?


### The Primal Conundrum
We often think that, while we know that previous messes are slowing us down, we make more messes to meet deadlines. This is wrong.

The only way to go fast is to keep code as clean as possible.


### The art Of Clean Code
Being able to recognize bad code from clean code does not mean we also know how to produce clean code.

We need to develop our “code sense” and learn the (lot of) little techniques needed to achieve it.


### What is clean code?
- clean code does one thing well - Bjarne Strousdrup, inventor of c++
- Clean code reads like well written prose - Grady Booch, author of Object Oriented analysis and design with applications
- Clean code always looks like it was written by someone who cares - Michael Feathers
- Reduced duplication, high expressiveness and early building of simple abstractions - Ron Jeffries, author of XP Installed
- Etc..
Clean code is like martial arts: martial artists doesn’t agree about the best martial art or technique. But within a specific school there is a “right” way to apply it.


### We are authors
The next time you write a line of code, remember you are an author writing for readers who will judge your effort.


### The Boy Scout rule
code has to be kept clean over time. To do this, apply Boy Scout rule:

> Leave the campground cleaner than you found it.

The clean up can be something easy, like improving some names or break up a long function.


# Meaningful names
Names are everywhere in software: variables, functions, params, classes, packages, etc.

- use intention revealing names: choosing good names take time but it saves a lot more than it takes.
- Avoid disinformation: Avoid abbreviations and words that have other meanings. Do not call a List something that is not an actual List (intended as the programming construct). Make sure names are not too similar or they will be confusable. Be careful with lower case L and upper case O because they are almost identical to 1 and 0 numbers
- Make meaningful distinctions: if name are similar but different, they must be different, give them meaningful different names. Don’t make a small formal change just to avoid a duplicated name.
- Use pronounceable names: ~~genymdhms~~ generationTimestamp
- Use searchable names: make up names so that they are easy to locate across a body of text.
- avoid encodings: encoding type or scope info in the names it’s useless
- Avoid Hungarian notation: having the type in the name is pointless with modern languages
- Interfaces and implementations: if I really have to encode, I do it on implementations (so avoid I or Interface in the interface name, but eventually use Implementation in the implementation class name)
- Class names should be nouns, never verbs
- Methods names should be verbs
- Choose clarity over entertainment value
- Say what you mean, mean what you say
- Clarity is king
- Give a concept the same name accords the codebase
- Don’t use the same word for two purposes in the codebase
- Chose technical programming names when it make sense (like a queue, for example)
- Use domain names when no tech programming name make sense
- Add meaningful context to names if it helps readability
- Don’t add gratuitous context to names

# Functions
- make them small! Even better, do it smaller than that!
- Blocks within if/else / while - ecc - any statement should be one line long (a function call if needed)
- Indent level of a fu croon should not be greater than one or two
- Functions should do one thing, they should do it well, they should do it only
- How to say it does “one thing”?
    - For example, if you can’t extract another function from it without giving a name that is just a restatement of the original one , it’s doing one thing
    - If you can identify sections in the function, then it’s doing more than one thing
    - Etc..
- Have one level of abstraction per function
- The step down rule: the code should read like a top down narrative
- Switch statements can be tolerated only if they appear only once, are used to create polymorphic objects and are hidden behind an inheritance relationship
- Use descriptive names
- Ideal number of arguments for a function is zero (niladic), then one (monadic) and two (dyadic). 3/more arguments should be avoided.
- Flag arguments are ugly
- Arguments objects: if a function has more than 2/3 arguments, think if those can be put together somehow
- Have no side effects! → side effects are lies: your function promises todo one thing, but it also does other hidden things (for example, starting a session in the middle of a behavior is a side effect)
- Avoid output arguments
- Command Query Separation: functions should either do something or answer something, not both. Either it changes the state of an object, or it should return some info about that object. Doing both leads to confusion.
- extract try/catch blocks bodies into their own functions
- Functions should do one thing, and error handling is “one thing”
- Don’t repeat yourself: duplication is the root of all evil
**How do you write functions like this?** Writing code is like any other kind of writing: the first version always requires a lot of refinement.

Every system is built from a domain specific language designed by the programmers to describe that system. Functions are the verb of that language, and classes are the nouns.

Master programmers think of systems as stories to be told rather than programs to be written.


# Comments
> Don’t comment bad code - rewrite it!

Comments are not “pure good”: at best, comments are a necessary evil.

If our programming language was more expressive, or if we had enough talent to express our intent in code, we would not need comments very much - perhaps not at all.

The proper use of comments is to compensate for our failure to express ourselves in code. Comments are always failure: we need them, because we are not always able to express ourselves without them, but their use should not be celebrated.

Why comments are bad? Because they lie. Not always, and not intentionally - but too often. The older a comment it is compared to code, the more likely it is to be just wrong.

- Comments do not make up for bad code: clean and expressive code with few comments is far superior to complex code filled of comments. Instead of invest time writing the comment, invest it in cleaning up that code.
- Explain yourself in code, not in comments (unless impossible for some reason)
- Some examples of Good comments ✳️ legal comments (copyright, coding standard references, license, etc..) ✳️ Informative comments (describing a regex) ✳️ explain intent (explaining why a specific choice was taken and under which constraints) ✳️ clarification (clarify very long syntax) ✳️ explain consequences (eg: careful! this takes a lot of execution time) ✳️ TODO comments ✳️ amplification (amplify the importance of an implementation) ✳️ docs comments in public code (eg: javadoc)
- Some examples of Bad comments: 🔴 redundant comments (just repeating what the code is saying) 🔴 misleading comments 🔴 mandatory doc comments for every function 🔴 docs comments in non-public code 🔴 journals
<aside> 💡 Don’t use a comment when you can use a function or a variable

</aside>


# Formatting
When people look at our code, we want them to perceive that professionals have been at work.

Formatting is important! The purpose of formatting is to make the code more readable, therefore simplifying communication.

- Vertical formatting
    - 200/500 lines of code is the ideal max size for a source file
    - Newspaper metaphor: Think to source files as a newspaper article - you expect a headline at the top, telling what this is about; then a first paragraph giving a synopsis of the story, and moving down to the bottom of the article you have always more details. The same should happen in a source file/class
    - Vertical openness: leave a blank line between concepts (eg: a vertical blank line between functions)
    - Vertical density & distance: keep similar concepts together with no blank spaces (eg: all the dependencies)
    - Declare variables close to their usage
    - Declare instance variables at the top of the class
    - Dependent functions should be vertically close (if A calls B, I expect B to be right after A in the source code)
    - Conceptual affinity: keep similar concepts close
    - Vertical ordering: Dependent functions should be vertically close
- Horizontal Formatting
    - 100/120 chars is the ideal max size for a line
    - Horizontal openness and density: keep similar concepts together, separate different context with a blank space
    - Horizontal alignment: no need to align similar keywords over different lines
    - Indentation: There is a hierarchy in a source file, and to make it visible we should use indentation
        - do not break indentation, even if it’s a one line method
    - Team rules: A team of developers should agree on a single formatting style and stick to it

# Objects and Data structures
There is a reason to make variables privates: to avoid external world to depend on them.

- Avoid exposing variables with getters and setters blindly
- Data abstraction: hiding implementation is not just about adding a layer of function between the variables - it’s about abstractions! A class should expose an interface that allow its users to manipulate the essence of data without knowing the implementation
- Data/object anti-simmetry: objects hide their data behind abstractions and expose functions to operate on that data; data structures expose data and have no meaningful functions. They are virtually opposite.
    - Procedural code is code that use data structures: it makes it easy to add new functions without changing existing data structures
    - **OOP code makes it easy to add new classes without changing existing functions**
    - The idea that everything is an object s a myth: sometimes you just need a data structure
- The law of Demeter: a module should not know about the innards of the objects it manipulates. aka `don't talk with strangers`
    - Train wrecks: the code we usually see when we expose other classes that our class depends on (*ndr: message chain*)
- Data-Transfer Objects: a DTO is the “perfect” data structure, one with public variables and no functions.
    - Active Record: a special form of DTO that contains navigational methods like `save` and `find` (*ndr: usually used in ORMs*)

# Error handling
Things can go wrong, therefore we need to handle errors while programming to avoid our program is dominated by errors - meaning it’s impossibile to understand what happen if something goes wrong.

- Use exceptions rather than return codes
- Write your try-catch-finally statement first to make sure you don’t forget
- Avoid checked exceptions: checked exceptions means that every method signature also included the exceptions it could raise. This was a good idea in theory, but the ROI doesn’t justify it - especially because the exception must be in the signature of every method until there is a try catch for it, breaking open/close principle.
- Provide context with exceptions: make sure the exception expose the info to determine the source and location of an error
- Define exception classes in terms a caller’s needs: avoid to throw different exceptions if the caller don’t need to identify them differently
<aside> 💡 Wrap third-party API to minimize your dependency upon it and make it easier to mock it.

</aside>

- define the normal flow: use `special case pattern` to encapsulate special cases in a method
- don’t return null: make use of exceptions, special case pattern (`ndr: nullables and empty lists are a type of special case pattern`)
- don’t pass null:
<aside> 💡 Clean code is readable, but it also must be robust: there are not conflicting goals.

</aside>


# Boundaries
Sometimes we have third-party packages or we depend on teams in our company to produce a component or sub-system, and somehow we must cleanly integrate this foreign code with our own.


### Using third-party code
There is a natural tension between a client and a provider of an interface. The provider strive for broad applicability, while users wants an interface focused on their needs.

We should hide the interface and an abstraction to give it the boundaries we want.

Example: instead of directly using the Map java std lib class to handle a list of sensors, create a Sensors class that limit its interface to what we really need (while eventually using Map under the hood).


### Exploring and learning boundaries
We should create a test around a library we use, for every usage we want to use in our code.

This is not just a safety net when the provider updates to a new version, but also provide a way to explore and learn how that library works and how we need to use it, discovering the boundaries we want to give to it.

Learning tests cost nothing: we had to learn the API anyway, and with learning tests we also have a resulting artifact of that learning that can be useful later.


### Using code that does not yet exists
Another type of boundary is to separate the known from the unknown.

Define an interface to communicate with the part of the system that doesn’t exists yet: this not only decouple your code from the implementation of that piece, but also provide an abstraction for testing with a Test Double.


### Clean boundaries
Code at the boundaries needs clear separation and tests that define expectations.


# Unit tests

### The three laws of TDD
Writing unit tests first before real implementation is just the tip of the TDD iceberg. Consider the following three laws:

1. You may not write production code until you have written a failing unit test
2. You may not write more of a unit test than is sufficient to fail (and not compiling is failing)
3. You may not write more production code than is sufficient to pass the currently failing test
These three laws lock you into a cycle that is 30-seconds long (or so). Tests and production code are written **together**.


### Keeping tests clean
Having dirty tests is equivalent to don’t have tests - or even worse sometimes. The dirtier the test, the harder they are to change.

<aside> 💡 Test code is just as important as production code. It requires though, design, and care.

</aside>


### Test enables the -ilities
If you don’t keep your tests clean, you will lose them - and with them the ability to keep production code flexible. Unit tests keeps code flexible because they remove fear in changing code!


### Clean tests
What makes a test clean?

- Readability
- Readability
- Readability
What makes test readable? The same things that makes other code readable: clarity, simplicity, and density of expression.

- A dual standard: Test code doesn’t require the efficiency that production code needs.
- One assert per test: is a good guideline to try to have one assert per test, but it’s not a problem if we break this with common sense
- Single concept per test: a better rule than the previous is to have a single concept tested in a test (eg: add months calculation test with multiple use cases and asserts of add months attempts)

### F.I.R.S.T. rules for Unit tests
- F → Fast - tests should be quick to enable you to run them very frequently
- I → Independent - tests should be independent, you could run them in random order
- R → Repeatable - tests should be repeatable in any environment
- S → Self-Validating - tests should have a boolean output: either they pass or fail
- T → Timely - tests should be written timely, just before the production code

# Classes
- organize your classes:
    - public static constants
    - Private static variables
    - Private instance variables
    - Public functions, with its direct private functions right below it
- Avoid making things public just for tests - keep it as last resource for emergencies, and use protected + inheritance instead (build a testable SUT test class)
- Classes should be small! Every class should have only one responsibility
    - The name of the class should describe its responsibility
    - If we can’t easily identify the name, the class is probably too big
    - If the name is ambiguous, the class probsbly have too many responsibilities
    - We should be able to write a brief description of the class I around 25 words
<aside> 💡 A class that does too much things is called God class

</aside>


### Single responsibility principle
> A class should have one, and only one, reason to change.

Identifying responsibilities help us in recognizing and creating better abstractions.

SRP is easy to understand but hard to achieve, because getting software to work and making it clean are two very different activities.

We are not done once the program works!

We want our systems to be composed of many small classes, each encapsulating a single responsibility, with a single reason to change, collaborating with each others to achieve the desired system behavior.


### Cohesion
Classes should have a small number of instance variables. We want cohesion to be high: the more instance variables a method use, the more cohesive is to its class.

Maintaining cohesion leads to many small classes.


### Organizing for change
In most systems, change is continual: every change has a risk that the existing behaviors no longer works as expected.

Organizing our class makes it easier to spot multiple responsibilities.


### Isolating from change
Needs will change, therefore code will change.

In OOP we have abstract classes, repressing a concept, and concrete classes, that contains an implementation of that concept.

Dependencies should always rely to the abstracts to avoid coupling with implementation details.

This is Dependency Inversion principle.


# Systems
We need to stay clean also at a higher level of abstraction, at a system level, to ensure the system support teams to work well.


### Separate constructing a system from using it
*Software systems should separate the startup process - when the application objects are constructed and the dependencies are wired together - from the runtime logic that takes over after startup.*

**Separation of concerns** is one of the oldest and most important techniques.

For example, when we make an instance of a dependency as part of a method logic we are making a mistake.

**Separation of main**

Move all aspects of construction to `main` , and design the rest of the system assuming that all objects have been constructed and wired up appropriately.

**Factories**

When the application must be responsible about when an object is instantiated, we can use factories: the Abstract Factory pattern gives the application the ability to decide when to build the class, but keeps the details of that construction hidden and separate.

**Dependency Injection**

Dependency injection (DI) is a powerful mechanism to separate construction from use, applying Inversion of Control to dependency management.

Inversion of Control moves the secondary responsibilities to other objects that are dedicated to that purpose. In dependency injection context, this means that an object should take care of instantiating his dependencies by itself.

This is a global concern, which is why this is typically done in `main` or a dedicated global `container` .


### Scaling Up
Is is a myth that we can get systems “right the first time”. Instead, we should implement only today’s stories, then refactor and expand the system to implement new ones tomorrow.

This is the essence of iterative and incremental agility - and it can be done also for the system: the ephemeral nature of software makes this possible, but it can only be achieved if we maintain separation of concerns appropriately.


### Test-Driven the system Architecture
It is not necessary to do a Big Design Up Front: this is harmful because it inhibits adapting to change. We can start small (but decoupled) and then incrementally grow the complexity of our architecture. This is not possibile with buildings, for example.


### Optimize decision making
It’s best to give the responsibility of a choice to the most qualified person. It is also wise to postpone decisions until the last responsible moment: this isn’t lazy or irresponsible: it lets us makes the more informed decision possibile, with the best information possibile.

A premature decision (a decision taken with suboptimal knowledge) can raise very big issues.


### Use standards wisely, when they add demonstrable value
Standards makes it easier to reuse ideas and components and recruit people, but is not always the best choice - make sure to evaluate the advantages a standard solution can give you and not just use it blindly.


### Systems needs Domain-Specific Languages
If you implement domain logic in the same language that a domain expert uses, there is less risk that you will incorrectly translate the domain into the implementation.

<aside> 💡 Systems must be clean too, and never forget to use the simplest thing that can possibly work.

</aside>


# Emergence

### Getting Clean via Emergent Design
Follow the 4 rules of Simple Design by Kent Beck to create well-designed software:

1. Runs all the tests
2. Contains no duplication
3. Expresses the intent of the programmer
4. Minimizes the number of classes and methods
**1. Runs all the tests**

<aside> 💡 A design must produce a system that act as intended. A system that is comprehensively tested and passes all its tests all of the time is a testable system, which means you can verify it act as intended.

</aside>

1. **Contains no duplication**
2. **Expresses the intent of the programmer**
3. **Minimizes the number of classes and methods**
<aside> 💡 Once we have tests, we are empowered to keep our code and classes clean. We can achieve this by incrementally refactoring the code: for each few lines we add, we pause and reflect on the new design to evaluate if it can be simplified or improved.

***Having tests eliminates the fear that we could break the code while doing so!***

Duplication is the primary enemy of a well-designed system. There are multiple ways that duplication manifests itself: identical lines of code, but also similar or different but implementing the same behavior. Template Method Pattern can be used to remove duplication between similar classes.

Our code should be expressive: choose good names (we should be surprised when we discover what it does); keep functions and classes small to make it easier to read them but also to give them a proper name; use standard nomenclatures (like using a design pattern name when implementing it); keep your unit tests clean; most of all, make sure to put some effort in trying to be expressive.

</aside>


# Concurrency
> Objects are abstractions of processing. Threads are abstractions of schedule.

Writing clean program when concurrency is needed is very hard.

- concurrency is a decoupling strategy to decouple what we need to do from when it gets done
- This decoupling can improve the throughput and structure of an application (that now looks like it’s made by many little collaborating computers)
**myths and misconceptions**

- concurrency always improves performances - it can improve them only if it removes waiting time
- Doesn’t impact design - not true, decoupling what from when usually have a big impact on the structure
- concurrency adds overhead (it does indeed!)
- Correct concurrency is complex (of course)
- Concurrency bug aren’t usually reproducible (right!)
Concurrency defense principles

- Single responsibility principle: keep your concurrency related code separated from other code
- Limit the scope of data: encapsulate data strictly
- Use copies of data: if there is a way to avoid sharing objects, the resulting code will be far less likely to cause problems
- Threads should be as indipendent as possible

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: domain-driven-design-distilled ========
TITLE: Domain-Driven Design: Distilled
AUTHOR: ['Vaughn Vernon']
TOPICS: ['agile-software-development', 'ddd']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/domain-driven-design-distilled/content.md
---BODY---

# Domain-Driven Design: Distilled

## Summary

*(sintesi da scrivere)*

## Key Concepts

*(nessun contenuto)*

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: endymion-spring ========
TITLE: Endymion Spring
AUTHOR: ['Matthew Skelton']
TOPICS: []
SOURCE: {'type': 'wikipedia_page', 'url': 'https://en.wikipedia.org/wiki/Endymion_Spring'}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/endymion-spring/content.md
---BODY---

# Endymion Spring

## Summary

2006 book by Matthew Skelton

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

2006 book by Matthew Skelton

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

- [wikipedia_page](https://en.wikipedia.org/wiki/Endymion_Spring)



========8<======== ID: extreme-programming-explained ========
TITLE: Extreme Programming: Explained
AUTHOR: ['Kent Beck']
TOPICS: ['extreme-programming']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/extreme-programming-explained/content.md
---BODY---

# Extreme Programming: Explained

## Summary

Extreme Programming (XP) is about social change. It's about letting go of habits and patterns that were adaptive in the past, but now get in the way of us doing the best work.

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

# Extreme Programming

## What is XP?
Extreme Programming (XP) is about social change. It's about letting go of habits and patterns that were adaptive in the past, but now get in the way of us doing the best work.

XP is a style of software development focusing on excellent application of programing techniques, clear communication, and teamwork which allows us to accomplish things we previously could not even imagine.

XP includes:

- A philosophy of software development based on the values of communication, feedback, simplicity, courage, and respect.
- A body of practices proven useful in improving software development. The practices complement each other, amplifying their effect. They are chosen as expected of the values.
- A set of complementary principles, intellectual techniques for translating the values into practices, useful when there isn't a practice handy for your particular problem
- A community that shares this values and many of the same practices
XP is a path of improvement to excellence for people coming together to develop software. Here are its distinguishing points:

- short development cycles, resulting in early, concrete and continuing feedback
- incremental planning approach, which quickly comes up with an overall plan
- flexibly schedule the implementation of functionalities, responding to changing business needs
- reliance on automated tests written by programmers, customers and testers to monitor the progress of development
- reliance on oral communications, tests and source code to communicate system structure and intent
- reliance on an evolutionary design process that lasts as long as the system
- reliance on the close collaboration of actively engaged individuals with ordinary talent
- reliance on practices that work with both short-term instincts of the team members and long-term interest of the project
XP can be described this way:

- XP is lightweight, only do what you need to do to create value for the customer
- XP is a methodology based on addressing constraints in software development
- XP can work with teams of any size
- XP adapts to vague or rapidly changing requirements
XP means giving up old habits of working for new ways tailored to today's reality.

How does XP address the risks in the development process?

- Schedule slips ⇒ XP calls for short release cycles and calls for implementing the highest priority features first
- Project canceled ⇒ XP asks the business-oriented part of the team to choose the smallest release that makes the most business sense
- System goes sour ⇒ XP creates and maintains a comprehensive suite of automated tests
- Defect rate ⇒ XP tests from the perspective of both programmers and customers
- Business misunderstood ⇒ XP calls for business-oriented people to be first-class members of the team
- Business changes ⇒ XP shorten the release cycle, so there is less to change during the development of a single release
- False feature rich ⇒ XP insists that only the highest priority tasks are addressed
- Staff turnover ⇒ XP asks programmers to accept responsibility for estimating and completing the their own work and new team member are encouraged to gradually accept more and more responsibilities
So, what is XP?

- give up old, ineffective technical and social habit in favor of new ones that work
- fully appreciate yourself for total effort today
- striving to do better tomorrow
- evaluating yourself by your contribution to the team's shared goals
- asking to get some of your human needs met through software development

## Values, Principles, and Practices
Making values explicit is important because without values, practices quickly become rote, activities performed for their own sake but lacking any purpose or direction.

Practices are evidence of values. Values are expressed at such a high level that I could do just about anything in the name of value. Practices are clear.

Principles bridge the gap between values and practices. Principles are domain-specific guidelines for life.


## Values

### Communication
What matters most in the software development team is communication. Sometimes problems are caused by a lack of knowledge rather than a lack of communication. There's nothing you can do about these problems beforehand since you didn't know. When you encounter a problem, ask yourself if the problem was caused by a lack of communication.

Communication is important for creating a sense of team and effective cooperation.


### Simplicity
Simplicity is the most intensely intellectual of the XP values. Creating a system simple enough to gracefully solve only today's problem is hard work. The right question is "What is the simplest thing that could possibly work?".

Simplicity only make sense in context: a solution can be considered simple depending on his technological needs and the expertise of the team related to that technology.

Values are intended to balance and support each other: improving communication helps achieve simplicity by eliminating unneeded or deferrable requirements from today's concerns; achieving simplicity reduce the amount of stuff that you need to communicate.


### Feedback
A direction does not remain valid for long, whatever we are talking about. Change is inevitable, but change creates the need for feedback.

"Wouldn't it be easier just to do it right in the first place?" Of course it would, except for three things:

- We may not know how to do it right; especially if we are solving a new problem there may be several solutions possibles or no clear solution at all.
- What's right today may be wrong tomorrow. Changed outside our control or ability to predict can easily invalidate yesterday's decisions.
- Doing everything "right" today might take so long that changing circumstances tomorrow invalidate today's solution before it is even finished.
XP teams strive to generate as much feedback as they can handle as quickly as possible. The idea is to shorten the feedback cycle to minutes or hours instead of weeks or months.

Feedback is a critical part of communication (that makes the difference for an effective feedback) and also contributes to simplicity (for example, if unsure of which solution is the best, try a couple and then get the feedback you need).


### Courage
Courage means an effective action in the face of fear. Even if people involved in software development are not soldiers, they definitely feel fear in their work. How they handle that fear dictates whether they are working as an effective part of the team or not.

If you know what the problem is, it takes courage to do something about it. If you know there's a problem but you don't know what it is, it takes courage to wait for the real problem to emerge.

Courage can be a dangerous value if not counterbalanced with other values: doing something without regard for consequences is not effective teamwork. But: the courage to speak truths fosters communications; the courage to discard failing solutions and seek new ones encourages simplicity; courage to seek real, concrete answers creates feedback.


### Respect
The last value is pointed from the previous 4: if members of a team don't care about each other and what they are doing, XP won't work. Every person whose life is touched by software development has equal value as a human being: the contribution of each person to the team need to be respected.


### Other
Some other important values in software development include safety, security, predictability, and quality of life. They are not part of XP but they are surely important for the team.


## Principles
Values are too abstract to directly guide behavior; they don't provide concrete advice about what to do, so to gap the bridge between values and practices we need a bridge: this bridge is made by the principles. These are the principles that guide XP.


### Humanity
People develop software. Often, software development doesn't meet human needs nor leverage human strength. Acting like software is not written by people exacts a high cost on participants.

This isn't good for business either, with the cost of high turnover and missed opportunities.

What do people need to be good developers?

- Basic safety: freedom from hunger, physical harm, and threats to loved ones. Fear of job loss threatens this need.
- Accomplishment: the opportunity and ability to contribute to their society.
- Belonging: the ability to identify with a group from which they receive validation and accountability and contribute to its shared goals
- Growth: the opportunity to expand their skills and perspective
- Intimacy: the ability to understand and be understood deeply by other.
Part of the challenge of software development teams is balancing the needs of the individuals with the needs of the team. Always sacrificing your own needs for the team doesn't work.


### Economics
Somebody has to pay for all this. Software development should not strive for a "technical success" but should always take care of the economics risks.

Two aspects of economics that impact software development are the time value of money and the option value of systems and teams.

**The time value of money**: a dollar today is worth more than a dollar tomorrow. Software development is more valuable when it earns money sooner and spends money later.

**The option value of systems and teams**: if I can redeploy my program for a variety of tasks it's more much valuable than if I can use it only for the original intended purpose.


### Mutual benefit
Mutual benefit is the **most important XP principle** and the most difficult to adhere to. There are always solutions to any problem that cost one person while benefitting another. The computer business is really a people business and **maintaining the working relationship is important**.

**Extensive internal documentation** of software is an example of a practice that **violates mutual benefit**: I am supposed to slow down my development considerably so some unknown person in the potential future will have an easier time maintaining this code.

**XP solve this in mutually beneficial ways:**

- I write **automated tests**, **helping me** designing and implementing better code **today**; these tests will be useful for future programmers to use as well. This practice befits me now **and maintainers later.**
- I carefully **refactor** to remove **accidental complexity**, giving me both **satisfaction and fewer defect**; the code will also be **easier to understand** for those who will encounter it.
- **Names** in my code will be **explicit and coherent**, **speeding up my development** and making the **code clearer** for others.
If you want people to take your advice, you need to solve more problems than you create. Mutual benefit means looking for practices that benefit me now, me later, and customers as well.


### Self similarity
You can **try copying the structure of a solution into a new context**, event at different scales. For example, the basic rythm of development is that you write a test that fails and then you make it work. This rythm can work at different scales: in a quarter, you can list the themes to address and then address them with stories. In a week, you can list the stories you want to address, write tests expressing that stories, the make them work.

**But, careful**: just because you copy the structure of a solution that works in one context into another, **doesn't mean it will work. It's a good place to start, though.**


### Improvement
In software development, ***perfect*** **is a verb**, not an adjective. There is no perfect design, there are no perfect stories, etc. You can, however, perfect the process, the design, and the stories.

*"Best is the enemy of good enough"* it's good but it's missing the point of excellence: is not that mediocrity is preferable to waiting, but that **we do the best we can today, striving for doing better tomorrow**. Don't wait for perfection to begin.

Translating this value into practice means starting an activity right away and refine the result of that activity over time. Put improvement to work by not waiting for perfection: find a starting place, get started, and improve from there.


### Diversity
Software development teams where everyone is alike can be comfortable but are not effective. Teem need to bring together a variety of skills, attitudes, and perspectives to see problem and pitfalls and **thinking to the problems in multiple ways**.

**Conflict is the inevitable companion of diversity**; not the "*we hate each other*" kind of conflict, but the "***there are multiple ways to solve this***" one. Multiple ways to solve a problem are an opportunity, not a problem. The diversity principle suggests that all ideas should be evaluated.


### Reflection
**Good teams** don't just do their work, they **think about how they are working and why they are working**, analyzing why they succeed or fail. They **don't hide** their **mistakes**, they **expose them** in order **to learn** from them.

Reflection is included in the quarterly and weekly cycles, but also in pair programming and continuous integration. But you shouldn't limit reflection to "official" opportunities. **Any moment** of conversation, shared meals, coffee, or whatever **can be** a **good** moment **for** team **reflection**.

To maximize feedback, reflection in XP is mixed with doing.


### Flow
A software development team should deliver a **steady flow of valuable software** by engaging in all the activities of development simultaneously.

History says teams were used to deliver value in **big chunks**, with *Big Bang* integrations. Often teams make the problem bigger by responding to stress by making the chunk even bigger. This **means less feedback, and less feedback makes the problem worse**.

Daily builds are an example but it's not enough that the software compile and gets deployed every day: the code should also function correctly every day or, better yet, several times a day.


### Opportunity
**Learn to see problems as opportunities for change.**

You might not know what to do about a problem, you might want to take more time to think about it: sometimes this is a mask for the fear of consequences if something goes wrong, sometimes patience solves a problem by itself.

Some examples of problem becoming opportunities:

- Can't make accurate long term plans? ⇒ Have a quarterly cycle to refine long-term plans.
- A person alone make lots of mistakes? ⇒ Pair Programming

### Redundancy
The **critical**, difficult **problems** in software development **should be solved in several different ways**: even if one solution fails, the others will prevent disaster. The cost of redundancy is more than paid for by the savings from not having the disaster.

Defects are critical, difficult problems addressed by XP in many different ways: pair programming, continuous integration, sitting together, real customer involvement, daily deployments.


### Failure
**Don't be afraid of failing.**

**Isn't failure waste? No, if it imparts knowledge**. Knowledge is valuable and sometimes hard to come by. Failure may not be an avoidable waste. If you know the best way to implement the story, you would just implement it that way. Given you don't know the best way already, the cheapest way to find out is by trying alternatives.

NB: this is not justifying failure when you really know better, but when you don't just risk failure because it will teach you the best way to solve the problem.


### Quality
Quality is not a control variable: **projects don't go faster by accepting lower quality**. Pushing quality higher often result in faster delivery.

Quality isn't a purely economic factor: people need to do work they are proud of.

If you can't control project quality by controlling quality, how can you control them? Time and cost are more often fixed. XP chooses scope as the primary means of planning, tracking, and steering projects.


### Baby Steps
Avoid making changes in big steps, because big changes are hard to handle. **A team under the right conditions can take many small steps so rapidly to appear to be leaping.**

Baby steps are expressed in practices like test-first programming or continuous integration.


### Accepted Responsibility
**Responsibility cannot be assigned, can only be accepted.** If someone tries to give you responsibility, only you can decide if you are responsible or if you are not.

With responsibility comes authority.


### Conclusion
**Principles can help you understand the practices better** and improvise complementary practices when you don't find one that suits your purpose. The principles give you a better idea of what the practices are intended to accomplish.


## Practices
Practices are the kind of things you will see XP teams doing daily.

Practices only make sense if related to principles, otherwise they become rote; pairing just to make your boss happy is frustrating, but if you recognize its values in communication, feedback, simplicity, courage and respect it makes a lot of sense.

Practices are situation dependent: if the situation changes, you will choose different practices to meet those conditions. Value doesn't change, principles can be used to figure out something new.

Applying a practice is a choice: XP offers a collection of practices that work and work even better together, and they have been used before.


### Primary Practices
**Sit together**

People should work in an open space big enough for the whole team: meet the privacy needs by offering some private spaces nearby and limiting working hours to allow people to meet thei privacy need elsewhere.

Also, multisite teams can do XP: practices are just theories, predictions. Here the prediction is that the more face time you have, the more human and productive the project will be. Technology can help and make teamwork remotely, only if you have problems think about ways to sit together even by traveling.

**Whole team**

The team should include people with all the skills and perspectives necessary for the project to succeed: nothing more than the old idea of cross-functional teams.

What constitutes a "whole team" is dynamic: if a set of skills or attitudes become important, bring a person with these skills on the team; if someone is no longer necessary, he can go elsewhere.

**Informative Workspace**

Make your workspace about your work. An interested observer should be able to walk into team space and get a general idea of how the team works and how the project is going in 15 seconds.

Some example of this practice are:

- the kanban board on the wall
- charts about something that needs monitoring
**Energized Work**

Work only as many hours as you can be productive and only as many hours as you can sustain. Burning yourself out unproductively today and spoiling the next two days work isn't good for you or the team.

Software development is a game of insight and insights comes to the prepared, rested, relaxed minds.

You can make incremental improvements in work hours: start by working the same hours but manage time better: declare focus time of at least a couple hour a day for coding, turning off notifications in that two hours. That may be enough to start and set the stage for fewer hours later.

**Pair Programming**

All production code should be written with two people sitting at one machine, working together. Pair programming is a dialog between two people simultaneously programming and try to program better. Pair programmers:

- keep each other on task
- brainstorm refinements to the system
- clarify ideas
- take initiative when their partner is stuck, thus lowering frustration
- hold each other accountable to the team's practices
Pairing doesn't mean that you can't think alone: if you need to work on an idea alone, go do it.

Pair Programming is tiring, but satisfying: most programmers can't pair for more than five or six hour a day. Breaks become more important and helps keeping fresh for the entire day.

Pair should rotate their role frequently.

**Stories**

Plan using units of customer-visible functionality. Early estimation is a key difference between stories and other requirements practices: estimation gives the business and technical perspectives a chance to interact, which creates value early, when an idea has most potential.

Starting from a short name given to the story and a description, the team will start refine this and make questions in order to be able to estimate.

For example, if the question is "Do you want a Ferrari or a minivan?" the answer is definitely the Ferrari; but then when someone make a point like "Ferrari costs 150k and the minivan 25k" things changes: constraints are now different and adding this constraints one by one will make the estimation more precise.

**Weekly Cycle**

Plan work a week at a time. Every week the team should have a meeting for:

- reviewing progress to date, including how actual progress for previous week met expectations
- have the customers pick a week's worth of stories to implement this week
- break stories into tasks: team members subscribe to tasks and estimate them
The work should start by writing automates tests that will run when stories are completed. Then spend the rest of the week completing the stories and getting the tests to pass. A team proud of his work will fully implement the stories, not just do enough work to pass the tests.

Planning is a form of necessary waste: it doesn't create much value by itself. The team should work to gradually reduce the percentage of time spend planning.

**Quarterly Cicle**

Plan work a quarter at a time. Once a quarter reflects on the team, the project, its progress, and alignment with larger goals. During quarterly planning:

- Identify bottlenecks, especially those controlled outside the team
- Initiate repairs
- Plan the theme or themes for the quarter
- Pick a quarter's worth of stories to address those names
- Focus on the big picture, where the project fits within the organization
The separation of themes and stories is intended to address the tendency of team to get focused and exited about the details of what they are doing without reflecting on how the week's stories fit into the big picture.

**Slack**

In any plan, some minor tasks should be included: they can be dropped if you go behind. You can always add more stories later and deliver mote than you promised. It's important to meet commitments.

Slack can be structured in many ways: for example, 20% of the weekly budget should be for programmer-chosen tasks. You may need to start with slack yourself, even if the organization is not ready for honest and clear communication.

**Ten-Minute Build**

Automatically build the whole system and run all of the tests in ten minutes. A build that take longer than this will be used much less often, missing the opportunity for feedback.

The ten-minute build is an ideal: what do you do on your way to that ideal? The practice suggest 3 clues: ***automatically***build the ***whole*** system and run ***all*** of the tests in ten minutes.

If the process is not automated, that's the first place to start. Then you may be able to build only a part of the system, so go with the whole stuff. Finally, you may be able to run only tests covering the part of the system interested by the change.

**Continuous Integration**

Integrate and test changes after no more than a couple of hours. Team programming isn't a divide and conquers problem, it's a divide, conquer, and integrate problem. The integration step is unpredictable and can easily take more time than programming; the longer you wait for integration, the more it costs and the more unpredictable the cost becomes.

Continuous integration should be complete enough that the eventual first deployment of the system is no big deal.

**Test-First Programming**

Write a failing automated test before changing any code. Test-first programming address many problems at a time:

- scope creep - by stating explicitly and objectively what the program is supposed to do, you give yourself a focus for your coding
- coupling and cohesion - if writing a test it's hard, it's a signal that there are design problems
- trust - writing clean code that works and demonstrating your intentions with automated tests give your teammates a reason to trust you
- rhythm - when programming test-first, it's clearer what to do next: either write another failing test or make the broken one work; this helps not getting lost
There are not real alternatives to tests for verifying the behavior of the system.

**Incremental Design**

Invest in the design of the system every day. Strive to make the design an excellent fit for the needs of the system each day. XP teams work hard to create conditions under which the cost of changing the software doesn't rise catastrophically. XP teams are also confident in their ability to adapt the design to future requirements. Design done close to when it is used is more efficient.


### Corollary Practices
**Real Customer Involvement**

Make people whose lives and business are affected by your system part of the team. Visionary customers can be part of quarterly or weekly planning.

You will get different results with real customers involved. When you act trustworthy and have nothing to hide, you are more productive.

**Incremental Deployment**

When replacing a legacy system, gradually take over its workload beginning very early in the project. Find a little piece of functionality or a limited data set you can handle right away, deploy it, find a way to run both program in parallel.

This scaffolding is the price for insurance.

**Team Continuity**

Keep effective teams together. Value in software is not created only by what people knows and do, but also from their relationship and what they can do together.

By mostly keeping team together and yet encouraging a reasonable amount of rotation, the organization gets the benefits of both stable teams and of consistently spread knowledge and experience.

**Shrinking Teams**

As a team grows in capabilities, keep its workload constant but gradually reduce its size. This free people to form more teams. When the people has too few members, merge it with another.

**Root-Cause Analysis**

Every time a defect is found after development, eliminate the defect and it's cause. The goal is not just removing the defect but that the team will never make the same kind of mistake again.

In XP this is the process for responding to a defect:

1. Write an automated system-level test that demonstrates the defect, including the desired behavior
2. Write a unit test with the smallest possible scope that also reproduce the defect
3. Fix the system so the unit test works; this should make system test to pass also, if not return to point 2 to cover more with a new unit test
4. Once the defect is resolved, figure out why the defect was created and wasn't caught
A possible technique to understand the why is the 5 Whys technique: ask 5 times why a problem occurred.

**Shared Code**

Anyone in the team can improve any part of the system any time. The risk of someone making changes without responsibility to the team can be avoided with Pair Programming and Continuous integration: the first helps teammates demonstrate their commitment to quality while the second can protect from changes that breaks the tests.

**Code and Tests**

Only code and test should be maintained; generate other documents from the code and tests. Rely on social mechanisms to keep alive the important history of the project.

**Single Code Base**

There is only one code stream: you can develop in a temporary branch, but never let it live longer than a few hours. Multiple code streams are an enormous source of waste in software development.

**Daily Deployments**

Put new software in production every night. Any gap between the programmer's desk and production is a risk. A developer out of sync with deployed software risks making decisions without getting appropriate feedback.

Daily deployments is a corollary practice because it has so many prerequisites: defect rate must be at most a handful per year; build environment must be smoothly automated; deployment tools must be automated, including the ability to roll out incrementally; trust in the team and with the customer must be highly developed.

Daily deployments is a good example of a practice that point in a direction: if you can't deploy more than once per year, it might looks a dream. You can reach that objective one small step at a time.

**Negotiated Scope Contract**

Write contracts for software development that fix time, costs, and quality but call for an ongoing negotiation of the precise scope of the system. Reduce risk by signing a sequence of short contracts instead of a long one.

**Pay-per-use**

With a pay-per-use system, you charge every time the system is used. Money is the ultimate feedback. Even if you can't implement pay-per-use, you might be able to fo to a subscription model, in which software is purchased monthly or quarterly.


## The Theory of Constraints
Find opportunities to improve software development by first figuring out which problems are development problems. One approach to looking at the throughput of entire systems is the Theory of Constraints.

Example: washer takes 45 minutes, dryer takes 90 minutes, folding the clothes take 15 minutes. The bottleneck in the system is drying. If I get two washers I won't get any more clothes finished: I'll temporarily get more clothes washed, but then I have to handle wet clothes that wait for the dryer, risking getting even fewer clothes finished than before. I have no choice but to do something about the dryer.

The Theory of Constraints says that in any system there is one constraint at a time (occasionally two): to improve overall system throughput you have to first find that constraint, then solve it.


## Scaling XP
How XP can scale? Software development scales along many dimensions:

- number of people
- investment
- size of the entire organization
- time
- problem complexity
- solution complexity
- consequence of failure

### Number of people
When faced with the appearence need of a large team, perhaps the problem really can be solved by a small team. If just using a smaller team doesn't work, turn the big programming problem into several smaller problems, each workable by a small team.


### Investment
If you are starting large-scale software development XP-style, find an ally in finance early on to help you navigate these issues. Each company seems to account for software a little differently.


### Size of the entire organization
How do you apply XP in part of the organization, when most of the organization isn't changing?

This is an area where XP team can benefit from a skilled project/product manager. Teams handle things in XP ways and the PM present data about team work in a shape that the company can absorb.


### Time
Long running XP projects work well because the tests prevent many of the common maintenance mistakes and tell the story of the development process. The simplest case of scaling in time is if the team maintains continuity throghout the project: automated tests and incremental design serve to keep the system alive and capable of further growth.


### Problem complexity
XP is ideally suited for projects requiring the close cooperation of specialists. One challenge at the beginning of such projects is getting everyone to work in concert while learning a bit about each others specialities.


### Solution complexity
Sometimes systems grow big and complicated, out of proportion to the problem they solve. The challenge is to stop making the problem worse. The strategy is always the same: chip away at the complexity while continuing to deliver.


### Consequence of failure
In safety or security-critical projects, some rules changes because the number one value becomes safety or security. Traceability, the ability to link what has changed to why has changed, is built into XP.


## Purity
A frequent question is: "Is my team extreme?". There isn't a binary answer.

Are the team member doing all the things that make sense to them in a sustainable way? That's the question, but only the team can answer.

The values, principles and practices are there to provide guidance, challenge, and accountability.

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: fearless-organization-creating-psychological ========
TITLE: Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth
AUTHOR: ['Amy C. Edmondson']
TOPICS: []
SOURCE: {'type': 'homepage', 'url': 'https://fearlessorganization.com/the-fearless-organization'}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/fearless-organization-creating-psychological/content.md
---BODY---

# Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth

## Summary

The Fearless Organization offers practical guidance for teams and organizations to build psychological safety, enabling learning, innovation, and growth. Written by Amy C. Edmondson, it explains how candid communication and a safe environment drive performance.

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

The Fearless Organization offers practical guidance for teams and organizations to build psychological safety, enabling learning, innovation, and growth. Written by Amy C. Edmondson, it explains how candid communication and a safe environment drive performance.

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

- [homepage](https://fearlessorganization.com/the-fearless-organization)
- [homepage](https://www.wiley.com/en-us/The+Fearless+Organization%3A+Creating+Psychological+Safety+in+the+Workplace+for+Learning%2C+Innovation%2C+and+Growth-p-9781119477266)



========8<======== ID: from-objects-to-functions-build-your-software ========
TITLE: From Objects to Functions: Build Your Software Faster and Safer With Functional Programming and Kotlin : Barbini, Uberto: Amazon.it: Libri
AUTHOR: ['Uberto Barbini']
TOPICS: ['software-development']
SOURCE: {'type': 'website', 'url': 'https://www.amazon.it/gp/product/1680508458?smid=A11IL2PNWYJU7H&psc=1&linkCode=sl1&tag=dscillialikes-21&linkId=b2098b24b5f7f67ae3431df091cee679&language=it_IT&ref_=as_li_ss_tl'}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/from-objects-to-functions-build-your-software/content.md
---BODY---

# From Objects to Functions: Build Your Software Faster and Safer With Functional Programming and Kotlin : Barbini, Uberto: Amazon.it: Libri

## Summary

The provided text appears to be a product page from Amazon Italy, specifically for the book "From Objects to Functions: Build Your Software Faster and Safer With Functional Programming and Kotlin" by Uberto Barbini.

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

Detailed summary

- The provided text appears to be a product page from [[amazon-company|Amazon]] Italy, specifically for the book "From Objects to Functions: Build Your Software Faster and Safer With Functional Programming and Kotlin" by Uberto Barbini.
- The book is categorized under "Libri", which is Italian for "books", and it has a commission percentage of 4.50%, although the tariff is not available.
- The product is excluded from Amazon's Affiliate program, which means that direct linking to the product is not supported, and instead, customers should be directed to another product or the category for this product.
- The page provides an option to generate a textual link, but it seems to be experiencing technical difficulties, as indicated by the "Impossibile generare il link" message, which translates to "Unable to generate link" in English.
- To resolve the issue, users are advised to update the "ID negozio" (store ID) and/or the "numero di tracciamento" (tracking number) and then click on "Ottieni link" (Get link) to generate a new textual link.
- The book's title suggests that it focuses on functional programming and the use of Kotlin to build software faster and safer, implying that it may be a useful resource for software developers and programmers interested in functional programming and the Kotlin language.

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

- [[amazon-company]]

## Sources

- [website](https://www.amazon.it/gp/product/1680508458?smid=A11IL2PNWYJU7H&psc=1&linkCode=sl1&tag=dscillialikes-21&linkId=b2098b24b5f7f67ae3431df091cee679&language=it_IT&ref_=as_li_ss_tl)



========8<======== ID: implementing-lean-software-development ========
TITLE: Implementing Lean software Development
AUTHOR: ['Mary Poppendieck', 'Tom Poppendieck']
TOPICS: ['agile-software-development', 'lean', 'product-development', 'tech-lead']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/implementing-lean-software-development/content.md
---BODY---

# Implementing Lean software Development

## Summary

The 3 biggest waste in software development are:

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

# Premise: principles of Lean Software Development

## Eliminate Waste
The 3 biggest waste in software development are:

1. Extra features: we need a process that allows us to develop just those 20% of features that gives 80% of values
2. Churn: if you have requirements churn, you are specifying too early; if you test and fix cycles, you are testing too late.
3. Crossing boundaries: organizational boundaries can increase costs by 25% or more; they slow down response time and interfere with communication

## Build quality in
If you often find defects in your verification process, your process is defective.

1. write mistake-proof code with Test-Driven Development: write executable specifications instead of requirements
2. Stop building legacy code: legacy code is code that lacks automated unit tests and acceptance tests
3. The Big Bang is obsolete: use Continuous Integration and nested synchronization

## Create Knowledge
Planning is useful, learning is essential.

- use the scientific method: teach teams to establish hypothesis, conduct many rapid experiments create concise documentation and implement the best alternative
- Standard exists to be challenged and improved: embody the current best know practices in standards that are always followed while actively encourage everyone to challenge and improve the standard
- Predictable performance is driven by feedback: a predictable organization doesn’t guess about the future and call it a plan - instead, develop the capacity to rapidly respond to the future as it unfolds

## Defer commitment
Abolish the idea that is a good idea to start development with a full specification.

- break dependencies: system architecture should allow for the addition of any feature at any time
- Maintain options: think of code as an experiment and make it change tolerant
- Schedule irreversible decisions at the last responsible moment: learn as much as possible before making irreversible decisions

## Deliver fast
List and queues are buffers between organizations that slow things down.

- rapid delivery, high quality and low cost are fully compatible: companies that compete on the basis of speed have a significant cost advantage, deliver superior quality and are more close to their customer needs
- Queuing theory apply also to development, not only servers: focusing on utilization creates traffic jams that actually reduce utilization; drive down cycle time with small batches and fewer things in process
- Limit work to capacity: establish a reliable, repeatable velocity with iterative development; aggressively limit the size of lists and queues to your capacity to deliver

## Respect people
Engaged, thinking people provide the most sustainable competitive advantage.

1. Team thrive on pride, commitment, trust and applause: what makes a team? People are mutually committed to achieve a common goal.
2. Provide effective leadership: effective leaders bring out the best from the team
3. Respect partners: commitment to the company must never create conflict of interest

## Optimize the Whole
Brilliant products emerge from a unique combination of opportunity and technology.

- focus on the entire value stream:
    - from concept to cash
    - From customer request to deployed software
- Deliver a complete product, not just software - using a complete team
- Measure UP:
    - Cycle time for process capability
    - Delivered business value for team performance
    - Net promoter score for customer satisfaction

# History
> This is a book for doers who want their actions aligned with there they can do the most good. (Kent Beck)

- In 1785 in France the idea of interchangeable parts was born thanks to Honorè Blanc, and then in -m1914 it became the basics of the Ford mass production system.
- Mass production doesn’t work well because workers feels under paid, with a bad boring repetitive work - good pay from Ford wasn’t enough to solve this
- Toyota‘a family (originally Toyoda) was in charge of an automatic loom production company in 1927
- A few years later they moved to the first production car and created the Toyota production system to be able to battle against Americans companies
- most important people:
    - Kiichiro Toyoda - a family member who sparkled the idea
    - Taiichi Ohno - the man who was able to make that idea truth in prsctice
    - Shigeo Shingo- a consultant that helped Ohno
- System Principles: ![](https://prod-files-secure.s3.us-west-2.amazonaws.com/3bd2cb3a-4c5b-441a-9e56-417111ffc8bf/95cb57c9-0352-451b-961d-81cf7b99354b/IMG_8747.jpeg)
Inventory is the water level: when water is low, big rocks begins to surface and become obstacles. Better to keep the water high and go above the rocks. Rocks are waste, things like defects, processes that complicate things, etc. When doing “just in time”, you want to avoid local efficiency optimization: the overall global performance will increase when the local pieces are not at max utilization. A practice fundamental for “just in time” is the JIDOKA (stop the line): to achieve it, you want people to maintain a state of mindfulness by
    - Autonomation (Jidoka, stop the line) —> from engineering perspective, this means zero inspection, build a mistake-proof system
    1. Preoccupation with failure: thing about what could go wrong and be ready and prepared for it
    2. Reluctance to simplify: safety is as complex as our business
    3. Sensitivity to operations: every manager is expected to spend time working on the line
    4. Commitment to learn from mistakes: investigate even the smallest incident to determine how to prevent it from happening again
    5. Deference to expertise: people doing the work are the ones who really understand how it works
    - Just in time flow —> from engineering perspective, this means nonstock production - in software we can identify this with small batches releases

### Lean
Lean production have become the new name for Toyota production system and “just in time”, after the book “The Machine that changed the world” in 1990.

The main point is that “*a truly lean plant transfers the maximum number of tasks and respond to those workers actually adding value to the car on the line, and it has in place a system to detect defects that quickly traces every problem to its ultimate source*”.

In the following years, Lean thinking has been moved from manufacturing to other areas.



**Lean supply chain**

Lean needs to be extended to suppliers because mass production and lean manufacturing doesn’t work well together: Toyota helped his supplier in implementing his production system!

**Lean Product Development**



Product development is a knowledge creation process, and the Toyota way creates knowledge through broad exploration, hands-on experimentation with multiple prototypes and regular integration meetings.



**Toyota Product Development System**

- **System Design by an Entrepreneurial Leader:** the Chief Engineer owns responsibility for the business success of the product. He creates a vision which he transmit to the development team continuously.
- **Expert Engineering Workforce**: top notch technical people in the team. Managers are teachers who have become master in the area they supervise.
- **Responsibility-Based Planning and Control**: engineers know what’s expected at the next synch point and they deliver the expected result without need for tracking.
- **Set-Based Concurrent Engineering**: explore multiple design and converge on the optimal solution by gradually narrowing options. Do not make decisions until they absolutely must be made and work hard to maintain options so that decisions can be deferred as late as possible. The paradox is that this approach create knowledge by redundancy which might appear to be waste but when looking at the overall system it allows to arrive at a more Optimal solution much faster.
**Lean Software Development**

Software development is a form of product development.


# Principles

## Principles and practices
Principles are underlying truth that doesn’t change over time and space. Practices, instead, are the application of principles in a specific situation. While principles remains the same, practices can (and should) change when you move from a context to another.

When you want to change your software development process, you can either:

- copy practices from other contexts
- learn the principles and then pick the practices coherent with them
The second approach is generally better but actually a mix of the two is ideal: copy pasting practices without knows the principles is proved wrong from industry history, but if you know the principles it makes a lot of sense to copy practices from similar contexts and adapt to your to speed up the introduction of new practices to improve the process.


## Software development
Lean practices from manufacturing doesn’t translate easily into software development because both “software” and “development” are very different than operations and logistics.


### Software
Embedded software is the part of a product that is expected to change: if it doesn’t changed it could be hardware.

Almost everything we know about good software architecture is about making software easy to change: over half of software is developer after the first release to prod.

All code worthy of the name “software” should be designed and built with change tolerance in mind.


### Development
Development is the process of transforming an idea into a product. There are two school of thought about how to do development:

1. The deterministic school, that starts by creating a complete product definition, then creates a realization of that definition.
2. The empirical school, that starts with a high-level product concept and then establishes feedback loops that adjust activities to create the optimal interpretation of the concept.
Toyota production system is entirely an empirical school, starting with a vehicle concept rather than a definition.

For example, the Prius concept called for a target of 20km/lt and a roomy cabin, not for a hybrid engine and specific dimensions: those where ideas that came out and was validated through the development process.

Any development process that deals with a changing environment should be an empirical process, because it’s the best known way to adapt to change - and software is by its very nature something that should be adaptable to changes, therefore it should be developed through the empirical process.


# The 7 principles of Lean Software Development

## Eliminate waste
Lean Software Development, same as Toyota Production System, is a management system for “the absolute elimination of waste”: look at the timeline from when you receive an order to address a customer need (whatever this means in your organization) to the moment when the software that address that need is Deployed to production - Lean Software Development focuses on reducing that timeline by removing all non value-adding wastes.

To eliminate waste, you have to be able to recognize it first!

Since waste is everything that doesn’t add valued the first step to identity waste is to have a clear idea of what “value” is: we need to understand what our customer actually values. In software, value often change because also the customer change its awareness about its own needs, so there is no solution than continuously giving value to the customer.

Now, waste is everything that interferes with giving customers what they value at the time and place where it will provide the most value for them. Anything we do that doesn’t add value to customer is waste, and anything that cause delay in giving customers the value is also waste.

In manufacturing, for example, inventory is waste because it has to be handled, moved, stored, tracked, etc - it’s a large cost multiplier, so the idea imho reduce waste is to carry as little inventory as possible.

In Software Development, inventory is partially done work: it has the same issues of manufacturing inventory (gets lost, grows obsolete, hides quality problems, ties up money) and it contains much of the risk in software development.

A big form of waste then is “churn” of backlog items, always associated with large inventories of partially done work. When requirements are specified long time before, of course they change - when testing occur long time after coding, fixes are inevitable - and delayed work and integration becomes a consequent churn.

But the biggest waste in software are extra features, by far. Only 20% of features are typically used regularly. 2/3 of features are rarely or never used. Features that really weren’t needed in the first place. This means a huge cost of developing extra features and useless complexity added to the codebase.


### Myth: Early specification reduces waste
This myth comes from a game we do with our customers asking them to specify everything in advance exactly as they want. This is unrealistic. The fame of scope control has the opposite effect, creating scope bloat.

In the same way as overproduction is the biggest waste in manufacturing, over features are in software development. Unused code still requires unnecessary testing, documentation, and support.

We need a process that allow us to develop the 20 percent of the code that will deliver 80 percent of the value, and only then go on to develop the next most important features.

We should never establish scope with a list of everything a software might possibly need.


## Build quality in
The goal must be to build quality into the code from the start, not test it later. The focus is not in putting defects in a tracking system, but to avoid creating them in the first place.

Shigeo Shingo defines two types of inspection:

1. After defects occur
2. To prevent defects
If you really want quality, you focus on 2: you don’t inspect after the fact, instead you control conditions to not allow defects in the first place. if not possible, you inspect the product after every small step, so that defects are caught immediately once they occur and are cheap to fix: stop the line and fix them immediately!

Defect tracking system are queues of partially done work (or rework), and therefore they are waste.

The goal is to not have defects in the queue!

You can TDD to unit test every minutes or so your changes, then run the full suite at least once a day and an even more complete test suite might be scheduled weekly.

Using TDD reduce defects there fire reduce unplanned work and waste, rising the productivity of the team immensively.


### Myth: the Job of Testing is to find defects
Wrong. The job of tests is to **prevent** defects.

This doesn’t mean that verification is not necessary, but finding defects there should be the exception, not the rule.

The slogan “do it right the first time” in software doesn’t mean that written code should never change! It means that we use TDD and CI to be sure the code behaves exactly as expected at that point in time.

The best opportunity to reduce waste is to write less code: we should find the 20% of code (features) that provide the 80% of value to customers and write that first. Then, we only add features that have lower cost than its value added to customer. When we add it, we refactor first to make the change easy, then make the (now) easy change.

We should expect to routinely change existing code.


## Create Knowledge
One of the biggest problems in “waterfall” development is the idea that knowledge (“requirements”) exists before development in a separate moment from coding.

This is a big mistake: software development is a knowledge-creating process.

While an overall architectural concepts will be sketched prior to coding, the validation of that idea will come once code is written. The design for software always occurs during coding, because an early design cannot fully anticipate the complexity encountered during an implementation and cannot take advantage of the feedback coming from building the software.

The development process should focus on creating knowledge and expecting the design to evolve, minimizing the time to lock down the design prematurely.

4 practices leading to successful software development:

1. Early release of a minimum feature set to customers for evaluation and feedback
2. Daily builds and rapid feedback from integration tests
3. A team and/or leader with the experience and instinct to make good features
4. A modular architecture that supports the ability to easily add new features
Companies that produce long-term excellence in product development share the common trait of generating new knowledge through disciplined experimentation and codify that knowledge to make it accessible to the company. They capture explicit data but also find a way to make that knowledge explicit.

They know that while learning about the product under development is important, it is fundamental that that knowledge is codified for use in future products.

You need a development process encouraging systematic learning through the development cycle while also systematically improve that development process.

The team itself should be responsible for improving its own development process.


### Myth: Predictions create predictability
Predictable outcomes are one of the key expectations that companies and their senior management needs to fulfill, and that expectation typically flow down to software development - the problem is that software development is known to be unpredictable.

In the effort of making it more predictable, we are now used to practices that have the opposite effect: we create a plan and then act in that plan as if it can actually be an accurate prediction of the future. Since we think our predictions are fact, we take early decisions that lock us in a path difficult to change: we lose our ability to respond to change. The solution to this always seems to be to make more accurate predictions. It’s not.

Predictions of the future are always going to be inaccurate if they are:

1. complex
2. detailed
3. About a distant future
4. About an uncertain environment
Any try in making these predictions more accurate will be unsuccessful.

How to make software producing reliable outcomes even without accurate predictions then?

We need to stop acting as if our predictions of the future are fact rather than forecast. Instead, we reduce our response time so we can respond correctly to events as they unfold.

In order to increase the predictability of outcomes, we need to decrease the amount of speculation we use in making decisions.

Decisions based on facts produce the most predictable results.

An organization that has the ability to wait for events to occur and then respond quickly and correctly will deliver far more predictable outcomes than an organization trying to predict the future.


## Defer commitment
Not all decisions can be deferred.

First of all we should try to make most decisions reversible so that we can easily change or revert them. Iterative development helps with this because it helps you move from the analysis paralysis to building something concrete to get feedback for a better decision. But we should avoid irreversible decisions also while building the MVP of a product/feature.

A software system doesn’t need complete flexibility, it needs just enough ability to change.

Schedule irreversible decisions for the last responsible moment, meaning the last chance to make the decision before it’s too late.

The more successful approach to hard decisions and solving a problem is to experiment with various solutions, leaving all critical options open and collecting data to take the best decision possible right before it’s too late.


### Myth: Planning is Commitment
> In preparing for a battle, I have always found that plans are useless but planning is indispensable. (Dwight Eisenhower)

Planning is an important learning exercise, critical in developing the right reflexes in an organization, and necessary to establish a high-level architectural design of a complex system.

Plans, on the other hand, are overrated.

> Plans change very easily. Worldly affairs do not always go according to plan and orders have to change rapidly in response to change in circumstances. If a business stick to the idea that a plan should not be changed, it will fail soon. (Taiichi Ohno)

Sticking to a detailed plan is not healthy, and measuring process capability against zones ability to do so is bad. Planning is not a commitment.

We should plan thoughtfully and commit sparingly.


## Deliver fast
We need to figure out how to deliver software so fast that our customers don’t have time to change their minds.

Companies that compete on the basis of time often have a significant cost advantage over their competitors: they eliminated a huge amount of waste, and waste cost money.

They also have extremely low defect rates: repeatable and reliable speed is impossible without superb quality.

They also develop a deep customer understanding, and are so fast that they can take an experimental approach to continuously learn what works.


### Myth: Haste makes Waste
There are two ways to achieve high quality: slow down and be careful, or develop people who continually improves their processes, build quality in and develop the capability to repeatedly and reliably respond to their customers many times faster.

Soooo many people think that only the first way exists, but you want to pursuit the second way instead.

Organizations that believe that speed and quality are incompatible face the prospect of failing to succeed.

Speed is not hacking: you can’t sustain high speed continuously unless you build quality in.

You should also avoid generic and fixed standards: Lean organizations work to standards, but these standards are a custom baseline in the company, that people should use to constantly experiment to find better ways.

Lean standards exists to be challenged and improved.


## Respect people
Respect people in software development means respecting role and give trust and responsibility.

There are 3 cornerstone of Toyota Production System that are focused on the people involved:

- entrepreneurial leader: a company that respects people will develop good leaders and make sure the teams have the kind of leadership that fosters engaged, thinking people and focuses their effort on creating a great product.
- Expert technical workforce: the technical expertise in the specific area of business is the real competitive advantage for software companies and they should nurture it. Wise companies make sure that appropriate technical expertise is continuously nurtured so that teams are staffed with the expertise they need to accomplish their goals.
- Responsibility-Based Planning and Control: teams are given general plans and reasonable goals and are trusted to self-organize to meet the goals. Respect means do not tell people what to do and how - instead, develop a reflexive organization where people figure out for themselves

### Myth: There is One best way
There is no such thing as “one best way” for doing things, meaning that there is no process that cannot be improved.

Processes should be improved by the work team doing the job, giving them time and guidance to tackle their problems, one at a time, biggest first.

A never ending continuous improvement process should be found in every software development process.


## Optimize the Whole
Suboptimization is very common in Software development.

A Lean organization optimize the whole value stream, from the time it receives an order to address a customer need until software is deployed and the need is addressed.

Even if most people knows that suboptimization is bad, incentives in work usually lead to that in an unexpected way.

Example: an external help desk service paid for number of calls handled will never be incentivate to reduce the number of that call. Pay for potential call instead and they will work to actually improve the real call numbers.

Every contract agreement should have the correct incentives do that everyone is focused on optimizing the whole.


### Myth: Optimize by Decomposition
Never try to split a problem in small pieces and measure them separately: measuring and improving the single items will not cause an improvement in the whole.

Instead of adding measurements, we should strive to reduce it to only one - the single one metric that matters.

For projects, usually ROI is a good one.

For products, profit and loss models work well.

If we optimize the one thing that really matters, the other numbers will take care of themselves.

Side notes: iterative contracts works better because you have to delight your customer continually.


# Value

## Lean solutions
Some customers thoughts to consider when solving a customer problem:

- “Solve my problem completely”
- “Don’t waste my time”
- “Provide exactly what I want”
- “Deliver value exactly where I want it”
- “Supply value exactly when I want it”
- “Reduce the number of decisions I must make to solve my problems”

### Google (example)
> *Google may be the only company in the world whose stated goal is to have users leave its website as quickly as possible.*

Google’s philosophy is based on 4 points:

1. Value - focus on the user and all else will follow: teams are encouraged to develop products with a “laser like focus” on users. Once the product is popular, company officials will find a way to make it profitable.
2. Excellence - it’s best to do one thing really, really well lo: Google is extremely good at what it does (search engine) while also having the flexibility to experiments and try many things
3. Democracy - democracy on the web works: new ideas gain traction from interest coming from internal people and customer online when published on Google Labs
4. Speed - fast is better than slow: at Google things that requires years in other companies happens in days or weeks
Gogle continually introduces new products despite the fact that it doesn’t have a long term product roadmap and it expects technical staff to spend 20% of their time on their own projects. The company decides what product to work on based on the interest of development teams and number of users attracted from it.

**From concept to cash**

The problem in most companies is that people with inspiration do not have the time to pursue it. Companies that routinely turn inspiration into innovation create time and space for people and teams with good ideas to incubate those ideas and turn them into a product concept.

The feasibility stage of product development is important, because it provides space for experimentation. Note that feasibility stage is not a paper study: concepts are fine, but there is nothing quite like checking things out in the real world.

Good product development is composed of discovery cycles of trial and learning that increasingly refine the design of the product. The objective is not to complete the product but to get it to a point where a set of capabilities can be tested in a pilot. Through a series of increasingly complete pilots the product emerges.

For a software, the pilots stage of software development is more likely to involve actual release to customer compared to hardware one.


### Delighted customers


The Kano model shows that to just get in the door of the customers, you have to meet their basic needs. After that, there are two area of differentiations:

- increase performance by adding features → linear results: customer satisfaction is increased directly proportional to increased performance
- Discover needs that customers aren’t even aware of and delight them by meeting these needs → exponential result: customers are surprised and delighted
Google became very good at delighting customers.

**Deep customer understanding**

Great software is created then there is a mind-meld between someone really understanding the business and someone really understanding the technology.

**Focus on the job**

Value is created by focusing on the job that needs to be done and improving the product so that it does the job better than any alternatives.


## The customer focused organization
The technical integrity of the product is determined by the quality of the information flow among upstream and downstream technical team members.

To facilitate information flow, you can:

1. Provide leadership Successful development efforts are usually correlated to the existence of a champion: a person who deeply understands the customers and the technology. He has the ability and responsibility for making key product decisions and accountability for results of that decision. Some models to implement this “champion” role are: <aside> 💡 When we try to encourage a cross functional cultures, some discussions often take long because there is a lot of disagreement about “who is responsible to decide” - so it’s a good idea to make it explicit, for every topic, who is the decision make (marketing for advertising decisions, dev team for technical analysis, etc). </aside>
    - chief engineer: a seasoned engineer with a depth knowledge of business. This approach has the advantages to integrate lots of information in a single mind - and creating a leader. Anyway, this is not a panacea: the risk is this person focus too much on control.
    - Leadership team: the team leading the development is made by one leader for every capability needed (business knowledge, technical knowledge, marketing or any other knowledge). This team should create the direction for the development team.
    - Shared leadership: this works well for moderate sized software development projects and makes the entire team have the leadership. Collaboration (in sync) is fundamental.
    - Who’s responsible?: having good marketing and technical leadership doesn’t preclude to have an involved team that collaborate and develop a shared view of customer value. A champion here is usually a technical expert that understand the business but can really succeed only working with a cross-functional team that forms a mini business units to work on the product. The team works together to clarify the needs and determine key features. The combination of a champions with a cross functional team has proven to have a very big potential.
2. Empower a complete team Complete products are developed by complete teams. The team makes both product and process decision on its own - and usually this means an easier process can be in place since everyone is always involved in everything. Design for operations: every development team should have members who will challenge the team to consider what kinds of problems arise when software is actually being used in production and what capabilities are necessary to both avoid and recover from those problems. <aside> 💡 Everything that can possibly go eventually wrong will go wrong, and we need to find ways to find and contain the problem and then recover from it. </aside>

## Custom development
Developing software as a one-of-a-kind app does not excuse the organization from the obligation of creating value and delighting customers.


## From projects to product
Projects are usually funded all at once at the beginning, and once the budget is allocated it’s natural to evaluate the result of the project based on whether or not the cost, schedule and scope commitments are met. They tend to a beginning and an (apparent) end. Projects are also usually staffed with a new dedicated team.

Products, in the other hand, are typically funded incrementally, which is a clear signal that the scope is expected to evolve as knowledge is gained. The success of product development is usually measured based on market share and profitability achieved. Products are usually developed by static teams that work on it over time and tend to have a beginning but no end (hopefully!).

Software is much more like a product, because most software lives in and changes for a long time - and it is best supported by an intact team that grows its knowledge about the business over time.

> A custom system is never finished!


### IT - Business collaboration
Internal IT departments should be managed as software companies they should be enabled to:

1. Do research to understand what the market wants and ensure the product will be used
2. Design a simple, easy to maintain system to keep costs under control
3. Look for every opportunity to help customers be successful: IT department is not successful unless it’s product contribute to customer success
Many IT departments use the project model, but that comes from contracting industry, where **trust is not part of the contract**.

Product model works much better because the incentives built into this model are much more likely to product a collaborative relationship.

When IT is internal, you really don’t need everything related to a project:

- no need for a fixed scope at beginning
- No need for customers sign offs
- No need for detailed scope to schedule
- No need to do everything customer says
Work in collaboration with your business partner, instead, to deliver the most business value in the shortest amount of time for the lowest cost.


### Accountability
When an organization work is subdivided in “departments” it usually doesn’t work: this cause that multiple different teams (IT, marketing, etc) work to the same product but with different approaches and metrics and objectives. This causes handoffs and requirements from a team to another, which usually doesn’t work well.

It’s much better to subdivide the work by business need/product. Everyone then share the same responsibility, accountability and objectives. They can collaborate now.

The single point of responsibility should always lie in the business funding the effort, like if it is an investment in IT.


### Who is accountable for it? Try this
1. Use the Kano model to analyze current development effort
2. Create an NPS to check customer satisfaction
3. List all active programs/projects with their leaders
4. Check if you have “actual” cross functional teams
5. Is it a project or product model?

# Waste

## Write less code
Complexity is the main cause of waste in software development. In software, this means too much code!

5 principles to drive use of technology according to INDITEX (Zara IT) from the book “Do you have too much IT?”:

1. IT is an aid to judgement, not a substitute for it
2. Computerization is standardized and targeted (no customizations, minimized features)
3. Tech initiatives begin from within: the business goal always share the company’s use of technology, not the opposite.
4. The process is the focus
5. Alignment is pervasive - no “we-they” divide, just collaboration and empathy

### Complexity
The cost of complexity is not linear, is exponential, and it comes to dominate every other cost in software if not under control.

Top priority should be on having a simple, clean and small codebase.

- justify every feature: aggressively limit the features and functions that make it into the code. Every feature must prove that it will create more economic value than its fully leaded lifecycle cost. It’s better to devs to be surfing than writing code that won’t be needed. If they write that unused code, it will cost for life. If they go surfing, they have fun and the company reduce the current and future cost of the system.
- Minimum Useful Feature Sets: divide software into minimum useful feature sets, and release these sets one at a time, highest priority (or payback) first. Such a set is a set of features that help customers do a useful portion of their job better. This doesn’t only help the company economics (you invest less money before starting getting paid) but also tech side because you can (should!) refactor code at every feature sets to accommodate the needed changes.
- Don’t automate complexity: any process that is a candidate for automation should be clarified and simplified first, even removing existing automations. Only then you will be able to find the leverages for effective automations.

### The 7 wastes - updated
1. Partially done work: this is inventory of software development. uncoded documentation, unsynch code (with master), untested code, undocumented code, un-deployed code.
2. Extra features: overproduction, the worse of all wastes according to Taiichi Ohno. If there isn’t a clear and present economic need for a feature, do not develop it. Use your common sense to decide when it really make sense to anticipate something that is really coming. Be strongly biased: if there is any question about adding a feature, then it’s premature. Wait the last responsible moment.
3. Relearning: rediscovering something we once knew and have forgotten is probably the best definition of “rework” in development. We need to seek effectiveness when documentingour knowledge.Another way to waste knowledge is by ignoring knowledge people can bring to the workplace by failing to engage them in the dev process.
4. Handoffs: handoffs are similar to giving a bike to someone who doesn’t know how to ride. You can provide a big instructions book, but it will not help much. It’s much better if you stay and help them. That’s because there is the so-called “tacit knowledge” that usually only emerges while supporting others in learning while they are doing it. When work is handed off to colleagues, a vast amount of tacit knowledge is left behind, because it is super hard to communicate such knowledge - therefore handoffs always cause lost knowledge.
5. Task switching: when knowledge workers have 3 or 4 tasks to do, they spend more time resetting their minds as they switch than hey spend actually working. There is a lot of waste in doing multi tasking - and even without that waste, consider that working tasks one by one will result in more progress earlier.
6. Delays: largest cause of delay is waiting for other people from other areas to be available. Developers takes critical decisions every 15 minutes - when developers miss informations to take that decision, they can look for the answer, switch to another task or guess and keep going. 2 and 3 must be avoided at all cost. Knowledge must be available when and where it’s needed, not too soon or it will change, and not too late or it will be ignored.
7. Defects: tests to avoid defects should be used, but they can only prove the code does what we think it should Do and doesn’t fail in the way we thought it could fail. Software still find a way to fail, usually. Testing experts should use exploratory testing to find as many unexpected failures as possible, and devs should turn every defect into a test so that it never happens again.
We can’t test in the customer unique environment, so we always find defects upon installation.


### Mapping the value stream
Lean software development objective is to reduce the development timeline by removing non-value-adding wastes. Value stream maps are useful tool to identify waste in the timeline.

To build the value stream map:

1. Choose a value stream: identify a project/product dev process, or any other dev process to analyze
2. Choose when to start and stop the timeline: the idea is to go from concept to cash, so you should include everything. In most cases, approval should be included in the value stream.
3. Identify the owner: unless there is a value stream owner responsible for customers request through the system, no one is empowered to tackle these sources of waste.
4. Keep it simple: value stream maps are a diagnostic tool to help you find waste. Once you have finished the map, answer two questions: learn to see waste so you can eliminate it
    1. How long does it take to get a product developed or fulfill a customer request? (Elapsed time, not chargeable hours)
    2. What percent of elapsed time is spent actually adding value?
5. Diagnosis: value stream maps are a timeline of the steps from concept to cash. They should depict average times for the steps in the process. Once the map is done, look for churns and delays.
    1. Churns indicate a timing problem
    2. Delays are usually caused by long queues or handoffs
> *How long would it take your organization to deploy a change that involved just one single line of code?*


# Speed
Speed is the absence of waste. if you eliminate waste, you will increase the time spent adding value, and deliver much faster.


## Patient keeper example
Simultaneous overlapping iterations:

- quarterly plan of new applications
- Monthly plan of new features
- Weekly plan of modifications

## Time: the universal currency
Everything that goes wrong in a process result in a time delay.

Time, specifically cycle time, is the universal lean measurement that alerts us when something is going wrong.

A lean organization makes sure that processes are both available when work arrives at the process, and capable of doing the job expected of the process.

Expediting is a usual red flag of lack of availability/capability: if someone personally push a piece of work stuck in a queue, there is a problem.


# Queuing Theory

### Little’s law
<aside> 💡

Little’s law

In a stable system, the average amount of time it takes something to get through a process (cycle time) is equally to the number of things in the process divided by their average completion rate.

Cycle time = WIP number / avg completion rate

</aside>

Given this law, we have two wats to improve our cycle time:

- get things done faster - this usually requires spending more money
- Reducing the WIP number - this is intellectually rare, but usually doesn’t require much money

### Variation and utilization
The law applies to stable systems, but systems are usually unstable due to variation and utilization.

Variation: stuff happens. The smaller the batch of work is, the less variation it will face.

High utilization: traffic jam. whenever a system reach 80% of usage, it becomes losing response time.

Google server structure is organized with a clear understanding of queue theory in mind:

- data is stored in small batches
- Servers aren’t expected to be 100% reliable
- 20% of devs time is dedicated to learning/personal stuff/slack time because Cycle time starts to increase just a little above 80% of utilization
If you focus on driving utilization up, things will slow down.


### Reducing cycle time
We can use queueing theory to reduce cycle time:

- even out the arrival of work: we should create a steady rate of work. Long queues are usually unnecessary: they should be no bigger than what’s needed to even out the arrival of work.
- Minimize the number of things in process: a long in-process-inventory just slow things does. We should avoid long release cycles, approval processes, long defects lists. Partially done work slow things down. There is always more work to do than what you can actually do: it is fundamental to refuse them and keep a short list.
- Minimize the size of things in progress:keep the release cycle short and max work package small is hard, but it repays very well. If something is difficult, do it more often.
- Establish a regular cadence: iterations are the cadence in software. The amount of work that can be done in an iteration become quickly visible. The cadence is right when work flows evenly.
- Limit work to capacity: forcing a deadline shows a lack of respect but also slow down development. Overtime only works in short bursts, but it cannot be sustainable continuously.
- Use pull scheduling: let the team pull the work for the iteration so that they are confident to finish it. This also has natural slack because the team knows how to avoid 100% capacity

# People

## A system of management
Lean is a management system that creates engaged, thinking people at every level of the organization.

- share early, share often
- Test early, fail fast
W. Edwards Deming exposed a system of

Profound knowledge in 4 main points:

1. Appreciation for a system: the synergy between all the parts of a system is fundamental to overall success.
2. Knowledge about variation: every system has some variation that is inherently in the system. The bulk of the causes of low quality is always in the system and not individual fault.
3. Theory of knowledge: plan, do, check, act.
4. Psychology: when it comes to people, the things that makes a difference are skill, pride, expertise, confidence and cooperation

### Deming’s 14 points
1. Provide for long-range of the company, don’t focus on short term profitability
2. World has changed and managers needs to adapt
3. Start building quality into products while they are built
4. Don’t choose suppliers based on lower bids, instead favor the ones that are willing to work closely with you - and build relationships based on loyalty and trust
5. Work continually to improve the system
6. Institute training
7. Institute leadership
8. Drive out fear: people needs to feel secure to do a better job
9. Break down barriers between departments with cross functional teams
10. Stop using slogans, exhortations and targets.
11. Eliminate numerical quotas for workers and numerical goals for people in management - this is called “management by fear”, try leadership instead
12. Eliminate barriers that stop people from being pride of their work
13. Encourage education and self improvement for everyone
14. take action to accomplish the transformation
> The real purpose of a company is not to make money, but to create customers so pleased that they would continue buying the products. (Deming)

Consider the messages that your policies and practices send to “ordinary” people in your company and suppliers!


## Teams
People who work side by side are not necessarily a team, even when they sum up their individual efforts into a collective result.

A group becomes a team when the members hold themselves mutually accountable to produce a “collective work product” for a common purpose.

What makes a team?

Teams need a challenge, a common goal, and a mutual commitment to work together to meet the goal. Team members depend upon each other and help each other out.

Creating good software is a lot more like a team work than group work.

Expertise

Consistent excellence in product development starts with “towering technical competence in all engineer”.

Excellent software products starts either highly competent technical experts in many areas. In Lean, we focus organizational policies on hiring and developing such experts.

Every person in the team is first of all a me enter of the c and second a specialist in some area.

Leadership

Every team needs a champion who brings to a development team a deep understanding of the market need and the technology that can meet that need in a unique way.


### Responsibility-based planning and control
There is a time to stop telling well trained experts what to do and expect them to figure out by themselves.

It is impossible to implement responsibility based planning and control unless you understand the capacity of each team and limit the work to that capacity.


## The visual workspace

### Self-directing work
When a lot of things needs to happen really fast, the execution strategy must shift from dispatching to enabling.

Dispatching involve planning every single step of someone else’s work.

Enabling means making work self directing - it involves setting up an environment where people can figure out how to do their job without being told what to do.

The manager should organize the work space so that it becomes self directing. There are 3 keys levels of info to focus on when organizing a self directing workspace:

- kanban → kan means card in Japanese, and ban means signal; kanban is a signal card; for example, in an airport, the ticket is the kanban; the challenge with kanban is figuring out how to be sure that the content of the card and its location are correct. The card is not the specification of the job: is the signal that the next job is to bring together the right people to create the detailed designs, verifications, and implementation of it.
- Andon → Andon is a portable Japanese lantern; Toyota used Andon to refer to the stop the line cord; the idea is to make problems visible so that they can be addressed immediately;
- Dashboard → it is important to see the overall progress of the work for the team, in the contest and broader goals of the company;

## Incentives
2 kind of companies:

1. Economic company: its objective is to produce maximum results for minimum resources, producing wealth for a group of managers and investors; individuals exchange money for skills;
2. River company: its objective is to keep on flowing, to stay on business and provide job over the long term; people exchange care and commitment to the job with the promise from the company to develop each individuals potential to the maximum

## Performance evaluation
> Eliminates annual performance ratings for salaried workers: rewarding individual performance undermines team cooperation.

- focus on personal goals that foster team work and push / help the person to achieve his potential.
- Offer different ladders (tech/management)
- Support training with time and money
- Annual performance review should never be a surprise
- Review criteria should focus on team work, not individuals work
- Avoid ranking systems: they cause competition instead of collaboration

### Compensation
1. Make sure the promotion system is unassailable: offer promotion grades, with different ladder for tech or management career, to make people focus on the best step of the ladder instead of the salary review itself
2. De-emphasize annual raises: promotion system must be fair. Use evaluations to keep everyone at an appropriate level of salary. Use a balance scorecard that includes all the areas of work, and gather inputs from everyone, to make it fair and balanced. (Example of areas: teammates, customers, senior management, etc).
3. Reward based on the span of influence, not the span of control: to avoid a perception of unfairness (doesn’t matter if it’s actually fair, perception is fundamental), make sure people have a clear understanding on why they did or didn’t receive a reward. Make sure bonus are at a team level, and to foster collaboration you should reward influence instead of individual results. Reward the entire product dev team based on business success.
4. Find better motivators than money: motivation from money is not sustainable. Focus on motivating people through achievements, growth, control over their work, recognition, advancement, and a friendly work environment.

# Knowledge

## Creating knowledge
The real constraint in todays world is knowledge.

- code is tolerant to change in proportion that it is insulated from defects
- Anything that makes code difficult to change is technical debt
- Technical debt has a very high interest rare
- The only way to get ahead is to have a team, process, technical infrastructure, and guiding ideas that never let debt accumulate

## What exactly is your problem?
Toyota production system was born from a deep need (after a big layoff, to avoid to have a new one ever again) and has 4 goals:

1. Deliver the highest possible quality and service to customers
2. Develop each employees potential based on mutual respect and cooperation
3. Reduce cost through eliminating waste in any process
4. Build flexible production sites that can respond to changes in the market
TPS is just Toyota approach to meet those goals.

Lean initiatives must always start with a clear vision of how you make money, and a sharp understanding of the most critical problem that is keeping you from doing so.

Once the problem is clear, use a disciplined problem solving method to solve it.


## A scientific way of thinking
Scientific method is the DNA of TPS. Toyota operate like a community of scientists, conducting experiments and constantly learning - codifying new knowledge for the future.




## Keep track of what you know
The biggest problem with iterative approach is to track all the new knowledge.

Tests and code and often just the right combination of rigor and conciseness to document knowledge embedded in software.

But there is knowledge built that must yet be turned into code, and just writing it down is not enough. There is tacit Knowledge, living in peoples mind and insights.

- A3 report: condense complex thinking in a single A3 paper, to force people filtering and refine their thoughts


Today, we can evolve this into something smarter: focus on making information concise, useful and easily available.


## Just in time commitment
Developing a product is a learning process, and the more we defer a decision, the more we can learn. But we don’t want to crash, so timing is key: too late is also not good.

In Lean, we want to take decisions just in time, and the first thing is to decide what that means.

We have 2 different effective approach:

1. Build a system that is change tolerant, so that we can easily adapt it to what we learn over time
2. Make experiments and investigations upfront, and then turn those informations in a decision in software at the last possible moment
2 is called “set-based design” and is usually a good choice for high impact, irreversible decisions (more frequents when hardware is involved).

In classic software, use cases for option 2 are rare, but they exists anyway. Examples:

- UI can become hard to change due to user getting used to it
- Single releases products (games, for example)
In general, set based design is a good approach to make key architectural decisions that are very expensive to reverse.

An example of such approach: when facing a tight deadline, make 3 teams work on 3 solutions:

- team C works on the hacky, quick, dirty solution
- Team b works on a good enough solution that will most likely meet the deadline
- Team a works on the ideal solution, but they will hardly meet the deadline
When the deadline arrives, you are sure you will have a solution - and there will be a solution also in case deadline is moved up or down.

When the schedule really matters, it should be treated as a constant everyone is aware of.

About strategy 1: there are risks in this approach too.

- we may make some key irreversible decisions too early
- We continuously add complexity (through new code)
To address the second point, applying continuous, daily refactoring is fundamental.

With refactoring, we reduce the complexity of current codebase, before adding the new complexity with new code. New code will also be less complex thanks to refactoring.

This way we take complexity under control over time.

Refactoring requires an aggressive approach in automated tests. The time we invest into those automated tests, its automatically repaid by the time we will not spend into unplanned work (waste reduction) .

Refactoring is like advertising: it doesn’t cost, it pays.


### Legacy systems
3 approaches to work with legacy systems (software systems that are not change tolerant):

1. Rewrite and throw away → almost always impossible in practice
2. Refactoring into submission → a better approach; typically, the first step is to build an automated test suit that we can trust, and then refactor the pieces we need to change before adding new code
3. Strangle → extract pieces of the legacy system and replace it with new code, to gradually move to new code and architecture

### Problem solving
The mark of an excellence organization is not to be without problems, but to be without systemic problems. They address problems that they encounter in everyday work.

Here is a disciplined approach to problem solving:

1. Define the problem
2. Analyze the situation
3. Create hypothesis
4. Perform experiments
5. Verify results
6. Follow up / standardize

# Quality
Most robust software development processes have two things in common:

1. Excellent, rapid feedback
2. Superb, detailed discipline
Features sets for an integration should be chosen based on the following considerations:

1. Features with high value before lower value
2. Features high risk and high value before lower value
3. Features that will create significant new knowledge before those already clear
4. Features with lower cost to develop or support before higher cost
Incremental releases are still a good idea even in cases like games, where the public release cannot be incremental.


### Architecture
A large complex system should be built in divisible systems architecture that allows teams to work concurrently and independently on subsystems.

Subsystem = set of user-valued capabilities.

Change tolerance is always a key value.

Architecture itself should be built incrementally.


### Iterations
Iterative development = synchronized cadence of technical progress at a steady cadence.

- make sure stories are created as large grain bullet points: delay detailed analysis to the last responsible moment, right before building it
- Express features in business goals
- Preparing stories for an interactions means deciding about policies, workflow, functionality, interface
- When planning, pick the most important stories until they are confident that another story can fit the iteration
- Prefer acceptance test driven development approach + unit test driven development to favor effectiveness on development and outcomes

### Discipline
You can’t go fast without building quality into the product, and that takes a lot of discipline.

The 5 s are a classic lean tool to organize a workspace:

- Sort
- Systematize
- Shine
- Standardize
- Sustain

### Standards
Standards in lean represent the “current best way to do something”: this means that they must be followed, but with the assumption that there is always a better way to do something, so everyone is actively encouraged to challenge every standard.

- code reviews: do not use them to enforce standards or find defects - this is waste; they are effective for feedback on code design choices;
- Pairing: working in pair makes solving problems easier, and code reviews happen in real time (more effective + no inventory backlog); also, makes it easier to introduce new team members since mentorship is part of the daily job
About mistakes: mistakes are never the fault of the person making them. They are the fault of the system that fails to mistake proof the places where mistakes can occur.

Examples of doing this in software:

- When fixing a bug, reproduce it first with an automated tests to ensure it will not come back
- Automate routine tasks
TDD

The goal in Lean is to prevent bugs to get into the codebase - to do this, the right tool is Test Driven Development.



Some types of tests:

- unit tests (programmer tests)
- story tests (acceptance tests)
- Usability and exploratory testing
- Property testing (non functional requirements, such as response time, scaling, etc)

### Continuous integration
Whenever code is checked out to a private workspace or branch, incompatibilities will arise across the two code lines. The longer this parallel line exists, the more incompatibilities there will be. Even if this looks easy, it’s typically counterintuitive for devs, for 2 typical reasons:

1. Tendency to favor a complete task to merge
2. Long setups times

### Nested synchronization
When it comes to divisible architecture and making different subsystem works independently, you should build the interfaces first, get them working, and only then build the underlying subsystem, synchronizing them continuously and frequently.


# Partners
Partnerships are not about cost reduction, risk reduction or adding capacity. Is synergy: people and companies can achieve more and better results when cooperating.


### Global teams
Some technique that can help in creating commitment among work groups separated geographically:

1. Frequent integration
2. Exchange people (physically)
3. Exchange tests
4. Proxy (communicate through a single person)
5. Traveling team leader
6. no second class citizen

### Outsourcing
The best outsourcing arrangements answer clearly to questions such as:

- how to weight the interest of their own company, the other company, and the joint venture?
- How to balance that with the continued existence of their job?
- How to avoid conflicts of interests?
Build win win partnership: if I pay per transaction but the value is in reducing transactions, we have a problem.

Companies that gain advantages from outsourcing works with 3 principles:

- need to access a broader set of technical capabilities than they have
- Win win partnerships: the partnership is managed to ensure it creates synergy, compensation included
- Exhibit deep respect for their partners
Always favor relational contracts: contracts that describe the relationship between th parties, not the expected result.

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: lean-inception ========
TITLE: Lean inception
AUTHOR: ['Paulo Caroli']
TOPICS: ['agile-software-development', 'lean']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/lean-inception/content.md
---BODY---

# Lean inception

## Summary

Nothing teaches us what we want more than an incomplete product that has been released and in use

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

# Foreword
- Nothing teaches us what we want more than an incomplete product that has been released and in use
- We need to balance setting a direction with the acknowledgment that such upfront thinking is a tentative (even if our best one possible)
- Lean Inception: a workshop made up by thoughtworks; a session to set an initial direction and capture broad goals; target is identifying expected outcomes

# Introduction
The Lean Inception workshop is a response to the Lean Startup approach.

After being **built**, the MVP is out to test against real users, from which we will gather data to **measure** and analyze its usage and generate the desired **learning.**

Measure and learning are pretty clear from the lean startup, but it lacks in giving a direction on what to build.

The lean inception workshop solve this with a series of activities aimed to help a team identify the features of an MVP.


# Building the right product
Lean inception target is to ensure a shared understanding and vision of the product.

2 use cases:

- Developing an MVP at the start of a new project or product
- Developing an MVP of an idea / feature after it has been tested/ validated
MVP approach is related to Lean. MVP does not apply only to first release but to every new development, called increment.

The idea of MVP increments is product enhancement guided by proven hypothesis validation.

Continuous Delivery is the name of the set of technical practices needed to achieve MVP approach.





The most important and valuable feedback is a negative answer.

**Think big, start small, learn fast!**

It is extremely important to have a broad view, but you should start smalls take a short step and learn from it.

The product can meet more than one objective, work for different personas. An MVP should validate only one hypothesis, one idea.



An MVP must be:

- Valuable → business valuable, meaning it achieve the expected ROI
- Usable → Being “usable” means we understood the people that will use it, their tasks and the environment they work in.
- Feasible → the team know how to build it, have the tech and knowledge to elaborate it.
It must also have The wow factor: what makes your product stand out in the market. it is fundamental to have a wow factor in every MVP.



Every MVP increment has a part of each of the four elements.

The V of MVP is “viable”: this means the product increments should never break. First impression is fundamental, and trust get lost very quickly.


## SALES FUNNEL - AARRR
AARRR (the pirate metrics) is an acronym for funnel metrics that represent the interactions of your customers with your product.

1. Acquisition: number of people who visited your product
2. Activation: number of people who had a good initial experience
3. Retention: number of people who came back to learn more
4. Revenue: number of people who engaged in revenue generating activities
5. Referral: number of people recommending to other users
An MVP should validate all the steps of the funnel.




# Preparing for the worshop



# Lean inception activities

## Write the product vision
The vision define the essence of your business value.



1. Write the template on a whiteboard visible to everyone
2. Split the team in small groups and ask each group to write its own version
3. Gather results and form a unique version

## The product IS - IS NOT - DOES - DOES NOT
Explain the product by what it is and does, but also what it’s it’s and does not. Negatives sometimes helps!

1. Split whiteboard in 4 areas IS - IS NOT - DOES - DOES NOT
2. Ask participants to put post it in the whiteboard
3. Group similar notes



## Clearing the objectives
The team try to reach a consensus on product objectives.

1. Every team member write 3 answer to the question: “if you had to define this product with three objectives for its users, which would they be?”
2. Put answers on a whiteboard, group similar ones
3. Rewrite objectives collectively with the entire team, and list them in order of importance

## Understanding trade offs
A Lean product reflects decisions of the team about trade offs.

1. Describe all categories that are important for the product (eg: security, usability, scalability, etc)
2. Write categories on a whiteboard as row titles, drawing the rows
3. Draw vertical columns (same number as rows)
4. Write MORE above the live on the left, and LESS above the line to the right
5. Each participant will put post it with its initials on every line. Restrictions: every column must contain a post it, max one post it per line.
6. Consider each post it as a vote and democratically identify the trade offs



## Describe the personas
To effectively identify the functionalities of a product, it si important to bear in mind users and their goals.

A persona represents a user in the system, describing its role and needs through a realistic representation of the user.

1. Split the team in pairs/triplets and give them a template
2. Ask each group to create a persona, using the template
3. Ask each group to present their personas
4. Shuffle groups and repeat 1/2 times
Then only keep top 3.

TEMPLATE:



Empathy Map: a visual template to identify and visualize a persona.

The map contains 4 main areas, which fulfill the sentence: WHAT DO I ___ (SEE/THINK/HEAR/SAY)?

I





Keep the personas updated with new data collected from the product and its increments.


## Feature brainstorming
What should the product offer in order to meet this personas needs? What functionalities should we build to achieve the business goals?

1. Put goals on the whiteboard , in order of priority from left to right, as column titles
2. Put personas on the same whiteboard, in order of priority from top to bottom, as row titles
3. Promote a features brainstorming
4. Keep features that respond the questions + fit at least one goal & persona
Goals and personas should both be 3 max.

To identify them, use the question: “if we were on a very short budget and could work on only one goals, which would it be?”.

You can also think about money to prioritize:

1. Split team in small groups
2. Each group have 5 dollars (post it)
3. Ask each group to place $ where they believe more Money should be invested (to achieve the goal or to learn more)
4. Discuss outcomes and give option to redistribute $
5. Prioritize items with more $



# Technical, UX and Business review
Feature brainstorm tipically extract many features ideas, but we need to understand the one we work on in more details.

Asses the features in terms of:

- Effort (from E to EEE)
- Business value (from $ to $$$)
- User experience (from ❤️ to ❤️❤️❤️)
- Uncertainty (Matrix of 2 levels of confidence - confidence in what to do and confidence in how to do it - resulting in a green/yellow/red traffic light value)


1. Create the traffic light chart (X → How confident are you to build this feature?, Y → How confident are you on what the business and users what from this feature? )
2. Ask a member to read the feature out loud and put it in the graph according to its understanding of it
3. Discuss about disagreements, save any useful info coming from the discussion in the features info
4. Agree on a final value
Card in the red light should be either discarded or splitted in smaller parts.

Then you should create a Effort, UX and BUSINESS Value table:

1. on a shared canvas, every team member should assign values for the three dimensions according to its understanding.
2. Discuss about disagreements, save any useful info coming from the discussion in the features info
3. Agree on a final value

# Show the users journey
A User journey describe a sequence of steps a user follows in order to reach a goal.

Which goal does this persona want to reach?

How does he/she start the day?

What does he/she do before/after this?

1. Select a persona
2. Select a goal for this persona
3. Put the persona and goal on a post it and out it on the whiteboard on top left corber
4. Pick a starting point
5. Describe each step until the user achieves the goa


Display features in the journey: track the features that already help in doing that step, or future features that might do it.


# Features sequencer
Features are prioritized according to one another. Define a feature sequencer to identify MVP and Increments.

1. Create the sequence template (numbered list)
2. Explain the rules of the sequebxe
3. Remind the goals: define the sequence to deliver the features
4. Put features in the sequencer until you reach agreement
Once you have a sequence, you need waves rules. A wave is a group of features in an increment.

Sample rules for a wave:

1. Max 3 features
2. Max 1 feature with red light (high uncertainty)
3. Features can’t be only yellow or red
4. Max 5 E (effort score) per wave
5. Sum Of values of the features must be minimum 4 $ and 4 ❤️
6. Dependent features goes in following waves
Every MVP is made up by 1+ waves.

<aside> 💡

About estimations: it uses estimates and t shirt sizing. Not the best.

</aside>


# Building the MVP canvas
Define the essentials thoughts about the MVP in a one pager.



1. MVP PROPOSAL: what’s the proposal for this MVP?
2. Segmented personas: who is this MVP for?
3. Journeys: what journey are improved by this MVP?
4. Features: what are we building in this MVP?
5. Expected result: what learning or outcome we are looking for?
6. Metrics to validate hypothesis: how can we measure success?
7. Cost and schedule: expected cost and due date
Some tips:

- focus on the proposal: the more focused an MVP is, the better.
- Minimize risks with segmented personas: who is this specific MVP for?
- Reasses MVP features: are they really the minimum? Are they viable? Can it be simpler? Did we forget something essential?

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: lean-software-development-an-agile-toolkit ========
TITLE: Lean Software Development: An Agile Toolkit
AUTHOR: ['Mary Poppendieck', 'Tom Poppendieck']
TOPICS: []
SOURCE: {'type': 'homepage', 'url': 'https://www.informit.com/store/lean-software-development-an-agile-toolkit-9780321150783'}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/lean-software-development-an-agile-toolkit/content.md
---BODY---

# Lean Software Development: An Agile Toolkit

## Summary

Lean Software Development: An Agile Toolkit is a 2003 book by Mary and Tom Poppendieck that adapts lean manufacturing principles to software development. It presents seven lean principles, 22 thinking tools, and practical techniques for delivering value, eliminating waste, and empowering teams.

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

Lean Software Development: An Agile Toolkit is a 2003 book by Mary and Tom Poppendieck that adapts lean manufacturing principles to software development. It presents seven lean principles, 22 thinking tools, and practical techniques for delivering value, eliminating waste, and empowering teams.

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

- [homepage](https://www.informit.com/store/lean-software-development-an-agile-toolkit-9780321150783)



========8<======== ID: non-violent-communication-the-best-way-to-connect ========
TITLE: Non-Violent Communication: The Best Way to Connect with Others and Build the Foundations of a Healthy Relationship, Through A Language in Harmony with The Universe
AUTHOR: ['Marshall B. Rosenberg']
TOPICS: ['leadership', 'nonviolent-communication', 'psychological-safety']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/non-violent-communication-the-best-way-to-connect/content.md
---BODY---

# Non-Violent Communication: The Best Way to Connect with Others and Build the Foundations of a Healthy Relationship, Through A Language in Harmony with The Universe

## Summary

The non-violent communication has been created and developed specifically to enable people to be able to cooperate and communicate effectively with people around them.

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

# Introduction
The non-violent communication has been created and developed specifically to enable people to be able to cooperate and communicate effectively with people around them.

The four components of the nonviolent communication method are:

1. Observations: the things that you may perceive in the people and the world around you; the things that happens to you and around you that might cause specific reactions from you or other people.
2. Feelings: the emotions that you experience as a reaction to the observation that you took.
3. Needs: the fundamental things that all people require in order to be emotionally and mentally satisfied or fulfilled.
4. Requests: the expressions that you or other people make to inform other people about the things that you might need and asking for help to allow you to meet your needs for yourself or other people.
These four components are also split up into the two parts of the nonviolent communication model: *empathically listening* and *honestly expressing*.

**Empathically listening** refers to the ability to listen to other people, considering the four components, in order to allow them to meet their own needs.

**Honestly expressing** refers to the ability to understand your own observations, feelings, needs and requests, and express each of those effectively and peacefully.


# What is nonviolent communication?
The core belief behind the concept is that every human being has the capacity to be compassionate and empathetic to other people. Marshall Rosenberg, that invented NVC techniques in 1960s, believed that human beings only tend to harmful, malicious or violent behaviour when they fail to or are unable to use other kind of nonviolent means of communication with other people. The most common way this happens is when we are upset or angry, because those emotions make us impatient and give us a sort of a *tunnel vision*, limiting our means of communicating with others.

The theory that NVC is based on comes from the idea that all of the behaviour that humans develop, comes from a desire to be able to meet our basic needs and help other people meet theirs as well. This includes things like expressing when we are hungry by either stating that we need food or becoming irritable or impatient because we are focused heavily on our hunger; or when we are dissatisfied or unhappy, for whatever reason, and we begin to lash out at the people around us. However, the things that people need are never inherently conflicted with each other. The conflict that arise based on these feelings are the results of incompatible methods that people use in order to meet those needs.

Nonviolent communication is a technique to minimize that kind of miscommunication, encouraging people to recognize the needs that they have, based on thoughts and feelings they experience in relation to those needs, and work with other people around them in order to plan ways to allow them to meet those needs. This will result in much healthier and harmonious relationships with the people around you and allow all people involved to meet their own needs together.

There are 3 different ways that NVC encourage people to create change:

1. **Change created within yourself**: allow yourself to grow and alter any habitual reactions you might have developed as a response to specific kinds of stimulus.
2. **Change in the relationship with other people and in the relationship that other people have with each other**: the focus is on creating healthy relationships with people around you.
3. **Change within social systems and larger groups**: this can take the form of communication between large groups of people, and focuses on creating social change on a larger scale.
All these different types of changes are meant to enforce the ideas that NVC want to teach people, and enforce all the techniques and tools that it wants to teaches to improve interpersonal relations on both small and larger scale; they also allow people to be able to communicate much more effectively with people around them.

There are a lot of other benefits that comes from learning NVC, because it includes lot of effective techniques that you can use as a parent/teacher/whatever. People that practice NVS are typically much more compassionate people and are able to connect with others much more effectively.

After 30 years of NVC evolution, in 2000’s, more emphasis has been placed on concepts like self empathy, shifting the focus from the actual steps needed to the intentions that a person practicing NVC has in their words and actions. For example: are you acting maliciously or really aiming to create stronger bonds and meaningful relationships with other poeple? In a conversation, do you simply wait for your turn to speak or are you actually listening to what other people say, trying to understand their words?

**INTENTION IS A VERY IMPORTANT PART OF NVC.**

Being able to eliminate miscommunication will be incredibly useful in almost every situation; also, ability to listen to words and understanding the actions and intentions of other people is very important. Trying to reach this out, you will need to be open and honest about your experiences and your thoughts and feelings: as a consequence, you will create stronger relationships with people around you as well!

NVC model operates under a set of assumptions regarding the nature of human connections and the ways that we communicate with people:

1. All human being has the same basic needs to be met in order for them to be able to create healthy relationships
2. every action that a person take is made in an effort to allow them to meet their own needs
3. every person is capable of experiencing compassion for other people and enjoy giving and helping others if there is a means
Human beings are social by nature.

A desire to connect with other people is a very important part of practicing NVC: we look for peace, choice and responsibility.

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: peopleware-productive-projects-and-teams ========
TITLE: Peopleware: Productive Projects and Teams
AUTHOR: ['Tom DeMarco', 'Timothy Lister']
TOPICS: []
SOURCE: {'type': 'wikipedia_page', 'url': 'https://en.wikipedia.org/wiki/Peopleware:_Productive_Projects_and_Teams'}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/peopleware-productive-projects-and-teams/content.md
---BODY---

# Peopleware: Productive Projects and Teams

## Summary

Book on project management for software development

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

Book on project management for software development

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

- [wikipedia_page](https://en.wikipedia.org/wiki/Peopleware:_Productive_Projects_and_Teams)



========8<======== ID: practice-perfect-42-rules-for-getting-better-at ========
TITLE: Practice Perfect: 42 Rules for Getting Better at Getting Better
AUTHOR: ['Doug Lemov', 'Erica Woolway', 'Katie Yezzi']
TOPICS: ['coaching', 'personal-growth']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/practice-perfect-42-rules-for-getting-better-at/content.md
---BODY---

# Practice Perfect: 42 Rules for Getting Better at Getting Better

## Summary

*(sintesi da scrivere)*

## Key Concepts

*(nessun contenuto)*

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: practices-of-an-agile-developer ========
TITLE: Practices of an Agile developer
AUTHOR: ['Venkat Subramaniam', 'Andy Hunt']
TOPICS: ['agile-software-development', 'technical-excellence']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/practices-of-an-agile-developer/content.md
---BODY---

# Practices of an Agile developer

## Summary

<aside> 💡 No matter how far down the wrong road you’ve gone, turn back.

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

# Practices of an Agile developer

## Agile software development
<aside> 💡 No matter how far down the wrong road you’ve gone, turn back.

</aside>

Software development is not a linear, deterministic process - like a road - it is more like surfing: a dynamic, ever changing environment, that like the sea itself, it’s unpredictable.

But what makes surfing so challenging is that every wave is different, with its unique shape and behavior.

Requirements and challenges in software development are the “waves”.

Like a successful surfer, a successful developer has (technical) fitness, balance and agility.

Agility: being able to quickly adapt to the unfolding situation.


## The practice of agility
<aside> 💡 Agile development uses feedback to make constant adjustments in a highly collaborative environment.

</aside>

Agile development is a team effort:

- agile teams tend to be small (10 people or so) or broken up into several teams of that dimension
- the team works very closely together, sharing the code and the tasks
- Work closely with the client/customer who pays for that software: show them the latest version of the system as early and often as possible
- Constant feedback from the code you are writing, use of automation to continuously build and test the project
- Refactoring is an ongoing part of development (ndr: aka daily task) - code is never really “done”
- Work progress in iterations - small blocks of time (a week) where you identify a set of features and implement them - then demo the result to the customer to get feedback
- Release full versions to the users community as often as practical

## Beginning agility
Software development doesn’t happen in a chart, an IDE or a design tool: it happens in your head. This means it’s not alone, because there you have emotions, office politics, egos, memories, etc. attitude and mood can therefore make a big difference.

A professional attitude focus on positive outcomes for the project and the team, on personal and team growth, and on success.

**Work for outcomes.**

Agility works only when you adopt a professional attitude toward your project, your job, and your career.


### Work for outcomes
You want to focus on solving the problem, instead of afflicting the blame.

Agile teams value outcomes over problems: you can be compliant to ISO-9001 standard but still build a non working product.

<aside> 💡 Blame don’t fix bugs. Instead of pointing fingers, point to possible solutions. It’s the positive outcome that counts.

</aside>

**What it feels like**

You should feel same to admit you don’t have an answer. A big kid take feels like a learning opportunity, not a witch hunt. It feels like the team is working together, not blaming each other.

**Keeping your balance**

- it’s not my fault and it’s all your fault are typically equally wrong
- If you never make mistakes, you are probably not trying enough
- Avoid a discussion around a problem/bug, and move on with fixing it
- If someone misunderstood something, someone else likely did the same - make sure everyone is on the same page
- If a team member repeatedly harm the team by their actions, then he is not acting professionally: move it away from the team.
- If the majority of the team (especially lead) don’t act professionally and are not interesting in improving that, remove yourself from that team

### Quick fixed becomes quicksand
What happens after a quick fix on a piece of code we don’t know much identify how good as a programmers we are:

- bad programmers just leave the code as is
- Good programmers will read the code better to understand why that fix works and if there are more problems hidden behind
One quick fix at a time, a catastrophes come.

**You have to understand the development methodology in use on the team, why things are the way they are and how they got that way. Only with that understanding you can begin to make changes effectively.**

Adopting quick fixes continuously is like walking across a field strewn with land mines: you might make it very far, but sooner or later…

As soon as a quick hack goes in the code, the clarity of the code goes down.

“Don’t touch that module” - the red flag words

You can’t possibly be agile with that kind of baggage and some agile technique prevents this from happening.

- coding in isolation is dangerous, ensure that everyone takes time to read the code that others write
- Unit testing means the code is testable, that typically means better layered and then more maintainable
NDR: per i motivi citati funziona meglio TDD che unit test semplicemente

<aside> 💡 Don’t fall for the quick hack. Invest the energy to keep Clean and out in the open.

</aside>

**what it feels like**

The code is readable, no dark corner in the codebase. You may not know every detail, but you have a good general working knowledge. No code has a “keep out” sign on itself.

**Keeping your balance**

- When you need to understand how a piece of code works, you don’t need to necessarily become an expert on it - know enough to work with it but don’t make a career of it
- If a team member say a piece of code it too hard for anyone else to understand, then it is also for everyone: simplify it
- Never go straight into a fix without understanding - fix the problem, not the symptom
- Most nontrivial systems are too complex for one person to understand entirely- you typically need to have a higher understand of most of parts and how they interact to each other, and a deeper understanding only on the parts you work with

### Criticize ideas, not people
take decisions based on how good they are, not who suggested it.

When giving feedback on an idea, avoid using words that can suggest the idea is stupid (that means also the creator is) or that you are debating; put the words down for a useful conversation.

- “that’s stupid” 🔴
- “That’s stupid, you forgot this” 🔴
- “Thanks! But what happens when this situation shows up?” ✅
**Keep it professional, not personal: do not point fingers.**

If there is A risk that your idea is ridiculed, you Won’t be inclined to tell it. And this is a real problem: a good software development effort requires a lot of creativity and insights. the whole project benefits when people with different ideas and concerns share and merge those ideas.

Negative attitudes kills innovation.

We all have good and bad ideas, and everyone on the team needs to feel free to suggest it.

Some techniques:

- set a deadline can help getting tough decisions
- Also support the opposite of your idea to expose trade-offs involved
- Use a mediator to ensure everyone can express his opinion and a decision is taken
Once taken, supporting the decision is fundamental: each member of the team should give their complete cooperation to it.

<aside> 💡 Criticize ideas, not people. Take pride in arriving at a solution rather than proving whose idea is better.

</aside>

**What it feels like**

It feels comfortable to discuss about solutions. Solutions can be rejected without hurting feelings, and imperfect solutions can be adopted without guilt.

**Keeping your balance**

- always try to contribute a good idea, but don’t be upset if it doesn’t make it- Don’t add extra cruft to an existing idea just to add your input
- Discuss about how realistic are the negative points: is it ever happened? How often? It’s not enough to say “the users won’t accept it”, you also need to assess how likely that scenario really is
- Ensure everyone agree on what is “best” in this scenario, before deciding which is the best option
- There is no absolute best, only better
- Feel safe to express a negative feedback on an idea, but do it with nice words

### Damn the torpedoes, go ahead
Sometimes the best plans fail in the absence of courage. Despite the dangers, you need to charge ahead and do what’s right.

You realize a code you need to change is messy? Suggest to also clean it up. Don’t just say it, also collect pros and cons and show why it is a good idea.

You realize you was following a wrong solution? Tell it, suggest how to move on if you have ideas, and also ask for suggestions.

<aside> 💡 Do what’s right. Be honest, and have the courage to communicate the truth. It may be difficult at times; that’s why it takes courage.

</aside>

**What it feels like**

Courage doesn’t feel very comfortable, especially the first times, but then you will feel relief instead of increasing dread.

**Keeping your balance**

- If you think you are absolutely right but others disagree, consider you might have explained your reasoning not well enough
- If you think you are absolutely right but others disagree, consider they might be right
- Take time to understand code, before deciding if it needs to be refactored and how
- If your courageous stand is met with resistance, you need to present them in terms they will understand
- If you are pressed to compromise code quality, point out that you, as a developer, don’t have the authority to degrade corporate assets (the code base)

## Feeding agility
The software profession is an ever changing and evolving field. Its up to you to keep up with change.


### Keep up with change
The pace at which technology evolve is incredible. How to keep up with the pace?

- learn iteratively and incrementally: some time everyday for learning
- Get the latest buzz: read online about new technologies
- Attend local user groups: go to communities
- Workshops and conferences
- Read books
<aside> 💡 Keep up with changing technology. You don’t have to become an expert at everything but stay aware of where the industry is headed, and plan your career and projects accordingly.

</aside>

**What it feels like**

You feel aware of what’s going on: you know about technologies as they are announced and adopted. If you had to switch jobs into a new technology area, you could.

**Keeping your balance**

- many new ideas never make it to useful technologies: gauge your effort
- Don’t try be an expert on everything, you can’t. Become an expert in few things will make easy for you to gain expertise in some other areas
- Understand why a new technology is necessary - what problem is trying to solve? Where it can be used?
- Do not convert a real application to a new technology just for the sake of learning: evaluate the merits of that technology before committing to it. Make some prototypes first

### Invest in your team
Your team has developers with different capabilities, experience, and skills. That mix of diverse talents and backgrounds makes it an ideal environment for learning.

On a team, it’s not enough if one member knows a lot - if others are not knowledgeable on something, the team will not be effective.

Bring what you learn into your team.

Find areas where you or someone else can help the rest of the team come up to speed.

Example: a brown-bag session: a weekly learning shared session during lunch time.

**Always be the worst guy in the team, because you will be much more motivated to catch up. You will be on top of the game.**

A 1 hour session with 15 minutes talk + 45 minutes Q&A & discussion is a typical weekly format that works well.

<aside> 💡 **Raise the bar for you and your team.**

Use brown-bag sessions to increase everyone’s knowledge and skills and help bring people together. Get the team excited about technologies or techniques that will benefit your project.

</aside>

**What it feels like**

Everyone is getting smarter. The whole team is aware of new technology and starts pointing on how to apply it or which pitfalls to watch for.

**Keeping your balance**

- Reading groups that go through a book chapter by chapter are very helpful, but picking a good book is fundamental
- Not all the topics will be winners or even seem appropriate at the moment. But pay attention anyway: it wasn’t raining when Noah built the ark.
- Keep it in the team - a lunch in a big auditorium loses intimacy.
- Stick to a regular schedule: constant, small exposure is agile. Infrequent and long sessions are not.
- Use pizza to convince skeptic coming to the lunch.
- Stretch beyond purely technical books and topics: pertinent nontechnical topics (estimation, communication, etc.) will help the team as well.
- Focus on discussing general topic: it’s ok to discuss a bit about how it could be useful in your context, but leave solving specific issues to a design meeting.

### Know when to unlearn
One of the foundations of agility is coping with change. As technology marches on, things that used to be important fall by the wayside. Years ago, memory overlays was a big deal - todai it’s not.

But lot of developers never unlearn their old habits and keep thinking to code like some old constraints still exists.

The scarce and expensive resource today is developer time - not CPU anymore.

But unlearning is hard.

When learning a new technology, ask yourself if you are projecting too much of the old attitudes and approaches onto the new.

Old habits are hard to break and even harder to notic: the first step is to realize that you are using and outdated approach. And then, let it go.

You don’t want to discard them completely, of course - you need to discover in which context they still make sense.

A thing that can help is transition completely to a new environment when learning a new technology: for example if you want to learn a new language, move to its own new IDE instead of adding a plugin to yours.

It’s easier to create new associations and habits when you have less baggage from the old ones.

<aside> 💡 Learn the new; unlearn the old.

When learning a new technology, unlearn any old habits that might hold you back. After all, there’s much more to a car than just a horseless carriage.

</aside>

**What it feels like**

New technology feels a little scary. It feels like you have a lot to learn - and you do. You can use your existing skills and habits as a base, not as a crutch.

**Keeping your balance**

- The only different between a rut and a grave is their dimensions. Jeeping old habits past their expiration date is hazardous to your career.
- Don’t forget the old habits completely, but use them only when using the appropriated related technology.
- Take special note of familiar idiosyncrasies in the languages you’ve worked with, and learn how these are similar or different in newer languages or versions.

### Question until you understand
To solve problems, you need a good understanding of the big picture. Look at everything that may be relevant, even if others don’t agree.

“Why” is a great question - 5 why is a great approach to root cause analysis of a problem.

<aside> 💡 **Keep asking why** Don’t just accept what you’re told at face value. Keep questioning until you understand the root of the issue.

</aside>

**What it feels like**

It’s like mining for precious jewels. You come to the feel that you understand the real problem, not just the symptoms.

**Keeping your balance**

- You can get carried stay and ask genuinely irrelevant questions - ask why, but keep it relevant.
- When asking “why”, you might be asked back “why you ask?”. Keep a justification for your question in mind before asking it: this helps making sure that the question is relevant.
- Don’t settle for shallow answers: “because it used to…” is typically not a good answer.
- “I don’t know” is a good starting point for more research - not the end of it.

### Feel the rhythm
On many non successful projects, events happens on irregular, hap-hazard basis: this random threat it’s very hard to deal with.

Use rhythms and cycles to make team life easier.

Main cycle is the sprint, to timebox a certain set of feature to release.

But consider the day itself: ending everyday with some step forward is preferable and should be a target. if you have a small step not done by the end of the day, you could even considera throw it away and redo it tomorrow.

**Time boxing is a great way to make hard choices: timebox a meeting to force making a decision, for example.**

<aside> 💡 **Tackle tasks before they bunch up.** It’s easier to tackle common recurring tasks when maintaining steady, repeatable intervals between events.

</aside>

**What it feels like**

It feels like consistent, steady rhythm. It’s easier to dance when you know when the next beat falls.

**Keeping your balance**

- Play on having all code checked in and tested by the end of the day, no leftovers
- Doesn’t mean working overtime constantly
- Run team iterations at a fixed, regular length
- A too intende regular rhythm will burn you out
- Regular rhythm makes it harder to hide things, giving sn additional excuse ti have courage
- A little success is a great motivator: celebrate wins with a pizza and beer or whatever.

## Delivering what user wants
No plan survive contact with the enemy - in software the enemy is change.

You can’t defeat change, whether is in design, architecture or your understanding of the user requirements.

Agility hinges on your ability to identify and adapt to changes.


### Let customers make decisions
Dev must be involved in making design decisions, for sure. But they shouldn’t make all the decision, especially business ones.

You have a choice: either you can let the customers make the decisions now, or they will go ahead and make it later, at a much greater cost. If you avoid these issues during development, you increase risks.

If you face them during development, instead, you avoid big design or code reworks, and also scheduling pressure.

**Decide what you shouldn’t decide!**

When you involve customers, be ready with all available options, present them with pros and cons, and show potential costs and benefits (from business point of view, not technical).

These decisions can always change later, but since it’s shared any change to scope/time/cost will be easily acceptable.

<aside> 💡 Let your customers decide. Developers, managers, or business analysts shouldn’t make business critical decisions. present details to business owners in a language they can understand, and let them make the decision.

</aside>

**What it feels like**

Business applications are developed as a partnership between the business owner and the developers. It should feel like a partnership, a good honest working relationship.

**Keeping your balance**

- Keep a record of decisions and the reasons behind them.
- Don’t bug busy business people with trivial low level details: if it has no impact on business, its trivial.
- Don’t assume a lot level detail doesn’t impact business - if it can impact it, its not trivial.
- “I don’t know” is an completely acceptable answers, also for a business owner. Things might always change, be open to it.

### Let design guide. Not dictate
Design is an essential step: agile does not suggest to dove into code without any kind of design.

There are two levels of design: strategic and tactical. Strategic design is upfront and you do it when you have little understanding of the requirement: make it accurate, but not precise - it’s a general strategy.

Tactical design is what we do while coding, and the best approach is not starting from details but from class designs and responsibilities.

CRC card design is a good way: with post it, draw Class names, Responsibilities and connect Collaborators (CRC).

Best feedback about design comes always from code: if a small change is easy to do, design is good.

<aside> 💡 A good design is a map, let it evolve! Design points you in the right direction. It’s a map, but its not the real territory anyway: it shouldn’t dictate the specific route. Don’t let the design hold you hostage.

</aside>

**What it feels like**

A good design is accurate but not precise. What it says should be correct, but it shouldn’t include details that might change or are uncertain. It’s an intent, not a recipe.

**Keeping your balance**

- No big design upfront does not mean no design at all. Don’t get stuck in a design task without validating it in real code. But diving into code without any idea of design is no good anyway.
- Even if an initial design can be useful, its still requires. “The plan is worthless, but the planning is essential”. The learning occurring during a design session is invaluable.
- Prefer physical whiteboards, sketches and post it: they are excellent design tools - modern digital ones tend to be more distracting.

### Justify technology use
Before choosing the technology, identify the problem. Then ask yourself:

- does the technology really solve the problem?
- Will you be tied to it?
- What about maintenance cost?
The les code you write, the less you have to maintain.

<aside> 💡 Choose technology based on need. Determine your needs first, then evaluate the use of technologies for those specific problems. Ask critical questions about the use of any technology, and answer them genuinely.

</aside>

**What it feels like**

A new technology should feel like a new tool that does a better job; it shouldn’t become the job.

**Keeping your balance**

- Maybe it’s too early in the project to really evaluate your technical needs. That’s fine.
- Every tech has pros and cons. Be aware of the trade offs that comes with it.
- Don’t build what you can easily download. Building something from scratch is the most expensive option, do it only when required.

### Keep it releasable
Anytime you are unprepared, it’s the perfect time for the enemy to strike.

Use Continuous Integration workflows to continuously check if the system is releasable.

If you know that a breaking changes is coming, you can handle it, even if it’s not always easy.

You can for example create a branch (but be careful with those!) or versioning your db or api (ndr: or use techniques such as parallel).

<aside> 💡 **Keep your project releasable at all times.** Ensure that the project is always compilable, Runnable, tested and ready to deploy at a moment’s notice.

</aside>

**What it feels like**

You are confident that anytime the boss or anyone else comes to visit you, you can show them the latest build of the software without hesitation. Your project is simply always in a ready to use state.

**Keeping your balance**

- Sometimes the cost of keeping the system releasable it’s too high: if it cost a month of work vs a week of work for changes, go for the downtime - but this should be the exception, not the rule.
- If the system must be unreleasable for a while, do not also make it irreversible: keep a branch as a safe spot to fall back to.

### Integrate early, integrate often
A main aspect of agility is continuous integration. Most developers think postponing integration is a good idea, because:

- it will raise the complexity
- It will raise the pressure
- Other code might give issues
- Don’t have time for that
Those are just excuses. Integration is one of the major risks in software development, and the more you wait, the worst it is.

Integration and isolation are not mutually exclusive: you can integrate and isolate at the same time. For example, you can hide your code with a mock and test it in isolation with unit tests before integrating with the rest.

Ideally integration should happen multiple times per day, or at least once per day - for sure, no longer than after a couple of days.

<aside> 💡 Integrate early and often. Code integration is a major source of risk. To mitigate the risk, start integration early and continue to do it regularly.

</aside>

**What it feels like**

When done right, integration feel just like part of the regular code writing cycle. The problems that arise are small and easy to address.

**Keeping your balance**

- Successful integration means all tests passes
- While you should definitely integrate multiple times per day, integrate every single line of code is not a good idea.
- If your integration problems are large, you are probably not integrating often enough: try more often.
- For prototypes and experiments, you want to work isolated and not waste time into integrating. But once you have answers, integrate as soon as possible.

### Automate deployment early
Do not wait the end to setup the deployment: this will raise a lot of problems that would have been easier to face before, but discovered later and all together becomes a mess.

Ability to easily deploy and replicate the app is useful since day one, for QA and Demos, etc.

<aside> 💡 Deploy your application automatically from the start. Use that deployment to install the app on arbitrary machines with different configurations to test dependencies. QA should test deployment too.

</aside>

**What it feels like**

It should feel invisible. Install and/or deploy your product should be easy, reliable and repeatable: it just happens.

**Keeping your balance**

- You may have prerequisites for the product: check them in the install process to avoid issues.
- Installers should never destroy user data without asking for user’s permission
- deploying an emergency fix should be easy, especially in prod
- If the maintenance of the deploy script becomes hard, it’s a smell

### get frequent feedback using demos
Real world requirements are fluid. You can’t freeze them because you can’t freeze markets, competition, learning, evolution or growth. If you expect your customer to give you solid, we’ll defined requirements before the start of a project, be prepared to be disappointed.

As humans, we get better at what we do slowly and incrementally.

Get feedback from customers often: if your current cycle is, for example, quarterly - short it down to weekly or biweekly. Proactively go to customers to show them your new features.

<aside> 💡 Develop in plain sight. Keep your application in sight, and in your customers mind, during development. Bring customers together and proactively seek their feedback using demos every week or two.

</aside>

**What it feels like**

After a startup periodo, the team and the customer should enjoy a healthy, creative relationship. Surprises should become rare, and customer should feel a good level of control.

**Keeping your balance**

- If customers are worried by so many releases, you might consider to make them only internal (and distribute them to all users later in a different way).
- Some customers might feel demos as too much, even biweekly - understand them, they have a full job already. If they feel comfortable with a monthly sessions, that’s fine to start.
- When someone is 100% assigned to be your customer, even if he would love daily demos it might be too much for developers. Ensure the timespan between demo is enough to make it valuable and having something to show.
- Make it explicit that the application is under development and not a finished version, but also avoid issue and make it stable. Customers need to trust the demo and not be annoyed by tech issues.

### use short iterations, release in increments
Increment → a baby step that add a small part of a new functionality. A new features typically need multiple small increments to be completed. After any increment, you can release and have a demo.

Iteration → carry out every task of development (analysis, design, implementation, testing, feedback) in a cycle.

The end of an iteration marks a milestone. An increment is ready when, at the end of an iteration, you are ready to release it to the users (including support, training, doc, etc). Each increment generally includes multiple iterations.

Software development is not predictive manufacturing, it is inventive in nature.

Tacking large projects by taking small steps is key to an agile approach: large leaps increase risks.

Most user would rather have an ok product today than an amazing one tomorrow.

identify the core features that would make the product usable, build it and ship it to prod, in the hands of users, asap.

In some special cases, an increment might require weeks - but never months or a year.

Reasons to go to the user fast:

- revenues
- Feedback (what they really care about?)
short iterations and feedback also helps staying focused.

<aside> 💡 **Develop in increments.** Release your product with minimal, yet usable, chunk of functionality. Within the development of each increments use an iterative cycle of one to four weeks or so.

</aside>

**What it feels like**

A short iteration feels sharply and productive. You a solid well designed goal in sight. A form deadline force you to make the hard decisions, and no issues are left open or unresolved for very long.

**Keeping your balance**

- Iteration length is critical question and can be different in context - also consider you don’t have to start iterations back to back. In some cases, for example, authors have created a one week maintenance work between iterations.
- Feel the rhythm: if the iteration looks short on average, understand if it actually is or tasks are too large.
- If there is disconnection between features released and customer needs, iteration was probably too long.
- Incremental release must be valuable to the user. How you know? Ask them 🙂

### Fixed prices are broken promises
Fixed prices contract are an issue for agile teams: a fixed price ahead of time will be for sure a broken promise.

Even in building world, when we think that fixed prices works, they don’t: typically, 30% of construction costs comes from mistakes.

Software development is impacted by mistakes, of course, but also from things changing around.

How to deal with this?

If you absolutely have to stick to a fixed price, you can try COCOMO or Function Point analysis, but still they will cause you issues. You might be more lucky if you are doing something very similar to something you already did - but this happens very very rarely.

Instead, try an agile approach to the contract

- make an offer for a first iteration with the MVP: core features that will make the user productive but are not the entire product they think/need - no more than 4/6 weeks
- After this first iteration, allow the customer to cancel the contract or continuing with the next iteration; if they move on, pick the set of features with them
- At every iteration, allow the user to cancel the contract or move on with the next one
this way, the customer see the progress continuously and is not forced by any contract or penalty to move on with you. Trust can be built.

Ndr: is this similar to “extreme contracts”?

<aside> 💡 **Estimate based on real work.** Let the team actually work on the current project, with the current client, to get realistic estimates. Give the client control over their features and budget.

</aside>

**What it feels like**

Estimates will change through the project, they are not fixed. But you will have increasing confidence that you can forecast the amount accomplished at every iteration. Estimates improve over time thanks to real data.

**Keeping your balance**

- Sometimes you will have to estimate to not lose a contract - do not refuse them at any cost, try a balance.
- Being agile is not about completely avoiding planning and estimates / you still have to do, so try to justify the error margin and understand the tools to use to have good estimates after the first iterations.
- If you are forced to estimates you will need to work on it

## Agile feedback
In an agile project, we are always looking for feedback in ordine e to make many small continuous adjustments. But where does all this feedback comes from?


### Put Angels in your shoulders
Code changes rapidly, so you need constant feedback: does it do wheat we need? Did the last change break anything? You need automated unit tests!

- make sure your tests are repeatable (careful of time and dates, local ip addresses, and so on)
- Test boundaries (23:59:59 and 00:00:00 are always good for time to be tested)
- Never allow failing tests
Some resins to have unit tests:

- They provide instant feedback
- They makes the code more robust
- They can be a helpful design tool
- They can be a confidence booster
- They can act as a probe when solving problems
- They are reliable documentation
- They are learning aid
<aside> 💡 **use automated unit tests.** Good unit tests warn you about problems immediately. Don’t make any change without solid unit tests in place.

</aside>

**What it feels like**

You rely on having unit tests. Code without tests makes you feel uncomfortable.

**Keeping your balance**

- Unit tests are an investment: nicest wisely.
- Many excuses to avoid tests are typically hiding design issue.
- Unit test is as effective as the test coverage.
- More test does not automatically Means better quality.

### Use it before you build it
“Eat your own dog food”

Luckily we don’t make dog food but build digital products, software and API: make sure to use it!

In coding, the best way is Test-Driven Development, because it forces you to look at the code from the utilized point of view.

<aside> 💡 Use it before you build it. Use Test-Driven Development as a design tool: it will lead you to a more pragmatic and simple design.

</aside>

**What it feels like**

It feels like you always have a concrete reason for writing code. You can concentrate on designing an interface without being overly distracted by implementation details.

**Keeping your balance**

- Test Before Checking Code is always useful: TDD helps design but testing before merging is still required
- Every design can be improved
- For experiments and POC, tests can be avoided (some times they still make sense) - then, you should throw away the experiment and build it from scratch; if the poc goes to production, immediately add tests after (but it’s bad practice)
- Unit tests doesn’t guarantee a good design but makes it easier to improve a design

### Different makes a difference
If your application is expected to run on different systems, you need to test them all.

But do not do that manually, it’s unsustainable.

Use CI to automate those tests, on all platforms you need to support.

<aside> 💡 **Different makes a difference.** Run unit tests on each supported platform and environment combination, using continuous integration tools. Actively find problems before they find you.

</aside>

**What it feels like**

It feels like unit testing, only more so - it’s unit testing across more worlds.

**Keeping your balance**

- Hardware is cheaper than developers. Anyway, you might face a context where you support a very large numbers of platforms and configurations and, probably, you will need to be selective about which ones to test
- Tests also systems that are less used, because some bugs could be spotted only that way
- Setup the tests so that if any error occurs you have time to fix it before re running - this way you will avoid multiple notifications for the same error

### Automate acceptance testing
You need to make sure that the result the users are getting is what they expect - or at least correct from their point of view.

You need to automate those tests, but you have a problem: you want the user to be able to change the data used for the test autonomously without learning to code.

You can use a simple file as input (text file, csv, Excel, spreadsheet in general) to allow user to configure the inputs for the tests and the expected output. They can change that file autonomously, and you use it in CI pipeline for the test.

This is also a good approach for moving a business logic from excel to software, using the excel as test for the results: once they match 100%, you can throw away the excel.

You should also print the results in an html page to make it easier for the user to check them.

<aside> 💡 Create tests for core business logic. Have your customer verify these tests in isolation, and exercise them automatically as part of your general test runs.

</aside>

**What it feels like**

Cooperative unit testing: you are still writing the tests, but some else provide the answers.

**Keeping your balance**

- Not all customers can give you correct data: if they had it already, they wouldn’t need a new system.
- You might discover previously existing bug in the old system (be it in a computer or manual) or genuine issues that didn’t exists before.
- Use customer’s business logic, but don’t get bogged down documenting it extensively.

### Measure real progress
Tracking how long tasks actually takes to be completed - if you estimate, then compare the estimates with the real time to understand which factor of errors you have and fix estimates according in the future.

Also, make the road very visible through the backlog.

<aside> 💡 **Measure how much work is left.** Don’t kid yourself or your team with irrelevant metrics: measure the backlog of work to do.

</aside>

**What it feels like**

You feel comfortable you know what has been done, what’s left and what the priorities are.

**Keeping your balance**

- Six minutes units are too small, not agile
- Week or months units are too big, not agile either
- Focus on functionality, not calendar
- If you spend too much time tracking instead of working, is bad
- Not all working hours are available for coding, remember that

### Listen to users
You want to provide as much details as possible when something goes wrong, but more important, if users are all having a similar issues or complaining about the same thing, it’s not that they are stupid: instead, is team problem to make it easy for them.

Whether it’s a bug in the product, doc, or understanding of the user community, it’s a team problem, not users.

You need to talk to real users (not their manager or a surrogate) and you need to actually listen to them.

<aside> 💡 **Every complaint holds a truth**. Find the truth, and fix the real problem.

</aside>

**What it feels like**

You don’t get dismissive of stupid complaints. You can look past and see the real underlying problem.

**Keeping your balance**

- There is no “stupid” user
- There are “stupid, arrogant” developers sometimes
- “That’s just how it is” is not an answer
- If code can’t be fixed, doc and training can
- It’s unlikely that users read all doc and remember everything about your product

## Agile coding
In order to keep the code easy to change over time, the best way is investing time everyday in keeping it clean. The practices in this chapter will help in maintaining code that’s easier to understand extend and maintain.


### Program intently and expressively
Always chose readability over convenience. Code will be read far more times than written. Understanding what code does is often harder than understanding how to change it, so make it easier for the future. Unless you have special needs, readability is more important then everything else, performance included.

PIE principle: Program Intently and Expressively.

Be expressive: use names that convey intent and purpose, name exception to describe errors, favor readability.

<aside> 💡 Write code to be clear, not clever. Express your intentions clearly to the reader of the code. Unreadable code is not clever.

</aside>

**What it feels like**

You feel you or everyone else on the team can understand what a piece of code you wrote a while ago does.

**Keeping your balance**

- Consider that something obvious to you might be not obvious to someone else or you in the future
- There is no later: if you don’t do it now,’you won’t in the future
- Readability is not an excuse for over abstraction
- Coupling has an impact on readability: if two components really need to be coupled, no need for some decouples hash table logic within them

### Communicate in code
Programmers hate documentation - that’s because most of it is kept separated from the code and becomes hard to keep updated. It also violates DRY if it describe what the code does - it shouldn’t.

Code should be documented in two way: code itself being readable, and comments for non-code issues.

Source code should be readable not because of comments but because of elegance and clarity of the code itself: proper variable names, good separation of logic, concise expressions.

Naming is a big deal: use names to convey more informations to the reader as possible.

About comments: avoid useless ones. Only comment to express what code can’t:

- why the code exists
- Prerequisites or promises
- exceptions
Automated documentation created from this comments is the best.

<aside> 💡 comment to communicate. Document code using well chosen, meaningful names. Use comments to describe its purpose and constraints. Don’t comment as a substitute for good code.

</aside>

**What it feels like**

Comments feel like helpful friends: you can read them and quickly scan the code to fully understand what it’s doing and why.

**Keeping your balance**

- Comments should be short
- Don’t use comments where real code can convey the information
- Comments are for why, not for what the code does
- When you override methods, preserve original intent and comments

### Actively evaluate trade-offs
It’s not mandatory to always follow best practices strictly, or favor readability over performances. The important things is that you evaluate all the needs (performance, readability, time to market, whatever) and consider all of them to take the best trade off decision you can.

A best solution for all circumstances does not exists: evaluate the problem and get to the most suitable solution.

<aside> 💡 **Actively evaluate trade-offs.** Consider performance, convenience, productivity, cost, and time to market. If performance is adequate, then focus on improving the other factors. Don’t complicate the design for the sake of perceived performance or elegance.

</aside>

**What it feels like**

You can’t have everything but you have all the important things.

**Keeping your balance**

- If you invest extra effort now for a later benefit, make sure it will pay off (most of times it won’t)
- High performance systems are designed to be that way from the beginning
- Premature optimization is the root of all evil
- A solution you used in the past might or might not be appropriate for the current problem: don’t assume it, check it out

### Code in increments
Don’t code for hours, not even minutes,’without stopping to make sure you are on the right path by testing what you produce.

Code in short increments.

This will help you refine and structure the code progressively, and the code will likely be cleaner and more readable.

Constantly look for small ways to improve the code.

<aside> 💡 **Write code in short edit/build/test cycles.** You will create code that’s clearer, simpler and easier to maintain.

</aside>

**What it feels like**

You feel the urge to run a build/test cycle after writing a few lines of code. You don’t want to go too far without getting feeedback.

**Keeping your balance**

- Make sure tests run quickly, or you will not run them often enough
- Using the test executions as a pause to think and zoom out is a good way to stay on track
- Make sure breaks are real break: go away from the keyboard
- Refactor tests also, as frequently as code

### Keep it simple
Do not confuse effort with complexity: you should be proud of creating a simple design that works well.

Simplicity doesn’t mean simplistic or insufficient - quite the opposite. Simplicity is much more difficult to achieve than an overly complex solution.

Elegant code → obvious to read, not obvious to write.

One of the best way to evaluate equality of design is intuition: a good design makes you feel comfortable.

<aside> 💡 **Develop the simplest solution that works.** Incorporate patterns, principles, and technology only if you have a compelling reason to use them

</aside>

**What it feels like**

It feels right when there is not line of code you could remove and still deliver all features. Code is easy to follow and correct.

**Keeping your balance**

- Cose con always be refined, but at some point there will be advantages of it
- Keep the goal in mind: simple, readable code.
- Simple solutions must be adequate: do not compromise features.
- Terse is not simple, is just non communicative
- One person simplicity could be another one complexity

### Write cohesive code
Cohesion measure how functionally related are the members of a component.

Imagine your clothes organization: low cohesion is putting all clothes together, low cohesion is putting socks in their own drawer, t-shirt in their own, etc.

Cohesion is a consequence of the Single Responsibility SOLID principle: s component should have only one reason to change.

For example, MVC pattern separate presentation, control, and model logics.

The granularity of a component is an import net decision: think to an external library. If it has a wide scope, you might be interested in only a subset of features and still be affected by updates to the unused parts. The bigger the package, the less reusable it is.

<aside> 💡 Keep classes focused and components small. Avoid the temptation to build large classes or component or miscellaneous catch all classes.

</aside>

**What it feels like**

Classes and component feel tightly focused: each does one thing well. Bugs are easy to track down, code is easy to modify.

**Keeping your balance**

- You can infinitely break something into smaller parts to when it’s not useful anymore, be careful!
- Cohesive code can be changed proportionally to the change needed - if the cost is too high, it’s a smell

### Tell, don’t ask
Procedural code gets information and then make decisions - OO code tells objects to do things.

As the caller, you should not make decisions based on the state of the called object.

Imagine a paperboy coming to you and ask for the payment: would you give him your wallet and hope he will just get the 2$ he asked for?

Paperboy is the caller, and you are the called: the logic is called responsibility, the caller will only receive the promised result.

Command-Query Separation is a good approach to favor “tell, don’t ask”.

Commands will change the state of the data and eventually returns some portion of it - while queries does not change any state and only returns some data.

<aside> 💡 Tell, don’t ask. Don’t take on another objects or components job. Tell them what to do and stick to your own job.

</aside>

**What it feels like**

It’s more message passing than method calls. You feel like you are sending messages, not calling functions.

**Keeping your balance**

- Object only holding data are suspect: sometimes are needed, but very rarely.
- It’s ok if commands to return some convenient data (imagine new ID after creating a new record in a table)
- ITS NOT OK if a query make changes to the state of the object

### Substitute by contract
Liskov’s substitution principle tells that “any derived class object must be substitutable wherever a base class object is used, without the need for the user to know the difference”. This means that code that use methods in base classes must be able to use objects of derived classes without changes.

Often we misuse inheritance to pursuit this objective.

Inheritance is for “is-a” relationship between classes. (A cat is an animal → Cat extends Animal)

Use composition/delegation (same thing) when the relationship is more an “has-a” or “use-a”. (A Man has two Legs or uses one Knife)

<aside> 💡 Extend systems by substituting code. Add and enhance features by substituting classes that honor the interface contract. Delegation is almost always preferable to inheritance.

</aside>

**What it feels like**

You can sneak a replacement component into the codebase without any of e rest of the code knowing about it.

**Keeping your balance**

- Delegation is usually more flexible and adaptable than inheritance
- Inheritance isn’t evil, just misunderstood
- You must be sure what an interface promise to provide an implementation that honor that promise

## Agile debugging
Even in an agile context, bugs and defect will happen. Here are some technique to make the investigation faster.


### Keep a solution log
Often, we face the same problem twice or more times. To avoid repeating the same research for that problem, keep a solution log.

Some data to track:

- date
- Short description of problem
- Detailed de script ion of solution, with why
- All references to link a urls that helped in the reasearch
- Any cose reference, setting, snapshot, whatever can help
Make the content searchable via computer for future search.

<aside> 💡 **maintain a log of problems and their solution.** Part of fixing a problem is retaining details of the solution so you can find and apply it later.

</aside>

**What it feels like**

The solution log helps you to find details on issues you face again but also help with different similar issues.

**Keeping your balance**

- Spend more time solving problems than logging: keep the documentation easy, is not a publication
- Finding previous solutions is critical, so be sure to use all the keywords you can
- If you dont find others with similar isse on the web, you might probably be doing something wrong
- Keep track of the versions of the app, the system, etc. some problems are related to it.
- Record why you made a decision, which is the most easy part to forget But is also fundamental

### Warnings are really errors
Do not ignore warning or they will lead to a disaster. Force your compiler to treat warning as errors.

Do it from the start or it might become overwhelming.

<aside> 💡 **Treat warnings as errors.** Checking in code with warnings is just as bad as checking in code with errors or code that fails its tests. No checked in code should produce any warnings from the build tools.

</aside>

**What it feels like**

Warnings are warning you about something,so they get your attention.

**Keeping your balance**

- Interpreted language can also be forced to handle warnings as errors
- Some warnings are fault of the compiler, don’t. Waste time on them (but should be very rare) - you. Should be. Able to tell the compiler to suppress those warnings
- deprecated method are deprecated for a reason - stop using them
- If you deprecate your methods, document what the user should do instead and also when the method will be removed

### Attack problems in isolation
The first step in identifying complex problems is to isolate them. It’s easier to fix engines when they are out of the aircraft: similarly, it’s easier to fix problems in code if you can isolate the module causing the problem.

If the application is not well designed, it might be very hard to isolate the piece of code: spending some time to be able to do it is a wise choice.

<aside> 💡 **Attack problems in isolation.** Separate a problem area from its surroundings when working on it, especially in large application.

</aside>

**What it feels like**

When faced with a problem that you have to isolate, it feels like searching for a needle in a tea cup, not an haystack.

**Keeping your balance**

- If you separate code from the environment and the problem goes away, you still have isolated the problem
- On the other hand, if you separate code from the environment and the problem does not goes away, you also have isolated the problem
- Binary chop can help in finding an issue sometimes: divide the problem space in half and see which half has the problem
- Before attacking the problem, consult the solution log

### Report all exceptions
Do not only think to how things should work: instead, also think to what happens when things don’t work.

Let the user of your code know exactly what went wrong.

<aside> 💡 **Handle or propagate exceptions.** Don’t suppress them, even temporarily. Write your code with the expectation that things will fail.

</aside>

**What it feels like**

You feel you can rely on getting an exception when something bad happens. There are no empty exception handlers.

**Keeping your balance**

- Determining who is responsible for handling an exception is part of design
- Not all situations are exceptional
- A NullPointerException is useless - report that in a way that make sense in the context where it is thrown
- Issue a log message when an exception is thrown to make tracking them much easier
- If a method throws too much exception, there is a design error
- Propagate what you can’t handle

### Provide useful error messages
On one hand, you want to provide users with a clean, high level explanation of what went wrong so that they can understand the problem and perhaps pursue a workaround. On the other hand, you want to give them all the low-level details of the error so that you can identify the real problem.

A good approach is to typically show a user friendly message (“couldn’t login”) with a “see more details” link - when clicked, the link opens a modal/accordion/whatever that shows all the details of the error - for example, the last stack trace step, or the actual error from Execution. In production, you might prefer to link the log, instead of printing it directly.

Type of errors:

- defects: genuine bugs, nothing the user or system admin can do
- Env problems: for example, a connection failed to db - programmer can’t do much about it, but the user could have a workaround and the system admin should be able to fix it if he has enough details
- User error: the user just need to try again, tell him all he need in the error message
<aside> 💡 **Present useful error messages.**
 Provide an easy way to find the details of errors. Present as much supporting details as you can about a problem when it occurs, but don’t bury the user with it.

</aside>

**What it feels like**

Error messages feel useful and helpful. When a problem arises, you can hone in on the precise details of what went wrong, where.

**Keeping your balance**

- File not found is not useful as an error message - “can’t open main.yaml for reading” is much better
- Use assertions at key points in the code to make sure everything is ok - if they fail, handle the exception with a good amount of info in the error message
- More information provided should not compromise security, privacy, trade secrets, or any other sensitive information
- Consider including a log key/id in the user error message to help in finding it

## Agile collaboration
The days of building a full product alone, in your garage, have pretty much passed us by. The success of a project depend on how effectively people work together.

Effective collaboration is a cornerstone of agile development.


### Schedule regular face time
Standup meetings are an effective way to keep the team together and keep everyone informed.

Standup —> people are not allowed to sit so that the meeting remain short

Standard version: 15 minutes, a couple of min for each person at most, answering:

- what I did yesterday
- What I plan to do today
- What blockers I have
Arrange any conversation or collaboration required, but try to avoid having the long conversation immediately.

Standup should be early in the morning, but be sure to give time to people to get to work and grab a cup of coffee - 30/60 minutes after the usual start hours is a good time.

Benefits of standup meetings:

- kick off the day in a focused way
- If a dev has a problem, he/she has a chance to bring the issue out loud
- Help identifying areas that require for additional help
- Make team members aware of what’s going on
- help identifying redundancy or areas with existing solutoons
- Facilitate sharing code and ideas
- Encourage forward momentum: seeing with others achieve motivates each others
<aside> 💡 **Use standup meetings.**
 Standup meetings keep the team on the same page. Keep the meeting short, focused and intense.

</aside>

**What it feels like**

You look forward to the standup meeting. You get a good sense of what everyone is working on and can bring problems out easily.

**Keeping your balance**

- Meetings take time from development, so you need to maximize the return of them. Standup longer than 30 minutes are very bad, 10/15 minutes are ideal
- If you reserve a room, reserve it for an hour so that you can use it for follow ups immediately after when needed
- Sometimes, for smaller teams you might consider meeting every 2/3 days (ndr: brutto suggerimento 😂)
- Report progress but don’t go into low level details
- Don’t waste time waiting to get the meeting started.
- If you feel the standup is a waste of time, you are probably not operating as a team. This can be good enough for you, maybe, s long as you are aware of it.

### Architects must write code
You can’t code in PowerPoint.

The role of architect is very bad: they typically draw everything upfront and they fail because of lack of feedback.

A design is specific to the problem at hand, and your understanding of the problem changes as you implement that design.

There are no final decisions: no decision you make should be cast on stone.

Strategic decision can be made miles away, but tactical decision require significant understanding of what happens.

The designer of a new kind of system must participate fully in the implementation.

As Martin Fowler says in the “who need an architect?” Article:

> The role of a real architect is to mentor the dev team, raising their level so that they can take on more complex issues.

Encourafe your programmers to design. A programmer who refuses to design is a person who refuses to think.

<aside> 💡 **Good design evolves from active programmers.**
 Real insight comes from active coding. Don’t use architects who don’t code - they can TDD sign without knowing the realities of your system.

</aside>

**What it feels like**

Architecture, design, coding and testing feel like different facets of the same activity: development. They should not feel like separate activities.

**Keeping your balance**

- If you have one chief architect, it might not have enough time to be a full time code. Keep him involved as much as possible
- Don’t let anyone design in isolation, especially yourself

### Practice Collective Ownership
Any team member should be able to work on any piece of code. You increase risks if you keep a piece of code in the hands of a single dev. Solving problems and make users happy are most important Thant deciding who has the best idea.

Project scheduling becomes easier when more than one person can comfortably work different parts of the app code.

Overall knowledge and experience level of the people will also improve if they rotate. And they will be more disciplined knowing that someone else will work on their code.

<aside> 💡 **Emphasize collective ownership of code.** Rotate dev across different modules and tasks in different areas of the system.

</aside>

**What it feels like**

You feel comfortable working on most or any part of the system.

**Keeping your balance**

- Don’t lose expertise on your team: if a person is expert in an area, keep him around while exposing others to that area
- Collective ownership is not a license to hack widely
- You don’t need to know ever details of the project, but you shouldn’t be scared away from Any part of the system either
- There are special cases where collective ownership could be not the best choices: for example when a very specific vertical knowledge is required (ndr: mi sembra accettabile solo per breve periodo)
- When you don’t share knowledge on the team, you risk losing it entirely (people go away sometimes)

### Be a mentor
Knowledge grows when given.

If you realize you have more knowledge about something in the team, share it to improve things.

Working with others on a team is a great learning experience. And knowledge has unique properties: when you give money to someone, you have less and he has more. When you teach something to someone, both will have more knowledge.

By taking the time to explain what you know, you get a better understanding of it yourself, and a different perspective.

You can do this within the team but also publicly.

<aside> 💡 **Be a mentor.**
 There is fun in sharing what you know: you gain as you give. You motivate others to achieve better results. You improve the overall competencies of your team.

</aside>

**What it feels like**

You find that teaching is another way to improve your own learning, and others come to trust that you can help them.

**Keeping your balance**

- If you keep teaching the same topics to different people, keep notes to write an article or a book about it
- Being a mentor is a great investment in your team
- Pair programming is a natural environment for effective Mentoring
- If you find yourself getting interrupted by people who seem too lazy to find answers for themselves, see the next practice
- Set a time limit for how long someone in the team can be stuck before asking for help - one hour can be a good target

### Allow people to figure it out
> Give a man a fish, and you will feed him for a day. Teach him to fish, and you will feed him for a lifetime.

Being a mentor involves teaching to fish much more than giving fish.

Instead of giving direct answers, point them in the right direction.

Advantages of this approach:

- you help them learning how to approach the problem
- They get to learn more than just the answer
- They won’t keep coming to you with similar questions
- You help them understanding what to do when you are not available
- They could come back with solutions or idea you didn’t consider
If he comes empty handed, provide more hints. if he has some ideas, help him evaluate pros and cons. If he has a better solution than what you thought, learn from the experience and share your thoughts. It’s an educational experience for both of you.

<aside> 💡 **Give others a chance to solve problems.**
 Point them in the right direction instead of handing them solutions. Everyone can learn something in the process.

</aside>

**What it feels like**

It feels like you are being helpful without spoon-feeding. You are not cryptic or cagey, but you can lead people to find their own answers.

**Keeping your balance**

- Answer a question with another question that leads to the right direction
- If someone is really stuck, don’t torment them. Show them the answer, and explain why it is

### Share code o it when ready
Check in code as soon as you are finished with a task. Avoid keeping it only in the hard drive.

But you shouldn’t check-in code that is unworkable/releasable because you would effect other developers.

Either use a branch, or even better, continuous integration.

<aside> 💡 **Share code only when ready.**
 Never check in code that’s not ready for others. Deliberately checking in code that doesn’t compile or pass it’s unit tests should be considered an act of criminal project negligence.

</aside>

**What it feels like**

You feel the team sitting there at the other one of the version control system. You know that as soon you check in, the world has it.

**Keeping your balance**

- Some version control systems distinguish between “checked in” and “publicly available” (ndr: git) - in that case, temporary check ins are fine because they are still not shared with others
- Code reviews before allowing code to be checked in are fine as soon as they don’t delay it too much
- Check in code frequently, do not use “is not ready” as an excuse for not doing it

### Review code
The best time to find problems in code is as soon as it is written. So yes - review code as soon as possible.

Some strategies:

- all nighter: a monthly meeting code review session; avoid this, because is totally non effective
- Pick up game: as soon as some code is written, compiled and tested - ready to be checked in - someone pick it up and review it; be sure to make everyone review code from Everyone else in rotation
- Pair programming : write code in pairs, one person at the keyboard, one that act as navigator. Switch roles often and make continuous reviews and collaboration
Some tips on what to look for during a review:

- can you read and understand the code?
- Are there any obvious errors?
- Will the code have undesirable effects on some parts of the app?
- Any duplication or code missing?
- Any improvement or refactoring to suggest?
<aside> 💡 **Review all code.** Code reviews are invaluable in improving the quality of the code and keeping the error rate low. If done correctly, reviews can be practical and effective. Review code after each task, using different developers.

</aside>

**What it feels like**

Code reviews happen in small chunks, continuously. It feels like an ongoing part of the project, not a big scary event.

**Keeping your balance**

- Rubber-stamp code reviews without thoughts has no value
- Review needs to actively evaluate design and clarity of the code, not only some standard
- Different is not worse: don’t criticize unless you can suggest something measurably better
- Reviews are useless unless you follow recommendations quickly - schedule a follow up if needed or use a system of annotations
- Always close the loop and show reviewers how you responded to the feedback

### Keep others informed
If you wait the deadline to deliver bad news, you are begging your manager and tech lead to micromanage you. They won’t trust you anymore.

By keeping other informed, you eliminate surprises and they are comfortable they know your progress.

Two ways of doing it:

- traditional, by sending some sort of message (slack, email, phone call, meeting, ecc)
- Information radiators: setup a display where you show the progress of the work and people can see it without even asking for it
<aside> 💡 **Keep others informed.** Publish your status, your ideas and the neat things you’re looking at. Don’t wait for others to ask you the status of your work.

</aside>

**What it feels like**

You don’t feel pestered by managers or coworkers constantly asking you for your status or latest design or research efforts.

**Keeping your balance**

- Daily standups can help in keeping everyone up to date at a high level
- Adapt level of details to audience: CEO and business owners typically don’t care about technical details
- Don’t spend more time on keeping people updates instead of getting work done
- Stay heads-up, not heads down

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: professional-php-building-maintainable-and-secure ========
TITLE: Professional PHP: Building maintainable and secure applications
AUTHOR: ['Patrick Louys']
TOPICS: ['php', 'software-development']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/professional-php-building-maintainable-and-secure/content.md
---BODY---

# Professional PHP: Building maintainable and secure applications

## Summary

A codebase should be easy to read and understand, not only for you but for the whole team, including the new arrive of the week.

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

# Part 1: Theory
> *To teach is to learn twice. [Joseph Joubert]*


### What is maintainable code?
A codebase should be easy to read and understand, not only for you but for the whole team, including the new arrive of the week.

Maintainable code also has to be flexible, because business requirements change all the time and you need to be able to adapt fast to those changes. You cannot predict how things will change, so write code that is easy to modify later.

We spend much more time reading code compared to writing code: the effort of keeping code maintainable will save you lot of time in the long run.

Writing completely bug free code is unrealistic and should not be the goal: you should aim to write good code, easy to read, understand and maintain, unless if you are in an industry where bugs are really too expensive; in that case, you want to mathematically proof that the code is bug free.


### Technical debt
Every time we take a shortcut and don't write maintainable code, we increase our technical debt; you can pay off that debt by refactoring the code.

Just like monetary debt, tech debt accumulate interests: the longer you wait to refactor the code, the longer it will take.

When you take a shortcut during development, you are taking a loan that your future self has to repay at some point, interests included. It's not always possible to avoid tech debt thou, for example when you have to meet an important deadline.

You should always push to refactor the code as soon as possible, because ignoring tech debt will lead to a slow down in development speedness.

When productivity slow down, manager often think that devs got lazy, so you should aim to make people understand technical debt in order to let them understand where is the real problem.

> *Shipping first time code is like going into debt. A little debt speeds development so long as it is paid back promptly with a rewrite. The danger occurs when the debt is not repaid. [Ward Cunningham]*

Even when you decide to take on tech debt, you should write the best code possible: don't see it as a free pass to create mess, create the best code you can limiting the debt to what's really needed. Otherwise, the refactoring to clean up will take too much and you will never find the time for it.

Using an interface in order to keep the bad code separated in a specific implementation is a good idea.


### How to deal with a deadline
Let's see an example: you have to finish a new feature where you have to display a list of upcoming events in a lot of places where they should be displayed. Your PM is pushing to close this fast because of business reasons.

You could just hardcode the list and copy paste it everywhere you need to show it, but that would be too much debt because the refactoring of this to a good solution (like events stored in a DB, for example) would take too much for being accomplished.

A better approach is to hide the list of events under an abstraction, so the refactoring will ask you only to change that class. This approach will take slightly more time, but it still takes much less than developing the complete solution.


### To rewrite or to refactor
It is far easier to apply maintainable code principles to a new codebase, but we often work on legacy code with years of tech debt.

For large projects, a complete rewrite is rarely a good idea: while you rewrite it, you also have to maintain the old code while writing the new and if a new feature comes up, you have to develop it twice.

Refactoring a large legacy codebase is an art and reading a book on the topic is a strong suggestion if you have to face something like that.

In general, a great approach is the boy scout rule: "Always leave the place cleaner that you found it". Everytime you work on a piece of code that needs a clean up, just do it. Even if it isn't code written by you.

If you start applying the boy scout rule strictly, the overall quality of the code will quickly increase overt time, and will mainly be on the most important part of the code: the one that changes often.


## Concepts
Some basic programming concepts that we will apply later.


### Abstraction
Software become more complex every time we add a new feature: programming is an art where you need to manage that complexity and make sure the code is still readable and easy to understand.

An abstraction is a construct to hide implementation details: is not a concept limited to programming, we abstract things every day through language; for example, when we say "laptop" we are abstracting the concept of a laptop, we don't care which brand it is, or its screen size, CPU or anything else, we only care about the abstract idea of a laptop.

Creating an abstraction in programming is not limited to real world objects: we can create new useful abstraction that make easier to think and reason about the code.

Example: we need to write a program that reacts to a click on the track-pad; we realize that a click is an action that not only a track-pad can do; this can lead us to create a "Pointing devices" abstraction, that group all that devices that can perform a click, like a track-pad, mouse, etc.

The code shouldn't care if the click is made from a specific device.

An abstraction simplifies your code, even if the result has more lines of code or files, because we hide the complexity behind the abstraction.


### Coupling
Coupling describes how dependent two components are on each other: maintainable code has very low coupling between different components.

An example with the laptop again: imagine a laptop where the monitor is highly coupled to the track-pad; the monitor power is not connected to the power source directly, it is served through the track-pad thanks to a specific connector.

This probably made the laptop a couple cents cheaper and saved the engineer a bit of time.

Then, the track-pad becomes obsolete and is replaced from a new version, where some useless parts were removed. The connector used by the monitor is one of them.

This leads to 2 problems: first, the new laptop will have to rethink on how to power the monitor, a problem that is totally unrelated to the track-pad; second, all the laptop sent for repair cannot receive a new track-pad easily.

That coupling between monitor and track-pad is totally useless and non-sense.


### Cohesion
Cohesion describes how close to each other are the elements of a component. If two pieces of code actually belong together, they should be in the same pace to achieve high cohesion.

Let's stick to the laptop example again: if it's properly designed, the laptop will have all the track-pad parts closely grouped together, soldered together and connected as a single unit to the rest of the laptop. The track-pas is responsible for one thing and nothing else, and there is nothing on the track-pad board that is not there to help the track-pad do its job.

Writing components with high cohesion leads to robust and maintainable code. It reduces complexity because each component has a specific area where it excels. That components are also easy to reuse if the same job must be done in another part of the program.

High cohesion and low coupling are closely related: improving the first will most often improve the second, and viceversa.


### Don't Repeat Yourself - DRY
<aside> 💡 Every piece of knowledge must have a single, unambiguous, authoritative representation within a system. *The Don't Repeat Yourself principle*

</aside>

Duplication can be a nightmare, either when it's done by purpose or by accident.

Duplication cannot arise only from copy-paste development and it's not limited only to code. A very common DRY violation is the duplication of information between comments and code: if comments only describes what the code does, they are transmitting an information which should be received from reading the code. Comments have their own place: they should explain things that cannot be read from the code, like the reason for a specific choice, like using a specific Design Pattern or algorithm instead of another.

If you come across a comment that only explains what the code does, refactor the code so that it speaks for itself and remove comments.

Duplication is fine as long as it is generated from a single source, and not all code that looks the same should be deduplicated: DRY "repeat" concept is about knowledge, not similar code.


## Methods

### Naming your methods
A function that belongs to a class is called method, even if the keyword used by PHP is always `function`. A method represent an action that can be performed by the class, so the name of the method should always contain a verb and represent what that actions is.

Make names descriptive, even at cost of having long names: make them as long as necessary, but not longer.

<aside> ‼️

Be consistent with your names! You can use different words for a method that reads from Database: `findUser`, `fetchUser`, `retrieveUser`, etc. Pick one of them and stick to it: this will make your code coherent and more readable.

</aside>


### Number of parameters
The number of methods parameters should be limited: every additional parameter adds a little bit of mental overhead.

For example, you can reduces the number of parameters trying to group some of them in a unique object; but, be careful: only do this with parameters that are closely related and belong together. If you find it hard to come up with a name for that object, its a signal that those parameters are probably not made to be together.

Remove unused parameters: it's easier to remove it and then reimplement it whenever you will need it, instead of keeping it when unused and force all the caller to adapt to it with a fake/null value.


### Flag parameters
Flag parameters are parameters that change what a method is doing; let's see an example:

```
public function sendNotification(Message $message, bool $sendAsEmail): void
{
	if ($sendAsEmail) {
		// send email notification
		return;
	}
	// send internal notification
}
```

That parameter is knowledge that must be shared between the method and the caller: the caller must know how the behaviour changes when it flips the value.

It's far easier and more maintainable and readable to provide two different methods:

```
public function sendEmailNotification(Message $message): void { /** ... */ }

public function sendInternalNotification(Message $message): void { /** ... */ }
```


### Type declarations
Type declaration enforce the signature of the methods, acting as documentation at the same time. Without type declaration, you have no guarantee that the caller will send you exactly the right type you need; also, the caller wouldn't know which type to expect in return.

```
public function setFavoriteColor($color) { /** ... */ }

public function getFavoriteColor() { /** ... */ }
```

Methods without types are hard to read and understand: you have to dig out the whole code to figure out what's going on.

```
public function setFavoriteColor(Color $color): void { /** ... */ }

public function getFavoriteColor(): Color { /** ... */ }
```

With type declaration, the methods signatures are now clearer and cannot be misinterpretated. Methods are stating clearly what they need and what they will return.


### Method visibility
PHP supports 3 type of visibility: public, private and protected.

- Public → visible from everywhere
- Protected → visible only from inheriting and parent classes
- Private → visible only within the class
From the outside, you should only expose the behavior you want to offer; so, by default, visibility should be private.


### Keep your methods small
A method should be responsible of a single action and should be kept small. Ideally, 10 lines is the perfect length of a method. If you are coming closer to 20, think about if it can be refactored.

Of course those numbers are only guidelines.

Also avoid more than one level of indentation.


### Comment why, not what
Having small methods also help documenting code. Avoid commenting to explaining what the next few lines will do, you should be able to read it from the code itself.

> *If you have to spend effort into looking at a fragment of code to figure out what it's doing, then you should extract it into a function and name the function after that "what". [Martin Fowler]*

You should only comment when needed and only to explain why you did implement it that way; for example, justify the choice of a pattern instead of another or explain any hidden reason behind that decision.


### Deduplicate your code
Code deduplication is another big benefit of small methods: you can easily reuse them if the same behavior is needed.

Remember that you want to avoid behavior duplication, not simply code duplication. Some pieces of code might look very similar but can express different behaviors: in that case, it's not a real duplication.


### Command-Query Separation
The CQS principle states that a function should either be a command or a query, never both.

A command is a function that change the state, but doesn't return anything.

A query is a function that returns the state or part of it, but doesn't change anything.

> *Asking a question should not change the answer [Bertrand Meyer]*

A query should always return the same result, even if called multiple times. No side effect should be triggered.

A command, on the other hand, should return nothing: always declare it as `void`.

You should strictly follow CQS but don't treat it as a dogma: can be broken, with consciousness, in some cases.

An example is a method that creates something on a database and returns the ID of the newly created record.


## Objects
When you create a new instance of a class, that instance is called object.

As a general principle, as much information as possible should be hidden beneath the abstraction of the object, that should expose only its behaviors.


### Properties
The member variables of a class are called properties: those are the attributes of the object.

The type of a property should be consistent, avoiding the same variable to accept different types like integers, strings and dates. Null is an exception to this: it's totally acceptable to make your types nullable.

Avoid using the public keyword every time is possible: you should basically never use it for properties.

Instead of giving access to all the internal data, expose some public methods that allow external users to achieve the behaviour they need and change the state accordingly.


### Prohibit inheritance by default
A lot of people think that OOP is about inheritance: that's wrong. We even have the "composition over inheritance" principle! Inheritance is just one of many tools. Only use it when the inheritance make sense: you can figure it out with a trick: imagine tou have Class A and Class B and want B to extend A; ask yourself: "I'm saying that B is an A. Does it make sense?".

For example, if A is a Chair and B is a Wheel Chair, it may have sense; if B is a Sofa, instead, it doesn't. Avoid using inheritance just for the sake of avoiding duplication of code.

By default, all the classes should be defined as `final`: if you will really really need to extend it in the future, you can always make it non-final, while the opposite is way harder.


### Principles
SOLID:

- Single responsibility
- Open-closed
- Liskov substitution
- Interface Segregation
- Dependency inversion
GRASP (General Responsibility Assignment Software Patterns)

- Controller
- Creator
- High Cohesion
- Indirection
- Information expert
- Low coupling
- Polymorphism
- Protected variations
- Pure fabrication
Other principles

- Law of Demeter
- DRY
- YAGNI
We will see them during the tutorial: they are a great teaching tool and also a reference when you are not sure on how to implement something.


### You ain't gonna need it
An important counterpart of the DRY principle is the YAGNI principle: You Are not Going to Need It.

Sometimes developers become infatuated with the DRY principle and they always try to create a reusable solution, even when there is no need for one.

Do not try to anticipate the future, don't write more code just because you might use it in the future: trying to future-proof yourself is a recipe for a disaster.

> *The cheapest, fastest and most reliable components of a computer system are those that aren't there. [Gordon Bell]*

Write code to solve your current problem and nothing more.

Don't be afraid of refactoring and changes.

That doesn't mean you shouldn't build flexibility in the code: refactoring must be easy.


# Part 2: Tutorial

## Front Controller
The Front Controller patterns is the implementation of a controller dedicated to handle all the requests that are coming; then, it's up to the application to make sure each path is mapped to the correct method call.


## Bootstrapping
The term bootstrapping comes from the old saying "pull yourself up by your own bootstraps". In computing, it refers to the first piece of code that is being run when the system is started.

In a web app, the bootstrap file is responsible to set up the application.


## Controllers
The code in your bootstrap file should only be responsible for the setup of your application, nothing else. We need a different place for the code that responds to specific requests.

Using controller classes, that contains one or more methods, is the most common way.

We are creating a layered architecture:

- Presentation
- Application
- Domain


We want to separate code not only into layers but also by context.

Routing is a solved problem, so just use a library.


## Dependency Injection
When one of our classes uses a different class, to be able to do its job, that different class is called a **dependency**.

We could create the class we need in the constructor:

```
<?php
declare(strict_types=1);

namespace SocialNews\\FrontPage\\Presentation;

use Symfony\\Component\\HttpFoundation\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

final class FrontPageController
{
		private TemplateRenderer $templateRenderer;

    public function __constructor()
    {
				$this->templateRenderer = new TemplateRenderer();
    }

    public function show(Request $request): Response
    {
        $content = 'Hello, ' . $request->get('name', 'Pippo');
        return new Response($content);
    }
}
```

This approach has a few drawbacks:

- we are creating a strong coupling between the two classes: for example, if the template renderer has some constructor arguments, the front page controller should provide them too
- due to this coupling,it's hard to change the template renderer class without breaking every class that needs it
With dependency injection, we invert the whole approach:

```
<?php
declare(strict_types=1);

namespace SocialNews\\FrontPage\\Presentation;

use Symfony\\Component\\HttpFoundation\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

final class FrontPageController
{
		private TemplateRenderer $templateRenderer;

    public function __constructor(TemplateRenderer $templateRenderer)
    {
				$this->templateRenderer = $templateRenderer;
    }

    public function show(Request $request): Response
    {
        $content = 'Hello, ' . $request->get('name', 'Pippo');
        return new Response($content);
    }
}
```

Now the class is asking for an instance of its dependency, instead of creating one itself. So it's up to who will create the instance of the FrontPageController now to provide a correct set of dependencies.

<aside> 💡

Always ask for your dependencies. Only instantiate objects that your method is going to return or pass to another method.

</aside>


### Depending on an interface
Dependency injection has other benefits: instead of depending on concrete classes, we can make it depend on an interface. You can see the interface as a contract that the implementing class must fulfill.

**Why bother with an interface?'**

This gives us a lot of flexibility: we can completely switch the implementation of an interface without changing the class that uses it, as long as we implement the same interface.

**Important:** an interface should be tailor-made for the code that consumes it. Interfaces should not act as a collection of methods with only a few used by the client code.

> *No client should be forced to depend on methods it does not use. [Robert C. Martin]*

Do not focus too much on DRY and remember: DRY is about behaviour, not code. You can have similar code that solve different behavior: that is not duplication!

<aside> ‼️ **Do not** call the interface class with an `Interface` suffix!

By using an `Interface` suffix, you are leaking an implementation detail: you are also coupling the client code to depend on an interface and not on a real class. Finally, this will also lead you to bad naming: typically, the first implementation of a `ClassInterface` is a `Class`, but that makes the first implementation special compared to the others!

Bad example: `interface TemplateRendererInterface` → `class TemplateRenderer`

Good example: `interface TemplateRenderer` → `class TwigTemplateRenderer`

</aside>


### Injecting an instance: things to avoid
1. Avoid an abstract Controller to handle dependencies: things changes and classes want to be independent with their own dependencies
2. Avoid creating a Service Locator (a single dependency that can serve all existing dependencies): this approach will hide the dependencies of your classes

### Use a Dependency Injector
The right thing to do is using a dependency injector, in order to avoid to write a specific factory for every single class.


### Composition over Inheritance
Always use the `final class` keyword in order to avoid inheritance: when you really need to inherit, you can remove it.

You should only use inheritance when appropriated, meaning that the class that extends another really should extend because they express the same concept. To reuse code, use composition, not inheritance!

Using the `final class` keyword by default will allow you to both stop inheritance (or explicitly using it when needed) and also be able to extend the behavior with a Decorator pattern, if it really make sense.


## Templating and Cross-site scripting

### The presentation layer
We are going to use a layered architecture. also known as "ports and adapter" or "Hexagonal architecture", "Onion architecture", "Clean architecture". All those names convey to the same idea of layers and how they are related to each other.



The first layer is the presentation layer: this layer encompasses everything ffrom receiving a request from a user to returning an appropriate response: is the glue between the medium used to access the application (ex: HTTP) and the application itself.


### Value object
In the tutorial, we used a **value object** to encapsulate the template directory path.

A value object is a class that represent a value; it can be a simple scalar value, like the string of the template path, or a combination of multiple values.

Advantages of this approach:

- you can declare the type for all parameters
```
// with scalar, number primitive types in this case
$canvas->drawPixels(50, 25, 31, 132,255);

// with value objects
$canvas->drawPixels(new Coordinates(50, 25), new RGB(31, 132,255));
```

- it's much harder to mix up the parameter order
- you can add validation to ensure a valid state
```
public function __construct(int $red, int $green, int $blue)
{
	foreach ([$red, $green, $blue] as $color) {
		if ($color < 0 || $color > 255) {
			throw new InvalidArgumentException(
				'Color values must be between 0 and 255'
			);
		}
	}
}
```


## Application layer
The name **application layer** comes from the domain-Driven Design community: it describes the layer that separates your controllers from business logic. Can also be called Service layer or Use Case layer.

The application layer represents the possible interactions between the outside world and the application: the queries and commands that can be executed from the frontend.

Application layer methods and classes can be reused in multiple controllers and can also be shared between different presentation layer, such as HTTP, CLI, SOAP, etc.

In controller you connect the application to the outside world; it should only receive a request and return a response; it can contain presentation login, while application and business logic doesn't belong there.

To separate responsibilities, the controller needs a dependency that can return a list of actions that can be performed.


### Single Responsibility Principle
The SRP principle states that a class should only have one responsibility.

> *A class should have only one reason to change. [Robert C. Martin]*

The hard part here is to find the right balance between having everything in a single class (which is bad) and having thousand of thousand of very small classes (which is also very bad).


### Finding a good name
Classes in the application layer are often called `Services`, but avoid to just suffix all the classes in there with `Services`.

We can follow the **CQS** principle to find better names, even if it typically refers to methods and not classes. **CQRS** is the name of the same principle applied to classes.

We can model queries and commands as objects instead.


### Interface segregation
The Interface Segregation principle is the **I** of **SOLID**. It states that no client should be forced to depend on methods that it does not use.

If we group all the possible actions related to a User in a single application layer class, for example a class with methods such as `getUser` and `getUsers`, we may have controllers that only need one of them forced to depends on both because they need the entire class injected as a dependency.

We can, instead, represent each query or command as object, as we said before: this will lead us to have classes with single responsibility, not forcing clients to break interface segregation.


## Infrastructure layer
For a large part of my career, I started thinking to a new application starting from the database, designing all the tables before writing the first line of code.

This will lead to a "not so great" code: everything becomes a CRUD operation and the domain logic is not well encapsulated or even expressed.

We should start with the code first, thinking to which behaviour we need. Then, the time when we need something to be persisted will come. It doesn't really matter if it is persisted in a database or a text file or whatever.

With the architecture we are using, all the code that talks to a Database is in a single place, so refactoring is always an option.


### Designing the table
We are going to use UUID (Universally Unique IDentifier), also known as GUID (Globally Unique IDentifier). An UUID consist of 128 random bits. Ex: `9ceb58e7-732a-4efb-af0c-0fecf72efc71`

The probability of a collision when creating a new UUID is not actual zero, but its close enough to it that you don't have to worry about it.

UUID are not readable as classic incremental integers, but they have lots of benefits; the main one is that you don't rely on database to get a new ID, so you can return `void` instead of the id; doesn't matter where the UUID is created, it could also come from frontend; this doesn't look like an advantage at first glance, but it is: it allow us to create immutable objects; with classic ID, you cannot, because you first create an object without id, then one will be generated by DB at save.

UUID also have cons: they need more space, you cannot order by them and they are not very cool if put inside of an URL. As always, is a tradeoff.

The main reason to use them, actually, is that having the possibility yo have ID available before persisting to database enable developers to write easier and more maintainable code: that's why you should always use UUID.


## Post/Redirect/Get
PRG (Post/Redirect/Get) is a web development pattern that prevents a user from submitting duplicate `POST` request by accident. PRG should be used whenever we handle a form submission.

PRG has a lots of benefits, but it makes it harder to pass messages back to the user: after the redirect, from variables cannot be accessed anymore. Best way to solve the problem is by using flash messages, stored in session until they have been displayed to the user.


## SQL Injection

### Data mapper vs Active records
The two most common object-relational mappers (ORM) patterns are **data mapper** and **active records**. Doctrine is an example of data-mapper while Eloquent is an active records one.

The active record pattern is simple and easy to learn, but it brings a few problems with it: it couples your domain objects to your database tables and violates many of OOP principles. Objects becomes tightly coupled to database tables and becomes very hard to change something very quickly.

Data mapper is a better alternative: it allow you to keep the class representing the data and the table more independent from each other. Yet, Doctrine is an ugly implementation aand can be hard to use.

[ORM Patterns: The Trade-Offs of Active Record and Data Mappers for Object-Relational Mapping - Thoughtful Code](https://www.thoughtfulcode.com/orm-active-record-vs-data-mapper/)

Instead of using them, we will directly use DataBase Abstraction Layer (DBAL) from Doctrine to create a manual mapping: this manual approach to data mapper will make us lose a bit more time now, but gain a lot more later.


### The domain layer
Domain layer is the most important layer of all: it contains the code for the business logic of our application.

One of the most common building blocks used in a domain layer is the Entity, an object that is defined by a thread of continuity; even if all its attributes change, it’s still the same object. We have to assign a unique ID to each instance of an entity to guarantee this thread of continuity.

Entity is very similar to Data Class, the main difference is that a Data class doesn’t have an id: when an attribute of a Data class change, that is not the same object anymore!

`Money` is typically a data class: 5 euros are equals to another 5 euros, but different from 10 euros. `Money` can become an entity when you write a software for a State Mint: since they produce the banknotes, they identify them by a Unique ID, so a banknote of 5 euros can be different from another one with the same value.


### CQRS
Command-Query Responsibility Separation is a very important concept; I thought it was complicated, because it’s always associated to Event Sourcing (which is ACTUALLY complicated!), but it’s not.

A command is represented by an immutable value object. It usually consist of only a constructor and a few accesso methods, but they can also be serializable and have an ID when in asynchronous systems. The name of the command is always imperative and describes the action that the user or system wants to execute.

Typically, then, you have a command handler, that expose an `handle` method where it expects an instance of the command as input and then call the domain layer to do all that it’s needed to handle that command.

You can use the command handle directly as a dependency of the controller or via a command bus, which is suggested in larger projects.

A command bus is a layer of indirection between your controllers and command handlers that helps you to implements transactions, command retry, logging, asynchronity and other useful features. Instead of passing the command directly to the handler, you pass it to the bus, then it passes the command throught some configured middlewares before coming to the handler.


### SQL injections
Always use query builder and named parameters to avoid SQL injections.

Also validate data before using it.


## Registration

### Password Hashing
Passwords should always be hashed, not encrypted. Encryption is two ways, can be decrypted. Hash is one way. Nor you or an eventual leaker should be able to read password in clear.

You also have to add a random string (salt) to the password, so that an attacker cannot just compare the hashes of common passwords against your database. It also makes harder to reverse the hash function.

In PHP you can use `password_hash()` function to hash passwords: it uses Bcrypt behind the scenes, which is a solid hash algorithm, and also add a salt by default.


### Migrations
In the tutorial we wrote our own command for migrations, but for real projects use the one coming with your frameworks or take a look at Phinx package.

[Phinx](https://phinx.org/)


## Authentication

### Preventing brute force attacks
It takes virtually no timeto crack a weak password if you don’t slow down the attacker.

A delay with sleep does not work well because the attacker can simply use a multi-threads attack. You can limit the number of open requests per IP address, but attacker could use different IPs. If you discard all the login until the sleep is over, also real users will be affected.

A better solutions are CAPTCHA after a number of failed login attempts. Captchas are not foolproof, weak ones can be solved automatically and stronger ones can still be solved by outsourcing it to a factory from poor countries (yes... this happens...). They are still useful as a brute force prevention because they make the attack much more expensive.

If you also keep track of IP address ok known users, you could create a whitelist and skip captcha for known IPs.

You can’t prevent a brute force attack against someone with unlimited resources. What you can do is make an attack on you so expensive that it doesn’t make economical sense.


## Authorization
Authentication identifies a user and authorization decides what he can do.

**Role bases access control (RBAC)** is one way to control access to your resources. Every user can have multiple roles and every role can have multiple permissions.

It’s important that you don’t check whether a user has a specific role: check the permission, not the role.

<aside> 💡 Sometimes, you need a more complex authorization model. Consider an attribute based access control (ABAC) for those cases. ABAC is more flexible, but harder to implement.

</aside>


## Further learning
In this book, the tutorial followed a DDD/CQRS approach. This is just part of it, but the rabbit hole goes much deeper.


### Command bus
The tutorial introduced the concepts of commands and command handlers. A command bus is helpful to easily wrap your commands with additional functionality, for example:

- logging
- database transactions
- error handling
- queueing (to make commands asynchronous)
- Authorization
A good way to understand more about command bus is a talk from Ross Tuck on Youtube:

[DrupalCon Amsterdam 2014: Models & Service Layers; Hemoglobin & Hobgoblins](https://www.youtube.com/watch?v=ajhqScWECMo)

A good package for command bus is `league/tactician`.

[https://github.com/thephpleague/tactician](https://github.com/thephpleague/tactician)


### Unit testing
PHPUnit is the standard defacto for PHP testing.

For an introduction to unit tests, the following video:

["The Clean Code Talks -- Unit Testing"](https://www.youtube.com/watch?v=wEhu57pih5w)

After learning how to use unit tests, learn when to use them:

[How Much Testing is Too Much?](https://verraes.net/2014/12/how-much-testing-is-too-much/)


### Behaviour Driven development
Unit testing is about testing the application from developer point of view, while BDD is about testing it from the product owner point of view.

Instead of testing technical details, test business requirements.

BDD makes sure you write the right thing.

You can use a framework like Behat:

[Behat - a php framework for autotesting your business expectations.](https://docs.behat.org/en/latest/)


### Domain Driven design
Main resources about this topics:

- Domain Driven Design Distilled, by Vaughn Vernon (the green book)
- Implementing Domain Driven Design, by Vaughn Vernon (the red book)
- Domain Driven Design, by Eric Evans (the blue book)
A good path is to start from the green book to learn high level concepts; it’s short and easy to read. Then go through the red book using it as a reference for the first experiments on code. Then, you can go with the blue book to enter in details, if you like.


### Event sourcing
With Event Sourcing, you don’t just store the current state in the database. You keep the whole change history there. The concept is similar to accounting: you never change or erase a record, you always add a new record with the change. To know the current total, add up the history.

Of course, this is complicated and not something that should be used for everything.

[https://www.youtube.com/watch?v=JHGkaShoyNs](https://www.youtube.com/watch?v=JHGkaShoyNs)

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: programming-elixir-1-6 ========
TITLE: Programming Elixir 1.6
AUTHOR: ['Dave Thomas']
TOPICS: ['elixir', 'software-development']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/programming-elixir-1-6/content.md
---BODY---

# Programming Elixir 1.6

## Summary

**Programming should be about transforming data.**

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

[https://amzn.to/3gQl0b4](https://amzn.to/3gQl0b4)


# Take the red pill
**Programming should be about transforming data.**

If you come from object oriented world, you are used to think in terms of classes and their instances, with their behavior and a state. But that's not the real world.

In the real world, we don't want to model abstract hierarchies nor maintaining a state: we want to get the things done.

A good example is the Unix command-line, which has a set of small, focused command-line tools that can be combined arbitrary: each tool takes an input, transform it and writes the output.

It's very flexible, highly reliable and can work in parallel; let's see an example:

```
grep Elixir *.pml | wc -l
```

The word-count program (*wc*) runs at the same time as the grep command: it uses the *grep*'s output as it is produces, so there is virtually no delay.

**Functions are data transformers**

Elixir let us solve the problem in the same way the Unix shell does, with functions in replace of command-line utilities. The smaller, more focused are the functions we write, the more flexibility we will obtain; and they can easily run in parallel.

This idea of transformation lies at the heart of functional programming: a function transform its inputs into its output. But this power comes at a price: you have to unlearn a lor of what you know about programming and feel like a total noob. But, it can be funny.

You'll start thinking about problems in a different way and you'll find yourself writing code that does amazing things with very little effort.

**Think different(ly)**

This book is about thinking differently:

- object orientation is not the only way to design code
- functional programming need not to be complex or mathematical
- the bases of programming are not assignments, if statements or loops
- concurrency does not need locks, semaphores, monitors, and the like
- processes are not necessarily expensive resources
- meta-programming is not just something tacked onto a language
- even if it's work, programming should be fun

# Conventional Programming

## Pattern Matching

### Assignment: it's not what you think
**In Elixir, the equal sign** (=) it's not an assignment: **it's** like **an** **assertion**. It succeeds if Elixir can find a way of making the left side equal to the right side. In Elixir, the equal symbol is called **match operator**.

In the first line of the following example, the left side is a variable and the right side is an integer literal, so Elixir can make the match true by binding the variable ***a*** to the value ***1***.

```
iex> a = 1
1
iex> 1 = a
1
iex> 2 = a
** (MatchError) no match of right hand side value: 1
```

You could argue *it's just an assignment*. Let's see.

Look at the second line, *1 = a*: it's another match, and it passes. The variable ***a*** already has the value 1, thanks to the first line, so what's on the left is the same as what's on the right and the match succeed.

The third line, instead, raise an error. Maybe you expected it to assign the value 2 to the variable ***a***, but it's not. Elixir will only try to change the left side of the command, when it has a variable; when the variable it's on the right, it's replaced with its current value. So that command is the same as writing ***2 = 1***.


### More complex matches
```
iex> list = [1, 2, 3]
[1, 2, 3]
iex> [a, b, c] = list
[1, 2, 3]
iex> a
1
iex> b
2
iex> **c
3**
```

Elixir looks for a way to make the value on the left the same as the value on the right; in this case, the variable ***list*** is assigned to the list of numbers on the first line. Then, on the second line, we have a list with 3 variables on the left matched with the ***list*** variable previously assigned; since we have a list of 3 variables matched with a variable containing a list of 3 elements, the match works and each variable on the left is assigned to a value of the list on the right.

Elixir calls this process ***pattern matching.*** A pattern (the left side) is matched if the values (the right side) have the same structure and if each term in the pattern can be matched to the corresponding term in the values. A literal value in the pattern matches that exact value only, while a variable in the pattern matches because it takes the corresponding value.

Some examples:

```
iex> list = [1, 2, [3, 4, 5]]
[1, 2, [3, 4, 5]]
iex> [a, b, c] = list
[1, 2, [3, 4, 5]]
iex> a
1
iex> b
2
iex> c
**[3, 4, 5]**
iex> ##########
nil
iex> list = [1, 2, 3]
[1, 2, 3]
iex> [a, 1, b] = list
** (MatchError) no match of right hand side value: [1, 2, 3]
iex> [a, 2, b] = list
[1, 2, 3]
iex> a
1
iex> b
3
```


### Ignoring a value with _ (underscore)
When we don't need to capture a value during a match, we can use the **special variable _** (an underscore) in the pattern. This acts as a variable but **immediately discards any value given to it** in a pattern match. It's like a wildcard saying "*I accept any value here*".

```
iex> list = [1, 2, [3, 4, 5]]
[1, 2, [3, 4, 5]]
iex> [a, _, b] = list
[1, 2, [3, 4, 5]]
iex> a
1
iex> b
**[3, 4, 5]**
```


### Variables bind once (per Match)
Once a variable has been bound to a value in the matching process, it keeps that value for the remaining of the match.

```
iex> [a, a] = [2, 2]
[2, 2]
iex> [a, a] = [4, 5]
** (MatchError) no match of right hand side value: [4, 5]
```

The first expression works because the matching process first bound the variable ***a*** to the first element of the list, which value is 2; then, found the ***a*** variable again the pattern and the 2 again in the value, so it still matches.

The second expression, instead, doesn't match because at first it matches the ***a*** variable to the value 4, then the ***a*** variable already has a value bounded to it (the 4, of course) so it cannot match the value 5.

However you can bound the variable to another value in the following pattern matching command.

```
iex> [a, a] = [2, 2]
[2, 2]
iex> [a, a] = [3, 3]
[3, 3]
```

If you want, you can also force Elixir to use existing value of a variable in the pattern; to do so, you need to use the **^** (*a caret*).

```
iex> [a, a] = [2, 2]
[2, 2]
iex> [^a, a] = [3, 3]
** (MatchError) no match of right hand side value: [3, 3]
iex> [^a, a] = [2, 3]
[2, 3] #here the first is matched thanks to the caret, the second by bounding the value to the variable
```


### Another way of looking at the equal sign
Elixir's pattern matching is similar to Erlang's, the main difference is Erlang does not allow a match to reassign a variable to a new value if that variable was already assigned in a previous pattern.

Joe Armstrong, the creator of Erlang, compares the equal sign in Erlang to the equal sign in Algebra. When you write the equation ***x = a + 1***, you are not assigning the value of ***a+1*** to ***x***, you are simply asserting that ***x*** and ***a+1*** has the same value. If you know the value of ***x*** you can work out the value of ***a*** and viceversa.

Pattern matching is a core part of Elixir, we can also use it in conditions, function calls and function invocation.


## Immutability
Immutability is an important concept, expecially if you hear functional programming developer: data cannot be altered once created. Elixir enforces immutable data, of course, but before diving into it, let's ask ourselves: why it's so important?


### You already have (some) immutable data
Think about a non-functional programming language with a code similar to the following:

```
count = 99
do_something_with(count)
print(count)
```

You definitely expect it to print 99 you'd be very surprised if it didn't.

Imagine that it doesn't: ***do_something_with*** is probably changing the value of ***count*** variable, maybe even in a parallel execution. This makes really hard to guarantee your code produce the correct results.

Example with array is even more clear:

```
array = [1, 2, 3]
do_something_with(array)
print(array)
```

You still hope that this code will print [1, 2, 3], but with array it's easier to find languages that handle it as a reference, so it's actually more likely that ***do_something_with*** might change the value of ***array***.

Think this in a complicated application, with multiple process running in parallel, all of them able to change the ***array*** value. You will never be able to guess it's state.


### Immutable data is known data
In Elixir, all values are immutable.

Once a variable reference a value, for example a list ***[1, 2, 3]***, you know it will always reference that list (*until you rebound it to a new value*).

If you need to add 100 to each value of that list, Elixir will do it by producing a copy of the original, containing the new values: the original remains unchanged.

This fits in nicely with the idea that programming is about transforming data: we transform the first list into the second.


### Performance implications of immutability
At first sight, this approach to programming looks inefficient; is it really so?

**Copying Data**

Copying data looks definitely inefficient, but it's actually the reverse. Elixir know that existing data is immutable, so it can reuse it, in part or as a whole, when building new structures.

```
iex> list1 = [3, 2, 1]
[3, 2, 1]
iex> list2 = [4 | list1]
[4, 3, 2, 1]
```

In the example, most languages would build ***list2*** by creating a new list with all the values, also the ones copied from the first list. But since Elixir knows that ***list1*** will never change, it constructs ***list2*** with a head of 4 and a tail of ***list1***.

**Garbage Collection**

Another performance issue could be that quite often you end up leaving old values unused because every time you create new ones. This leaves lot of things using memory and garbage collection need to reclaim them.

Garbage collection is very common in modern languages but it's also a bit of a fear for developers because it can impact performances quite badly.

In Elixir this problem is drastically reduces thanks to its processes: Elixir code runs in multiple processes, lots and lots of them, each with its own heap. Data of the application is splitted in that processes so each heap is small. As a result, garbage collection runs faster and it's not needed if the process terminates.


### Coding with immutable data
Once you accept immutability, coding with immutable data is surprisingly easy. You just have to remember that any function that transform data will return a new copy. For example, we don't capitalize a string; instead, we return a capitalized copy of a string.

```
iex> name = "elixir"
"elixir"
iex> cap_name = String.capitalize name
"Elixir"
iex> name
"elixir"
```

In a functional language, we always transform data: we never modify it in place.

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: refactoring-improving-the-design-of-existing-code ========
TITLE: Refactoring: Improving the Design of Existing Code
AUTHOR: ['Martin Fowler']
TOPICS: ['agile-software-development', 'refactoring', 'technical-excellence']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/refactoring-improving-the-design-of-existing-code/content.md
---BODY---

# Refactoring: Improving the Design of Existing Code

## Summary

*(sintesi da scrivere)*

## Key Concepts

*(nessun contenuto)*

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: slack-getting-past-burnout-busywork-and-the-myth ========
TITLE: Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency
AUTHOR: ['Tom DeMarco']
TOPICS: ['agile-software-development', 'lean', 'tech-lead']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/slack-getting-past-burnout-busywork-and-the-myth/content.md
---BODY---

# Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency

## Summary

the more efficient you get, the hard it is to change

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

## Prelude
> Slack is a prescription for building a capacity to change into the modern enterprise.

- the more efficient you get, the hard it is to change
- Better to be slightly less efficient but enormously more effective
- Slack is the missing ingredient required for change
Why now?

- we are in an age of acceleration
- The formula for business success years ago does not work today
- There isn’t time to plan, only to do
- There is no time for analysis, invention, training, strategic thinking, contemplation, or lunch
- We can do what we do faster and cheaper, but there is a downside
Need of change

- suppose we need to change
- Change is always complicated and challenging
- For a super accelerated corporation, change is almost impossible
- The improvements that made it so fast are also the same thing that make it impossible to change
- An organization that can accelerate but not change is like a car that can speed up but not steer: in the short term, it makes lots of progress in the direction is going - in the long term, it will go out of the street
Benefits of slack

- increased organizational agility
- Better retention of key personnel
- An improved ability to invest in the future
- A capacity for sensible risk taking instead of risk avoidance

# Part 1: Slack
This famous puzzle game is a great tool to prove what slack means and the impact it has in terms of ability to change.

![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F78b1967e-747b-4db3-9861-d1eadeaae5e4.jpg?alt=media&token=c2f90d74-283a-4efb-8ec8-01e744a8d792)
In the following image, efficiently has increased by 11.1% since the waste space is gone, and all the square are in 100% use. Efficiency is maximized but something else is lost: ability to change. The layout might be optimal as is, but if it’s not or it becomes no more optimal over time, it cannot be changed anymore.

![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2Fb39935a4-4063-4c08-8ea4-14bdf5d80563.jpg?alt=media&token=f1ff9889-b37d-4f63-acd8-a03206e63dea)
The open space was the so called slack: the degree of freedom required to effect change.

Slack is the natural enemy of efficiency, and efficiency is the natural enemy of slack.

There are things you can do to maximize the efficiency of your organization that interfere with its ability to change and reinvent itself later.


### Madmen in the halls
Nineties legacy for business is very dangerous: The idea that organizations are effective only to the extent that all their workers are totally and eternally busy. Non-overworked people are often seen with suspicion. In worst cases, they might even be the first to be laid off.

We did this for the fear that the third world could come and conquer our prosperity (US and EUR).

We removed all middle managers to favor a flattened structure - are we sure it was a good idea?

Middle managers are (Should be) responsible for the activity of reinvention. It’s the middle of organizations where reinvention takes place. This is where the dynamic of today’s organizational functioning is examined, taken apart, analyzed, resynthesized, and assembled back into new organizational models that allow us to move forward.

We optimized the present state but deleted our capacity to change, putting our future at risk.

**Does it matter?**

Companies has always been prone to favor today instead of tomorrow.

The problem is that in this age even companies that aren’t yet “optimized” struggle in favoring change. The reason is that change and reinvention requires a commodity that is missing in our time like it has never been before: slack.

Slack is the time where reinvention happens, a time where you are not 100% busy in operational work - on the contrary, slack is a time where you are 0% busy.

Slack at all level is necessary to make the organization work effectively and grow: is the lubricant of change.

👑 Good companies excel in the use of slack

🙅 Bad companies are obsessed by removing slack


### Busyness
Imagine you have to make a movie about a very successful company: how would you make sure that the watchers sees it as successful?

The primary temptation would be to every people as super busy.

This is a misconception.

Very successful companies usually never appear as very busy. the energy is visible but without the typical fear of always being late.

**The busy worker**

Extreme busyness is injurious to the real work of the organization. Take, for example, a secretary working for a manager: they are of great help for managers, and to others in the organization with their work and support.

Imagine you measure her time and discover she is busy only 43% of her time: the rest of the time she is not “free”, she is **available**. She’s available to do stuff that you or your people find you need to have done. And she is able to always crack whatever works comes up and help because of her availability.

If you make the mistake to think you can reduce their work hours to only 43% to reduce costs, you will discover that their responsiveness is now enormously reduced because they are too busy and never available.

Not free: available.

**How we work together**

Modern organizations are huge networks of interconnected work where the people are the nodes and the connections are pieces of work we pass to each other.

To keep everyone busy we add some buffering at every node, so that work can now stack at the inbox of each people. Now everyone is busy: the immediate side effect is that The time needed for work to pass through necessarily increased.

From work point of view, the time that a piece of work takes to move entirely through the networks has increased because of the waiting time at each node.

<aside> 💡 NDR: similarities to Phoenix project, Devops, lean, 3 ways.

</aside>

If workers were available when the work arrive, there would have been no waiting time and the total transit time would be decreased.

But availability implies some inefficiency that we removed with the inboxes in our mission to maximize efficiency.

Removing all slack from workers has a cost in responsiveness and directly slow down the organization: you are making the organization more efficient but not better.

When you reintroduce slack, you make the organization a little less efficient but a lot better.


### The myth of fungible resource
Typical restructuring effort focus on efficiency.

Doing this is not only full of downsides but also hard because people constantly try to be more efficient so when you try to do so, or ask a consultant to try to do so, it’s hard since they already tried all they could.

**The oddest shortcut of all**

Usually we think that apparent progress is as good as actual progress. Dividing the secretary between two managers is apparent progress, because her increased efficiency is offset by her reduced responsiveness.

The biggest error is to assume that individual workers are entirely fungible:

> Fungible: being freely exchangeable or replaceable, in whole or in part, for another item of the same nature or kind

Money is fungible, people aren’t.

Sadly, when you are obsessed with efficiency it’s tempting to see people as fungible: you can then move people around or split them between different work to make apparent progress in improving efficiency.

**Matrix management**

Matrix management is an organizational model that embrace the idea of people being fungible.

A worker has two managers, one project related, deciding what he/she has to do on a daily basis (eg: project manager) , and one role related, that leads all the people with that role and decides for their promotions and raises and training and development in general.

How can the second knows if the person deserve/need something? I’m he can’t unless he talk with the first manager. So why isn’t the first one deciding?

This becomes even worse if we treat people as fungible because now we split a person in 3 projects so now he has 4 managers.

**Task switching penalties**

People are not entirely fungible and the reason of that is the cost of task switch: the waste associated with time sharing between two tasks is the sum of time lost to the switch mechanics plus rework required upon restart plus immersion time plus frustration cost - and you pay this penalty each time you switch.

- Switch mechanics: to switch from a task to another you have to put the tools you were using away and take the one you need now (ndr: in programming it can even be “digital” tools).
- Rework at restart: not all type of work allow to achieve a stable point to stop and then restart - in most cases, if you switch, you will have to make some rework when you will restart to remember where you were at.
- Immersion time: some type of work required a period of immersion time before starting the real work; for example writing, research, analysis, invention, programming - the immersion time is required and therefore most of people is reluctant to start such practices when there is not enough time ahead. Sometimes, an emotional inertia to overcome is also in place; for example for a nurse pausing during a difficult procedure or a salesperson building confidence before a call. Immersion time is totally lost when switching and has to be repeated.
- Frustration cost: when highly immersive tasks are interrupted, there may even be some frustration related to frequent interruptions. Frustration requires energy and time to be overcome.
**Effect on Teams**

There is actually another element to be considered in task switching penalty: the team.

When you have a team that share a common goal, it tends to achieve a capacity that is bigger than the sum of its part, because team dynamics with such a shared goal makes every people energized and focused.

This is lost with partitioned team members because they tend to focus on their price of work and do not bind with the team.

**Task switching penalty quantified**

Two ways to quantify the switch penalty with a number:

1. Repeated assertion: we repeatedly assert that this penalty is around 15% of time for each switch, no real data or proof; the idea of this approach is that, since most people think that this cost in 0, we give them a reasonable number just to make people explicitly think about the fact that it can’t be zero, and it can’t be low
2. Research: a research on programmers measuring all their switch resulted in an average of 0.4 switches per hour, with a minimum of 20 minutes of waste for each switch. This is more than one hour every day. (12.5%)
**What the penalty implies**

A corporation restructuring usually means they get rid of people and share their work among those remaining. This drastically increase fragmentation of work, and such strategy can only make sense when the task switching penalty is smaller than potential savings. In practices it means the penalty should be zero, but it never is.

After the restructuring, a hidden task switching penalty is not using up the resources of an over fragmented organization, and the saving have been illusory.

Fragmented knowledge workers may look busy, but a lot of their busyness is just trashing, switching continually from one task to another.

To make things worse, the decision on who should go and who should stay is usually based on prover performance - but work performance is not an abstraction. You can say that Ted is a high performance worker in general, only that he has proved himself good at doing a specific thing. The fragmentation will cause Ted to work less on that thing and more on something else, something he probably isn’t so good at. Even without the task switching penalty, Ted’s performance are decreased now.

Knowledge workers aren’t fungible: treating them as if they were will increase busyness but make it harder for them to get useful work done.


### When “hurry up” becomes “slow down”
Overimproved organizations: organizations where the people is pathologically busy, frantic, and at least a little bit fearful.

The characteristic mantra in over improved organizations is “hurry up!!”. This cause issues.

Not only this cause a work model where everyone is always busy, but since the work is never static, actually some people will end up with more work than he can handle in the queue, while others will be more free - and the one that are more free will feel guilty for that, and will be afraid of being considered bad, so they will slow down a bit to appear just always busy.


### Managing Eve
Eve’s response to the rule was “no way”: she was not about to allow her growth as a person to be limited.

How to manage a “Eve” on work?

You can’t tell Eve to do something because “you are the boss” - you can’t impose goals that doesn’t make sense to her. And you can’t structure her work in a way that gives her no opportunity to grow.

Knowledge workers are usually as Eve: they value challenge and personal growth equals to salary.

The error managers do is trying to manage knowledge workers at the same way as blue collars or factory workers.

**The non profit model**

When you manage a non profit organization, and most of workers are volunteers, there is almost no way to control their work. They see control as their payment for work.

This doesn’t mean you can’t control the quality of their work, but you don’t have to seems like controlling.

The same actually happens with knowledge workers.

**Control of information**

In most organizations, managers only spend 20% of their time with their people, and usually communication only goes through the lines of hierarchy. This is a disaster because those lines are path of authority but they are not large enough to allow information to pass properly.

In healthy companies, communication flows in the white spaces between those lines.

When communication only happens through hierarchy lines, it’s a sign of managers trying to keep all the control.

**Control and personal growth**

For an “Eve”, control is the way she can grow. You need to give her some opportunities to grow and make mistakes.

Control need to be shared so that managers can obtain what they want while the people feels to be free to grow.

A model for control sharing: make it proportional to salary; if you as a manager make 25% more than people you manage, then you get 125 “control points” and the team gets 100.

The trick is how to assure your own requirements of the organization with just those 125 control points? That’s not trivial - but hey, who ever said management was easy?

**Slack in another sense**

The paradox is that to keep control, you have to give it up. You have to use your authority in a way that no one notice its being used.

This is control slack.


### Business instead of busyness
What do you obtain when you implement time slack and control slack?

Primary benefit is: Better responsiveness.

Secondary benefits (on the immediate, but primary on the mid/long term):

- flexibility (capacity for reorganization)
- Better retention
- Capacity to invest
**An organization in continuing flux**

Ability to change is essential, but like many good things, it cost money.

Change is an investment: you invest in change, paying for its design and implementation - a work that should be done by the people who are to be changed. Change has to be ongoing all the time, everywhere from everyone. This means everyone needs to have some slack to devote to change.

Slack is the way you invest in change: operational capacity sacrificed in the interest of long term health.

**Human capital**

Healthy knowledge companies keep their people - not only focusing on keeping stars happy, but everyone.

We said knowledge workers aren’t fungible: this means you can split them, but neither you can replace them easily.

Part of the reason for this is that every worker has domain knowledge that they bring with themselves when they leave - and a new hire needs to build his domain knowledge from zero when joining.

The bigger the domain knowledge, the less fungible a person is.

**How much is Human capital worth?**

When you lose a person and hire a new one, you lose money because of domain knowledge loss that needs to be rebuild.

**Stanching the Flow**

Reasons why people leave are various, but a common one is a sense of feeling used (in capacity) - this means that the more successful a company is in maximizing capacity, the more it exposes itself to turnover.

On the other hand, people usually DO NOT LEAVE when they have been given opportunities to grow - and organization’s agility thanks to Slack is a great factor in supplying such opportunities to people.

**The organization capacity to invest in itself**

When you invest in extending your presence in a market that’s already partly yours, you are investing in yourself.

When you buy yourself a way in a new market, you are investing in someone else: it makes sense when your market is saturated, but you should ensure it is before.

Companies often invest in someone else because they don’t have ability to invent and innovate their current market (bankruptcy of inventiveness) - and a big requirement to enable this is slack.

**A penny saved…**

A penny saved IS NOT a penny earned. At least not all of them.

Cutting out the company yacht can be a penny saved, but cutting out from R&D is definitely not.

Slack is a kind of investment, same as R&D.


# Part 2: Lost, but making good times
Managers around the world are asked to optimize both time and cost, even if those two are mutually dependent to each other and therefore this is impossible.

This cause a lot of stress: we all know stress has bad effects on individuals, but what about the effect on organizations?

When stress is the problem, slack is the solution.


### The cost of pressure
The hurry up organization is always in constant pressure. You need, instead, incentives that can drive a different behavior from people to inspire invention.

**A model of pressure and its effect**

We usually think that putting pressure to a team will make them be faster, like in the following graph - but this is just wrong, dead wrong.

![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F07bca7c3-47c5-4641-a9c3-3b1ce02a6c90.jpg?alt=media&token=bb5b671f-c201-431d-8557-96d621018eba)
**Lister’s Law**

> People under time pressure don’t think faster.

Since humans can’t change the rate of mental discrimination per second, the effect of pressure on knowledge workers is very limited.

All they can do is:

- eliminate wasted time - but they do it everyday so this is very very limited
- Defer tasks not on critical path - but if the company works well enough they do this everyday too
- Stay late - which is not sustainable for knowledge workers and the effect will be disastrous also for private life implications
**A better model**

![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2Fbad08bf8-eeaa-4556-a64d-caeab2a92b73.jpg?alt=media&token=f2ba61ca-e029-4bdd-9074-9c89ab995ebe)
In reality, Pressure have a very limited capacity to reduce delivery time for knowledge workers.

**So what does it all means?**

Pressure is not entirely irrelevant for performances, but it’s not the end all that most of us think. The best managers use pressure only rarely and never over extended periods.


### Aggressive schedules
We usually refer to aggressive / highly aggressive schedule for projects where the schedules looks impossible. This comes from the overcommitting ethic: project managers learn to think that an impossible schedule can do no harm to the work - and they intentionally treat it as non realistic because they don’t expect it to be realistic, they don’t think it’s necessary.

When a schedule is not met we should account also the one that promised it, not only low level workers.


### Overtime
There is a reason why most companies in the world have standardized around a 7/8 hours day work, upon 4/5 days - so thinking that continuous overtime make sense is just dumb - and if you think it is, why don’t you put it as official rule? 😉


### Sprinting
While extended overtime never make sense, a different call can be made for a short sprint - for example a workathon for the weekend to finalize a Monday morning delivery.

If the need is proven, and the target is realistic - such sprint can make a lot of sense for the business and also energize the team for the next months.

Occasional sprint makes sense and it’s powerful but it’s hard to achieve successfully: it must be really occasional, and scope realistic because if the team fails the morale will drop.


### Extended overtime
Sprinting at the end of a marathon makes a lot of sense, sprinting for the whole marathon is a suicide.

Overtime in knowledge work usually means around 10/12 hours per day during the week, plus several hours on the weekend - with around 60 hours per week.

This scheme is just not sustainable: if you are still able to sleep enough over night, it means your personal life is the one sacrificed for that - and you will find yourself paying the price, sooner or later.

People under this scheme will start working bad because they are tired, they feel used, and they will oook for a new job.

But what is the ROI of this? Is it still positive for the company anyway? Oh, if management was so simple…


### An important productivity reduction technique
Extended overtime reduce productivity by reducing the effectiveness of each hour worked.

If you try to measure productivity by hours instead of days, you discover that extra hours are useless - and the measure still works on days. This means a 12 hours day doesn’t product additional noticeable outcome than a 8 hours day. Overtime is a wash.

4 reasons why this happens:

1. Reduced quality
2. Personnel burnout
3. Increased turnover
4. Ineffective use of time during normal hours

### Effect on quality
Knowledge work is by definition think intensive: when the thinking matters, overtime doesn’t work.

Most knowledge workers know this, but still do overtime: we need to take our responsibility about this. Overtime is not only something companies do to workers, but also something workers do to theirselves.

Sometimes there is a sort of addiction to complete a task or being the hero. This doesn’t change the fact that overtime doesn’t work.


### Zombies
Overindulgence never work - and in work environments leads to burnout.

Burned out workers are just zombies - they follow the pace of work but are not able to contribute anymore. And then often leave to save theirselves.


### Turnover
Most companies don’t capitalize their investment in people, then they fail In understanding the cost of losing human capital due to turnover.

Turnover usually become the 2/3rd largest cost category

Only by continuing to ignore this cost you can illude yourself that overtime have no effect in turnover.


### Wasting time
When people do a lot of overtime, a tendency of wasting hours exists. For example, being always stuck in meetings seems reasonable for some reason.

Oversize meeting culture is usually accepted only when overtime is in place, same as interruptions - this way most people cannot achieve work during normal hours so overtime is even increased.


### Managerial overtime
Managers also usually do overtime. And if you are not busy you have to look busy - I mean, all your people is there working, you have to.

We should be impressed by managers never skipping lunch or doing extra work - not the reverse.

> Overworked managers are doing things they shouldn’t be doing.

When managers are over working, they are not managing.


## A little sleight of hand in the accounting department
Knowledge workers are usually not paid for extra hours - and there fire they need to track their work over the 40 hours by contract even if they did overtime. They are ensure that management knows about over time and will recognize that.


### Productivity and apparent productivity
This implies that whatever work is accomplished, has to be tracked in the 40 hours - not the real hours worked.

And this means that managers will eventually be evaluated by the result achieved by their people - which is tracked over the standard hours, excluding extra hours.

This means to a bad dynamic: reported productivity can (apparently) be inflated by additional extra hours. This is apparent because people will be less productive during all the extra hours (and not only these) - this means the approach to productivity enhancement is actually leading to a reduction.


### Particularly pathological variant
In real world this gets worse because there are no real metrics for knowledge worker’s productivity. This leads to think that time present is a good metric - which is false.


### Yes, but in the real world…
Even if we might prove additional productivity with overtime, it can only be on short term - on kid and long term, the burnout that it cause will emerge and productivity will be lost also in standard hours.


## Power sweeper
Technology lately has removed some work but now managers need to drive that work such as making copies, writing docs, etc.

clerks workers has been removed and this has filled up time of others and give them a constant overhead.

Example1: team of 5 knowledge workers, 10 lines of interaction between each of them.

Example 2: team of 4 workers plus a clerks - 6 main interaction lines for the 4 workers + an additional 4 thinner lines to communicate with the clerk worker.

Example 2 is then more productive.


### The second law of bad management
First law:

> If something is not working, do it more

Usually managers blame something for the failure and try to push more even if it’s not working.

Second law:

> Put yourself in as your own utility infielder.

This especially happen in over optimized companies where managers usually have lost some people under them so they now have some work to be done with no owner available and they decide to do it by theirself.

Why is this a problem?

Ti do that work, managers have to cut away some time from management. This is a problem:good management matters. Good management is the lifeblood of the healthy organization. Getting rid of it to save cost is like losing weight by giving blood

Why we do it anyway?

- we forget how essential management is
- Safety: in an over stressed organization, it’s unsafe to manage
- Need for challenge
Why management is hard?

- management is hard because the skill it requires are difficult to master

## Culture of fear
Culture of Fear organizations characteristics:

- not safe to say certain Things
- Goals are impossible
- Power is allowed to win over common sense
- Anyone can be abused
- Fired people is on average better that those who stay
- Surviving managers are angry

### The paradox of over staffing
it’s easy to think that all stressed organizations are understaffed: it’s not true.

Sometimes over staffing is the problem: overstaffing a project too soon cause more problems that under staffing.


## Litigation
Healthy companies know they have to allow people for failure without blame - culture of fear companies does not. They punish failure.


## Process obsession
Standardization of process is a common obsession in todays organizations, but it’s a bad idea in knowledge work.

Standards are great for some situations such as products characteristics (example: jack connection for audio, or usb c for charging cables) but doesn’t fit knowledge work well.

Usually processes are enforced through automations - but the weird thing with automations is that you can only automate the easy part, and you lose some ability to change it. The problem rise when the process automated is decided by a manager or some guru workers, and not by the very people doing the job.

Good managers empower people.

Empowerment means putting process ownership into the hands of people doing the work. It means losing a bit of control from manager perspective to improve the outcomes of the work.

When empowerment is avoided is usually because of fear.


## Quality
Everyone claims about quality but quality without slack is just impossibile.

**the best product ever made is…**

If this prize existed, the winner would be a software that has quality in the problem it solves and they way it solves it; being bug free has no relation with quality from user perspective.

**Corporate quality program**

Quality program usually focus mostly on bugs and defects, they should focus on something different instead - for example about product uniqueness, usefulness, market impact, etc.

the problem is that a QA program focusing only on defects can cause a slow down in being responsive to market, make it harder to adopt a new tech, etc.

the organization as a whole loses here.

**quality and quantity**

More quality requires less quantity. Make less and choose more carefully what to do.

This advice works but it’s hard to swallow, because quantity seems to be powerful so losing in quantity makes you feel like you lost in the short term.

**Quality reduction program**

Since quality takes time and reduce quantity, it makes you less efficient - which is a hard hit for the super efficient organization.


## Efficient and/or effective
Efficiency ≠ effectiveness

Efficient = do something with minimum waste

Effective = do the right something

Achieving both is hard because tactical choices are easy to take because they are isolated to the department, but strategic choices are hard.

And someone suggesting we might be in the wrong direction is usually taken as bad because “it’s obvious that it’s the right direction”.

The problem is that directing an org is hard but seeming to direct it is easy: spot the current direction (who cares if correct) and push it.

Highly optimized companies lose the ability to change so this becomes impossible - and so, even if effectiveness is not replaceable (better to lose efficiency and go slower but in the right direction, than the reverse) companies constantly chose efficiency.


### Risks adds further complication
Taking risks becomes impossibile because you will lose efficiency. And it’s fault of manage By objectives


## Management by objectives

### MBO primer
In this approach, Performance is measured with a quantitative measure called objective. A manager is declared to succeed if the objective is met.

The premise is that progress toward the various components assures that company also progress in its overall goals.


### Mired in stasis
The message of an MBO is to “do everything we did last year, but do more of X”, because management determined that more of X will make the company succeed.

But this assumes nothing else changes - there is an ingenious belief that success of the overall org can be achieved by simply summing lower level objectives, but this is mostly impossible unless everything else is in steady state.

But stasis can hardly be a recipe for success in today’s world. For example the entire idea of “production” is going away because it requires a steady state. Today a status quo lasts very little. and MBO depends on status quo. It makes you do only tactical adjustments that fit the limitation of the current strategy. A recipe for extinction.


### Dysfunction
The second error of the MBO approach is trying to reduce the net contribution of a department into a single indicator.

MBO’s objectives are always simplistic approximations and that is too simple to express a department outcome.

This cause a dysfunction that cause the team X objective grow while the overall numbers goes down.

MBO is an old idea that doesn’t work anymore.


# Part 3: Change and Growth
You can’t grow if you can’t change at all.

Companies usually realize that they can’t change but still expect to grow, without realizing that the two are related.

But how to make an organization able to change and therefore grow?


### Vision
The most common sign of absent vision was the sense of not knowing “who we are”.

While that can be hard, it’s usually easier to know “who we aren’t”. When even that is missing, the company clearly lacks vision.

Vision implies a visionary, one person that knows in its bones what’s “us” and what isn’t.


### Vision and change
Constructive change can only happen if there is vision. Without a vision a company can react but not pro-act, because successful change can only happens when it’s clear what may never change and what the organization stands for. This is the org culture!

The culture is what cannot, will not and must not change.

If nothing is declared unchangeable, than the company will resist all changes. When there I no defined vision, the company can only define itself by its stasis.


### The visionary statement
A visionary statement is a strong assertion of who we are. A successful visionary statement typically has some characteristics:

- An element of present truth
- An element of proposed future truth
- It walks perfectly between present and proposed future (and the proposed future looks wonderful but not impossibile)
People wand to sign on and be enrolled!

People want to be led, which is what actually enable leadership.


## Leadership and “leadership”
Good leadership conveys vision, engender confidence, and encourages striving towards common goals. “Leadership” is only big claims but nothing effective ever happen in practice.

**What is leadership anyway?**

Leadership is the ability to enroll other people in your agenda. Meaningful acts of leadership usually cause people to accept short term pain (extra cost or effort and/or delayed gratification) in order to increase long term benefits.

Some elements of good leadership:

- clear articulation of a direction
- Frank admission of the short term plan
- Follow up
- Follow up
- Follow up
“Leadership” usually only show the first one.

**The question of power**

Lack of power is never a necessary condition of leadership. There is never enough power.

In fact, leadership is defined by success in the absence of sufficient power.

**Lines of Hierarchy and Lines of Leadership**

Real leadership happens when influence happen outside of the lines of hierarchy.


### Dilbert reconsidered
Once you accept that leadership don’t need to happen necessarily along the hierarchy lines, then your approach as a subordinate will change forever. Everyone has the potential to lead, and that implies having some obligation to use it.

**Potshot at an American hero**

If you keep your head down, accepting non sense direction and letting bureaucracy dominate at the expense of the real goals, you are part of the problem.

It’s easy and fair to blame lousy management but it’s not enough - it’s also necessary to blame the people that allow themselves to be managed badly.

**Who then shall lead? What about you?**

When you think that you wish a boss understand a certain thing that would improve, the you are the one that can actually make an act of leadership and make it happen.

**Followership**

A culture of followership is not a culture of leadership. in best companies, people follow sometimes but they are innate leaders.


### Fear and safety
**Sine qua non of proactive change**

Proactive change can only happen when there is safety. You can’t make proactive change happen, the best you can do is to make it happen.

Change always implies abandonment of an old way of doing things.

People is usually feared by this kind of changes: they can make it, eventually, but they will resist to it at first, and safety is needed to help them overcome this.

**Fear (re-examined)**

Fear inhibit change - not always, but most of times.

Where we are scared to death we can effect great change sometimes, mostly reactive. Some kind of learnings are enhanced by fear.

Learning, the key activity of meaningful change, is not antithetical to fear. Fear is usually a constant in any kind of essential learning.

So why safety is so important for change?

Because there is one kind of fear that makes change impossibile: the fear of mockery. If you mock people when they struggle or fails, change will become impossibile.

The safety required for essential change is a sure sense that no one will be mocked.

**Sticks and stones and names**

Irony and sarcasm, pointed jabbing criticism, personal mockery, public humiliation, eye rolling those are the true enemies of essential change.

During change, every failure has to feel like a treasure.


### Trust and trustworthiness
How is trust gained? We are thought that you gain trust by demonstrating trustworthiness, but how can you demonstrate it without trust before you deserve it? We should always give trust slightly in advance of demonstrated trustworthiness.

Picking up not yet deserved trust require a personal magnetism. There is one mechanical practice to use: acquire trust by giving trust.

Giving trust is a powerful gesture: who receives it gives back loyalty as an almost automatic response.

But it’s not that easy, you need to choose carefully who to trust and how much. Give it in advance but not too much in advance.


### Timing of change
Doing the right thing at the wrong time is worse than doing nothing. We need to choose the right time.

Only change things that are clearly broken, and consider that there are time when change simply won’t take. Someone has commitment to the current status quo, and people also self define through work so a change at work is a change to himself.

You need some advantage to overcome resistance to change:

1. A sensible approach to change
2. A culture that is not change phobic
3. Proper timing
The resistance to change will not be logical but mostly emotional. Is better to introduce a change during a positive period of healthy growth than a negative one. Since growth is winning, people look at growth related change entirely differently.


### What middle management is there for
But where does change happen? Not from the top, because change require involvement in the day to day work. And not at the bottom, because people there doesn’t have the perspective to reinvent or the power to carry out any reinvention scheme.

Change happens in middle management! change is actually the key role of middle managers! And to do it, they need time when they are not directing day to day business: that extra time is not waste, it’s slack! Without it, reinvention is impossibile because people that can make it happen are too busy.

Middle managers also need to work together to enable reinvention, while they usually work isolated. Change can’t happen without risk, therefore middle managers need to feel safe to fail.


### Where learning happens
Learning and changing goes together: you can change an org without learning but would be useless. It’s usually something you have learned that motivates the change.

To become an effective learning organization, you need to make a habit around learning specific skills.

**Classical learning model**



This model is mandatory for learning things that really matter.

When you learn something that invalidates what you’ve been doing for years, you have a “oh shit” moment. In this moment, having a go learner with the same reaction helps.

**Why team matters**

A well jelled team outperform a non team, why? Partially because the team helps align goals and keep everyone on track. Also, learning is more powerful because team members are co learners.

**Learning how to manage**

Usually managers are requested to learn without a facilitator and material, and with no co learners. we also need real learning not abstracted one: we learn better from examples.

**The management team**

People who own nothing in common may be called a team but they aren’t. Responsibility and accountability are spread over the management team.

Remember the white spaces between hierarchy lines, where learning mostly happen? The middle of the chart is the area where that happen!

Significant organizational learning can’t happen in isolation.


### Danger in the whitespace
When companies and divisions get themselves stuck, and they can’t learn their way out of anything, they try to change their org chart lines. They should focus on white spaces instead. In non learning orgs, often managers are scared by each other because they are taught that the success of one of them is the failure of another.

Usually competition it’s not intentional but arise because of some lacks from the upper managers.

But internal competition has a price in a knowledge organization: knowledge work is collaborative by definition. managers that “accept” competition to happen usually still expect collaboration and then blame for a lack professionalism when it doesn’t happen. But if the incentives you receive goes in the direction of not being collaborative, it’s what you will do.

It may be possible to align individuals objectives with organizational objectives, but it’s incredibly hard. This way an org might be efficient, but never effective.

**Learning**

Learning as usually intended is a “non learning” technique:

<aside> 💡 Training: practicing by doing a new task much more slowly than an expert would do it.

</aside>

When a training experience lack the slow down characteristic, is a non learning experience, and most corporate training fits into this category.

The problem is that too efficient companies (hurry up companies) usually doesn’t even find time for learning - and when it happens, it’s usually an input only experience with no training (intended as practice at a much lower pace than experts) with the expectation to be ready right after that. Non sense.


### Change management
Change management is an optimistic idea, and we usually don’t consider that rules of management are different when under a change.

We usually see management as a family model: the manager is dad, the boss - and we have to take orders. This doesn’t apply when a change is happening, and NEVER applies to knowledge work (ndr: may be because change is happening every day?).

Great knowledge work managers are more negotiators and they accumulate trust.


# Part 4: Risk and Management
All companies are aware that they need to take some risks, but this is usually misinterpreted and lead to Plan for Success, the intellectual equivalent of “make money no winning fifteen consecutive hand of blackjack without taking any money off the table till the end”. It works when it work but leaves you in the lurch when it doesn’t (and almost every time, it doesn’t work). This also actually lead to try to take less risks possibile because you can’t miss a hand.

Risk management is the opposite! Is a discipline of planning for failure: make explicit provision for a lot of small but expensive failures along the way to overall success.


### Uncommon sense
- risks are not inherently bad
- Risks never go away entirely
- Managing risk costs something
- If the risk doesn’t concreticize, risk management will still cost something
- It is applied to the entire portfolio
Risk management is hard: nondeterministic control, counterintuitive tools, so why you still want to do it?

Explicit risk declaration makes risks manageable.

Companies can’t be aggressive about risk taking without some meaningful assessments of the extent of the risks and uncertainties.

So, risk management is the explicit declaration of the amount of uncertainty.

The problem is that in some toxic companies people are not allowed to be uncertain. They may be allowed to be wrong but not uncertain.

The “can do” approach is antithetical to risk management: you can’t do both yourself, but a company should do both!


### Risk management: the minimal prescription
A risk is a bad thing that might (or not) happen. it’s bad because if it happen, chances of success are lessened. When the bad thing happen, the risk is said to materialize.

How to handle risks?

We have two type of risks:

1. Aggregate risks → potential overall failure of any undertaking; when an aggregate risk happen, the entire venture is invalidated.
2. Component/causal risks → the set of things that can go wrong that might lead to aggregate failure.
You can’t manage aggregate risks directly: you need to manage the component/causal risks.

What it means to manage risk?

- List and count every risk
- Have an ongoing process for discovering new risks.
- Quantify each one by potential impact and likelihood.
- Design a transition indicator for each one that tells you that the risk is beginning to materialize.
- Set down in advance what your plan would be to cope with each risk if it start to materialize.
**Risk containment**

we need a reserve of resources (money, time, etc) to use when the risk materialize to contain it.

The reserve means money and time allocated for work THAT MIGHT NOT BE PERFORMED.

Risk containment means having a reserve of 50% + the potential risks we calculated.

**Risk mitigation**

The list of actions you take to reduce the impact of a risk that materialize.

- You need a plan before the risk materialize
- You need some activities to be done in advance to enable the plan
Example: you want to setup a plan for a fire alarm, but you also need an alarm and fire estinguishers etc.


### working at breakneck speed
The hurry up mantra tell us to do things as fast as possibile. So, how fast is possible?

We usually think to it as working furiously, at max speed. For a physical work this is called “breakneck speed”. At such pace, you are cooking a disaster. If you fall down, you are done.

Does it sound like risk management? Mmm, not much.

With risk mitigation, you will improve the most likely date, and the mean expected date - but the most optimistic possibility has worsened.

So, without mitigation you had a very little tiny chance to finish in 12 months, for example; with mitigation, the minimum time is noi 12 and a half month. But the most likely scenarios are improved much more instead.

The problem is that most companies only focus and count on the rosy scenario date - the minimum time required if it all goes perfectly.

This is the problem of Plan for success.


### Learning to live with risk
Years ago, change was something you decided to go through to reach a new, better status.

Today, we live in a world of continuous change - you create a new state just to destroy it and replace it again a little later.

In this context, risk is a constant: no success can be achieved without risk.

Risk avoidance means flying away from opportunities.

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: talking-with-tech-leads-from-novices-to ========
TITLE: Talking with Tech Leads: From Novices to Practitioners
AUTHOR: ['Patrick Kua']
TOPICS: ['leadership', 'tech-lead']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/talking-with-tech-leads-from-novices-to/content.md
---BODY---

# Talking with Tech Leads: From Novices to Practitioners

## Summary

Feature lead (responsible for a feature)

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

- allow people to fail
- Feature lead (responsible for a feature)
- Study psychology and body language
- Sorround yourself with people that knows more than you
- unacceptable requests should be refused
- Book suggested: the mythical man month
- Focus energy on most important areas
- Book suggested: Planning Extreme Programming
- Learn to say no (but also to say yes)
- Learn and evaluate differences of individuals
- focus is more on team Productivity than yours as tech lead

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: the-devops-handbook ========
TITLE: The DevOps Handbook
AUTHOR: ['Gene Kim', 'Jez Humble', 'Patrick Debois', 'John Willis']
TOPICS: []
SOURCE: {'type': 'homepage', 'url': 'https://itrevolution.com/the-devops-handbook/'}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/the-devops-handbook/content.md
---BODY---

# The DevOps Handbook

## Summary

The DevOps Handbook is an award-winning and bestselling business handbook for digital transformation, providing a definitive guide for applying DevOps principles to improve workflow, communication, and product delivery. It expands upon the concepts introduced in 'The Phoenix Project' and offers practical guidance for organizations seeking to implement or enhance DevOps practices.

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

The DevOps Handbook is an award-winning and bestselling business handbook for digital transformation, providing a definitive guide for applying DevOps principles to improve workflow, communication, and product delivery. It expands upon the concepts introduced in 'The Phoenix Project' and offers practical guidance for organizations seeking to implement or enhance DevOps practices.

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

- [homepage](https://itrevolution.com/the-devops-handbook/)



========8<======== ID: the-phoenix-project-a-novel-about-it-devops-and ========
TITLE: The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win
AUTHOR: ['Gene Kim', 'Kevin Behr', 'George Spafford']
TOPICS: ['agile-software-development', 'devops']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/the-phoenix-project-a-novel-about-it-devops-and/content.md
---BODY---

# The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win

## Summary

In the first 6 chapter, Bill has been promoted and quickly discovered IT has an infinite number of problems. In chapter 7, Erick Reid shows up and talk about something very impacting.

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

# The Phoenix Project
In the first 6 chapter, Bill has been promoted and quickly discovered IT has an infinite number of problems. In chapter 7, Erick Reid shows up and talk about something very impacting.

- Theory of Constraints
- Lean production (Toyota Production System)
- Total Quality Management
Work In Progress is the silent killer of productivity. Focus must be on job and materials release in order to control WIP.

Erik asks Bill to discover the 4 types of work and then te contact him.

The first two are clear:

- Business projects
- IT projecta
The thirds comes up during the first Change Planning meeting by the new manual process of cards:

- Changes
Changes are definitively one category of work in IT.

The fourth category comes up in the 15 chapter: Phoenix project rollout has been a tremendous failure as Bill predicted and Steve has decided to outsource all IT in 90 days, unless a miracle happens that make him change his mind.

Patty shows up to Bill that all the planned Change Management operation have not been executed because of all the people focused 100% on Phoenix fixing. So, the 4th category is clear now:

- Unplanned work
Unplanned work is the most destroying type of work because you can’t see it before it shows up itself. Unplanned work is recovery work and will prevent you to keep reaching your goals, so it’s important to understand where it comes from.

Theory of constraint is being used at this point to identify Brent as the constraint (bottleneck).

Technical debt that is not being paid out will lead to pay “only interests”, which can be identified in unplanned work. If you don’t repay your technical debt, you will have only unplanned work!

Unplanned work has another side effect: no time or energy left for planning!

WIP goes from work center to work center (work center = functions), respecting the job order.

A Work center is made up by 4 things: the machine, the man, the method and the measures.

Elevating priority of preventive work properly is at the base of Total Productive Maintenance program: TPM insists that we do whatever it takes to assure machine availability by elevating maintenance.

Handling handoffs is also important: wait time for a giver resource is the percentage that the resource is busy divided by percentage of the resource is idle. If it’s 50% utilized, wait time is 50/50. If it’s 90% utilized, is 90/10. If it’s 99% utilized, it’s 99/1, meaning that there’s 99 times as long to wait compared to when it’s 50%.



![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2Fe382a90f-58d2-4e43-a55d-fae04bb5adc6.jpg?alt=media&token=fd0261fb-8ea8-46bb-96da-a031d610deef)


The graph represent those numbers and suggest that people must have slack time, otherwise WIP will get stuck in the system. 20% of slack time is a good number.

The story ends with Bill deciding to create a SWAT team to attack the main features of Phoenix that can save the company by enabling more sales: this starts under the name of Unicorn Project and it's a cross-functional team made of people from all the 4 functions that works on development (Devs, Ops, Security, QA) and Business Domains expert such as marketing.

They come up with an automated pipeline to test and deploy the application on the Dev, QA and Production environment, reducing waste; they put the target of 10 production deploys per day in their head and reach it by process automation, clean code and cooperation.


# The Three Ways (an extract from The DevOps handbook)

## Preface
The goal of this book is to describe how to replicate the DevOps transformations we have experienced.

Here are some most common myths about DevOps:

- **DevOps is only for startups**: while its true that web-scale has been pioneering the DevOps practices, also big companies (Google, Amazon, Netflix, Etsy, ecc) has come to a point of their life where they risked going out of business because of problems associated with more traditional organizations; however, each of these companies was able to transform their architecture, technical practices and culture to create the amazing outcomes associated with DevOps.
- **DevOps replace Agile**: DevOps and Agile are totally compatible; DevOps appear has a logical continuation of the Agile journey started in 2001. Agile can be seen as an enabled for DevOps because of its focus on small teams, continually delivering high-quality code.
- **DevOps is incompatible with ITIL/ITSM**: (IT Service Management) - DevOps practices can be made compatible with ITIL process; however, to support shorter lead times and higher deployments frequency, all the areas of ITIL process that can be automated should be so.
- **DevOps is incompatible with Information Security and Compliance**: DevOps organizations does have effective controls: security and compliance activities should not be executed only at the end of the project, they should be integrated into every stage of daily work.
- **DevOps means eliminating IT Operations**: actually, IT Operations simply operates earlier in the process, being fully integrated in the development of the Digital Product. Forget IT Operations doing manual work from tickets and think about it as enabler for developers productivity, throught APIs, self-serviced platforms, etc, creating environments, tests and deploying code, but also monitoring production healthness.
- **DevOps is just "infrastructure as a code" or automation**:DevOps also require cultural norms and an architecture that allows for the shared goals to be achieved.
- **DevOps is only for Open Source Software**: many DevOps success stories comes from LAMP stack or similar situations, but this is not limited to that: successes has been achieved also with .Net or COBOL applications. Achieving DevOps outcomes is independent of the technology being used.

## An Introduction to the DevOps handbook
Imagine a world where Product owners, Development, QA, IT Operations and Infosec work together, not only to help each other but to ensure the overall organization succeeds by working on a common goal and enabling the fast flow of planned work into production.

A cross-functional team that offer high-class stability, reliability, availability and security while performing lots of deploys per day; this also enable them to test hypotesis and have impact on business goals.

This enables organizations to create a safe system of work, where small teams are able to quickly and independently develop, test and deploy code and value quickly, safely, securely and reliably to customers, maximizing productivity and enabling learning and failure culture.

Sadly, for most of us this is not the world we live in.

The DevOps culture has origins from the Lean practices coming from manifacturing plant revolution in the 1980, lead by Toyota.

Nowadays, if a company is not able to deploy fast, lot of time per day, in a secure and reliable way, it can really risk to get out of business.


### The Problem: something in the organization must need improvement
The problem often comes from the classic IT organization that leads to conflicts between Dev team and Ops team: tipically, Dev team is responsible to react to market and customer needs fast with new features, while Ops is responsible to provide stable, reliable, and secure service to the customer. So Dev team needs to put changes in production very fast, while Ops need to slow down deployments in production to verify that everything is compliant.

This way, they have diametrically opposed goals and incentives: it's the "*core, chronic conflict*".

**Downward spiral in three acts**

1. **The first act** begins in IT Operations: the goal is to keep applications and infrastructures running; many problems comes from applications and infrastractures that are poorly documented, too complex, incredibly fragile, often solved with daily workarounds that leads to even deeper technical debt. And the most important revenue-generating systems quickly becomes the most fragile artifacts.
2. **The second act** begins when somebody has to compensate for the lates broken promise (broken thanks to the issue in first act): for example a product manager promise a bigger, bolder feature, promising a release date oblivious of what technology can or can't do or which were the problems that generated the first act. This leads developers to work to another urgent project, with new technical challenges to be solved in a unsufficient release date, forcing them to take shortcuts and add more technical debt.
3. Stage is set for **the third act**: everything becomes just a little more difficult every day; everybody gets a little busier, work takes a little more time, communications becomes a little slower and work queues a little longer, day by day. Everyone becomes more fearful and less tolerant of making changes. Technical debt keeps growing.
As a result, our product delivery cycles continue to move slower and slower.

**Why does this downward spiral happen everywhere?**

First, as described earlier, every IT organization has two opposite goals; second, every company is a technology company, whether they know it or not.

A bank is just an IT company with a banking license.

**The cost: human and economics**

When people are trapped in this downward spira for years, expecially those who are downstream to Development, they often feel stuck in a system that pre-order failure and leaves them powerless to change the outcomes, often followed by burnout, fatigue, cynicism, hopelessness and despair.

This leads to long hours, working on weekends, a decreased quality of life.

We also are losing a lot of money: in 2011 approximately $3.1 trillion was spent on IT. With an estimate of 50% spent on operating costs and maintaining existing systems, with 1/3 of that 50% probably put on urgent and unplanned work, approximately $520 billion was wasted.


### The Ethics of DevOps: there is a better way
DevOps solve the problems, enabling us to simultaneously improve organizational performance, achieve the goals of all tech roles and improve human condition.

**Breaking the downward spiral with DevOps**

Ideally, small teams of developers independently implement their features, validate their correctness in production-like environments and have their code deployed into production quickly, safely and securely.

This creates fast feedback loop at every step of the process, so that everyone can immediately see the effects of their actions.

Automated testing helps developers discover their mistakes quickly, enabling faster fixes and a genuine learning.

Pervasive production telemetry in both our code and production environments ensure that problems are detected and corrected quickly.

Everyone feels productive in this scenario!

We can then start deploying feature even before their launch, hiding them via feature toggle or configuration so that code can keep evolving even while we wait for the launch.

Everyone should be encouraged to continuous learning: from mistakes but also from books and study and internal initiative such as book clubs, conferences, etc.

We create long-term teams that can grow and evolve together for years.

We create a fearless, high trust, collaborative culture, where people are rewarded for taking (calculated) risks. They are able to fearlessly talk about problems because the only purpose is to solve them.

When something goes wrong, we do blameless post-mortems: we don't want to punish anyone, we want to understand what caused the incident and how to prevent it.

We can, then, even inject faults into out production environment so that we can test and learn how our system fails in a planned manner.

**The business value of DevOps**

From data collected from the author, teams that use DevOps practices outperform others on:

- throughtput metrics
- code and change deployments (30x)
- code and change deployment lead time (200x)
- reliability metrics
- production deployments (60x)
- mean time to restore service (168x)
- organizational performance metrics
- productivity market share and profitability goals
- market capitalization growth
DevOps team are empirically proven more agile and more reliable.

**DevOps helps scale developer productivity**

When we increase the number of developers, individual developer productivity often significantly decreases due to communication, integration and testing overhead; when projects are late, this will also fall in a decrease of overall productivity of the team.

For DevOps team this is not true! Organizations adopting DevOps culture are able to linearly increase the number of deploys per day as they increase their number of developers.


### The DevOps handbook: an essential guide
The purpose of this book (here just an extract of it) is to give you the theory, principles and practices you need to successfully start your DevOps initiative and achieve your desired outcomes.


# Introduction
DevOps is the outcome of applying the most trusted principles from the domain of physical manufactoring and leadership to the IT value stream. DevOps relies on bodies of knowledge from Lean, Theory of Constraints, the Toyota Production System, resilience engineering, leaning organizations, safety culture, human factors, and many others.

Other valuable context are high-trust management cultures, servant leadership, and organizational change management.

The result is world-class quality, reliability, stability, and security at ever lower cost and effort.


## The Lean Movement
Techniques such as Value Stream Mapping, Kanban Boards, and total Productive Maintenance were codified for the Toyota Production System in 1980s.

In 1997 Lean Enterprise Institute started researching applications of Lean to other value streams, such as the service industry and healthcare.

Lean principles focus on how to create value for the customer through systems thinking by creating constancy of purpose, embracing scientific thinking, creating flow and pull, assuring quality at the source, leading with humility, and respecting every individual.


## The Agile Manifesto
The Agile Manifesto was created in 2001 by seventeen of the leading thinkers in software development. They wanted to create a lightweight set of values and principles against heavyweight development processes such as Waterfall.

Agile is credited for dramatically increasing the productivity of many development organizations.


## Agile infrastructure and velocity movement
At the 2008 Agile conference in Toronto, Canada, there was the first session of thinking about applying Agile principles to infrastructure, from Patrick Debois and Andrew Schafer.


## The continuous delivery movement
Built upon the development discipline of continuous build, test and integration, Jez Humble and David Farley extended the concept to Continuous Delivery, defining the role of a *deployment pipeline* to ensure that code and infrastructure are always in a deployable state.


## Toyota Kata
Mike Rother, in 2009, wrote *Toyota Kata: Managing people for improvement, adaptiveness and superior results*, which is the resume of his 20 year journey to understand and codify the Toyota Production System; his motivation was that he was puzzled when none of the companites adopting the same practices replicated the level of performance observed in Toyota plants.

He concluded the Lean community missed the most important practice of all: the *improvement Kata*, that requires creating structures for daily, habitual practices of improvement work, because daily practice is what improves outcomes.

The continual improvement of daily work is what guided improvement at Toyota.


# Agile, Continuous Delivery and The 3 Ways

## The manufactoring Value Stream
Definition of Value Stream (extracted from the book *Value Stream Mapping: How to visualiza work and align leadership for organizational transformation* by Karen Martin and Mike Osterling:

> The sequences of activities an organization undertakes to deliver upon a customer request.

In other words, the Value Stream is the sequence of activities required to design, produce, and deliver a good or service to a customer, including the dual flows of information and material.

In manufactoring, the value stream is often easy to observe: it starts when a customer order is received and the raw materials are released onto the plant floor.

To enable fast and predictable lead times in any value stream, there's usually a relentless focus on creating a smooth and even flow of work, using techniques such as **small batch sizes**, reducing work in process (WIP) and preventing rework to ensure we don't pass defects to downstream work centers, constantly and continuously optimizing our system toward our global goals.


## The technology Value stream
The same principles and patterns that enable fast flow in physical processes are equally applicable to all knowledge work, technology included.

In DevOps, we typically define our technology value stream as the process required to convert business hypothesis into a technology-enabled service that delivers value to the customer.

The input is the formulation of a business objective, concept, idea or hypothesis, and the process starts when this input is accepted and added to our backlog of work.

Then, following an Agile iterative process, the team will transform that raw input into something workable: user stories, features specification of some sort, etc; then, this workable stuff will be implemented in code.

The code goes first into version control to checked and tested with the rest of the software, but because value is created only when our services are running in production, we must ensure that we also can have easy deployments that does not create chaos and disruption.


### Focus on Development Lead Time
We will focus on Development Lead Time: this is a section of the complete technology value stream, that starts when an engineer check a change into version control and end when that change is successfully running in production, providing value to the customer and generating useful feedback and telemetry.

We focus on that because the first part of the value stream, that includes Design and Development, is similar to Lean Product Development: highly variable, highly uncertain, requiring work with high degrees of creativity and work that may never be performed again; meaning, it has a high variability of process times.

In contrast, the second part of work, the Development Lead Time, including Testing and Operations, is similar to Lean Manufactoring: it requires, of course, creativity and expertise, but strives to be predictable and mechanistic, with the goal of achieving the output with minimized variability.

The goal here is to have short and predictable lead time with near zero defects; we want testing and operations happening simultaneously with design & development, enabling fast flow and high quality.

**Defining Lead Time vs Process Time**

The **lead time** clock starts when the request is made and ends when it is fulfilled; the **process time** clock, instead, starts only when we begin work on the customer request, specifically omitting the time the work is in queue waiting to be processed..

![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F30ee9533-7feb-4afe-9152-10061e44f5a8.jpg?alt=media&token=30ced678-3ef6-443a-a7a5-f629144365ba)
Customers experience lead time, so we typically focus on improve lead time instead of process time. However, the proportion of process time to lead time is an important measure of efficiency: achieving fast flow and short lead times almost always requires reducing the time our work is waiting in the queue.

**The common scenario: Deployment Lead Time Requiring Months**

In many organizations, lead times require months: this is especially common in large, complex organizations, probably working with tightly-coupled, monolithic applications, long test and production environment lead times, high reliance on manual testing, etc. When this happens, the value stream is a mess:



![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F40effd82-4db3-4ec2-a54b-505839cc519f.jpg?alt=media&token=e15814ff-d98b-4fff-b910-dd23bc73cad4)


When lead time is long, heroics are required at almost every stage of the value stream. We may discover that nothings work at the end of the project, when we merge all the changes together, for example. Fixing each problem requires days or weeks of investigation, still resulting in poor customer outcomes.

**Our DevOps ideal: Deployment Lead Times of minutes**

In the DevOps ideal, developers receive fast and constant feedback on their work, enabling them to quickly and independently implement, integrate and validate their code and having it deployed into production.

This can be achieved by continually checking small code changes into the version control repository, performing automated and exploratory testing against it; this enable the team to have a high degree of confidence that our changes will operate as designed.

It's easier to achieve this goals when the architecture is modular, well encapsulated and loosely-coupled so that small teams are able to work with high degrees of autonomy; failure will be small and contained, without global disruptions.

In this scenario, the development lead time is measured in minutes or hours:

![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F1e37a95c-8308-4d96-ae5f-ce9add97a593.jpg?alt=media&token=7d33f3e6-c958-4b1c-95ba-1ecee3443241)


**Observing "%C/A" as a measure of rework**

In addition to lead times and process times, we can have a third key metric in the technology value stream: the percent complete and accurate (%C/A). This metric reflect the quality of the output of each step in the value stream. According to Karen Martin and Mike Osterling:

> the %C/A can be obtained by asking downstream customers what percentage of the time they receive work that is "usable as is", meaning they can do their work without having to correct the informations provided or collect missing ones or even clarify some of that.


## The Three Ways: The Principles underpinning DevOps
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F72c4ec67-65a3-4f8b-ab22-05cc58294bbd.jpg?alt=media&token=431af8db-1340-49b4-b811-477119f97562)
The **First Way** enables **fast left-to-right flow** of work from Development to Operations to the customer. In order to maximize the flow, we need to make work visible, reduce batch size and work interval, build with quality to prevent defects and constantly optimize for the global goals. Since the flow is speed up through technology value stream, lead time required to fullfill requests is reduced, especially the time required to deploy in production. This means improving the quality of work as well and our throughput. The **resulting practices** include *continuous build, integration ,test, and deployment processes; creating environments on-demand; limiting work in process (WIP); building systems and organizations that are safe to change*.

The **Second Way** enables fast and constant flow of feedback from right to left, at all stages. It requires that we amplify the feedback to prevent problems from happening again, enabling faster detection and recovery. We will obtain a safe system of work where problems are found and fixed long before something catastrophic happens.

The **Third Way** enables the creation of a generative, high-trust culture that supports a dynamic, disciplined, scientific approach to experimentation and risk-taking, facilitating the creation of organizational learning from both success and failures. We design our system of work so that we can multiply the effects of new knowledge, transforming local discoveries into global improvements.


### The First Way: The Principles of Flow
**Make our work visible**

A significant difference between technology and manufacturing value streams is that technology work is invisible. Unlike physical processes, in technology value stream we cannot easily see where flow is being impeded or when work is piling up in front of work centers.

That's because in technology work, the move from a work center to another can be done easily, with a click of button, for example reassigning a ticket to another team. Because it's so easy, work can bounce.



![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F09c1c6b7-2fba-4d92-9374-ebc1f3f60d14.jpg?alt=media&token=f2b0385b-11c4-4f81-bcfa-c8aec446089c)
This kind of boards help us not only make the work visible, but only manage to make it flow from left to right as quickly as possible, enabling to measure lead time.

Work must be considered "Done" only when it is in production, delivering value to the customer.

Doing this enables each work center to single-task on the highest priority work until it is completed, increasing the throughput.

**Limit Work in Process (WIP)**

In manufacturing, daily work is typically dictated by a production schedule generated regularly (daily/weekly), establishing which work should be done based on customers orders, orders due dates, parts available, etc.

In technology the work is typically more dynamic.

As a result, often daily work becomes dominated by the priority of the day, often with urgent requests coming in through all the communication way possibles.

Disruption in manufacturing are also highly visible and costly, often requiring breaking the current job, and it's so visible that is enough to discourages frequent disruptions.

Interrupting knowledge workers it's easier, because the consequences are invisible to almost everyone, event if the negative impact to productivity is higher than in manufacturing.

Studies have shown that the time to complete even simple tasks significantly degrades when multitasking. In knowledge workers the effect of the multitasking is far worst.

A kanban board can help us reduce multitasking, for example by limiting the WIP for each column.

Limiting WIP also makes it easier to see problems that prevent the completion of work; someone could for example find that he may not have nothing to do because we are waiting on someone else. Although it can be tempting to start new work ("better do something than nothing") a far better action would be to find out what is causing the delay and help fix that problem.

> Stop Starting. Start Finishing.

**Reduce batch sizes**

Another key factor to create smooth and fast flow is performing work in small batch sizes. One of the key lessons in Lean is that in order to shrink lead times and increase quality, we must strive to continually shrink batch sizes. The theoretical lower limit for batch size is *single-piece flow*.

Let's describe the simple newsletter mailing simulation described in *Lean Thinking: Banish waste and create wealth in your corporation (James P. Womack)* to see the dramatic difference: suppose we have ten brochures to send and mailing each brochure require 4 steps:

1. fold the paper
2. insert the paper in the envelop
3. seal the envelop
4. stamp the envelop
The large batch strategy would lead us to sequentially execute each step on all the brochures: in other words, we would fold the paper for all the 10 brochures, and only when all 10 are ready we would start to insert the paper in the envelop for all the 10 brochure again, and so on for each step.

In the small batch strategy of single-piece flow, instead, we would execute all the 4 steps required on each of the brochures: in other words, we would fold the paper, insert it in the envelop, seal the envelop and stamp it for the first brochure and only when it is completed we would begin with the first step for the second brochure.

The difference is dramatic: supposing each step takes 10 seconds, with the large batch strategy the first completed item is produces after 310 seconds, while with the small batch strategy it would come out after 40 seconds.

Moreover, if we discover at some place, for example during the envelop, that we made an error in the first step of folding, the earliest we would discover the error is 200 seconds and we have to refold and reinsert all the 10 brochure again!

With small batch strategy instead, if an error occur we only have to repeat the steps for the single brochure.



![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2F467145cd-781b-4191-abdb-83dbaff69d47.jpg?alt=media&token=2850de69-9108-403d-bf4a-a29237ab4882)
> The batch size is the unit at which work-products move between stages in a development process. For software, the easiest batch to see is the code. [...]

**Reduce the number of Handoffs**

To transmit code through the technology value stream requires multiple departments to work on a variety of tasks; each time the work passes from team to team, we require all sorts of communication: requesting, specifying, signaling, coordinating, scheduling, testing, etc. This often require to use tools such as ticketing or project management systems, meetings, emails, phone calls, etc.

Each of this step is a potential queue where work will wait when we rely on resources that are shared between different value streams.

Even under the best circumstances, some knowledge is inevitably lost with each handoff; with enough handoffs, the work can completely lose the context of the problem: for instance, a server administrator may see a new ticket requesting to create a user account, without specifying of which application or service it's for.

To mitigate this kind of problem, we strive to reduce the number of handoffs; this can be done automating significant portions of the work or reorganizing teams so that they can deliver value to the customer themselves without depending on others.

**Continually identify and elevate our constraints**

To reduce lead time and improve the throughput, we need to continually identify our system's constraints and improve its work capacity.

> In any value stream, there is always a direction of flow, and there is always one and only constraint; any improvement not made at that constraint is an illusion. (*Dr. Goldratt - Beyond the Goal*)

We can follow the **5 focusing step**:

- Identify the system's constraint
- Decide how to exploit the system constraint
- Subordinate everything else to the above decisions
- Elevate the system's constraint
- If in the previous steps a constraint has been broken, go back to step 1
In typical DevOps transformations, moving from deployment lead times going from months to minutes, constraints usually follow this progression:

- **Environment creation**: We cannot achieve deployments on-demand if we have to wait weeks for an environment to be set up. We need to create self-service, on-demand environments, always available
- **Code deployment:** We cannot achieve deployments on-demand if each of our production code deployments take weeks to perform. We need to automate the deployment as much as possible, with the goal of being completely automated.
- **Test setup and run:** We cannot achieve deployments on-demand if every code deployment requires two weeks to set up environment tests and another four weeks to test manually. We need to automate all of our tests, so that we can safely execute them, also in parallel.
- **Overly tight architecture:** We cannot achieve deployments on-demand if we have to send engineers to scores of committee meetings in order to get permission every time we make a change. We need to have a better architecture, allowing us to made changes safely and with autonomy.
After all these constraints are broken, our constraints will likely be Development or the Product Owners: since our goal is to enable small teams of developers to independently develop test and deploy value to our customers quickly and reliably, this is the right place where to have constraints.

**Eliminate hardship and waste in the value stream**

The commonly used definition of waste in Lean is:

> The use of any material or resource beyond what the customer requires and is willing to pay for.

More modern interpretation says that eliminating waste che have a demeaning and dehumanizing context. The goal has been reframed to:

> Reduce hardship and drudgery in our daily work through continual learning in order to achieve the organization's goals.

The following categories of waste and hardship comes from *Implementing Lean Software Development (Mary and Tom Poppendieck)*:

- **Partially done work:** any work in the value stream that has not been completed or work that is sitting in the queue (ex: waiting for a QA or server admin ticket); partially done work becomes obsolete and loses value as time progresses
- **Extra processes:** any additional work that is being performed in a process that does not add value to the customer. ex: documentation not used in downstream work centers, reviews or approvals that does not add value to the output. Extra processes add effort and increase lead times.
- **Extra features:** Feature built into the service that are not needed by organization or customer; they only add useless complexity and effort to testing and managing the code.
- **Task switching:** When people are assigned to multiple projects and value streams, this requires them to context switch and manage dependencies between work adding additional effort and time to the value stream
- **Waiting:** Any delays between work requiring resources to wait until they can complete the current work. Delays increase cycle time.
- **Motion:** The effort needed to move information or materials from one work center to another. Motion waste can be created when people who need to communicate frequently are not colocated.
- **Defect:** Incorrect, missing or unclear information, materials or products create waste, because an additional effort is needed to resolve those issues. The longer the time between the creation and detection of a defect, the more difficult it is to resolve it.
- **Non standard or manual work:** We should rely on standardized, automated, self-serviced resources every time is possibile (ex: to create environments or deploy code) so that work is more reliable.
- **Heroics:** This happens when individuals and teams are put in a position where they must perform unreasonable acts in order for the organization to achieve his goals; this acts could even become part of the daily job (eg: nightly 2:00 am work, either for normal work or problems in production)
Our goal is to make these wastes and hardships (*anywhere heroics become necessary*) **visible** and then work to **eliminate these burdens**.

**Conclusion**

Improving flow through the technology value stream is essential to achieving DevOps outcomes. We do this by making the work visible, limiting WIP, reducing batch sizes and number of handoffs, continually identifying and evaluating our constraints, and eliminating hardships in our daily work.


### The Second Way: the principles of feedback
While the First Way describes the principles that enable fast flow of work from left to right, the Second Way describes the principles that enable the reciprocal fast and continuous feedback from right to left at all stages of the value stream. Our goal is to create an ever safer and more resilient system of work.

We make our system of work safer by creating fast, frequent, high-quality information flow throughout our value stream and organization. This allow us to detect and remediate problems while they are smaller, cheaper and easier to fix. When failure and accidents occur, we treat them as opportunities for learning.

**Working safely within complex systems**

Complex systems typically have a high degree of interconnectedness of tightly coupled components, and system-level behavior cannot be explained merely in terms of the behavior of the system components: this make almost impossible for a single person to see the system as a whole and understand how all the pieces fits together.

There is another main characteristic of complex systems: doing the same thing twice will not predictably or necessarily lead to the same result. This characteristic make static checklist and best practices, while still valuable, insufficient to prevent catastrophes from occurring.

Failure is inherent and inevitable in complex systems, so we must design a safe system of work, where we can perform work without fear, confident that any errors will be detected quickly, long before they cause catastrophic outcomes.

While designing perfectly safe systems is likely beyond our abilities, we can make it safer to work in complex systems meeting this main 4 conditions:

- complex work is managed so that problems in design and operations are revealed
- problems are swarmed and solved, resulting in quick construction of new knowledge
- new local knowledge is exploited globally throughout the organization
- leaders create other leaders who continually grow these types of capabilities
**See problems as they occur**

In a safe system of work, we must constantly test our design and operating assumptions. The more assumptions we can invalidate, the faster we can find and fix problems, increasing resilience and agility, but also ability to learn and innovate.

In the technology value stream, we often get poor outcomes because of the absence of fast feedback; the typical example here is a Waterfall project where we may develop code for a year without getting any feedback on it. When feedback is this delayed and infrequent, it is too slow to enable us to prevent undesirable outcomes.

Our goal is to create fast feedback and fast-forward loop wherever work is performed, at all stages of the technology value stream.

This includes the creation of automated build, integration, and test process, that allow us to immediately detect when a change is introducing an issue. We should also create a pervasive telemetry to monitor all of the system components, so that we can quickly detect when something is not working as expected but also measure if we are achieving our goals.

This will not only enables quick detection and recovery of problems but also give us enough information at the right time so that we can prevent these problems from occurring again in the future.

**Swarm and solve problems to build new knowledge**

Of course it's not enough to detect the unexpected: when problems occur, we must swarm them, mobilizing whoever is required to solve the problem. The goal of swarming is containing the problem before it has the chance to spread and diagnose and treat the problem so that it cannot recur.

The paragon here is with the *Andon cord* from Toyota: in a Toyota plant, above every work center they have a cord the everyone is trained to pull when something goes wrong.

When the cord is pulled, the team leader is alerted and immediately works to resolve the problem: if it cannot be solved in a given time span (55 seconds) the entire production line is halted so that the entire organization can be mobilized to assist with problem resolution.

Instead of working around the problem of scheduling a fix "when we have more time" (which is never), we swarm to fix it immediately. Swarming is necessary for the following reasons:

- it prevents the problem from spreading and progressing downstream, where the cost and effort to repair it would increase exponentially
- it prevents the work center from starting new work, which will likely meet the same error
- if we don't address the problem immediately, the work center will likely have the same problem in the next operation, requiring them more fixes and work
Swarming enables learning: it prevents the loss of critical information about the problem, especially in complex systems: when times passes, it becomes impossibile to reconstruct exactly what was going on when the problem occurred.

It's only through the swarming of ever smaller problems discovered ever earlier in the life cycle that we can detect problems before a catastrophe occur.

To enable fast feedback in the technology value stream, we must create the equivalent of an Andon cord and the related swarming response. We also need a culture where pulling that cord is not only safe but also encouraged, whenever something goes wrong.

Preventing the introduction of new work enables continuous integration and deployment, which is single-piece flow in the technology value stream.

**Keep pushing quality closer to the source**

The effectiveness of approval processes decreases as we push decision making further away from where the work is performed. This not only lower the quality of decisions but also increases out cycle time, thus reducing the strength of the feedback between cause and effect and also reducing our ability to learn from successes and failures.

Example of ineffective quality controls include:

- requiring another team to complete tedious, error-prone, and manual tasks that could easily be automated and run as needed by the team that need that work to be performed
- requiring approval from busy people who are distant from the work, forcing them to make decisions without an adequate knowledge of the work or the potential implications, or to merely rubber stamp their approvals
- creating large volumes of documentation of questionable detail which become obsolete shortly after they are written
- pushing large batches of work to teams and special committees for approval and processing and then waiting for responses
We need everyone in our value stream to find and fix problems in their area of control as part of our daily work. We need to push quality and safety responsibilities to where and when the work is performed.

We use Peer Reviews of proposed changes to gain whatever assurance is needed that our changes will do what they were designed for and we automate as much of the quality checking typically performed by a QA or IT Security department as possible.

By doing this, we truly make quality everyone's responsibility.

**Enable optimizing for downstream work centers**

Lean defines two types of customers that we must design for: external customers (people that will likely pay for the service we are delivering) and internal customers (who receive and processes the work immediately after us). According to Lean, our most important customer is our next step downstream. Optimizing our work for them requires that we have empathy for their problems in order to better identify the design problems that prevent fast and smooth flow.

In the technology value stream, we optimize for downstream work centers by designing for operations, meaning that operational non-functional requirements (ex: architecture, performance, stability, testability, configurability, security) are prioritized as user features. By doing this, we create quality at the source, likely resulting in a set of codified non-functional requirements that we can proactively integrate into every service we build.

**Conclusion**

Creating fast feedback is critical to achieving quality, reliability and safety in the technology value stream. We do this by seeing problems as they occur, swarming and solving problems to build new knowledge, pushing quality closer to the source, and continually optimizing for downstream work centers.


### The Third Way: the principles of continual learning and experimentation
While the First Way describes the principles that enable fast flow of work from left to right, and the Second Way describes the principles that enable the reciprocal fast and continuous feedback from right to left at all stages of the value stream, the Third Way focuses on creating a culture of continual learning and experimentation.

In the technology value stream, our goal is to create a high trust culture, reinforcing that we are all lifelong learners who must take risks in our daily work. By applying a scientific approach to both process improvement and product development, we learn from our successes and failures, identifying which ideas don't work and reinforcing those that do. Moreover, any local learnings are rapidly turned into global improvements, so that new techniques and practices can be used by the entire organization.

We reserve time for improvement of daily work and to further accelerate and ensure learning. We also introduce stress and even simulate and inject failures in the production services under controller conditions, to increase our resilience.

**Enabling organizational learning and a safety culture**

When we work in a complex system, by definition it's impossible to perfectly predict all the outcomes for any action we take. This is what contribute to unexpected outcomes, sometimes catastrophic or simple accidents in the daily work, even if we take precautions and work carefully.

In the technology value stream, the work is always performed in complex systems, and how management chooses to react to failures and accidents is important. Dr. Ron Westrum defined three types of culture:

- **Pathological organizations**, characterized by large amounts of fear and threat. People often hoard informations for political reasons, or distort it to make themselves look better. Failure is often hidden.
- **Bureaucratic organizations**, characterized by rules and processes, often to help individual departments maintain their "turf". Failure is processed through a system of judgement, resulting in either punishment or justice and mercy.
- **Generative organizations**, characterized by actively seeking and sharing information to better enable the organization to achieve its mission. Responsibilities are shared throughout the value stream, and failure results in reflection and genuine inquiry.
![](https://firebasestorage.googleapis.com/v0/b/recall-308915.appspot.com/o/user%2FslWmE5Yef0XwthPH6H76ljViVpI2%2Fcard-images%2Fc8834230-98b6-4c41-9ad5-705fdba92a5b.jpg?alt=media&token=4bd6d888-7df1-4732-bdcd-34cc43e7a491)
In the technology value stream, we establish the foundation of a generative culture by striving to create a safe system of work. When accidents and failures occur, instead of looking for human error, we look for how we can redesign the system to prevent the accident from happening again.

An example is a blameless post-mortem conducted after every incident to gain the best understanding of the issue and agree on the best countermeasures to take to improve the system and ideally preventing the problem from occurring again.

By doing this, we create organizational learning.

**Institutionalize the improvement of daily work**

Team are often not able or not willing to improve the processes they operate within. The result is not only that they continue suffering from current problems, but this suffering grows over time; this is because in the absence of improvements, processes degrade overt time due to chaos and entropy.

In the technology value stream, when we avoid fixing our problems, relaying on daily workarounds, the technical debt accumulates until all we do is performing workarounds, trying to avoid disaster.

We can improve daily work by explicitly reserving time to pay down tech debt: for example reserving cycles to do it in each development interval, or scheduling *kaizen blitzes*, which are periods when engineers self-organize into teams to work on fixing any problem they want.

The result of this practices is that everyone finds and fixes problems in their area of control, all the time, as part of their daily work. As we make our system of work safer, we find and fix our problems from ever weaker failure signals.

**Transform local discoveries into global improvements**

When new learnings are discovered locally, there must also be some mechanism to enable the rest of the organization to use and benefit from that knowledge. In other words, when teams or individuals have experiences that create expertise, our goal is to convert that tacit knowledge into explicit, codified knowledge, which become someone else's expertise through practice.

For example, we should make our blameless post-mortem reports visible and searchable by teams trying to solve similar problems, we should create shared source code repositories that span the entire organization.

**Inject resilience patterns into our daily work**

We should try to prepare ourselves from disruptions by continually introducing tension to elevate performance and also introducing more resilience into the system, improving our daily operations.

We can introduce this kind of tension by seeking to always reduce deployment lead times, increase test coverage, decrease test execution times, and even by re-architecting if necessary to increase developer productivity or increase reliability.

We may also perform *game day* exercises, where we rehearse large scale failures, such as turning off entire data centers. Or we may inject ever-larger scale faults into the production environment, such as the famous "Chaos Monkey" from Netflix that randomly kills processes and compute servers in production. This way we can test our resilience and improve it in a controller way.

**Leaders reinforce a learning culture**

Traditionally, leaders were expected to be responsible for setting objectives, allocating resources and establishing the right combination of incentives. Leaders also establish the emotional tone for the organization they lead.

There is significant evidence that greatness is not achieved by leaders making all the right decisions: leader's role is to create the conditions so their team can discover greatness in their daily work. In other words, greatness requires both leaders and workers, mutually dependent from each other.

This relation is described by Jim Womack, author of *Gemba Walks*, that states that this relationship is necessary because neither can solve problems alone: leaders are not close enough to the work and frontline workers do not have the broader organizational context or authority to make changes outside their area of work.

Leaders must elevate the value of learning and disciplined problem solving. Following the *coaching kata*, we should explicitly state our True North goals. These strategic goals then inform the creation of iterative, shorter term goals from the team.

These target conditions frame the scientific experiment: we explicitly state the problems we are seeking to solve, our hypothesis of how our proposed countermeasure will solve it, our methods for testing that hypothesis, our interpretation of the results, and our use of learnings to inform the next iteration.

The leader helps coach the person conducting the experiment with questions such as:

- what was you last step and what happened?
- what did you learn?
- what is your condition now?
- what is your next target condition?
- what obstacle are you working on now?
- what is your next step?
- what is your expected outcome?
- when can we check?
This problem-solving approach in which leaders help workers see and solve problems in their daily work is at the core of the Toyota Production System and learning organizations, the Improvement Kata, and high-reliability organizations.

**Conclusions**

The principles of the Third Way address the need for valuing organizational learning, enabling high trust and boundary-spanning between functions, accepting that failure will occur in complex system and making it acceptable to talk about problems so we can create a safe system of work. It also requires institutionalizing the improvement of daily work, converting local learnings into global learnings that can be used by the entire organization.

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: when-will-it-be-done ========
TITLE: When will it be done
AUTHOR: ['Daniel S. Vacanti']
TOPICS: ['product-development', 'tech-lead']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/when-will-it-be-done/content.md
---BODY---

# When will it be done

## Summary

We have a word for situations such as weather forecasting: uncertain. Most people assume that highly uncertain situations are unpredictable: not true. There is a science that deals with uncertainty: probability.

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

# The basic principles of forecasting
We have a word for situations such as weather forecasting: uncertain. Most people assume that highly uncertain situations are unpredictable: not true. There is a science that deals with uncertainty: probability.

Basic principles:

1. Think probabilistically, not deterministically Forecasts are about describing the future, but the future is uncertain. Uncertainty means a multitude of possible outcomes for a given future event. To think probabilistically means to acknowledge that there is more than one possible future outcome. We need to describe the future in probabilistic terms: a forecast is a calculation about the future that includes both a range and a probability of that range occurring. This concept can be uncomfortable for people used to deterministic forecasts (deadline dates), even if they know those dates will be most likely wrong they are used to it.
2. Make short and long term forecasts, understanding that short ones will be more accurate. The shelf life of a long term plan is super short. The chances that the assumption you make in the plan will remain true over time is almost zero. That’s why the timeframe of forecast should be aimed to be the shortest possible to reduce uncertainty and also maximize learning for the next forecast.
3. Reforecast when you gain more information A forecast is only valid until the next one comes out. Re forecasting in front of new info is fundamental for good forecasting. In order to make correct predictions, you want to use any data you can gather.

# How to make a forecast for a single item
- decide what it means to start & end a piece of work
- Track timestamps for both
- End timestamp - start timestamp + = cycle time
- cycle time scatterplots → cycle time data over a graph with time (date) on the other axe
- Percentile line → horizontal line of a percentile value to get the percent of dots falling on or below the line
    - Common percentile values for the line: 85% (it means that 85% of our items takes x days, 43 for example, or less to be completed)
- Why percentile?
    - They work on any distribution of data
    - Easy to calculate
    - Not skewed by outliers
- Percentiles are forecasts: they identify a range of outcomes and a probability associated. In the example above the forecast would suggest that when an item starts, it would take 43 days or less to be completed, with a 85% confidence.
- In order to make meaningful forecasts, chose a relevant set of historical data
- Pick a percentile confidence appropriate for your context

# Improving single items forecasts - what to do
The real challenge is to make long term forecast more accurate over time.

Good news is the same practices to achieve that will also improve your work.

“More accurate” means reducing the range of possible outcomes, and raising their percentage.

Work item age is the total amount of time that has elapsed since an item entered a workflow. It applies to items that entered but not exited the workflow.

Tracking this info provide the evidence we need to proactively improve single items forecasts: we can monitor if he gets closer to the forecast we did for him, and take actions to understand why, how to avoid it to go higher, and info for the future.

The main problem is that when it breaches the forecast, we now cannot know when it will be done with confidence. So we should use that data also to prevent it breaching the forecast.

A good idea is to take the age into considerations in the standups.


## Reforecast when you get more information
In our world, we get informations about how long it takes to complete an item every day.

Make sure to update your predictions based on your informations.

Cycle time can be divided in active time and wait time, to have an index of our flow efficiency we can calculate it like this: active time/cycle time.

Looking into improving wait time is usually the best, cheapest and more effective way to improve cycle time.

Some actions to reduce wait time:

- monitor Work In Progress
- minimize wait times, especially when an item is close to completion
- rethink poor policies
Improving active time is harder but possible:

- add automations
- do more social programming (pair/mob)
- lower the limit limit of your WIP
We need to remember, anyway, that variation will always exists: the point is not to remove it, but to be aware of it to make our work more predictable. When a negative outlier shows up, instead of just labeling it as statistically irrelevant, you should consider a small investigation: it might be the signal of some issues that might become more frequent in the future.

Remember: cycle time is not a single value; it is a series of values, each with their own probability of occurring.


# Improving single items forecasts - what NOT to do

## 1. Never coomunicate a forecast in therms of average
Let’s examinate why a simple average is not a good way to make a prediction: in a scenario where your average time for commuting is 24 minutes, at which time would you leave for office if you have a meeting at 9AM with the CEO? Definitely not at 8:35, I guess.

That’s because it’s pretty clear that to maximize the chances to be on time, 24 minutes is not enough. You probably want something more close to 45/60 minutes, just to be sure.


## 2. The most likely outcome is not very likely
Another reasons why average are not a good idea is that they don’t look like a forecast: they usually are a single value instead of a range, and they for sure miss a percentage representing the probability.


## 3. Your data is not normal
Even if you introduce standard deviations in your calculations, it won’t matter much because your data is not normally distributed. One of the most important things in working in knowledge work is that common statistic training is not applicable: we do not live in a world of normal distributions.


## 4. Do not waste time estimating and planning
Estimations and plannings takes you away from real work, making you less predictable. It’s waiting time.


## 5. Do not use story points for forecasting
There is often little or no correlation between the complexity of an item and its cycle time. Some studies shows this, with examples like 5 story points items being completed in half of the time of 3 story points times.

When prompting for an estimate, most people will only consider active time - which is the main reason why estimation usually fails.


## 6. Right sizing vs Same sizing
Lot of people says that you should have all items of the same size to be able to forecast: false.

By becoming confident with a forecast idea, you will become confident with the idea of the “right” sizing: if your current forecast (85% percentile) is around 12 days, then 12 days is the right sizing.

Is this still estimation? Yes, of course - but estimation cannot 100% disappear, can only be minimized. Aim to minimize the right size to minimize estimation.


## 7. Do not ignore Pull policies
Pull policies = how the team picks the next item to work.

Avoid common mistakes:

- special classes to give priority to items
- ignoring blocked items
- ignoring/not use WIP limit
- don’t share a clear Definition of Done for every step

# How to make a forecast for multiple items
Throughput is a measure of how fast items depart a process: numerous of work items per unit of time (ex: 5 per week).

Imagine a scenario where we worked 10 items in 2 weeks, and 50 items are left.

“When will it be done?” - you might answer 10 weeks - but that would just be another average mistake.

When it comes to estimating when all work items will be done, not even advanced probability can help us, because we don’t have all the numbers and variables available.

What to do then, if we want to avoid guessing?

We can apply Monte Carlo Simulation method: simulate the work hundreds or thousands of times to obtain a simulation of the probability.

Here is how it generally works:

1. Define a probability distribution of possible inputs
2. Randomly select values from the input distribution and perform a computation (work simulation) for those inputs
3. Repeat step 1-2 as much times as needed to have a good amount of data
What to do in practice?

1. Calculate the throughput of our process: we can use the same data we need for cycle time; take the earliest and latest date of completion of your item, then for each of those dates count the number of items that finished in that date - this is our throughout for every time unit, and this data will be the input distribution for MCS
2. RANDOMLY select values from the input distribution and perform a computation, for example, lets say we want to forecast how long it takes 100 items to finish, we randomly take one of our throughput from the past and assign it to the next day, and the day after, and so on until we reach 100 items: the date of the 100th item is our first value;
3. we repeat this until we have enough data (meaning histogram of result doesn’t change much with new inputs)
How to interpret the resulting histogram?

Since every point in the histogram is one simulation, the sum of those points (the height of the bar) is the total number of simulations.

We can use this property at our advantage: to identify dates that give us 50% chance, we need to count until we achieve half the numbers of simulations.




### Percentiles are forecasts
In the previous image example, total is 31, and we achieve 65% (20 items) at 4th column. Meaning we have 65% chances of finishing it on the 4th day, or before.

Stating “on or before” is super important.


### How many can I get done?
The approach to answer this question is similar but with some nuances.

This time, stop the simulation when you hit the target date - and this time, you don’t track dates, but number of items achieved.

Approach the percentile at the opposite way: “x items or more”.


# How to improve forecasts for multiple items - what to do

### Consistent throughput
Compare 2 teams that completed 30 items in 30 days, but with some differences

- team A completed 1 items most days, with some with 0 and some with 2 → 95% chances of completing 24 items in 30 days
- Team b completed 3 items some days but had lots more 0 days → 95% chances of completing 16 items in 30 days
That’s because a 0 items is much more likely to happens in the MSC simulations for team B.

Consistency and predictability are the most important thing.


### Reforecast based on new informations
The essence of agile: make progress even with imperfect information while being able to adapt as soon as better information comes along.


### Consider different input selections techniques
Random approach is just one way.

- select random data but only for the same day (Monday data for simulated Monday)
- Select random data but only from the same kind of day (weekday data for any weeks day, weekend data for weekends)
- Markow chain Monte Carlo - tbd?

### Pay attention to your model assumptions
Context is fundamental, also for data. Some examples:

- use input data that are coherent with the period you are forecasting
    - do not use December data for march, for example, since it contains Christmas holidays
    - Do not use data where team was smaller because of people away

# How to improve forecasts for multiple items - what not to do
Whenever a forecast give us a signal that something is wrong, we need to do something - some examples: remove scope, change date, add resources/work hours, accept higher failure risk.

What not to do:

- do not use averages → a forecast must include a range and a probability
- Do not use little’s law → mainly because it is made by averages values
- Do not estimate → as mentioned for single items forecast, just don’t
- Forget curve fitting → it’s complicated and it doesn’t matter

# How to know if you can trust your forecast
The only good usage of Little’s Law we can make is to use it to evaluate the quality of our forecast.

Little’s law (in Operations flavor): Average Cycle Time = Average WIP / Average Throughput

But for this formula to make sense, there are assumptions that must be met:

- the formula starts from queueing theory
- it’s a relationship of averages
- a steady state of the system to measure the averages
- A period of time under observation / measurement
- Calculation performed with consistent units
In general, the more thing you work on at any given time, the more it is going to take for each of those things to finish on average.

Using Kanban is not enough to meet the law:

- WIP limits of columns might not affect global WIP
- Limits should be respected then
- You need to constantly pull work
SIZE DOES NOT MATTER: There is not need for work items to be of the same size. two main reasons:

1. Little’s law works on averages
2. Variability does not have a big impact on predictability (usually big negative impacts comes from high WIP, among others)
Little’s law is about measurement, not forecasting. It works on the past, not on the future.

Also, it is about averages, and we already stated not to use averages to forecast.


# Visualize system stability
Cumulative Flow Diagram (CFD).

- it always have a frequency on the X axis
- Y axis has a cumulative count of items in the process
- Top line represents the cumulative arrivals, while bottom line represents the cumulative departures
- It’s cumulative, so no line can ever decrease
- It’s only about WIP, not backlog
- The vertical distance between two lines is the WIP between those steps in the flow
- The horizontal distance between two lines is the AVG cycle time
- Shows what has happened

# Improve system stability
- little’s law assumption #1: avg input (arrival rate) of a process should equal avg output (departure rate)→ <parallel lines in a CFD, meaning constant WIP>
- little’s law assumption #2: all work that is started will eventually be completed and exit the system → start finishing, stop starting
- little’s law assumption #4: AVG WIP should remain constant
How much data is needed to start?

- rule of 5: 5 items average covers 93% of cases
- Uniform distribution requires 11 data point to understand the data distribution

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*



========8<======== ID: working-backwards ========
TITLE: Working backwards
AUTHOR: ['Colin Bryar', 'Bill Carr']
TOPICS: ['product-development']
SOURCE: {'type': 'book', 'url': ''}
STUDY: {'method': 'full_reading', 'started_at': None, 'completed_at': None}
PATH: /sessions/rcw-01tqfuuqm8d5vfntqqydxjnh/mnt/study/raw/knowledge/book/working-backwards/content.md
---BODY---

# Working backwards

## Summary

The nature of this principles is borne out into processes and practices throughout the company.

*(sintesi auto-estratta dal contenuto catturato — da rifinire)*

## Key Concepts

[https://summaries.com/blog/working-backwards](https://summaries.com/blog/working-backwards)



# Amazon leadership principles
The nature of this principles is borne out into processes and practices throughout the company.

1. customer obsession: leaders start with the customer and work backwards. They obsess over customers.
2. Ownership: leaders are owners. They think long term. They don’t sacrifice long term for short term. They never say “that’s not my job”.
3. Invent and simplify: leaders expect and require innovation and invention from their team, and always find a way to simplify.
4. Are right, a lot. Leaders are right a lot. They have strong judgement and good instincts.
5. Learn and be curious: leaders are never done learning and always seek to motive theirselves.
6. Hire and develop the best: leaders raise the performance bar with every hire and promotion.
7. Insist on the highest standards: leaders have relentlessly high standards - some may think they are unreasonably high.
8. Think big: leaders create and communicate a bold direction that inspires results. They think differently and look around corners for ways to serve customers.
9. Bias for Action: speed matters in business. Many decisions and actions are reversible: value calculated risk taking.
10. Frugality: do more with less.
11. Earn trust: listen attentively, speak candidly, and treat others respectfully.
12. Dive deep: stay connected to details, audit frequently, and be skeptical when metrics and anecdotes differ.
13. Have backbone, disagree and commit: leaders do not compromise for the sake of social cohesion, but they commit wholly once a decision is taken.
14. Deliver results: focus on they key inputs for business.
Amazon relies on autonomous single threaded teams.

Amazon year planning is expressed in SMART high level goals .

The compensation strategy reinforces the long term thinking.


# Hiring
- Remove personal bias
- Bar raiser
    - Job Description: specific and focused.
    - Resume Review
    - Phone Screen
    - In-House Interview
    - Written Feedback
    - Debrief/Hiring Meeting
    - Reference Check
    - Offer Through Onboarding


---


### 6 Amazonian Principles and Processes


---

**1. Principle #1 — Have established leadership principles.** Jeff Bezos wrote Amazon's fourteen leadership principles early on to guide the company's new hires. They have now become infused into everything Amazon does. Develop a set of leadership principles you believe in, and then build mechanisms and processes which will reinforce them day by day.

**2. Principle #2 — Use hiring to progressively raise the bar.** Amazon's distinctive hiring process is to have a Bar Raiser involved. His job is to make sure you're hiring smarter and better people over time, and not overlooking faults because you're swamped with work and need bodies urgently.

**3. Principle #3 — Organize to have single-threaded leaders.** For every Amazon project or initiative, a single leader is appointed who focuses on that project alone. You also need team members who likewise have a singular focus on making that project work. Multi-tasking does not happen at Amazon.

**4. Principle #4 — Communicate with narratives and six-pagers.** Powerpoint is for entertainment. To communicate complex information, prepare [six-page narratives](https://www.larksuite.com/en_us/blog/amazon-6-pager), and have everyone read those at the start of each meeting. Composing those forces people to get specific, to learn how to articulate, and sharpens their thinking.

**5. Principle #5 — Start with the desired customer experience.** Always work backwards from the desired customer experience when you develop new ideas or products. The best way to do that is often to write a press release and FAQs (Frequently Asked Questions). Use those tools to resolve tough issues right up-front.

**6. Principle #6 — Manage your business inputs, not outputs.** Put the customer at the center of all performance metrics. Emphasize inputs you do manage and control, and activities which will yield the desired results. Do that well, and the output metrics like revenue and stock price will take care of themselves.


### Key Takeaways


---

1. Always start with what customers want, and work backwards from there. Find a problem, and solve it, rather than having a solution looking for a problem to solve.
2. Be customer obsessed, not competitor obsessed. Look after the interests of your customers first, and everything else will fall into place.
“I believe we are the best place in the world to fail (we have plenty of practice!), and failure and invention are inseparable twins. To invent you have to experiment, and if you know in advance that it’s going to work, it’s not an experiment. Most large organizations embrace the idea of invention, but are not willing to suffer the string of failed experiments necessary to get there.” -- Jeff Bezos, 2015

## My Notes

*(spazio per note personali)*

## My Takeaways

*(spazio per takeaway personali)*

## Connections

*(nessuna connessione rilevata automaticamente)*

## Sources

*(nessuna fonte)*

