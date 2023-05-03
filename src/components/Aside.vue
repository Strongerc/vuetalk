<template>
  <el-menu :default-openeds="opens" style="min-height: 100%; overflow-x: hidden" background-color="rgb(48, 65, 86)" text-color="#fff"
           active-text-color="#ffd04b" :collapse-transition="false" :collapse="isCollapse" router>
    <div style="height: 60px; line-height: 60px; text-align: center">
      <img src="../assets/logo.png" alt="" style="width: 20px; position: relative; top: 5px; margin-right: 5px">
      <b style="color: white" v-show="logoTextShow">后台管理系统</b>
    </div>
    <el-menu-item index="/home">
      <template slot="title">
        <i class="el-icon-house"></i>
        <span slot="title">主页</span>
      </template>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">系统管理</span>
      </template>
      <el-menu-item index="/user">
        <i class="el-icon-s-custom"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Aside',
  props: {
    // v-model绑定 用于展开收起
    isCollapse: Boolean,
    // v-if是否展示标题
    logoTextShow: Boolean,
  },
  data() {
    return {}
  },
  methods: {},
  components: {},
}
</script>

<style scoped lang="less">
/*解决收缩菜单文字不消失问题*/
.el-menu--collapse span {
  visibility: hidden;
}
</style>
