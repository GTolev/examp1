<template>
  <footer class="my-footer">
    <div class="my-footer__menu">
      <router-link
				:to="'/'"
				exact
			>
				Home
			</router-link>
      <router-link
				:to="'/welcome'"
				exact
			>
				Welcome
			</router-link>
    </div>
    <div class="my-footer__created-by">
      © {{ new Date().getFullYear() }} Georgi Tolev
    </div>
  </footer>
</template>

<script>
  export default {
    name: "MyFooter",
    data() {
      return {

      }
    }
  }
</script>