<template>
  <el-scrollbar class="myScrollbar" style="height: 100vh">
    <div class="common-layout">
      <el-container>
        <el-header class="headerBox">
          <div class="title">
            <h1>留守儿童关爱守护</h1>
            <h1>志愿平台</h1>
          </div>
          <div class="user">
            <div class="icon-user">
              <img src="../assets/icon-user.png" alt="" srcset="" />
            </div>
            <h4>{{ userName }}</h4>
          </div>
        </el-header>
      </el-container>
      <div class="info">
        <div class="asideBox">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                background-color="#202020"
                class="el-menu-vertical-demo"
                text-color="#fff"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item index="2" class="fatherMenu">
                  <img
                    src="../assets/icon-img.png"
                    alt=""
                    style="width: 20px; height: 20px; margin-right: 5px"
                  />
                  <span @click="navigateToHome">首页</span>
                </el-menu-item>
                <el-sub-menu index="1" class="fatherMenu">
                  <template #title>
                    <img
                      src="../assets/icon-img.png"
                      alt=""
                      style="width: 20px; height: 20px; margin-right: 5px"
                    />
                    <span>解惑</span>
                  </template>
                  <el-menu-item index="1-1" @click="navigateToChildProblem"
                    >儿童问题池</el-menu-item
                  >
                  <el-menu-item index="1-2" @click="navigateToProblemManage"
                    >问题列表管理</el-menu-item
                  >
                  <el-menu-item index="1-3" @click="navigateToChatPlatform"
                    >交流互助论坛</el-menu-item
                  >
                </el-sub-menu>
                <el-sub-menu
                  index="3"
                  class="fatherMenu"
                  @click="navigateToPersonal"
                >
                  <template #title>
                    <img
                      src="../assets/icon-img.png"
                      alt=""
                      style="width: 20px; height: 20px; margin-right: 5px"
                    />
                    <span>个人中心</span>
                  </template>
                </el-sub-menu>
              </el-menu>
            </el-col>
          </el-row>
        </div>
        <div class="mainBox">
          <div class="topInfo">
            <div class="left">
              <button class="recommend">系统推荐</button>
              <button class="checkAll">查看全部</button>
            </div>
            <div class="right">
              <el-input
                v-model="searchUser"
                class="w-50 m-2"
                size="large"
                placeholder="请输入用户名"
                clearable
                ><template #prepend>
                  <img
                    src="../assets/icon-search.png"
                    alt=""
                    srcset=""
                    style="width: 20px; height: 20px"
                  />
                </template>
              </el-input>
            </div>
          </div>
          <div class="line"></div>
          <div class="mainInfo">
            <el-table
              :data="tableData"
              style="width: 100%"
              height="250"
              :header-cell-style="{
                background: '#dff6ed',
                color: '#52545A',
                borderColor: '#2fc38a',
              }"
              border
            >
              <el-table-column fixed prop="user" label="用户姓名" width="120" />
              <el-table-column prop="time" label="发布时间" width="160" />
              <el-table-column prop="status" label="解决状态" width="120" />
              <el-table-column prop="type" label="疑惑类型" width="120" />
              <el-table-column prop="ways" label="解决途径" width="120" />
              <el-table-column prop="adress" label="地点" width="120" />
              <el-table-column prop="degree" label="紧急程度" width="120" />
              <el-table-column prop="describe" label="具体描述" width="220" />
              <el-table-column prop="operate" label="操作" width="260">
                <template v-slot="scope">
                  <a @click="handleImageClick(scope.row)">处理解惑</a>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>
<script lang="ts">
import router from "@/router";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ChatPlatform",
  components: {},
  setup() {
    const navigateToHome = () => {
      router.push({ path: "/" });
    };
    const searchUser = ref("");
    const navigateToChildProblem = () => {
      router.push("/childProblem");
    };
    const navigateToProblemManage = () => {
      router.push("/problemManage");
    };
    const navigateToChatPlatform = () => {
      router.push("/chatPlatform");
    };
    const navigateToPersonal = () => {
      router.push("/personal");
    };
    const userName = "张三";
    return {
      searchUser,
      userName,
      navigateToHome,
      navigateToChildProblem,
      navigateToProblemManage,
      navigateToChatPlatform,
      navigateToPersonal,
    };
  },
});
</script>

<style lang="less" scoped>
.myScrollbar {
  &::-webkit-scrollbar {
    width: 6px; /* 滚动条宽度 */
    height: 6px; /* 滚动条高度 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* 滑块的背景色 */
    border-radius: 3px; /* 滑块的圆角 */
  }
}
//element ui 样式修改
.el-menu {
  border-right: 0;
}
.el-menu-item:hover {
  background-color: #202020;
  color: #fff;
}
.el-menu-item.is-active {
  background-color: #202020;
  color: #fff;
}
.el-menu-item {
  background-color: #000000;
}
.fatherMenu.is-active {
  background-color: #0bb976;
  color: #fff;
}
.common-layout {
  height: 100%;
  .headerBox {
    background-color: #212121;
    color: #fff;
    display: flex;
    justify-content: space-between;
    .title {
      display: flex;
      align-items: center;
      height: 60px;
      margin-left: 25px;
      h1 {
        font-size: 20px;
        margin-right: 20px;
      }
    }
    .user {
      display: flex;
      align-items: center;
      height: 60px;
      .icon-user {
        img {
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }
      }
      h4 {
        font-size: 18px;
      }
    }
  }
  .info {
    display: flex;
    .asideBox {
      background-color: #202020;
      color: #fff;
      height: 80vh;
      width: 200px;
    }
    .mainBox {
      width: 100%;
      height: 100%;
      .topInfo {
        background-color: #fff;
        height: 60px;
        display: flex;
        justify-content: space-between;
        margin: 0 20px 5px 20px;
        padding: 5px;
        border-bottom: 1px solid #d3d3d3;
        .left {
          display: flex;
          align-items: center;
          .checkAll {
            width: 100px;
            height: 30px;
            border-radius: 5px;
            margin-right: 10px;
            background-color: #a7a3a3;
            border: none;
            color: #fff;
          }
          .recommend {
            width: 100px;
            height: 30px;
            border-radius: 5px;
            margin-right: 10px;
            background-color: #2fc38a;
            border: none;
            color: #fff;
          }
        }
        .right {
          display: flex;
          align-items: center;
        }
      }
      .line {
        height: 2px;
        background-color: #d3d3d3;
        margin: 0 20px;
      }
      .mainInfo {
        margin: 5px 20px 10px 20px;
      }
    }
  }
}
</style>