<template>
    <div class="alert1">
        <h1>This is created inline</h1>
        <p>{{ text }}</p>
        <button @click="$emit('close')">关闭</button>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['text'],
  data () {
    return {
    }
  },
  components: {}
}
</script>

<style scoped>
.alert1{
    width:4rem;
    height:2rem;
}
</style>
