export interface SectionData {
  question: string;
  type: string;
  correct: string;
  your: string;
  marks: number;
  diff: string;
  time: string;
  level: string;
  status: string;
  sq: string;
}

export interface Result {
  varc: { [key: number]: SectionData };
  dilr: { [key: number]: SectionData };
  qa: { [key: number]: SectionData };
}

export interface AnalysisSection {
  questions: number;
  timeTaken: string;
  attempted: string;
  correct: string;
  incorrect: string;
  skipped: string;
  score: number;
  accuracy: number;
  percentile: number;
  benchmarkScore: number;
}

export interface Analysis {
  varc: AnalysisSection;
  dilr: AnalysisSection;
  qa: AnalysisSection;
  overall: AnalysisSection;
}

export interface ProcessedData {
  result: Result;
  analysis: Analysis; 
}