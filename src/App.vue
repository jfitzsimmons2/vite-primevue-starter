<script setup lang="ts">
import Card from "primevue/card";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <Card style="max-width: 30rem" class="mx-auto">
    <template #content>
      <div class="text-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
        <a href="https://primevue.org" target="_blank">
          <img
            src="./assets/primevue-logo.webp"
            class="logo primevue"
            alt="PrimeVue logo"
          />
        </a>
        <HelloWorld msg="Vite + Vue + PrimeVue" />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
