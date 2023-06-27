<template>
  <div class="common-layout">
    <el-container>
      <common-aside></common-aside>
      <el-container class="el-container">
        <common-header></common-header>
        <common-tab></common-tab>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import CommonHeader from "../components/CommonHeader.vue"
import CommonAside from "../components/CommonAside.vue"
import CommonTab from "../components/CommonTab.vue"
</script >
<style lang="less" scoped>
.el-container{
  flex-wrap: wrap;
  align-items: flex-start;
}
.common-layout{
  height: 100%;
  & > .el-container{
    flex-wrap: nowrap;
    height: 100%;
    & > .el-aside{
      height: 100%;
      background-color: #545c64;
    }
  }
}
</style>
