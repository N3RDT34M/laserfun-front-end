<script setup lang="ts">

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
      </div>
    </div>
  </main>
</template>
