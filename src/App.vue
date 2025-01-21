<script setup lang="ts">
import 'bootstrap';
import { RouterLink, RouterView } from 'vue-router';
import Navigation from './components/Navigation/Navigation.vue';
import Footer from './components/Footer/Footer.vue';

</script>

<template>
  <Navigation />
  <router-view />
  <Footer />
</template>