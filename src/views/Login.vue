<template>
  <div class="wrapper">
    <div style="
          margin: 200px auto;
          background-color: #fff;
          width: 350px;
          height: 300px;
          padding: 20px;
          border-radius: 10px;
        ">
      <div style="margin: 20px 0; text-align: center; font-size: 24px">
        <b>登 录</b>
      </div>
      <!-- el-form 用于校验表单 -->
      <el-form :model="user" :rules="rules" ref="userForm">
        <el-form-item prop="username">
          <el-input size="medium" style="margin: 10px 0" prefix-icon="el-icon-user" v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input size="medium" style="margin: 10px 0" prefix-icon="el-icon-lock" show-password v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item style="margin: 10px 0; text-align: right">
          <el-button type="primary" size="small" autocomplete="off" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  props: {},
  data() {
    return {
      user: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 1,
            max: 20,
            message: '长度在 1 到 20 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    // 登录时，需要将用户信息存进浏览器
    login() {
      this.$refs['userForm'].validate((valid) => {
        if (valid) {
          // 表单校验合法
          this.request.post('/user/login', this.user).then((res) => {
            if (res.code === '200') {
              localStorage.setItem('user', JSON.stringify(res.data)) // 存储用户信息到浏览器
              this.$message.success('登录成功')
              this.$router.push('/')
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      })
    },
  },
  components: {},
}
</script>

<style scoped>
.wrapper {
  height: 100vh;
  background-image: linear-gradient(to bottom right, #fc466b, #3f5efb);
  overflow: hidden;
}
</style>
