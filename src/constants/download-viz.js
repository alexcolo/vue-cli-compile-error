//Data
export const DATA_FORMATS = [
  { text: "Excel", value: "OOXML" },
  { text: "CSV (comma separated)", value: "CSV_C" },
  { text: "CSV (tab separated)", value: "CSV_T" }
];
export const DATA_FORMAT_DEFAULT = DATA_FORMATS[0].value;

//PDF
export const PDF_PAPER_SIZES = [
  { text: 'A3 (16.55" x 11.7")', value: "a3" },
  { text: 'A4 (11.7" x 8.275")', value: "a4" },
  { text: 'A5 (8.275" x 5.85")', value: "a5" },
  { text: 'A6 (5.85" x 4.1375")', value: "a6" },
  { text: 'A7 (4.1375" x 2.925")', value: "a7" }
];

export const PDF_PAPER_SIZE_DEFAULT = PDF_PAPER_SIZES[1].value;
