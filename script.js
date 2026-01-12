// Conflict Styles Assessment (30 forced-choice items)

const STYLES = {
    COMPETER: "Competer",
    PROBLEM_SOLVER: "Problem Solver",
    COMPROMISER: "Compromiser",
    AVOIDER: "Avoider",
    ACCOMMODATOR: "Accommodator",
};

const QUESTIONS = [
    { n: 1,
        A: "Occasionally I hold back and let others figure out how to resolve the conflict.",
        A_style: "AVOIDER",
        B: "I aim to focus on similarities rather than differences in views.",
        B_style: "ACCOMMODATOR"
    },
    { n: 2,
        A: "I like to resolve problems through negotiating.",
        A_style: "COMPROMISER",
        B: "I try to make sure everyone’s concerns are addressed.",
        B_style: "PROBLEM_SOLVER"
    },
    { n: 3,
        A: "I know what I want and I go for it.",
        A_style: "COMPETER",
        B: "I sometimes aim to make the other person feel better in order to end a conflict.",
        B_style: "ACCOMMODATOR"
    },
    { n: 4,
        A: "I like to resolve problems through negotiating.",
        A_style: "COMPROMISER",
        B: "I’m willing to give up my own views if it will help the other person feel better.",
        B_style: "ACCOMMODATOR"
    },
    { n: 5,
        A: "I always try to work together to solve problems.",
        A_style: "PROBLEM_SOLVER",
        B: "I aim to avert uncomfortable situations when possible.",
        B_style: "AVOIDER"
    },
    { n: 6,
        A: "I do what I can to avoid tension.",
        A_style: "AVOIDER",
        B: "I aim to convince others that I am right.",
        B_style: "COMPETER"
    },
    { n: 7,
        A: "I stall in order to take some time to think about problems before approaching them.",
        A_style: "AVOIDER",
        B: "I am willing to compromise when others do.",
        B_style: "COMPROMISER"
    },
    { n: 8,
        A: "I know what I want and I go for it.",
        A_style: "COMPETER",
        B: "I aim to discuss problems openly so that they can be worked out right away.",
        B_style: "PROBLEM_SOLVER"
    },
    { n: 9,
        A: "Sometimes conflicts are better left not discussed.",
        A_style: "AVOIDER",
        B: "I try to get what I want.",
        B_style: "COMPETER"
    },
    { n: 10,
        A: "I know what I want and I go for it.",
        A_style: "COMPETER",
        B: "I like to resolve problems through negotiating.",
        B_style: "COMPROMISER"
    },
    { n: 11,
        A: "I aim to discuss problems openly so that they can be worked out right away.",
        A_style: "PROBLEM_SOLVER",
        B: "I sometimes aim to make the other person feel better in order to end a conflict.",
        B_style: "ACCOMMODATOR"
    },
    { n: 12,
        A: "At times I keep my views to myself in order to avoid conflict.",
        A_style: "AVOIDER",
        B: "I prefer a “give and take” solution to problems where both sides make adjustments.",
        B_style: "COMPROMISER"
    },
    { n: 13,
        A: "If the other person can agree to disagree, I can do the same.",
        A_style: "COMPROMISER",
        B: "I make sure others know my views.",
        B_style: "COMPETER"
    },
    { n: 14,
        A: "I share my thoughts and ask others to share theirs.",
        A_style: "PROBLEM_SOLVER",
        B: "I aim to convince others that I am right.",
        B_style: "COMPETER"
    },
    { n: 15,
        A: "I sometimes aim to make the other person feel better in order to end a conflict.",
        A_style: "ACCOMMODATOR",
        B: "I aim to avert uncomfortable situations when possible.",
        B_style: "AVOIDER"
    },
    { n: 16,
        A: "I try make sure the other person does not get upset.",
        A_style: "ACCOMMODATOR",
        B: "I try to make sure others understand my reasoning and why I am right.",
        B_style: "COMPETER"
    },
    { n: 17,
        A: "I know what I want and I go for it.",
        A_style: "COMPETER",
        B: "I aim to avert uncomfortable situations when possible.",
        B_style: "AVOIDER"
    },
    { n: 18,
        A: "I allow others to voice their opinions without objecting if it makes them feel better.",
        A_style: "ACCOMMODATOR",
        B: "I prefer a “give and take” solution to problems where both sides make adjustments.",
        B_style: "COMPROMISER"
    },
    { n: 19,
        A: "I try to work out problems with others right away.",
        A_style: "PROBLEM_SOLVER",
        B: "I sometimes stall in order to take some time to think about problems before approaching them.",
        B_style: "AVOIDER"
    },
    { n: 20,
        A: "I try to work out problems with others right away.",
        A_style: "PROBLEM_SOLVER",
        B: "I prefer to figure out what the fairest outcome would be from everyone’s perspective.",
        B_style: "COMPROMISER"
    },
    { n: 21,
        A: "I try to pay attention to the other person’s opinions when we are working out problems.",
        A_style: "ACCOMMODATOR",
        B: "I prefer to talk about problems directly.",
        B_style: "PROBLEM_SOLVER"
    },
    { n: 22,
        A: "I take a problem-solving approach where all sides figure out what we can agree on and what we are willing to give up.",
        A_style: "PROBLEM_SOLVER",
        B: "I tell others what I want.",
        B_style: "COMPETER"
    },
    { n: 23,
        A: "I tend to worry about making everyone happy.",
        A_style: "ACCOMMODATOR",
        B: "Occasionally I hold back and let others figure out how to resolve the conflict.",
        B_style: "AVOIDER"
    },
    { n: 24,
        A: "I try to please others if it seems important to them.",
        A_style: "ACCOMMODATOR",
        B: "I aim to work together to settle our differences through a bargaining approach.",
        B_style: "COMPROMISER"
    },
    { n: 25,
        A: "I try to convince people to agree with me.",
        A_style: "COMPETER",
        B: "I try to pay attention to the other person’s opinions when we are working out problems.",
        B_style: "ACCOMMODATOR"
    },
    { n: 26,
        A: "I try to find a way for different sides to meet half way in a conflict.",
        A_style: "COMPROMISER",
        B: "I tend to worry about making everyone happy.",
        B_style: "ACCOMMODATOR"
    },
    { n: 27,
        A: "At times I keep my views to myself in order to avoid conflict.",
        A_style: "AVOIDER",
        B: "I allow others to voice their opinions without objecting if it makes them feel better.",
        B_style: "ACCOMMODATOR"
    },
    { n: 28,
        A: "I know what I want and I go for it.",
        A_style: "COMPETER",
        B: "I always try to work together to solve problems.",
        B_style: "PROBLEM_SOLVER"
    },
    { n: 29,
        A: "I try to find a way for different sides to meet half way in a conflict.",
        A_style: "COMPROMISER",
        B: "Sometimes conflicts are better left not discussed.",
        B_style: "AVOIDER"
    },
    { n: 30,
        A: "I try make sure the other person does not get upset.",
        A_style: "ACCOMMODATOR",
        B: "I tell others when something is wrong so that we can work together to make it right.",
        B_style: "PROBLEM_SOLVER"
    },
];

const STYLE_INTERPRETATIONS = {
    COMPETER: {
        strengths: `
        Competers are known for being persuasive and direct. They know the result
        they want in a conflict situation, and they go for it. Their strengths are
        that they are often passionate about their views and dedicated to pursuing
        their convictions. Competers are good at making quick decisions and tend
        not to waste time, which is especially helpful in times of crisis.`,
        weaknesses: `
        Sometimes Competers wind up with unequal relationships with others.
        Feelings of others can be hurt or overlooked with this decision-making style.`
    },

    PROBLEM_SOLVER: {
        strengths: `
        Problem Solvers want to discuss all the details of a problem and work through
        it together so that everyone gets what they want and is satisfied in the end.
        They tend to welcome differences, build high levels of trust, and promote
        mutual understanding. There is strong potential for creative problem solving.`,
        weaknesses: `
        When time is a factor, it can be difficult to invest the energy needed for
        this approach. There is also the potential for burnout from over-processing.`
    },

    COMPROMISER: {
        strengths: `
        Compromisers approach conflict with the goal of compromise. They think about
        what they are willing to give up and what they want to keep, promoting
        cooperation through give-and-take. This approach can be fairly quick when
        both parties are engaged.`,
        weaknesses: `
        Sometimes neither party fully gets what they want. It can also become a
        “band-aid” solution that does not address the root cause of the conflict.`
    },

    AVOIDER: {
        strengths: `
        Avoiders tend to step away from conflict and keep opinions to themselves to
        prevent escalation. They are often admired for having a calming, quiet
        presence, especially in times of crisis.`,
        weaknesses: `
        Avoiders may bottle up feelings and struggle to meet their own needs, which
        can lead to frustration and emotional buildup over time.`
    },

    ACCOMMODATOR: {
        strengths: `
        Accommodators have a harmonizing approach to conflict. They focus on
        supporting others and are skilled at calming tense situations. They often
        gain appreciation from others involved in conflict.`,
        weaknesses: `
        Accommodators may build resentment by denying their own needs. It can also
        be difficult for those who want to get to the root of a problem to work with
        Accommodators who prioritize harmony over resolution.`
    }
};

// ---------------- Theme toggle ----------------
const themeBtn = document.getElementById("theme-toggle");
const themeText = document.getElementById("theme-toggle-text");

function setSwitchUI(theme) {
    const isLight = theme === "light";
    if (themeBtn) themeBtn.setAttribute("aria-checked", String(isLight));
    if (themeText) themeText.textContent = isLight ? "Light" : "Dark";
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    setSwitchUI(theme);
}

function initTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
        applyTheme(saved);
        return;
    }
    
    applyTheme("light");
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        const current = document.documentElement.dataset.theme || "dark";
        applyTheme(current === "dark" ? "light" : "dark");
    });
}

initTheme();

// ---------- App state ----------
const answers = new Array(QUESTIONS.length).fill(null); // "A" or "B"
let idx = 0;

// ---------- DOM ----------
const elStart = document.getElementById("screen-start");
const elQuiz = document.getElementById("screen-quiz");
const elResults = document.getElementById("screen-results");

const btnStart = document.getElementById("btn-start");
const btnBack = document.getElementById("btn-back");
const btnNext = document.getElementById("btn-next");
const btnReset = document.getElementById("btn-reset");
const btnRestart = document.getElementById("btn-restart");
const btnCopy = document.getElementById("btn-copy");

const qnum = document.getElementById("qnum");
const qtotal = document.getElementById("qtotal");
const qtitle = document.getElementById("qtitle");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const qform = document.getElementById("qform");
const validation = document.getElementById("validation");

const progressFill = document.getElementById("progress-fill");
const progressPct = document.getElementById("progress-pct");

const resultsGrid = document.getElementById("results-grid");
const copyArea = document.getElementById("copy-area");

qtotal.textContent = String(QUESTIONS.length);

// ---------- Helpers ----------
function show(screen) {
    elStart.classList.add("hidden");
    elQuiz.classList.add("hidden");
    elResults.classList.add("hidden");
    screen.classList.remove("hidden");
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function updateProgress() {
    const answeredCount = answers.filter(Boolean).length;
    const pct = Math.round((answeredCount / QUESTIONS.length) * 100);
    progressFill.style.width = `${pct}%`;
    progressPct.textContent = String(pct);
}

function renderQuestion() {
    const q = QUESTIONS[idx];
    qnum.textContent = String(idx + 1);

    qtitle.textContent = `Choose the statement that fits you best:`;
    choiceA.textContent = q.A;
    choiceB.textContent = q.B;

    const saved = answers[idx];
    const radios = qform.elements["choice"];
    for (const r of radios) r.checked = (r.value === saved);

    validation.classList.add("hidden");
    updateProgress();

    btnNext.textContent = (idx === QUESTIONS.length - 1) ? "See results" : "Next";
    btnBack.disabled = (idx === 0);
}

function getSelected() {
    const radios = qform.elements["choice"];
    for (const r of radios) if (r.checked) return r.value;
    return null;
}

function tallyScores() {
    // Counts selections per style
    const counts = { COMPETER:0, PROBLEM_SOLVER:0, COMPROMISER:0, AVOIDER:0, ACCOMMODATOR:0 };
    // Counts how many times each style appears as an option (denominator for %)
    const opportunities = { COMPETER:0, PROBLEM_SOLVER:0, COMPROMISER:0, AVOIDER:0, ACCOMMODATOR:0 };

    for (const q of QUESTIONS) {
        opportunities[q.A_style] += 1;
        opportunities[q.B_style] += 1;
    }

    for (let i=0; i<QUESTIONS.length; i++) {
        const q = QUESTIONS[i];
        const a = answers[i];
        if (!a) continue;
        const style = (a === "A") ? q.A_style : q.B_style;
        counts[style] += 1;
    }

    // Converts to percentages
    const perc = {};
    for (const key of Object.keys(counts)) {
        const denom = opportunities[key] || 1;
        perc[key] = Math.round((counts[key] / denom) * 100);
    }

    return { counts, opportunities, perc };
}

function bandFromCount(c) {
    if (c >= 9) return "Frequent";
    if (c >= 5) return "Sometimes";
    return "Less often";
}

function renderResults() {
  const { counts, opportunities, perc } = tallyScores();

  // Sorts by percent descending order
  const rows = Object.keys(STYLES)
    .map(k => ({ key:k, name: STYLES[k], count: counts[k], opp: opportunities[k], pct: perc[k] }))
    .sort((a,b) => b.pct - a.pct);

  resultsGrid.innerHTML = "";

  for (const r of rows) {
    const div = document.createElement("div");
    div.className = "result-row";
    div.innerHTML = `
      <div class="result-top">
        <div>
          <div class="style-name">${r.name}</div>
          <div class="style-meta">${bandFromCount(r.count)} • ${r.count}/${r.opp} selections</div>
        </div>
        <div class="style-name">${r.pct}%</div>
      </div>
      <div class="bar" aria-label="${r.name} ${r.pct}%">
        <div style="width:${r.pct}%"></div>
      </div>
      <details class="interpretation-box">
        <summary>Interpretation</summary>

        <div class="interpretation-content">
            <h4>Strengths</h4>
            <p>${STYLE_INTERPRETATIONS[r.key].strengths}</p>

            <h4>Potential Challenges</h4>
            <p>${STYLE_INTERPRETATIONS[r.key].weaknesses}</p>
  </div>
</details>

    `;
    resultsGrid.appendChild(div);
  }
}

function goNext() {
    const selected = getSelected();
    if (!selected) {
        validation.classList.remove("hidden");
        return;
    }
    answers[idx] = selected;

    if (idx === QUESTIONS.length - 1) {
        show(elResults);
        renderResults();
    } else {
        idx += 1;
        renderQuestion();
    }
}

function goBack() {
    if (idx === 0) return;
    idx -= 1;
    renderQuestion();
}

function resetAll() {
    for (let i=0; i<answers.length; i++) answers[i] = null;
    idx = 0;
    show(elStart);
}

// ---------- Events ----------
btnStart.addEventListener("click", () => {
    shuffleArray(QUESTIONS);
    show(elQuiz);
    idx = 0;
    renderQuestion();
});

btnNext.addEventListener("click", goNext);
btnBack.addEventListener("click", goBack);

btnReset.addEventListener("click", () => {
    if (confirm("Reset all answers?")) resetAll();
});

btnRestart.addEventListener("click", () => resetAll());

qform.addEventListener("change", () => {
    const selected = getSelected();
    if (selected) answers[idx] = selected;
    validation.classList.add("hidden");
    updateProgress();
});

btnCopy.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(copyArea.value);
        btnCopy.textContent = "Copied!";
        setTimeout(() => (btnCopy.textContent = "Copy results"), 1200);
    } catch {
        copyArea.classList.remove("hidden");
        copyArea.focus();
        copyArea.select();
        copyArea.classList.add("hidden");
    }
});