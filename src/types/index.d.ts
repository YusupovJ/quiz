export interface IOption {
  id: number;
  content: string | number;
  isRight: boolean;
}

export interface IQuestion {
  id: number;
  content: string;
  options: IOption[];
}

export type QuestionStatus = "CORRECT" | "WRONG" | "NOT_GIVEN";
export type TEndpoints = "history" | "philosophy" | "academy" | "religia";
