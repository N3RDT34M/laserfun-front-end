<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ScoreBoard from '@/components/ScoreBoard/ScoreBoard.vue'
import { getScores } from '@/services/ScoreService'
import type { Player } from '@/types/Player'

const loading = ref(true)
const error = ref<string | null>(null)

const blueTeamName = ref('')
const redTeamName = ref('')
const blueScore = ref(0)
const redScore = ref(0)
const bluePlayers = ref<Player[]>([])
const redPlayers = ref<Player[]>([])

onMounted(async () => {
  try {
    const data = await getScores()
    blueTeamName.value = data.blueTeam.name
    redTeamName.value = data.redTeam.name
    blueScore.value = data.blueTeam.score
    redScore.value = data.redTeam.score
    bluePlayers.value = data.blueTeam.players
    redPlayers.value = data.redTeam.players
  } catch (e) {
    error.value = 'Erreur lors du chargement des scores'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main>
    <div class="container mt-5">
      <div v-if="loading" class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Chargement...</span>
        </div>
      </div>
      
      <div v-else-if="error" class="alert alert-danger">
        {{ error }}
      </div>
      
      <ScoreBoard 
        v-else
        :blue-team-name="blueTeamName"
        :red-team-name="redTeamName"
        :blue-score="blueScore"
        :red-score="redScore"
        :blue-players="bluePlayers"
        :red-players="redPlayers"
      />
    </div>
  </main>
</template>