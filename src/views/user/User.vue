<template>
  <div class="user-header">
    <el-button type="primary"  @click="dialogVisible=true">+新增</el-button>
    <el-form :inline="true" :model="formInline">
      <el-form-item label="请输入">
        <el-input v-model="formInline.keyword" placeholder="请输入用户名"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch()">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="table">
    <el-table :data="list" style="width: 100%" height="500px">
      <el-table-column
          v-for="item in tableLabel"
          :key="item.prop"
          :label="item.label"
          :prop="item.prop"
          :width="item.width?item.width:125"
      />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default>
          <el-button size="small"
          >编辑
          </el-button
          >
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="config.total"
        class="pager"
        @current-change="clickPage"
    />
  </div>
  <el-dialog
      v-model="dialogVisible"
      title="新增用户"
      width="35%"
      :before-close="handleClose"
  >
    <el-form :inline="true" :model="formUser" ref="userForm">
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="formUser.name" placeholder="请输入姓名"/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="年龄" prop="age">
            <el-input v-model="formUser.age" placeholder="请输入年龄"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="性别" prop="sex">
            <el-select
                v-model="formUser.sex"
                placeholder="请选择"
                clearable
            >
              <el-option label="男" value="0"/>
              <el-option label="女" value="1"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出生日期" prop="birth">
            <el-date-picker
                v-model="formUser.birth"
                type="date"
                placeholder="请输入出生日期"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="formUser.addr" placeholder="请输入地址"/>
        </el-form-item>
      </el-row>
      <el-row style="justify-content: flex-end">
        <el-form-item>
          <el-button type="primary" @click="dialogVisible=false">取消</el-button>
          <el-button type="primary" @click="onSubmit">确定</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </el-dialog>
</template>

<script setup>

import {getCurrentInstance, onMounted, reactive, ref} from "vue";
import {ElMessageBox} from "element-plus";

const {proxy} = getCurrentInstance();
const list = ref([]);
const tableLabel = reactive([
  {
    prop: "name",
    label: "姓名",
  },
  {
    prop: "age",
    label: "年龄",
  },
  {
    prop: "sexLabel",
    label: "性别",
  },
  {
    prop: "birth",
    label: "出生日期",
    width: 200,
  },
  {
    prop: "addr",
    label: "地址",
    width: 320,
  }
])
const config = reactive({
  total: 0,
  page: 1,
  name: ''
})
const formInline = reactive({
  keyword: "",
})
const dialogVisible = ref(false);
const getUserData = async (config) => {
  let res = await proxy.$api.getUserData(config);
  // console.log(res)
  config.total = res.count;
  list.value = res.list.map((item) => {
    item.sexLabel = item.sex === 1 ? '男' : '女'
    return item;
  })
}
const clickPage = (page) => {
  config.page = page;
  getUserData(config);
}
const handleSearch = () => {
  config.name = formInline.keyword;
  getUserData(config);
}
const handleClose = (done) => {
  ElMessageBox.confirm("确定关闭吗？")
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
}
//添加用户的form数据
const formUser = reactive({
  name: "",
  age: "",
  sex: "",
  birth: "",
  addr: "",
})
const timeFormat = (time) => {
  let time1 = new Date(time);
  let year = time1.getFullYear();
  let month = time1.getMonth() + 1;
  let date = time1.getDate();

  function add(m) {
    return m < 10 ? "0" + m : m;
  }

  return year + "-" + add(month) + "-" + add(date);
}
//添加用户
const onSubmit = async () => {
  formUser.birth = timeFormat(formUser.birth);
  let res = await proxy.$api.addUser(formUser);
  console.log(res);
  if (res) {
    dialogVisible.value = false;
    proxy.$refs.userForm.resetFields();
  }
}
onMounted(() => {
  getUserData(config);
})
</script>

<style lang="less" scoped>
.table {
  position: relative;
  height: 520px;

  .pager {
    position: absolute;
    right: 0;
    bottom: -20px;
  }
}

.user-header {
  display: flex;
  justify-content: space-between;
}
</style>
