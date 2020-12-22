<template>
  <div class="wrapper">
    <header>
      <NavBar />
    </header>
    <body>
      <router-view></router-view>
    </body>


    <!-- footer -->

  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import PageListFilms from '@/pages/PageListFilms.vue'
// import PageFilm from '@/components/PageFilm.vue'

export default {
  components: { NavBar, PageListFilms }
  // data () {
  //   return {
  //     links: [
  //       {title: 'Home', url: '/'},
  //       {title: 'Example', url: '/example'}
  //     ]
  //   }
  // }
};
</script>