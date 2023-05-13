<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar-list">
        <li v-for="link in linksItem" :key="link.alias" class="navbar-item">
          <router-link class="navbar-link" :to="link.url">{{ link.title }}</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { links } from '@/_config'
export default {
  data: () => ({
    linksItem: links,
  }),
}
</script>