<template>
  <v-menu
    ref="menu"
    v-model="dateModal"
    :return-value.sync="date"
    :close-on-content-click="false"
    persistent
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="`${label}`"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn color="secondary" @click="dateModal = false">Cancel</v-btn>
      <v-btn color="secondary" @click="set()">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>
<script>
export default {
  name: "DatePicker",
  props: ["label"],
  data: () => ({
    date: "",
    dateModal: false,
  }),
  methods: {
    set() {
      this.date = this.date;
      /* ERROR Property 'save' does not exist on type 'Vue | Element | (Vue | Element)[]'. */
      this.$refs.menu.save(this.date);
    },
  },
};
</script>