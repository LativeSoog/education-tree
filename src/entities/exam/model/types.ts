export type Exam = {
  id: string;
  type: ExamType;
  name: string;
  minScore: number;
};

export type ExamType = "ege" | "vi";
