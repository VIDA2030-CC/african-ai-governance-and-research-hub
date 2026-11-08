
// =============================================
// AFRICAN AI GOVERNANCE HUB
// PROFILE + MIXED QUESTION ASSESSMENT
// =============================================


// 1. HTML ELEMENTS

const assessmentForm = document.getElementById("assessment-form");
const aiDetails = document.getElementById("ai-details");
const aiUseOptions = document.querySelectorAll('input[name="aiUse"]');
const otherSector = document.getElementById("other-sector");
const sectorSelect = document.getElementById("organisation-sector");
const otherAiPurpose = document.getElementById("other-ai-purpose");
const aiPurposeOptions = document.querySelectorAll('input[name="aiPurpose"]');

const questionContainer = document.getElementById("assessment-questions");
const resultsContainer = document.getElementById("assessment-results");


// 2. PROFILE FORM CONDITIONAL FIELDS

aiUseOptions.forEach(option => {
    option.addEventListener("change", function () {

        const selected = document.querySelector(
            'input[name="aiUse"]:checked'
        ).value;

        const showQuestions = [
            "Yes, regularly",
            "Yes, occasionally",
            "Currently exploring AI",
            "Planning to adopt AI",
            "Not sure"
        ];

        aiDetails.hidden = !showQuestions.includes(selected);

        if (aiDetails.hidden) {
            aiPurposeOptions.forEach(item => item.checked = false);
            document.getElementById("ai-development").value = "";
            otherAiPurpose.value = "";
            otherAiPurpose.hidden = true;
        }
    });
});


if (sectorSelect) {
    sectorSelect.addEventListener("change", function () {
    const isOther = sectorSelect.value === "Other";

    otherSector.hidden = !isOther;
    otherSector.required = isOther;

            if (!isOther) otherSector.value = "";
    });
}


aiPurposeOptions.forEach(option => {
    option.addEventListener("change", function () {

        const otherSelected = document.querySelector(
            'input[name="aiPurpose"][value="Other"]'
        ).checked;

        otherAiPurpose.hidden = !otherSelected;

        if (!otherSelected) otherAiPurpose.value = "";
    });
});


// 3. SHARED INTERNATIONAL STANDARDS QUESTIONS

const sharedStandardsQuestions = [

    {
        id: "STD1",
        category: "international-standard",
        question: "Has your organisation established or considered an AI management system that assigns responsibilities, establishes governance controls and supports continual improvement?",
        reference: "ISO/IEC 42001"
    },

    {
        id: "STD2",
        category: "international-standard",
        question: "Does your organisation have a structured process for identifying, assessing, treating, monitoring and reviewing risks associated with AI throughout its lifecycle?",
        reference: "ISO/IEC 23894"
    }
];


// 4. SHARED ETHICAL QUESTIONS

const sharedEthicsQuestions = [

    {
        id: "ETH1",
        category: "ethical",
        question: "Does your organisation inform users or affected individuals when they are interacting with AI, or when AI plays a material role in a service or process?",
        reference: "Transparency and disclosure"
    },

    {
        id: "ETH2",
        category: "ethical",
        question: "Does your organisation provide understandable explanations of significant AI-generated outputs, recommendations or decisions where appropriate?",
        reference: "Explainability"
    },

    {
        id: "ETH3",
        category: "ethical",
        question: "Is meaningful human oversight available where AI outputs may significantly affect individuals or important organisational decisions?",
        reference: "Human oversight"
    },

    {
        id: "ETH4",
        category: "ethical",
        question: "Does your organisation test AI systems for bias, discrimination or unfair outcomes before deployment and during ongoing use?",
        reference: "Fairness and non-discrimination"
    },

    {
        id: "ETH5",
        category: "ethical",
        question: "Does your organisation evaluate the accuracy, reliability and suitability of AI outputs before relying on them for important decisions or actions?",
        reference: "Reliability and safety"
    },

    {
        id: "ETH6",
        category: "ethical",
        question: "Is there a process through which individuals can raise concerns, challenge AI-assisted outcomes and seek human review or appropriate remedies?",
        reference: "Accountability and redress"
    }
];


// 5. ZAMBIA LEGAL QUESTIONS

const zambiaLegalQuestions = [

    {
        id: "ZM-L1",
        category: "legal",
        question: "Where your organisation processes personal data in connection with AI systems, has it assessed whether it is required to register as a data controller or processor with the Data Protection Commissioner and obtained the required registration where applicable?",
        reference: "Zambia Data Protection Act No. 3 of 2021, sections 19–21"
    },

    {
        id: "ZM-L2",
        category: "legal",
        question: "Before introducing an AI system involving personal data processing that is likely to result in a high risk to individuals' rights and freedoms, does your organisation conduct a Data Protection Impact Assessment where required?",
        reference: "Zambia Data Protection Act No. 3 of 2021, section 46"
    },

    {
        id: "ZM-L3",
        category: "legal",
        question: "When an external AI provider processes personal data on your organisation's behalf, does your organisation assess the provider's security guarantees and ensure that the required processing arrangements and safeguards are in place?",
        reference: "Zambia Data Protection Act No. 3 of 2021, sections 47 and 52"
    },

    {
        id: "ZM-L4",
        category: "legal",
        question: "Does your organisation have procedures for handling personal data breaches, including the required notifications to the Data Protection Commissioner and affected data subjects where applicable?",
        reference: "Zambia Data Protection Act No. 3 of 2021, section 49"
    },

    {
        id: "ZM-L5",
        category: "legal",
        question: "Does your organisation identify solely automated decisions involving personal data that produce legal effects or similarly significantly affect individuals, and apply the required safeguards where applicable?",
        reference: "Zambia Data Protection Act No. 3 of 2021, section 62"
    }
];


// 6. ZAMBIA POLICY QUESTIONS

const zambiaPolicyQuestions = [

    {
        id: "ZM-P1",
        category: "policy",
        question: "Has your organisation considered governance measures that promote transparency, explainability and accountability in the development or use of AI?",
        reference: "Zambia National AI Strategy, section 5.2.1"
    },

    {
        id: "ZM-P2",
        category: "policy",
        question: "Does your organisation consider inclusion and accessibility, including the needs of persons with disabilities and marginalised communities, when adopting or using AI?",
        reference: "Zambia National AI Strategy, section 5.2.2"
    },

    {
        id: "ZM-P3",
        category: "policy",
        question: "Has your organisation considered a responsible approach to the collection, use, storage and sharing of data in its AI activities, including privacy and security?",
        reference: "Zambia National AI Strategy, section 5.2.4"
    }
];


// 7. SOUTH AFRICA LEGAL QUESTIONS

const southAfricaLegalQuestions = [

    {
        id: "SA-L1",
        category: "legal",
        question: "When processing personal information through AI systems, does your organisation ensure that the processing has a lawful basis and complies with requirements concerning purpose specification and minimality?",
        reference: "South Africa POPIA 4 of 2013, sections 8–13"
    },

    {
        id: "SA-L2",
        category: "legal",
        question: "Does your organisation implement appropriate, reasonable technical and organisational measures to protect personal information processed through its AI systems, including where external operators are involved?",
        reference: "South Africa POPIA 4 of 2013, sections 19–21"
    },

    {
        id: "SA-L3",
        category: "legal",
        question: "Does your organisation have procedures for notifying the Information Regulator and affected data subjects of security compromises where the statutory notification requirements are triggered?",
        reference: "South Africa POPIA 4 of 2013, section 22"
    },

    {
        id: "SA-L4",
        category: "legal",
        question: "Does your organisation identify decisions based solely on automated processing that have legal consequences or substantially affect individuals, and apply the safeguards and exceptions required by law?",
        reference: "South Africa POPIA 4 of 2013, section 71"
    },

    {
        id: "SA-L5",
        category: "legal",
        question: "Before transferring personal information to an AI provider or service outside South Africa, does your organisation ensure that a condition permitting the cross-border transfer is satisfied?",
        reference: "South Africa POPIA 4 of 2013, section 72"
    }
];


// 8. SOUTH AFRICA POLICY QUESTIONS

const southAfricaPolicyQuestions = [

    {
        id: "SA-P1",
        category: "policy",
        question: "Has your organisation considered internal measures that promote ethical and responsible AI use and establish accountability for AI-related activities?",
        reference: "South Africa National AI Policy Framework 2024, pillar 6.5"
    },

    {
        id: "SA-P2",
        category: "policy",
        question: "Does your organisation consider potential bias and discrimination when developing, selecting, testing or deploying AI systems?",
        reference: "South Africa National AI Policy Framework 2024, pillar 6.5"
    },

    {
        id: "SA-P3",
        category: "policy",
        question: "Does your organisation promote transparency and explainability in its AI systems for relevant users and stakeholders?",
        reference: "South Africa National AI Policy Framework 2024, pillar 6.8"
    }
];


// 9. BUILD A MIXED QUESTION SEQUENCE


function getQuestions(jurisdiction) {

    let legal = [];
    let policy = [];

    if (jurisdiction === "zambia") {

        legal = [...zambiaLegalQuestions];
        policy = [...zambiaPolicyQuestions];

    } else if (jurisdiction === "south-africa") {

        legal = [...southAfricaLegalQuestions];
        policy = [...southAfricaPolicyQuestions];

    } else if (jurisdiction === "both") {

        // Alternate Zambian and South African legal questions.

        for (let i = 0; i < zambiaLegalQuestions.length; i++) {

            legal.push(zambiaLegalQuestions[i]);
            legal.push(southAfricaLegalQuestions[i]);

        }

        // Alternate the two countries' policy questions.

        for (let i = 0; i < zambiaPolicyQuestions.length; i++) {

            policy.push(zambiaPolicyQuestions[i]);
            policy.push(southAfricaPolicyQuestions[i]);

        }

    }

    // Mix all question categories into one assessment.
    // Internal category labels remain attached for scoring.

    const groups = [
        legal,
        sharedEthicsQuestions,
        policy,
        sharedStandardsQuestions
    ];

    const mixed = [];

    let index = 0;

    while (groups.some(group => index < group.length)) {

        groups.forEach(function(group) {

            if (group[index]) {
                mixed.push(group[index]);
            }

        });

        index++;

    }

    return mixed;

}



// 10. ASSESSMENT STATE

let currentQuestions = [];
let currentQuestionIndex = 0;
let assessmentAnswers = {};


// 11. DISPLAY ONE QUESTION AT A TIME

function displayCurrentQuestion() {

    const question = currentQuestions[currentQuestionIndex];

    const progress = (
        (currentQuestionIndex + 1) / currentQuestions.length
    ) * 100;

    const savedAnswer = assessmentAnswers[question.id] || "";

    questionContainer.innerHTML = `

        <div class="assessment-intro question-screen">

            <div class="question-progress">

                <div class="progress-labels">
                    <span>Question ${currentQuestionIndex + 1} of ${currentQuestions.length}</span>
                    <span>${Math.round(progress)}% completed</span>
                </div>

                <div class="progress-track">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>

            </div>

            <p class="question-number">GOVERNANCE ASSESSMENT</p>

            <h3 class="question-text">
                ${question.question}
            </h3>

            <div class="answer-options">

                ${[
                    ["yes", "Yes – fully implemented"],
                    ["partial", "Partially implemented"],
                    ["planned", "Planned"],
                    ["no", "No – not implemented"],
                    ["unsure", "Not sure"],
                    ["na", "Not applicable"]
                ].map(([value, label]) => `
                    <label class="answer-option">
                        <input
                            type="radio"
                            name="current-answer"
                            value="${value}"
                            ${savedAnswer === value ? "checked" : ""}
                        >
                        <span>${label}</span>
                    </label>
                `).join("")}

            </div>

            <div class="question-navigation">

                <button
                    type="button"
                    id="previous-question"
                    ${currentQuestionIndex === 0 ? "disabled" : ""}
                >
                    Previous
                </button>

                <button
                    type="button"
                    id="next-question"
                >
                    ${currentQuestionIndex === currentQuestions.length - 1
                        ? "Review answers"
                        : "Next question"}
                </button>

            </div>

        </div>

    `;

    document.getElementById("previous-question")
        .addEventListener("click", previousQuestion);

    document.getElementById("next-question")
        .addEventListener("click", nextQuestion);

    questionContainer.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// 12. SAVE THE CURRENT ANSWER

function saveCurrentAnswer() {

    const selected = document.querySelector(
        'input[name="current-answer"]:checked'
    );

    if (!selected) {
        alert("Please select an answer before continuing.");
        return false;
    }

    const question = currentQuestions[currentQuestionIndex];

    assessmentAnswers[question.id] = selected.value;

    return true;
}


// 13. MOVE TO THE NEXT QUESTION

function nextQuestion() {

    if (!saveCurrentAnswer()) return;

    if (currentQuestionIndex < currentQuestions.length - 1) {

        currentQuestionIndex++;
        displayCurrentQuestion();

    } else {

        displayReview();

    }
}


// 14. MOVE TO THE PREVIOUS QUESTION

function previousQuestion() {

    if (currentQuestionIndex > 0) {

        saveCurrentAnswer();

        currentQuestionIndex--;
        displayCurrentQuestion();

    }
}


// 15. REVIEW ANSWERS BEFORE SUBMISSION

function displayReview() {

    const answeredCount = Object.keys(assessmentAnswers).length;

    questionContainer.innerHTML = `

        <div class="assessment-intro">

            <h3>Review Your Responses</h3>

            <p>
                You have answered ${answeredCount} of
                ${currentQuestions.length} questions.
                Review your responses before submitting.
            </p>

            <div id="review-list"></div>

            <div class="question-navigation">

                <button type="button" id="edit-answers">
                    Go Back
                </button>

                <button type="button" id="final-submit">
                    Submit Assessment
                </button>

            </div>

        </div>

    `;

    const reviewList = document.getElementById("review-list");

    currentQuestions.forEach((question, index) => {

        const item = document.createElement("div");
        item.className = "review-item";

        const answer = assessmentAnswers[question.id];

        const labels = {
            yes: "Yes – fully implemented",
            partial: "Partially implemented",
            planned: "Planned",
            no: "No – not implemented",
            unsure: "Not sure",
            na: "Not applicable"
        };

        item.innerHTML = `
            <p><strong>Question ${index + 1}</strong></p>
            <p>${question.question}</p>
            <p class="review-answer">
                Your answer: ${labels[answer]}
            </p>
        `;

        reviewList.appendChild(item);

    });

    document.getElementById("edit-answers")
        .addEventListener("click", function () {

            currentQuestionIndex = currentQuestions.length - 1;
            displayCurrentQuestion();

        });

    document.getElementById("final-submit")
        .addEventListener("click", submitAssessment);

    questionContainer.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}



// =============================================
// 16. SCORING ENGINE AND ASSESSMENT RESULTS
// =============================================

// 1. CONVERT ANSWERS INTO NUMERICAL SCORES

function getAnswerScore(answer) {
    const scores = {
        yes: 3,
        partial: 2,
        planned: 1,
        no: 0,
        unsure: 0
    };

    return scores[answer];
}


// 2. DETERMINE REPORTING CATEGORIES

function getAssessmentCategories(jurisdiction) {

    if (jurisdiction === "zambia") {
        return [
            { id: "zambia-legal", name: "Zambia Legal and Regulatory Governance" },
            { id: "zambia-policy", name: "Zambia Policy Alignment" },
            { id: "standards", name: "International Standards" },
            { id: "ethics", name: "Ethical AI Governance" }
        ];
    }

    if (jurisdiction === "south-africa") {
        return [
            { id: "south-africa-legal", name: "South Africa Legal and Regulatory Governance" },
            { id: "south-africa-policy", name: "South Africa Policy Alignment" },
            { id: "standards", name: "International Standards" },
            { id: "ethics", name: "Ethical AI Governance" }
        ];
    }

    return [
        { id: "zambia-legal", name: "Zambia Legal and Regulatory Governance" },
        { id: "south-africa-legal", name: "South Africa Legal and Regulatory Governance" },
        { id: "zambia-policy", name: "Zambia Policy Alignment" },
        { id: "south-africa-policy", name: "South Africa Policy Alignment" },
        { id: "standards", name: "International Standards" },
        { id: "ethics", name: "Ethical AI Governance" }
    ];
}


// 3. IDENTIFY THE CATEGORY FOR EACH QUESTION

function getQuestionCategory(question) {

    if (question.id.startsWith("ZM-L")) return "zambia-legal";
    if (question.id.startsWith("SA-L")) return "south-africa-legal";
    if (question.id.startsWith("ZM-P")) return "zambia-policy";
    if (question.id.startsWith("SA-P")) return "south-africa-policy";

    if (question.category === "international-standard") {
        return "standards";
    }

    if (question.category === "ethical") {
        return "ethics";
    }

    return null;
}


// 4. CALCULATE ASSESSMENT RESULTS

function calculateAssessmentResults() {

    const profile = JSON.parse(
        sessionStorage.getItem("organisationProfile") || "null"
    );

    if (!profile || !profile.jurisdiction) {
        throw new Error(
            "The organisation profile could not be found. Please restart the assessment."
        );
    }

    const categories = getAssessmentCategories(profile.jurisdiction);

    const categoryResults = categories.map(category => {

        const relevantQuestions = currentQuestions.filter(
            question => getQuestionCategory(question) === category.id
        );

        let pointsEarned = 0;
        let applicableQuestions = 0;

        relevantQuestions.forEach(question => {

            const answer = assessmentAnswers[question.id];

            if (answer === "na") return;
            if (typeof getAnswerScore(answer) !== "number") return;

            applicableQuestions++;
            pointsEarned += getAnswerScore(answer);

        });

        const maximumPoints = applicableQuestions * 3;

        const percentage = applicableQuestions > 0
            ? Math.round((pointsEarned / maximumPoints) * 100)
            : null;

        return {
            id: category.id,
            name: category.name,
            pointsEarned,
            maximumPoints,
            applicableQuestions,
            percentage
        };

    });

    const assessedCategories = categoryResults.filter(
        category => category.percentage !== null
    );

    const overallScore = assessedCategories.length > 0
        ? Math.round(
            assessedCategories.reduce(
                (total, category) => total + category.percentage,
                0
            ) / assessedCategories.length
        )
        : null;

    return {
        profile,
        categoryResults,
        overallScore
    };
}


// 5. ASSIGN INDICATIVE MATURITY LEVELS

function getMaturityLevel(score) {

    if (score === null) return "Not assessed";
    if (score < 40) return "Foundational";
    if (score < 60) return "Emerging";
    if (score < 80) return "Established";

    return "Advanced";
}


// 6. INTERPRET ASSESSMENT RESPONSES

// These statements are based on self-reported answers.
// They are not independent verification of organisational practices.

const questionAnalysis = {

    "ZM-L1": {
        strength: "The organisation reports that it has considered its data-controller or data-processor registration obligations and has addressed registration where required.",
        gap: "The organisation should confirm whether its AI-related personal-data activities trigger data-controller or data-processor registration requirements and complete any required registration.",
        action: "Map the organisation's personal-data processing activities and confirm its registration status with the Data Protection Commissioner."
    },

    "ZM-L2": {
        strength: "The organisation reports having considered data protection impact assessments for high-risk personal-data processing involving AI.",
        gap: "The organisation should strengthen its process for identifying high-risk AI-related personal-data processing and conducting a Data Protection Impact Assessment where required.",
        action: "Introduce a screening process to identify high-risk processing and document Data Protection Impact Assessments where legally required."
    },

    "ZM-L3": {
        strength: "The organisation reports that it assesses external AI providers and considers safeguards for personal data processed on its behalf.",
        gap: "The organisation should review how it assesses external AI providers, processing arrangements and safeguards for personal data.",
        action: "Review AI-provider due diligence, contractual processing terms, security guarantees and applicable safeguards."
    },

    "ZM-L4": {
        strength: "The organisation reports having procedures for responding to personal-data breaches and considering applicable notification duties.",
        gap: "The organisation should establish or strengthen procedures for identifying, escalating and responding to personal-data breaches, including applicable notifications.",
        action: "Document a breach-response procedure with responsible personnel, escalation steps, timelines and notification assessment."
    },

    "ZM-L5": {
        strength: "The organisation reports that it considers solely automated decisions and the safeguards that may apply to decisions affecting individuals.",
        gap: "The organisation should identify AI-enabled solely automated decisions that may significantly affect individuals and assess the safeguards required by law.",
        action: "Create an inventory of AI-assisted and solely automated decisions, assess their impact and document applicable safeguards."
    },

    "ZM-P1": {
        strength: "The organisation reports considering transparency, explainability and accountability in its AI activities.",
        gap: "The organisation should translate transparency, explainability and accountability principles into documented AI governance practices.",
        action: "Adopt practical transparency, explainability and accountability controls for AI systems and decisions."
    },

    "ZM-P2": {
        strength: "The organisation reports considering inclusion and accessibility in its AI activities.",
        gap: "The organisation should more consistently assess whether AI systems are accessible and inclusive, particularly for persons with disabilities and marginalised communities.",
        action: "Include accessibility and inclusion checks in AI procurement, design, testing and review."
    },

    "ZM-P3": {
        strength: "The organisation reports considering responsible data collection, use, storage and sharing in its AI activities.",
        gap: "The organisation should strengthen its approach to responsible data governance, including privacy and security throughout AI activities.",
        action: "Document data-governance requirements covering collection, use, storage, sharing, retention, privacy and security."
    },

    "SA-L1": {
        strength: "The organisation reports considering lawful processing, purpose specification and minimality when using personal information in AI systems.",
        gap: "The organisation should review the lawful basis, defined purposes and minimality of personal-information processing across its AI systems.",
        action: "Map AI-related personal-information processing and document the lawful basis, purpose and data-minimisation measures for each activity."
    },

    "SA-L2": {
        strength: "The organisation reports implementing security measures to protect personal information used by AI systems, including where operators are involved.",
        gap: "The organisation should assess whether technical and organisational safeguards adequately protect personal information used in AI systems.",
        action: "Review access controls, security testing, operator arrangements and documented safeguards for AI-related personal information."
    },

    "SA-L3": {
        strength: "The organisation reports having procedures for assessing and notifying security compromises where statutory requirements are triggered.",
        gap: "The organisation should establish or strengthen a security-compromise response process that addresses applicable notification requirements.",
        action: "Document an incident-response process covering detection, escalation, investigation and assessment of notifications to the Information Regulator and affected people."
    },

    "SA-L4": {
        strength: "The organisation reports identifying solely automated decisions that may have legal or substantial effects and considering applicable safeguards.",
        gap: "The organisation should assess AI-enabled automated decisions that may have legal or substantial effects on individuals and consider the safeguards required under POPIA.",
        action: "Identify automated decision-making processes and document applicable safeguards, including human intervention where required."
    },

    "SA-L5": {
        strength: "The organisation reports considering data-subject rights and procedures for handling requests relating to personal information.",
        gap: "The organisation should strengthen procedures for responding to data-subject requests involving personal information processed through AI systems.",
        action: "Review privacy notices and establish procedures for access, correction, objection and other applicable data-subject requests."
    },

    "SA-P1": {
        strength: "The organisation reports considering responsible and human-centred AI principles in its activities.",
        gap: "The organisation should translate responsible AI principles into documented organisational policies and operational controls.",
        action: "Develop an internal responsible AI policy with clear accountability and implementation measures."
    },

    "SA-P2": {
        strength: "The organisation reports considering fairness, inclusion and non-discrimination in AI deployment.",
        gap: "The organisation should strengthen processes for identifying and mitigating discriminatory outcomes and unequal impacts.",
        action: "Introduce bias testing, impact reviews and monitoring for potentially discriminatory AI outcomes."
    },

    "SA-P3": {
        strength: "The organisation reports considering accountability, transparency and human oversight in its AI activities.",
        gap: "The organisation should establish clearer accountability arrangements, transparency measures and human oversight for AI systems.",
        action: "Assign responsible personnel and establish documented oversight, escalation and review procedures."
    },

    "STD1": {
        strength: "The organisation reports alignment with recognised AI management-system principles.",
        gap: "The organisation should consider establishing a structured AI management system informed by ISO/IEC 42001.",
        action: "Assess the organisation's readiness to implement an AI management system, including leadership responsibilities, policies, risk controls and continual improvement."
    },

    "STD2": {
        strength: "The organisation reports using structured AI risk-management practices informed by recognised international guidance.",
        gap: "The organisation should strengthen its AI risk-management approach using recognised guidance such as ISO/IEC 23894.",
        action: "Introduce a documented AI risk-management process covering identification, assessment, treatment, monitoring and review."
    },

    "ETH1": {
        strength: "The organisation reports considering transparency and disclosure when AI systems interact with people or influence decisions.",
        gap: "The organisation should improve transparency about when and how AI systems are being used.",
        action: "Introduce clear disclosure practices explaining relevant AI interactions, uses and limitations."
    },

    "ETH2": {
        strength: "The organisation reports considering explainability and the ability to communicate how AI-supported outcomes are reached.",
        gap: "The organisation should improve its ability to explain AI-supported outcomes to affected users and stakeholders.",
        action: "Document explanation procedures appropriate to the system's risk, purpose and intended users."
    },

    "ETH3": {
        strength: "The organisation reports maintaining human oversight over relevant AI systems and decisions.",
        gap: "The organisation should establish appropriate human oversight, intervention and escalation mechanisms.",
        action: "Define when human review is required, who is responsible and how AI outputs can be challenged or overridden."
    },

    "ETH4": {
        strength: "The organisation reports considering fairness and potential bias in AI systems.",
        gap: "The organisation should strengthen its approach to identifying, testing and mitigating bias in AI systems.",
        action: "Conduct periodic bias and fairness assessments using appropriate data, testing methods and stakeholder input."
    },

    "ETH5": {
        strength: "The organisation reports monitoring the accuracy and reliability of AI-generated outputs.",
        gap: "The organisation should strengthen testing and monitoring to identify inaccurate, unreliable or harmful AI outputs.",
        action: "Introduce validation, performance monitoring and procedures for correcting unreliable AI outputs."
    },

    "ETH6": {
        strength: "The organisation reports having channels through which individuals can raise concerns or seek redress relating to AI-supported outcomes.",
        gap: "The organisation should establish accessible complaint-handling and redress procedures for people affected by AI-supported decisions.",
        action: "Create a documented complaints process with escalation, human review and appropriate remedies."
    }

};


// 7. GENERATE INTERPRETED FINDINGS

function generateAssessmentFindings() {

    const strengths = [];
    const improvementAreas = [];
    const legalReviewAreas = [];

    currentQuestions.forEach(question => {

        const answer = assessmentAnswers[question.id];
        const analysis = questionAnalysis[question.id];

        if (!analysis || !answer || answer === "na") return;

        const category = getQuestionCategory(question);

        const item = {
            questionId: question.id,
            category,
            reference: question.reference || "Relevant governance framework",
            answer
        };

        if (answer === "yes") {

            strengths.push({
                ...item,
                statement: analysis.strength
            });

        } else {

            improvementAreas.push({
                ...item,
                statement: analysis.gap
            });

            if (
                category === "zambia-legal" ||
                category === "south-africa-legal"
            ) {
                legalReviewAreas.push({
                    ...item,
                    statement: analysis.gap
                });
            }

        }

    });

    return {
        strengths,
        improvementAreas,
        legalReviewAreas
    };
}


// 8. GENERATE PRIORITISED RECOMMENDATIONS

function generateRecommendations(findings) {

    const recommendations = [];

    findings.improvementAreas.forEach(item => {

        const analysis = questionAnalysis[item.questionId];

        let priority = "Development priority";

        if (item.answer === "no" || item.answer === "unsure") {
            priority = "High priority";
        } else if (item.answer === "partial") {
            priority = "Improvement priority";
        }

        recommendations.push({
            priority,
            action: analysis.action,
            reference: item.reference,
            questionId: item.questionId
        });

    });

    const priorityOrder = {
        "High priority": 1,
        "Improvement priority": 2,
        "Development priority": 3
    };

    recommendations.sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );

    return recommendations;
}


// 9. BUILD CATEGORY SCORE DISPLAY

function buildCategoryHTML(categoryResults) {

    return categoryResults.map(category => {

        const score = category.percentage;

        return `
            <div class="result-category">

                <div class="result-category-heading">
                    <strong>${category.name}</strong>
                    <strong>
                        ${score === null ? "Not assessed" : score + "%"}
                    </strong>
                </div>

                ${
                    score === null
                    ? ""
                    : `
                        <div class="result-progress-track">
                            <div
                                class="result-progress-fill"
                                style="width: ${score}%"
                            ></div>
                        </div>
                    `
                }

                <small class="result-reference">
                    ${getMaturityLevel(score)}
                    ${
                        category.applicableQuestions
                        ? " · " + category.applicableQuestions + " applicable responses"
                        : ""
                    }
                </small>

            </div>
        `;

    }).join("");
}


// 10. SAFELY DISPLAY FINDINGS

function buildFindingList(items, emptyMessage) {

    if (!items.length) {
        return `<li>${emptyMessage}</li>`;
    }

    return items.map(item => `
        <li>
            ${item.statement}
            <small class="result-reference">
                ${item.reference}
            </small>
        </li>
    `).join("");
}


// 11. ESCAPE USER-SUPPLIED TEXT IN THE PDF REPORT

function escapeHTML(value) {

    return String(value ?? "").replace(/[&<>"']/g, character => {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];

    });
}


function formatProfileValue(value) {

    if (Array.isArray(value)) {
        return value.join(", ");
    }

    return value || "Not provided";
}


// 12. GENERATE THE DETAILED DOWNLOADABLE REPORT

function downloadAssessmentReport() {

    const completedAssessment = JSON.parse(
        sessionStorage.getItem("completedAssessment") || "null"
    );

    if (!completedAssessment) {
        alert("Assessment report could not be found. Please complete the assessment again.");
        return;
    }

    const {
        profile,
        results,
        findings,
        recommendations,
        assessmentDate
    } = completedAssessment;

    const reportWindow = window.open("", "_blank");

    if (!reportWindow) {
        alert("Please allow pop-ups for this website to open your assessment report.");
        return;
    }

    const score = results.overallScore === null
        ? "Not assessed"
        : results.overallScore + "%";

    const categoryHTML = buildCategoryHTML(results.categoryResults);

    const strengthsHTML = findings.strengths.length
        ? findings.strengths.map(item => `
            <li>
                ${escapeHTML(item.statement)}
                <small>${escapeHTML(item.reference)}</small>
            </li>
        `).join("")
        : "<li>No fully implemented practices were identified in the responses.</li>";

    const improvementsHTML = findings.improvementAreas.length
        ? findings.improvementAreas.map(item => `
            <li>
                ${escapeHTML(item.statement)}
                <small>${escapeHTML(item.reference)}</small>
            </li>
        `).join("")
        : "<li>No improvement areas were identified from the responses.</li>";

    const recommendationsHTML = recommendations.length
        ? recommendations.map(item => `
            <li>
                <strong>${escapeHTML(item.priority)}:</strong>
                ${escapeHTML(item.action)}
                <small>${escapeHTML(item.reference)}</small>
            </li>
        `).join("")
        : "<li>Continue monitoring and periodically reviewing existing governance practices.</li>";

    const legalReviewHTML = findings.legalReviewAreas.length
        ? `
            <h2>Areas Requiring Legal Review</h2>
            <div class="notice">
                <p>
                    The responses identify legal governance questions
                    that may warrant further investigation. They do not
                    establish that a legal breach has occurred.
                </p>
                <ul>
                    ${findings.legalReviewAreas.map(item => `
                        <li>
                            ${escapeHTML(item.statement)}
                            <small>${escapeHTML(item.reference)}</small>
                        </li>
                    `).join("")}
                </ul>
            </div>
        `
        : "";

    reportWindow.document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>African AI Governance &amp; Research Hub - Assessment Report</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet">

<style>

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background: #f4f2ed;
    color: #34465b;
    font-family: 'Nunito Sans', sans-serif;
    line-height: 1.65;
}

.toolbar {
    padding: 18px;
    text-align: center;
    background: #102944;
}

.toolbar button {
    padding: 12px 24px;
    background: #d6ad62;
    color: #102944;
    border: none;
    border-radius: 6px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    cursor: pointer;
}

.sheet {
    width: 210mm;
    min-height: 297mm;
    margin: 25px auto;
    padding: 20mm;
    background: white;
    box-shadow: 0 3px 20px rgba(0,0,0,.08);
}

.letterhead {
    background: #102944;
    color: white;
    padding: 25px;
    border-bottom: 5px solid #d6ad62;
}

.brand {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 18pt;
    letter-spacing: 1px;
}

.tagline {
    color: #f0d69b;
    font-size: 10pt;
}

.meta {
    margin-top: 25px;
    color: #9299a3;
    font-size: 8pt;
    letter-spacing: 1px;
}

h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    color: #102944;
}

h1 {
    font-size: 23pt;
    margin-top: 12px;
}

h2 {
    font-size: 14pt;
    margin-top: 30px;
    border-bottom: 1px solid #e5e1d8;
    padding-bottom: 7px;
}

p {
    font-size: 10pt;
}

.score-panel {
    margin-top: 20px;
    padding: 25px;
    background: #102944;
    color: white;
    text-align: center;
}

.score {
    font-size: 34pt;
    font-weight: 700;
    color: #f0d69b;
}

.maturity {
    font-weight: 700;
    color: #f0d69b;
}

.profile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px 20px;
    background: #faf9f6;
    padding: 15px;
}

.profile div {
    font-size: 9.5pt;
}

.profile strong {
    display: block;
    color: #526174;
    font-size: 8.5pt;
    text-transform: uppercase;
    letter-spacing: .4px;
}

.result-category {
    margin: 15px 0;
}

.result-category-heading {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    font-size: 10pt;
}

.result-progress-track {
    height: 9px;
    background: #eae8e1;
    border-radius: 20px;
    overflow: hidden;
    margin-top: 7px;
}

.result-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #c9a45d, #ebd49e);
}

.result-reference {
    display: block;
    margin-top: 4px;
    color: #8b929b;
    font-size: 8pt;
    line-height: 1.4;
}

ul, ol {
    padding-left: 22px;
}

li {
    margin: 0 0 12px;
}

li small {
    display: block;
    color: #9299a3;
    font-size: 8pt;
    margin-top: 3px;
}

.notice {
    padding: 12px 15px;
    background: #faf1f0;
    border-left: 3px solid #bd8888;
    color: #745f5f;
}

.disclaimer {
    margin-top: 25px;
    padding: 13px 15px;
    background: #f1f0ed;
    border-left: 3px solid #aeb4bd;
    color: #858d98;
    font-size: 8.5pt;
}

.footer {
    margin-top: 35px;
    padding-top: 10px;
    border-top: 1px solid #ddd;
    color: #9299a3;
    font-size: 8pt;
    text-align: center;
}

@page {
    size: A4;
    margin: 0;
}

@media print {

    body {
        background: white;
    }

    .toolbar {
        display: none;
    }

    .sheet {
        width: 210mm;
        min-height: 297mm;
        margin: 0;
        padding: 17mm 18mm;
        box-shadow: none;
    }

    .score-panel,
    .letterhead,
    .result-progress-track,
    .notice,
    .disclaimer {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }

}

@media screen and (max-width: 850px) {

    .sheet {
        width: 100%;
        padding: 25px 20px;
    }

    .profile {
        grid-template-columns: 1fr;
    }

}

</style>
</head>

<body>

<div class="toolbar">
    <button onclick="window.print()">
        Download / Save Report as PDF
    </button>
</div>

<main class="sheet">

<header class="letterhead">
    <div class="brand">AFRICAN AI GOVERNANCE &amp; RESEARCH HUB</div>
    <div class="tagline">Responsible AI governance in African contexts</div>
</header>

<div class="meta">
    ORGANISATIONAL READINESS REPORT |
    Assessment date: ${escapeHTML(assessmentDate)}
</div>

<h1>AI Governance Assessment Report</h1>

<p>
    This report summarises the organisation's self-reported responses
    to the African AI Governance &amp; Research Hub assessment. It is intended to
    support internal reflection and governance-readiness planning.
</p>

<h2>Organisation Profile</h2>

<div class="profile">

    <div>
        <strong>Organisation</strong>
        ${escapeHTML(formatProfileValue(profile.organisationName))}
    </div>

    <div>
        <strong>Organisation Size</strong>
        ${escapeHTML(formatProfileValue(profile.organisationSize))}
    </div>

    <div>
        <strong>Sector</strong>
        ${escapeHTML(formatProfileValue(profile.organisationSector))}
    </div>

    <div>
        <strong>Organisation Type</strong>
        ${escapeHTML(formatProfileValue(profile.organisationType))}
    </div>

    <div>
        <strong>AI Use</strong>
        ${escapeHTML(formatProfileValue(profile.aiUse))}
    </div>

    <div>
        <strong>AI Purposes</strong>
        ${escapeHTML(formatProfileValue(profile.aiPurpose))}
    </div>

    <div>
        <strong>AI Development Approach</strong>
        ${escapeHTML(formatProfileValue(profile.aiDevelopment))}
    </div>

    <div>
        <strong>Jurisdiction</strong>
        ${escapeHTML(formatProfileValue(profile.jurisdiction))}
    </div>

</div>

<h2>Executive Summary</h2>

<div class="score-panel">
    <div>Overall Indicative Governance Maturity</div>
    <div class="score">${escapeHTML(score)}</div>
    <div class="maturity">
        ${escapeHTML(getMaturityLevel(results.overallScore))}
    </div>
</div>

<p>
    The overall score is calculated as the arithmetic average of
    assessed category percentages. Categories with no applicable
    responses are excluded. The maturity label is an indicative
    Hub-defined description, not a certification or regulatory rating.
</p>

<h2>Category Performance</h2>

${categoryHTML}

<h2>Identified Strengths</h2>

<ul>${strengthsHTML}</ul>

<h2>Areas for Improvement</h2>

<ul>${improvementsHTML}</ul>

<h2>Priority Recommendations</h2>

<ol>${recommendationsHTML}</ol>

${legalReviewHTML}

<h2>Methodology and Limitations</h2>

<p>
    Responses are scored on an indicative scale:
    Yes – fully implemented (3);
    Partially implemented (2);
    Planned (1);
    No – not implemented (0);
    Not sure (0).
    Not applicable responses are excluded from the relevant category
    calculation. Category percentages are calculated using applicable
    responses. The overall score is the equally weighted average of
    categories that have been assessed.
</p>

<p>
    The assessment is based on respondent-provided information.
    It does not independently verify policies, records, technical
    controls, contracts or operational practices. A positive response
    should therefore be supported by internal evidence and periodic review.
</p>

<div class="disclaimer">

    <strong>Important Legal Disclaimer</strong><br>

    This report is provided for general informational, educational
    and governance-readiness purposes only. It does not constitute
    legal advice, a legal opinion, regulatory approval or certification
    of compliance with any applicable law. Legal obligations depend
    on the applicable jurisdiction, the organisation's activities
    and the specific facts of each situation. Organisations should
    obtain independent advice from a qualified legal practitioner
    before making decisions concerning legal obligations or
    regulatory compliance.

</div>

<footer class="footer">
    African AI Governance &amp; Research Hub · Responsible AI governance in African contexts
</footer>

</main>

</body>
</html>
`);

    reportWindow.document.close();
}


// 13. SUBMIT AND DISPLAY COMPLETED ASSESSMENT

function submitAssessment() {

    let results;

    try {
        results = calculateAssessmentResults();
    } catch (error) {
        alert(error.message);
        return;
    }

    const findings = generateAssessmentFindings();

    const recommendations = generateRecommendations(findings);

    const score = results.overallScore;

    const maturity = getMaturityLevel(score);

    const completedAssessment = {
        profile: results.profile,
        answers: assessmentAnswers,
        questions: currentQuestions,
        results,
        findings,
        recommendations,
        assessmentDate: new Date().toLocaleDateString()
    };

    sessionStorage.setItem(
        "completedAssessment",
        JSON.stringify(completedAssessment)
    );

    const categoryHTML = buildCategoryHTML(
        results.categoryResults
    );

    const strengthsHTML = buildFindingList(
        findings.strengths.slice(0, 5),
        "No fully implemented practices were identified in the responses."
    );

    const improvementHTML = buildFindingList(
        findings.improvementAreas.slice(0, 5),
        "No improvement areas were identified from the responses."
    );

    const recommendationsHTML = recommendations.length
        ? recommendations.slice(0, 3).map(item => `
            <li>
                <strong>${item.priority}:</strong>
                ${item.action}
                <small class="result-reference">
                    ${item.reference}
                </small>
            </li>
        `).join("")
        : "<li>Continue monitoring and periodically reviewing existing governance practices.</li>";

    const legalReviewHTML = findings.legalReviewAreas.length
        ? `
            <div class="legal-review-notice">

                <h4>Areas Requiring Legal Review</h4>

                <p>
                    Your responses identify legal governance questions
                    that may warrant further investigation. They do not
                    establish that a legal breach has occurred.
                </p>

                <ul>
                    ${findings.legalReviewAreas.map(item => `
                        <li>
                            ${item.statement}
                            <small class="result-reference risk-reference">
                                ${item.reference}
                            </small>
                        </li>
                    `).join("")}
                </ul>

            </div>
        `
        : "";
        // BUILD THE EXECUTIVE SUMMARY

const summaryStrength = findings.strengths.length
    ? findings.strengths[0].statement
    : "The assessment did not identify any fully implemented governance practices.";

const summaryGap = findings.improvementAreas.length
    ? findings.improvementAreas[0].statement
    : "Continue reviewing existing governance practices to identify opportunities for improvement.";

const summaryAction = recommendations.length
    ? recommendations[0].action
    : "Maintain existing governance controls and conduct periodic reviews.";

let summaryInterpretation = "";

if (score === null) {
    summaryInterpretation = "There is insufficient applicable response data to determine an overall governance maturity level.";

} else if (score < 40) {
    summaryInterpretation = "The responses indicate that foundational AI governance measures require development. The organisation should prioritise establishing basic policies, responsibilities and risk controls.";

} else if (score < 60) {
    summaryInterpretation = "The responses indicate emerging AI governance practices. Some relevant measures are being considered or implemented, but further development is needed to establish a more consistent governance framework.";

} else if (score < 80) {
    summaryInterpretation = "The responses indicate established AI governance practices across several assessed areas. Further attention to identified gaps could strengthen consistency and organisational oversight.";

} else {
    summaryInterpretation = "The responses indicate advanced self-reported AI governance practices across the assessed areas. Continued monitoring, documentation and periodic review remain important.";
}

const executiveSummaryHTML = `

    <div class="executive-summary">

        <div class="executive-summary-heading">
            <span>EXECUTIVE OVERVIEW</span>
            <h3>Assessment at a Glance</h3>
        </div>

        <p class="summary-interpretation">
            ${summaryInterpretation}
        </p>

        <div class="summary-insights">

            <div class="summary-insight">
                <span class="summary-label">KEY STRENGTH</span>
                <p>${summaryStrength}</p>
            </div>

            <div class="summary-insight">
                <span class="summary-label">AREA NEEDING ATTENTION</span>
                <p>${summaryGap}</p>
            </div>

            <div class="summary-insight">
                <span class="summary-label">RECOMMENDED NEXT STEP</span>
                <p>${summaryAction}</p>
            </div>

        </div>

    </div>

`;

    resultsContainer.innerHTML = `

        <div class="assessment-intro">

            <p class="section-label">ASSESSMENT RESULTS</p>

            <h3>AI Governance Assessment Report</h3>

            <p>
    Your organisation's assessment has been completed.
    The results below are based on the responses provided
    and have not been independently verified.
</p>

${executiveSummaryHTML}

<div class="overall-score">

                <p>Overall Indicative Governance Maturity</p>

                <h2>
                    ${score === null ? "N/A" : score + "%"}
                </h2>

                <h4>${maturity}</h4>

            </div>

            <h3>Category Performance</h3>

            <div class="category-results">
                ${categoryHTML}
            </div>

            <h3>Identified Strengths</h3>

            <ul>${strengthsHTML}</ul>

            <h3>Areas for Improvement</h3>

            <ul>${improvementHTML}</ul>

            <h3>Priority Recommendations</h3>

            <ol>${recommendationsHTML}</ol>

            ${legalReviewHTML}

            <button
                type="button"
                class="download-report-button"
                onclick="downloadAssessmentReport()"
            >
                <i class="fa-solid fa-file-pdf"></i>
                Download Detailed Assessment Report
            </button>

            <p class="result-reference">
                Opens a print-ready report. Select "Save as PDF"
                in the print options to save a copy.
            </p>

            <div class="legal-disclaimer">

                <p>
                    <i class="fa-solid fa-circle-info"></i>
                    <strong>Important Legal Disclaimer</strong>
                </p>

                <p>
                    This assessment is provided for general informational,
                    educational and governance-readiness purposes only.
                    It does not constitute legal advice, a legal opinion,
                    regulatory approval or certification of compliance
                    with any applicable law. The results are based on
                    information voluntarily provided by the respondent
                    and may not reflect the organisation's complete
                    circumstances. Organisations should obtain independent
                    legal advice before making decisions concerning their
                    legal obligations or regulatory compliance.
                </p>

            </div>

        </div>

    `;

    questionContainer.hidden = true;

    resultsContainer.hidden = false;

    resultsContainer.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// 17. SUBMIT ORGANISATION PROFILE AND START ASSESSMENT

if (assessmentForm) {
    assessmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const aiUse = document.querySelector(
        'input[name="aiUse"]:checked'
    );

    const selectedPurposes = Array.from(
        document.querySelectorAll(
            'input[name="aiPurpose"]:checked'
        )
    ).map(item => item.value);

    const organisationProfile = {

        organisationName:
            document.getElementById("organisation-name").value,

        organisationSize:
            document.getElementById("organisation-size").value,

        organisationSector:
            sectorSelect.value === "Other"
                ? otherSector.value
                : sectorSelect.value,

        organisationType:
            document.getElementById("organisation-type").value,

        aiUse: aiUse ? aiUse.value : "",

        aiPurpose: selectedPurposes,

        otherAiPurpose: otherAiPurpose.value,

        aiDevelopment:
            document.getElementById("ai-development").value,

        jurisdiction:
            document.getElementById("jurisdiction").value

    };

    sessionStorage.setItem(
        "organisationProfile",
        JSON.stringify(organisationProfile)
    );

    currentQuestions = getQuestions(
        organisationProfile.jurisdiction
    );

    currentQuestionIndex = 0;
    assessmentAnswers = {};

    assessmentForm.hidden = true;

           displayCurrentQuestion();

    });
}

// =========================================
// RESEARCH PUBLICATION FILTERS AND SEARCH
// =========================================

const researchFilters = document.querySelectorAll(".research-filter");
const researchPublications = document.querySelectorAll(".publication-card");

const researchSearchInput = document.getElementById("research-search-input");
const clearResearchSearch = document.getElementById("clear-research-search");
const researchSearchCount = document.getElementById("research-search-count");

let activeResearchFilter = "all";

function updateResearchResults() {

    const searchTerm = researchSearchInput
    ? researchSearchInput.value.trim().toLowerCase()
    : "";

    let visibleCount = 0;

    researchPublications.forEach(publication => {

        const publicationCategory = publication.dataset.category;

        const publicationText = publication.textContent.toLowerCase();

        const matchesCategory =
            activeResearchFilter === "all" ||
            publicationCategory === activeResearchFilter;

        const matchesSearch =
            publicationText.includes(searchTerm);

        if (matchesCategory && matchesSearch) {

            publication.style.display = "flex";
            visibleCount++;

        } else {

            publication.style.display = "none";

        }

    });

    if (researchSearchCount) {

        researchSearchCount.textContent =
            visibleCount === 0
                ? "No publications found. Try another search."
                : `Showing ${visibleCount} of ${researchPublications.length} research publications`;

    }

}

researchFilters.forEach(button => {

    button.addEventListener("click", () => {

        activeResearchFilter = button.dataset.filter;

        researchFilters.forEach(filter => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        updateResearchResults();

    });

});

if (researchSearchInput) {

    researchSearchInput.addEventListener("input", updateResearchResults);

}

if (clearResearchSearch) {

    clearResearchSearch.addEventListener("click", () => {

        researchSearchInput.value = "";
        updateResearchResults();
        researchSearchInput.focus();

    });

}

updateResearchResults();


// =========================================
// GOVERNANCE RESOURCES FILTERS
// =========================================

const governanceFilters = document.querySelectorAll(".governance-filter");
const governanceCards = document.querySelectorAll(".governance-card");

governanceFilters.forEach(button => {

    button.addEventListener("click", () => {

        const selectedFilter = button.dataset.filter;

        governanceFilters.forEach(filter => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        governanceCards.forEach(card => {

            const matches =
                selectedFilter === "all" ||
                card.dataset.category === selectedFilter;

            card.style.display = matches ? "flex" : "none";

        });

    });

});
