// ======= Your lists (ported) =======
const LEVELS = {
  VWO: {
    list1: ["Avondprogramma","Vwo", "Afterparty","Examen","CITO","CE","SE","SSL","Leiden","Scheikunde","Haverkoek","BiNaS","Atoom","Ion","Lading","Elektron","Periodiek Systeem","I love Stappenplan","STPL","Stroomgeleiding","Reactievergelijking","Oplossen","VanderWaalsbinding","H-brug","Zout","Metaal","Moleculaire stof", 
"Dipool","Ionrooster","Polair","Apolair","Atoombinding","Ladingscentra","Kookpunt","Smeltpunt","Microniveau","Macroniveau","Structuurformule","Gas (g)","Vloeibaar (l)","Vast (s)","Opgelost (aq)","LASD","Coëfficiënten","Hydraat","Onbekend Deeltje","Omzetten",
  "Strepen (LASD)","Delen (LASD)","ALLES","Antwoord (ALLES)","Logisch (ALLES)","Leesbaar (ALLES)","Eenheid (ALLES)","Significantie (ALLES)","mol","molmassa","kruistabel","Molair Volume","Procent","Massapercentage","Volumepercentage","Liter","Gram","ton","deel/geheel","molverhouding","rendement","Einddoel","dichtheid"
],
    list2: [],
    list3: [],
  },
  HAVO: {
    list1: ["Avondprogramma","Afterparty","Examen","CITO","CE","SE","SSL","Leiden","Scheikunde","Haverkoek","BiNaS","Atoom", "Molecuul", "HAVO", "Metaalrooster", "Ionrooser", "Vrije Elektronen", "Metaal", "Niet-Metaal", "Zout", "Moleculaire Stof", "Atoombinding", "H-bruggen", "VanderWaalsbinding", "Smeltpunt", "Kookpunt",
      "Stroomgeleiding", "Geladen Deeltjes", "Ionbinding", "Metaalbinding", "Elektronen", "Gas (g)", "Vloeibaar (l)", "Opgelost (aq)", "Vast (s)", "Ionen", "Oplosbaarheid", "H2O", "Hydrofoob", "Hydrofiel", "Apolair", "Polair", "Lading", "Atoombouw", "Protonen", "Neutronen", "K-schil", "L-schil", "massagetal", "Neutraal", "Zouthydraat",
      "Oplossing", "Oplosvergelijking", "LASD", "Lading (LASD)", "Atomen (LASD)", "Strepen (LASD)", "Delen (LASD)", "Reactievergelijking", "Verbrandingsreactie", "O2", "CO2", "Onvolledige verbranding", "Volledige Verbranding", "Kruistabel", "Molaire Massa", "dichtheid", "percentage", "deel/geheel", "Einddoel", "Losse Eenheid", "Mol", "Gram",
      "Liter", "Kilo", "ALLES", "Antwoord (ALLES)", "Logisch (ALLES)", "Leesbaar (ALLES)", "Eenheid (ALLES)", "Significantie (ALLES)", "Molverhouding", "Coëfficiënten"],
  },
};

LEVELS.VWO.list2 = LEVELS.VWO.list1.concat(["Evenwicht","Evenwichtsvoorwaarde (K)","Evenwichtsreactie","Reactiewarmte","Vormingswarmte","Delta E","E begin","E eind","Overmaat","Ondermaat","Exotherm","Endotherm","Joule","Joule per Mol","Katalysator","geactiveerde toestand","Druk","Temperatuur","Concentratie","Botsende Deeltjesmodel","Reactiesnelheid",
  "Energie","Aflopend","Naamgeving","HONC","COOH-groep/zuurgroep","OH-groep (alcoholgroep)","Ester","Verestering","H2O","Condensatiereactie","Additiereactie","Substitutiereactie","Dubbele binding","Methylgroep (CH3-groep)","Additiepolymerisatie","Condensatiepolymerisatie","Monomeer","Polymeer","Knakken","Copolymeer",
  "Crosslinks","Thermoharder","Thermoplast","Kristallijn","Amorf","Zijketens","Weekmaker","PORN","Electrochemische Cel","Elektronen","Oxidator","Reductor","Halfreactie","Totaalreactie","Elektronenoverdracht","RedOx","Elektrode","Opladen","Stroomlevering","DNA","m-RNA","Coderende streng","Matrijsstreng","Hydrolyse","Zeep","Codon","Basen","Aminozuur","Peptideketen"
]);

LEVELS.VWO.list3 = LEVELS.VWO.list2.concat(["Lewisstructuur","Reactiemechanisme","Formele Lading","Grensstructuren","Cis-Trans isomerie","bindingshoeken","Partiële lading","niet-bindende elektronenparen","elektronenparen","Octetregel","TOG","Asymetrisch C-atoom","spiegelbeeldisomerie","C*","Stereo-isomeer","Enzym","stereo-specefiek","Zuur","Base","Kb","Kz","Sterk Zuur","Zwak Zuur","Sterke Base","Zwakke Base",
  "H3O+","OH-","H+","pH","pOH","-log[H3O+]","-log[OH-]","Verhouding","Concentratie","Molair","E-factor","Atoomeconomie","Extractie","Bezinken","Destilleren","Blokschema","Hernieuwbaar","Milieu"
]);

LEVELS.HAVO.list2 = LEVELS.HAVO.list1.concat(["Energie", "Joule", "Overgangstoestand", "Exotherm", "Endotherm", "Delta E", "E eind", "E begin", "Activeringsenergie", "Katalysator", "Botsende-deeltjes-model", "Temperatuur", "Concentratie", "Verdelingsgraad", "Contactoppervlak", "Reactiesnelheid", "Koolstofchemie", "Naamgeving", "Reacties", "Polymeren", "Biochemie", "Stam",
  "Dubbele binding", "HONC", "Zuurgroep / COOH-groep", "Zijgroepen", "Structuurformule", "Molecuulformule", "Alcoholgroep / OH-groep", "Aminegroep / NH2-groep", "Methylgroep / CH3-groep", "Isomeer", "Substitutiereactie", "Substitutie", "Additiereactie", "Additie", "Condensatiereactie", "Condensatie", "Ester", "Amide", "Hydrolyse", "Hydrolysereactie", "Polymeren", "Additiepolymeren",
  "Condensatiepolymeer", "Monomeer", "Knakken", "Peptidebinding", "Amidebinding", "Kunststoffen", "Thermoharder", "Thermoplast", "Netwerkpolymeer", "Kristallijn", "Amorf", "Weekmaker", "Vervormbaarheid", "Eiwit", "Koolhydraten", "Vetten", "Glycerol", "Koolwaterstofrest", "Oxidator", "Reductor", "Redox", "Redoxreactie", "Elektronenoverdracht", "Halfreactie", "Totaalreactie", 
  "SOHE", "Speciale Atomen (SOHE)", "O kloppend (SOHE)", "H Kloppend (SOHE)", "lading kloppend (SOHE)", "PORN", "Opladen"
]);

LEVELS.HAVO.list3 = LEVELS.HAVO.list2.concat(["Zuur", "Basen", "pH", "H+", "H3O+", "OH-", "pOH", "Concentratie", "mol / Liter", "Blokschema", "Recyclen", "Overmaat", "Evenwicht", "Scheidingsreactor", "Filtratie", "Centrifugeren", "Bezinken", "Indampen", "Destillatie", "Extractie", "Absorptie", "Rendement", "Atoomeconomie", "Theoretische Opbrengst", "Duurzaam", "Cradle-to-Cradle", "Zure Regen"
]);

// ======= Core logic =======
function getPool(level, courseDays, day) {
  courseDays = Number(courseDays);
  day = Number(day);

  const lists = LEVELS[level];
  if (!lists) throw new Error("Invalid level: " + level);

  if (courseDays === 2) {
    if (day === 1) return lists.list1;
    if (day === 2) return lists.list2;
    throw new Error("Invalid day for 2-day course");
  }

  if (courseDays === 3) {
    if (day === 1) return lists.list1;
    if (day === 2) return lists.list2;
    if (day === 3) return lists.list3;
    throw new Error("Invalid day for 3-day course");
  }

  throw new Error("Invalid course length");
}

function sampleUnique(arr, k) {
  if (k > arr.length) throw new Error("Cannot sample more items than list length");
  const copy = arr.slice();
  for (let i = 0; i < k; i++) {
    const j = i + Math.floor(Math.random() * (copy.length - i));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, k);
}

// ======= State =======
const STORAGE_KEY = "thirtysecs_state_v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ======= Timer =======
const TIMER_DURATION = 30;
let timerInterval = null;
let timerSeconds = TIMER_DURATION;

const timerEl = document.getElementById("timer");
const timerBtn = document.getElementById("timer-start");

function updateTimerDisplay() {
  timerEl.textContent = timerSeconds + "s";
  if (timerSeconds <= 0) {
    timerEl.classList.add("timer-expired");
  } else {
    timerEl.classList.remove("timer-expired");
  }
}

function resetTimerDisplay() {
  stopTimer();
  timerSeconds = TIMER_DURATION;
  updateTimerDisplay();
  timerBtn.textContent = "▶ Start";
}

function stopTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function startTimer() {
  stopTimer();
  timerSeconds = TIMER_DURATION;
  timerEl.classList.remove("timer-expired");
  updateTimerDisplay();
  timerBtn.textContent = "↺ Restart";

  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();

    if (timerSeconds <= 0) {
      stopTimer();
      alert("⏰ Time's up!");
    }
  }, 1000);
}

timerBtn.addEventListener("click", startTimer);

// ======= UI =======
const levelSelect = document.getElementById("level");
const courseEl = document.getElementById("course");
const dayEl = document.getElementById("day");
const renewEl = document.getElementById("renew");
const itemsEl = document.getElementById("items");

function setDayOptions(courseDays) {
  const n = Number(courseDays);
  const days = n === 2 ? [1, 2] : [1, 2, 3];
  dayEl.innerHTML = "";
  for (const d of days) {
    const opt = document.createElement("option");
    opt.value = String(d);
    opt.textContent = `Dag ${d}`;
    dayEl.appendChild(opt);
  }
}

function render(state) {
  itemsEl.innerHTML = "";
  for (const text of state.items) {
    const li = document.createElement("li");
    li.className = "item" + (state.crossed[text] ? " crossed" : "");
    li.textContent = text;

    li.addEventListener("click", () => {
      state.crossed[text] = !state.crossed[text];
      saveState(state);
      render(state);
    });

    itemsEl.appendChild(li);
  }
}

function renew(state) {
  const pool = getPool(state.level, state.courseDays, state.day);
  state.items = sampleUnique(pool, 5);
  state.crossed = {};
  saveState(state);
  render(state);
  resetTimerDisplay(); // reset to 30s but don't auto-start
}

// ======= Boot =======
let state = loadState();
if (!state) {
  state = { level: "VWO", courseDays: 2, day: 1, items: [], crossed: {} };
}

levelSelect.value = state.level;
courseEl.value = String(state.courseDays);
setDayOptions(state.courseDays);
dayEl.value = String(state.day);

if (!state.items || state.items.length !== 5) {
  renew(state);
} else {
  render(state);
  resetTimerDisplay();
}

levelSelect.addEventListener("change", () => {
  state.level = levelSelect.value;
  saveState(state);
  renew(state);
});

courseEl.addEventListener("change", () => {
  state.courseDays = Number(courseEl.value);
  setDayOptions(state.courseDays);
  state.day = Number(dayEl.value);
  saveState(state);
  renew(state);
});

dayEl.addEventListener("change", () => {
  state.day = Number(dayEl.value);
  saveState(state);
  renew(state);
});

renewEl.addEventListener("click", () => renew(state));
