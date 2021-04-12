<template>
  <main-layout>
    <div class="small-container">
      <h1>Książki</h1>
      <book-table :bookSource="books" />
    </div>
  </main-layout>
</template>

<script>
import BookTable from "@/components/BookTable.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  name: "books",
  components: {
    BookTable,
    MainLayout,
  },
  data() {
    return {
      books: [
        {
          id: 1,
          title: "Kot w butach",
          author: {
            id: 1,
            firstName: "Jan",
            lastName: "Brzechwa",
          },
          pages: 123,
        },
      ],
    };
  },
  methods: {
    async getBooks() {
      const request = new Request("http://localhost:8081/get/books", {
        method: "GET",
      });
      try {
        const response = await fetch(request);
        const data = await response.json();
        this.books = data;
      } catch (error) {
        console.error(error);
      }
    },
  },

  mounted() {
    this.getBooks();
  },
};
</script>
