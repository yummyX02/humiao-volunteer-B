<template>
  <div class="container">
    <div class="infoBox">
      <h1>登录</h1>
      <div class="form">
        <el-form :inline="false" :model="formInline" class="myForm">
          <el-form-item>
            <el-input
              placeholder="请输入账号"
              v-model="formInline.userName"
              :style="{ width: '400px' }"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="请输入密码"
              v-model="formInline.password"
              :style="{ width: '400px' }"
              show-password
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="myBtn" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer" v-if="false">
        <div class="register">注册</div>
        <div class="gun">|</div>
        <div class="forget">忘记密码</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import axiosInstance from "@/requests";
import router from "@/router";
import localforage from "localforage";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Login",
  setup() {
    const formInline = reactive({
      userName: "",
      password: "",
    });
    const onSubmit = async () => {
      try {
        console.log("submit----start", formInline);
        const res = await axiosInstance.post("/api/login/c", formInline);
        if(res.data.token !== undefined){
          console.log('登录成功', res.data.token);
          localStorage.setItem("isLogin", res.data.token);
          localStorage.setItem("headUrl", res.data.headPicUrl);
          await localforage.setItem("userInfo", res.data);
          router.push("/");
        }
      } catch (error) {
        console.error("请求错误:", error);
      }
    };
    return {
      formInline,
      onSubmit,
    };
  },
});
</script>
<style lang="less" scoped>
html,
body {
  height: 100%;
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .infoBox {
    width: 800px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    h1 {
      font-size: 40px;
      font-weight: 700;
      margin: 40px auto 50px auto;
    }
    .myForm {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .el-form-item {
        margin-bottom: 20px;
        .el-input {
          width: 300px;
        }
      }
      .myBtn {
        width: 400px;
        color: whitesmoke;
        background-color: #409eff;
        border-radius: 20px;
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      .register {
        font-size: 15px;
        color: #409eff;
        cursor: pointer;
      }
      .gun {
        font-size: 15px;
        color: #409eff;
        margin: 0 10px;
      }
      .forget {
        font-size: 15px;
        color: #409eff;
        cursor: pointer;
      }
    }
  }
}
</style>
