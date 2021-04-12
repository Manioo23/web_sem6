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
                    
                    <td>{{ book.title}}</td>
                    <td>{{ book.pages}}</td>
                    <td>{{ book.author.firstName + " " + book.author.lastName}}</td>       

                    <td>
                        <!-- <router-link :to="{name: 'update',params: {bookId: book.id}}">Edit</router-link> |
                        <router-link :to="{name: 'remove',params: {bookId: book.id}}">Delete</router-link> -->
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'books-table',
    props: {
        bookSource: Array,
    },
}
</script>
