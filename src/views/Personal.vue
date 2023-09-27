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
              <img :src="user.url" alt="" srcset="" />
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
          <div class="top">
            <div class="left">
              <div class="avl">
                <el-avatar :size="100" :src="circleUrl" />
              </div>
              <div class="per">
                <div class="info">
                  <span>用户名：</span>
                  <div class="xiugai">
                    <span>{{ user.name }}</span>
                    <span @click="ModifyName" class="xiu">修改</span>
                  </div>
                </div>
                <div class="info">
                  <span>账户ID：</span>
                  <span>{{ user.id }}</span>
                </div>
                <div class="info">
                  <span>注册时间：</span>
                  <span>{{ user.time }}</span>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="info">
                <span>实名认证：</span>
                <span class="identify">{{ user.identify }}</span>
              </div>
              <div class="info">
                <span>手机号码：</span>
                <div class="xiugai">
                  <span>{{ user.phone }}</span>
                  <span @click="Modify" class="xiu">修改</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="nav">
              <button class="basicInfo">基础信息</button>
              <button class="nameIdentify">实名认证</button>
            </div>
            <div class="form" v-show="showStatus">
              <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                label-width="120px"
                class="demo-ruleForm"
                :size="formSize"
                status-icon
              >
                <el-form-item label="年龄" prop="age">
                  <el-input v-model="ruleForm.age" />
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                  <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="男" />
                    <el-radio label="女" />
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="职业" prop="job">
                  <el-input v-model="ruleForm.job" />
                </el-form-item>
                <el-form-item label="所在区域" prop="region">
                  <el-select
                    v-model="ruleForm.region"
                    placeholder="请选择所在区域"
                  >
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                  </el-select>
                </el-form-item>
                <el-form-item label="擅长解决的问题" prop="type">
                  <el-select
                    v-model="ruleForm.type"
                    placeholder="请选择擅长解决的问题"
                  >
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                  </el-select>
                </el-form-item>
                <el-form-item label="个人简介" prop="desc">
                  <el-input v-model="ruleForm.desc" type="textarea" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm(ruleFormRef)">
                    保存
                  </el-button>
                  <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>
<script lang="ts">
import router from "@/router";
import { FormInstance, FormRules } from "element-plus";
import localforage from "localforage";
import { defineComponent, ref, reactive, onMounted } from "vue";
export default defineComponent({
  name: "Personal",
  components: {},
  setup() {
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
    const navigateToHome = () => {
      router.push({ path: "/" });
    };
    const searchUser = ref("");
    const handleImageClick = (row: any) => {
      console.log(row);
    };
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
    const user = ref({
      name: "张三",
      id: "123456",
      time: "2021-05-01",
      identify: "已认证",
      phone: "12345678910",
      url: "",
    });
    const ModifyName = () => {
      console.log("修改用户名");
    };
    const Modify = () => {
      console.log("修改手机号码");
    };
    const circleUrl = ref(
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    );

    interface RuleForm {
      age: string;
      region: string;
      job: string;
      delivery: boolean;
      type: string;
      sex: string;
      desc: string;
    }

    const formSize = ref("default");
    const ruleFormRef = ref<FormInstance>();
    const ruleForm = reactive<RuleForm>({
      age: "",
      region: "",
      job: "",
      delivery: false,
      type: "",
      sex: "",
      desc: "",
    });

    const rules = reactive<FormRules<RuleForm>>({
      age: [
        {
          required: true,
          message: "请填写你的年龄",
          trigger: "blur",
        },
      ],
      region: [
        {
          required: true,
          message: "请选择你的所在区域",
          trigger: "blur",
        },
      ],
      job: [
        {
          required: true,
          message: "请填写你的职业",
          trigger: "blur",
        },
      ],
      type: [
        {
          required: false,
          message: "请选择擅长解决的问题",
          trigger: "blur",
        },
      ],
      sex: [
        {
          required: true,
          message: "请选择性别",
          trigger: "blur",
        },
      ],
      desc: [
        {
          required: true,
          message: "请输入个人简介",
          trigger: "blur",
        },
      ],
    });

    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!", fields);
        }
      });
    };

    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.resetFields();
    };


    const showStatus = ref(true);
    const userName = ref("");
    const fetchData = async () => {
      try {
        const value = await localforage.getItem<MyResponseData>("userInfo");
        if (value) {
          console.log(value);

          userName.value = value.userName; // 更新 userName
          user.value.name = value.userName;
          user.value.id = value.id.toString();
          user.value.url = value.headPicUrl;
          circleUrl.value = value.headPicUrl;
        }
      } catch (err) {
        // 当出错时，此处代码运行
        console.error(err);
      }
    };
    onMounted(() => {
      fetchData();
    });
    return {
      searchUser,
      user,
      userName,
      circleUrl,
      ruleForm,
      rules,
      formSize,
      ruleFormRef,
      showStatus,
      submitForm,
      resetForm,
      Modify,
      ModifyName,
      navigateToHome,
      handleImageClick,
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
      width: 100%;
      height: 100%;
      .top {
        display: flex;
        background-color: #fff;
        margin: 10px 20px 15px 20px;
        justify-content: space-between;
        .left {
          background-color: #fff;
          display: flex;
          align-items: center;
          .avl {
            margin: 20px;
          }
          .per {
            .info {
              margin: 10px;
              .xiugai {
                width: 100px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span {
                  cursor: pointer;
                }
                .xiu {
                  color: #7aa2ff;
                }
              }
            }
          }
        }
        .right {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding-top: 30px;
          margin-right: 200px;
          .info {
            margin: 10px;
            .identify {
              width: 70px;
              height: 26px;
              background-color: #e8ffea;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #0bb976;
              border-radius: 5px;
              font-weight: bold;
            }
            .xiugai {
              width: 150px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              span {
                cursor: pointer;
              }
              .xiu {
                color: #7aa2ff;
              }
            }
          }
        }
      }
      .bottom {
        margin: 10px 20px 15px 20px;
        background-color: #fff;
        .nav {
          display: flex;
          padding: 20px;
          .nameIdentify {
            border: none;
            color: #888;
            background-color: #fff;
            font-weight: bold;
            margin-left: 30px;
          }
          .basicInfo {
            width: 120px;
            height: 40px;
            border-radius: 10px;
            border: none;
            background-color: #e1f6ee;
            color: #0bb976;
            font-weight: bold;
          }
        }
        .form {
          padding: 40px;
          width: 50%;
        }
      }
    }
  }
}
</style>