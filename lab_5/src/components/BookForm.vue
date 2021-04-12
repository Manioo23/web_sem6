<template>
     <div id="book-form">
        <form @submit.prevent="handleSubmit">
            <label>Tytuł</label>
            <input type="text" v-model="book.title"/>
            <label>Liczba stron</label>
            <input type="number" v-model="book.pages"/>
            <label>Autor</label>
            <select v-model="book.author.id">
                <option v-for="author in authorSource" :key="author.id" :value="author.id">{{author.firstName + ' ' + author.lastName}}</option>
            </select>
            <button>Zapisz książkę</button>
        </form>
    </div>
</template>

<script>

    export default {
        name: 'book-form',
        props: {
            authorSource: Array
        },
        data() {
            return {
                book: {
                    title: '',
                    pages: 0,
                    author: {
                        id: ''
                    }
                }
            }
        },
        methods: {
            handleSubmit(){
                this.$emit('add:book', this.book)
            },
        }
    }

</script>
