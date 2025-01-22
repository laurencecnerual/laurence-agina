export type Project = {
  title: string;
  summary: string;
  stack: string;
  contributions: string[];
  role?: string;
  teamSize: Number;
  startDate: string;
  endDate?: string;
  gitHubURL: string;
  deploymentURL?: string;
}

export type Certification = {
  organization: string;
  title: string;
  abbreviation?: string;
  summary: string;
  dateEarned: string;
  dateRenewed?: string;
  dateExpiring?: string;
  takenInJapanese: boolean;
  myScore?: Number;
  maxPossibleScore?: Number;
  certURL: string;
}