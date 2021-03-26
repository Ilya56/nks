let P1 = 0.88,
  P2 = 0.42,
  P3 = 0.05,
  P4 = 0.62,
  P5 = 0.44,
  P6 = 0.13,
  P7 = 0.22,
  P8 = 0.63,
  P9 = 0.27

function getP(P1, P2, P3, P4, P5, P6, P7, P8, P9) {
  let R12 = 1 - (1 - P1) * (1 - P2),
    R13 = 1 - (1 - P1) * (1 - P3),
    R23 = 1 - (1 - P2) * (1 - P3),
    R56 = P5 * P6,
    R78 = 1 - (1 - P7) * (1 - P8),
    R79 = 1 - (1 - P7) * (1 - P9),
    R89 = 1 - (1 - P8) * (1 - P9);

  let S1 = R12 * R89,
    S2 = R13 * P4 * R78,
    S3 = R23 * R56 * R79;

  let S4 = 1 - (1 - S2) * (1 - S3);

  return S1 * S4;
}

const P = getP(P1, P2, P3, P4, P5, P6, P7, P8, P9);

console.log("Ймовірність безвідмовної роботи системи протягом 10 годин = ", P);

const time = 1703
const k1 = 1
const k2 = 1

const qSystem = 1 - P;
const tSystem = -time / Math.log(P) / Math.log(Math.E);

const qReservedSystem = (1 - P) ** (k1 + 1);
const pReservedSystem = 1 - qReservedSystem;
const tReservedSystem = -time / Math.log(pReservedSystem) / Math.log(Math.E);
const gQ = qReservedSystem / qSystem;
const gP = pReservedSystem / P;
const gT = tReservedSystem / tSystem;

const qReserved1 = Math.pow((1 - P1), (k2 + 1));
const qReserved2 = Math.pow((1 - P2), (k2 + 1));
const qReserved3 = Math.pow((1 - P3), (k2 + 1));
const qReserved4 = Math.pow((1 - P4), (k2 + 1));
const qReserved5 = Math.pow((1 - P5), (k2 + 1));
const qReserved6 = Math.pow((1 - P6), (k2 + 1));
const qReserved7 = Math.pow((1 - P7), (k2 + 1));
const qReserved8 = Math.pow((1 - P8), (k2 + 1));
const qReserved9 = Math.pow((1 - P9), (k2 + 1));

const pReserved1 = 1 - qReserved1;
const pReserved2 = 1 - qReserved2;
const pReserved3 = 1 - qReserved3;
const pReserved4 = 1 - qReserved4;
const pReserved5 = 1 - qReserved5;
const pReserved6 = 1 - qReserved6;
const pReserved7 = 1 - qReserved7;
const pReserved8 = 1 - qReserved8;
const pReserved9 = 1 - qReserved9;

const pAllReservedSystem = getP(pReserved1, pReserved2, pReserved3, pReserved4, pReserved5, pReserved6, pReserved7,
  pReserved8, pReserved9);
const qAllReservedSystem = 1 - pAllReservedSystem;
const tAllReservedSystem = -time / Math.log(pAllReservedSystem) / Math.log(Math.E);
const gAllQ = qAllReservedSystem / qSystem;
const gAllP = pAllReservedSystem / P;
const gAllT = tAllReservedSystem / tSystem;

console.log(`Базова імовірність безвідмовної роботи ${P}`);
console.log(`Базова імовірність відмови ${qSystem}`);
console.log(`Базовий середній наробіток на відмову ${tSystem}`);

console.log(`Імовірність безвідмовної роботи системи з навантаженим загальним резервуванням ${pReservedSystem}`);
console.log(`Імовірність відмови системи з навантаженим загальним резервуванням ${qReservedSystem}`);
console.log(`Середній час роботи системи з навантаженим загальним резервуванням ${tReservedSystem}`);

console.log(`Виграш системи з навантаженим загальним резервуванням по імовірності безвідмовної роботи ${gP}`);
console.log(`Виграш системи з навантаженим загальним резервуванням по імовірності відмови ${gQ}`);
console.log(`Виграш системи з навантаженим загальним резервуванням по середньому часу роботи ${gT}`);

console.log(`Імовірність безвідмовної роботи системи з навантаженим розподіленим резервуванням ${pAllReservedSystem}`);
console.log(`Імовірність відмови системи з навантаженим розподіленим резервуванням ${qAllReservedSystem}`);
console.log(`Середній час роботи системи з навантаженим розподіленим резервуванням ${tAllReservedSystem}`);

console.log(`Виграш системи з навантаженим розподіленим резервуванням по імовірності безвідмовної роботи ${gAllP}`);
console.log(`Виграш системи з навантаженим розподіленим резервуванням по імовірності відмови ${gAllQ}`);
console.log(`Виграш системи з навантаженим розподіленим резервуванням по середньому часу роботи ${gAllT}`);
