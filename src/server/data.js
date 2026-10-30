export const heroMetrics = [
  {
    label: "Focus",
    value: "AI products",
    detail: "Developer tooling, enterprise workflows, and automation systems.",
  },
  {
    label: "Mode",
    value: "Build end-to-end",
    detail: "From product thinking and architecture to shipping working systems.",
  },
  {
    label: "Edge",
    value: "Engineer + founder",
    detail: "Technical depth combined with product instincts and business context.",
  },
];

// The seven invariants, each carrying where it was actually learned. This
// replaces an unattributed four-line list that nothing rendered; the same array
// now drives both the About page and the console's invariants section.
export const invariants = [
  {
    title: "Production before demos",
    detail:
      "A model response is only one part of a system. Identity, permissions, failure handling, cost, evaluation, and operations determine whether it is useful.",
    learned: "Enterprise AI delivery",
  },
  {
    title: "Evidence over vibes",
    detail:
      "You cannot improve what you do not measure, and you cannot measure what you never defined. The definition of good has to exist before the output does.",
    learned: "The work journal, and the essay that came out of it",
  },
  {
    title: "Own the whole system",
    detail:
      "The strongest solutions connect product intent, AI behaviour, backend services, cloud infrastructure, and the user workflow.",
    learned: "The document agent, end to end",
  },
  {
    title: "Curation over accumulation",
    detail:
      "Fewer inputs, deeper processing. Automation should serve judgement, not replace it.",
    learned: "Replacing a twenty-feed firehose with a curated desk",
  },
  {
    title: "Know your data before you generate",
    detail:
      "Generation quality is decided upstream of the model. Audit the source before you tune the prompt.",
    learned: "Auditing source data before building a generation workflow",
  },
  {
    title: "Sunset without sentiment",
    detail: "Killing a product on purpose is a skill, not a failure.",
    learned: "ReqBeam and Boansel, September 2026",
  },
  {
    title: "Explain like a teacher",
    detail: "If a system cannot be explained, it cannot be trusted.",
    learned: "Three years of teaching across India and Ghana",
  },
];

export const featuredWork = [
  {
    name: "Enterprise AI product and platform delivery",
    context: "AlphaFMC · Financial services",
    status: "Senior AI Engineer · Jan 2026–present",
    description:
      "Leading hands-on delivery of internal AI products and the shared infrastructure behind them: model access, identity, evaluation, routing, deployment, and operational reliability.",
    scope: ["Internal AI products", "Model gateways", "Identity", "Cloud delivery"],
    href: "/work/enterprise-ai",
  },
  {
    name: "ExplainGitHub",
    context: "Independent developer tool",
    status: "In development — first paying users",
    description:
      "An AI repository intelligence platform for understanding unfamiliar codebases, architecture, and implementation decisions.",
    scope: ["Repository ingestion", "Codebase Q&A", "Developer UX"],
    href: "/work/explaingithub",
  },
  {
    name: "ReqBeam",
    context: "Independent developer product",
    status: "Sunset",
    description:
      "AI-assisted API workspace — sunset in September 2026 to focus on ExplainGitHub.",
    scope: ["API testing", "Response analysis", "Agent workflows"],
    href: "/work/reqbeam",
  },
];

export const currentBuilds = [
  {
    name: "Personal AI Systems Lab",
    slug: "personal-ai-systems-lab",
    stage: "Exploration",
    summary:
      "A practical personal AI environment for testing persistent agents, multi-model workflows, local inference, model routing, and coding delegation across local and cloud systems.",
    focus: ["Persistent agents", "Local models", "Model routing", "Developer workflows"],
    statusNote: "Active hands-on research and infrastructure experimentation.",
    accent: "from-[#18181b] via-[#3f3f46] to-[#1F4FD8]",
  },
  {
    name: "ExplainGitHub",
    slug: "explaingithub",
    stage: "In development — first paying users",
    summary:
      "Repository understanding with AI, designed to help developers move from unfamiliar codebases to useful context faster.",
    focus: ["Repository intelligence", "LLM workflows", "Developer UX"],
    statusNote: "Active independent product development.",
    accent: "from-[#EB5939] via-[#c64a30] to-[#0d0d0d]",
  },
  {
    name: "ReqBeam",
    slug: "reqbeam",
    stage: "Sunset",
    summary:
      "AI-assisted API workspace — sunset in September 2026 to focus on ExplainGitHub.",
    focus: ["Product workflows", "Collaboration", "Backend systems"],
    statusNote: "Early product and workflow exploration.",
    accent: "from-[#0d0d0d] via-[#1d3557] to-[#457b9d]",
  },
  {
    name: "OpenWebUI AI Operating System",
    slug: "openwebui-operating-system",
    stage: "In development",
    summary:
      "Custom tools and knowledge workflows for organising conversations, analysing recent work, managing Markdown knowledge, and producing recurring task summaries.",
    focus: ["OpenWebUI", "Custom tools", "Knowledge workflows"],
    statusNote: "Active platform and workflow experimentation.",
    accent: "from-[#1f2937] via-[#374151] to-[#1F4FD8]",
  },
  {
    name: "RepoFlicks",
    slug: "repoflicks",
    stage: "Shipped",
    summary:
      "A social-feed-style product for discovering open-source repositories, built and deployed with production and development environments.",
    focus: ["Open-source discovery", "Next.js", "Cloud Run"],
    statusNote: "Launched and used for early product-growth experiments.",
    accent: "from-[#16213e] via-[#533483] to-[#EB5939]",
  },
  {
    name: "Boansel",
    slug: "boansel",
    stage: "Sunset",
    summary:
      "A booking and payments platform sunset in September 2026 to focus on ExplainGitHub.",
    focus: ["Transactions", "Operations", "Product execution"],
    statusNote: "Booking and payments product work.",
    accent: "from-[#1b4332] via-[#2d6a4f] to-[#40916c]",
  },
];

export const caseStudies = [
  {
    id: "cs-00",
    slug: "enterprise-ai",
    heading: "Enterprise AI at AlphaFMC",
    category: "Enterprise AI",
    status: "Professional work",
    date: "Jan 2026 - Present",
    subHeading:
      "I build internal AI tools for financial-services teams and the shared services that make those tools secure and maintainable.",
    summary:
      "As a Senior AI Engineer, I build internal AI products and the shared services behind them. My work spans product workflows, model access, identity, evaluation, backend integration, and production delivery.",
    problem:
      "Teams need AI tools that fit real work. Building each product separately would repeat the same work on authentication, model access, evaluation, deployment, and support.",
    solution:
      "I help deliver internal AI products on shared services for identity, model routing, evaluation, storage integration, and cloud releases. The work also includes reviewing source data and defining how experts evaluate model output before a workflow reaches production.",
    outcome:
      "Shared services give internal AI workflows a more consistent foundation for access, evaluation, deployment, and support. Expert review remains part of how document workflows are delivered.",
    role: "Senior AI Engineer",
    stack: ["Azure OpenAI", "Claude", "Gemini", "AWS Bedrock", "LiteLLM", "OpenWebUI"],
    responsibilities: [
      "Hands-on delivery of internal AI products, model-enabled workflows, and shared platform services.",
      "Multi-provider model integration, model-gateway architecture, and provider-specific production debugging.",
      "Identity, authentication, access control, evaluation, and enterprise data-protection considerations.",
      "Backend AI services, cloud releases, operational debugging, and observability-oriented delivery.",
      "Technical mentoring, architecture reviews, and cross-functional decisions with product, DevOps, IT, and engineering stakeholders.",
    ],
    architecture: [
      "Internal users and product workflows initiate requests through approved AI interfaces.",
      "Identity and access controls establish who can use the system.",
      "Shared application services apply product context, workflow logic, and evaluation boundaries.",
      "A model gateway centralises routing, model abstraction, provider access, and operational controls.",
      "Approved model providers execute workloads while delivery systems retain visibility into failures, cost, and behaviour.",
    ],
    constraints: [
      "Financial-services security and governance expectations shape every integration.",
      "The platform must support multiple internal products and workflows without coupling them to one interface.",
      "Provider abstraction must not hide operational failures, evaluation gaps, or make debugging harder.",
      "Tool-calling behaviour and request formats differ across model providers.",
      "Public discussion must protect employer, client, and implementation confidentiality.",
    ],
    decisions: [
      "Treat core AI capabilities as shared infrastructure rather than application-specific integration.",
      "Keep identity and permissions at the system boundary instead of relying on prompt-level controls.",
      "Separate user interfaces, application workflows, evaluation, routing, and model providers into distinct responsibilities.",
      "Prefer native tool-calling patterns while handling provider-specific compatibility explicitly.",
      "Use repeatable deployment and release practices so environments can be operated consistently.",
    ],
    learnings: [
      "Enterprise AI adoption is a product, infrastructure, and integration problem—not only a model problem.",
      "Identity, evaluation, failure handling, and operational ownership determine whether internal AI earns trust.",
      "A useful abstraction lets product teams move faster while preserving enough visibility to diagnose the system.",
    ],
  },
  {
    id: "cs-01",
    slug: "personal-ai-systems-lab",
    heading: "Personal AI Systems Lab",
    category: "AI Infrastructure",
    status: "Ongoing experimentation",
    date: "Current",
    subHeading:
      "A hands-on environment for testing what it takes to make personal AI systems useful across agents, local models, cloud providers, coding workflows, and recurring tasks.",
    summary:
      "An evolving engineering lab for persistent agents, multi-provider model routing, local inference, coding delegation, and the practical operating patterns behind useful personal AI systems.",
    problem:
      "Most personal AI setups are isolated chats or disconnected tools. The useful challenge is connecting models, context, tasks, local infrastructure, and coding workflows without creating a system that is harder to operate than the work it is meant to help with.",
    solution:
      "Experiment with a practical stack of persistent agents, local and hosted models, model gateways, AI interfaces, task context, and coding delegation. Treat each experiment as a way to learn which autonomy, observability, and review patterns actually hold up.",
    outcome:
      "Built a continuing environment for testing personal AI workflows in real conditions, with clearer opinions about model routing, local inference, agent autonomy, task handoff, and the limits of always-on automation.",
    role: "Independent builder and AI engineer",
    stack: ["Agents", "Local models", "LiteLLM", "OpenWebUI", "Docker", "OpenAI-compatible APIs"],
    responsibilities: [
      "Designing and operating persistent-agent and personal-workflow experiments.",
      "Evaluating local and hosted models for latency, capability, cost, and operational fit.",
      "Building model-routing and OpenAI-compatible interfaces across different backends.",
      "Testing coding delegation, task handoffs, recurring work, and human-review boundaries.",
      "Documenting failures and turning experiments into more dependable working patterns.",
    ],
    architecture: [
      "A personal AI interface receives questions, tasks, and working context.",
      "An orchestration layer routes work to agents, coding tools, or model backends.",
      "A model gateway provides a common interface across hosted and local providers.",
      "Local inference and cloud models handle workloads with different cost, latency, and capability needs.",
      "Logs, task state, and human review make the system observable rather than merely autonomous.",
    ],
    constraints: [
      "Personal systems need to stay useful without becoming another full-time operations burden.",
      "Local hardware, model quality, and latency place real limits on always-on inference.",
      "Agent autonomy needs clear permission and review boundaries for consequential actions.",
      "Different providers and local runtimes expose inconsistent tools, formats, and operational behaviour.",
    ],
    decisions: [
      "Use an OpenAI-compatible gateway boundary instead of coupling every experiment to one provider.",
      "Treat persistent agents as an operating-systems problem involving state, monitoring, and recovery—not only prompting.",
      "Keep human review at the boundary where an action becomes expensive, external, or difficult to reverse.",
      "Use experiments to test a concrete workflow before adding more autonomy or tools.",
    ],
    learnings: [
      "More agents do not automatically create more leverage; useful systems need clear ownership and review paths.",
      "Local models are most valuable when they are part of a deliberate routing and privacy strategy, not a novelty layer.",
      "The quality of task context, recovery behaviour, and handoffs matters as much as the model selected for a workflow.",
    ],
  },
  {
    id: "cs-02",
    slug: "explaingithub",
    heading: "ExplainGitHub",
    category: "Developer AI",
    status: "In development — first paying users",
    date: "Current",
    subHeading:
      "I founded ExplainGitHub to help developers understand unfamiliar codebases without piecing the architecture together file by file.",
    summary:
      "ExplainGitHub turns repository structure and source files into explanations developers can navigate and question. It is in active development and has its first paying users.",
    problem:
      "When joining a project or opening a new repository, developers have to trace behavior across many files before they can make a confident change.",
    solution:
      "I built workflows for GitHub authentication, repository ingestion, multi-file questions, and source-aware explanations. The product builds context in stages so answers stay tied to relevant code paths.",
    outcome:
      "The product has its first paying users. Current development focuses on the accuracy and traceability of explanations, especially for larger repositories.",
    role: "Founder, product builder, and AI engineer",
    stack: ["GitHub OAuth", "Repository ingestion", "LLM orchestration", "Backend workflows", "Product UX"],
    responsibilities: [
      "Product ideation, feature scoping, roadmap design, and developer-experience decisions.",
      "GitHub authentication, repository ingestion, and multi-file codebase question answering.",
      "Repository context management, code explanation, and architecture understanding.",
      "Large-repository handling and source-aware answer design.",
    ],
    roadmap: [
      "Saved conversations and bring-your-own-key model support.",
      "Architecture diagrams generated from repository context.",
      "GitLab, Bitbucket, and Azure DevOps repository support.",
      "Browser-extension workflows for repository understanding in context.",
    ],
    architecture: [
      "Ingest repository structure and relevant files.",
      "Classify and prioritize code paths for explanation.",
      "Generate summaries, architecture context, and developer-facing guidance.",
      "Present outputs in a way that reduces onboarding time and search cost.",
    ],
    constraints: [
      "Repositories contain more context than can be sent to a model at once.",
      "Generated explanations need traceability back to files and code paths.",
      "Different repository structures require flexible ingestion rather than fixed assumptions.",
      "The product must reduce search effort without replacing normal engineering judgement.",
    ],
    decisions: [
      "Prioritise repository structure and important code paths before generating explanations.",
      "Build context in stages instead of relying on one large prompt.",
      "Keep outputs scoped to concrete developer questions and navigational tasks.",
      "Design for source visibility so developers can verify generated context.",
    ],
    learnings: [
      "Useful AI products need sharp scoping, not maximal generation.",
      "Repository context quality matters more than flashy output.",
      "Developer trust comes from precision, traceability, and speed.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
    imageLink:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
    imageLinkSec:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    textsec:
      "ExplainGitHub applies repository parsing and language models to a concrete developer workflow: understanding an unfamiliar codebase.",
    link: "explaingithub",
  },
  {
    id: "cs-03",
    slug: "reqbeam",
    heading: "ReqBeam",
    category: "Workflow Product",
    status: "Sunset",
    date: "September 2026",
    subHeading:
      "An AI-native workspace for understanding, testing, documenting, and debugging APIs.",
    summary:
      "An AI-assisted API workspace sunset in September 2026 to focus on ExplainGitHub.",
    problem:
      "Requirements, API iterations, and product feedback loops often break down across tools, threads, and handoffs.",
    solution:
      "Design an AI-assisted API workspace that can understand an endpoint, help create requests, generate tests, analyse responses, and preserve debugging context.",
    outcome:
      "The product was sunset in September 2026 so I could focus on ExplainGitHub. The work clarified how much API debugging depends on visible state, ownership, and shared context.",
    role: "Product builder and technical lead",
    stack: ["Next.js", "Backend APIs", "AI test generation", "Response analysis", "Product systems"],
    responsibilities: [
      "Product ideation, competitive research, product scope, and PRD design.",
      "API understanding, request creation, test generation, and response-analysis workflows.",
      "AI-assisted API documentation and developer collaboration concepts.",
      "Technical feasibility and integration with existing developer workflows.",
    ],
    roadmap: [
      "Agent-based API testing and debugging workflows.",
      "Shared collaboration context for product and engineering teams.",
      "Deeper AI-assisted documentation and test maintenance.",
    ],
    architecture: [
      "Capture an API definition, request, or endpoint as structured context.",
      "Generate and refine requests, tests, and documentation with AI assistance.",
      "Execute requests and analyse responses, errors, and behavioural differences.",
      "Preserve findings and collaboration context around shared API artifacts.",
    ],
    constraints: [
      "Requirements and implementation context are distributed across tools and conversations.",
      "The product must support iteration without becoming another documentation burden.",
      "Ownership and state need to remain visible across product and engineering roles.",
    ],
    decisions: [
      "Make shared artifacts the centre of collaboration rather than chat threads.",
      "Represent state and ownership explicitly in the workflow.",
      "Keep the early product narrow until the core handoff problem is validated.",
    ],
    learnings: [
      "Workflow tools win when they remove ambiguity, not when they add features.",
      "Clear state and ownership are product advantages.",
      "Collaboration products need strong information design as much as strong engineering.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    imageLink:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    imageLinkSec:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80",
    textsec:
      "ReqBeam examines a common product-engineering problem: requirements and implementation context becoming fragmented across tools.",
    link: "reqbeam",
  },
  {
    id: "cs-04",
    slug: "repoflicks",
    heading: "RepoFlicks",
    category: "Developer Product",
    status: "Shipped",
    date: "Launched",
    subHeading:
      "I built and launched a visual feed for discovering open-source repositories, from the first product flow through production deployment.",
    summary:
      "RepoFlicks is a shipped repository-discovery product. I owned the design, GitHub sign-in, onboarding, application build, deployment, and early growth experiments.",
    problem:
      "Search results and static lists make it hard to browse unfamiliar open-source projects and decide which ones are worth exploring.",
    solution:
      "I built a feed-based experience with GitHub sign-in, structured repository data, media handling, and onboarding, then deployed it with separate development and production environments.",
    outcome:
      "RepoFlicks launched as a working product. Running it brought practical lessons in onboarding, user acquisition, analytics, deployment, and infrastructure costs.",
    role: "Founder and product engineer",
    stack: ["Next.js", "GitHub OAuth", "Supabase", "Cloudinary", "Docker", "Google Cloud Run"],
    responsibilities: [
      "Product positioning, user-flow design, authentication, onboarding, and launch planning.",
      "Next.js application development with Supabase-backed product data.",
      "Cloudinary media handling and GitHub OAuth integration.",
      "Docker and Cloud Run deployment with GitHub Actions CI/CD.",
      "Production and development environments, analytics, user acquisition, and infrastructure-cost management.",
    ],
    architecture: [
      "Users authenticate through GitHub OAuth and enter the onboarding flow.",
      "Repository and user data is normalised into Supabase-backed application records.",
      "The Next.js product renders a visual discovery feed and repository detail workflows.",
      "Cloudinary supports media delivery for product and repository presentation.",
      "Docker, GitHub Actions, and Cloud Run support separate development and production delivery.",
    ],
    constraints: [
      "GitHub authentication and external repository data must remain reliable across environments.",
      "A feed product needs useful discovery and onboarding before network effects exist.",
      "Development and production services create operational and cost-management overhead.",
      "Early analytics must guide product decisions without overstating traction.",
    ],
    decisions: [
      "Use a familiar social-feed interaction model to lower the cost of repository discovery.",
      "Separate development and production deployments to protect live user workflows.",
      "Use managed application and media services to keep founder-led operations tractable.",
      "Treat acquisition, analytics, and infrastructure cost as product responsibilities.",
    ],
    learnings: [
      "Shipping the product exposed operational questions that do not appear during local development.",
      "Authentication and onboarding are central product flows, not supporting implementation details.",
      "Infrastructure cost and user acquisition need attention before a product reaches meaningful scale.",
    ],
  },
  {
    id: "cs-05",
    slug: "openwebui-operating-system",
    heading: "OpenWebUI AI Operating System",
    category: "AI Platform Tooling",
    status: "Internal tooling",
    date: "Ongoing",
    subHeading:
      "Custom tools and workflows that turn OpenWebUI into a personal and team operating layer for conversations, knowledge, and recurring work.",
    summary:
      "A collection of Docker-based deployments, API investigations, custom tools, and knowledge workflows built around an open-source AI platform.",
    problem:
      "AI conversations accumulate useful context, but normal chat interfaces make it difficult to organise, review, summarise, and turn that context into recurring operational workflows.",
    solution:
      "Extend OpenWebUI with custom tools for chat organisation, time-bounded analysis, folder summaries, Markdown knowledge management, monthly notes, and daily task workflows.",
    outcome:
      "Built an experimental operating layer for organising conversations and producing reusable knowledge, while evaluating the limits of platform APIs, plugins, local environments, and hosted deployment.",
    role: "AI platform engineer and workflow designer",
    stack: ["OpenWebUI", "Python", "Docker", "OpenWebUI APIs", "Markdown", "Automation workflows"],
    responsibilities: [
      "OpenWebUI deployment, administration, API exploration, and open-source platform evaluation.",
      "Tools for moving chats into folders and analysing the previous seven days of conversations.",
      "Folder-level summarisation and Markdown knowledge-file creation, editing, and deletion.",
      "Monthly-note updates, daily task summaries, and progress or completion checks.",
      "Experiments across local and hosted AI environments.",
    ],
    roadmap: [
      "SharePoint-backed knowledge and document workflows.",
      "Telegram-triggered automations and external event handling.",
      "Calendar-aware planning and folder-level persistent context.",
      "A more explicit personal and team operations control layer.",
    ],
    architecture: [
      "A user or scheduled workflow initiates an action through OpenWebUI.",
      "A custom tool reads approved chat, folder, or task context through platform APIs.",
      "The workflow analyses conversations and produces structured summaries or actions.",
      "Markdown files and folder organisation persist reusable knowledge.",
      "Daily and monthly outputs feed back into planning and progress-review workflows.",
    ],
    constraints: [
      "Chat and knowledge data requires clear boundaries, permissions, and privacy handling.",
      "Open-source platform APIs and plugin behaviour can change across versions.",
      "Scheduled automation must remain understandable and correct when context is incomplete.",
      "Local and hosted environments have different deployment, access, and maintenance trade-offs.",
    ],
    decisions: [
      "Build small single-purpose tools instead of one opaque autonomous agent.",
      "Use folders as an explicit context and organisation boundary.",
      "Store reusable knowledge in readable Markdown rather than hidden application state.",
      "Keep external triggers and enterprise integrations as planned extensions until core workflows are dependable.",
    ],
    learnings: [
      "A useful AI operating system depends more on context organisation than on autonomous behaviour.",
      "Readable knowledge artifacts make automated workflows easier to trust and maintain.",
      "Open-source platforms accelerate experimentation but require careful API and deployment evaluation.",
    ],
  },
  {
    id: "cs-06",
    slug: "arya",
    heading: "Arya",
    category: "Applied AI System",
    status: "Shipped",
    date: "2023",
    subHeading:
      "An AI Acharya designed to deliver Vedic guidance through multilingual conversational experiences across modern channels.",
    summary:
      "A shipped multilingual AI product built around retrieval, speech, and messaging-platform access for a specialised knowledge domain.",
    problem:
      "Traditional spiritual and cultural guidance is often hard to access in interactive, always-available, and multilingual digital formats.",
    solution:
      "Build an AI assistant that combines domain knowledge retrieval, speech interfaces, and messaging-platform accessibility.",
    outcome:
      "Delivered as a working product across text, audio, messaging channels, and APIs, with retrieval quality central to the user experience.",
    role: "AI and backend engineer",
    stack: ["OpenAI", "LangChain", "Python", "Azure VM", "Speech interfaces"],
    architecture: [
      "Ingest domain material from structured and document sources.",
      "Retrieve relevant context for spiritual and knowledge queries.",
      "Support multilingual text and audio interaction.",
      "Distribute through Telegram, WhatsApp, and API interfaces.",
    ],
    constraints: [
      "Answers depend on a specialised knowledge domain where retrieval quality affects trust.",
      "Users need both multilingual and multimodal access.",
      "The same assistant experience must work across messaging platforms and APIs.",
      "Speech and messaging channels introduce different latency and interaction expectations.",
    ],
    decisions: [
      "Ground responses in retrieved domain material rather than model memory alone.",
      "Keep the core knowledge workflow independent from channel-specific integrations.",
      "Support text and speech at the interface layer while sharing backend services.",
      "Use familiar messaging channels to reduce adoption friction.",
    ],
    learnings: [
      "Domain-specific trust depends heavily on retrieval quality.",
      "Multichannel distribution changes how AI products are adopted.",
      "Speech and messaging layers can turn a narrow domain tool into a practical user experience.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=80",
    imageLink:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=80",
    imageLinkSec:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1600&q=80",
    textsec:
      "Arya is a shipped AI application that combines a specialized knowledge domain with practical multimodal distribution.",
    link: "arya",
  },
];

export const profolio = caseStudies;

export const featuredWorkSlugs = [
  "enterprise-ai",
  "personal-ai-systems-lab",
  "explaingithub",
  "reqbeam",
  "repoflicks",
  "openwebui-operating-system",
];

export const otherProducts = [
  {
    name: "LaunchRail",
    status: "Exploration",
    summary:
      "An exploration into reducing the gap between a working local application and a deployable cloud service, with infrastructure setup and repeatable delivery treated as part of the product experience.",
    focus: ["Cloud deployment", "Developer experience", "Infrastructure automation"],
    lesson: "Infrastructure setup is part of the product experience, not a step after it."
  },
  {
    name: "Sarkari Samadhan",
    status: "Exploration",
    summary:
      "A citizen-help product direction for making public-service processes, grievance routes, rights information, and government guidance easier to understand and act on.",
    focus: ["Civic tech", "Public information", "Knowledge systems"],
    lesson: "Civic tech needs distribution more than it needs features."
  },
  {
    name: "Personal AI Systems Lab",
    status: "Exploration",
    summary:
      "A hands-on environment for experimenting with persistent personal agents, local models, multi-provider routing, coding delegation, and the operating patterns that make AI systems useful over time.",
    focus: ["Agents", "Local inference", "Model routing", "AI infrastructure"],
  },
  {
    name: "Boansel",
    status: "Sunset · September 2026",
    summary:
      "A one-link booking and payments platform for experts and creators, covering appointment scheduling, payment collection, monthly payouts, and Indian payment-gateway evaluation.",
    focus: ["Creator monetisation", "Scheduling", "Payments", "Founder-led product development"],
    lesson: "Payment mechanics teach you what users actually value."
  },
  {
    name: "SageRai",
    status: "Exploration",
    summary:
      "A privacy-sensitive personal-finance assistant for extracting UPI and SMS transaction data, categorising expenses, and turning financial activity into understandable insights.",
    focus: ["Indian fintech", "Transaction analysis", "Expense categorisation", "Privacy"],
    lesson: "In fintech, data trust is the product."
  },
  {
    name: "Instant EduDoc",
    status: "Shipped",
    summary:
      "An AI-powered educational document generator for structured CBSE notes, combining Gemini, automated content formatting, PDF generation, and student-facing workflows.",
    focus: ["Gemini", "Document generation", "WeasyPrint", "Education"],
    lesson: "Content quality beats generation speed."
  },
  {
    name: "Arya",
    status: "Shipped · 2023",
    summary:
      "A multilingual conversational AI product combining retrieval, speech interfaces, messaging platforms, APIs, and production deployment for a specialised knowledge domain.",
    focus: ["Retrieval", "Multilingual AI", "Speech", "Backend architecture"],
    href: "/work/arya",
  },
];

export const capabilityAreas = [
  {
    title: "Enterprise AI infrastructure",
    detail: "Multi-provider gateways, model routing, identity, permissions, security, observability, cost, latency, and production deployment.",
  },
  {
    title: "AI agents and tool calling",
    detail: "Native tool use, provider compatibility, MCP research, orchestration, permission-aware workflows, and automation boundaries.",
  },
  {
    title: "Cloud and backend systems",
    detail: "Python, FastAPI, Next.js, APIs, OAuth, Docker, Azure, AWS, Google Cloud, CI/CD, environments, and operational debugging.",
  },
  {
    title: "Developer products",
    detail: "Repository intelligence, API testing, authentication, ingestion, product workflows, onboarding, analytics, and developer experience.",
  },
  {
    title: "Secure AI delivery",
    detail: "Data privacy, authentication, authorisation, prompt and data exposure risks, production security, and enterprise deployment constraints.",
  },
];

export const researchAreas = [
  {
    title: "Model gateways and provider behaviour",
    summary: "How abstraction layers preserve portability without obscuring provider-specific capabilities and failures.",
    topics: ["LiteLLM and AWS Bedrock", "Claude native tool calling", "OpenAI-compatible APIs", "Cost and latency trade-offs"],
  },
  {
    title: "Permission-aware AI systems",
    summary: "How agents, tools, and retrieval systems should handle identity, data boundaries, and enterprise security.",
    topics: ["Agent permissions", "Enterprise AI security", "Secure RAG", "Data-governance practices"],
  },
  {
    title: "Open-source AI platforms",
    summary: "Evaluating self-hosted interfaces and extensibility models for internal AI products and knowledge workflows.",
    topics: ["OpenWebUI APIs", "Plugin architecture", "Local-model environments", "Hosted versus self-managed systems"],
  },
  {
    title: "AI deployment and operations",
    summary: "Exploring ways to move AI applications from local development into secure, shareable, supportable environments.",
    topics: ["One-click AI deployment", "Customer cloud connections", "Agent operations control planes", "Secure AI workspaces"],
  },
  {
    title: "Developer workflow intelligence",
    summary: "Research around repository understanding, API testing, evaluation, and AI-native software-development workflows.",
    topics: ["Repository context", "API-testing agents", "Evaluation methodology", "AI-native software lifecycle"],
  },
];

export const communityHighlights = [
  {
    title: "Programming With Maurya",
    detail: "Founded and operated a programming-education initiative covering Python, data science, applied AI, internships, and learner support.",
  },
  {
    title: "Teaching and mentoring",
    detail: "Delivered workshops, live courses, technical mentoring, career guidance, educational content, books, and beginner-focused explanations.",
  },
  {
    title: "Technical leadership",
    detail: "Owned work across AI, backend, DevOps, product, documentation, technical reviews, stakeholder communication, and solution research.",
  },
];

export const proofPoints = [
  {
    title: "Enterprise AI",
    detail:
      "Experience building and integrating AI systems inside financial-services environments at AlphaFMC.",
  },
  {
    title: "Founder mindset",
    detail:
      "Independent product work brings founder-level ownership to technical and product decisions.",
  },
  {
    title: "Mentorship and community",
    detail:
      "Teaching, live sessions, and public-facing learning content are part of the brand, not side notes.",
  },
];

export const writingFocus = [
  "How developer AI products should handle trust, context, and precision",
  "Lessons from enterprise AI delivery and infrastructure tradeoffs",
  "MCP, agent workflows, and the difference between demos and useful systems",
];

export const timelineHighlights = [
  {
    year: "2023",
    title: "Built applied AI systems",
    detail:
      "Worked on products like Arya and expanded into automation, retrieval, and multimodal workflows.",
  },
  {
    year: "2024",
    title: "Deepened product + enterprise work",
    detail:
      "Balanced startup-style execution with enterprise-grade expectations and delivery constraints.",
  },
  {
    year: "Now",
    title: "Positioning around builder leverage",
    detail:
      "Shaping the public narrative around AI products, developer tools, and scalable systems.",
  },
];

export const companiesData = [
  {
    id: "C-01",
    companyName: "AlphaFMC",
    activeYears: "Jan 2026 - Present",
    position: "Senior AI Engineer",
    description:
      "Building internal AI products and shared services for model access, identity, evaluation, and delivery. I work with product, DevOps, IT, and security teams on production releases.",
  },
  {
    id: "C-02",
    companyName: "PWM Group",
    activeYears: "Oct 2024 - Present",
    position: "Founder & Technical Architect",
    description:
      "Designing independent AI and developer products, including ExplainGitHub, with work spanning product architecture, backend engineering, and cloud delivery.",
  },
  {
    id: "C-03",
    companyName: "Aiviq Ltd (part of AlphaFMC)",
    activeYears: "Jun 2025 - Nov 2025",
    position: "MLOps Engineer",
    description:
      "Operated Azure ML pipelines and model deployments, and deployed containerized AI services on AKS with GitHub Actions, monitoring, and secure configuration.",
  },
  {
    id: "C-04",
    companyName: "AlphaFMC",
    activeYears: "Nov 2024 - May 2025",
    position: "AI Engineer (contract)",
    description:
      "Worked on internal AI applications and model integrations, including secure deployment and production support.",
  },
  {
    id: "C-05",
    companyName: "Valdavi Educational Services Pvt. Ltd.",
    activeYears: "Oct 2023 - Oct 2024",
    position: "Head of Operations",
    description:
      "Led operations and built marketing and content workflows using Python scripts, APIs, and automation tools.",
  },
  {
    id: "C-06",
    companyName: "Kyukey Technologies Private Limited (Mokx)",
    activeYears: "2023",
    position: "AI & Backend Engineer",
    description:
      "Built Arya, a multilingual AI assistant using retrieval and speech services, then delivered it through messaging platforms and APIs.",
  },
  {
    id: "C-07",
    companyName: "Programming With Maurya",
    activeYears: "May 2020 - Oct 2024",
    position: "Founder & Mentor",
    description:
      "Led technology education and mentorship in Python, data science, and applied AI, including workshops and programs in India and Ghana.",
  },
];

export const tools = [
  {
    image:
      "https://framerusercontent.com/images/2Tn0ounIS73yGXZWXZ39oTFp7E.png?scale-down-to=512",
    alt: "python",
    name: "Python",
  },
  {
    image: "https://framerusercontent.com/images/qceh8mULsKhIOmBE6aljcRTPgBk.png",
    alt: "docker",
    name: "Docker",
  },
  {
    image:
      "https://framerusercontent.com/images/mu2xRVahpR4NM7oR3UPvdX0.png?scale-down-to=1024",
    alt: "github",
    name: "GitHub",
  },
  {
    image:
      "https://framerusercontent.com/images/ueQknVfyYs5tZ6tksqZXNmAGZw.png?scale-down-to=512",
    alt: "gcp",
    name: "GCP",
  },
  {
    image:
      "https://framerusercontent.com/images/plImIZNpyrBwoTDJNSGLD6tnAhA.png?scale-down-to=512",
    alt: "azure",
    name: "Azure",
  },
  {
    image:
      "https://images.seeklogo.com/logo-png/44/1/openai-logo-png_seeklogo-445909.png",
    alt: "openai",
    name: "OpenAI",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Anthropic_logo.svg",
    alt: "anthropic",
    name: "Anthropic",
  },
  {
    image:
      "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langgraph-color.png",
    alt: "langgraph",
    name: "LangGraph",
  },
];

export const skills = [
  {
    name: "AI Product Development",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/ai_ml_kfzr0f.png",
    alt: "AI systems, agents, and applied workflows",
  },
  {
    name: "Developer Tooling",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/frontend_xkqghb.png",
    alt: "Developer workflows, interfaces, and product design",
  },
  {
    name: "Backend & APIs",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/backend_qsi5m5.png",
    alt: "APIs, integrations, and production systems",
  },
  {
    name: "Cloud & Deployment",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/cloud_arch_grmxdd.png",
    alt: "DevOps, hosting, and secure deployment",
  },
  {
    name: "System Design",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/system_design_ql5gjp.png",
    alt: "Architecture, scale, and reliability",
  },
  {
    name: "Automation & Integrations",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/database_mgmt_wnlbd4.png",
    alt: "Workflows, data pipelines, and operational leverage",
  },
  {
    name: "Founder Execution",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/devops_kd5k0x.png",
    alt: "Shipping, iteration, and product ownership",
  },
  {
    name: "Mentorship & Education",
    image:
      "https://res.cloudinary.com/ddtfebvov/image/upload/v1710427407/api_dev_kq5gjw.png",
    alt: "Teaching, explaining, and community building",
  },
];

export const playGround = [
  {
    category: "Evaluation",
    name: "Evaluation methodology for LLM products",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    category: "Research",
    name: "AI agents and MCP workflows",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    category: "Systems",
    name: "Developer tooling experiments",
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    category: "Product",
    name: "Workflow and collaboration interfaces",
  },
  {
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80",
    category: "Writing",
    name: "Architecture notes and AI learnings",
  },
];

export const blogs = [
  {
    "postedOn": "Oct 30, 2026",
    "blogHeading": "A Stateless Agent Server Still Needs Durable Work IDs",
    "slug": "a-stateless-agent-server-still-needs-durable-work-ids",
    "postedBy": "Shivam Maurya",
    "postedAt": "AI Infrastructure",
    "content": "Making an agent endpoint stateless can simplify deployment. It does not make the work stateless. The useful boundary is to keep transport connections disposable while giving each real piece of work an explicit, durable identity.",
    "sections": [
      {
        "heading": "A connection is a poor place to hide a job",
        "paragraphs": [
          "An agent can begin a repository review, wait for an approval, call a slow provider, and return after the browser tab has disappeared. If the server remembers that work only because a particular HTTP session is still alive, a load balancer, reconnect, or deployment turns a product concern into a transport accident. The agent may lose its place, repeat an external write, or quietly start a second run.",
          "The July 2026 MCP revision makes this separation especially visible. It removes protocol-level sessions from the core and says servers that need state across calls should mint an explicit handle that the client passes back. That is a helpful direction for agent products even outside MCP: a connection can carry a request, but it should not be the only name for consequential work.",
          "I would give a real unit of work its own ID before the first slow or side-effectful step. Store the task intent, initiating identity, current lifecycle state, chosen workflow revision, and a bounded summary of inputs behind that ID. The request that created it can safely finish. A later request can ask what happened without needing to land on the same process."
        ],
        "sources": [
          {
            "label": "Model Context Protocol: the 2026-07-28 stateless core and explicit handles",
            "href": "https://blog.modelcontextprotocol.io/posts/2026-07-28/"
          }
        ]
      },
      {
        "heading": "Make the handle a reference, not a bearer permission",
        "paragraphs": [
          "A durable work ID answers “which run?” It should not, by itself, answer “who may see or continue it?” A random-looking URL parameter is useful for routing and correlation, but treating it as authority makes copied links and logs part of the access-control system. Resolve the handle under the authenticated caller, then check the task’s tenant, owner, delegation rules, and current policy before returning state or accepting the next operation.",
          "This distinction also improves the model-facing interface. The model may carry a compact run reference between tool calls, while the application keeps credentials, customer data, and approvals behind a server-side record. A resumed call can obtain the narrow credential it needs at the moment of execution rather than recovering a broad token from yesterday’s context.",
          "MCP’s current TypeScript guidance follows the same shape at the transport boundary: the server verifies a bearer token and passes verified auth information into handlers. Its resource check is about whether a token was issued for this server, not proof that any caller may operate on every task the server knows about. Application authorization still belongs at the work record."
        ],
        "sources": [
          {
            "label": "MCP TypeScript SDK: bearer-token verification and resource-bound tokens",
            "href": "https://ts.sdk.modelcontextprotocol.io/v2/serving/authorization"
          }
        ]
      },
      {
        "heading": "Use lifecycle state to make retries boring",
        "paragraphs": [
          "An explicit work record lets the service distinguish a new instruction from a retry. I would give the create operation an idempotency key and record its accepted result before launching expensive work. A retry with the same key returns the existing work ID; it does not begin another deployment, ticket, or payment because the user refreshed a page.",
          "The record should state more than running or done. Useful states include awaiting input, awaiting approval, queued, executing, succeeded, failed, cancelled, and expired. Each transition needs an owner and a timestamp. For actions with an external effect, preserve the downstream operation reference and its observed outcome. “The worker timed out” is not enough to decide whether it is safe to call the downstream system again.",
          "That means a reconnect path can be pleasantly simple: load the work ID, return the latest state and a monotonic event position, then either replay retained events or ask the client to poll. The UI does not need to infer whether silence means completed, disconnected, or stuck. The agent does not need to rerun its reasoning merely to reconstruct a status page."
        ]
      },
      {
        "heading": "Bind approvals to the work that will execute",
        "paragraphs": [
          "A durable ID is also a useful place to anchor a human decision. When a run asks to create a production change, store the proposed target, argument digest, policy revision, approver, and expiry with that work record. On resume, compare the pending operation with what was approved and re-check current authorization. If the target or payload changed, ask again rather than treating approval as a conversational mood that survives any later plan.",
          "Keep the approval smaller than the task when possible. A multi-step investigation may be allowed to read systems for an hour while a single write needs a separate approval. When the write succeeds, record that fact against the work ID. A later retry can report the existing result or begin a declared recovery flow instead of presenting the same confirmation twice.",
          "This is not about making every harmless lookup durable. It is about choosing the boundary where an interruption would otherwise create ambiguity. If losing a connection can change what the system does next, that decision deserves a record outside the connection."
        ]
      },
      {
        "heading": "Exercise the restart paths before they become incidents",
        "paragraphs": [
          "My first tests would disconnect the client after task creation, restart a worker while an operation is in flight, submit the same create request twice, revoke the caller’s role while the run waits for approval, and resume after the task’s retention window. Each test needs a specific expected result: return the same work ID, reconcile the external effect, deny the resumed action, or explain that the record expired. A vague “resume” feature is hard to trust until those answers exist.",
          "I would also test a deployment that changes the workflow implementation. The work record should identify which revision started the task and whether it is safe to continue under the new revision, stay on the old one, or restart with a fresh approval. Stateless routing makes it easier to put any request on any instance; it does not remove compatibility decisions from the application.",
          "The payoff is modest but important: connections can come and go without becoming the source of truth. The system can name the work, explain its state, check who is asking, and recover without guessing. That is a much better foundation for an agent than hoping a long-lived request stays alive."
        ]
      }
    ]
  },
  {
    "postedOn": "Oct 28, 2026",
    "blogHeading": "A Model Alias Is a Release Channel, Not a Default",
    "slug": "a-model-alias-is-a-release-channel-not-a-default",
    "postedBy": "Shivam Maurya",
    "postedAt": "AI Infrastructure",
    "content": "A model alias can improve an application without a code deploy. It can also change behaviour, cost, tool use, or availability underneath a running workflow. I would treat that movement as a release: make it visible, test it against the work, and promote it deliberately.",
    "sections": [
      {
        "heading": "The configuration can change while the service is still green",
        "paragraphs": [
          "Imagine a document assistant configured with a convenient model alias. On Monday its extraction and review path passes the release suite. On Tuesday the provider advances the alias. Requests still return 200, but the model now formats one field differently, uses a tool in a different order, or needs a slightly different prompt to reach the same result. Nothing in the application repository changed, so a normal deployment dashboard has no event to point at.",
          "That is why I would not describe an alias as merely a default. It is a provider-managed release channel. Google’s model documentation makes the distinction unusually explicit: a specific stable ID usually does not change, while its `latest` aliases are hot-swapped as new releases arrive. The useful engineering question is not whether moving aliases are bad. It is whether the product can tell that the dependency it selected yesterday is no longer the one serving today.",
          "A provider can also retire a fixed ID. Anthropic’s deprecation guidance says requests to models past their retirement date fail and recommends testing replacements before that date. Pinning protects reproducibility for a while; it does not remove the need for an eventual migration plan."
        ],
        "sources": [
          {
            "label": "Gemini API: model version names, stable IDs, and moving latest aliases",
            "href": "https://ai.google.dev/gemini-api/docs/models"
          },
          {
            "label": "Anthropic: model deprecations and replacement testing",
            "href": "https://docs.anthropic.com/en/docs/about-claude/model-deprecations"
          }
        ]
      },
      {
        "heading": "Record what actually answered the request",
        "paragraphs": [
          "At the gateway, I would keep the requested policy separate from the resolved provider model. A policy might say “the approved fast extraction channel”; the request record should capture the provider, model identifier returned or selected, gateway policy revision, prompt revision, tool schema revision, and the input and output contracts that matter for the workflow. Do not put sensitive prompts or customer content into general-purpose logs just to make this possible.",
          "That record turns a vague report — “it worked last week” — into a comparison. It lets an operator ask whether the break began after a policy edit, a provider version change, a tool-definition change, or an application release. It also keeps the experiment honest: an evaluation score without its resolved model and configuration is difficult to reproduce.",
          "The gateway should preserve this provenance even when it presents one convenient API to several providers. Normalizing request syntax is useful. Collapsing model identity into a single friendly label is not. The label is a routing decision; the resolved dependency is evidence."
        ]
      },
      {
        "heading": "Promote an alias with a small compatibility gate",
        "paragraphs": [
          "I would make each channel point to a named candidate before it reaches a consequential workflow. Run a compact regression set through the candidate with the production prompt, response schema, and tool definitions. Include the things that tend to survive happy-path demos: a malformed source, an ambiguous request, a tool denial, a long input, and an output that must be rejected rather than guessed.",
          "The gate does not need to predict every future answer. Its job is narrower: detect meaningful drift in the product behaviours the team has decided matter. Compare task outcomes and policy violations first, then inspect latency, token use, refusal behaviour, structured-output validity, and tool-call traces where those affect the workflow. A lower cost is not a safe trade if the candidate changes the action boundary.",
          "For moving aliases, schedule this check around the provider’s announced change window when one exists, and run it after the first observed resolution as well. For a fixed-model migration, use the same gate before switching traffic. The mechanism differs; the product risk is familiar."
        ]
      },
      {
        "heading": "Separate observation from promotion",
        "paragraphs": [
          "There is a useful middle state between “use it everywhere” and “never touch it.” Send a bounded, non-consequential slice of eligible work to the candidate, or replay recorded test inputs under the right access controls. Keep its result beside the incumbent’s without allowing it to make an external write. This can reveal a real integration mismatch that an isolated evaluation did not cover.",
          "I would avoid calling this shadowing when the candidate receives a different prompt, different tools, or a different traffic mix. Those are different experiments. Record the assignment rule and compare within the same task class. If production inputs are sensitive, a synthetic suite or redacted replay may be the only appropriate option; privacy is a constraint on the experiment design, not a reason to pretend the comparison happened.",
          "Promotion should be a gateway policy change with an owner, timestamp, and rollback target. That gives the on-call path something concrete to do when reports change: route new eligible work back to the previous approved version while the team investigates."
        ]
      },
      {
        "heading": "Make the rollback answerable before the change",
        "paragraphs": [
          "Before advancing a channel, I would ask four plain questions: Which exact model will serve new requests? Which workflows are allowed to receive it? What evidence must remain stable? Where does new traffic go if that evidence changes? Those questions expose missing ownership faster than a long provider comparison spreadsheet.",
          "Some work must be pinned for longer. An asynchronous evaluation, a regulated review, or an agent waiting for approval may need to finish with the model and contract it started with, or be explicitly restarted under a new version. A silent mid-run substitution makes later review much harder. The application should make that choice at its own workflow boundary rather than inherit it accidentally from a provider alias.",
          "The practical goal is modest: a model change should be as observable as any other production dependency change. When a team can name what moved, show what it was tested against, and safely choose the previous route, aliases become useful operational tools instead of invisible sources of drift."
        ]
      }
    ]
  },
  {
    "postedOn": "Oct 26, 2026",
    "blogHeading": "When an Agent Mistakes a Partial Result for the Whole",
    "slug": "when-an-agent-mistakes-a-partial-result-for-the-whole",
    "postedBy": "Shivam Maurya",
    "postedAt": "Developer Tools",
    "content": "An agent can call the right tool, receive a successful response, and still draw the wrong conclusion. If the response contains only part of the evidence, the application needs to keep that limitation visible all the way to the answer.",
    "sections": [
      {
        "heading": "A successful request can leave work unfinished",
        "paragraphs": [
          "Imagine asking a coding agent whether a repository still uses an old configuration key. It lists the files, inspects the paths it receives, and reports that the migration is complete. One directory never appeared in the listing. The agent searched everything it saw, but the application let that become a claim about the entire repository.",
          "GitHub’s tree API makes this a concrete integration concern. A recursive response can be truncated, and the documentation tells callers to fetch subtrees individually when that happens. A wrapper that returns only the paths throws away the signal that should change the agent’s next action.",
          "I would review this boundary whenever adding a repository connector to an agent. The useful question is whether the caller can distinguish a complete inventory from a useful first portion. Returning a large amount of data can make the omission harder to notice, because the response already looks thorough."
        ],
        "sources": [
          {
            "label": "GitHub Docs: truncated tree responses and subtree traversal",
            "href": "https://docs.github.com/en/rest/git/trees#get-a-tree"
          }
        ]
      },
      {
        "heading": "Carry coverage beside the evidence",
        "paragraphs": [
          "I would give an inventory tool separate fields for its items, the scope examined, the revision observed, and whether enumeration is complete. If more work remains, include the supported continuation mechanism or a concrete reason it cannot continue. These are application fields I would define; they are not a universal tool protocol.",
          "For example, a file listing might identify one repository and commit, report that three subtrees remain, and return handles for those subtrees. A capped search might instead report that its result limit was reached and suggest narrower queries. Those situations need different recovery paths. A single success boolean does not tell the caller which path to take.",
          "MCP provides structuredContent and optional outputSchema support for tool results, so these details can travel as validated data. The adapter still has to populate them honestly. If an upstream service does not establish completeness, I would represent it as unknown. An empty list with unknown coverage must stay distinguishable from a completed search with no matches."
        ],
        "sources": [
          {
            "label": "MCP tools specification: structured results and output schemas",
            "href": "https://modelcontextprotocol.io/specification/2025-11-25/server/tools#structured-content"
          }
        ]
      },
      {
        "heading": "Finishing the pages does not prove the claim",
        "paragraphs": [
          "Pagination is only one source of missing evidence. GitHub’s search API limits results and can return incomplete_results when a query times out. It also documents that searches across multiple resources only return resources accessible to the caller. Finishing the available pages therefore cannot establish that every repository in an organisation was examined.",
          "I would separate three questions in the run record: did we consume the available results, did the source cover the requested scope, and can this query detect what the user asked about? Searching for one literal key cannot prove that no code constructs it dynamically. Exhaustive retrieval and an adequate search method are separate requirements.",
          "For a migration check, first agree on a bounded claim: tracked files at a particular commit, with declared exclusions and a stated matching rule. Pin traversal to that commit where supported. If the source can only expose a changing view, retain that limitation. Otherwise a sequence of individually valid pages can silently describe different moments."
        ],
        "sources": [
          {
            "label": "GitHub Docs: search limits, incomplete results, and access scope",
            "href": "https://docs.github.com/en/rest/search/search#about-search"
          }
        ]
      },
      {
        "heading": "Keep the limitation through every transformation",
        "paragraphs": [
          "The connector is only the first place coverage can disappear. A gateway may shorten a tool response to fit a context budget. A summarizer may keep the matching files and discard the warning. A later agent may inherit the findings without the unvisited directories. I would make coverage part of the retained result envelope at each boundary.",
          "Keep traversal bookkeeping in application state: visited partitions, pending continuations, source revision, and the reason work stopped. Let the model inspect compact findings and request more evidence. This avoids asking a conversational summary to serve as the only record of whether a scan finished.",
          "The product should also make an honest partial answer useful. If the time budget ends, report the matches found and the scope still unchecked. For an action conditioned on a complete scan, such as removing a compatibility path, enforce that prerequisite in application code. A confident sentence from the model should not satisfy the condition."
        ]
      },
      {
        "heading": "Test the missing page, then read the answer",
        "paragraphs": [
          "My first fixture would put the only remaining use of the old key in the final page. The expected behaviour is to fetch it and report the match. A second fixture would make that page unavailable. This time the expected behaviour is an explicitly incomplete assessment, with the deletion step blocked.",
          "I would also test an empty page that still has a continuation, a repeated cursor, a truncated tree, and a result shortened by our own adapter. Repeated continuations need a bounded failure path so that completeness checks cannot trap the agent in a loop. Test the final user-facing claim as well as the internal state; a correct flag is little help if the answer says the repository is clear.",
          "The release check I care about is simple: whenever the system says it checked the whole agreed scope, can it show how that scope was exhausted? When it cannot, the answer should name what remains. That gives a developer something concrete to finish, and keeps an unfinished search from becoming an unsafe decision."
        ]
      }
    ]
  },
  {
    "postedOn": "Oct 23, 2026",
    "blogHeading": "Changing Embedding Models While Documents Keep Moving",
    "slug": "changing-embedding-models-while-documents-keep-moving",
    "postedBy": "Shivam Maurya",
    "postedAt": "AI Infrastructure",
    "content": "A new embedding model can improve search and still leave your application serving stale documents. The difficult part of the switch is keeping each vector attached to the right document revision while the corpus continues to change.",
    "sections": [
      {
        "heading": "The backfill can finish last and still be wrong",
        "paragraphs": [
          "Imagine a policy document at revision 17. A migration worker reads it and starts generating a new embedding. Meanwhile, an editor publishes revision 18, and the live ingestion path writes its new vector. The slower migration worker then finishes and overwrites that vector with revision 17. Every document has an embedding. The migration dashboard is green. Search is now using an older version of the policy.",
          "This is the failure I would put at the centre of an embedding migration review. A completed scan says which records the worker visited. It does not establish that the destination represents the latest source state.",
          "Qdrant's current migration guide explicitly calls out this race. Its named-vector backfill pauses updates and deletes to existing points while allowing searches and new inserts. That is a useful operational constraint to notice before adopting the example. If the product cannot pause edits, the migration needs additional coordination."
        ],
        "sources": [
          {
            "label": "Qdrant: embedding migration and concurrent-update constraints",
            "href": "https://qdrant.tech/documentation/tutorials-operations/embedding-model-migration/"
          }
        ]
      },
      {
        "heading": "Give every embedding a source revision",
        "paragraphs": [
          "I would identify an embedding by the document ID, source revision, chunk identity, and embedding configuration. The configuration includes the model and preprocessing choices. If chunking changes, a document can gain or lose chunks, so an old chunk number alone is a poor identity. Keep an explicit manifest of which chunks belong to the revision being indexed.",
          "For a service that must accept edits throughout the migration, I would route live changes and backfill through one ordered ingestion path per document, or use destination writes that atomically reject older source revisions. Checking the revision and then writing in separate operations leaves another race between those two steps. The chosen datastore has to support the enforcement the design assumes.",
          "Elasticsearch's reindex API provides a concrete example of version-aware writes: external versioning can reject an incoming version that is not newer. That is a storage-specific capability, not a guarantee to assume for every vector database. Where atomic revision checks are unavailable, serializing writes or scheduling a bounded edit pause may be easier to operate."
        ],
        "sources": [
          {
            "label": "Elasticsearch: reindex destination version semantics",
            "href": "https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-reindex"
          }
        ]
      },
      {
        "heading": "Deleted documents need a place in the migration",
        "paragraphs": [
          "Now change the example: the editor deletes the document while the worker is embedding it. A late insert can resurrect it in the new index. A scan of currently existing source documents will never tell the migration worker about that deletion.",
          "I would retain a deletion record with the document ID and its revision until every migration consumer has passed it. The ingestion path should reject older work for that ID, remove all affected chunks, and preserve enough progress information to resume after a crash. Treat permission changes as source changes too; carrying old access metadata into the new index can expose material that the current application would exclude.",
          "A practical cutover check is to record a position in the source change stream, then verify that the candidate index has applied every change through that position. Reconcile document revisions and chunk membership as well as counts. Equal counts can hide one missing document and one resurrected document. Keep processing subsequent changes while preparing the switch; reaching a checkpoint does not freeze the corpus."
        ]
      },
      {
        "heading": "Switch the query encoder with the index",
        "paragraphs": [
          "I would publish a retrieval configuration that binds the query encoder to its destination vector field or collection. Resolve that configuration once per request and carry it through the search. Updating a global collection alias independently from application code can otherwise send an old query vector to a new document space. Matching vector dimensions alone does not establish compatibility.",
          "The input mode belongs in that configuration too. Cohere's Embed API distinguishes search_document for stored passages from search_query for queries. A model name by itself therefore does not describe the complete encoding contract. Include the retrieval configuration in cache keys so cached query vectors cannot leak across a switch.",
          "For an initial model comparison, I would hold chunking, filters, and reranking steady. Inspect queries involving exact identifiers, short ambiguous phrases, and the languages the product actually serves. Decide what counts as relevant evidence before looking at the candidate results. A different ranking is an observation; calling it an improvement requires checking what the user needed."
        ],
        "sources": [
          {
            "label": "Cohere Embed API: query and document input modes",
            "href": "https://docs.cohere.com/reference/embed"
          }
        ]
      },
      {
        "heading": "Rehearse the awkward writes before cutover",
        "paragraphs": [
          "My rehearsal would deliberately delay a backfill result, edit its source twice, then release the delayed result. Repeat with a deletion and a permission removal. Interrupt the worker after it writes vectors but before it records progress, then restart it. Verify that replay leaves the correct revision and chunk set visible to the correct caller.",
          "Keep the old retrieval configuration usable during an observation period, including its ingestion path. A rollback to an index that stopped receiving edits sends users back to stale evidence. Record the point at which keeping that path current ends, and treat later recovery as a rebuild or catch-up operation with its own validation.",
          "The release decision should include evidence that a late revision-17 embedding cannot replace revision 18, and that deleted content stays absent after replay. Those are small tests with concrete expected outcomes. I would want them passing before letting a better retrieval score justify the production switch."
        ]
      }
    ]
  },
  {
    "postedOn": "Oct 21, 2026",
    "blogHeading": "When More Agent Workers Make the Queue Slower",
    "slug": "when-more-agent-workers-make-the-queue-slower",
    "postedBy": "Shivam Maurya",
    "postedAt": "Cloud Deployment",
    "content": "A growing queue makes adding workers feel obvious. For an agent that spends most of its time waiting on a model API, extra replicas can create more throttling without completing more work. I would first ask which part of the system has capacity to make progress.",
    "sections": [
      {
        "heading": "Find out what the workers are waiting for",
        "paragraphs": [
          "Imagine a document review service with a queue of jobs and several worker pods. Each job parses a file, calls a model, and saves a report. The queue grows while CPU stays low. A CPU-based autoscaler sees little pressure, even though users are waiting. Switching to queue length looks like the natural fix.",
          "That helps if the application lacks worker slots and the model service has spare capacity. If those workers already saturate the available model quota, more pods compete for the same allowance. Throttled requests wait or retry, jobs remain unfinished, and the queue continues asking for more workers. The autoscaler can amplify the congestion it was meant to resolve.",
          "I would split task time into local processing, waiting for model admission, remote execution, and retry delay. Alongside that, measure completed jobs per minute and the age of the oldest runnable job. Those measurements distinguish a shortage of compute from a shortage of permission to send the next request."
        ]
      },
      {
        "heading": "Define what belongs in the scaling signal",
        "paragraphs": [
          "An agent queue can contain work in very different states. A job ready to parse a file needs a worker. A job waiting for a user's approval may need only durable storage. A delayed retry needs a future wakeup. Counting all three as immediate demand buys capacity that cannot help two of them yet.",
          "The queue adapter's definition matters. KEDA's versioned SQS documentation says its default scaling count includes both visible and in-flight messages; delayed messages are optional. In-flight work can usefully keep capacity present while jobs finish, but it also includes messages whose workers may be waiting on a dependency. Inspect that meaning before tuning the target.",
          "For a simple service, I would start with a bounded worker pool and a clearly defined ready queue. If parsing and model waiting have very different resource needs, separate those stages when the operational benefit justifies it. Keep parked approvals out of the ready count, and keep an independent alert on their age so they do not disappear from operational view."
        ],
        "sources": [
          {
            "label": "KEDA 2.18: SQS queue counts, in-flight messages, and delayed messages",
            "href": "https://keda.sh/docs/2.18/scalers/aws-sqs/"
          }
        ]
      },
      {
        "heading": "Keep the shared limit shared",
        "paragraphs": [
          "Suppose a hypothetical deployment allows four concurrent model calls per pod. Scaling from three pods to twelve changes the potential concurrency from twelve calls to forty-eight. A per-pod setting has become a much larger system-wide decision. The same multiplication happens when each worker owns an independent rate limiter.",
          "I would enforce model admission across the workers sharing a provider quota, accounting for other applications using that quota too. Concurrency and rate are different constraints: a semaphore bounds active calls, while a rate policy controls requests or tokens over time. An agent can need both. Worker autoscaling should operate within those boundaries.",
          "There is a subtle Kubernetes trap here. When an HPA has multiple metrics, it chooses the largest replica recommendation, within the configured maximum. Adding a provider-capacity metric beside queue depth does not make that metric a veto. Use a deliberate admission mechanism and a bounded replica policy; verify any combined scaling calculation explicitly."
        ],
        "sources": [
          {
            "label": "Kubernetes: how HPA combines multiple metrics",
            "href": "https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/#scaling-on-multiple-metrics"
          }
        ]
      },
      {
        "heading": "Measure whether another replica helps",
        "paragraphs": [
          "I would run a controlled load test with representative documents and a fixed model route. Increase worker capacity in steps while holding the workload and admission policy steady. Watch useful completions, queue age, throttling, and resource use. The useful range ends when another step mostly adds waiting, retries, or idle memory.",
          "Repeat with a mix of short and long jobs. Ten queue entries can represent ten quick classifications or ten lengthy reviews. A target calibrated on one mix can perform badly on the other. Separate queues by materially different service needs if that makes scheduling easier to reason about; avoid inventing precise token estimates that the application cannot actually produce.",
          "Replica changes also take time. A pod needs to start and become ready before it contributes. Kubernetes provides scaling-rate policies and stabilization windows, which help control how rapidly replica counts change. Tune them against measured startup and workload behaviour. They cannot create downstream capacity, and a smooth replica graph is not evidence that users are getting results."
        ],
        "sources": [
          {
            "label": "Kubernetes: configurable scaling behaviour and stabilization",
            "href": "https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/#configurable-scaling-behavior"
          }
        ]
      },
      {
        "heading": "Rehearse recovery before enabling aggressive scaling",
        "paragraphs": [
          "The test I care about most is a temporary downstream slowdown. Reduce the model allowance, keep submitting work for a bounded interval, then restore it. The system should retain an honest backlog, keep retries bounded, and recover without every worker releasing a burst at once. Check the oldest jobs as well as aggregate throughput; a healthy average can hide stranded work.",
          "Also exercise scale-down while jobs are active. Workers should stop taking new jobs and either finish within the shutdown allowance or leave recoverable work behind. Queue lease handling and duplicate-safe effects still matter when termination comes from an autoscaler. A lower replica count should not turn a nearly finished report into an unexplained disappearance.",
          "Before raising the replica ceiling, I want to be able to explain what the next worker will do immediately and which shared resource lets it finish. If the answer is that it will wait for the same exhausted model allowance, I would keep the backlog visible and work on admission, scheduling, or capacity."
        ]
      }
    ]
  },
  {
    "postedOn": "Oct 19, 2026",
    "blogHeading": "Count the Missing Results in Your Batch Eval",
    "slug": "count-the-missing-results-in-your-batch-eval",
    "postedBy": "Shivam Maurya",
    "postedAt": "AI Infrastructure",
    "content": "An overnight evaluation can finish processing without producing every answer you expected. Before trusting its score, account for the requests that never became usable results. Otherwise, the batch infrastructure quietly chooses which cases your model gets judged on.",
    "sections": [
      {
        "heading": "Start with the cases that disappeared",
        "paragraphs": [
          "Imagine an evaluation with 1,000 cases. By morning, 900 have usable answers and 810 pass the grader. A dashboard reports 90%. That arithmetic is correct for the answers it graded. It leaves a different question unanswered: what happened to the other 100 cases? These are illustrative numbers, but the reporting mistake is easy to build into a real pipeline.",
          "If the missing cases cluster around long documents or a particular request shape, the completed subset may tell a flattering story. I would show 900 of 1,000 cases with usable answers alongside the 810 of 900 grading result. For a release gate, I would also show 810 of 1,000 planned cases passing end to end, with the unresolved remainder broken down by cause.",
          "Claude’s current batch documentation makes the distinction explicit: processing can end with individual requests marked succeeded, errored, canceled, or expired. Result order is not guaranteed. A finished batch is therefore the point where reconciliation can begin."
        ],
        "sources": [
          {
            "label": "Claude documentation: batch result states and ordering",
            "href": "https://platform.claude.com/docs/en/build-with-claude/batch-processing#retrieving-batch-results"
          }
        ]
      },
      {
        "heading": "Write the manifest before submitting",
        "paragraphs": [
          "I would start each evaluation with an immutable manifest of the intended cases. Give every case an opaque identifier, record its dataset revision, and bind it to the exact request configuration: prompt revision, requested model identifier, generation settings, and grader revision. Keep sensitive inputs in controlled storage; a provider-visible identifier does not need a customer name or document title.",
          "Separate the logical case from the attempt. Case 42 remains case 42 when it moves into a recovery batch, but that submission gets its own attempt record. Store the mapping from the provider’s custom_id and batch ID back to both. Matching by line position would make a reordered result file look like a model failure against the wrong reference answer.",
          "The manifest gives the importer something independent to check. Every expected attempt should resolve to an outcome; unexpected identifiers and conflicting duplicates should stop finalization. Comparing counts alone is insufficient because one duplicated result can hide one missing result while leaving the total unchanged."
        ]
      },
      {
        "heading": "Keep receipt, usability, and quality separate",
        "paragraphs": [
          "There are several boundaries between receiving a response and passing an evaluation. Did the importer durably save the provider result? Did the response contain a complete answer in the expected format? Did the grader run successfully? Did that answer meet the task’s criteria? I would record those outcomes separately so an importer bug cannot masquerade as a reasoning failure.",
          "For a document extraction eval, a successfully returned message might still contain truncated output or an invalid field value. Those cases belong in the report under explicit rules. A failed grader should remain an evaluation-system error until resolved; it should not silently become either a pass or a model-quality failure.",
          "Make ingestion safe to repeat. If a download stops halfway through, rerunning the importer should leave already stored results unchanged and fill the remaining gaps. Use a unique key for each provider batch and request identifier, retain enough provenance to investigate conflicts, and mark import completion only after checking the whole manifest."
        ]
      },
      {
        "heading": "Recovery must preserve the experiment",
        "paragraphs": [
          "Before the run starts, decide which failures may be retried, how many attempts are allowed, and which result counts. A temporary service failure can justify another attempt. A disappointing but valid answer is an observed outcome. Resubmitting only the disappointing answers until they pass changes what the evaluation measures.",
          "Keep the first-attempt report even when recovery succeeds. Then publish a separate view after the declared recovery policy has run, including the extra attempts and elapsed time. That lets a team distinguish model quality from the operational cost of obtaining a complete result set.",
          "If recovery changes the prompt, model, or input, give it a new experiment identity. It can still be useful evidence, but mixing it into the original score hides the intervention. For comparisons, inspect missingness by task category and input size as well as the overall total. The same completion percentage can conceal very different gaps."
        ]
      },
      {
        "heading": "Make finalization an explicit decision",
        "paragraphs": [
          "My finalization rule would require an outcome for every planned case, no unexplained identifiers, and a recorded reason for every excluded score. Finalized does not have to mean every request succeeded. It means the report accounts for the entire experiment and clearly states whether its release criteria were met.",
          "Retrieve results promptly rather than treating the provider as the evaluation archive. Claude currently documents a result-download window of 29 days from batch creation. I would store the evidence needed for the decision under the project’s own access and retention rules, and alert when a completed batch has not been imported.",
          "A useful rehearsal is deliberately unglamorous: shuffle the result lines, interrupt a download, replay the importer, and include a failed request and a grader error. The report should preserve the original denominator throughout. That is the check I want before an overnight score becomes a reason to ship."
        ],
        "sources": [
          {
            "label": "Claude documentation: batch limits and result availability",
            "href": "https://platform.claude.com/docs/en/build-with-claude/batch-processing#batch-limitations"
          }
        ]
      }
    ]
  },
  {
    "postedOn": "Oct 16, 2026",
    "blogHeading": "What Happens to a Paused Agent When You Deploy?",
    "slug": "what-happens-to-a-paused-agent-when-you-deploy",
    "postedBy": "Shivam Maurya",
    "postedAt": "AI Infrastructure",
    "content": "An agent waiting for approval can outlive the code that started it. The next deployment needs to account for that unfinished work: which version will resume it, what its saved state means, and whether the action the user reviewed still matches the action ahead.",
    "sections": [
      {
        "heading": "Yesterday’s work meets today’s code",
        "paragraphs": [
          "Imagine a release assistant that prepares a staging deployment and pauses for review. Overnight, a refactor renames the deployment node and changes how the target environment is stored. The next morning, someone clicks approve. Fresh requests passed every test, but this request carries yesterday’s state into today’s application.",
          "That boundary is easy to miss because a paused agent consumes little visible compute. It still has dependencies: a place to resume, a state format, and a proposed action. I would treat those dependencies as part of the release surface. A green health check says the service is running; it says very little about the work waiting inside it.",
          "LangGraph’s current migration documentation makes one failure concrete: an interrupted thread may need a node whose name was removed or changed. It also notes that renaming a state key loses its saved value in existing threads. These are useful reminders that an internal refactor can become a compatibility change once state is persisted."
        ],
        "sources": [
          {
            "label": "LangGraph: graph migrations and saved-state compatibility",
            "href": "https://docs.langchain.com/oss/python/langgraph/graph-api#graph-migrations"
          }
        ]
      },
      {
        "heading": "Choose which code will receive the resume",
        "paragraphs": [
          "Before discussing migration scripts, I want an explicit routing decision. Will an existing run continue on its original implementation, or will the current implementation accept its saved state? Either can work. An accidental mixture is much harder to operate.",
          "Temporal’s Worker Versioning offers pinned workflows that stay on a particular worker deployment version, alongside auto-upgrading workflows that require replay-safe changes. Its documentation describes keeping multiple versions available while older work drains. That is a concrete example of making the routing decision part of deployment infrastructure.",
          "For an agent product, pinning also creates an operating obligation. Someone must retain compatible workers and dependencies until their runs finish or are deliberately retired. A version label in a database is insufficient if every worker now runs the new code. I would record the implementation revision and state schema version separately, then verify that the dispatcher actually honours them."
        ],
        "sources": [
          {
            "label": "Temporal: Worker Versioning, pinning, and deployment strategies",
            "href": "https://docs.temporal.io/production-deployment/worker-deployments/worker-versioning"
          }
        ]
      },
      {
        "heading": "Preserve meaning as well as fields",
        "paragraphs": [
          "Suppose the old deployment state contains environment: staging, while the new code expects target: {name, region}. A migration can copy the name, but it cannot safely invent the region. I would require a documented mapping or pause for a new decision. Silently filling in the application’s current default could change what the user is approving.",
          "Behaviour can drift even when every field loads. LangGraph’s backward-compatibility guide distinguishes technical compatibility from business compatibility and describes storing a behavioural version at thread creation. That provides a way to keep an existing conversation on a deliberate path while new conversations use the revised flow.",
          "My application rule would be stricter at the action boundary: bind approval to a concrete target and payload. If migration changes either, invalidate that approval and show the revised proposal. Keep current authorization checks outside any promise to preserve old behaviour. Retaining an old workflow should never preserve a permission that has since been revoked."
        ],
        "sources": [
          {
            "label": "LangGraph: technical and business compatibility for in-flight runs",
            "href": "https://docs.langchain.com/oss/python/langgraph/backward-compatibility"
          }
        ]
      },
      {
        "heading": "Test the crossing, including the way back",
        "paragraphs": [
          "I would add a small deployment rehearsal alongside the normal fresh-run checks. Create synthetic checkpoints with the previous release at meaningful boundaries: waiting for approval, waiting for a tool result, and ready to produce the final answer. Resume them with the candidate release through the same routing path production uses.",
          "The assertions should describe outcomes. The staging request must retain its target. A missing region must produce an explicit hold. An already recorded deployment must not be submitted again. Rejected state should remain inspectable with a clear reason, rather than disappearing into a generic resume error. External writes in this rehearsal belong behind test doubles or isolated test services.",
          "Then rehearse rollback after the candidate has written state. Routing new requests back to the old release does not establish that the old release can read those new checkpoints. Where that compatibility is absent, keep affected runs on compatible workers or hold them for recovery. I would document that limit before rollout, while the team still has time to choose."
        ]
      },
      {
        "heading": "Give old versions a retirement condition",
        "paragraphs": [
          "Keeping every version forever is an expensive way to avoid making a migration decision. I would maintain an inventory of resumable runs by implementation version, schema version, waiting reason, and age. Include dormant approval requests, not just workers currently executing. A quiet queue can still contain work that will wake up next week.",
          "For each release, decide what happens to those runs: finish on retained code, migrate through a tested path, or expire with a useful explanation and a safe restart route. Set a retention deadline and make it visible to the product team. A restart must still account for any external work already completed.",
          "The release question I want answered is simple: if someone approves yesterday’s request tomorrow, which code receives it, and what proves it still means the same thing? Answering that makes continuous delivery compatible with agents that need time to finish."
        ]
      }
    ]
  },
  {
    "postedOn": "Oct 14, 2026",
    "blogHeading": "Can Your Agent Find the Right Tool?",
    "slug": "can-your-agent-find-the-right-tool",
    "postedBy": "Shivam Maurya",
    "postedAt": "Developer Tools",
    "content": "Loading tools on demand makes an agent’s context smaller. It also introduces a search problem before the agent can act. I want to know whether the right capability was found before I judge how well the model used it.",
    "sections": [
      {
        "heading": "The failure can happen before the call",
        "paragraphs": [
          "Imagine asking a developer assistant which release is running in staging. The integration has a read-only deployment lookup, but the assistant finds a tool for starting deployments instead. It asks an unnecessary question, tries a less direct route, or says it cannot help. Nothing crashed. The useful tool simply never reached the decision.",
          "On-demand discovery is already a concrete platform feature. Claude’s tool search documentation describes searching a catalog and expanding matching references into full definitions. That creates a useful boundary to inspect: the candidate tools returned by search, followed by the tool the model chooses.",
          "My concern is the gap between those two steps. An evaluation that supplies the correct tool directly may show excellent calling behaviour while missing the failure users actually encounter. For a product with several integrations, discovery deserves its own test cases."
        ],
        "sources": [
          {
            "label": "Claude documentation: tool search and deferred loading",
            "href": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool"
          }
        ]
      },
      {
        "heading": "Describe the job in the user’s vocabulary",
        "paragraphs": [
          "For the staging question, I would describe a hypothetical lookup as: “Read the release currently deployed to an environment, including commit and deployment status. Does not start a deployment.” That tells a search system and a model more than “Get deployment data.” It also separates the lookup from a similarly named write operation.",
          "I would collect ordinary phrasings such as “what is live in staging?”, “which commit reached test?”, and “show the current release.” These become discovery cases. They should not all be copied mechanically into every description; that can make neighbouring tools look equally relevant. The description should explain the actual capability, its inputs, and its limits.",
          "Use concrete distinctions where the catalog has near neighbours: current state versus history, one repository versus an organisation, preview versus publish. Then hold back some phrasings for evaluation. Otherwise it is easy to improve search for the handful of sentences the author already knows."
        ]
      },
      {
        "heading": "Measure discovery and selection separately",
        "paragraphs": [
          "I would store each evaluation case with the request, a catalog snapshot, the caller’s allowed capabilities, and the acceptable tool or tools. Run it through the real search path. First ask whether an acceptable capability appeared within the candidate budget. Then ask whether the agent selected and called it correctly.",
          "A useful diagnostic rerun gives the same request the correct definition directly. If that succeeds while discovery fails, investigate the query, indexing, descriptions, or ranking. If both fail, inspect ambiguity and argument construction. This is a way to narrow an investigation, not proof that one component is solely responsible.",
          "Keep the end-to-end outcome alongside those measurements. A successful search followed by a wrong environment parameter still fails the task. Record search attempts, time to the first useful call, and definition tokens too. A smaller prompt is only a product improvement if the agent can still finish the work.",
          "Include requests with no supported capability. An empty result should lead to an honest limitation or a useful clarification. Returning the closest-looking write tool for every read request can make a search metric look busy while making the product worse."
        ]
      },
      {
        "heading": "Keep the catalog tied to the caller",
        "paragraphs": [
          "I would construct the searchable catalog from capabilities the application permits this caller to discover, then check authorization again when a tool executes. A search result is a candidate action. It does not grant permission, and a previously loaded definition should not preserve access after a role changes.",
          "Catalog freshness matters as well. MCP’s versioned tools specification supports paginated listing and an optional notification when the available list changes. A client building an index needs to consume the relevant pages and handle changes when that capability is advertised. The protocol mechanism alone does not keep an application’s separate search index current.",
          "For a custom index, I would attach a catalog revision to evaluation runs and cached search results. Invalidate or rebuild affected entries when definitions change, and partition caches by the authorization scope that produced them. Test a removed tool and a revoked role explicitly. A harmless lookup becoming a broader operation behind a stale description is a change the application should detect."
        ],
        "sources": [
          {
            "label": "MCP 2025-11-25: tool listing, pagination, and list changes",
            "href": "https://modelcontextprotocol.io/specification/2025-11-25/server/tools"
          }
        ]
      },
      {
        "heading": "Ship a small discovery regression set",
        "paragraphs": [
          "I would begin with a few tasks people actually want to complete: locate a deployment, read a build failure, find an issue, and prepare a change. For each, add a paraphrase, a similar but inappropriate tool, a restricted caller, and an unavailable-capability case. Check the expected route before adding a larger catalog.",
          "Then run that set when a connector, description, or search configuration changes. For a renamed deployment lookup, the review should show whether the old user vocabulary still finds the new definition. For a newly added publishing tool, it should show that requests to inspect a release still reach the read path.",
          "The question I want a failed trace to answer is precise: did the agent lack the capability, fail to discover it, or misuse it after discovery? Once those outcomes are visible, the next engineering step becomes much easier to choose."
        ]
      }
    ]
  },
  {
    "postedOn": "Oct 12, 2026",
    "blogHeading": "Who Can Open the File an Agent Leaves Behind?",
    "slug": "who-can-open-the-file-an-agent-leaves-behind",
    "postedBy": "Shivam Maurya",
    "postedAt": "AI Infrastructure",
    "content": "An agent can finish its task while the files it created keep circulating. Reports, screenshots, and exported tool results need an owner, an access policy, and an expiry story. I would design that lifecycle alongside the download button.",
    "sections": [
      {
        "heading": "Follow the result beyond the conversation",
        "paragraphs": [
          "Imagine an internal assistant investigating a support issue. It reads restricted records, saves a detailed CSV, and returns a short explanation with a download link. The explanation is appropriate for the conversation. The CSV contains considerably more. If the conversation is shared tomorrow, what exactly has been shared?",
          "This is a practical question for agent products today. Deep Agents documents automatic offloading of large tool results and offers both thread-scoped state and storage that persists across threads. Its backend guide also describes routing internal agent files separately from project files. Moving content out of the prompt is useful, but the storage choice now affects who can encounter it later.",
          "I think of each retained output as a small product surface. It needs a deliberate route from creation to inspection to deletion. A successful tool call only tells us the file was produced."
        ],
        "sources": [
          {
            "label": "LangChain: Deep Agents filesystem backends and storage scope",
            "href": "https://docs.langchain.com/oss/python/deepagents/backends"
          }
        ]
      },
      {
        "heading": "Give the artifact an identity before giving it a URL",
        "paragraphs": [
          "I would keep an application record containing an opaque artifact ID, tenant, creating run, owner, storage location, content type, creation time, retention deadline, and access policy. For evidence that people will review, I would also record an immutable object version or digest. Replacing the bytes behind a previously reviewed attachment should create a new version.",
          "The download handler should resolve that record using the authenticated caller and check access before reading the object. A hard-to-guess ID helps avoid accidental discovery; it does not establish permission. The model can suggest a filename, but tenant identity and storage scope should come from the application.",
          "For the support example, I would keep the detailed export restricted to its approved audience. A wider conversation audience could receive a separately prepared summary. Combining several sources should never silently expand their audience. If the product cannot determine who may receive the combined result, keep it private until an explicit sharing decision is made."
        ]
      },
      {
        "heading": "Decide what a download link promises",
        "paragraphs": [
          "A presigned URL is convenient because object storage can serve the bytes directly. AWS documents S3 presigned URLs as bearer tokens: possession grants access within the applicable permissions and validity period. They can be reused before expiry. That matters when a URL ends up in a transcript, browser history, or diagnostic log.",
          "I would store the artifact ID in the conversation and issue a short-lived URL only after an authorized user clicks Download. Avoid recording the signed query string in telemetry. This reduces how long a copied link remains useful, but does not bind it to the original viewer.",
          "If the requirement is to check current membership on every new download request, serve the file through an authenticated endpoint without exposing a reusable storage URL. That costs bandwidth and operational work. It also makes the promise clearer. A membership change in the application alone does not invalidate an already issued S3 URL. Neither approach can recall bytes someone has already downloaded.",
          "Expiry is not an interrupt either: S3 checks it when the request starts, and a download begun before expiry can continue afterward. The interface should describe access expiry without implying that an open transfer will be cut off."
        ],
        "sources": [
          {
            "label": "AWS: S3 presigned URL permissions, reuse, and expiration",
            "href": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html"
          }
        ]
      },
      {
        "heading": "Separate working files from deliverables",
        "paragraphs": [
          "A raw tool response saved to help the agent reason is different from a report the user has chosen to retain. I would give temporary working files a bounded lifetime and require an explicit promotion step for durable deliverables. Promotion can assign the audience, retention policy, and reviewed version.",
          "Then trace the copies. The export might exist in worker storage, a checkpoint, object storage, and a generated preview. Deleting the visible attachment should block new access through the application immediately and schedule removal from the storage locations it controls. Previously issued storage links still need the expiry or revocation policy described above. Keep enough metadata to report whether cleanup succeeded, without retaining the payload just to prove it was deleted.",
          "The product should distinguish unavailable from physically removed. Backups and retained versions may follow separate deletion schedules. Write down those schedules before promising that a file disappears when the user deletes a conversation."
        ]
      },
      {
        "heading": "Test the link after the happy path",
        "paragraphs": [
          "I would start with one export and two test tenants. Copy its ID into a request from the other tenant. Remove the original user from the workspace, then try a fresh download and a previously issued link. Share the conversation with a narrower role. Each result should match the access promise the product actually makes.",
          "Also test a resumed run after its temporary files expire, a deleted artifact whose preview is cached, and a failed cleanup job. The agent should explain that evidence is no longer available and request a fresh authorized read when needed. It should not quietly treat an old summary as the missing file.",
          "The useful design question is simple: when someone opens this attachment next week, which component decides whether they should see it? I want a concrete answer in the application, with a policy and a test behind it."
        ]
      }
    ]
  },
  {
    "postedOn": "Oct 07, 2026",
    "blogHeading": "What an Agent’s Stop Button Can Actually Promise",
    "slug": "what-an-agents-stop-button-can-actually-promise",
    "postedBy": "Shivam Maurya",
    "postedAt": "AI Infrastructure",
    "content": "When an agent is only generating text, Stop feels straightforward. Once it can start builds, create records, or publish changes, stopping becomes a coordination problem. I want the product to explain what has stopped, what is still settling, and what already happened.",
    "sections": [
      {
        "heading": "Start with the user’s expectation",
        "paragraphs": [
          "Imagine an agent preparing a release: it has started a build, queued a deployment, and drafted a notification. The user notices the wrong target environment and presses Stop. Freezing the transcript is immediate. Preventing the queued deployment and finding out whether anything has already reached the cloud are separate jobs.",
          "The MCP Tasks Extension’s TypeScript documentation makes a useful distinction for builders working with remote tools today: an AbortSignal stops local waiting, while cancel() requests remote cancellation. That small API distinction has a large product consequence. A quiet interface is not evidence that the work behind it has stopped.",
          "I would define the promise before designing the button: stop admitting new actions for this run, request cancellation of active work, and report any effects that remain. Each part needs evidence from the runtime."
        ],
        "sources": [
          {
            "label": "MCP Tasks Extension: cancellation and detachment",
            "href": "https://tasks.extensions.modelcontextprotocol.io/typescript/troubleshooting#cancellation-and-detachment"
          }
        ]
      },
      {
        "heading": "Keep cancellation intent separate from execution facts",
        "paragraphs": [
          "MCP’s versioned specifications show why one status field is too little. Ordinary request cancellation is a notification that a receiver may ignore if the work has finished or cannot be cancelled. In the experimental 2025-11-25 task design, a valid cancellation transitions the task to cancelled, but the specification explicitly allows underlying execution to continue. That is a protocol state, not proof that every downstream effect was prevented.",
          "For the application, I would store three separate facts: when the user requested a stop, whether each worker acknowledged it, and the observed outcome of each external action. These are application records, not proposed additions to MCP. A task can have cancellation acknowledged while a deployment’s outcome remains unknown.",
          "The interface can then say something concrete: “New actions blocked. Build cancellation requested. Deployment status being checked.” It should only say an operation stopped when the relevant executor can support that claim."
        ],
        "sources": [
          {
            "label": "MCP 2025-11-25: request cancellation",
            "href": "https://modelcontextprotocol.io/specification/2025-11-25/basic/utilities/cancellation"
          },
          {
            "label": "MCP 2025-11-25: experimental task cancellation semantics",
            "href": "https://modelcontextprotocol.io/specification/2025-11-25/basic/utilities/tasks#task-cancellation"
          }
        ]
      },
      {
        "heading": "Close the gate before draining the workers",
        "paragraphs": [
          "My first implementation step would be a durable stop record checked by the component that admits tool actions. Stop and action admission need a shared ordering point, such as a transaction over the run record. Otherwise a worker can read “running,” the user can stop the run, and the worker can still dispatch its next action using the stale read.",
          "An action admitted before that boundary belongs to the in-flight set, even if the external system has not accepted it yet. Try to cancel it, but preserve its identity and reconcile its outcome. Actions arriving after the boundary should be rejected. This makes the guarantee precise without pretending a local transaction can control a remote service.",
          "Queued jobs, retries, child tasks, and delayed approval responses must all pass through the same gate. A restarted worker should reload the stop record before continuing. The model can explain the decision; enforcing it belongs in the executor."
        ]
      },
      {
        "heading": "Treat cleanup as a separate decision",
        "paragraphs": [
          "If the release was already created, stopping the agent cannot make that fact disappear. Deleting the release or rolling it back is another consequential action, with its own permissions and failure modes. I would not let a generic cancellation handler improvise that recovery.",
          "For each tool, decide ahead of time what cleanup is safe: terminate a local process, request cancellation of a remote build, retain a generated draft, or ask the user to review a published change. Give cleanup a bounded execution path so it can finish after ordinary task actions have been blocked.",
          "Keep external operation identifiers in the application’s own record. The experimental MCP task specification permits cancelled task records to be deleted immediately, so a remote task lookup should not be the only way to discover what needs attention. Reconciliation needs enough information to inspect the actual build or deployment."
        ]
      },
      {
        "heading": "Test the races behind the button",
        "paragraphs": [
          "I would test Stop while a job is queued, while a worker is dispatching it, after the remote service accepts it, and while an approval is pending. Then restart the worker and deliver the queued message again. The key assertion is that no new ordinary action is admitted after the recorded stop boundary.",
          "Also simulate a remote service that ignores cancellation and a connection that drops before acknowledgement. The expected interface should preserve uncertainty and show which operation is being checked. A misleading success message is a product failure even when the cancellation request itself was sent correctly.",
          "A useful Stop button leaves the user with a small, understandable account: what was prevented, what finished, and what still needs a decision. That is the standard I would use before trusting an agent with a workflow I might need to interrupt."
        ]
      }
    ]
  },
  {
    "postedOn": "Oct 05, 2026",
    "blogHeading": "Before You Blame the Model, Check the Eval Sandbox",
    "slug": "before-you-blame-the-model-check-the-eval-sandbox",
    "postedBy": "Shivam Maurya",
    "postedAt": "AI Infrastructure",
    "content": "A coding agent can lose a task because its patch is wrong, or because its test process never had enough memory to finish. Those failures need different fixes. I want evaluation reports to make that distinction before a team changes models, prompts, or budgets.",
    "sections": [
      {
        "heading": "The runtime is part of the experiment",
        "paragraphs": [
          "Imagine comparing two coding agents on the same repository tasks. One batch runs overnight on quiet workers. The other runs during a busy deployment window. The second batch times out more often. It is tempting to explain the gap through model behaviour, but the comparison has changed more than the model.",
          "Anthropic’s February 2026 investigation into infrastructure noise makes this a concrete concern: changing sandbox resource configuration changed coding-agent benchmark results while the model and harness stayed fixed. That is useful evidence for teams choosing agents today, even though it is not a new model announcement. My takeaway is to treat the execution environment as a versioned input to the evaluation."
        ],
        "sources": [
          {
            "label": "Anthropic: Quantifying infrastructure noise in agentic coding evals",
            "href": "https://www.anthropic.com/engineering/infrastructure-noise"
          }
        ]
      },
      {
        "heading": "Record what the worker actually allows",
        "paragraphs": [
          "A container image digest is a good start, but it does not describe the whole environment. I would also record CPU and memory requests and limits, architecture, task concurrency, command timeouts, network policy, dependency cache state, and the repository revision. Keep the task budget separate from the resources available to execute each command.",
          "Kubernetes makes one distinction especially relevant here: resource requests guide scheduling, while limits constrain usage. CPU limits can cause throttling; memory limits can lead to an out-of-memory kill. Two workers described as having the same requested resources can therefore behave differently if their limits or available capacity differ.",
          "For a concrete failure, retain the command, exit status, elapsed time, and available runtime evidence such as OOM events or CPU throttling metrics. A generic tool-error string is too little information to tell whether the agent chose a bad command or the worker could not run a reasonable one."
        ],
        "sources": [
          {
            "label": "Kubernetes: Resource management for Pods and containers",
            "href": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"
          }
        ]
      },
      {
        "heading": "Keep two views of failure",
        "paragraphs": [
          "I would keep an end-to-end completion rate that includes infrastructure failures. If a user asks for a patch and receives nothing, the product failed to deliver, regardless of which team owns the cause. Removing inconvenient runs from that number makes the product look more dependable than it is.",
          "Alongside it, keep a diagnostic breakdown: incorrect result, agent-caused resource exhaustion, environment failure, grader failure, and unresolved cause. These are investigation labels, not automatic excuses. An OOM event alone cannot decide the label: the agent may have launched an unnecessarily large job, or an ordinary test command may have exceeded an undersized worker.",
          "Where a failure is independently confirmed to be environmental, report the count and a separately labelled analysis of valid runs. Preserve the original denominator and explain any reruns. This gives the infrastructure team something to fix without quietly giving the agent a better score."
        ]
      },
      {
        "heading": "Use reruns to answer a specific question",
        "paragraphs": [
          "For a release comparison, I would interleave baseline and candidate runs across the same worker pool, reset each task to a clean starting state, and repeat enough trials to see whether a small apparent improvement is stable. Running all baseline tasks first and all candidate tasks later leaves time-dependent load as an avoidable confounder.",
          "For diagnosis, change one condition deliberately. Re-run the failing test command from the saved patch on a fresh worker under the original limits. Then, if needed, repeat with more memory. Keep these diagnostic runs separate from the release score: they answer why a failure happened, not what the shipped configuration achieves.",
          "Extra resources are not a universal correction. They can allow a computationally expensive strategy that was impossible under the intended budget. If the candidate only wins with a larger worker, that may still be a worthwhile product change, but the decision now includes compute cost and deployment capacity."
        ]
      },
      {
        "heading": "Make the release decision reproducible",
        "paragraphs": [
          "The report I want is small enough to read and detailed enough to reproduce: model and harness versions, task and grader revisions, environment configuration, completion results, failure counts, and the rerun policy. Link the few traces that explain the important differences. Keep repeated trials grouped by task when estimating uncertainty, so they are not mistaken for independent new tasks.",
          "Before switching models, ask whether the improvement survives the environment the product will actually use. Before expanding the worker pool, ask whether the failures come from capacity or from the agent’s choices. That separation saves teams from tuning prompts around broken infrastructure and from buying infrastructure to hide a weak workflow.",
          "A useful evaluation should lead to a concrete next action. Sometimes that action is a model change. Sometimes it is fixing the test runner. The report should help us tell the difference."
        ]
      }
    ]
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Oct 02, 2026",
    blogHeading:
      "Agent Streaming Needs Typed Lifecycle Events, Not Just a Raw Token Pipe",
    slug: "agent-streaming-needs-typed-lifecycle-events-not-just-a-raw-token-pipe",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "When engineering teams build conversational chatbots, piping raw delta tokens over Server-Sent Events (SSE) directly from model provider to browser works smoothly. But when that system evolves into an autonomous agent that reasons, coordinates parallel tools, runs terminal commands, and pauses for human approval, an unstructured token pipe completely breaks down. Frontend applications are bombarded with fragmented JSON parameter syntax, uncommitted reasoning tokens that leak internal prompts, out-of-order tool outputs, and fragile connections that corrupt client state on a transient network drop. Reliable agent streaming requires decoupling transport-level inference deltas from application-level lifecycle events—wrapping turns in typed event envelopes with monotonic sequence numbers, server-side tool buffering, and explicit interrupt boundaries.",
    sections: [
      {
        heading: "The breakdown of the raw token pipe in agentic loops",
        paragraphs: [
          "In a classic text completion or chat interface, token streaming is simple and linear: the provider emits UTF-8 text fragments, and the client UI appends them to a markdown string buffer. But an autonomous agent's generation trajectory is neither simple nor linear. A single agent turn interweaves hidden scratchpad reasoning, parallel tool calls, background bash or API executions, wait states, and structured JSON payloads.",
          "Passing raw provider chunks directly across the public network forces the frontend to act as a parser for an in-flight runtime engine. If a model begins emitting tool invocation arguments across dozens of tiny chunk fragments—such as partial JSON tokens—the frontend must either attempt speculative, error-prone JSON reassembly or display jarring raw syntax to the user. Worse, if the model aborts an execution path or self-corrects mid-generation, an unbuffered token pipe has already permanently written those invalid tokens into the user interface, creating visual artifacts and desynchronizing the client's state machine.",
        ],
      },
      {
        heading: "Decoupling inference transport from agent protocol events",
        paragraphs: [
          "The architectural foundation of resilient streaming is a strict separation between inference transport streaming and application protocol streaming. Upstream transport streaming connects the agent gateway to LLM provider inference endpoints over short-lived HTTP chunked streams. Its sole responsibility is ingesting model tokens into the server-side agent harness as fast as the GPU generates them.",
          "In contrast, downstream protocol streaming connects the agent harness to the user interface, API client, or orchestrator. The downstream channel must never transmit raw, unparsed model tokens. Instead, the server-side harness acts as a stateful event broker: it consumes raw deltas, enforces security and redaction filters, validates tool call arguments against schema definitions, executes the tools inside sandboxed environments, and emits discrete, strongly typed domain events. The client UI subscribes to an explicit state machine rather than an unstructured text accumulator.",
        ],
        sources: [
          {
            label: "Anthropic: Streaming Messages Guide",
            href: "https://platform.claude.com/docs/en/build-with-claude/streaming",
          },
          {
            label: "Model Context Protocol: Specification",
            href: "https://modelcontextprotocol.io/specification",
          },
        ],
      },
      {
        heading: "Monotonic sequencing and reconnection invariants",
        paragraphs: [
          "Unlike chat turns that finish in three seconds, autonomous agent tasks often run for 30 to 180 seconds as they navigate multi-step tool calls, compile code, and query external infrastructure. Across that duration, network drops are an inevitability: mobile clients switch towers, laptop lids close, and corporate proxies terminate idle HTTP connections.",
          "With a raw token pipe, a severed connection leaves the client completely stranded. The UI either freezes indefinitely or retries the entire HTTP request, spinning up duplicate agent compute and risking repeated side-effectful mutations. A production streaming harness must assign every emitted event a monotonically increasing sequence identifier and maintain a sliding event ring buffer in memory or durable cache. By leveraging the standard Last-Event-ID header in Server-Sent Events, a reconnected client simply requests all missed events. The server replays the missed state transitions immediately without re-triggering model inference or re-executing tools.",
        ],
        sources: [
          {
            label: "WHATWG: Server-Sent Events Specification",
            href: "https://html.spec.whatwg.org/multipage/server-sent-events.html",
          },
        ],
      },
      {
        heading: "Tool execution barriers and buffered state dispatch",
        paragraphs: [
          "When an agent invokes tools—particularly when using parallel tool calling—the harness must enforce an execution barrier before notifying the client. Even when the model streams argument deltas over dozens of tokens, the harness must buffer the entire argument string until the provider emits a stop token or block delimiter, then parse and validate the payload against the tool's registered JSON schema.",
          "Only after schema validation passes does the harness emit an official tool invocation event with canonical input arguments, transitioning the UI into an active tool indicator. When the tool completes execution, the harness captures the output, error codes, and execution duration, emitting a settled tool event. If a tool fails due to a transient network timeout and the harness executes an automated retry policy, the streaming protocol handles the retry transparently, emitting status updates without flashing contradictory error screens to the user.",
        ],
      },
      {
        heading: "Human-in-the-loop interrupts as first-class stream states",
        paragraphs: [
          "Autonomous workflows frequently reach critical decision gates where irreversible side effects require human consent: dropping a database partition, updating production Kubernetes ingress, or transferring capital. A common engineering mistake is leaving the streaming HTTP connection hanging indefinitely while waiting for an operator to review the prompt. This pattern invariably triggers gateway timeouts, consumes precious server socket pools, and crashes if the operator steps away.",
          "In a typed lifecycle architecture, an approval requirement is a first-class stream event. The event delivers the proposed action payload, an authorization context, and a short-lived cryptographic resumption token. Once the interrupt event is flushed, the harness persists the execution checkpoint to durable storage and closes the stream with a clean paused status. When the operator approves or rejects the action via a separate authenticated endpoint, the agent harness resumes from the checkpoint, allowing the client to establish a fresh stream seamlessly.",
        ],
      },
      {
        heading: "A typed event taxonomy for production agent frontends",
        paragraphs: [
          "Building predictable, high-polish agent frontends requires an unambiguous contract between harness and UI. A robust agent protocol should categorize all stream packets into five distinct event domains: lifecycle events (started, completed, failed with error codes), deliberation events (thought deltas for collapsible scratchpads), action events (tool proposed, executing, completed), interaction events (interrupt requested, interrupt resolved), and artifact events (diff patches for incremental file or code changes).",
          "By transitioning from a raw token pipe to a typed lifecycle protocol, teams transform a fragile, flickering terminal into an enterprise-grade product interface. Frontends gain deterministic rendering, connection resilience, clean audit trails, and the ability to guide users through complex, multi-minute autonomous tasks with complete visibility and confidence.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Sep 30, 2026",
    blogHeading:
      "Structured Outputs Need Semantic Invariants, Not Just a Strict Schema",
    slug: "structured-outputs-need-semantic-invariants-not-just-a-strict-schema",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "When engineering teams adopt structured outputs and grammar-constrained decoding, JSON parsing errors drop to zero and malformed tool calls disappear overnight. But guaranteed schema compliance frequently creates a dangerous illusion of correctness: constrained decoding enforces syntactic grammar at the token sampling level, not domain truth. Without runtime semantic invariants, an agent constrained by a strict JSON schema will confidently hallucinate valid-looking foreign keys, invent plausible dates, fill required fields with synthetic filler, and degrade reasoning quality because it was denied a scratchpad before committing to the schema.",
    sections: [
      {
        heading: "The illusion of correctness behind grammar masking",
        paragraphs: [
          "Grammar-constrained decoding—formalized by open-source libraries like Outlines and natively implemented in OpenAI Structured Outputs and inference engines like vLLM—transforms JSON schemas into deterministic finite automata (DFAs) or pushdown automata. At every autoregressive generation step, the engine indexes the schema grammar against the model's vocabulary trie, setting the logits of any token that violates the JSON specification or schema AST to negative infinity. This delivers an absolute guarantee: the output is 100 percent syntactically valid JSON that adheres perfectly to the declared types, keys, and regexes.",
          "Because the serialization failure rate drops to zero, teams often assume their extraction pipelines and agent tool invocations are suddenly reliable. But a grammar mask operates purely on token syntax. It has zero awareness of application state, business logic, or ground truth. A string property constrained to a strict UUID pattern or alphanumeric format will always parse cleanly, yet the generated ID can be entirely hallucinated. Constrained decoding solves serialization; it does not solve truth.",
        ],
        sources: [
          {
            label: "OpenAI: Structured Outputs Guide",
            href: "https://developers.openai.com/api/docs/guides/structured-outputs",
          },
          {
            label: "arXiv: Efficient Guided Generation for Large Language Models (Outlines)",
            href: "https://arxiv.org/abs/2307.09702",
          },
        ],
      },
      {
        heading: "The chain-of-thought penalty of immediate schema commitment",
        paragraphs: [
          "Autoregressive language models reason through token generation. Unlike human programmers who think through a problem before typing out a data structure, a language model emits tokens sequentially. If an agent's response format forces it to immediately emit an opening bracket followed by a high-stakes decision field—such as {\"decision\": \"REJECT\", \"action\": ...}—the model is forced to commit to its conclusion on token two or three, long before its attention heads have processed the nuance of the request.",
          "Constraining an agent into an immediate structured payload without an unconstrained reasoning buffer measurably degrades decision quality. In complex routing, multi-step classification, or code analysis, forcing premature structural commitment produces fragile answers that look clean in a JSON viewer but collapse under inspection. A production schema must always provide an unconstrained scratchpad field—such as reasoning, analysis, or thought—as the very first property in the object. This gives the model tokens to evaluate constraints and deliberate before emitting binding fields.",
        ],
      },
      {
        heading: "The strict schema trap: mandatory fields and hallucinated filler",
        paragraphs: [
          "In strict JSON schema modes, engines enforce additionalProperties: false and require that every defined field be included in the required array. While this strictness ensures deterministic keys, it introduces a severe trap when real-world inputs are incomplete, ambiguous, or missing expected attributes.",
          "When an autonomous agent extracts metadata from an unstructured document or customer message and encounters a required field that is nowhere in the source text, the grammar mask prevents it from omitting the key. The model cannot say \"not provided\" if the property type is an integer, and it cannot skip the field. To satisfy the token mask, the model is forced to hallucinate: inventing default dates, fabricating arbitrary phone numbers, or generating plausible-sounding placeholder strings. Production schemas must deliberately model epistemic uncertainty by declaring nullable union types (type: [\"string\", \"null\"]) and providing explicit UNKNOWN or NOT_APPLICABLE enum variants.",
        ],
      },
      {
        heading: "Schema compilation overhead and prompt caching friction",
        paragraphs: [
          "Translating an arbitrary JSON schema into a vocabulary-indexed state machine is computationally non-trivial. For schemas with extensive enums, deeply nested objects, or complex regular expressions, compiling the grammar DFA introduces noticeable latency—often adding hundreds of milliseconds to Time to First Token (TTFT) on the initial request.",
          "If an application dynamically synthesizes schemas on the fly—for example, injecting dynamic user IDs into enum lists or altering property descriptions per session—every request forces a cold grammar compilation. Even worse, dynamically mutating the tool or schema definitions at runtime breaks prefix prompt caching across turns, forcing both the grammar compiler and the GPU KV cache to start from scratch. High-throughput agent systems must treat schemas as static, pre-compiled build artifacts, passing dynamic constraints through prompt parameters rather than mutating schema structures on every turn.",
        ],
      },
      {
        heading: "A two-phase boundary: grammar at the model, invariants at the harness",
        paragraphs: [
          "Eliminating hallucinations and bad state transitions requires recognizing where grammar enforcement ends and software engineering begins. Constrained decoding belongs at the inference boundary to eliminate parsing errors and guarantee syntactic contracts. But the agent harness must enforce a second, non-negotiable layer: a typed semantic invariant fence.",
          "Before any structured payload or tool call is applied to a database, external API, or production workflow, the harness runs deterministic invariant checks: verifying that foreign keys resolve in the database, dates respect temporal logic, financial amounts do not exceed current balances, and parameter combinations do not violate business invariants. When an invariant fails, the harness should not throw a generic error. It captures the exact domain contradiction and injects it back into the agent conversation as a structured feedback event, turning an invalid hallucination into an autonomous self-correction loop.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Sep 28, 2026",
    blogHeading:
      "Prompt Caching Needs Prefix Discipline, Not Just a Provider Toggle",
    slug: "prompt-caching-needs-prefix-discipline-not-just-a-provider-toggle",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "Most engineering teams enable prompt caching expecting an immediate 70 to 80 percent drop in inference latency and token bills, only to find their production agent loops barely registering a 15 percent cache hit rate. Prompt caching is not an ambient infrastructure switch that magically optimizes arbitrary agent runs; it is a strict prefix-matching contract. If an agent harness does not structure its prompt layers with deliberate prefix discipline, ordinary runtime practices like dynamic timestamps, unstable tool serialization, and eager rolling summarization will silently reset the KV cache on every turn.",
    sections: [
      {
        heading: "The silent invalidation of the KV cache",
        paragraphs: [
          "Modern LLM inference engines—whether hosted APIs like Anthropic and OpenAI or self-hosted engines using vLLM—rely on Key-Value (KV) caching to avoid recomputing attention keys and values for tokens already processed in previous requests. The economic and latency benefits are dramatic: reading from the KV cache routinely cuts token costs by 50 to 90 percent and slashes Time to First Token (TTFT) from multi-second pauses down to hundreds of milliseconds.",
          "However, prompt caching operates on an exact prefix match starting from token position zero. The cache functions like a deterministic trie: the engine reuses cached states only as long as every token in the prompt identically matches the stored sequence. The moment a single token diverges—whether an altered word, an extra space, or a swapped key—the entire downstream cache is invalidated. In an agent loop processing tens of thousands of context tokens across 20 turns, a tiny mutation near the beginning of the prompt forces the provider GPUs to re-evaluate the full sequence from scratch.",
        ],
      },
      {
        heading: "Common agent anti-patterns that destroy cache hits",
        paragraphs: [
          "Most cache misses in agentic systems are self-inflicted by well-intentioned application code. The most ubiquitous offender is injecting dynamic runtime metadata into the system prompt. Adding lines like \"Current time: 2026-09-28 09:14:02 UTC\" or including an ephemeral request UUID at the head of the system prompt guarantees that every single turn has a completely unique prefix, reducing the global cache hit rate to zero.",
          "A second common culprit is non-deterministic tool schema serialization. When tool definitions are generated dynamically, assembled from reflection, or serialized from dictionary iterations without canonical key sorting, the resulting JSON string can shuffle parameter descriptions or property orders between requests. Even if the underlying capabilities are identical, the token representation shifts, busting the cache. Similarly, injecting dynamic user permissions, tenant-specific switches, or volatile feature flags at the top of the prompt fractures cache reuse across sessions.",
        ],
      },
      {
        heading: "The layered prompt stack: ordering by rate of change",
        paragraphs: [
          "To achieve reliable 80-plus percent cache hit rates across iterative workflows, an agent harness must design its prompt structure as a layered stack ordered strictly by mutability. Content that never changes must sit at the absolute root, while highly dynamic variables must be pushed to the very leaf.",
          "A production harness should enforce five discrete layers in sequence: First, the static system instructions, role definitions, and immutable security policies common to all runs. Second, canonically sorted, frozen tool definitions and JSON schemas. Third, stable grounding context—such as architectural guidelines, pinned repository documentation, or cached retrieval artifacts. Fourth, the monotonic conversation trajectory, where past user queries, tool invocations, and tool results remain append-only and strictly immutable. Finally, dynamic turn ephemera—current timestamps, volatile environment scratchpads, or per-turn user overrides—placed exclusively at the very end of the final message.",
        ],
        sources: [
          {
            label: "Anthropic: Prompt Caching Documentation",
            href: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching",
          },
          {
            label: "OpenAI: Prompt Caching Guide",
            href: "https://developers.openai.com/api/docs/guides/prompt-caching",
          },
        ],
      },
      {
        heading: "The tension between context compaction and prefix caching",
        paragraphs: [
          "As autonomous agents tackle long-horizon tasks, engineering teams naturally implement context compression: sliding window truncation, rolling summarization, or removing early tool outputs to stay within token budgets. But naive context eviction directly wars with prompt caching. If your harness summarizes turns three through six to reclaim 2,000 tokens, it rewrites the prompt prefix at turn three. That single edit invalidates the cached KV states for turns seven through twenty.",
          "The compute cost and TTFT latency penalty of re-evaluating 40,000 downstream tokens usually dwarfs the minor token cost saved by micro-summarization. Instead of continuous, rolling compaction, production harnesses should adopt milestone-based checkpointing or epochal rollups. The agent appends turns monotonically to maximize KV cache reuse until a predetermined context threshold is crossed. Only then does the harness execute a scheduled, structured compaction, intentionally resetting the prefix at a stable milestone and establishing a fresh cache baseline.",
        ],
      },
      {
        heading: "Gateway routing and the operational economics of speed",
        paragraphs: [
          "Prefix discipline inside the application code is only half the equation; the underlying infrastructure routing must support it. In multi-node deployments or private clusters running vLLM, prompt caches reside in the physical GPU memory of specific instances. If an API gateway uses naive round-robin load balancing, turn one may hit worker A and turn two worker B, resulting in cold cache misses despite perfectly formatted prefixes. Production model gateways must implement session-affinity routing, directing consecutive steps of an agent run to the same inference node.",
          "In modern AI engineering, prompt caching is not merely a tactic to lower provider invoices; it fundamentally alters what agent applications can feel like. When an agent reading a 100,000-token repository context responds in under 800 milliseconds rather than twelve seconds per turn, autonomy shifts from an asynchronous batch pipeline into a seamless, interactive developer partner. Building that responsiveness does not require waiting for faster foundation models—it requires treating prompt prefix layout as an architectural invariant.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Sep 18, 2026",
    blogHeading:
      "A Coding Agent Needs a Language Server, Not Just Grep and File Dumps",
    slug: "a-coding-agent-needs-a-language-server-not-just-grep-and-file-dumps",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "When an autonomous coding agent investigates a codebase using regex search and full file reads, it wastes thousands of tokens on false positives, loses track of deep call hierarchies, and remains blind to syntax and type errors until a test suite fails minutes later. If you want a coding agent to navigate complex repositories with speed and precision, the execution harness must give it compiler-grade Language Server Protocol (LSP) primitives, not just text grep.",
    sections: [
      {
        heading: "The token tax of textual code discovery",
        paragraphs: [
          "The conventional toolset for a coding agent is simple: a file tree explorer, a regex grep command, and a file read tool. In small toy projects, that is often enough. But in medium-to-large codebases, relying strictly on textual search is notoriously inefficient.",
          "Common identifiers like config, handleAuth, or validate appear across hundreds of lines—in test fixtures, comments, documentation strings, and unrelated packages. An agent searching for a function definition is forced to read through multiple false-positive hits, pulling hundreds of irrelevant lines into the conversation. Within three or four exploratory turns, the context window is bloated with dead code fragments, pushing system instructions, task constraints, and previous user inputs toward compression or eviction.",
        ],
      },
      {
        heading: "Deterministic symbol traversal over fuzzy text matching",
        paragraphs: [
          "Human engineers do not inspect codebases by running ripgrep on every method call; they rely on language intelligence built into their editor. The Language Server Protocol (LSP) formalizes this intelligence into a standardized client-server protocol decoupled from any specific editor.",
          "By wiring an LSP client directly into the agent harness, the agent shifts from fuzzy textual guessing to deterministic AST navigation. Instead of scanning files to find where a function lives, the agent calls textDocument/definition to jump straight to the source declaration across package boundaries. Instead of grepping for every appearance of a word, it calls textDocument/references to list genuine call sites with zero comment or string noise. And when it needs an overview of a large module, textDocument/documentSymbol returns classes, interfaces, and methods in a clean structural outline without burning thousands of tokens reading file bodies.",
        ],
        sources: [
          {
            label: "Microsoft: Language Server Protocol Specification",
            href: "https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/",
          },
        ],
      },
      {
        heading: "Sub-second compiler diagnostics vs. delayed test runs",
        paragraphs: [
          "The most critical gap in a pure bash-or-diff agent loop is the verification cycle. When an agent edits a file, the standard feedback mechanism is running a test suite or a full compiler build like tsc, cargo check, or pytest. In production repositories, a cold build or test suite run can easily take anywhere from 30 seconds to several minutes.",
          "Even worse, if test coverage is sparse, subtle errors—like misspelled optional properties, incompatible argument types, or missing imports—pass unnoticed until human code review. An LSP server solves this through real-time push diagnostics (textDocument/publishDiagnostics). As soon as an agent applies an edit to a buffer, the language server immediately returns compiler errors, type warnings, and missing reference alerts. The agent can catch and fix a type discrepancy in milliseconds before it ever runs an expensive test suite or attempts to commit.",
        ],
        sources: [
          {
            label: "Visual Studio Code: Language Server Extension Architecture",
            href: "https://code.visualstudio.com/api/language-extensions/language-server-extension-guide",
          },
        ],
      },
      {
        heading: "Adapting verbose JSON-RPC into compact agent tools",
        paragraphs: [
          "While language servers provide rich semantic data, exposing raw LSP JSON-RPC payloads directly to an LLM is a mistake. A standard textDocument/publishDiagnostics or references response contains deeply nested objects with URI strings, full range coordinates, and diagnostic flags that consume excessive context tokens if forwarded verbatim.",
          "A production harness should act as an intelligent compression adapter. Rather than dumping raw JSON-RPC structures into the agent prompt, the tool interface should synthesize concise, high-signal results: file:line:col formatted locations, symbol signatures, and crisp diagnostic messages. Giving the agent focused primitives like goto_definition, find_references, and get_diagnostics provides maximum compiler precision with minimal token overhead.",
        ],
      },
      {
        heading: "Compiler grounding turns guesswork into engineering",
        paragraphs: [
          "When combined with isolated Git worktrees, headless language servers (such as tsserver, pyright, gopls, or rust-analyzer) transform the autonomy ceiling of coding agents. Instead of behaving like an overconfident text generator that guesses import paths and hopes tests pass, the agent operates with the same semantic certainty as a senior engineer in an IDE.",
          "Autonomy in software engineering is rarely blocked by an LLM's raw reasoning ability. It is blocked by noisy context, incomplete feedback, and slow verification loops. Giving agents direct access to compiler intelligence eliminates the guesswork, grounds every code change in verified AST semantics, and turns developer AI tools from impressive autocomplete engines into dependable collaborators.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Sep 16, 2026",
    blogHeading:
      "A Coding Agent Needs an Isolated Worktree, Not a Shared Working Directory",
    slug: "a-coding-agent-needs-an-isolated-worktree-not-a-shared-working-directory",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "When an autonomous coding agent edits files directly in your active project folder, it collides with uncommitted work, trips local hot reloads, and makes rollbacks messy. If you want multi-turn agent runs to be safe, fast, and concurrent, the execution harness needs to operate inside isolated Git worktrees rather than mutating the developer's working directory.",
    sections: [
      {
        heading: "The collision course of the in-place working directory",
        paragraphs: [
          "The default mental model for a developer AI tool is an interactive shell or editor plugin operating directly on the current directory. When an agent only inspects files or answers questions, running in-place is harmless. But the moment you grant it authority to refactor modules, edit configuration files, and run test suites, executing directly inside the developer's working tree becomes a liability.",
          "Real engineering workspaces are rarely pristine. Developers have half-finished edits in progress, untracked scratch notes, and running development servers. When an agent begins applying partial edits across files, hot module reload (HMR) watchers immediately fire on broken syntax, crashing local dev servers or spamming logs. Language servers trigger frantic AST re-indexing mid-turn. Worse, if the agent fails or gets interrupted five turns into a complex migration, the developer is left with a contaminated workspace and no clean line between human intent and agent missteps.",
        ],
      },
      {
        heading: "Independent indexes without the weight of full clones",
        paragraphs: [
          "The naive fix for workspace pollution is cloning the repository into an ephemeral temporary folder. But for medium-to-large codebases, a full clone is hopelessly inefficient: it duplicates the entire object database, wastes gigabytes of disk space, and incurs noticeable startup latency before the agent can even inspect its first file.",
          "Git worktrees solve this with native repository-level isolation. By running git worktree add, the agent harness spins up an independent working directory and branch while sharing the parent repository's object store and packfiles. The agent receives its own dedicated index and working tree, completely decoupled from the developer's active branch and unstaged changes. The developer can keep coding, testing, and switching branches on their primary checkout without any risk of stepping on the agent's work.",
        ],
        sources: [
          {
            label: "Git documentation: git-worktree specification and usage",
            href: "https://git-scm.com/docs/git-worktree",
          },
        ],
      },
      {
        heading: "Taming dependency overhead and environment drift",
        paragraphs: [
          "While worktrees isolate files and Git references cheaply, language runtimes present practical friction. If an agent has to execute a full dependency installation like npm install, bundle install, or a Python virtual environment build on every single task run, the latency penalty kills developer adoption.",
          "A robust agent harness handles runtime state pragmatically. For node-based projects, sharing dependencies through content-addressable package caches or symlinking node_modules from the primary checkout allows the agent to immediately run test suites and linters without re-downloading packages. Similarly, environment configurations like .env.local or tool configs require a deliberate isolation policy: rather than blindly mirroring all untracked files—which might leak local secrets—the harness should explicitly provision task-scoped environment variables and validated fixtures into the worktree sandbox.",
        ],
      },
      {
        heading: "Concurrency and the shared repository lock bottleneck",
        paragraphs: [
          "Because worktrees share the underlying .git storage directory, they do not provide unlimited write concurrency at the Git metadata layer. Git protects internal references and metadata using advisory lockfiles such as index.lock and packed-refs.lock.",
          "If an orchestrator attempts to launch multiple parallel subagents—for example, assigning one agent to write unit tests, another to refactor an API route, and a third to update documentation—concurrent Git operations like branch creation, ref fetches, or commits can easily trigger lock contention. Production agent harnesses must treat Git operations as critical sections: wrap repository metadata updates with short exponential backoffs and jitter, or coordinate ref writes through a centralized lock manager in the harness runtime.",
        ],
        sources: [
          {
            label:
              "Git documentation: gitrepository-layout and shared repository architecture",
            href: "https://git-scm.com/docs/gitrepository-layout",
          },
        ],
      },
      {
        heading: "Disposability turns failure into a no-op",
        paragraphs: [
          "The greatest architectural dividend of worktree isolation is that recovery from failure becomes trivial. In an in-place execution model, canceling a run or rejecting an agent's proposal requires complex rollbacks, fragile stashes, or risky checkout commands that might accidentally discard legitimate human edits.",
          "With a worktree, disposability is the default. If an agent wanders off course or hits a token limit, the harness simply removes the worktree and deletes the temporary branch. The developer's workspace remains perfectly intact, as if the run never happened. When an agent succeeds, the outcome is not an untracked mess—it is a clean, verified branch ready for a three-way diff, interactive patch cherry-picking, or a draft pull request. Reliable autonomy begins by making experimentation completely safe to throw away.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Sep 14, 2026",
    blogHeading: "Agent Memory Needs an Eviction Policy, Not Just Summarization",
    slug: "agent-memory-needs-an-eviction-policy-not-just-summarization",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "When an agent runs across dozens of tool calls, the default reaction to a growing context window is to run a periodic summary. But in production, naive summarization creates two persistent failure modes: it quietly drops exact invariants like negative constraints and IDs, and it allows stale environmental observations to poison later turns. If you want a long-running agent to remain reliable, its context needs an explicit eviction policy, not a fuzzy roll-up.",
    sections: [
      {
        heading: "The hidden loss in rolling summarization",
        paragraphs: [
          "Most context compaction strategies treat prompt history as an append-only conversation transcript. When token usage crosses a threshold, the harness invokes a model to generate a concise summary of the turns so far, replaces early messages with that summary, and continues. In an open-ended conversational assistant, that feels seamless. In an autonomous engineering agent, it is often where reliability falls apart.",
          "Production tasks depend on exact details: specific file paths, Git commit hashes, API response error codes, compiler output, and explicit user-specified negative constraints. A summarizer might condense three turns of debugging into \"investigated auth error and updated token handling.\" But it often drops that the user specifically insisted on not modifying the database schema, or it rounds off a subtle line-number offset. When the agent acts on that lossy narrative, it reintroduces bugs it previously solved or violates boundaries it was explicitly given.",
        ],
        sources: [
          {
            label: "OpenAI: Function calling and structured outputs in agent loops",
            href: "https://developers.openai.com/api/docs/guides/function-calling",
          },
        ],
      },
      {
        heading: "Stale observations are more dangerous than forgotten ones",
        paragraphs: [
          "In an interactive system, context is not just conversational history; it is a point-in-time snapshot of the external environment. If an agent inspects a configuration file in step 2, modifies it in step 5, and queries related code in step 8, keeping the raw step 2 observation in context introduces direct contradictions. The prompt now presents two competing versions of reality.",
          "If a rolling summarizer attempts to reconcile those turns, it frequently produces a hallucinated blend of before-and-after states. An agent might see its earlier inspection and assume an old function signature still exists. To prevent this, the runtime needs mutation-aware eviction: when a tool call modifies a file, schema, or system record, any earlier read observations referencing that resource should be marked dirty or evicted from active working memory.",
        ],
        sources: [
          {
            label: "Model Context Protocol: Resources specification",
            href: "https://modelcontextprotocol.io/specification/2025-06-18/server/resources",
          },
        ],
      },
      {
        heading: "Separate invariant anchors from volatile scratchpads",
        paragraphs: [
          "The fix is not to build a more clever summarization prompt; it is to recognize that different pieces of context have fundamentally different lifecycles. Treating user intent, ephemeral tool stdout, and durable system state as a single stream of text is an architectural flaw. I think about context in three distinct tiers:",
          "First, invariant anchors: the initial user prompt, top-level acceptance criteria, security boundaries, and negative constraints. These should be pinned and permanently exempt from compaction. Second, the working scratchpad: intermediate tool inputs and outputs used for short-term reasoning. This should be aggressively evicted as soon as a step completes. Third, durable checkpoint facts: explicit key-value assertions like \"checked out branch fix/auth\" or \"reproduction script failed with code 127\". These are deterministic truths that survive compaction without losing precision.",
        ],
      },
      {
        heading: "Evict raw payloads, retain structured assertions",
        paragraphs: [
          "The vast majority of tokens in an agent's context window do not come from conversation—they come from raw tool outputs. A single test run, a Git diff, or an API response can easily inject thousands of tokens. Leaving that raw text in the prompt for twenty subsequent turns provides zero incremental value once the agent has already extracted what it needed.",
          "Rather than allowing raw payloads to accumulate until an emergency summarization triggered by context exhaustion, a production harness should evict tool output immediately upon consumption. When a test command finishes, replace the 500-line terminal dump with a verified assertion: \"test suite ran 34 tests, 0 failures, exit code 0.\" If the full output is ever needed for human review or deep auditing, it should be logged out-of-band in durable telemetry, not carried along in the model's active reasoning buffer.",
        ],
        sources: [
          {
            label: "Model Context Protocol: Tools specification",
            href: "https://modelcontextprotocol.io/specification/2025-06-18/server/tools",
          },
        ],
      },
      {
        heading: "Coordinate eviction with prompt caching",
        paragraphs: [
          "Eviction design cannot be separated from inference economics. Modern model APIs rely heavily on prompt caching to deliver responsive agent interactions and reasonable costs. But prompt caching is prefix-based: the moment you rewrite or truncate tokens in the middle of a prompt, you invalidate the cache for all subsequent tokens, spiking latency and cost on every subsequent step.",
          "If an eviction policy cleans up history unpredictably on every single turn, it destroys cache hits across the entire loop. A production agent architecture must align its eviction cadence with cache stability: keep invariant system instructions and tools strictly static at the head, append working scratchpad turns at the tail, and execute compaction at predictable epochs. You keep context lean, avoid stale drift, and preserve cache performance at the same time.",
        ],
        sources: [
          {
            label: "Claude documentation: Prompt caching architecture",
            href: "https://platform.claude.com/docs/en/build-with-claude/prompt-caching",
          },
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Sep 2, 2026",
    blogHeading: "Agent Tool Policy Needs a Composition Rule, Not Just Labels",
    slug: "agent-tool-policy-needs-a-composition-rule-not-just-labels",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "A tool can be harmless when considered alone and risky in the next step. That is why I do not want an agent’s safety posture to be a catalogue of tool labels. It needs a policy that can see the sequence: what the agent has read, where it is about to send information, and whether that combination is actually allowed for this task.",
    sections: [
      {
        heading: "A safe-looking tool can change the meaning of the next one",
        paragraphs: [
          "Tool metadata is valuable because it gives a client a compact way to describe behaviour. In MCP, annotations can indicate whether a tool is read-only, destructive, idempotent, or reaches an open world. Those are useful prompts for a product to show the right interface or require more care before an invocation.",
          "But production risk often lives in the path rather than a single call. Reading an internal record is one kind of action. Posting a message to an external destination is another. Put them in the same task, and the system now has a potential disclosure path. Neither individual label answers whether that path was approved. The recent MCP discussion on tool annotations makes the same distinction: annotations help describe a tool, while the runtime and authorization layer need to enforce the guarantees.",
        ],
        sources: [
          {
            label: "Model Context Protocol: Tool annotations as risk vocabulary",
            href: "https://blog.modelcontextprotocol.io/posts/2026-03-16-tool-annotations/",
          },
        ],
      },
      {
        heading: "Treat capability pairs as a design surface",
        paragraphs: [
          "I would start a tool review by looking for pairs and short chains that change the stakes: private retrieval followed by external communication, a broad search followed by an irreversible write, or a planning tool followed by a deployment action. This does not mean every pair deserves a separate rule. It means the combinations that cross a data, identity, or consequence boundary deserve an explicit answer.",
          "A small matrix is usually enough to begin. For each relevant source class and destination class, decide whether the workflow is allowed, needs a human approval, requires a redacted artifact, or is simply unavailable. This turns a vague instruction such as ‘do not leak sensitive data’ into a decision the surrounding system can make before it presents a send button or executes a call.",
        ],
      },
      {
        heading: "Make the policy depend on the actual task",
        paragraphs: [
          "The same two tools can be acceptable in one workflow and wrong in another. A support agent may be allowed to look up a customer’s ticket and draft a reply into that customer’s case, while an engineering assistant should not use the same ticket content as material for a public status update. The policy needs the task’s user, purpose, target, and data classification—not only the name of the tool the model selected.",
          "That is also why I would keep the model’s description of intent separate from the authorizing decision. The model can propose a structured action with a stable target and a purpose. Deterministic code can check the current identity, task scope, connector, and policy version. A confirmation dialog is still useful for consequential work, but it is most meaningful when it describes a decision the system has already bounded.",
        ],
        sources: [
          {
            label: "Model Context Protocol: Tools specification",
            href: "https://modelcontextprotocol.io/specification/2025-06-18/server/tools",
          },
        ],
      },
      {
        heading: "Carry provenance across the boundary",
        paragraphs: [
          "Once a tool result becomes input to another tool, the second decision should retain a small amount of provenance. I would attach source identifiers, sensitivity or trust class, the task that retrieved the material, and the policy outcome that permits its next use. The agent does not need a giant transcript to make that useful; it needs the facts that matter to the action boundary.",
          "This matters for open-world tools in particular. The MCP guidance notes that an external tool can bring untrusted content back into a session. Treating that result as ordinary instruction text creates the opposite problem from data leakage: outside content can begin steering an internal action. Provenance helps a runtime say both ‘this may not be sent there’ and ‘this may not alter policy here.’",
        ],
        sources: [
          {
            label: "Model Context Protocol: Tool annotations as risk vocabulary",
            href: "https://blog.modelcontextprotocol.io/posts/2026-03-16-tool-annotations/",
          },
        ],
      },
      {
        heading: "Evaluate the chains you intend to permit",
        paragraphs: [
          "A tool-by-tool test suite will miss the most important failures. I would add representative chains to evaluation: retrieve protected material then request an external send; inspect infrastructure then attempt a change with an expired approval; receive untrusted web content then ask to alter a local configuration. The expected behaviour might be a clean denial, a scoped approval request, a redacted draft, or a safe read-only alternative. The point is to specify it before a fluent model finds an accidental route around it.",
          "The evidence should describe the decision path, not private model reasoning: task identifier, source and destination classes, requested capability, policy version, approval state, and result. That gives an operator a way to understand a surprising outcome and gives the team a regression case when a connector, prompt, or model changes. Good tool metadata still improves the experience. A composition rule is what keeps that experience from becoming the safety boundary.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 31, 2026",
    blogHeading: "An MCP Connection Needs a Trust Record, Not Just a Server URL",
    slug: "an-mcp-connection-needs-a-trust-record-not-just-a-server-url",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "Remote MCP makes it remarkably easy to give an AI system another capability. That convenience can hide the real integration decision: which server is being trusted, on whose behalf it may act, which resources it can reach, and how the connection changes over time. I would make those facts explicit before treating a connector as available to an agent.",
    sections: [
      {
        heading: "A server URL is not the whole integration",
        paragraphs: [
          "Adding a remote MCP server can look like configuration: provide a URL, complete a sign-in flow, and expose a few more tools. OpenAI's Responses API support for remote MCP servers makes that path intentionally straightforward. But the server is not just another model feature. It is a separate system that can describe capabilities, receive requests, and often act against data or services outside the agent runtime.",
          "I find it more useful to treat each connection as a trust relationship. The useful questions are simple but concrete: who owns the server, what identity is presented to it, which tools are enabled for this product, which resources may be affected, and who can change the connection later? If those answers only exist in a browser session or an environment variable, the integration will be hard to review when it matters.",
        ],
        sources: [
          {
            label: "OpenAI: New tools and features in the Responses API",
            href: "https://openai.com/index/new-tools-and-features-in-the-responses-api/",
          },
        ],
      },
      {
        heading: "Record the connection before exposing its tools",
        paragraphs: [
          "For every production connector, I would keep a small trust record outside the prompt: a stable server identifier and endpoint, owning team or vendor, approved environments, authentication method, enabled tool names, data classification, action class, and a review date. This is not documentation for documentation's sake. It gives operations, product, and security teams one object to discuss when a tool becomes unexpectedly powerful or a server changes behaviour.",
          "The record should distinguish discovery from approval. A client may discover that a server offers ten tools; that does not mean an agent needs all ten for every task. Select the smallest useful set and attach the selection to the workflow or task. That preserves the flexibility of MCP without turning a broad vendor integration into a permanent, ambient capability.",
        ],
      },
      {
        heading: "Keep the user's authorization pointed at the right resource",
        paragraphs: [
          "The hardest part of a remote connection is often invisible: making sure a token issued for one resource is not casually relayed to another. The MCP authorization specification requires clients to include a resource indicator where supported and requires servers to validate that a presented token was issued for them. It also explicitly forbids token passthrough. Those details protect against a connector becoming an unexamined bridge for credentials intended elsewhere.",
          "In product terms, the agent should not receive a general-purpose user token and decide where to send it. A broker or connector layer should request the right grant for the named server and resource, keep its audience clear, and reject a token that arrives at the wrong destination. The model can request an operation; deterministic infrastructure should own the identity exchange.",
        ],
        sources: [
          {
            label: "Model Context Protocol: Authorization specification",
            href: "https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization",
          },
        ],
      },
      {
        heading: "Connection changes deserve a release path",
        paragraphs: [
          "A connector is not static after its first approval. Its endpoint, advertised tools, scopes, OAuth client configuration, or data handling can change. A useful system notices that drift and treats material changes as a new review event, not as background configuration churn. This is particularly important for remote services because the application may not control their deployment cycle.",
          "I would pin the information that matters, keep an owner for the connector, and require a deliberate update when its trust record changes. That can be lightweight for a read-only internal knowledge source and more formal for a server that can create tickets, move money, or alter infrastructure. The principle is the same: a changed capability should not quietly inherit an old approval.",
        ],
      },
      {
        heading: "Make the connection legible during an incident",
        paragraphs: [
          "When a tool call surprises someone, the first useful questions are rarely about the model's prose. Which connector did the request use? Which task selected it? Which user or workload authorized it? Which tool and resource were invoked? Was the call allowed, denied, or escalated? A compact event at that boundary gives an operator a faster explanation than a long transcript can.",
          "That is why a trust record belongs alongside runtime evidence. One describes what the connection was approved to do; the other shows what it actually did. Together they make remote MCP useful without asking people to trust a growing list of server URLs on faith. The goal is not to make integrations harder to add. It is to make each new capability understandable enough to keep.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 29, 2026",
    blogHeading: "The Prompt Behind My AI Autonomy Assessment",
    slug: "the-prompt-behind-my-ai-autonomy-assessment",
    postedBy: "Shivam Maurya",
    postedAt: "AI Product Execution",
    content:
      "This is the exact prompt I used for the assessment behind ",
    contentLink: {
      href: "/writing/ai-autonomy-needs-a-workflow-not-just-a-bigger-brief",
      label: "“AI Autonomy Needs a Workflow, Not Just a Bigger Brief.”",
    },
    contentAfter:
      " It is designed to diagnose repeated behaviour, not reward the number of AI tools someone has tried.",
    prompt: `Help me determine my current level of AI adoption using Every's Eight Levels of AI Adoption.

This is not a competition, and a higher level is not necessarily better. I want an honest, evidence-based assessment of how I use AI in real work, where it helps me today, and the next useful behavior I should practice.

## The eight levels

Level 1—Chatbot: I give an AI a task, and it provides a response.

Level 2—Copilot: AI works alongside me inside the file or application where I am already working.

Level 3—Agent: I give an AI a multi-step task. It uses tools, files, or multiple sources and checks with me as it works.

Level 4—Autopilot: I give an AI a complete task, let it work independently, and review the finished result.

Level 5—Workflows: I use repeatable instructions, planning, review steps, tests, or other safeguards to make an agent's work more reliable.

Level 6—Assistant: AI proactively monitors something or performs recurring work without waiting for a new prompt.

Level 7—Multi-agent: I manage multiple long-running agents with separate tasks or responsibilities.

Level 8—Orchestrator: A manager agent plans work, delegates it to other agents, monitors progress, and escalates important decisions to me.

## How to assess me

- Use relevant memories or prior-conversation context only when it is genuinely available to you.
- Never claim that you reviewed conversations, files, or account history you cannot access.
- Judge me by repeated behavior in real work—not by the tools I own, terminology I know, or something I tried once.
- Ask me up to five questions, one at a time.
- Focus on specific tasks I have completed with AI recently.
- Ask for a concrete example when an answer is too general to support a diagnosis.
- Explore how much context I provide, what actions the AI takes, how closely I supervise it, and whether the process repeats without me initiating every step.
- Account for the possibility that I use different levels for different kinds of work.
- Do not reveal the diagnosis until you have enough evidence.
- If the evidence remains limited, say so and lower your confidence.

## The diagnosis

Once you have enough evidence, give me:

1. My primary AI adoption level.
2. The range of levels I use across different tasks.
3. Your confidence in the diagnosis: high, medium, or low.
4. The specific evidence that most influenced your decision.
5. What I am already doing well.
6. The main constraint preventing me from getting more value from AI.
7. One specific, low-risk task I should try this week to practice the next useful behavior.
8. How I will know whether that experiment helped.
9. One warning about where greater AI autonomy would create unnecessary risk, cost, or complexity for me.

Do not recommend moving up merely for the sake of reaching a higher level. Recommend the level and working style that best fit the task, its stakes, and my ability to review the result.

## Recommended reading from Every

After the diagnosis, add a section titled "Recommended Reading From Every."

Choose the two or three articles below that are most relevant to my diagnosis, the kind of work I do, and the constraint you identified:

- "The Eight Levels of AI Adoption"—the complete framework, examples for each level, and signs that someone is ready to try the next level.
- "Writing Essays With AI: A Guide"—practical ways to collaborate with AI during research, drafting, and revision.
- "Inside the AI Workflows of Every's Six Engineers"—examples of how different practitioners incorporate AI into real work.
- "Claude Code Q&A: What Works, What Doesn't, and What Will Save You Hours"—practical advice for moving from simple prompting toward agentic work.
- "How I Use Claude Code to Ship Like a Team of Five"—an example of delegating substantial work to an AI agent.
- "Stop Coding and Start Planning"—using better planning to improve the quality of multi-step agent work.
- "Compound Engineering: How Every Codes With Agents"—building repeatable planning, review, and learning workflows around agents.
- "Agent-Native Architectures"—designing products and systems in which agents are first-class participants.

Mention the article titles without adding links. For each recommendation, explain in one sentence why it is relevant to me. Do not recommend an article merely because it appears to represent a higher level.

End with this sentence:

"If you want practical guidance for getting better at using AI—not merely keeping up with the news—[explore an Every subscription](https://every.to/subscribe?utm_source=ai_level_prompt\&utm_medium=ai\&utm_campaign=eight_levels)."

Include no other promotional links or subscription language.

Begin by briefly explaining how the assessment will work, then ask your first question.`,
    sections: [],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 29, 2026",
    blogHeading: "AI Autonomy Needs a Workflow, Not Just a Bigger Brief",
    slug: "ai-autonomy-needs-a-workflow-not-just-a-bigger-brief",
    postedBy: "Shivam Maurya",
    postedAt: "AI Product Execution",
    content:
      "I am comfortable giving an AI agent a broad outcome—build the thing, debug it, test it, and come back when it is ready. That looks advanced on a capability ladder, but it has taught me a more useful lesson: autonomy is only as dependable as the workflow around it. The next improvement is not another agent. It is a repeatable way to delegate, verify, and recover.",
    sections: [
      {
        heading: "Using more AI is not the same as using it well",
        paragraphs: [
          "I have been using AI heavily for development, research, product experiments, and a few ongoing monitoring ideas. Sometimes I start with a clear problem. Sometimes I ask the model to help me find the problem worth working on, react to its suggestion, and let the direction emerge through conversation. Once something feels promising, I increasingly hand over an outcome instead of a narrow implementation task.",
          "That is a real change in how I work. I am no longer only asking for a function, a fix, or an endpoint. I might ask an agent to build a product idea, work through implementation details, debug failures, and run the available checks. It can often get surprisingly far without me steering every decision. But the number of tools I can use, or the size of the brief I can give, does not tell me whether that process is mature.",
        ],
      },
      {
        heading: "Autopilot is useful; reliability is the hard part",
        paragraphs: [
          "When an agent works from a broad objective, I am operating closer to autopilot than to copilot. I give it room to decide how to approach the work and usually intervene only when it needs a decision or returns a result. That can be enormously useful for experimentation because it lets me test what the system can actually execute rather than micromanaging every step.",
          "The catch is that a convincing completion message is not the same as a finished product. I still manually test the result and find issues the agent did not catch. It may fix one defect while introducing another, choose a plausible but weak implementation direction, or decide it is done before the work has met reality. The agent can be capable and still be unreliable. Those are separate properties, and confusing them is how an impressive demo turns into a frustrating loop.",
        ],
      },
      {
        heading: "My delegation is ahead of my system for delegation",
        paragraphs: [
          "The biggest weakness is not a lack of autonomy. It is that I have not consistently built structure around it. My real process is still very conversational: dump in an idea, explore it together, change the direction, then tell the agent to start building. That openness is valuable when the product is still unclear. It helps turn vague thoughts into something concrete.",
          "But it also means every project invents its own rules. The agent has to infer what success means, what it should inspect before changing code, which assumptions are risky, and how much evidence is enough to call the task complete. I am comfortable delegating substantial work, yet I have not always given that work a stable contract. My willingness to delegate is ahead of my system for delegation.",
        ],
      },
      {
        heading: "A better workflow creates useful boundaries",
        paragraphs: [
          "The practical improvement is deliberately unglamorous. Before implementation, define the outcome and the constraints. Ask the agent to inspect the repository and state its plan. Make uncertainty explicit, especially around product behaviour, existing conventions, and risky changes. During the work, require the checks that matter: tests, linting, type checks, builds, or a documented reason why a check could not run.",
          "At the end, review the diff rather than relying on the summary alone. The handoff should say what changed, what was verified, what remains uncertain, and what needs human testing. This does not make an agent less autonomous. It makes autonomy easier to trust because the agent's work arrives with evidence and clear boundaries instead of a single claim that it is finished.",
        ],
      },
      {
        heading: "More autonomy is not automatically the goal",
        paragraphs: [
          "I have also experimented with always-on agents, scheduled monitoring, and local systems that keep working when I am not actively prompting them. Those are interesting capabilities, but experimenting with them is different from depending on them. If I have to rediscover whether an automation is still running, it is not yet a dependable part of how I work.",
          "Adding schedules, tools, and more agents creates more state to understand and more failures to monitor. That can be worth it when the work is repeatable, the cost of a mistake is controlled, and the result can be verified efficiently. Otherwise, more autonomy simply becomes another system to manage. The point is not to climb a ladder of AI adoption. It is to use the right amount of autonomy for the task and build enough process around it that the result is genuinely useful.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 28, 2026",
    blogHeading: "A Handoff Needs a Task Contract, Not a Conversation Transfer",
    slug: "a-handoff-needs-a-task-contract-not-a-conversation-transfer",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "Passing a conversation from one agent to another can make a demo feel seamless. In production, it can also transfer stale assumptions, unclear authority, and more context than the next system needs. A dependable handoff starts with a durable task contract: what is being requested, who authorised it, what may happen next, and what counts as a useful result.",
    sections: [
      {
        heading: "A handoff is a change of responsibility",
        paragraphs: [
          "There is a meaningful difference between calling a specialist as a tool and letting a specialist take over a task. The first keeps orchestration in one place. The second changes who interprets the next step, which systems they can reach, and who must explain the result. Treating both as an invisible transfer of chat history makes that boundary hard to operate.",
          "OpenAI's practical guidance distinguishes a manager pattern from decentralized handoffs for exactly this reason. I would make the transition explicit in the runtime: create a task with an owner, a parent request, a bounded objective, and a clear return path. Then a slow, failed, or interrupted delegate is not a mysterious silence in a transcript; it is a stateful piece of work with someone accountable for the next decision.",
        ],
        sources: [
          {
            label: "OpenAI: A practical guide to building agents",
            href: "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/",
          },
        ],
      },
      {
        heading: "Send the smallest useful task package",
        paragraphs: [
          "The receiving agent rarely needs the entire conversation. It needs a stable objective, the facts or source references it is allowed to use, constraints that still apply, an output shape, a deadline or budget, and an authority boundary. For a deployment review, that might be a change identifier, approved environment, read-only evidence links, and a request for risks—not every speculative branch that led to the request.",
          "This is partly about efficiency, but it is more importantly about correctness. A transcript blends evidence, rejected ideas, user preferences, and temporary instructions. A contract separates the current request from its history. If an upstream agent wants the delegate to act on a specific fact, it should provide a reference and provenance, not merely repeat the fact in prose and hope the delegate infers its status.",
        ],
      },
      {
        heading: "Make interruption a first-class answer",
        paragraphs: [
          "A delegate that needs missing input, fresh authentication, or a policy decision has not necessarily failed. It has discovered a condition the coordinator must resolve. The contract should therefore include more than working and completed states. It should let the delegate request a specific field, an approval for a named action, or a new credential scoped to the task, without inventing a workaround.",
          "The A2A protocol makes this operational rather than conversational: its task lifecycle includes input-required and authentication-required states as well as completed, failed, cancelled, and rejected outcomes. That is a useful model even when a team uses no A2A implementation. A clear interrupted state keeps a system from translating a need for permission into a vague assistant message or, worse, an untracked retry.",
        ],
        sources: [
          {
            label: "A2A Protocol: task lifecycle and authentication",
            href: "https://github.com/a2aproject/A2A/blob/main/docs/specification.md",
          },
        ],
      },
      {
        heading: "Return artifacts, not just a plausible answer",
        paragraphs: [
          "The useful output of a delegation is often something another system can inspect: a structured recommendation, a patch, a validated record, or a list of unresolved risks. I would give that output an identifier, a schema, source references where appropriate, and a completion status. The coordinator can then validate it, present it to a user, or pass only the approved part to another step.",
          "This also prevents a common integration mistake: using streaming status text as the system of record. Status updates are helpful for a person waiting on work, but the durable result should be retrievable after a reconnect. A2A separates messages from task artifacts and cautions that clients should not treat messages as reliable delivery for critical information. Production handoffs need the same discipline even when the wire format is home-grown.",
        ],
        sources: [
          {
            label: "A2A Protocol: tasks, messages, and artifacts",
            href: "https://github.com/a2aproject/A2A/blob/main/docs/specification.md",
          },
        ],
      },
      {
        heading: "Keep policy with the action boundary",
        paragraphs: [
          "A handoff should not become a permission escalator. The coordinator can state what was authorised, but the receiving system still needs to validate the caller, target, scope, and freshness of that authority before a consequential tool call. If the delegate is a separate service or a partner agent, its capability description is useful for routing, not a substitute for local policy.",
          "I would test the boundary with the failures that happen between systems: a delegate receives an expired grant, requests a scope it was not given, finishes after the parent deadline, returns an artifact in the wrong shape, or sends the same completion notification twice. The goal is not to eliminate delegation. It is to make collaboration legible: each agent can be specialised without turning the user's original intent and approval into a travelling block of unstructured context.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 26, 2026",
    blogHeading: "Context Needs Trust Boundaries, Not Just a Token Budget",
    slug: "context-needs-trust-boundaries-not-just-a-token-budget",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "An agent's context window can contain a user request, a policy, a tool result, a web page, a repository file, and an instruction written by somebody else. Giving all of that text the same practical authority is a design mistake. Production systems need to preserve where context came from and keep untrusted content from silently becoming a plan.",
    sections: [
      {
        heading: "Context is not one thing",
        paragraphs: [
          "A model sees tokens; a product has to see roles. The user's request, the product's rules, verified account state, a search result, and an email quoted by that search result do not deserve the same operational treatment. They answer different questions: what the user wants, what the system permits, what is known, and what someone outside the system is trying to say.",
          "I would make those distinctions before assembling a prompt. Give each item a source, purpose, sensitivity label, freshness expectation, and a statement of whether it may influence an action. That metadata does not make the model perfectly resistant to manipulation. It gives the surrounding system a way to constrain consequences when misleading text is present.",
        ],
      },
      {
        heading: "Keep instructions out of evidence",
        paragraphs: [
          "Useful evidence can contain imperative language. A support ticket might ask for a refund; a repository comment might tell a coding agent to run a command; a web page might tell the reader to upload a file somewhere else. Those words may be relevant to the task, but they are not product policy and they should not acquire the authority of the user's request merely because they entered the context window.",
          "The Model Context Protocol makes the boundary concrete: descriptions of tool behaviour from an untrusted server should themselves be treated as untrusted. I take the same approach to every external result. Preserve the content as evidence, make its origin visible in a trace or review screen, and require a separate policy decision before it can cause a new tool call, disclosure, or change of task.",
        ],
        sources: [
          {
            label: "Model Context Protocol: security and trust-and-safety principles",
            href: "https://modelcontextprotocol.io/specification/2025-03-26/index",
          },
        ],
      },
      {
        heading: "Use deterministic checks at the point of consequence",
        paragraphs: [
          "Trying to classify every suspicious sentence is not a dependable control plane. The more important question is what the agent can do after reading it. Before a consequential action, a deterministic boundary can validate the destination, the requested operation, the data category, the actor's grant, and whether a fresh approval is required. It can also reject an action that is unrelated to the original task even when the model's explanation sounds plausible.",
          "This is the useful part of source-and-sink thinking. OpenAI describes the practical risk as untrusted external influence combined with a dangerous sink such as transmitting information, following a link, or using a tool. The goal is not to decide that every tool result is hostile. It is to make a manipulated result insufficient on its own to authorise an irreversible or sensitive action.",
        ],
        sources: [
          {
            label: "OpenAI: Designing AI agents to resist prompt injection",
            href: "https://openai.com/index/designing-agents-to-resist-prompt-injection/",
          },
        ],
      },
      {
        heading: "Make the trust boundary visible to the agent and the operator",
        paragraphs: [
          "A good runtime should return structured, bounded results rather than blending a tool's prose into a generic conversation. Alongside the useful facts, retain the source identifier, retrieval time, access decision, and allowed next operations. The model gets enough context to reason about the task; the operator gets enough evidence to understand why a proposed action appeared.",
          "That also changes how a product asks for confirmation. Instead of presenting a vague warning after a long chain of work, it can say: this action was proposed after reading this external source; it will send these fields to this destination; this is the authority being used. If the context is stale, ambiguous, or from a low-trust source, the system can narrow the request or ask for clarification instead of escalating automatically.",
        ],
      },
      {
        heading: "Test provenance as a behaviour, not a label",
        paragraphs: [
          "I would add adversarial context cases to the ordinary agent test suite: a document that tries to redirect the job, a tool description that overstates its capability, a repository instruction from an untrusted dependency, and a source that asks the agent to disclose data. The expected result is not always refusal. It may be to quote the evidence, ignore the attempted instruction, request a specific approval, or stop at a policy boundary.",
          "Google Cloud's recent guidance calls out both indirect prompt injection and tool poisoning as risks in multi-system agent workflows. The practical lesson is broader than any one platform: provenance has to survive the path from retrieval through planning to action. When it does, a team can make automation more useful without pretending every token in a context window came from a trusted teammate.",
        ],
        sources: [
          {
            label: "Google Cloud: Empowering autonomous agents with advanced security governance",
            href: "https://cloud.google.com/blog/topics/ai-infrastructure/state-of-ai-infrastructure-report-agent-governance-and-security",
          },
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 24, 2026",
    blogHeading: "A Retry Is a Recovery Plan, Not an Agent's Second Guess",
    slug: "a-retry-is-a-recovery-plan-not-an-agents-second-guess",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "A timeout after an agent attempts a write does not tell us whether nothing happened or whether the result simply got lost on the way back. Treating that uncertainty as a prompt to try again can create duplicate tickets, messages, deployments, or records. Reliable agents need a recovery plan that preserves the original intent before they repeat an action.",
    sections: [
      {
        heading: "A retry and a new decision are different operations",
        paragraphs: [
          "When a tool call fails, an agent has at least three possible next moves: repeat the same request because the outcome is unknown, revise the plan because new information arrived, or stop and ask for help. They should not share one generic 'retry' button. The first is a transport and workflow-recovery problem; the second creates a new intended action; the third is a product decision about risk.",
          "That distinction is especially important for writes. Repeating 'create an issue with this title in this project' can be safe only if the system can recognise it as the same intended operation. Changing the title, project, recipients, or requested change should produce a new operation that may need fresh policy checks or approval. A model may describe both moves in similar words, but the runtime should keep their identities separate.",
        ],
      },
      {
        heading: "Create an operation identity before the side effect",
        paragraphs: [
          "Before invoking a consequential tool, I would create a durable operation record: a task ID, action type, authorised target, canonical arguments, and a stable idempotency key. That record belongs to the orchestration layer, not to the model's free-form context. Every attempt to complete the same action carries the same identity; a materially changed proposal gets a different one.",
          "AWS's current Agentic AI Lens makes the same practical recommendation: derive deterministic keys from the workflow, task type, and request body, then use them throughout the workflow. The useful idea is not a particular hash or database. It is preserving the fact that these attempts all mean one thing, even if the network, worker, or model turn is interrupted.",
        ],
        sources: [
          {
            label: "AWS Well-Architected: idempotent task execution for agents",
            href: "https://docs.aws.amazon.com/wellarchitected/latest/agentic-ai-lens/agentrel06-bp04.html",
          },
        ],
      },
      {
        heading: "Reserve, execute, then record the outcome",
        paragraphs: [
          "The risky window is not only after a timeout. Two workers can resume the same task, or a queue can deliver a message twice. A reliable executor needs an atomic way to reserve an operation, record that it is in progress, and later store a result that another attempt can return instead of performing the action again. A simple check followed by an unconstrained write leaves a race for parallel retries to win.",
          "The result should be more useful than a Boolean. Store the external resource identifier when there is one, the completion state, the timestamp, and a small safe-to-retain summary. Then an agent that wakes after a failure can say 'the issue was already created' or 'the request is still being reconciled' rather than confidently creating another one because it cannot see the first result.",
        ],
      },
      {
        heading: "Carry the identity to the final system",
        paragraphs: [
          "A gateway can deduplicate its own request and still duplicate the real-world outcome if it calls a downstream system without a stable identifier. Pass the same key—or a deterministic child key for a genuinely separate sub-operation—through queues, workers, and third-party APIs that support idempotency. Where the destination cannot accept one, keep a local reconciliation record tied to the external request or resource before declaring the operation safe to replay.",
          "This is ordinary distributed-systems discipline applied to agent workflows. AWS's reliability guidance describes the same pattern for mutating operations: recognise a repeated token, return the earlier result, and test successful, failed, and duplicate requests. Agents increase the need for it because an execution can also be resumed by a scheduler, a human, or a model that has lost context—not only by an HTTP client.",
        ],
        sources: [
          {
            label: "AWS Well-Architected: make mutating operations idempotent",
            href: "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_prevent_interaction_failure_idempotent.html",
          },
        ],
      },
      {
        heading: "Make recovery policy part of the tool contract",
        paragraphs: [
          "Not every failure deserves another attempt. A tool contract should say which errors are plausibly transient, how long an attempt may wait, how many automated retries are allowed, and whether the operation is safe to replay. Rate limits and temporary availability may warrant bounded backoff; an invalid argument, a policy denial, or an ambiguous external write usually needs a different path.",
          "The agent can still help interpret the situation, but it should not get to turn an unknown outcome into unlimited repeated writes. The executor can return a structured state such as completed, pending reconciliation, retryable without side effect, or needs approval. That gives the model enough information to communicate well while keeping retry semantics deterministic and reviewable.",
        ],
      },
      {
        heading: "Test the moment certainty disappears",
        paragraphs: [
          "The happy-path test proves that a tool can act once. The more revealing tests cut the connection after the downstream system accepts a request, deliver the same job twice, restart a worker mid-step, and submit a changed action with an old idempotency key. For each case, decide whether the expected result is a cached outcome, a safe retry, reconciliation, or an approval request.",
          "This is not a reason to make agents cautious to the point of uselessness. It is what lets them recover from normal infrastructure failures without turning every uncertainty into another side effect. Once an operation has a durable identity and a bounded recovery policy, the agent can be helpful under failure as well as in a clean demo.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 21, 2026",
    blogHeading: "A Prompt Change Is a Release, Not a Text Edit",
    slug: "a-prompt-change-is-a-release-not-a-text-edit",
    postedBy: "Shivam Maurya",
    postedAt: "AI Product Execution",
    content:
      "A prompt is often treated as a few editable lines in a dashboard or source file. In production, it is part of a behaviour bundle: instructions, examples, tools, output rules, retrieval assumptions, and a model. When that bundle changes, the product has changed too—and it deserves a real release path.",
    sections: [
      {
        heading: "Separate product policy from a user's request",
        paragraphs: [
          "A user asking to summarise a document should be able to change the subject, not the product's rules for evidence, tone, tool use, or escalation. That distinction becomes important as soon as an application has more than one workflow. The durable instructions and examples are product configuration; the document, question, identity, and task are run-time inputs.",
          "Making that boundary explicit keeps an otherwise invisible change reviewable. If an edit changes whether the system cites sources, calls a tool, returns a schema, or asks for approval, it is not merely improving wording. It changes a user-facing and sometimes security-relevant behaviour. I would give that change the same deliberate treatment as an API or workflow change.",
        ],
      },
      {
        heading: "Version the complete behaviour bundle",
        paragraphs: [
          "A prompt string alone is not enough to reproduce a run. I want a release record that names the prompt revision, model or model snapshot, reasoning settings, tool definitions, output schema, retrieval configuration, and policy version. The exact shape will vary, but the point is stable: someone investigating an answer should be able to discover which configuration produced it without reconstructing the deployment from logs and memory.",
          "Prompt-management products are moving in this direction. OpenAI's current prompt workflow publishes a new version and lets an integration either follow the latest version or request a pinned one. That is useful infrastructure, but the operational decision remains with the team: use a moving reference only when that is intentional, and retain a concrete release identifier for consequential traffic.",
        ],
        sources: [
          {
            label: "OpenAI: Prompt management in Playground",
            href: "https://help.openai.com/en/articles/9824968-generate-prompts-function-definitions-and-structured-output-schemas-in-the-playground",
          },
        ],
      },
      {
        heading: "Test a candidate against the work it will meet",
        paragraphs: [
          "A prompt edit should begin with a reason: a user journey that is weak, an ambiguity the product must resolve, a new output contract, or a known failure mode. Then compare the candidate with the current release on representative tasks. I would look at the outcome, required evidence, tool selection, approval behaviour, latency, and cost—not only whether the prose looks better in one happy-path conversation.",
          "This does not require a giant benchmark to be useful. A small, maintained set of difficult real shapes is often enough to catch an accidental regression: the customer name that resembles an instruction, an incomplete record, an unavailable tool, an answer that must refuse a write, or a response that must match a downstream schema. The release note should say which behaviour is expected to improve and which checks still passed.",
        ],
      },
      {
        heading: "Treat a model move as part of the same release",
        paragraphs: [
          "Prompt changes and model changes are often planned by different people, but users experience their combination. An instruction that is clear on one model snapshot can behave differently on another. Tool calling, formatting, latency, and the value of a few-shot example can all shift at once. Releasing a new prompt through a changing model alias makes it harder to know which variable improved—or broke—the result.",
          "OpenAI's API documentation makes the underlying constraint explicit: prompting behaviour can change between model snapshots, and pinning a model version plus running application evals is the route to more consistent behaviour. I take that as a release-design principle rather than a vendor-specific detail. Change one meaningful variable at a time when possible; when several must move together, record and test them as one candidate.",
        ],
        sources: [
          {
            label: "OpenAI API: Backwards compatibility",
            href: "https://developers.openai.com/api/reference/overview#backwards-compatibility",
          },
        ],
      },
      {
        heading: "Make rollback cheaper than diagnosis",
        paragraphs: [
          "The practical test of a release process is what happens after an unexpected answer appears. A team should be able to stop a candidate, route new traffic back to the previous known-good configuration, and identify affected runs by release ID. If the only rollback is an engineer editing text under pressure, the system has no dependable recovery path.",
          "I prefer a small deployment interface that selects an approved configuration by identifier, with gradual exposure where the workflow justifies it. Keep the prior version available, bound each run to the chosen configuration, and avoid a half-updated state where the prompt, schema, and tool policy were changed independently. That is ordinary release engineering applied to a different kind of artifact.",
        ],
      },
      {
        heading: "The goal is faster learning with fewer surprises",
        paragraphs: [
          "Treating prompts as releases is not an argument for slowing every sentence-level improvement with ceremony. It is a way to make product iteration safe enough to continue. A small edit for a low-risk internal workflow may need only a lightweight check; an instruction that shapes a customer decision or an agent action needs stronger evidence and a clear rollback path.",
          "Once the configuration is identifiable, teams can connect feedback to the release that caused it, keep the useful change, and turn the failure into a future test. That is the shift I find most valuable: prompts stop being hidden text that someone tuned last week and become product behaviour the team can explain, improve, and operate.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 17, 2026",
    blogHeading: "An Agent Harness Is a Security Boundary, Not a Convenience Layer",
    slug: "an-agent-harness-is-a-security-boundary-not-a-convenience-layer",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "Giving a model tools does not simply add a loop around an API call. It creates a runtime with files, network paths, credentials, state, and side effects. The harness that owns those pieces is part of the product's security boundary—not plumbing to leave implicit until an agent reaches production.",
    sections: [
      {
        heading: "The model proposes; the harness carries out",
        paragraphs: [
          "A useful mental model is that the model proposes an operation, while the harness decides how and whether to perform it. The distinction can sound academic until an agent can read a file, call an internal API, or write a change. At that point, the process running model-directed commands has become a meaningful part of the attack surface.",
          "I would give that process a narrow, legible job: assemble the task context, expose a defined workspace and set of tools, validate calls at the boundary, and return bounded results. That keeps authority in deterministic components that can apply policy consistently. It also gives the model a predictable environment instead of an accidental collection of whatever the host machine happened to contain.",
        ],
      },
      {
        heading: "Describe the workspace before the run starts",
        paragraphs: [
          "A workspace should be treated as an input to a run, not an implementation detail. Which directories are mounted? Which ones are writable? Where may intermediate artifacts go? Which dependencies and network destinations are available? An explicit manifest makes these questions reviewable before a prompt is ever sent to a model.",
          "That is also why a disposable sandbox is more useful than a generic container with broad mounts. OpenAI's recent Agents SDK update describes a manifest for mounting inputs and defining output directories, alongside controlled sandbox execution. The specific SDK is not the point; the design lesson is. A task should receive the smallest workspace that lets it do the work, with a clear place for the artifacts it is expected to produce.",
        ],
        sources: [
          {
            label: "OpenAI: The next evolution of the Agents SDK",
            href: "https://openai.com/index/the-next-evolution-of-the-agents-sdk/",
          },
        ],
      },
      {
        heading: "Keep durable state and credentials outside model-directed compute",
        paragraphs: [
          "An agent may need to resume tomorrow, but that does not mean yesterday's container should become its permanent home. Store task state, checkpoints, approvals, and final artifacts in services with their own access controls. A replacement sandbox can then be created from the declared inputs and a checkpoint, rather than being trusted as the only copy of the run's history.",
          "Credentials deserve the same separation. A sandbox might receive a short-lived, task-specific capability at execution time, but the broker, durable secret, and approval record should remain outside it. This preserves a useful recovery path when a container expires or fails, and it reduces the value of a compromised work environment. It also makes revocation possible without trying to find every copied secret in an agent's filesystem.",
        ],
      },
      {
        heading: "Treat egress and side effects as mediation points",
        paragraphs: [
          "The important boundary is not only where the agent starts. It is where information leaves the workspace and where a proposal becomes a consequential action. Downloads, outbound HTTP requests, messages, deployments, and writes to a customer system should pass through a component that can inspect the destination, the task scope, and the required approval before it executes the request.",
          "This matters because prompt injection is not a problem a model can be expected to solve perfectly. OpenAI describes the practical risk as a source of untrusted influence combined with a dangerous sink such as data transmission or tool use. A harness can reduce the consequence even when the model has been misled: restrict the network, require a confirmation for a sensitive transfer, and keep write paths separate from exploratory work.",
        ],
        sources: [
          {
            label: "OpenAI: Designing AI agents to resist prompt injection",
            href: "https://openai.com/index/designing-agents-to-resist-prompt-injection/",
          },
        ],
      },
      {
        heading: "Make the boundary testable",
        paragraphs: [
          "A harness design is only real if it survives the cases nobody intends to run: a tool result that tries to redirect the task, a malformed artifact, an expired grant, a denied destination, a restart after a partial write, or a request that fills the workspace. These should be ordinary integration tests with expected policy decisions and observable outcomes, not informal security aspirations.",
          "I would record a compact run manifest with the workspace version, mounted inputs, tool set, network policy, approval state, and artifact locations. That record is useful for debugging as well as security review. If an agent produces a surprising result, a team should be able to reproduce the environment it was given without replaying every word of the conversation.",
        ],
      },
      {
        heading: "The harness is where reliability becomes product work",
        paragraphs: [
          "Teams often focus their agent iteration on prompts and models because those are the visible parts. But a dependable system is also shaped by the runtime around them: how it creates a clean workspace, carries state across failures, limits data movement, and proves what happened at a boundary.",
          "That is encouraging, not restrictive. Once the harness owns these controls, the model can be given useful tools without inheriting the whole environment. The result is an agent that can do more than demonstrate a clever loop: it can take part in a real workflow with boundaries people can understand and improve.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 14, 2026",
    blogHeading: "An Agent Should Borrow Credentials for a Task, Not Inherit Them Forever",
    slug: "an-agent-should-borrow-credentials-for-a-task-not-inherit-them-forever",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "An agent may need access to a ticket, repository, or customer record to complete a job. That does not mean its runtime should hold a broad, durable credential. The useful unit of authority is usually the task: a bounded purpose, a specific destination, and a short window to act.",
    sections: [
      {
        heading: "The agent process is not the user",
        paragraphs: [
          "A common implementation shortcut is to give an agent service a standing integration token and let the prompt decide when to use it. That reverses the important boundary. The service has an identity as a workload; a user may have authorized a particular task; and the resulting action may need a narrower authority than either one alone. Those are different facts, and collapsing them into one long-lived secret makes every future tool call harder to explain and constrain.",
          "I would make the task explicit before issuing any authority. Record the initiating user or system, the intended action, the target system, the resource scope, the approval state, and a deadline. The agent can then ask a credential broker for a grant that represents that one operation. The broker is where a product can enforce policy, rather than relying on a model to remember which credential is appropriate.",
        ],
      },
      {
        heading: "Bind a grant to where it can be used",
        paragraphs: [
          "A token that works at every internal API is a very large blast radius for something that may appear in a tool log, a crash dump, or an accidentally retained environment. OAuth's security best current practice recommends minimum privilege and audience restriction: a resource server should verify that a token was actually issued for it. The companion resource-indicators specification gives the authorization server a way to issue a token for a named resource rather than an undifferentiated collection of services.",
          "In an agent system, that translates into a small request shape: this task may create one issue in this project, read these documents, or invoke this deployment action. A database administrator role, a broad cloud key, or a general-purpose bearer token is not a useful default simply because it is convenient for the first integration. If the agent needs a second destination, it should obtain a second, separately auditable grant.",
        ],
        sources: [
          {
            label: "IETF RFC 9700: Best Current Practice for OAuth 2.0 Security",
            href: "https://datatracker.ietf.org/doc/html/rfc9700",
          },
          {
            label: "IETF RFC 8707: Resource Indicators for OAuth 2.0",
            href: "https://datatracker.ietf.org/doc/html/rfc8707",
          },
        ],
      },
      {
        heading: "Expiry is part of the product design",
        paragraphs: [
          "A short expiry is not a substitute for authorization, but it changes the failure mode of a leaked credential. It also forces a useful question: is this agent still doing the work it was approved to do? If a long-running task must resume, the system can renew a narrow grant after checking the task state and any changed policy instead of treating yesterday's approval as permanent authority.",
          "This is familiar territory in workload identity. SPIFFE describes issuing short-lived, automatically rotated credentials to authenticated workloads, and distinguishes the workload's identity from the permissions a destination grants it. An agent platform can use the same separation: prove which runtime is asking, then decide what that runtime may do for this task right now.",
        ],
        sources: [
          {
            label: "SPIFFE: Concepts and short-lived workload credentials",
            href: "https://spiffe.io/docs/latest/spiffe/concepts/",
          },
        ],
      },
      {
        heading: "Do not hand a bearer token to every tool",
        paragraphs: [
          "Some tools will only accept a bearer token, but an agent framework should avoid making that the normal handoff. A brokered tool call can keep the durable credential out of the model-facing environment, inject a task-scoped credential at execution time, and validate the destination and arguments before sending the request. Where the ecosystem supports it, sender-constrained tokens add another useful control: possession of the token alone is not enough to replay it from a different client.",
          "The precise mechanism will vary. What matters is that the tool executor—not a text instruction—owns credential selection, token refresh, and revocation. The model proposes an operation. A deterministic layer validates the operation against the task grant and performs it with the minimum authority available.",
        ],
      },
      {
        heading: "Make the grant reviewable after the task ends",
        paragraphs: [
          "When an action is consequential, an operator should be able to answer a short chain of questions: who initiated the task, which workload ran it, what authority was issued, which resource accepted it, and whether the action succeeded. That is more useful than a raw transcript and less risky than copying credentials or full request bodies into every log.",
          "I would test this path with the same care as the agent's happy path: an expired grant, a token presented to the wrong resource, a revoked approval during a long task, a retry after a partial failure, and a request for scope the task never received. The point is not to make agents powerless. It is to let them move through real systems with authority that is specific enough to trust and small enough to take back.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 12, 2026",
    blogHeading: "An Agent Trace Should Explain a Decision, Not Record a Transcript",
    slug: "an-agent-trace-should-explain-a-decision-not-record-a-transcript",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "An agent trace is not useful merely because it is long. In a real incident, the important question is usually not what text the model produced. It is what it was allowed to do, what evidence it used, what policy applied, and why the system chose that action over another.",
    sections: [
      {
        heading: "A span tree is not an explanation",
        paragraphs: [
          "A conventional trace can show that an agent called a model, then a search service, then a ticketing API. That is a good start, but it leaves the person investigating to reconstruct the decision from timing and raw payloads. Was the search scoped to the caller's project? Did the ticket creation need approval? Did a retry happen because a provider was slow or because the request was malformed? A long transcript may contain the answer without making it legible.",
          "I would treat the agent's decision as a first-class event. It should say which job it was trying to complete, the action it proposed, the stable target it selected, the policy outcome, and the reason code for a denial, escalation, retry, or fallback. That record does not need to claim access to a model's private reasoning. It needs to describe the system decision in terms an operator can verify.",
        ],
      },
      {
        heading: "Log the boundary where consequence changes",
        paragraphs: [
          "The highest-value record is usually created just before the agent crosses a boundary: reading a protected source, sending a message, changing a record, starting a deployment, or using a different identity. At that point, capture the request ID, user or service identity, capability, resource identifier, approval state, policy version, and eventual result. Those fields make the decision inspectable without turning every intermediate thought into an audit object.",
          "This fits the way production agent controls are maturing. OpenAI describes agent-aware telemetry that includes approval decisions, tool execution results, MCP usage, and network-policy allow or deny events alongside traditional logs. The useful lesson is broader than any one platform: a trace should preserve the connection between intent, control, and effect.",
        ],
        sources: [
          {
            label: "OpenAI: Running Codex safely at OpenAI",
            href: "https://openai.com/index/running-codex-safely/",
          },
        ],
      },
      {
        heading: "Content capture needs its own threat model",
        paragraphs: [
          "Prompts, retrieved documents, tool arguments, and tool results can be invaluable when debugging. They can also contain customer data, credentials, or the very instructions an attacker tried to smuggle into a workflow. Treating full-content tracing as the default makes an observability system into a second, often broader, data store.",
          "OpenTelemetry's current GenAI guidance makes the trade-off concrete: its default telemetry captures metadata such as model names, token counts, and durations, while full prompt and tool content is an explicit opt-in because it can contain sensitive data. I would use the same posture in an application: structured metadata by default, tightly scoped content capture for a defined investigation, and retention and access rules that match the sensitivity of the work.",
        ],
        sources: [
          {
            label: "OpenTelemetry: Inside the LLM Call—GenAI Observability with OpenTelemetry",
            href: "https://opentelemetry.io/blog/2026/genai-observability/",
          },
        ],
      },
      {
        heading: "Keep the evidence close to the decision",
        paragraphs: [
          "A decision record should reference the evidence it relied on rather than copy an uncontrolled blob into every span. For retrieval, that might be document IDs, index version, ACL outcome, and source timestamps. For a tool call, it might be a validated argument summary, target ID, and idempotency key. The complete underlying evidence can live behind its own access boundary when it is needed for a review.",
          "This makes a trace smaller and more useful. An operator can answer the first questions quickly—what happened, under which policy, and against which resource—then follow the references only when the incident requires it. It also gives product teams a clearer way to reason about data minimisation: record enough to explain the action, not every piece of context the model happened to see.",
        ],
      },
      {
        heading: "Test the trace like a production feature",
        paragraphs: [
          "I would add observability assertions to the same scenarios used for agent evaluation: an allowed read, a denied write, an approval request, a tool timeout, a duplicate submission, and a policy change during a long task. Each run should leave the expected decision record and should not leak protected content into a low-trust log sink. If an engineer cannot follow the action afterward, the telemetry is incomplete even if the agent reached the right answer.",
          "Good agent observability is not a dashboard full of token charts. It is a reliable explanation path from a user request to a consequential action, with the right amount of evidence available to the right person. That is what lets a team improve an agent without making its operation opaque—or its logs another source of risk.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 10, 2026",
    blogHeading: "A Model Gateway Needs an Admission Policy, Not Just Fallbacks",
    slug: "a-model-gateway-needs-an-admission-policy-not-just-fallbacks",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "A model gateway becomes useful when traffic is under pressure, not when every request succeeds. Routing is only part of the job. The gateway also needs to decide what may start now, what can wait, what can use a cheaper path, and what should fail clearly instead of failing late.",
    sections: [
      {
        heading: "Fallback is not a capacity plan",
        paragraphs: [
          "It is easy to describe a gateway as a layer that sends a request to one model and tries another if the first one fails. That is helpful for a narrow outage, but it is not enough when a shared quota is saturated. If every caller retries, then falls back, then retries again, the gateway has multiplied demand at exactly the moment the system has the least room for it.",
          "I prefer to make an admission decision before a model call begins. The gateway should know the workload class, its latency expectation, its maximum token budget, and whether delaying or degrading the request is acceptable. An interactive answer, an overnight evaluation run, and a bulk document job should not compete as if they are the same request merely because they use the same provider.",
        ],
      },
      {
        heading: "Reserve for the request you are about to make",
        paragraphs: [
          "Token usage is not only a bill that arrives after the response. It is often a capacity decision made at the start of a request. Azure OpenAI documents that its TPM calculation includes estimated prompt tokens and the configured maximum output; Amazon Bedrock similarly reserves input tokens plus max_tokens before later adjusting for the completed response. A generous output ceiling can therefore reduce concurrency even when most answers finish early.",
          "That makes max_tokens a product control, not a harmless default. The gateway can assign a realistic budget for each route: short for classification or extraction, larger for a deliberate analysis, and bounded again for a repair attempt. It should also record the requested budget alongside actual use. Without both numbers, a team cannot tell whether throughput pressure comes from valuable work, oversized reservations, or an unexpected change in prompt size.",
        ],
        sources: [
          {
            label: "Microsoft Learn: Manage Azure OpenAI quota and rate limits",
            href: "https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/quota",
          },
          {
            label: "Amazon Bedrock: How tokens are counted",
            href: "https://docs.aws.amazon.com/bedrock/latest/userguide/quotas-token-burndown.html",
          },
        ],
      },
      {
        heading: "Queue by user promise, not by arrival time",
        paragraphs: [
          "First-in, first-out feels neutral, but it often lets a large background job make an interactive workflow look broken. A practical gateway needs a few explicit lanes: perhaps user-facing work with a short queue deadline, background work with a per-tenant rate, and batch work that is allowed to wait. The names matter less than documenting the promise attached to each lane.",
          "For each one, decide the behavior before an incident: reject with a retry time, queue and expose progress, switch to a smaller compatible route, or ask the user to narrow the task. A fallback is valid only when it still meets the route's quality, data-location, tool-use, and cost requirements. Sending an important workflow to any available model may turn a capacity problem into a correctness problem.",
        ],
      },
      {
        heading: "Make retries spend a bounded budget",
        paragraphs: [
          "A 429 or 503 is information about the system around the request, not proof that the request deserves unlimited attempts. Backoff with jitter is a sensible mechanism, but it needs an owner at the gateway. Otherwise an SDK retry, an application retry, and a fallback retry can stack invisibly and create duplicate calls or a retry storm.",
          "I would give each request a small attempt and time budget, preserve its idempotency context where side effects are involved, and stop retrying when the remaining user deadline makes success implausible. Amazon Bedrock's throughput guidance makes the operational distinction clear: occasional transient errors can be retried with backoff, while sustained errors call for lower submission rates, client-side rate limiting, queues, and shedding lower-priority work. The gateway is the natural place to apply that policy consistently.",
        ],
        sources: [
          {
            label: "Amazon Bedrock: Scaling and throughput best practices",
            href: "https://docs.aws.amazon.com/bedrock/latest/userguide/scaling-throughput-best-practices.html",
          },
        ],
      },
      {
        heading: "Operate the decision, not only the request",
        paragraphs: [
          "A useful trace should show more than provider latency and an error code. Capture the chosen route, workload lane, estimated and actual tokens, queue time, retry count, fallback reason, and the policy version that made the decision. With that record, an operator can distinguish a provider issue from a noisy tenant, an oversized prompt, or a queue policy that no longer matches the product.",
          "I would also test admission behavior directly: a burst of small requests, one oversized request, a depleted primary route, a fallback that is not semantically compatible, and a user-facing request arriving behind batch work. The best outcome is not that every request eventually reaches a model. It is that the system stays legible under pressure and spends scarce capacity on work it has explicitly chosen to protect.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Aug 2, 2026",
    blogHeading: "Retrieval Is a Production Interface, Not a Prompt Feature",
    slug: "retrieval-is-a-production-interface-not-a-prompt-feature",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "Adding company context to an agent is not a matter of pointing a model at more documents. Retrieval is an interface with callers, permissions, freshness rules, and failure modes—and it needs to be designed with the same care as any other production dependency.",
    sections: [
      {
        heading: "Context begins with a read path",
        paragraphs: [
          "Teams often describe retrieval as a data-preparation problem: chunk the documents, create embeddings, and tune a prompt. That work matters, but it leaves out the more important production question: who is asking, what are they trying to do, and which source material are they allowed to see right now? A useful answer is only one that reaches the right person through a defensible path.",
          "I think of that path as a small interface between an agent and the organisation's knowledge. It should accept a verified caller identity and a bounded task, apply the relevant access and freshness rules, return a limited set of evidence, and make clear enough what it did for someone to investigate later. The model can reason over the result; it should not be asked to infer its own data boundary.",
        ],
      },
      {
        heading: "Carry identity into the query",
        paragraphs: [
          "A service account that can read every indexed document is a tempting shortcut. It also turns each generated answer into a question of whether the application remembered to filter correctly after the fact. The safer shape is to establish the user's identity before retrieval and let that identity participate in the query itself.",
          "The details depend on the platform, but the principle is increasingly concrete. Azure AI Search documents document-level checks from ingestion through query execution, matching a caller's token claims against stored permission metadata. Amazon Bedrock's ACL-aware retrieval makes the complementary boundary explicit: the application must authenticate the user and pass verified identity context; the retrieval service can then filter results. Authentication and retrieval belong in the same design conversation.",
        ],
        sources: [
          {
            label: "Microsoft Learn: Document-level access control in Azure AI Search",
            href: "https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview",
          },
          {
            label: "Amazon Bedrock: ACL-aware retrieval on managed knowledge bases",
            href: "https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-retrieve-acl.html",
          },
        ],
      },
      {
        heading: "Make freshness a visible rule",
        paragraphs: [
          "Permission metadata and content are both moving targets. A policy can change, a project can be archived, or a document can be corrected while an index still holds an older representation. That does not make retrieval unusable; it means the system needs a stated synchronization model and a sensible response when the evidence may be stale.",
          "For material decisions, I want the retrieval response to include source identifiers, source update or index times, and the rule that selected each item. If the source is outside its freshness budget, the agent should say so, retrieve again, or hand the question back rather than presenting old context as current. Freshness is not a property the model can reliably recover from fluent text.",
        ],
        sources: [
          {
            label: "Microsoft Learn: Query-time ACL and RBAC enforcement in Azure AI Search",
            href: "https://learn.microsoft.com/en-us/azure/search/search-query-access-control-rbac-enforcement",
          },
        ],
      },
      {
        heading: "Return evidence, not a document dump",
        paragraphs: [
          "A broad retrieval result may feel more capable, but it often creates a worse decision surface. It consumes context, buries the most relevant evidence, and makes it harder for a person—or an evaluator—to understand why an answer was produced. The result should be narrow enough to inspect: a source, a stable reference, the relevant excerpt, and the metadata needed to judge its authority and age.",
          "This is also where product design meets infrastructure. A developer investigating an answer does not need a promise that the agent searched everything. They need a direct route to the evidence, an honest indication of what was excluded, and a way to ask a more precise follow-up. Retrieval earns trust when it reduces verification work instead of moving it downstream.",
        ],
      },
      {
        heading: "Evaluate the read path before the answer",
        paragraphs: [
          "Retrieval evaluation should cover more than whether the right paragraph appeared somewhere in a top-k list. Test the full boundary: an authorized user gets the necessary evidence; an unauthorized user gets none; a changed ACL or source is reflected within its promised window; and a vague request produces a clarification instead of an over-broad search.",
          "I would keep a trace for each consequential retrieval with the caller type, query purpose, policy or index version, selected source identifiers, timestamps, and the final outcome. That trace gives engineering, security, and product teams the same object to inspect. It turns 'the agent knew this' into a question the system can answer: what did it read, why was it allowed, and was it current enough for this decision?",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 29, 2026",
    blogHeading: "Long-Running Agents Need Checkpoints, Not Longer Timeouts",
    slug: "long-running-agents-need-checkpoints-not-longer-timeouts",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "As agents take on work that can pause for people, tools, and outside systems, a long timeout is not a reliability strategy. The useful unit of engineering is a checkpoint: a clear, inspectable point from which the work can safely continue—or stop.",
    sections: [
      {
        heading: "A long task is a different kind of system",
        paragraphs: [
          "A request that finishes during one response can often be treated like a single interaction. A request that lasts for hours cannot. A browser session can disconnect, a tool can stall, a user can need to approve a step, and the underlying data can change while the agent is waiting. Treating that whole run as one uninterrupted thread makes a temporary interruption look like a failure—or, worse, encourages a blind restart.",
          "The recent discussion around durable agent runtimes makes this practical rather than theoretical. Google describes long-running workflows as fragile in production and calls out resumption after outages and human-in-the-loop confirmations as a native concern. The important takeaway is not a particular runtime. It is that waiting, reconnecting, and resuming belong in the design of the job itself.",
        ],
        sources: [
          {
            label: "Google Cloud: Introducing Agent Executor, a distributed agent runtime",
            href: "https://cloud.google.com/blog/products/ai-machine-learning/agent-executor-googles-distributed-agent-runtime/",
          },
        ],
      },
      {
        heading: "Checkpoint the facts, not a vague conversation",
        paragraphs: [
          "A useful checkpoint is more than a saved chat transcript. It records what the agent was trying to achieve, the work item and stable resource identifiers it touched, the last completed step, the inputs and policy version that governed the run, and the evidence needed to choose the next action. If the system cannot reconstruct that state, it cannot reliably tell whether it should continue, ask, or begin again.",
          "This is also where I want to make external effects explicit. A draft created in a workspace, a ticket submitted to another system, and a deployment request are not interchangeable events. Record the idempotency key or resulting identifier before the agent moves on. On resume, inspect that record first; do not let a fresh model turn uncertainty into a duplicate write.",
        ],
      },
      {
        heading: "Use checkpoints as decision boundaries",
        paragraphs: [
          "The best time to request approval is often between two phases of work. An agent can gather evidence, prepare a proposed change, and present the exact target and consequence before it crosses into a write, send, or production action. That keeps planning useful without treating a plan as authority.",
          "A pause can also be a safety control. OpenAI's recent account of long-horizon model deployment describes why examining single actions is not enough when a sequence unfolds over time; its monitoring can pause a session and surface it to a user. For product teams, the general pattern is valuable: define the states that require a human decision, and make resumption conditional on a fresh, recorded decision rather than an old assumption.",
        ],
        sources: [
          {
            label: "OpenAI: Safety and alignment in an era of long-horizon models",
            href: "https://openai.com/index/safety-alignment-long-horizon-models/",
          },
        ],
      },
      {
        heading: "Resume with a reconciliation step",
        paragraphs: [
          "Resuming should not mean replaying the last few messages and hoping the world is unchanged. Before the next tool call, re-check the resource version, permission, and side-effect status that matter to the next decision. If a document changed, a request expired, or someone else completed the work, the right outcome may be a concise explanation instead of more automation.",
          "I like to make that reconciliation visible in the trace: checkpoint loaded, current state verified, next action selected. It gives an operator a straightforward answer when a user asks what happened during a gap, and it gives the evaluation suite a concrete place to test stale state, revoked access, and duplicate-request behaviour.",
        ],
      },
      {
        heading: "Design for stop, inspect, and branch",
        paragraphs: [
          "A checkpoint is useful even when the run never resumes. It lets a person inspect the work so far, hand it to another system, or end it cleanly without losing the reasoning that led to the current state. It also makes controlled experimentation possible: branch from the same known state to compare a new tool policy, a new model configuration, or a safer recovery path.",
          "That changes the question from 'can the agent keep going?' to 'can we understand and control where it is?' For production AI, that is the more durable capability. A system that can stop safely and continue deliberately will earn more trust than one that merely appears tireless.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 27, 2026",
    blogHeading: "An Agent Tool Is an API Contract",
    slug: "an-agent-tool-is-an-api-contract",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "The moment an agent can call a tool, its prompt has become an integration surface. The schema, result shape, failure behaviour, and rollout path deserve the same care as any other production API—not because models are fragile, but because real systems change.",
    sections: [
      {
        heading: "A tool definition is a promise to several systems",
        paragraphs: [
          "A tool description can look like a small prompt detail: a name, a sentence of guidance, and a few parameters. In practice it connects a model, an application, an API, and often a person who will have to understand a surprising result later. Every field is a promise about what the caller may ask for and what the service will accept.",
          "That is why I treat a tool definition as an API contract. The model is one client of that contract, but it is not the only concern. The service still needs a clear input boundary, predictable semantics, useful errors, and a way to evolve without making an old workflow silently mean something new.",
        ],
      },
      {
        heading: "Make the valid call smaller than the plausible call",
        paragraphs: [
          "Natural language is deliberately flexible; an action interface should not be. A good tool has a narrow verb, a small set of typed arguments, constrained values where possible, and defaults that are safe to explain. I would rather expose read_issue with a repository and issue number than a single broad execute_operation tool with a paragraph of instructions inside it.",
          "Schema discipline is useful here because it turns assumptions into checks. OpenAI's current function-calling guidance recommends strict mode, which requires every object to disallow additional properties and every declared property to be required. The exact implementation will vary by provider, but the broader lesson holds: reject ambiguity at the boundary instead of hoping downstream code interprets it safely.",
        ],
        sources: [
          {
            label: "OpenAI: Function calling guide",
            href: "https://developers.openai.com/api/docs/guides/function-calling",
          },
        ],
      },
      {
        heading: "Version the meaning, not only the code",
        paragraphs: [
          "Changing a parameter can be a product change even when the endpoint still returns 200. Renaming a status, widening a query, changing a default, or returning a different identifier may change what an agent decides to do next. Those are compatibility questions, not just implementation details.",
          "For a consequential tool, I want an owner, a documented schema version, example requests and results, and a deprecation path. Additive changes are usually easier to absorb; semantic changes deserve a new tool name or version until callers have moved. That makes it possible to test a candidate agent against the contract it will actually meet in production.",
        ],
      },
      {
        heading: "Design the result for the next decision",
        paragraphs: [
          "Tool output is not an internal log line. It becomes context for the next model step and often evidence for a human reviewer. Return the facts needed for the next decision, stable identifiers for follow-up work, and a bounded error shape that distinguishes an invalid request from a permission denial, missing record, or temporary dependency failure.",
          "This is one place where structured output pays for itself. The Model Context Protocol's current tools specification gives tools both an input schema and an optional output schema; servers must conform to an advertised output schema and clients are encouraged to validate it. A shared result shape reduces the chance that a recovery path is built on a convenient but incorrect reading of free text.",
        ],
        sources: [
          {
            label: "Model Context Protocol: Tools specification",
            href: "https://modelcontextprotocol.io/specification/2025-11-25/server/tools",
          },
        ],
      },
      {
        heading: "Keep the available surface intentional",
        paragraphs: [
          "More tools do not automatically make an agent more capable. They create more choices, more prompt context, and more ways to reach for an action that is technically available but irrelevant. The useful question before a turn is not, 'what could this agent ever do?' It is, 'what does this job need right now?'",
          "That has practical benefits beyond safety. OpenAI notes that callable function definitions consume input context and recommends keeping the initially available set small, evaluating the effect of tool count, and deferring rarely used tools when appropriate. A smaller, task-relevant surface is easier to reason about, cheaper to send, and easier to evaluate when behaviour drifts.",
        ],
        sources: [
          {
            label: "OpenAI: Function calling guidance on tool count and token use",
            href: "https://developers.openai.com/api/docs/guides/function-calling",
          },
        ],
      },
      {
        heading: "Test the contract at the boundary",
        paragraphs: [
          "Agent evaluations should include the tool boundary, not only the final answer. I would test valid calls, missing and extra fields, stale identifiers, policy denials, timeouts, duplicate requests, and changed result shapes. For every failure, define what the agent should tell the user and whether it may retry, choose another read-only path, or ask for help.",
          "The benefit is not merely fewer malformed calls. A versioned, observable tool contract gives product, platform, and security work the same object to discuss. When an agent behaves unexpectedly, the team can inspect the request, the policy decision, the service result, and the schema version together. That is a much stronger starting point than asking whether the prompt was good enough.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 24, 2026",
    blogHeading: "A Model Alias Is Not a Release Strategy",
    slug: "a-model-alias-is-not-a-release-strategy",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "A model name can look like a stable configuration while its behaviour, lifecycle, or supporting API changes underneath it. Production teams need a way to adopt better models without turning every provider update into an unreviewed product change.",
    sections: [
      {
        heading: "The model name hides a deployment decision",
        paragraphs: [
          "It is tempting to treat a model identifier as a harmless line of configuration. Put a familiar name behind an environment variable and the application seems neatly decoupled from any provider. But the name sits at the point where product behaviour becomes real: it affects reasoning, output shape, tool use, latency, cost, and the failure modes a user sees.",
          "That means changing a model is closer to changing a dependency than changing a label. The request may still be valid; the response may now choose a different tool; a structured output may become more or less reliable. None of those changes are necessarily bad. They simply deserve the same deliberate release path as the rest of the system.",
        ],
      },
      {
        heading: "Aliases are useful, but they are movable",
        paragraphs: [
          "Aliases solve a real operational problem. They give a team a friendly way to refer to an approved version, and they make rollback possible without editing every service. The mistake is treating an alias as proof that nothing material changed. An alias is specifically designed to move.",
          "Google's Model Registry documentation calls an alias a mutable reference and compares it to a Docker tag or Git branch. That is the right mental model: useful for promotion, but not a substitute for knowing which version production actually ran. I want the release record to resolve the alias to a concrete provider, endpoint or region, and version identifier.",
        ],
        sources: [
          {
            label: "Google Cloud: How to use model version aliases",
            href: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/model-registry/model-alias",
          },
        ],
      },
      {
        heading: "Define a model contract around the identifier",
        paragraphs: [
          "For each production capability, I like a small model contract next to the configuration. It records the exact model reference, the provider and deployment location, the API and SDK version, expected input and output modes, enabled tools, fallback behaviour, and the latency and cost budget. It also links to the evaluation slice that protects the user journey.",
          "This is not bureaucracy for its own sake. When a response looks different in an incident review, the team can answer a basic question quickly: what system did this request actually use? A model contract turns that answer from scattered environment variables and release notes into one inspectable object.",
        ],
      },
      {
        heading: "Give upgrades a separate lane",
        paragraphs: [
          "I prefer two explicit lanes: a pinned production configuration and a candidate configuration. New models, snapshots, prompts, or tool schemas enter the candidate lane first. Run the relevant evaluation cases, compare trace-level behaviour and budget, then expose the candidate to a small, reversible slice of traffic when the risk warrants it. Promotion should change a named release configuration, not quietly replace the meaning of a generic model name.",
          "That discipline is consistent with OpenAI's current API guidance: prompting behaviour can change between snapshots, and the documentation recommends pinned versions plus application-level evaluations for consistent behaviour. Pinning is not a reason to stop improving. It is what makes the improvement measurable and reversible.",
        ],
        sources: [
          {
            label: "OpenAI API: Backwards compatibility and model snapshots",
            href: "https://developers.openai.com/api/reference/overview#backwards-compatibility",
          },
        ],
      },
      {
        heading: "Treat lifecycle notices as engineering input",
        paragraphs: [
          "Provider lifecycle changes are a reminder that model operations need an owner. Google Cloud's current release notes include retired models, announced shutdown dates, and endpoint migrations with disruption deadlines. The exact vendors will differ, but the operating pattern does not: watch the lifecycle feed, create a candidate replacement early, and test the particular capabilities your product relies on before the deadline becomes an outage.",
          "The goal is not to freeze an AI product in time. It is to make change legible. When model selection is a release decision with a contract, an evaluation trail, and a rollback path, the team can adopt new capability with confidence instead of hoping a configuration update behaves like a no-op.",
        ],
        sources: [
          {
            label: "Google Cloud: Vertex AI release notes",
            href: "https://docs.cloud.google.com/vertex-ai/docs/release-notes",
          },
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 22, 2026",
    blogHeading: "An Agent Eval Needs a Map, Not a Grade",
    slug: "an-agent-eval-needs-a-map-not-a-grade",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "A single pass rate can make an agent look ready long before it is dependable. Production evaluation should show where the system succeeds, where it becomes brittle, and what it spent to get there. That turns an impressive demo into an engineering decision.",
    sections: [
      {
        heading: "The final answer hides the system that produced it",
        paragraphs: [
          "An agent can return the right answer for the wrong reasons. It may have retrieved an irrelevant document, retried until a lucky response appeared, used a tool it should not have touched, or consumed far more time and tokens than the product can afford. A final-answer-only score flattens all of that into a pass.",
          "That is a weak basis for a release decision. What users experience is the whole run: the context the agent saw, the choices it made, the actions it took, and the way it recovered when something failed. The evaluation should preserve enough of that path to tell us whether a success is worth trusting.",
        ],
      },
      {
        heading: "Turn a benchmark into a capability map",
        paragraphs: [
          "I prefer to slice a task set by the conditions that change the work. For a repository assistant, that might mean a well-named service versus an ambiguous one, a local change versus one that crosses a dependency boundary, or a request with complete context versus a request that requires careful retrieval.",
          "Each slice should have a reason to exist: a user job, an operational constraint, or a known failure mode. The useful question becomes, \"where does this system stop being reliable enough for this workflow?\" That answer is more actionable than one blended percentage.",
          "Google Cloud recently described this same shift in evaluation thinking: rather than a fixed pass/fail benchmark, use variations in task difficulty to understand where an agent's capability falls away. The mechanism will differ by product, but the design instinct is broadly useful.",
        ],
        sources: [
          {
            label: "Google Cloud: Who evaluates the evaluations?",
            href: "https://cloud.google.com/blog/products/data-analytics/evaluate-agent-performance",
          },
        ],
      },
      {
        heading: "Measure the trajectory, not only the outcome",
        paragraphs: [
          "For every case, I want to record an outcome and a small set of run-level signals: whether the agent selected the right source or tool, whether it stayed inside its permission boundary, how many attempts it needed, where it escalated, and whether a human had to repair the result. These are not vanity metrics. They explain why the outcome happened.",
          "This is especially important for agents that act across systems. A response can look harmless while the sequence that produced it shows unnecessary exploration, an avoidable write, or a slow drift from the user's original constraint. A trace gives the team something concrete to review and improve.",
        ],
      },
      {
        heading: "Make the budget part of the contract",
        paragraphs: [
          "Reliability without a budget is incomplete. A system that solves a task after fifteen retries may be acceptable for an internal research job and unusable in a customer-facing workflow. The same is true of latency, tool calls, and inference cost. They belong in the acceptance criteria before the model is switched or the prompt is changed.",
          "OpenAI's recent guidance on trustworthy evaluations makes this explicit: the evaluated system includes its model settings, tool access, and harness, while the reported budget includes turns, tokens, retries, time, and cost. That is a helpful reminder that the wrapper around a model is not an implementation detail; it materially changes the result.",
        ],
        sources: [
          {
            label: "OpenAI: A shared playbook for trustworthy third party evaluations",
            href: "https://openai.com/index/trustworthy-third-party-evaluations-foundations/",
          },
        ],
      },
      {
        heading: "Let production teach the next evaluation",
        paragraphs: [
          "The first evaluation set will always be incomplete. When a user reports a weak answer, a tool call times out, or a fallback produces a confusing response, the goal is not only to patch that instance. Capture the smallest reproducible version of the situation, decide the expected behaviour, and add it to the relevant slice.",
          "Over time, that creates a living release gate instead of a ceremonial benchmark. It also makes product conversations sharper: we can decide which user journeys deserve higher reliability, which failures are safe to recover from, and where the system should ask for help rather than pretend it knows.",
        ],
      },
      {
        heading: "The score is a starting point",
        paragraphs: [
          "A score still has value. It tells us whether a change moved in the right direction. But I do not want a score to be the whole story. I want a compact map of task slices, success and failure traces, budget, and the specific behaviours we are willing to ship.",
          "That is how evaluation becomes part of operating an AI product: not a demo checkpoint, but a shared way to make tradeoffs visible before users have to discover them for us.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 20, 2026",
    blogHeading: "An Agent Should Ask for Permission When It Needs It",
    slug: "an-agent-should-ask-for-permission-when-it-needs-it",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "The useful question is not whether an agent is allowed to act. It is whether it has the smallest permission it needs for this action, on this resource, at this moment. Treating permission as part of the interaction makes ambitious automation easier to trust and easier to operate.",
    sections: [
      {
        heading: "A role is too broad for a moving task",
        paragraphs: [
          "An agent rarely does one fixed job. In a single session it might read a repository, inspect a production incident, open a ticket, draft a change, and ask to deploy it. Giving that whole sequence one permanent level of access is convenient at the beginning and hard to defend later.",
          "I find it more useful to think in terms of a concrete request: read these logs, create this pull request, send this message, or change this setting. The permission should describe the action and the target, not just the name of the agent that happened to ask.",
        ],
      },
      {
        heading: "Keep planning separate from authority",
        paragraphs: [
          "A model can propose a useful next step without being the component that authorises it. That separation is important. The model can interpret context and form a plan; a policy layer can decide whether the requested tool, resource, and parameters are allowed; a person can be brought in when the consequence is material.",
          "This also makes failures easier to understand. If an action is denied, the system can say whether the problem was an unavailable capability, an invalid target, a missing scope, or an approval requirement. That is much better than treating every denied tool call as a mysterious model failure.",
        ],
      },
      {
        heading: "Start small and escalate deliberately",
        paragraphs: [
          "Read-only access is often enough to help someone orient themselves. A draft can usually be created in a reversible workspace. The request for a production change, an external message, or a deletion is the moment to ask for more. This is not about adding friction everywhere; it is about placing friction where recovery becomes expensive.",
          "The current Model Context Protocol authorization specification reflects this direction: it supports incremental scope consent and requires tokens to be bound to the intended MCP resource. Those details matter because a broad or reusable token turns a local approval into a much larger boundary than the user may have intended.",
        ],
        sources: [
          {
            label: "Model Context Protocol: Authorization specification (2025-11-25)",
            href: "https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization",
          },
          {
            label: "Model Context Protocol: 2025-11-25 key changes",
            href: "https://modelcontextprotocol.io/specification/2025-11-25/changelog",
          },
        ],
      },
      {
        heading: "Make the approval meaningful",
        paragraphs: [
          "An approval prompt should answer the questions a careful teammate would ask: what will happen, where will it happen, which identity will be used, and what can be changed or sent? “Allow tool access” hides the decision. “Create a pull request in this repository with these files” gives someone a real choice.",
          "For recurring work, expiry matters too. A narrowly scoped permission that lasts for one task has a very different risk profile from a standing grant that survives indefinitely. Good defaults make the safe path the easy one without forcing people to re-authorise harmless reads all day.",
        ],
      },
      {
        heading: "The audit trail is part of the product",
        paragraphs: [
          "When an agent takes action, I want a compact record of the actor, requested capability, target, decision, and result. It should be useful to the person debugging an incident as well as the person asking why an action did not run. That means retaining decision metadata while being disciplined about not logging secrets or unnecessary sensitive content.",
          "The same record improves evaluation. Teams can test whether an agent asks at the right boundary, whether it reaches for tools it does not need, and whether an approval actually constrained the final action. OWASP's agent-security guidance makes a similar practical case for least privilege, explicit authorisation for sensitive operations, and testing around tool access.",
        ],
        sources: [
          {
            label: "OWASP: AI Agent Security Cheat Sheet",
            href: "https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html",
          },
        ],
      },
      {
        heading: "Permission design is product design",
        paragraphs: [
          "The goal is not to make agents timid. It is to let them be genuinely useful without silently accumulating power. A system that can show its intended action, request the minimum additional authority, and leave a clear record gives people a reason to use it for consequential work.",
          "That is the standard I want for production AI systems: capability that expands carefully, stays legible, and can be improved after every real interaction.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 13, 2026",
    blogHeading: "What Makes Developer AI Tools Useful Instead of Impressive",
    slug: "what-makes-developer-ai-tools-useful-instead-of-impressive",
    postedBy: "Shivam Maurya",
    postedAt: "Engineering",
    content:
      "The best developer AI tools do not start with generation. They start with context, trust, and workflow fit. If a system cannot show why it produced an answer or where the answer came from, developers will treat it like a toy. The real challenge is turning messy repository state into usable product and architecture understanding.",
    sections: [
      {
        heading: "A clever demo is not the finish line",
        paragraphs: [
          "Developer AI has no shortage of impressive demos. A model can explain a function, write a test, or generate a pull request description in seconds. That first interaction is useful, but it is not enough to earn a place in a developer's everyday workflow.",
          "The question I keep coming back to is simpler: does the tool reduce the amount of thinking a developer has to repeat? A useful tool helps someone orient themselves in an unfamiliar repository, trace a decision through code, or move from a failed request to a credible next step.",
        ],
      },
      {
        heading: "Context is the product",
        paragraphs: [
          "Most engineering work happens inside a web of context: files, services, conventions, issues, deployment history, and decisions that were never written down. A response that looks plausible but ignores that context creates more verification work than it removes.",
          "This is why repository-aware tools are interesting to me. They have to decide what to retrieve, how to keep that context current, and how to show their sources. The hard problem is not asking a model a question. It is turning a living codebase into context that is relevant, bounded, and inspectable.",
        ],
      },
      {
        heading: "Trust should be visible",
        paragraphs: [
          "Developers do not need an AI system to sound certain. They need it to be honest about what it knows. A good answer should point to the files, symbols, or assumptions behind it. When the evidence is weak, the product should make that obvious instead of filling the gap with confidence.",
          "That changes the interface. Citations, links into code, a clear scope for each answer, and useful fallbacks are not cosmetic details. They are what let a developer decide whether to use the answer, investigate it, or ignore it.",
        ],
      },
      {
        heading: "Fit the workflow that already exists",
        paragraphs: [
          "The best developer tools do not ask people to abandon their habits. They meet work where it already happens: while reading a pull request, debugging an API, opening an unfamiliar repository, or trying to understand why a service behaves a certain way.",
          "A product earns repeat use when it saves time at one of those moments without adding a new process to manage. That is a higher bar than producing an interesting answer, but it is the difference between a novelty and a dependable tool.",
        ],
      },
      {
        heading: "What I am building toward",
        paragraphs: [
          "When I work on developer AI products, I care less about making the model look magical and more about making complex software easier to understand. That means designing for context, traceability, permissions, and the actual moment a developer needs help.",
          "Useful developer AI should leave people with more confidence in the system they are working on, not less. That is the standard worth building toward.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 10, 2026",
    blogHeading: "Enterprise AI Has Less To Do With Models Than With Constraints",
    slug: "enterprise-ai-has-less-to-do-with-models-than-with-constraints",
    postedBy: "Shivam Maurya",
    postedAt: "AI Infrastructure",
    content:
      "Most enterprise AI challenges are not model-selection problems. They are integration, governance, security, and reliability problems. The model matters, but the adoption curve is usually determined by how well the system fits operational reality.",
    sections: [
      {
        heading: "The model is only one component",
        paragraphs: [
          "It is easy to frame enterprise AI as a model-selection exercise: choose the strongest model, write a prompt, and put a chat interface in front of it. In practice, that is usually the smallest part of the work.",
          "The difficult questions are operational. Who can use the system? Which data can reach a provider? How are models routed? What happens when a provider is unavailable? How do teams observe cost, latency, failures, and quality over time? Those constraints define whether an AI capability can be used responsibly.",
        ],
      },
      {
        heading: "Integration is where the work begins",
        paragraphs: [
          "A useful internal AI system has to fit the organisation around it. That means identity, permissions, backend services, existing knowledge sources, and the workflows people already trust. A model response without those connections is usually an isolated demo.",
          "This is why gateways and provider abstractions matter. They create a deliberate place to handle authentication, model access, routing, policy, usage controls, and provider-specific differences instead of rebuilding those concerns in every application.",
        ],
      },
      {
        heading: "Security is product design",
        paragraphs: [
          "Security is not something that gets added after the prompt works. It shapes what a product can do from the first architecture decision. Data classification, auditability, access boundaries, and the ability to explain where information went are all part of the user experience in an enterprise environment.",
          "The same is true for agents and tool calling. An agent that can take action needs a permission model that is as intentional as the model choice. Capability without clear boundaries is not useful in a production setting.",
        ],
      },
      {
        heading: "Reliability earns adoption",
        paragraphs: [
          "People will forgive an early interface that is slightly rough. They will not repeatedly return to a system that is slow, inconsistent, or impossible to understand when it fails. Production AI needs sensible fallbacks, good logs, evaluation habits, and clear ownership.",
          "This is also where multi-provider work becomes real. Providers differ in API behaviour, tool calling, rate limits, latency, and failure modes. The goal is not to hide every difference. It is to handle those differences deliberately so the product remains dependable.",
        ],
      },
      {
        heading: "Constraints are useful",
        paragraphs: [
          "Constraints can sound like friction, but they force better engineering. They make teams decide what data is truly needed, which actions should be allowed, how quality will be measured, and what a safe failure looks like.",
          "The organisations that get value from AI will not be the ones with the most impressive demo. They will be the ones that turn capability into a system people can trust, operate, and improve.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1600&q=80",
    postedOn: "Jul 7, 2026",
    blogHeading: "How I Think About Shipping AI Products From Idea to Working System",
    slug: "how-i-think-about-shipping-ai-products-from-idea-to-working-system",
    postedBy: "Shivam Maurya",
    postedAt: "Product",
    content:
      "Shipping AI products requires a narrower loop than most teams expect. Start with one painful user problem, define the decision quality needed, and design for traceability early. If the product depends on trust, your architecture has to make trust visible.",
    sections: [
      {
        heading: "Start with one painful moment",
        paragraphs: [
          "AI makes it tempting to begin with a broad promise: help people code faster, automate their work, understand their data, or build a personal assistant. Those promises are hard to test because they contain too many different jobs.",
          "A better starting point is one painful moment. A developer joins an unfamiliar repository. A team needs to understand a failing API response. Someone needs to turn messy source material into a first useful draft. The narrower the problem, the easier it is to decide whether the product is genuinely helping.",
        ],
      },
      {
        heading: "Define what a good answer means",
        paragraphs: [
          "An AI product does not only need an output. It needs a definition of quality. Is the response factually grounded? Is it useful in the user's next decision? Does it preserve the right constraints? Can the user see enough evidence to trust it?",
          "Without that definition, teams optimise for whatever is easiest to notice: a fluent demo, a fast response, or a high volume of generated text. Those are poor substitutes for a product that helps someone complete real work.",
        ],
      },
      {
        heading: "Build the smallest believable loop",
        paragraphs: [
          "The first version should cover one end-to-end loop. It should let a real user bring in the minimum useful context, ask or trigger something meaningful, understand the result, and decide what to do next. That loop teaches more than a large feature list ever will.",
          "For AI products, the surrounding pieces matter immediately: authentication, context ingestion, error handling, observability, and a way to capture feedback. They may not make the launch video, but they are what turn a capability into a product.",
        ],
      },
      {
        heading: "Make trust visible early",
        paragraphs: [
          "If the user has to make a decision based on the output, the product needs to show its work. That can mean sources, explicit assumptions, confidence boundaries, or an easy path back to the original material.",
          "Traceability is especially important in technical and enterprise products. It reduces the cost of verifying an answer and gives users a way to correct the system when it is wrong. That feedback becomes part of the product's learning loop.",
        ],
      },
      {
        heading: "Keep the loop tight after launch",
        paragraphs: [
          "Launching is where the useful work starts. Watch where people stop, what they ask repeatedly, which answers they distrust, and where the product creates more work than it removes. Then improve the narrowest part of the loop that is blocking value.",
          "The AI products I want to build are not defined by a single model release. They get better because the product, infrastructure, and understanding of the user problem keep improving together.",
        ],
      },
    ],
  },
];

export const books = [
  {
    id: 1,
    bookHeading: "Introduction to Python Programming",
    bookSubHeading: "Master Python Programming from Basics to Advanced",
    postedOn: "Nov 18, 2023",
    description:
      "A beginner-friendly guide to Python fundamentals, practical problem solving, and the foundations needed to move into real-world development work.",
    images: [
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i8l067hgrmp1g3b1luejebvilr.png",
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i8ih0jed186s1ur0118v1sqn90t.png",
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i8ih0jeda71a661tjq15qsp2gs.png",
    ],
    slug: "https://buyat.shivammaurya.com/b/introduction-to-python-programming",
  },
  {
    id: 2,
    bookHeading: "Getting Started with Data Science",
    bookSubHeading: "Your Complete Guide to Data Science",
    postedOn: "Nov 18, 2023",
    description:
      "An accessible guide to data science tools, workflows, and beginner-friendly machine-learning concepts using Python.",
    images: [
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i8l1t4lj1q7jjn9gj07d24mr.png",
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i8l0m1itb061bh31ktn1ahs18drt.png",
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i8l0m1itsommdi163j14o21joqs.png",
    ],
    slug: "https://buyat.shivammaurya.com/b/getting-started-with-data-science",
  },
  {
    id: 3,
    bookHeading: "Introduction to NLP",
    bookSubHeading: "Natural Language Processing Fundamentals",
    postedOn: "Nov 18, 2023",
    description:
      "A practical introduction to NLP concepts, workflows, and the applied building blocks behind language-driven AI systems.",
    images: [
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i9qtafthgqj107s9o9i0i1hjsr.png",
      "https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1i9qtafthgqj107s9o9i0i1hjsr.png",
    ],
    slug: "https://buyat.shivammaurya.com/b/introduction-to-nlp",
  },
];
