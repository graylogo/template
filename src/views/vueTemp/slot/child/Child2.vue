<template>
  <div class="container">
    <header>
      <slot name="header" :user="user">
        {{ user.name }}
      </slot>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'child'
      }
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.container{
}
</style>
