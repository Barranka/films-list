<template>
  <div class="container-content">
    <SortingMenu :listFilms="listFilms" />
    <div class="list-container" v-if="listFilms">
      <FilmsList :listFilms="listFilms" />
    </div>
    <div class="preloading-container" v-else>
      <Preloading />
    </div>
  </div>
</template>

<script>
import SortingMenu from '@/components/SortingMenu.vue'
import FilmsList from '@/components/FilmsList.vue'
import Preloading from '@/components/Preloading.vue'

export default {
  components: { SortingMenu, FilmsList, Preloading },
  computed: {
    listFilms () {
      return this.$store.getters.getListFilms
    }
  },
  created() {
    this.$store.dispatch('setFilms');
  },
};
</script>