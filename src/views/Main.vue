<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <common-aside></common-aside>
      <el-container>
        <common-header></common-header>
        <common-tab></common-tab>
        <el-main class="right-main">
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
</script>
<style lang="less" scoped>
.el-container {
  flex-wrap: wrap;
  align-items: flex-start;
  height: 100%;
}

.common-layout {
  .lay-container {
    flex-wrap: nowrap;

    .right-main {
      height: calc(100% - 124px) !important;
    }
  }

  & > .el-container {
    height: 100%;

    & > .el-aside {
      height: 100%;
      background-color: #545c64;
    }
  }
}
</style>
