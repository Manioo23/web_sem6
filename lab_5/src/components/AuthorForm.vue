<template>
  <div id="author-form">
    <form @submit.prevent="handleSubmit">
      <label>Imię</label>
      <input type="text" v-model="author.firstName" />
      <label>Drugie imię / Pseudonim</label>
      <input type="text" v-model="author.middleName" />
      <label>Nazwisko</label>
      <input type="text" v-model="author.lastName" />
      <button>Zapisz autora</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "author-form",
  data() {
    return {
      author: {
        firstName: "",
        middleName: "",
        lastName: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("add:author", this.author);
    },
  },
};
</script>
