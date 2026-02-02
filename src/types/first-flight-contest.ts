export interface FirstFlightContest {
  name: string;
  number: number;
  endDate: string;
  contestUrl: string;
  writeupPath: string;
  logoPath: string;
  vulnerabilitiesFound: VulnerabilitiesFound;
}

export interface VulnerabilitiesFound {
  high: number;
  medium: number;
  low: number;

  unique?: number;
  selected?: number;
}