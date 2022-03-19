<template>
  <div class="loginPic flex-column">
      <img src="@/assets/product_release_colored.svg">
    </div>
  <div @click="checkClick" ref="login" class="login container flex flex-column">
    <form @submit.prevent="submitForm" class="login-form">
      <div class="bill-from flex flex-column">
        <h2>Sign in</h2>
        <div class="input flex flex-column">
          <label for="userName">User Name</label>
          <div class="flex">
             <img src="@/assets/user.svg" />
            <input
              required
              type="text"
              id="userNameBox"
              placeholder="Enter user name here"
            />
          </div>
          <label for="password">Password</label>
          <div class="flex">
          <img src="@/assets/password.svg" />
          <input
            required
            type="password"
            id="passwordBox"
            placeholder="Enter user password"
          />
          </div>
        </div>
      </div>
      <div class="save flex">
        <div class="left">
          <button type="button" @click="backToLanding" class="red">
            Go Back
          </button>
        </div>
        <div class="right flex">
          <button type="button" @click="newUser" class="dark-purple">
            New User Register
          </button>
          <button type="submit" @click="login" class="purple">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",

  methods: {
    newUser() {
      this.$router.push({ name: "Registration" });
    },
    backToLanding() {
      this.$router.push({ name: "Landing" });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  &::-webkit-scrollbar {
    background-color: #252945;
  }
  &::-webkit-scrollbar-thumb {
    background: #141625;
    border-radius: 50px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .loginPic {
    width: 50%;
    height: 0;
  }

  .login {
    width: 100%;
    align-self: flex-end;
    margin-top: 170px;
    padding: 0 200px;
    color: #fff;
    .login-form {
      background: #1e2139;
      border-radius: 10px;
      padding: 20px;
      h2 {
        margin-bottom: 20px;
      }
      input {
        width: 100%;
        border-radius: 0 4px 4px 0;
        padding: 10px 4px;
        background-color: #2c3052;
        color: #fff;
        border: none;
        margin-bottom: 24px;
        margin-top: 5px;

        &:focus {
          outline: none;
        }
      }
      img {
        background-color: #606ab3;
        border-radius: 10px 0 0 10px ;
        margin-top: 5px;
        height: 40px;
        width: 50px;
        padding: 5px;
      }
    }

    .save {
      margin-top: 60px;

      button {
        padding: 15px;
      }


      div {
        flex: 1;
      }

      .right {
        justify-content: flex-end;
        button:first-child {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
