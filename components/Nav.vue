<template>
  <div class="container flex mx-sm my-3 relative
      flex flex-col
      items-top
      sm:items-center sm:pt-0">

    <nav class="inline-block">
      <NuxtLink class="mx-1" to="/">{{ $t('base') }}</NuxtLink>
      <NuxtLink class="mx-1" to="/departure">{{ $t('depart') }}</NuxtLink>
      <LanguageInput class="inline-block"/>
    </nav>
  </div>
</template>

<script>
import LanguageInput from '../components/LanguageInput.vue'
export default {
  components: {
    LanguageInput,
  },
}
</script>

<style lang="scss" scoped></style>
