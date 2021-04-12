<template>
  <main-layout>
    <h1 class="error">404 - Nie znaleziono</h1>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/MainLayout.vue";
export default {
  components: {
    MainLayout,
  },
};
</script>

<style scoped>
.error {
  color: rgb(173, 18, 18);
}
</style>