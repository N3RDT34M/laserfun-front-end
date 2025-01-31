<script setup lang="ts">
import { ref } from 'vue';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();
const serverIp = ref<HTMLInputElement>();

const saveServerIp = () => {
  cookies.set('serverIp', serverIp.value?.value ?? '');
  window.location.reload();
};
</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="jumbotron text-center">
        <h1 class="display-4">Bienvenue sur le logiciel LaserFun!</h1>
        <img src="/laser_game_example.webp" class="img-fluid w-50 rounded" alt="LaserFun">
        <hr class="my-4">
        <p class="lead">Sur cette application d'interface au serveur, vous pourrez gérer la partie, voir le temps restant, les résultats...</p>
        <router-link class="btn btn-primary btn-lg" to="configuration" role="button">Lancer une partie</router-link>
        <hr class="my-4">
        <form class="mb-4">
          <div class="form-group">
            <label for="serverIp">Adresse IP du serveur (sauvegardée dans les paramètres)</label>
            <input type="text" class="form-control" ref="serverIp" id="serverIp" placeholder="Entrez l'adresse IP">
            <button type="button" class="btn btn-success mt-2" @click="saveServerIp">Sauvegarder</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
