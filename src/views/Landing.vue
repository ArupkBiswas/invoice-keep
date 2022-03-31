<template>
  <div class="Landing flex flex-column container">  
    <div class="save flex">
      <div class="left">
       <h2>Landing Page</h2>
      </div>
      <div class="right flex">
        <button type="button" @click="login" class="purple">Login</button>
      </div>  
    </div>
    <img src="@/assets/market-research-colored.svg">
  </div>
</template>

<script>
  export default {
    name: "Landing",

    methods: {
      login() {
        this.$router.push({ name: "Login" });
      }
    }
  };
</script>

<style lang="scss" scoped>
  img {
    height: auto;
    width: 100%;
  }
  h2 {
    color: #fff;
  }

  .container {
  width: 100%;
  padding: 10px 10px;
  max-width: 950px;
  margin: 0 auto;

    @media (min-width: 900px) {
      padding-top: 72px;
    }

    .save {
      div {
        flex: 1;
      }

      .right {
        justify-content: flex-end;
      }
    }

  }
</style>