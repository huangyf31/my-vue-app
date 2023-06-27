<template>
  <div class="tags">
    <el-tag :key="tag.name"
            v-for="(tag,index) in tags"
            :closable="tag.name!=='home'"
            :disable-transitions="false"
            :effect="$route.name === tag.name?'dark':'plain'" @click="handleTag(tag)">{{ tag.label }}
    </el-tag>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {useRouter} from "vue-router"

const router = useRouter();
const store = useStore();
const tags = store.state.tableList;
const handleTag = (tag) => {
  router.push({name: tag.name});
}
</script>

<style lang="less" scoped>
.tags {
  padding: 20px;
  width: 100%;

  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
