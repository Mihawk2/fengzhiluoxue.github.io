<template>
  <div class="main">
    <div class="header">
      <div class="head-message">欢迎来到风之落雪的个人博客</div>
      <div class="inputBar">
        <el-input
          placeholder="请输入关键字"
          suffix-icon="el-icon-search"
          :model="input">
        </el-input>
      </div>
    </div>
    <div class="navBar">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-reading"></i>
              <span>英语学习</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">听</el-menu-item>
              <el-menu-item index="1-2">说</el-menu-item>
              <el-menu-item index="1-3">读</el-menu-item>
              <el-menu-item index="1-4">写</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-s-claim"></i>
            <span slot="title">金融学习</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-monitor"></i>
            <span slot="title">编程学习</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-goblet"></i>
            <span slot="title">进来吃茶</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
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
  .main{
    background-color: #545c64;
  }
  .header{
    display: block;
    overflow: hidden;
  }
  .navBar{
    display: block;
  }
  .el-col{
    width: 220px;
  }
  .head-message{
    width: 60%;
    position: absolute;
    text-shadow: -1.5px -1.5px 1px rgb(123,111,223),
                 -2.5px -2.5px 1px rgb(123,111,223),
                 -1.5px -1.5px 1px rgb(123,111,223),
                 -1.5px -1.5px 1px rgb(123,111,223);
    color: red;
    font-size: 22px;
    letter-spacing: 4px;
    margin: 15px;
  }
  .inputBar{
    width: 40%;
    float: right;
  }
  .el-input{
    width: 300px;
    margin: 10px;
  }
</style>
