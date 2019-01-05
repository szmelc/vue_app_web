<template>
  <div class="loader">
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss" scoped>
  .loader {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
  }
  .loader span {
    position: absolute;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: rgba(255, 240, 224,1);
    -webkit-animation: loader 1.5s linear infinite;
    animation: loader 1.5s linear infinite;
  }
  .loader span:last-child {
    animation-delay: -0.9s;
    -webkit-animation-delay: -0.9s;
  }
  @keyframes loader {
    0% {transform: scale(0, 0);opacity:0.8;}
    100% {transform: scale(1, 1);opacity:0;}
  }
  @-webkit-keyframes loader {
    0% {-webkit-transform: scale(0, 0);opacity:0.8;}
    100% {-webkit-transform: scale(1, 1);opacity:0;}
  }
</style>
