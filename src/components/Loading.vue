<template>
      <div class="mask">
          <div class="content">正在加载中......</div>
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 2rem;
  height: 1rem;
  background-color: red;
  border-radius: 5px;
  text-align: center;
  line-height: 1rem;
}
</style>
