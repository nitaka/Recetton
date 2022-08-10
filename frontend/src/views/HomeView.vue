<template>
  <div class="home">
    <HeaderView/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderView from '@/components/HeaderView.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderView
  }
}
</script>
