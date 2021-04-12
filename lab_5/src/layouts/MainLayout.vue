<template>
  <div class="container">
    <h1>Książki inc.</h1>
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
            name: 'AddBook',
          }"
          >Dodaj książkę</router-link
        >
      </li>
      <li class="link">
        <router-link
          :to="{
            name: 'UpdateBook',
          }"
          >Aktualizuj książkę</router-link
        >
      </li>
      <li class="link">
        <router-link
          :to="{
            name: 'AddAuthor',
          }"
          >Dodaj Autora</router-link
        >
      </li>
      <li class="link">
        <router-link
          :to="{
            name: 'Books',
          }"
          >Książki</router-link
        >
      </li>
    </ul>
    <hr />
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
  padding: 5px 20px;
  margin-right: 20px;
  border: 2px darkgray solid;
  border-radius: 10px;
  transition: all ease-out 300ms;
}

.link:hover {
  cursor: pointer;
  text-decoration: underline;
  border-color: black;
}
</style>