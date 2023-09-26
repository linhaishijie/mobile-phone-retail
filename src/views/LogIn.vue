<template>
  <div id="login">
    <el-form class="login" :model="form" :rules="loginRules" ref="loginForm">
      <h3>手机零售后台</h3>
      <el-form-item prop="username">
        <el-input placeholder="账号" v-model="form.username" prefix-icon="el-icon-user">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="密码" type="password" v-model="form.password" prefix-icon="el-icon-key"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="remb">记住密码</el-checkbox>
      <el-form-item>
        <el-button type="primary" class="btn" @click.native="Login">登 录</el-button>
      </el-form-item>
    </el-form>
    <div class="footer">
      Copyright © 2018-2023 ruoyi.vip All Rights Reserved.
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import { getMenu } from "../api";
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "admin123",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" },
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" },
        ],
      },
      checked: true,
      redirect: undefined,
    };
  },
  methods: {
    Login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          getMenu(this.form).then((data) => {
            if (data.code === 20000) {
              // token信息存入cookie用于不同页面间的通信
              Cookie.set("token", data.data.token);
              // 获取菜单的数据，存入store中
              this.$store.commit("menu/setMenu", data.data.menu);
              this.$store.commit("menu/addMenu", this.$router);
              // 跳转到首页
              this.$router.push("/home");
            } else {
              this.$message.error(data.data.message);
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
#login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: url(../assets/bg.jpg);
  background-size: cover;

  .login {
    border-radius: 6px;
    background: #fff;
    width: 400px;
    padding: 25px 25px 5px 25px;
    box-sizing: border-box;

    h3 {
      font-weight: 500;
      line-height: 1.1;
      color: #707070;
      margin: 0 auto 30px auto;
      text-align: center;
    }

    .remb {
      display: inline-block;
      line-height: 19px;
      font-size: 14px;
      cursor: pointer;
      margin: 0px 0px 25px 0px;
    }

    .btn {
      width: 100%;
      font-size: 14px;
    }
  }

  .footer {
    height: 40px;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    font-family: Arial;
    font-size: 12px;
    letter-spacing: 1px;
  }
}
</style>