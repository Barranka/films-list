<template>
  <div class="container-content">
    <section>
      <div class="container">
        <h1 class="not-found">Страница не найдена!</h1>
		    <p class="title">Вернуться на <router-link class="link" to="/">главную?</router-link></p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container-content {
	display: flex;
	justify-content: center;
	text-align: center;
}
.container {
  margin-top: 250px;
}
.not-found {
  font-size: 36px;
  margin-bottom: 20px;
}
.link {
  color: #FA2828;
}
</style>