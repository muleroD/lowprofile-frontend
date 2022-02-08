<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="12" :md="10" :lg="8" :xl="6">
      <el-card shadow="never" class="card-center">
        <el-row>
          <img src="~/assets/icons/devchallenges.svg" />
        </el-row>

        <el-row>
          <h3>Login</h3>
        </el-row>

        <el-row>
          <el-input placeholder="Email" prefix-icon="el-icon-search" v-model="user.email"> </el-input>
        </el-row>

        <el-row>
          <el-input placeholder="Password" type="password" prefix-icon="el-icon-search" v-model="user.password">
          </el-input>
        </el-row>

        <el-row>
          <el-button class="btn-login" @click="enterUser()">Login</el-button>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "LoginPage",

  data() {
    return {
      user: { email: "", password: "" }
    };
  },

  methods: {
    enterUser() {
      this.$services.auth.login(this.user);
    }
  }
};
</script>

<style lang="scss" scoped>
.card-center {
  border-color: #bdbdbd;
  border-radius: 24px;
}

.btn-login {
  min-width: 100%;
  background: #2f80ed;
  color: white;
  font-weight: 600;
  font-size: 16px;
}
</style>
