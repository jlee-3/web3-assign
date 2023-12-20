export type Status = "active" | "inactive";

export type VoteAction = "support" | "reject";

export interface VoteResult {
  percentage: number;
  total: number;
}

export type VoteBreakdown = {
  [voteAction in VoteAction]: VoteResult;
};

export interface VotingStat {
  key: string;
  tag?: string;
  value: string | boolean;
}

export interface Paragraph {
  title: string;
  content: string;
}
