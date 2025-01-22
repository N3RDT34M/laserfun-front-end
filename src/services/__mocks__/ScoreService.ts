import type { Player } from '@/types/Player'

const mockData = {
  blueTeam: {
    name: "Équipe Bleue",
    score: 150,
    players: [
      { id: 1, name: "Joueur 1", score: 50, teamColor: 'blue' },
      { id: 2, name: "Joueur 2", score: 60, teamColor: 'blue' },
      { id: 3, name: "Joueur 3", score: 40, teamColor: 'blue' }
    ] as Player[]
  },
  redTeam: {
    name: "Équipe Rouge",
    score: 120,
    players: [
      { id: 4, name: "Joueur 4", score: 45, teamColor: 'red' },
      { id: 5, name: "Joueur 5", score: 35, teamColor: 'red' },
      { id: 6, name: "Joueur 6", score: 40, teamColor: 'red' }
    ] as Player[]
  }
}

export const getMockScores = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return mockData
}