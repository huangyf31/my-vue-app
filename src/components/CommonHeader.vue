<template>
  <el-header>
    <div class="l-content">
      <el-button size="small" @click="handleCollapse()">
        <el-icon :size="20">
          <Menu/>
        </el-icon>
      </el-button>
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" :src="getImgSrc('user')" alt="">
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup>
import {useStore} from 'vuex'
import {computed} from "vue";

const store = useStore();
const getImgSrc = (user) => {
  return new URL(`../assets/image/${user}.jpg`, import.meta.url).href;
};
const handleCollapse = () => {
  store.commit('updateIsCollapse');
}
//计算属性
const current = computed(() => {
  return store.state.currentMenu;
})


</script>

<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #333;
}

.user {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.l-content {
  display: flex;
  align-items: center;

  .el-button {
    margin-right: 20px;
  }

  h3 {
    color: #fff;
  }
}

.bread /deep/ span {
  color: #fff !important;
  cursor: pointer !important;
}
</style>
