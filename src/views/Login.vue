<template>
  <el-form :model="loginForm" class="login-container">
    <h3>系统登陆</h3>
    <el-form-item>
      <el-input type="input" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" >
        登陆
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup >

</script>

<style lang="less" scoped>
.login-container{
  width: 350px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  padding: 35px 35px 15px 35px;
  box-shadow: 0 0 25px #cacaca;
  margin: 180px auto;
  h3{
    text-align: center;
    margin-bottom: 20px;
    color: #505450;
  }
  .el-form-item_content{
    justify-content: center;
  }
}
</style>
