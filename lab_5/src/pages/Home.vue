<template>
  <main-layout>
    <person-form @add:person="addPerson" />
    <persons-table :personsSource="persons" />
  </main-layout>
</template>

<script>
import PersonsTable from "@/components/PersonsTable.vue";
import PersonForm from "@/components/PersonsForm.vue";
import MainLayout from "../layouts/MainLayout.vue";

export default {
  components: {
    PersonsTable,
    PersonForm,
    MainLayout,
  },
  data() {
    return {
      persons: [
        {
          id: 1,
          name: "Wczytywanie danych",
          email: "...",
          phone: "...",
        },
      ],
    };
  },
  methods: {
    addPerson(person) {
      this.persons = [...this.persons, person];
    },
    async getPersons() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        this.persons = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getPersons();
  },
};
</script>