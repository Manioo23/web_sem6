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
      <p v-if="success" class="success-message">Dane poprawnie zapisano</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "author-form",
  data() {
    return {
      success: false,
      author: {
        firstName: "",
        middleName: "",
        lastName: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.success = false;
      this.$emit("add:author", this.author);
      this.success = true;
    },
  },
};
</script>

<style scoped>
.success-message {
  color: #32a95d;
}
</style>