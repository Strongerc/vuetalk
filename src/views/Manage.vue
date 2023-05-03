<template>
  <div>
    <el-container style="min-height: 100vh;">
      <!--侧边栏-->
      <el-aside :width="sideWidth + 'px'" style="background-color: rgb(238, 241, 246); box-shadow: 2px 0 6px rgb(0 21 41 / 35% )">
        <Aside :isCollapse="isCollapse" :logoTextShow="logoTextShow" />
      </el-aside>
      <!--头部-->
      <el-container>
        <el-header style="border-bottom: 1px solid #ccc;">
          <Header :collapseBtnClass="collapseBtnClass" @asideCollapse="collapse" :user="user" />
        </el-header>

        <el-main>
          <!--          表示当前页面的子路由会在<router-view />里面展示-->
          <router-view @refreshUser="getUser" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from '@/components/Aside'
import Header from '@/components/Header.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Manage',
  props: {},
  data() {
    return {
      // 放于header的折叠图标
      collapseBtnClass: 'el-icon-s-fold',
      //   用于收缩和展开
      isCollapse: false,
      sideWidth: 200,
      //   是否展示标题
      logoTextShow: true,
      user: {},
    }
  },
  created() {
    // 从后台获取最新的User数据
    this.getUser()
  },
  methods: {
    collapse() {
      //点击收缩按钮触发
      this.isCollapse = !this.isCollapse
      if (this.isCollapse) {
        //收缩
        this.sideWidth = 64
        this.collapseBtnClass = 'el-icon-s-unfold'
        this.logoTextShow = false
      } else {
        //展开
        this.sideWidth = 200
        this.collapseBtnClass = 'el-icon-s-fold'
        this.logoTextShow = true
      }
    },
    getUser() {
      let username = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')).username
        : ''
      //从后台获取User数据
      this.request.get('user/username/' + username).then((res) => {
        //从新赋值后台的最新User数据
        this.user = res.data
      })
    },
  },
  components: {
    Aside,
    Header,
  },
}
</script>

<style scoped>
.headerBg {
  background: antiquewhite !important;
}
</style>
