export type Project = {
  slug: string;
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
  screenshotURL: string;
}

export type Certification = {
  slug: string;
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
  moreInfoURL: string
  certURL: string;
}