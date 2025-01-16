type Project = {
  title: string;
  summary: string;
  contributions: string[];
  role: string;
  teamSize: Number;
  startDate: Date;
  endDate?: Date;
  gitHubURL: string;
  deploymentURL: string;
}

type Certification = {
  organization: string;
  title: string;
  summary: string;
  dateEarned: Date;
  dateRenewed?: Date;
  dateExpiring?: Date;
  takenInJapanese: boolean;
  myScore: Number;
  maxPossibleScore: Number;
  certURL: string;
}