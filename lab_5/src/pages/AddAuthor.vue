<template>
  <main-layout>
    <h3>Dodaj Autora</h3>
    <author-form @add:author="addAuthor" />
  </main-layout>
</template>

<script>
import AuthorForm from "@/components/AuthorForm.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  name: "add-author",
  components: {
    AuthorForm,
    MainLayout,
  },
  methods: {
    async addAuthors(author) {
      const request = new Request("http://localhost:8081/authors", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(author),
      });
      try {
        await fetch(request);
      } catch (error) {
        console.error(error);
      }
    },
  },

  mounted() {
    this.getAuthors();
  },
};
</script>
