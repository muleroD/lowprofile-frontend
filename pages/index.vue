<template>
  <el-row>
    <el-col :span="8" :offset="8">
      <el-card shadow="never" class="card-center" :body-style="{ padding: '3.75rem' }">
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
          <el-input placeholder="Password" prefix-icon="el-icon-search" v-model="user.password"> </el-input>
        </el-row>

        <el-row>
          <el-button type="primary">Login</el-button>
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
  }
};
</script>

<style lang="scss" scoped>
.card-center {
  border-color: #bdbdbd;
  border-radius: 24px;
}
</style>
