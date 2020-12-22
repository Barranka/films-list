<template>
  <section>
    <div class="sorting-menu">
      <h1 class="title">Фильмы</h1>
      <div class="vars-sort">
        <input id="title" class="vars-sort__input" name="sort" type="radio">
        <label for="title" class="vars-sort__label" @click="sortFilms('title')">Отсортировать по названию</label>
        <input id="year" class="vars-sort__input" name="sort" type="radio">
        <label for="year" class="vars-sort__label" @click="sortFilms('year')">Отсортировать по году</label>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    listFilms: Array,
    default: () => { null }
  },
  data () {
    return {
      currentSort: "title"
    }
  },
  methods: {
    sortFilms(val) {
      this.currentSort = val
      this.sortedFilms();
    },
    sortedFilms() {
      this.listFilms.sort((a, b) => (a[this.currentSort] < b[this.currentSort]) ? -1 : 1);
      this.$store.dispatch('setSortedFilms', this.listFilms);
    }
  }
};
</script>