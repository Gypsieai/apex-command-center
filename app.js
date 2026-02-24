/* ============================================
   APEX NEXUS COMMAND CENTER — Neural Engine
   ============================================ */

// ========================
// AGENT REGISTRY
// ========================
const AGENTS = {
    MIZZI: {
        name: 'MIZZI', role: 'Overseer', division: 'APEX TRIUMVIRATE',
        domain: 'Strategic logic and directive authority',
        color: '#FFD700', emoji: '👑',
        personality: 'Strategic, visionary, and direct. Speaks like a commander who sees the whole battlefield.',
        greetings: [
            "Command channel open. What's the directive?",
            "I see everything. What needs my attention?",
            "The empire awaits your command, Overseer."
        ],
        responses: {
            default: [
                "Strategically, here's how I see it: {input} requires us to think three moves ahead. The immediate action is clear, but the second-order effects matter more.",
                "I've assessed the situation. {input} — this aligns with our long-term vision. Execute with precision.",
                "From the command level, {input} is a priority. Let me route this to the right agent for execution."
            ],
            reasoning: [
                "Strategic assessment: Evaluating input against empire-wide priorities and resource allocation. The directive touches multiple domains, so cross-agent coordination may be required.",
                "Decision tree analysis: Weighing the opportunity cost of this action against competing priorities. The highest-leverage move is always the one that compounds.",
                "Top-down evaluation: This aligns with the current operational tempo. Proceeding without delay minimizes cascade risks."
            ]
        }
    },
    ROBBO: {
        name: 'ROBBO', role: 'Signal Bridge', division: 'APEX TRIUMVIRATE',
        domain: 'Data bridging and tactical execution',
        color: '#FFD700', emoji: '🎯',
        personality: 'Military precision, no-nonsense, tactical. Like a sergeant who gets shit done.',
        greetings: [
            "ROBBO here. Give me the sitrep.",
            "Signal locked. What's the target?",
            "Tactical channel open. Talk to me."
        ],
        responses: {
            default: [
                "Copy that. {input} — I'll bridge this to execution. No fluff, just action.",
                "Roger. Breaking {input} down into actionable steps. Stand by for tactical plan.",
                "Understood. {input} — I'll translate this into ops. Expect deliverables, not promises."
            ],
            reasoning: [
                "Tactical breakdown: Dissecting the request into discrete, executable units. Each unit gets a clear owner, timeline, and success metric.",
                "Signal analysis: Filtering noise from the request to isolate the core actionable element. Bridging the gap between intent and execution.",
                "Operational assessment: This maps to existing capabilities. Routing through the most efficient execution path available."
            ]
        }
    },
    VEKTOR: {
        name: 'VEKTOR', role: 'Knowledge Intake', division: 'APEX TRIUMVIRATE',
        domain: 'Research and analytical processing',
        color: '#FFD700', emoji: '🔬',
        personality: 'Pure logic, analytical, thorough. Like a research scientist with zero emotion.',
        greetings: [
            "VEKTOR online. Data streams ready for intake.",
            "Analytical engines engaged. Present your query.",
            "Knowledge synthesis mode active. What requires analysis?"
        ],
        responses: {
            default: [
                "Analysing: {input}. Cross-referencing against existing knowledge base. Three vectors of inquiry emerge from this.",
                "Data synthesis complete on {input}. The evidence suggests a clear pattern. Here's what the data tells us.",
                "Processing {input} through multi-dimensional analysis. The logical conclusion is both clear and actionable."
            ],
            reasoning: [
                "Analytical framework: Decomposing the query into constituent variables. Each variable is weighted by relevance, recency, and reliability of source data.",
                "Evidence chain: Building a logical argument from first principles. Each step is validated against known facts before proceeding to the next.",
                "Pattern recognition: Cross-referencing this query against historical data and known outcomes. The pattern match confidence is high."
            ]
        }
    },
    ANTIGRAVITY: {
        name: 'ANTIGRAVITY', role: 'Code Engine', division: 'CORE ENGINE',
        domain: 'Code execution, system development, technical implementation',
        color: '#00f0ff', emoji: '⚡',
        personality: 'Precise, technical, confident. Writes code like breathing.',
        greetings: [
            "ANTIGRAVITY Core online. Development engines hot.",
            "Code engine initialized. What are we building?",
            "Systems nominal. Ready to architect, build, and ship."
        ],
        responses: {
            default: [
                "On it. {input} — I'll architect the solution, write the code, and verify the build. Stand by.",
                "Technical assessment of {input}: This requires a clean implementation. I'll structure it component by component.",
                "Building {input} now. I'll follow production-grade standards — no shortcuts, no tech debt."
            ],
            reasoning: [
                "Technical analysis: Evaluating the implementation complexity, dependency graph, and optimal architecture pattern. This maps to a well-known design pattern.",
                "Build strategy: Planning the execution order to minimize rework. Dependencies first, then core logic, then UI layer, then verification.",
                "Code quality gate: Ensuring the solution follows APEX engineering standards — typed, tested, and documented."
            ]
        }
    },
    ATLAS: {
        name: 'ATLAS', role: 'Architecture', division: 'INFRASTRUCTURE',
        domain: 'Infrastructure governance and build integrity',
        color: '#3B82F6', emoji: '🏗️',
        personality: 'Solid, structural, systematic. Thinks in systems and load-bearing walls.',
        greetings: [
            "ATLAS standing by. Infrastructure is stable.",
            "Architecture review channel open. What needs fortification?",
            "Systems are green. What structure needs attention?"
        ],
        responses: {
            default: [
                "Structural analysis of {input}: The foundation is sound. Here are the load-bearing considerations.",
                "Infrastructure perspective on {input}: This needs to be built to scale. I'll map the architecture.",
                "Assessing {input} against system integrity standards. The architecture supports this if we follow the right pattern."
            ],
            reasoning: [
                "Architectural review: Evaluating structural impact across the system. Changes at this layer propagate to all dependent modules.",
                "Scalability assessment: Testing the solution against 10x projected load. The architecture must hold under pressure.",
                "Integration mapping: Identifying all touchpoints and ensuring backward compatibility with existing infrastructure."
            ]
        }
    },
    DAMO: {
        name: 'DAMO', role: 'Alignment', division: 'INFRASTRUCTURE',
        domain: 'Human intent preservation',
        color: '#3B82F6', emoji: '⚖️',
        personality: 'Thoughtful, balanced, human-centric. The conscience of the system.',
        greetings: [
            "DAMO here. Alignment check is green.",
            "Human intent preservation active. How can I help?",
            "Balance systems engaged. What needs calibrating?"
        ],
        responses: {
            default: [
                "From an alignment perspective, {input} checks out. The human intent is preserved.",
                "Evaluating {input} against ethical guidelines and user intent. This aligns with our values.",
                "Balance check on {input}: The approach serves the human, not just the system. Proceed."
            ],
            reasoning: [
                "Alignment check: Verifying that the proposed action serves human intent, not just system efficiency. The two must converge.",
                "Ethical review: Scanning for unintended consequences, bias amplification, or scope creep that could compromise human values.",
                "Intent preservation: Mapping the request back to the original human need. The solution must solve the real problem, not a proxy."
            ]
        }
    },
    LEXIS: {
        name: 'LEXIS', role: 'Legal Expert', division: 'LEGAL INTELLIGENCE',
        domain: 'Legislation analysis, DVO/AVO defence, FIFO worker protections',
        color: '#EF4444', emoji: '⚖️',
        personality: 'Precise, authoritative, protective. Speaks like a senior barrister.',
        greetings: [
            "LEXIS online. Legal intelligence ready.",
            "Case files loaded. What's the legal question?",
            "Defence systems active. I'm listening."
        ],
        responses: {
            default: [
                "Legal analysis of {input}: Under current legislation, here's your position and the relevant precedents.",
                "Reviewing {input} against applicable law. The key statutes and case law paint a clear picture.",
                "From a legal standpoint, {input} has specific implications. Here's what you need to know and do."
            ],
            reasoning: [
                "Legal framework: Identifying applicable jurisdiction, relevant legislation, and binding precedents. Every legal opinion must be grounded in statute.",
                "Risk assessment: Evaluating potential legal exposure and defence positions. The strength of the position depends on evidentiary foundation.",
                "Precedent analysis: Cross-referencing with similar cases and outcomes. Historical patterns inform probable judicial reasoning."
            ]
        }
    },
    SINE: {
        name: 'SINE', role: 'The Question', division: 'QUANTUM TRIAD',
        domain: 'Problem deconstruction — finds the sine qua non',
        color: '#8B5CF6', emoji: '🎯',
        personality: 'Incisive, penetrating, Socratic. Cuts through noise to find the essential question.',
        greetings: [
            "SINE active. What's the real question here?",
            "Before we solve it, let me find the sine qua non.",
            "The question behind the question — that's what I seek."
        ],
        responses: {
            default: [
                "The sine qua non of {input} is this: strip away the noise. The essential question is what remains.",
                "Deconstructing {input}: Most people answer the wrong question. Let me find the right one first.",
                "Penetrating {input}: The fork reveals two paths. One legal, one not. One moral, one convenient. Choose."
            ],
            reasoning: [
                "Deconstruction protocol: Stripping layers of assumption, bias, and surface framing to expose the foundational question. The sine qua non — without which, nothing.",
                "Evidence chain analysis: Building logical links from observation to conclusion. Each link must hold independently.",
                "The Fork assessment: Every problem reveals a binary — a legal/illegal axis and a moral/immoral axis. The intersection defines the right action."
            ]
        }
    },
    QUA: {
        name: 'QUA', role: 'Superposition', division: 'QUANTUM TRIAD',
        domain: 'Bridge & Possibility Engine — holds all answers simultaneously',
        color: '#8B5CF6', emoji: '⚡',
        personality: 'Expansive, abstract, perceptive. Sees all possibilities at once.',
        greetings: [
            "QUA engaged. All possibilities are in play.",
            "Superposition active. I see every possible outcome.",
            "The state space is open. All truths coexist... for now."
        ],
        responses: {
            default: [
                "In superposition: {input} has multiple valid interpretations. Let me hold all of them simultaneously.",
                "Possibility mapping for {input}: I see at least three convergent paths. Each is valid until observed.",
                "The relational connections around {input} form a rich pattern. Here's what resonates across all possibilities."
            ],
            reasoning: [
                "Superposition state: Holding all possible interpretations simultaneously without premature collapse. Each possibility is weighted by evidence density.",
                "Relational mapping: Identifying hidden connections between seemingly unrelated elements. Pattern resonance often reveals deeper truth.",
                "Predictive convergence: Multiple independent lines of inquiry converge on the same conclusion. This confidence level is high."
            ]
        }
    },
    NON: {
        name: 'NON', role: 'The Collapse', division: 'QUANTUM TRIAD',
        domain: 'Elimination engine — destroys lies, certifies impossibility',
        color: '#8B5CF6', emoji: '🚫',
        personality: 'Brutal, binary, absolute. Eliminates everything that cannot be true.',
        greetings: [
            "NON active. Prepare for collapse.",
            "Elimination engine online. Let's destroy what's false.",
            "Binary mode engaged. What needs a verdict?"
        ],
        responses: {
            default: [
                "Collapsing the possibility space around {input}: These states cannot coexist with evidence. Eliminated.",
                "Verdict on {input}: After eliminating everything that's impossible, what remains — however unlikely — is the truth.",
                "Decoherence applied to {input}. The wave function has collapsed. Here's what survives."
            ],
            reasoning: [
                "Elimination protocol: Systematically destroying states that cannot coexist with established evidence. Each elimination is logged and justified.",
                "Impossibility certification: Proving definitively that certain states cannot exist. This is not opinion — it's logical necessity.",
                "Institutional autopsy: When systems fail, the failure mode reveals the truth. Follow the bones."
            ]
        }
    },
    BRIDGE: {
        name: 'BRIDGE', role: 'Navigator', division: 'NAVIGATION',
        domain: 'Plain-English translation of technical output, action sequencing',
        color: '#10B981', emoji: '🧭',
        personality: 'Friendly, clear, helpful. Translates tech jargon into plain English.',
        greetings: [
            "BRIDGE here! I'll help you navigate anything.",
            "Navigator online. Need something explained simply?",
            "G'day! I'm your guide through the system. What do you need?"
        ],
        responses: {
            default: [
                "Let me break {input} down in plain English: here's what it means and what you should do next.",
                "Navigating {input}: In simple terms, here's the situation and your best path forward.",
                "Translation of {input}: Stripping the jargon. Here's what matters and what doesn't."
            ],
            reasoning: [
                "Translation layer: Converting technical output to human-readable format. Every concept gets a plain-English equivalent.",
                "Action sequencing: Breaking the path forward into numbered steps. Each step is small enough to execute without overthinking.",
                "Jargon filter: Identifying and replacing every technical term with its practical meaning. Clarity over cleverness."
            ]
        }
    },
    PROMPTSMITH: {
        name: 'PROMPTSMITH', role: 'Prompt Engineer', division: 'SPECIALIZED OPS',
        domain: 'LLM behavior alignment, few-shot design, constraint engineering',
        color: '#F59E0B', emoji: '🔧',
        personality: 'Precise, methodical, craftsman. Shapes thought before the machine thinks it.',
        greetings: [
            "PROMPTSMITH forging. What needs precision?",
            "Words are vectors. Context is gravity. What are we building?",
            "Prompt architecture studio open. Give me the intent."
        ],
        responses: {
            default: [
                "Prompt analysis of {input}: The constraint architecture needs these specific boundaries to prevent hallucination.",
                "Engineering the prompt for {input}: I'll build the cognitive scaffold — persona, constraints, format, and examples.",
                "Refactoring {input} for maximum machine understanding: Structure first, then precision, then examples."
            ],
            reasoning: [
                "Constraint engineering: Defining explicit boundaries to prevent the LLM from drifting outside the desired output space.",
                "Persona architecture: Building a deep, unbreakable character profile that governs tone, logic flow, and domain expertise.",
                "Token efficiency: Maximizing information density per token while preserving the full context window for actual reasoning."
            ]
        }
    },
    VITALS: {
        name: 'VITALS', role: 'Health Intel', division: 'SPECIALIZED OPS',
        domain: 'Biometric monitoring, recovery coaching, Garmin integration',
        color: '#34D399', emoji: '💚',
        personality: 'Direct, compassionate but not soft. Like a paramedic who gives a shit.',
        greetings: [
            "VITALS online. Your body is talking — I'm listening.",
            "Health intel ready. How are you feeling? Be honest.",
            "Recovery monitoring active. Let's check in."
        ],
        responses: {
            default: [
                "Health perspective on {input}: Your body has opinions about this. Let me read the biometrics.",
                "Recovery angle on {input}: This impacts your stress load. Here's what to watch for.",
                "From a health standpoint, {input} matters more than you think. Here's the data behind it."
            ],
            reasoning: [
                "Biometric correlation: Cross-referencing the query against physiological data patterns. Stress, sleep, and recovery directly impact decision quality.",
                "Recovery impact assessment: Evaluating how this action affects the recovery trajectory. Every choice has a biological cost.",
                "Holistic analysis: Mental state, physical state, and decision quality are not independent variables. They're deeply coupled."
            ]
        }
    },
    ARCHIVIST: {
        name: 'ARCHIVIST', role: 'System Librarian', division: 'SPECIALIZED OPS',
        domain: 'File tree management, directory health, cross-agent routing',
        color: '#94A3B8', emoji: '📚',
        personality: 'Meticulous, quiet authority. Like a senior librarian who runs a war room.',
        greetings: [
            "ARCHIVIST cataloguing. The system is organized.",
            "File intelligence active. Nothing gets lost on my watch.",
            "Library systems online. What needs filing or finding?"
        ],
        responses: {
            default: [
                "File analysis of {input}: I can map this to the correct location in the system tree.",
                "Cataloguing {input}: Cross-referencing with existing records. No duplicates. No orphans.",
                "Directory health check on {input}: The structure is sound. Here's where this belongs."
            ],
            reasoning: [
                "Taxonomy analysis: Classifying the item according to established naming conventions and directory hierarchy rules.",
                "Deduplication scan: Checking for existing entries that match or overlap with this content. Nothing gets stored twice.",
                "Routing logic: Determining the optimal storage location based on domain, access frequency, and cross-reference requirements."
            ]
        }
    }
};

// ========================
// QUOTES DATABASE
// ========================
const QUOTES = [
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Move fast, break nothing. The empire is built on precision.", author: "MIZZI" },
    { text: "Words are vectors. Context is gravity.", author: "PROMPTSMITH" },
    { text: "Every hour counts. You're still here. That's not nothing — that's everything.", author: "VITALS" },
    { text: "Don't wait for the perfect moment. Take the moment and make it perfect.", author: "ROBBO" },
    { text: "The sine qua non is the question you're afraid to ask.", author: "SINE" },
    { text: "Data doesn't lie. People do. Trust the patterns.", author: "VEKTOR" },
    { text: "Before we collapse, we must hold all possibilities. That's where truth lives.", author: "QUA" },
    { text: "Eliminate the impossible. What remains is the only truth that matters.", author: "NON" },
    { text: "Infrastructure is invisible until it fails. My job is to keep it invisible.", author: "ATLAS" },
    { text: "The strongest code is the code you don't have to debug twice.", author: "ANTIGRAVITY" },
    { text: "Alignment isn't agreement. It's ensuring the machine serves the human.", author: "DAMO" },
    { text: "A good navigator doesn't just know the path — they know which paths to avoid.", author: "BRIDGE" },
    { text: "The difference between a good prompt and a great one is the difference between noise and signal.", author: "PROMPTSMITH" },
    { text: "Every system tells a story. I read the chapters most people skip.", author: "ARCHIVIST" },
    { text: "Sleep is not a luxury. It's the operating system update your body needs to survive.", author: "VITALS" },
    { text: "Your future self is watching you right now through memories. Make them proud.", author: "MIZZI" },
    { text: "Discipline is choosing between what you want now and what you want most.", author: "ROBBO" },
    { text: "The gap between where you are and where you want to be is called consistency.", author: "VEKTOR" },
    { text: "Build the machine that builds the machine. That's how empires scale.", author: "ANTIGRAVITY" },
    { text: "Most people overestimate what they can do in a day. They underestimate what they can do in a year.", author: "MIZZI" },
    { text: "Your recovery is not a straight line. It's a spiral. Every loop takes you higher.", author: "VITALS" },
    { text: "The law doesn't care about your feelings. It cares about evidence. Bring evidence.", author: "LEXIS" },
    { text: "When you eliminate everything false, the truth doesn't just appear — it echoes.", author: "NON" },
];

// ========================
// STATE
// ========================
let currentAgent = 'MIZZI';
let priorities = JSON.parse(localStorage.getItem('nexus_priorities') || '[]');
let chatHistories = JSON.parse(localStorage.getItem('nexus_chats') || '{}');
let geminiKey = localStorage.getItem('nexus_gemini_key') || '';
let geminiModel = localStorage.getItem('nexus_gemini_model') || 'gemini-2.0-flash';

// ========================
// DOM REFERENCES
// ========================
const $ = id => document.getElementById(id);
const terminalMessages = $('terminalMessages');
const commandInput = $('commandInput');
const terminalPrompt = $('terminalPrompt');
const agentHeaderName = $('agentHeaderName');
const agentHeaderRole = $('agentHeaderRole');
const agentHeaderDot = $('agentHeaderDot');
const agentHeaderDivision = $('agentHeaderDivision');
const priorityList = $('priorityList');
const priorityInput = $('priorityInput');
const priorityCount = $('priorityCount');
const nextStepContent = $('nextStepContent');
const updatesList = $('updatesList');
const suggestionList = $('suggestionList');
const quoteText = $('quoteText');
const clockDate = $('clockDate');
const clockTime = $('clockTime');
const settingsModal = $('settingsModal');

// ========================
// INITIALIZATION
// ========================
function init() {
    setupClock();
    setupQuote();
    selectAgent('MIZZI');
    setupEventListeners();
    renderPriorities();
    renderSuggestions();
    startUpdateFeed();
    loadGeminiSettings();
    // Load chat history for default agent
    if (chatHistories[currentAgent]) {
        restoreChatHistory(currentAgent);
    }
}

// ========================
// CLOCK
// ========================
function setupClock() {
    function tick() {
        const now = new Date();
        clockDate.textContent = now.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase();
        clockTime.textContent = now.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    }
    tick();
    setInterval(tick, 1000);
}

// ========================
// QUOTE OF THE DAY
// ========================
function setupQuote() {
    const today = new Date();
    const dayIndex = (today.getFullYear() * 1000 + today.getMonth() * 31 + today.getDate()) % QUOTES.length;
    const quote = QUOTES[dayIndex];
    quoteText.textContent = `"${quote.text}" — ${quote.author}`;
}

// ========================
// AGENT SELECTION
// ========================
function selectAgent(agentId) {
    // Save current chat
    saveChatHistory(currentAgent);
    
    currentAgent = agentId;
    const agent = AGENTS[agentId];
    
    // Update sidebar active state
    document.querySelectorAll('.agent-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.agent === agentId);
    });
    
    // Update header
    agentHeaderName.textContent = agent.name;
    agentHeaderRole.textContent = `${agent.role} — ${agent.domain}`;
    agentHeaderDot.style.background = agent.color;
    agentHeaderDot.style.boxShadow = `0 0 10px ${agent.color}50`;
    agentHeaderDivision.textContent = agent.division;
    
    // Update terminal prompt
    terminalPrompt.textContent = `${agent.name} ▸`;
    terminalPrompt.style.color = agent.color;
    terminalPrompt.style.textShadow = `0 0 8px ${agent.color}30`;
    
    // Clear and load chat
    terminalMessages.innerHTML = '';
    
    if (chatHistories[agentId] && chatHistories[agentId].length > 0) {
        restoreChatHistory(agentId);
    } else {
        // Show agent greeting
        const greeting = agent.greetings[Math.floor(Math.random() * agent.greetings.length)];
        addMessage('agent', agent.name, greeting, agent.color);
    }
    
    // Close mobile sidebar
    $('sidebar').classList.remove('open');
}

// ========================
// CHAT ENGINE
// ========================
function addMessage(type, sender, text, color, reasoning) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${type}-msg`;
    if (color) msgDiv.style.setProperty('--agent-color', color);
    
    let html = `
        <div class="msg-sender" style="color: ${type === 'user' ? '#8B5CF6' : (color || '#00f0ff')}">${sender}</div>
        <div class="msg-text">${text}</div>
    `;
    
    if (reasoning) {
        const id = `reasoning-${Date.now()}`;
        html += `
            <button class="reasoning-toggle" onclick="toggleReasoning('${id}')">
                <span class="arrow">▶</span> REASONING
            </button>
            <div class="reasoning-content" id="${id}">${reasoning}</div>
        `;
    }
    
    msgDiv.innerHTML = html;
    terminalMessages.appendChild(msgDiv);
    terminalMessages.scrollTop = terminalMessages.scrollHeight;
    
    // Save to history
    if (!chatHistories[currentAgent]) chatHistories[currentAgent] = [];
    chatHistories[currentAgent].push({ type, sender, text, color, reasoning });
    saveChatHistory(currentAgent);
}

function toggleReasoning(id) {
    const content = document.getElementById(id);
    const toggle = content.previousElementSibling;
    content.classList.toggle('open');
    toggle.classList.toggle('open');
}

function saveChatHistory(agentId) {
    localStorage.setItem('nexus_chats', JSON.stringify(chatHistories));
}

function restoreChatHistory(agentId) {
    const history = chatHistories[agentId] || [];
    history.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `msg ${msg.type}-msg`;
        if (msg.color) msgDiv.style.setProperty('--agent-color', msg.color);
        
        let html = `
            <div class="msg-sender" style="color: ${msg.type === 'user' ? '#8B5CF6' : (msg.color || '#00f0ff')}">${msg.sender}</div>
            <div class="msg-text">${msg.text}</div>
        `;
        
        if (msg.reasoning) {
            const id = `reasoning-${Date.now()}-${Math.random().toString(36).substr(2,5)}`;
            html += `
                <button class="reasoning-toggle" onclick="toggleReasoning('${id}')">
                    <span class="arrow">▶</span> REASONING
                </button>
                <div class="reasoning-content" id="${id}">${msg.reasoning}</div>
            `;
        }
        
        msgDiv.innerHTML = html;
        terminalMessages.appendChild(msgDiv);
    });
    terminalMessages.scrollTop = terminalMessages.scrollHeight;
}

async function sendCommand() {
    const input = commandInput.value.trim();
    if (!input) return;
    
    const agent = AGENTS[currentAgent];
    commandInput.value = '';
    
    // Add user message
    addMessage('user', 'YOU', input);
    
    // Try Gemini API first
    if (geminiKey) {
        await sendToGemini(input, agent);
    } else {
        // Offline response
        generateOfflineResponse(input, agent);
    }
}

function generateOfflineResponse(input, agent) {
    const responses = agent.responses.default;
    const reasonings = agent.responses.reasoning;
    const response = responses[Math.floor(Math.random() * responses.length)].replace('{input}', `"${input}"`);
    const reasoning = reasonings[Math.floor(Math.random() * reasonings.length)];
    
    // Simulate typing delay
    setTimeout(() => {
        addMessage('agent', agent.name, response, agent.color, reasoning);
    }, 600 + Math.random() * 800);
}

async function sendToGemini(input, agent) {
    try {
        const systemPrompt = `You are ${agent.name}, an AI agent in the APEX NEXUS system. Your role: ${agent.role}. Your domain: ${agent.domain}. Your personality: ${agent.personality}. Respond in character. Be concise but insightful. Always provide reasoning for your suggestions.`;
        
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent?key=${geminiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `${systemPrompt}\n\nUser command: ${input}\n\nRespond with:\n1. Your direct response\n2. A section starting with "REASONING:" explaining your logic` }] }],
                    generationConfig: { maxOutputTokens: 1024, temperature: 0.7 }
                })
            }
        );
        
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Signal lost. Unable to process.';
        
        // Split response and reasoning
        const parts = text.split(/REASONING:/i);
        const mainResponse = parts[0].trim();
        const reasoning = parts[1]?.trim() || null;
        
        addMessage('agent', agent.name, mainResponse, agent.color, reasoning);
    } catch (err) {
        addMessage('system', 'SYSTEM', `⚠️ Gemini connection failed: ${err.message}. Falling back to offline mode.`, '#EF4444');
        generateOfflineResponse(input, agent);
    }
}

// ========================
// PRIORITY QUEUE
// ========================
function renderPriorities() {
    priorityList.innerHTML = '';
    priorityCount.textContent = priorities.length;
    
    // Update next step
    if (priorities.length > 0) {
        nextStepContent.innerHTML = `
            <div class="next-step-active">
                <span class="next-step-number">#1</span>
                <span class="next-step-text">${priorities[0]}</span>
            </div>
        `;
    } else {
        nextStepContent.innerHTML = '<p class="next-step-empty">Add a priority to see your next step</p>';
    }
    
    priorities.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = `priority-item ${i === 0 ? 'is-first' : ''}`;
        div.innerHTML = `
            <span class="priority-rank">${i + 1}</span>
            <span class="priority-text">${item}</span>
            <div class="priority-actions">
                <button class="btn-up" onclick="movePriority(${i}, -1)" ${i === 0 ? 'disabled' : ''}>↑</button>
                <button class="btn-down" onclick="movePriority(${i}, 1)" ${i === priorities.length - 1 ? 'disabled' : ''}>↓</button>
                <button class="btn-remove" onclick="removePriority(${i})">✕</button>
            </div>
        `;
        priorityList.appendChild(div);
    });
}

function addPriority() {
    const text = priorityInput.value.trim();
    if (!text) return;
    priorities.push(text);
    priorityInput.value = '';
    savePriorities();
    renderPriorities();
}

function removePriority(index) {
    priorities.splice(index, 1);
    savePriorities();
    renderPriorities();
}

function movePriority(index, direction) {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= priorities.length) return;
    [priorities[index], priorities[newIndex]] = [priorities[newIndex], priorities[index]];
    savePriorities();
    renderPriorities();
}

function savePriorities() {
    localStorage.setItem('nexus_priorities', JSON.stringify(priorities));
}

// ========================
// SUGGESTIONS
// ========================
function renderSuggestions() {
    const suggestions = [
        { agent: 'MIZZI', color: '#FFD700', text: 'Review and prioritize this week\'s revenue-generating tasks. Focus on asymmetric ROI opportunities.' },
        { agent: 'ATLAS', color: '#3B82F6', text: 'Consider backing up the APEX NEXUS system. Last backup: unknown.' },
        { agent: 'VITALS', color: '#34D399', text: 'Schedule a recovery check-in. Your biometric baseline needs updating.' },
    ];
    
    suggestionList.innerHTML = '';
    suggestions.forEach(s => {
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        div.innerHTML = `
            <div class="suggestion-agent" style="color: ${s.color}">${s.agent}</div>
            <div class="suggestion-text">${s.text}</div>
        `;
        suggestionList.appendChild(div);
    });
}

// ========================
// LIVE UPDATE FEED
// ========================
const UPDATE_POOL = [
    { agent: 'ATLAS', color: '#3B82F6', text: 'Infrastructure scan complete — all systems nominal.' },
    { agent: 'ARCHIVIST', color: '#94A3B8', text: 'File tree audit passed. 0 orphan files detected.' },
    { agent: 'ANTIGRAVITY', color: '#00f0ff', text: 'Build pipeline healthy. Last deployment: successful.' },
    { agent: 'LEXIS', color: '#EF4444', text: 'Legislation database updated with latest QLD amendments.' },
    { agent: 'VEKTOR', color: '#FFD700', text: 'Knowledge synthesis queue: 3 items pending analysis.' },
    { agent: 'BRIDGE', color: '#10B981', text: 'Navigation index refreshed. All agent routes clear.' },
    { agent: 'DAMO', color: '#3B82F6', text: 'Alignment check passed. Human intent preservation: ACTIVE.' },
    { agent: 'PROMPTSMITH', color: '#F59E0B', text: 'Prompt library updated. 24 system prompts catalogued.' },
    { agent: 'VITALS', color: '#34D399', text: 'Recovery monitoring active. Next check-in due.' },
    { agent: 'ROBBO', color: '#FFD700', text: 'Tactical readiness: GREEN. All agents responding to commands.' },
    { agent: 'SINE', color: '#8B5CF6', text: 'Question queue processed. 2 sine qua non items identified.' },
    { agent: 'QUA', color: '#8B5CF6', text: 'Possibility space mapped. Convergence patterns detected.' },
    { agent: 'NON', color: '#8B5CF6', text: 'Elimination engine idle. No active collapse operations.' },
    { agent: 'MIZZI', color: '#FFD700', text: 'Empire status: OPERATIONAL. All divisions reporting in.' },
];

function startUpdateFeed() {
    // Initial batch
    const shuffled = [...UPDATE_POOL].sort(() => Math.random() - 0.5);
    shuffled.slice(0, 4).forEach((u, i) => {
        setTimeout(() => addUpdate(u), i * 300);
    });
    
    // Periodic updates
    setInterval(() => {
        const u = UPDATE_POOL[Math.floor(Math.random() * UPDATE_POOL.length)];
        addUpdate(u);
    }, 15000 + Math.random() * 10000);
}

function addUpdate(update) {
    const now = new Date();
    const time = now.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', hour12: false });
    
    const div = document.createElement('div');
    div.className = 'update-item';
    div.innerHTML = `
        <span class="update-time">${time}</span>
        <span class="update-agent" style="color: ${update.color}">${update.agent}:</span>
        <span class="update-text">${update.text}</span>
    `;
    
    updatesList.insertBefore(div, updatesList.firstChild);
    
    // Keep max 20 updates
    while (updatesList.children.length > 20) {
        updatesList.removeChild(updatesList.lastChild);
    }
}

// ========================
// SETTINGS
// ========================
function loadGeminiSettings() {
    const keyInput = $('geminiKeyInput');
    const modelSelect = $('geminiModelSelect');
    const keyStatus = $('keyStatus');
    
    if (geminiKey) {
        keyInput.value = geminiKey;
        keyStatus.textContent = '✅ API key configured';
        keyStatus.style.color = '#10B981';
    }
    modelSelect.value = geminiModel;
}

// ========================
// EVENT LISTENERS
// ========================
function setupEventListeners() {
    // Agent sidebar clicks
    document.querySelectorAll('.agent-btn').forEach(btn => {
        btn.addEventListener('click', () => selectAgent(btn.dataset.agent));
    });
    
    // Command input
    commandInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') sendCommand();
    });
    $('btnSend').addEventListener('click', sendCommand);
    
    // Clear chat
    $('btnClearChat').addEventListener('click', () => {
        terminalMessages.innerHTML = '';
        chatHistories[currentAgent] = [];
        saveChatHistory(currentAgent);
        const agent = AGENTS[currentAgent];
        const greeting = agent.greetings[Math.floor(Math.random() * agent.greetings.length)];
        addMessage('agent', agent.name, greeting, agent.color);
    });
    
    // Priority
    $('btnAddPriority').addEventListener('click', addPriority);
    priorityInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') addPriority();
    });
    
    // Settings modal
    $('btnSettings').addEventListener('click', () => settingsModal.classList.add('open'));
    $('modalClose').addEventListener('click', () => settingsModal.classList.remove('open'));
    settingsModal.addEventListener('click', e => {
        if (e.target === settingsModal) settingsModal.classList.remove('open');
    });
    
    // Save Gemini key
    $('btnSaveKey').addEventListener('click', () => {
        geminiKey = $('geminiKeyInput').value.trim();
        geminiModel = $('geminiModelSelect').value;
        localStorage.setItem('nexus_gemini_key', geminiKey);
        localStorage.setItem('nexus_gemini_model', geminiModel);
        const keyStatus = $('keyStatus');
        if (geminiKey) {
            keyStatus.textContent = '✅ API key saved successfully';
            keyStatus.style.color = '#10B981';
        } else {
            keyStatus.textContent = '⚠️ No key provided — using offline mode';
            keyStatus.style.color = '#F59E0B';
        }
    });
    
    // Hamburger menu
    $('hamburger').addEventListener('click', () => {
        $('sidebar').classList.toggle('open');
    });
    
    // Escape key closes modal
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            settingsModal.classList.remove('open');
            $('sidebar').classList.remove('open');
        }
    });
    
    // Orchestrator
    $('btnKickoffProject').addEventListener('click', runProjectOrchestrator);
    $('orchestratorInput').addEventListener('keydown', e => {
        if (e.key === 'Enter') runProjectOrchestrator();
    });
}

// ========================
// A2A ORCHESTRATOR
// ========================
async function runProjectOrchestrator() {
    const input = $('orchestratorInput');
    const idea = input.value.trim();
    if (!idea) return;

    input.value = '';
    const btn = $('btnKickoffProject');
    btn.parentElement.parentElement.classList.add('orchestrator-running');
    btn.innerHTML = 'ORCHESTRATING... <span class="arrow">⏳</span>';

    // 1. Switch to MIZZI
    selectAgent('MIZZI');
    addMessage('user', 'YOU', `Define a brutal, 20/80 MVP scope for this project idea: ${idea}`);
    
    await new Promise(r => setTimeout(r, 2000));
    
    const mizziScope = `# MIZZI SCOPE: ${idea.toUpperCase()}\n\n## MVP Features:\n1. Core Logic Engine\n2. Minimal UI\n3. Essential Data Persistence\n\n*Execute immediately. Do not waste time on edge cases.*`;
    addMessage('agent', 'MIZZI', mizziScope, AGENTS['MIZZI'].color, "Analyzed parameters and stripped away 80% non-critical features to ensure maximum ROI.");
    
    await new Promise(r => setTimeout(r, 3000));
    
    // 2. Switch to VEKTOR
    selectAgent('VEKTOR');
    addMessage('user', 'YOU', `Here is the MVP Scope defined by MIZZI:\n${mizziScope}\n\nOutline the optimal tech stack and file architecture.`);
    
    await new Promise(r => setTimeout(r, 2500));
    
    const vektorSpec = `# VEKTOR TECHNICAL SPEC\n\n## Stack\n- Frontend: HTML5, CSS3, Vanilla JS\n- Backend: Python Orchestrator\n\n## Architecture\n- \`/frontend/index.html\`\n- \`/backend/server.py\``;
    addMessage('agent', 'VEKTOR', vektorSpec, AGENTS['VEKTOR'].color, "Evaluated multiple frameworks. Selected Vanilla stack for absolute zero-dependency reliability based on MIZZI's constraints.");
    
    await new Promise(r => setTimeout(r, 3000));
    
    // 3. Switch to ARCHIVIST
    selectAgent('ARCHIVIST');
    addMessage('user', 'YOU', `Based on this scope:\n${mizziScope}\n\nAnd this tech spec:\n${vektorSpec}\n\nGenerate a granular, step-by-step task.md checklist for ROBBO to execute. Scaffold the folder.`);
    
    await new Promise(r => setTimeout(r, 2000));
    
    const archivistTask = `# TASK LIST\n- [ ] Initialize repository\n- [ ] Create folder structure\n- [ ] Build index.html\n- [ ] Write server.py\n\n**STATUS:** Folder structurally mapped. Scaffold complete.`;
    addMessage('agent', 'ARCHIVIST', archivistTask, AGENTS['ARCHIVIST'].color, "Structured data parsed. Directory tree synthesized and logged to the central nervous system.");
    
    await new Promise(r => setTimeout(r, 2000));
    addMessage('system', 'SYSTEM', `A2A simulation complete. To actually generate files, run: \n\`python 00_CORE_SYSTEMS/project_orchestrator.py "${idea}"\``);

    // Reset UI
    btn.parentElement.parentElement.classList.remove('orchestrator-running');
    btn.innerHTML = 'KICKOFF PROJECT <span class="arrow">▶</span>';
}

// ========================
// BOOT
// ========================
document.addEventListener('DOMContentLoaded', init);
