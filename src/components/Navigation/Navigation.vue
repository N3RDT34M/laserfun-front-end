<script setup lang="ts">
defineProps<{
  
}>()
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Laser Fun</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="configuration">Configuration d'une partie</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
export default {
    name: 'Navigation'
}
</script>
