<template>
  <div class="header">
    <div class="head-message">欢迎来到风之落雪的个人博客</div>
      <el-input
        class="inputBar"
        placeholder="请输入关键字"
        suffix-icon="el-icon-search"
        :model="input">
      </el-input>
  </div>
</template>

<script>
export default {
  name: 'myblog',
  data () {
    return {
      input:''
    }
  }
}
</script>

<style scoped>
  .head-message{
    width: 60%;
    position: absolute;
    font: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .inputBar{
    width: 40%;
    float: right;
  }
</style>
