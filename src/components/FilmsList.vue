<template>
  <section>
    <div class="films-list" v-if="listFilms">
      <FilmCard v-for="film in listFilms" :key="film.id" :film="film" :theme="'hover'" />
    </div>
  </section>
</template>

<script>
import FilmCard from '@/components/FilmCard.vue'

export default {
  components: { FilmCard },
  props: {
    listFilms: Array,
    default: () => { null }
  }
};
</script>