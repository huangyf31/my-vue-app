<template>
  <div class="tags">
    <el-tag :key="tag.name"
            v-for="(tag,index) in tags"
            :closable="tag.name!=='home'"
            :disable-transitions="false"
            :effect="$route.name === tag.name?'dark':'plain'"
            @click="handleTag(tag)"
            @close="closeTag(tag,index)">{{ tag.label }}
    </el-tag>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {useRouter,useRoute} from "vue-router"
const route = useRoute();
const router = useRouter();
const store = useStore();
const tags = store.state.tableList;
const handleTag = (tag) => {
  router.push({name: tag.name});
}
//关闭tag
const closeTag = (tag, index) => {
  let length = tags.length - 1;
  store.commit('closeTab',tag);
  //做第一个判断
  if(tag.name !== route.name){
    return ;
  }
  if(index === length){
    router.push({name:tags[index-1].name});
  }else {
    router.push({name:tags[index].name});
  }
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
