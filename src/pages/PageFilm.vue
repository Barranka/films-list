<template>
  <div class="container-content">
    <div class="preloading-container" v-if="loading">
      <Preloading />
    </div>
    <section v-else>
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
import Preloading from '@/components/Preloading.vue'
import axios from "axios"

export default {
  components: { FilmCard, Preloading },
  data() {
    return {
      film: null,
      loading: false
    };
  },
  created() {
    if (this.filmStore) this.film = this.filmStore
    else this.getData()
  },
  methods: {
    async getData() {
      this.loading = true
      try {
        const { data: {data} } = await axios.get(`https://floating-sierra-20135.herokuapp.com/api/movie/${this.$route.params.id}`)
        this.film = data
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    },
  },
  computed: {
    filmStore() {
      return this.$store.getters.getActiveFilm
    }
  },
};
</script>
