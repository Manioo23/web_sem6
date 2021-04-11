<template>
  <div id="person-form">
    <form @submit.prevent="handleSubmit">
      <label>Imię i nazwisko</label>
      <input type="text" />
      <label>Email</label>
      <input type="text" />
      <label>Telefon</label>
      <input type="text" />
      <button>Dodaj kontakt</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "person-form",
  data() {
    return {
      person: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("uruchomiono handleSubmit");
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>
