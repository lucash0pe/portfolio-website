import { DamnVulnerableDeFiChallenge } from "@/types/damn-vulnerable-defi-challenges";

export const DAMN_VULNERABLE_DEFI_WEBSITE_URL = "https://damnvulnerabledefi.xyz";
export const DAMN_VULNERABLE_DEFI_REPO_URL = "https://github.com/theredguild/damn-vulnerable-defi/tree/v4.1.0";
export const DAMN_VULNERABLE_DEFI_CHALLENGE_REPORTS_BASE_URL = "https://lucash0pe.github.io/web3-security-portfolio/damn-vulnerable-defi";


export const DAMN_VULNERABLE_DEFI_CHALLENGES: DamnVulnerableDeFiChallenge[] = [
  { name: "Unstoppable", number: 1, path: "unstoppable", completed: true },
  { name: "Naive Receiver", number: 2, path: "naive-receiver", completed: true },
  { name: "Truster", number: 3, path: "truster", completed: true },
  { name: "Side Entrance", number: 4, path: "side-entrance", completed: true },
  { name: "The Rewarder", number: 5, path: "the-rewarder", completed: true },
  { name: "Selfie", number: 6, path: "selfie", completed: true },
  { name: "Compromised", number: 7, path: "compromised", completed: false },
  { name: "Puppet", number: 8, path: "puppet", completed: false },
  { name: "Puppet V2", number: 9, path: "puppet-v2", completed: false },
  { name: "Free Rider", number: 10, path: "free-rider", completed: false },
  { name: "Backdoor", number: 11, path: "backdoor", completed: false },
  { name: "Climber", number: 12, path: "climber", completed: false },
  { name: "Wallet Mining", number: 13, path: "wallet-mining", completed: false },
  { name: "Puppet V3", number: 14, path: "puppet-v3", completed: false },
  { name: "ABI Smuggling", number: 15, path: "abi-smuggling", completed: false },
  { name: "Shards", number: 16, path: "shards", completed: false },
  { name: "Curvy Puppet", number: 17, path: "curvy-puppet", completed: false },
  { name: "Withdrawal", number: 18, path: "withdrawal", completed: false },
];

export const getDamnVulnerableDeFiChallengeSlug = (challenge: DamnVulnerableDeFiChallenge): string => {
    return `${String(challenge.number).padStart(2, "0")}-${challenge.path}`;
};

export const getDamnVulnerableDeFiChallengeReportURL = (challenge: DamnVulnerableDeFiChallenge): string | null => {
    if (!challenge) return null;
    return `${DAMN_VULNERABLE_DEFI_CHALLENGE_REPORTS_BASE_URL}/${getDamnVulnerableDeFiChallengeSlug(challenge)}.md`;
};

export const getDamnVulnerableDeFiChallengeURL = (challenge: DamnVulnerableDeFiChallenge): string | null => {
    if (!challenge) return null;
    return `${DAMN_VULNERABLE_DEFI_WEBSITE_URL}/challenges/${challenge.path}`;
};

const getDamnVulnerableDeFiChallengeContractsURL = (challenge: DamnVulnerableDeFiChallenge): string | null => {
    if (!challenge) return null;
    return `${DAMN_VULNERABLE_DEFI_REPO_URL}/src/${challenge.path}/`;
}

const getDamnVulnerableDeFiChallengeTestSetupURL = (challenge: DamnVulnerableDeFiChallenge): string | null => {
    if (!challenge) return null;
    return `${DAMN_VULNERABLE_DEFI_REPO_URL}/test/${challenge.path}/`;
}

const getDamnVulnerableDeFiChallengeCompletionImageURL = (challenge: DamnVulnerableDeFiChallenge): string | null => {
    if (!challenge) return null;
    return `${DAMN_VULNERABLE_DEFI_CHALLENGE_REPORTS_BASE_URL}/img/${getDamnVulnerableDeFiChallengeSlug(challenge)}.png`;
}

export const getAllDamnVulnerableDeFiChallengeURLs = (
    challenge: DamnVulnerableDeFiChallenge
): [
    reportURL: string | null, 
    challengeURL: string | null, 
    contractsURL: string | null, 
    testSetupURL: string | null, 
    completionImageUrl: string | null
] => {
    return [
        getDamnVulnerableDeFiChallengeReportURL(challenge),
        getDamnVulnerableDeFiChallengeURL(challenge),
        getDamnVulnerableDeFiChallengeContractsURL(challenge),
        getDamnVulnerableDeFiChallengeTestSetupURL(challenge),
        getDamnVulnerableDeFiChallengeCompletionImageURL(challenge),
    ];
}



