<template>
  <div id="app">
      <page-header />
      <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'


export default {
  name: 'App',
  components: {
    PageHeader,
  }
}
</script>
