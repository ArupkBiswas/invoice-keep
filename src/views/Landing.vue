<template>
  <div class="Landing flex flex-column container">
    <h2>Landing Page</h2>
    <img src="@/assets/market-research-colored.svg">
  </div>
</template>

<script>
  export default {
    name: "Landing",
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
  }
</style>