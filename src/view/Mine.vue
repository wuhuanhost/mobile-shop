<template>
  <div class="view">
    <div class="content">
      <button @click="add">+1</button>
      <p>{{this.$store.getters.getMinTwo}}</p>
      <h2 @click="showAlert">弹框组件测试</h2>
      <h2 @click="showDialgo">Dialgo弹框测试</h2>
      <h2 @click="customAlert">自定义弹框组件测试</h2>
    </div>
  </div>
</template>

<script>
import CustomAlert from '../components/CustomAlert'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 0
    }
  },
  methods: {
    add: function () {
      this.$store.commit('ADD')// 提交
    },
    showAlert: function () {
      this.$modal.show('alert')
    },
    showDialgo: function () {
      this.$modal.show('dialog', {
        title: 'Alert!',
        text: 'You are too awesome',
        buttons: [
          {
            title: 'Deal with it',
            handler: () => { alert('Woot!') }
          },
          {
            title: '', // Button title
            default: true, // Will be triggered by default if 'Enter' pressed.
            handler: () => {
              alert('123')
            } // Button click handler
          },
          {
            title: 'Close'
          }
        ]
      })
    },
    customAlert: function () {
      this.$modal.show(CustomAlert, {
        text: 'This text is passed as a property'
      }, {
        draggable: false
      })
    }
  },
  created: function () {
    console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  width: 7.5;
  height: 100%;
  display: relative;
}
.content {
  height: calc(100% - 40px - 40px);
  position: absolute;
  top: 40px;
  background: #ffffff;
  width: 7.5rem;
}

</style>
