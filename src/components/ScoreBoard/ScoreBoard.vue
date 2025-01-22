<script setup lang="ts">
import type { Player } from '@/types/Player'

defineProps<{
  blueTeamName: string,
  redTeamName: string,
  blueScore: number,
  redScore: number,
  bluePlayers: Player[],
  redPlayers: Player[]
}>()
</script>

<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h2 class="mb-0">Tableau des scores</h2>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card text-white bg-primary">
              <div class="card-body text-center">
                <h3>{{ blueTeamName }}</h3>
                <h4>{{ blueScore }} points</h4>
                <div class="mt-3">
                  <h5>Joueurs</h5>
                  <table class="table table-borderless text-white">
                    <tbody>
                      <tr v-for="player in bluePlayers" :key="player.id">
                        <td>{{ player.name }}</td>
                        <td>{{ player.score }} pts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card text-white bg-danger">
              <div class="card-body text-center">
                <h3>{{ redTeamName }}</h3>
                <h4>{{ redScore }} points</h4>
                <div class="mt-3">
                  <h5>Joueurs</h5>
                  <table class="table table-borderless text-white">
                    <tbody>
                      <tr v-for="player in redPlayers" :key="player.id">
                        <td>{{ player.name }}</td>
                        <td>{{ player.score }} pts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>