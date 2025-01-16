import {Project, Certification} from "./types.ts";

let projects: Project[];
projects = [
  {
    title: "Project 1",
    summary: "Summary 1",
    contributions: ["Contribution 1.1", "Contribution 1.2", "Contribution 1.3"],
    role: "Role 1",
    teamSize: 4,
    startDate: new Date("2024/11"),
    endDate: new Date("2024/11"),
    gitHubURL: "GitHub URL 1",
    deploymentURL: "Render URL 1"
  },
  {
    title: "Project 2",
    summary: "Summary 2",
    contributions: ["Contribution 2.1", "Contribution 2.2", "Contribution 2.3"],
    role: "Role 2",
    teamSize: 1,
    startDate: new Date("2024/12"),
    endDate: new Date("2024/12"),
    gitHubURL: "GitHub URL 2",
    deploymentURL: "Render URL 2"
  },
];

let certifications: Certification[];
certifications = [
  {
    organization: "Organization 1",
    title: "Title 1",
    summary: "Summary 1",
    dateEarned: new Date("2024/08"),
    dateRenewed: new Date("2024/09"),
    dateExpiring: new Date("2026/10"),
    takenInJapanese: false,
    myScore: 90,
    maxPossibleScore: 100,
    certURL: "PDF URL 1"
  },
  {
    organization: "Organization 2",
    title: "Title 2",
    summary: "Summary 2",
    dateEarned: new Date("2024/09"),
    dateRenewed: new Date("2024/10"),
    dateExpiring: new Date("2026/11"),
    takenInJapanese: false,
    myScore: 90,
    maxPossibleScore: 100,
    certURL: "PDF URL 2"
  },
];