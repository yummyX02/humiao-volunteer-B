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
              <img :src="url" alt="" srcset="" />
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
              height="75vh"
              :header-cell-style="{
                background: '#dff6ed',
                color: '#52545A',
                borderColor: '#2fc38a',
              }"
              border
            >
              <el-table-column fixed prop="name" label="用户姓名" width="120" />
              <el-table-column prop="time" label="发布时间" width="160" />
              <el-table-column
                prop="status"
                label="解决状态"
                width="120"
                :filters="[
                  { text: '未匹配', value: '未匹配' },
                  { text: '已匹配', value: '已匹配' },
                  { text: '未开始', value: '未开始' },
                  { text: '解决中', value: '解决中' },
                  { text: '已完成', value: '已完成' },
                ]"
                :filter-method="filterHandlerStatus"
                :filter-multiple="false"
              />
              <el-table-column
                prop="type"
                label="疑惑类型"
                width="180"
                :filters="[
                  { text: '心理', value: '心理' },
                  { text: '学习', value: '学习' },
                  { text: '健康', value: '健康' },
                  { text: '兴趣', value: '兴趣' },
                  { text: '生活', value: '生活' },
                ]"
                :filter-method="filterHandlerType"
                :filter-multiple="false"
              />
              <el-table-column
                prop="solveType"
                label="解决途径"
                width="120"
                :filters="[
                  { text: '线下', value: '线下' },
                  { text: '视频', value: '视频' },
                  { text: '语音', value: '语音' },
                  { text: '文字', value: '文字' },
                ]"
                :filter-method="filterHandlerWays"
                :filter-multiple="false"
              />
              <el-table-column prop="degree" label="紧急程度" width="180" />
              <el-table-column prop="question" label="具体描述" width="220" />
              <el-table-column prop="operate" label="操作" width="260">
                <template v-slot="scope">
                  <div style="display: flex; align-items: center">
                    <img
                      src="../assets/icon-dangan.png"
                      alt=""
                      style="width: 20px; height: 20px; margin-right: 5px"
                      @click="handleImageClick(scope.row, scope.$index)"
                    />
                    <a
                      @click="handlePipeiClick(scope.row, scope.$index)"
                      style="margin-right: 5px; color: red"
                      >匹配</a
                    >
                    <span>不感兴趣</span>
                  </div>
                </template>
              </el-table-column>
            </el-table>
            <!-- 用户信息弹窗 -->
            <el-dialog v-model="dialogVisible" title="用户信息">
              <!-- 头像显示在最上面一行居中 -->
              <div class="text-center">
                <img
                  :src="userInfo.headPicUrl"
                  alt="用户头像"
                  style="width: 100px; height: 100px"
                />
              </div>

              <!-- 其余信息分行显示 -->
              <div>
                <p><strong>姓名:</strong> {{ userInfo.name }}</p>
                <p><strong>年龄:</strong> {{ userInfo.age }}</p>
                <p><strong>年级:</strong> {{ userInfo.grade }}</p>
                <p><strong>籍贯:</strong> {{ userInfo.hometown }}</p>
                <!-- 其他用户信息属性 -->
              </div>
              <el-button @click="dialogVisible = false">关闭</el-button>
            </el-dialog>
          </div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>
<script lang="ts">
import axiosInstance from "@/requests";
import router from "@/router";
import { number } from "echarts";
import { ElMessage, TableColumnCtx } from "element-plus";
import localforage from "localforage";
import { defineComponent, onMounted, Ref, ref } from "vue";
export default defineComponent({
  name: "ChildProblemView",
  components: {},
  setup() {
    interface User {
      // 定义 User 类型的属性
      name: string;
      time: string;
      status: string;
      type: string;
      solveType: string;
      adress: string;
      degree: string;
      question: string;
    }
    interface MyResponseData {
      id: number;
      permission: number;
      userName: string;
      isCertification: number;
      isSetIdentity: number;
      headPicUrl: string;
      isBindParents: number;
      token: string;
    }
    // 弹窗状态
    const dialogVisible = ref(false);

    // 用户信息
    const userInfo = ref({
      name: "",
      age: "",
      grade: "",
      hometown: "",
      // 其他用户信息属性
      headPicUrl: "",
    });

    // 打开弹窗
    // const openDialog = (row: any) => {

    // };
    const navigateToHome = () => {
      router.push({ path: "/" });
    };
    let url = localStorage.getItem("headUrl"); // 头像

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
    const handleImageClick = async (row: any, $index: number) => {
      // openDialog(row);
      console.log(row, $index);
      const queryParams = {
        disabuseId: tableDataListID.value[$index],
      };
      const res = await axiosInstance.get(
        "/api/disabuse/personal-information",
        {
          params: queryParams,
        }
      );
      const res1 = await axiosInstance.post("/api/disabuse/accept", {
        params: queryParams,
      });
      console.log(res1);
      // 设置用户信息
      userInfo.value.name = row.name;
      userInfo.value.age = res.data.childProfileResult.age;
      userInfo.value.grade = res.data.childProfileResult.grade;
      userInfo.value.hometown = res.data.childProfileResult.nativePlace;
      userInfo.value.headPicUrl = res.data.childProfileResult.headPicUrl;
      // 打开弹窗
      dialogVisible.value = true;
      console.log(res);
    };

    const handlePipeiClick = async (row: any, $index: number) => {
      console.log(row, $index);
      const queryParams = {
        disabuseId: tableDataListID.value[$index],
      };
      try {
        const res1 = await axiosInstance.post(
          `/api/disabuse/accept?disabuseId=${queryParams.disabuseId}`
        );
        ElMessage.success("匹配成功");
        if (res1.data && res1.data.code === "00000") {
          // 请求成功，弹窗或者进行其他操作
          alert("匹配成功");
        } else if (res1.data && res1.data.code === "A0400") {
          // 请求失败，可以处理失败逻辑，比如弹窗提示错误信息
          alert("匹配失败：" + res1.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const userName = ref("");
    const tableData = ref([
      {
        name: "张三",
        time: "2021-05-01",
        status: "未匹配",
        type: "学习",
        solveType: "线上",
        adress: "北京",
        degree: "一般",
        question: "学习不好",
      },
      {
        name: "张三",
        time: "2021-05-01",
        status: "已解决",
        type: "学习",
        solveType: "线上",
        adress: "北京",
        degree: "一般",
        question: "学习不好",
      },
      {
        name: "张三",
        time: "2021-05-01",
        status: "已解决",
        type: "学习",
        solveType: "线上",
        adress: "北京",
        degree: "一般",
        question: "学习不好",
      },
    ]);

    const filterHandlerStatus = (
      value: string,
      row: User,
      column: TableColumnCtx<User>
    ) => {
      const property = column["property"] as keyof User; // 添加类型断言
      return row[property] === value;
    };
    const filterHandlerType = (
      value: string,
      row: User,
      column: TableColumnCtx<User>
    ) => {
      const property = column["property"] as keyof User; // 添加类型断言
      return row[property] === value;
    };
    const filterHandlerWays = (
      value: string,
      row: User,
      column: TableColumnCtx<User>
    ) => {
      const property = column["property"] as keyof User; // 添加类型断言
      return row[property] === value;
    };
    const tableDataListID: Ref<number[]> = ref([]);
    const loadData = async () => {
      try {
        const res = await axiosInstance.get("/api/disabuse-list");
        console.log(res);
        for (
          let index = 0;
          index < res.data.disabuseResultList.length;
          index++
        ) {
          const stander = res.data.disabuseResultList[index].isFinish;
          tableData.value = res.data.disabuseResultList;
          tableDataListID.value.push(res.data.disabuseResultList[index].id);
          const key = res.data.disabuseResultList[index].isNowSolve;
          switch (stander) {
            case 0:
              tableData.value[index].status = "未完成";
              break;
            case 1:
              tableData.value[index].status = "已接受";
              break;
            case 2:
              tableData.value[index].status = "已解决";
              break;
            case 3:
              tableData.value[index].status = "已完成";
              break;

            default:
              break;
          }
          switch (key) {
            case 0:
              tableData.value[index].degree = "无需立即执行";
              break;

            default:
              tableData.value[index].degree = "立即执行";
              break;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchData = async () => {
      try {
        const value = await localforage.getItem<MyResponseData>("userInfo");
        if (value) {
          userName.value = value.userName; // 更新 userName
        }
      } catch (err) {
        // 当出错时，此处代码运行
        console.error(err);
      }
    };

    onMounted(() => {
      loadData();
      fetchData();
    });
    return {
      searchUser,
      url,
      userName,
      tableData,
      filterHandlerStatus,
      filterHandlerType,
      filterHandlerWays,
      navigateToHome,
      loadData,
      navigateToChildProblem,
      navigateToProblemManage,
      navigateToChatPlatform,
      navigateToPersonal,
      handleImageClick,
      handlePipeiClick,
      dialogVisible,
      userInfo,
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