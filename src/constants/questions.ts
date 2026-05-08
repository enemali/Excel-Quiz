export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  { question: "Which function is used to add values in a range?", options: ["=ADD()", "=SUM()", "=TOTAL()"], correctAnswer: "=SUM()" },
  { question: "What is the shortcut to select an entire row?", options: ["Shift + Space", "Ctrl + Space", "Alt + Shift"], correctAnswer: "Shift + Space" },
  { question: "Which symbol must start every formula?", options: ["+", "-", "="], correctAnswer: "=" },
  { question: "What does VLOOKUP stand for?", options: ["Vertical Lookup", "Very Lookup", "Visual Lookup"], correctAnswer: "Vertical Lookup" },
  { question: "Which function returns the current date?", options: ["=DATE()", "=TODAY()", "=CURRENT()"], correctAnswer: "=TODAY()" },
  { question: "How do you make text bold?", options: ["Ctrl + B", "Shift + B", "Alt + B"], correctAnswer: "Ctrl + B" },
  { question: "What is a 'workbook'?", options: ["A sheet", "A collection of sheets", "A cell"], correctAnswer: "A collection of sheets" },
  { question: "What does #DIV/0! mean?", options: ["Division by zero", "Data error", "Formula missing"], correctAnswer: "Division by zero" },
  { question: "What is a cell reference called that does not change when copied?", options: ["Relative", "Absolute", "Mixed"], correctAnswer: "Absolute" },
  { question: "Which symbol denotes an absolute reference?", options: ["@", "$", "#"], correctAnswer: "$" },
  { question: "Which function counts cells with numbers?", options: ["=COUNT()", "=SUM()", "=NUMBER()"], correctAnswer: "=COUNT()" },
  { question: "Which chart is best for showing trends over time?", options: ["Pie", "Line", "Bar"], correctAnswer: "Line" },
  { question: "How do you insert a new worksheet?", options: ["Shift + F11", "Ctrl + N", "Alt + W"], correctAnswer: "Shift + F11" },
  { question: "Which feature allows you to show only specific data?", options: ["Sort", "Filter", "Format"], correctAnswer: "Filter" },
  { question: "What is the intersection of a row and a column?", options: ["Cell", "Sheet", "Box"], correctAnswer: "Cell" },
  { question: "What function calculates the average?", options: ["=AVG()", "=AVERAGE()", "=MEAN()"], correctAnswer: "=AVERAGE()" },
  { question: "What does Ctrl + Z do?", options: ["Save", "Undo", "Cut"], correctAnswer: "Undo" },
  { question: "What is a Pivot Table used for?", options: ["Formatting", "Data summarization", "Typing"], correctAnswer: "Data summarization" },
  { question: "How to merge cells?", options: ["Home > Merge & Center", "View > Merge", "Data > Merge"], correctAnswer: "Home > Merge & Center" },
  { question: "Which function finds the largest value?", options: ["=MAX()", "=BIG()", "=HIGH()"], correctAnswer: "=MAX()" },
];
