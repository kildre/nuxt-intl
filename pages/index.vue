<template>
<div>
  <Nav />
  <div
    class="
      relative
      flex flex-col
      items-top
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center sm:pt-0
    "
  >
  <div class="container mx-lg title">{{ $t('title') }}</div>
    <div class="container mx-md" >
      <h2 class="">{{ $t('greeting') }}</h2>
      <h3>{{ $t('destinations')}}</h3>

    </div>
    <div>
      <!-- <language-input class="" /> -->
      <!-- <nuxt-link
        class="button"
        v-if="$i18n.locale !== 'en'"
        :to="switchLocalePath('en')"
      >
        English
      </nuxt-link>

      <nuxt-link
        class="button"
        v-if="$i18n.locale !== 'es'"
        :to="switchLocalePath('es')"
      >
        Español
      </nuxt-link>
      <nuxt-link
        class="button"
        v-if="$i18n.locale !== 'fr'"
        :to="switchLocalePath('fr')"
      >
       français
      </nuxt-link> -->
    </div>
  </div>
  </div>
</template>

<script>
// import LanguageInput from '../components/LanguageInput.vue'
import Nav from '../components/Nav.vue'
export default {
  compnents: {
    // LanguageInput,
    Nav
  },
  name: 'index'
}

</script>
<style>
.title {
  font-size: 4rem;
  font-weight: bold;
  color: hotpink;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 2rem;
  color: darkgreen
}
h3 {
  font-size: 1rem;
  color: dodgerblue;
}

.button {
  border-radius: 10px;
  width: auto;
  background: hotpink;
  color: #fff;
  padding: 1rem;
  line-height: 4rem;
}
</style>
