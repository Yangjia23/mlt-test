<template>
  <div id="app">
    <h2>接收到的 msg:</h2>
    <div class="box">{{ msg }}</div>
  </div>
</template>

<script>
import VConsole from 'vconsole'
const Vconsole = new VConsole()
export default {
  name: 'App',
  components: {},
  created() {
    this.initListener()
  },
  data() {
    return {
      msg: '',
    }
  },
  methods: {
    initListener() {
      if (!window.nativeNotify) {
        window.nativeNotify = (msg) => {
          var data = JSON.parse(msg)
          Vconsole.log(data)
          this.msg = msg
        }
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  width: 400px;
  margin: 0 auto;
  height: 200px;
  border: 1px solid red;
}
</style>
