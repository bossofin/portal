export interface ReportList {
  title: string;
  url: string;
  children: ReportListChild[];
  name: string;
}

export interface ReportListChild {
  name: string;
  value: string;
}
