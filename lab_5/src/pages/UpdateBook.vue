<template>
  <main-layout>
    <h3>Aktualizuj Książkę</h3>
    <select v-model="bookId">
      <option v-for="book in this.books" :key="book.id" :value="book.id">
        {{ book.title }}
      </option>
    </select>
    <book-form @add:book="addBook" :authorSource="authors" />
  </main-layout>
</template>

<script>
import BookForm from "@/components/BookForm.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  name: "update-book",
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
      books: [],
      bookId: "",
    };
  },

  methods: {
    async getAuthors() {
      try {
        const response = await fetch("http://localhost:8081/authors", {
          method: "GET",
        });
        const data = await response.json();
        this.authors = data;
      } catch (error) {
        console.error(error);
      }
    },
    async getBooks() {
      try {
        const response = await fetch("http://localhost:8081/get/books", {
          method: "GET",
        });
        const data = await response.json();
        this.books = data;
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
        body: JSON.stringify({ ...book, id: this.bookId }),
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
    this.getBooks();
  },
};
</script>
