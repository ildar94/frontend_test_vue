<template>
  <div id="app">
    <h1>Hello World</h1>
    <v-main-wrapper />
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'

export default {
  name: 'app',
  components: {
    vMainWrapper
  }
}
</script>

<style>
#app{
text-align: center;

}
</style>
