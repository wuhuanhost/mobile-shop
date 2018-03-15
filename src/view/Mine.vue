<template>
  <div class="page">
    <Header></Header>
    <div class="content">
      <button @click="add">+1</button>
      <p>{{this.$store.getters.getMinTwo}}</p>
      <h2 @click="showAlert">弹框组件测试</h2>
      <h2 @click="showDialgo">Dialgo弹框测试</h2>
      <h2 @click="customAlert">自定义弹框组件测试</h2>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
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
      this.$store.commit('ADD') // 提交
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
            handler: () => {
              alert('Woot!')
            }
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
      this.$modal.show(
        CustomAlert,
        {
          text: 'This text is passed as a property'
        },
        {
          draggable: false
        }
      )
    }
  },
  created: function () {
    this.$store.commit('UPDATE_VIEW', {
      name: 'mine',
      desc: '描述......'
    })
  },
  components: {
    Header,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
