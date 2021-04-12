<template>
  <div class="container">
    <h1>Tytuł Strony</h1>
    <ul class="links">
      <li class="link">
        <router-link
          :to="{
            name: 'Home',
          }"
          >Strona główna</router-link
        >
      </li>
      <li class="link">
        <router-link
          :to="{
            name: 'Home',
          }"
          >Strona główna</router-link
        >
      </li>
      <li class="link">
        <router-link
          :to="{
            name: 'Home',
          }"
          >Strona główna</router-link
        >
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "main-layout",
};
</script>

<style scoped>
.container {
  max-width: 60vw;
  margin: 0 auto;
  padding: 20px 50px;
  min-height: 100vh;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  padding: 0px;
  list-style: none;
}

.link {
  margin: 0px 10px;
}

.link:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>