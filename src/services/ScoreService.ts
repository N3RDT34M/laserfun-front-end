import type { Player } from '@/types/Player'
import { getMockScores } from './__mocks__/ScoreService'

interface TeamData {
  name: string;
  score: number;
  players: Player[];
}

interface GameScore {
  blueTeam: TeamData;
  redTeam: TeamData;
}

const API_URL = 'http://localhost:3000/api';

export const getScores = async (): Promise<GameScore> => {
  // Use mock in development
  if (import.meta.env.DEV) {
    return getMockScores()
  }

  const response = await fetch(`${API_URL}/scores`);
  if (!response.ok) {
    throw new Error('Failed to fetch scores');
  }
  return response.json();
};