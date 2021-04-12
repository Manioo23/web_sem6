<template>
  <div id="books-table">
    <table>
      <thead>
        <th>Tytuł</th>
        <th>Autor</th>
        <th>Ilość stron</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="book in bookSource" :key="book.id">
          <td>{{ book.title }}</td>
          <td>
            {{
              book.author
                ? `${book.author.firstName} ${book.author.lastName}`
                : "Brak autora"
            }}
          </td>
          <td>{{ book.pages }}</td>

          <td>
            <!-- <router-link :to="{name: 'update',params: {bookId: book.id}}">Edit</router-link> | -->
            <button v-on:click="removeBook(book.id)">Usuń książkę</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "books-table",
  props: {
    bookSource: Array,
  },
};
</script>
