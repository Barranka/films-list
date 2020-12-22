<template>
  <div class="container-content">
    <section>
      <div class="film-back-link">
        <router-link class="film-back-link__link" :to="'/'">
          <div class="film-back-link__wrap">
            <img src="@/assets/images/arrow-back.svg" alt="Назад">
            <div class="film-back-link__text">Назад к списку</div>
          </div>
        </router-link >
      </div>
      <div class="active-film-container" v-if="film">
        <FilmCard :film="film" :theme="'no-hover'"/>
      </div>
      <div class="not-found-container" v-else>
        <div class="not-found-container__text">
          К сожалению, по вашему запросу ничего не найдено...
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import FilmCard from '@/components/FilmCard.vue'

export default {
  components: { FilmCard },
  watch: {
    $route(to, from) {
      this.getData();
    }
  },
  methods: {
    async getData() {
      try {
        const film = await axios.get(`https://floating-sierra-20135.herokuapp.com/api/movie/${this.film.id}`)
        this.film = film
        // console.log(this.film, 'axios')
      } catch (e) {}
    },
  },
  computed: {
    film() {
      return this.$store.getters.getActiveFilm
    }
  },
};
</script>
