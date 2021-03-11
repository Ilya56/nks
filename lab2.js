let P1 = 0.88,
  P2 = 0.42,
  P3 = 0.05,
  P4 = 0.62,
  P5 = 0.44,
  P6 = 0.13,
  P7 = 0.22,
  P8 = 0.63,
  P9 = 0.27

let R12 = P1 * P2,
  R13 = P1 * P3,
  R23 = P2 * P3,
  R56 = P5 * P6,
  R78 = P7 * P8,
  R79 = P7 * P9,
  R89 = P8 * P9;

let S1 = R12 * R89,
  S2 = 1 - (1 - R13) * (1 - R23),
  S3 = 1 - (1 - P4) * (1 - R56),
  S4 = 1 - (1 - R78) * (1 - R79);

let res = S1 * S2 * S3 * S4;

console.log("Ймовірність безвідмовної роботи системи протягом 10 годин = ", res);