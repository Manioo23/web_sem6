<template>
  <main-layout>
    <h3>Dodaj Książkę</h3>
    <book-form @add:book="addBook" :authorSource="authors" />
  </main-layout>
</template>

<script>
import BookForm from "@/components/BookForm.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  name: "add-book",
  components: {
    BookForm,
    MainLayout,
  },
  data() {
    return {
      authors: [
        {
          id: 1,
          firstName: "Adam",
          lastName: "Mickiewicz",
        },
      ],
    };
  },

  methods: {
    async getAuthors() {
      try {
        const response = await fetch("http://localhost:8081/authors");
        const data = await response.json();
        this.authors = data;
      } catch (error) {
        console.error(error);
      }
    },

    async addBook(book) {
      const request = new Request("http://localhost:8081/books", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
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
