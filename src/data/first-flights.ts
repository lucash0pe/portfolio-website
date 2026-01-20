import { FirstFlightContest } from '@/types/first-flight-contest';

export const FIRST_FLIGHT_CONTESTS: FirstFlightContest[] = [
  {
    name: 'Raisebox Faucet',
    number: 50,
    endDate: '2025-10-16',
    contestUrl: 'https://codehawks.cyfrin.io/c/2025-10-raisebox-faucet',
    writeupPath: '/reports/2025-10-RaiseBox-Faucet.pdf',
    logoPath: '/logos/raisebox-faucet.webp',
    vulnerabilitiesFound: {
        high: 3,
        medium: 1,
        low: 1
    }
  },
  {
    name: 'Company Simulator',
    number: 51,
    endDate: '2025-10-30',
    contestUrl: 'https://codehawks.cyfrin.io/c/2025-10-company-simulator',
    writeupPath: '/reports/2025-10-Company-Simulator.pdf',
    logoPath: '/logos/company-simulator.webp',
    vulnerabilitiesFound: {
        high: 1,
        medium: 0,
        low: 0
    }
  },
  {
    name: 'BriVault',
    number: 52,
    endDate: '2025-11-13',
    contestUrl: 'https://codehawks.cyfrin.io/c/2025-11-brivault',
    writeupPath: '/reports/2025-11-BriVault.pdf',
    logoPath: '/logos/brivault.webp',
    vulnerabilitiesFound: {
        high: 4,
        medium: 1,
        low: 1
    }
  },
  {
    name: 'Token-0x',
    number: 54,
    endDate: '2025-11-16',
    contestUrl: 'https://codehawks.cyfrin.io/c/2025-12-token0x',
    writeupPath: '/reports/2025-12-Token-0x.pdf',
    logoPath: '/logos/token-0x.webp',
    vulnerabilitiesFound: {
        high: 1,
        medium: 1,
        low: 1
    }
  }
];