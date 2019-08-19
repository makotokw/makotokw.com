<template>
  <div id="HomePage">
    <p>aaa</p>
    <HelloWorld msg="Welcome to makotokw.com"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'HomePage',
  components: {
    HelloWorld,
  },
};
</script>

<style>
  #HomePage {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
