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
                default-active="2"
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
                  <span>首页</span>
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
          <div class="topBar">
            <el-row>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple">
                  <p
                    style="
                      text-align: left;
                      padding: 5px;
                      color: black;
                      font-weight: bold;
                    "
                  >
                    解惑数据统计
                  </p>
                  <div class="dataDetail">
                    <img
                      src="../assets/statistics-blue.png"
                      alt=""
                      style="width: 45px; height: 45px"
                    />
                    <div class="dataNum">
                      <p class="statusText">未开始</p>
                      <p style="color: #1296db">
                        {{ disabuseResultList.notStart }}
                      </p>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="1"
                ><p style="height: 20px; padding: 2px; visibility: hidden"></p>
                <div class="space"></div
              ></el-col>
              <el-col :span="4"
                ><div class="grid-content ep-bg-purple">
                  <p style="text-align: left; padding: 5px; visibility: hidden">
                    解惑数据统计
                  </p>
                  <div class="dataDetail">
                    <img
                      src="../assets/statistics-red.png"
                      alt=""
                      style="width: 45px; height: 45px"
                    />
                    <div class="dataNum">
                      <p class="statusText">解决中</p>
                      <p style="color: #fc1b39">
                        {{ disabuseResultList.solving }}
                      </p>
                    </div>
                  </div>
                </div></el-col
              >
              <el-col :span="1"
                ><p style="height: 20px; padding: 2px; visibility: hidden"></p>
                <div class="space"></div
              ></el-col>
              <el-col :span="4"
                ><div class="grid-content ep-bg-purple">
                  <p style="text-align: left; padding: 5px; visibility: hidden">
                    解惑数据统计
                  </p>
                  <div class="dataDetail">
                    <img
                      src="../assets/statistics-orange.png"
                      alt=""
                      style="width: 45px; height: 45px"
                    />
                    <div class="dataNum">
                      <p class="statusText">已完成</p>
                      <p style="color: #f98700">
                        {{ disabuseResultList.solved }}
                      </p>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="1"
                ><p style="height: 20px; padding: 2px; visibility: hidden"></p>
                <div class="space"></div
              ></el-col>
              <el-col :span="4"
                ><div class="grid-content ep-bg-purple">
                  <p style="text-align: left; padding: 5px; visibility: hidden">
                    解惑数据统计
                  </p>
                  <div class="dataDetail">
                    <img
                      src="../assets/statistics-green.png"
                      alt=""
                      style="width: 45px; height: 45px"
                    />
                    <div class="dataNum">
                      <p class="statusText">疑问总数</p>
                      <p style="color: #20d72d">
                        {{ disabuseResultList.total }}
                      </p>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="1"
                ><p style="height: 20px; padding: 2px; visibility: hidden"></p>
                <div class="space"></div
              ></el-col>
              <el-col :span="4"
                ><div class="grid-content ep-bg-purple">
                  <p style="text-align: left; padding: 5px; visibility: hidden">
                    解惑数据统计
                  </p>
                  <div class="dataDetail">
                    <img
                      src="../assets/statistics-purple.png"
                      alt=""
                      style="width: 45px; height: 45px"
                    />
                    <div class="dataNum">
                      <p class="statusText">日增疑问数</p>
                      <p style="color: #6820d7">
                        {{ disabuseResultList.dayAdd }}
                      </p>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="midBar">
            <div class="left">
              <div class="topDetail">
                <p style="text-align: left; color: black; font-weight: bold">
                  个人解惑详情
                </p>
                <el-row :gutter="15">
                  <el-col :span="7"
                    ><div class="grid-content ep-bg-purple">
                      <div class="mapNoStart Pie-chart">
                        <div
                          id="noStart"
                          style="width: 100%; height: 300px"
                        ></div>
                      </div>
                      <p>未开始</p>
                    </div>
                  </el-col>
                  <el-col :span="1"></el-col>
                  <el-col :span="7"
                    ><div class="grid-content ep-bg-purple">
                      <div class="mapSolving Pie-chart">
                        <div
                          id="solving"
                          style="width: 100%; height: 300px"
                        ></div>
                      </div>
                      <p>解决中</p>
                    </div>
                  </el-col>
                  <el-col :span="1"></el-col>
                  <el-col :span="7"
                    ><div class="grid-content ep-bg-purple">
                      <div class="mapSolved Pie-chart">
                        <div
                          id="solved"
                          style="width: 100%; height: 300px"
                        ></div>
                      </div>
                      <p>已完成</p>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="space1"></div>
              <div class="bottomDetail">
                <el-row :gutter="20">
                  <el-col :span="16" class="platFormBox"
                    ><p
                      style="text-align: left; color: black; font-weight: bold"
                    >
                      平台解惑增长详情
                    </p>
                    <div class="grid-content ep-bg-purple">
                      <div class="mapPlatformAdd">
                        <div
                          id="platformAdd"
                          style="width: 100%; height: 300px"
                        ></div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="0.5" class="space"></el-col>
                  <el-col :span="6" class="childDetilBox">
                    <p
                      style="text-align: left; color: black; font-weight: bold"
                    >
                      平台儿童数量详情
                    </p>
                    <div class="grid-content ep-bg-purple">
                      <div class="mapTotalNum">
                        <div
                          id="totalNum"
                          style="width: 100%; height: 300px"
                        ></div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="right">
              <div class="pending-task">
                <div class="nav">
                  <div class="title">
                    <img
                      src="../assets/icon-task.png"
                      alt=""
                      style="width: 30px; height: 30px"
                    />
                    <p style="color: black; font-weight: bold">待办事项</p>
                  </div>
                  <div class="add" @click="showAddDialog">
                    <img
                      src="../assets/icon-add.png"
                      alt=""
                      style="width: 30px; height: 30px"
                    />
                  </div>
                </div>
                <div class="myCalender">
                  <el-calendar style="color: black" v-model="myCalender">
                    <template v-slot:dateCell="slotProps">
                      <div
                        @click="viewDayWork(slotProps.data)"
                        v-popover:popover
                      >
                        <p
                          :class="
                            slotProps.data.isSelected ? 'is-selected' : ''
                          "
                        >
                          {{ slotProps.data.day.split("-").slice(2).join() }}
                          {{ slotProps.data.isSelected ? "✔️" : "" }}
                        </p>
                      </div>
                    </template>
                  </el-calendar>
                </div>
                <el-dialog
                  title="添加事件"
                  v-model="dialogVisible"
                  width="30%"
                  @close="clearForm"
                >
                  <el-form :model="eventForm" rules="eventFormRules">
                    <el-form-item label="日期">
                      <el-date-picker
                        v-model="eventForm.date"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      ></el-date-picker>
                    </el-form-item>

                    <el-form-item label="主题">
                      <el-input
                        v-model="eventForm.theme"
                        placeholder="输入待办事项内容"
                        clearable
                      ></el-input>
                    </el-form-item>

                    <el-form-item>
                      <el-button type="primary" @click="addEvents"
                        >保存</el-button
                      >
                    </el-form-item>
                  </el-form>
                </el-dialog>
                <div class="line"></div>
                <div class="styleArea">
                  <p>{{ styleArea }}</p>
                </div>
              </div>
              <div class="message">
                <div class="nav">
                  <div class="title">
                    <img
                      src="../assets/icon-message.png"
                      alt=""
                      style="width: 30px; height: 30px"
                    />
                    <p style="color: black; font-weight: bold">消息通知</p>
                  </div>
                </div>
                <div class="line"></div>
                <div class="messageBox">
                  <div class="mesInfo">
                    <img
                      src="../assets/icon-child.png"
                      alt=""
                      style="width: 30px; height: 30px"
                    />
                    <div class="mesDetail">
                      <div class="top">
                        <div class="name">王护</div>
                        <div class="time">14:18</div>
                      </div>
                      <div class="bottom">
                        <p>志愿者哥哥，这个字怎么念？</p>
                        <div class="num">
                          <span>1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="line"></div>
                  <div class="mesInfo">
                    <img
                      src="../assets/icon-child.png"
                      alt=""
                      style="width: 30px; height: 30px"
                    />
                    <div class="mesDetail">
                      <div class="top">
                        <div class="name">王苗</div>
                        <div class="time">12:39</div>
                      </div>
                      <div class="bottom">
                        <p>志愿者哥哥，这道题怎么写？</p>
                        <div class="num">
                          <span>1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script lang="ts">
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
import { defineComponent, onBeforeMount, onMounted, reactive, ref } from "vue";
import * as echarts from "echarts";
import router from "@/router";
import localforage from "localforage";
import axiosInstance from "@/requests";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "HomeView",
  components: {},
  setup() {
    //配置Echarts
    const noStartData = ref([
      { value: 1048, name: "身体" },
      { value: 735, name: "学习" },
      { value: 580, name: "兴趣" },
      { value: 484, name: "心理" },
    ]);
    const solvedData = ref([
      { value: 1048, name: "身体" },
      { value: 735, name: "学习" },
      { value: 580, name: "兴趣" },
      { value: 484, name: "心理" },
    ]);
    const solvingData = ref([
      { value: 1048, name: "身体" },
      { value: 735, name: "学习" },
      { value: 580, name: "兴趣" },
      { value: 484, name: "心理" },
    ]);
    const option4Data = ref([
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ]);
    const echartInit = () => {
      var myChart1 = echarts.init(document.getElementById("noStart"));
      const option1 = ref({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "2%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: noStartData,
          },
        ],
      });
      var myChart2 = echarts.init(document.getElementById("solving"));
      const option2 = ref({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "2%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: solvingData,
          },
        ],
      });
      var myChart3 = echarts.init(document.getElementById("solved"));
      const option3 = ref({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "2%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: solvedData,
          },
        ],
      });
      var myChart4 = echarts.init(document.getElementById("platformAdd"));
      const option4 = ref({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["学习", "心理", "兴趣", "健康", "感情"],
        },
        grid: {
          left: "3%",
          right: "5%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: option4Data,
      });
      var myChart5 = echarts.init(document.getElementById("totalNum"));
      var option5 = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          formatter: function (name: string) {
            var dataItem = childTotalNum.value.find(function (item) {
              return item.name === name;
            });
            if (dataItem) {
              var percent =
                ((dataItem.value / dataItem.count) * 100).toFixed(2) + "%";
              // return name + " (" + percent + ", " + dataItem.count + " 人)";
              return name + " (" + dataItem.count + " 人)";
            }

            return name;
          },
        },
        series: [
          {
            name: "儿童数量",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 30,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 8, name: "男" },
              { value: 1, name: "女" },
            ],
          },
        ],
      };
      option1 && myChart1.setOption(option1.value);
      option2 && myChart2.setOption(option2.value);
      option3 && myChart3.setOption(option3.value);
      option4 && myChart4.setOption(option4.value);
      option5 && myChart5.setOption(option5);
    };
    const userName = ref("");
    let url = localStorage.getItem("headUrl"); // 头像
    const token = ref("");
    const dialogVisible = ref(false);
    const eventForm = reactive({
      date: "",
      theme: "",
    });
    const eventFormRules = {
      date: [{ required: true, message: "请选择日期", trigger: "blur" }],
      theme: [{ required: true, message: "请输入主题", trigger: "blur" }],
    };
    const myCalender = ref("");

    const viewDayWork = async (data: { day: any }) => {
      // 处理点击事件
      console.log("Clicked on date:", data.day);
      //将data.day转换时间戳
      const targetDate = new Date(data.day).getTime().toString();
      console.log('targetDate', targetDate);
      
      const res = await axiosInstance.post("/api/getTodoList/b", targetDate);
      if(res){
        console.log(res.data);
        styleArea.value = res.data.theme;
      }
    };

    const fetchData = async () => {
      try {
        const value = await localforage.getItem<MyResponseData>("userInfo");
        if (value) {
          userName.value = value.userName; // 更新 userName
          token.value = value.token;
        }
      } catch (err) {
        // 当出错时，此处代码运行
        console.error(err);
      }
    };

    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const disabuseResultList = ref({
      notStart: 0,
      solving: 0,
      solved: 0,
      total: 0,
      dayAdd: 0,
    });
    const childTotalNum = ref([
      { name: "男", value: 8, count: 8 },
      { name: "女", value: 1, count: 1 },
    ]);

    const styleArea = ref("继续解决刘聪聪小朋友关于校园暴力的问题");
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

    const loadData = async () => {
      try {
        const [responseA, responseB, responseC, responseD] = await Promise.all([
          axiosInstance.get("/api/disabuse-data/b"),
          axiosInstance.get("/api/disabuse-data/b"),
          axiosInstance.get("/api/disabuse-show/b "),
          axiosInstance.get("/api/childNumber/b "),
        ]);

        console.log(responseA);
        console.log(responseB);
        console.log(responseC);
        console.log(responseD);
        //解惑数据统计
        disabuseResultList.value.notStart = responseA.data.unStart;
        disabuseResultList.value.solving = responseA.data.solving;
        disabuseResultList.value.solved = responseA.data.finished;
        disabuseResultList.value.total = responseA.data.total;
        disabuseResultList.value.dayAdd = responseA.data.todayAddNumber;
        //个人解惑详情

        noStartData.value[0].value =
          responseB.data.disabuseDataTypeResults[0].psychologyNumber;
        noStartData.value[1].value =
          responseB.data.disabuseDataTypeResults[0].studyNumber;
        noStartData.value[2].value =
          responseB.data.disabuseDataTypeResults[0].interestNumber;
        noStartData.value[3].value =
          responseB.data.disabuseDataTypeResults[0].healthNumber;
        solvingData.value[0].value =
          responseB.data.disabuseDataTypeResults[1].psychologyNumber;
        solvingData.value[1].value =
          responseB.data.disabuseDataTypeResults[1].studyNumber;
        solvingData.value[2].value =
          responseB.data.disabuseDataTypeResults[1].interestNumber;
        solvingData.value[3].value =
          responseB.data.disabuseDataTypeResults[1].healthNumber;
        solvedData.value[0].value =
          responseB.data.disabuseDataTypeResults[2].psychologyNumber;
        solvedData.value[1].value =
          responseB.data.disabuseDataTypeResults[2].studyNumber;
        solvedData.value[2].value =
          responseB.data.disabuseDataTypeResults[2].interestNumber;
        solvedData.value[3].value =
          responseB.data.disabuseDataTypeResults[2].healthNumber;

        //平台解惑增长详情
        for (
          let index = 0;
          index < responseC.data.showDisabuseResultList.length;
          index++
        ) {
          option4Data.value[index].name =
            responseC.data.showDisabuseResultList[index].type;
          option4Data.value[index].data =
            responseC.data.showDisabuseResultList[index].list;
        }

        //平台儿童数量详情
        childTotalNum.value[0].count = responseD.data.male;
        childTotalNum.value[1].count = responseD.data.female;
        echartInit();
      } catch (error) {
        console.error("请求错误:", error);
      }
    };

    const addEvents = async () => {
      try {
        //将获取的日期转换字符串形式的时间戳
        const timestamp = new Date(eventForm.date).getTime().toString();
        eventForm.date = timestamp;
        const res = await axiosInstance.post("/api/addTodoList/b", eventForm);
        if (res) {
          ElMessage.success("添加成功");
          dialogVisible.value = false;
          clearForm();
        }
      } catch (err) {
        // 当出错时，此处代码运行
        console.error(err);
      }
    };
    const showAddDialog = () => {
      dialogVisible.value = true;
    };
    const clearForm = () => {
      eventForm.date = "";
      eventForm.theme = "";
    };

    onBeforeMount(() => {
      console.log("HomeView onBeforeMount");
      url = localStorage.getItem("headUrl"); // 头像
      console.log(url);
    });
    onMounted(() => {
      loadData();
      fetchData();
    });

    return {
      userName,
      disabuseResultList,
      childTotalNum,
      styleArea,
      url,
      dialogVisible,
      eventForm,
      eventFormRules,
      myCalender,
      echartInit,
      showAddDialog,
      addEvents,
      viewDayWork,
      handleOpen,
      clearForm,
      handleClose,
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
  background-color: #e9f3ef;
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
      color: #fff;
      height: 100%;
      width: 100%;
      .topBar {
        padding: 10px;
        margin: 15px;
        background-color: #ffffff;
        .ep-bg-purple {
          height: 100px;
          width: 100%;
        }
        .space {
          width: 2px;
          height: 50px;
          background-color: #888;
          margin: 0 auto;
        }
        .dataDetail {
          display: flex;
          justify-content: center;
          align-items: center;
          .dataNum {
            display: flex;
            flex-direction: column;
            margin-right: 50px;
            margin-left: 20px;
            .statusText {
              margin-bottom: 10px;
              color: #888;
            }
          }
        }
      }
      .midBar {
        display: flex;
        padding: 10px;
        .left {
          width: 130vh;
          background-color: #ffffff;
          height: 100%;
          .grid-content {
            width: 280px;
            margin: 10px 20px 10px 20px;
            color: #000000;
            .Pie-chart {
              background-color: #f2f2f2;
              color: #000000;
            }
          }
          .space1 {
            height: 10px;
            background-color: #e9f3ef;
          }
          .bottomDetail {
            padding: 10px;
            background-color: #fff;
            .space {
              background-color: #e9f3ef;
            }
            .ep-bg-purple {
              background-color: #ffffff;
              width: 100%;
            }
          }
        }
        .right {
          width: 50vh;
          margin: 0 10px 10px 15px;
          background-color: #fff;
          .message {
            .title {
              display: flex;
              align-items: center;
              margin: 10px 0 10px 10px;
              padding: 8px;
              background-color: #c6eedf;
              width: 200px;
              border-radius: 5px 5px 20px 5px;
            }
            .line {
              width: 100%;
              height: 2px;
              background-color: #888;
            }
            .messageBox {
              display: flex;
              flex-direction: column;
              .mesInfo {
                width: 100%;
                height: 50px;
                margin: 5px 5px 5px 10px;
                display: flex;
                color: #000000;
                justify-content: flex-start;
                .mesDetail {
                  display: flex;
                  flex-direction: column;
                  margin-left: 10px;
                  .top {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    margin-left: 5px;
                    .name {
                      margin-right: 10px;
                      height: 20px;
                    }
                    .time {
                      margin-left: 10px;
                      height: 20px;
                      margin-left: 240px;
                    }
                  }
                  .bottom {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 10px;
                    p {
                      color: #888;
                      font-size: 12px;
                    }
                    .num {
                      //红色圆形
                      width: 15px;
                      height: 16px;
                      border-radius: 50%;
                      background-color: #fc1b39;
                      text-align: center;
                      color: #fff;
                      font-size: 14px;
                    }
                  }
                }
              }
            }
          }
          .pending-task {
            .line {
              width: 100%;
              height: 2px;
              background-color: #888;
            }
            .styleArea {
              margin-top: 10px;
              height: 50px;
              color: #000000;
            }
            .myCalender/deep/ .el-calendar-table .el-calendar-day {
              width: 60px;
              height: 40px;
            }

            .nav {
              display: flex;
              align-items: center;
              justify-content: space-between;
              .title {
                display: flex;
                align-items: center;
                margin: 10px 0 10px 10px;
                padding: 8px;
                background-color: #c6eedf;
                width: 200px;
                border-radius: 5px 5px 20px 5px;
                p {
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
