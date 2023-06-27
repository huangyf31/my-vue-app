<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/image/user.jpg" alt="">
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="role">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登陆时间:<span>2023.6.25</span></p>
          <p>上次登陆地点:<span>湖北武汉</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 20px;height: 400px">
        <el-table :data="tableData">
          <el-table-column v-for="(val,key) in tableLabel"
                           :key="key"
                           :prop="key"
                           :label="val">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card shadow="hover" :body-style="{display:'flex',padding:0}" v-for="item in countData" :key="item.name">
          <component
              class="icons"
              :is="item.icon"
              :style="{background:item.color}"></component>
          <div class="details">
            <p class="num">¥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
import {getCurrentInstance, onMounted, ref} from "vue";
import axios from "axios";

let tableData = ref([])
let countData = ref([])
const tableLabel = {
  name: '课程',
  todayBuy: '今日购买',
  monthBuy: '本月购买',
  totalBuy: '总购买',
}
const {proxy} = getCurrentInstance()
const getTableList = async () => {
  // await axios.get("https://www.fastmock.site/mock/117b47ba7ae2fa083c26c490ff39eae5/api/home/getTableData").then((res) => {
  //   // console.log(res)
  //   if(res.data.code == 200){
  //     tableData.value = res.data.data;
  //   }
  // });
  tableData.value = await proxy.$api.getTableData();

}
//获取首页count数据
const getCountData = async () => {
  countData.value = await proxy.$api.getCountData();
}
onMounted(() => {
  getTableList();
  getCountData();
})
</script>

<style lang="less" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }

  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;

      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }

  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card{
      width: 32%;
      margin-bottom: 20px;
    }
    .icons{
      width: 80px;
      height: 80px;
      font-size: 30px;
      text-align: center;
      line-height: 80px;
      background: #fff;
    }
    .details{
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .num{
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt{
        font-size: 14px;
        text-align: center;
        color: #999;
      }
    }
  }
}

</style>
