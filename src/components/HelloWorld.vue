<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="pushNotifToBackend">untuk triger ke node js untuk push notif</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  sockets: {
      connect: function () {
          console.log('socket connected')
      },
      //ini listener socket io dari nodejs
      sendNotifToVue: function (data) {
        alert(data)
      }
      //sampai sini
  },

  methods: {
    //ini untuk nge trigger endpoint ke node js
    pushNotifToBackend() {
      axios.get('http://localhost:5000/pushNotif').then(response => {
        console.log(response)
      })
    }
    //sampai sini
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
