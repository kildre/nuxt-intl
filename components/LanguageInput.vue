<template>
  <div>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="mx-5 p-2 btn"
      >{{ locale.name }}</nuxt-link
    >
    <!-- <div class="lang-dropdown">
      <select v-model="$i18n.locale">
        <option
          v-for="lang in $i18n.locales"
          :key="lang.code"
          :value="lang.code"
        >
          {{ lang.name }}
        </option>
      </select>
    </div> -->
  </div>
</template>

<script>

export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
<style scoped>
.btn {
  border-radius: 10px;
  background: rgb(3, 32, 77);
  color: rgb(177, 209, 241);
}
</style>
