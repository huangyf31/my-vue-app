<template>
  <el-aside :width="$store.state.isCollapse? '180px':'64px'">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        :collapse="!$store.state.isCollapse"
        :collapse-transition="false"
    >
      <h3 v-show="$store.state.isCollapse">后台管理</h3>
      <h3 v-show="!$store.state.isCollapse">后台</h3>
      <el-menu-item :index="item.path"
                    v-for="item in noChildren()"
                    @click="clickMenu(item)"
                    :key="item.path">
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu :index="item.path"
                   v-for="item in hasChildren()"
                   :key=item.path>
        <template #title>
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="subItem.path"
                        v-for="(subItem,subIndex) in item.children"
                        :key="subIndex"
                        @click="clickMenu(subItem)">
            <component class="icons" :is="subItem.icon"></component>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
import {useRouter} from 'vue-router';

let router = useRouter();
const list = [
  {
    path: "/",
    name: "home",
    label: "首页",
    icon: "HomeFilled",
    url: "Home/Home",
  },
  {
    path: "/mall",
    name: "mall",
    label: "商品管理",
    icon: "video-play",
    url: "MallManage/MallManage",
  },
  {
    path: "/user",
    name: "user",
    label: "用户管理",
    icon: "user",
    url: "UserManage/UserManage",
  },
  {
    label: "其他",
    icon: "location",
    children: [
      {
        path: "/page1",
        name: "page1",
        label: "首页",
        icon: "setting",
        url: "Other/PageOne",
      },
      {
        path: "/page2",
        name: "page2",
        label: "首页",
        icon: "setting",
        url: "Other/PageTwo",
      },
    ],
  },
]

const noChildren = () => {
  return list.filter((item) => !item.children);
}

const hasChildren = () => {
  return list.filter((item) => item.children);
}

const clickMenu = (item) => {
  router.push({name: item.name})
}
</script>

<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
}

.el-menu {
  border-right: none;

  h3 {
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
}
</style>
