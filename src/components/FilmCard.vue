<template>
  <div class="film-container" :class=" { hover:  theme == 'hover' }">
    <div class="poster-wrap">
        <img class="poster" :src="film.poster" alt="Постер">
    </div>
    <div class="film-info">
      <div class="film-header">
        <router-link  v-if="film.url && theme == 'hover'" :to="`film/${film.id}`" ><div class="film-header__title" @click="setActiveFilm(film)">{{ film.title }}</div></router-link>
        <div v-else class="film-header__title"> {{film.title}} </div>
        <div v-if="film.collapse.duration" class="film-header__times">
          <div class="times">{{ film.collapse.duration.join(', ') }}</div>
          <div class="icon"></div>
        </div>
      </div>
        <div class="film-info__year" v-if="film.year && film.genres">{{ film.year }}, {{ film.genres.join(', ') }}</div>
        <div class="film-info__composers" v-if="film.composers"> РЕЖИССЁР: {{ film.composers.join(', ') }}</div>
        <div class="film-info__actors" v-if="film.actors">
          <div class="film-info__actor-title">АКТЁРЫ:</div>
          <div class="film-info__actor-descr">{{ film.actors.join(', ') }}</div>
        </div>
        <div class="film-info__descr" v-if="film.description"> {{ film.description }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  props: {
    film: {
      type: Object,
      default: () => { null }
    },
    theme: {
      type: String,
      required: true
    }
  },
  computed: {
    listFilms() {
      return this.$store.getters.getListFilms
    }
  },
  methods: {
    setActiveFilm(film) {
      this.$store.dispatch('setActiveFilm', film);
    }
  }
};
</script>