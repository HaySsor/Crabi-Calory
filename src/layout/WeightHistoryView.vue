<template>
  <div class="weight-container">
    <div class="img-box">
      <div>
        <img src="/icons/crane.png" alt="" />
      </div>
      <div class="crab-box">
        <img src="/icons/helmet.png" alt="" class="helmet" />
        <img src="/icons/crab.png" alt="" class="crab" />
      </div>
      <div class="constructor constructor1">
        <img src="/icons/build.png" alt="" />
      </div>
      <div class="crab-box">
        <img src="/icons/helmet.png" alt="" class="helmet" />
        <img src="/icons/crab.png" alt="" class="crab" />
      </div>
      <div class="constructor constructor2">
        <img src="/icons/crane.png" alt="" />
      </div>
      <div class="crab-box">
        <img src="/icons/helmet.png" alt="" class="helmet" />
        <img src="/icons/crab.png" alt="" class="crab" />
      </div>
    </div>
    <h3 class="family-Nerko">IN PROGRESS</h3>
  </div>
</template>

<script>
export default {
  name: 'WeightHistory',
};
</script>

<style lang="scss" scoped>
.weight-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  height: 500px;
  width: 80%;
  margin: 0 auto;
  border: 5px solid $secColor;
  border-radius: 35px;
  background-color: $primeColor;
  img {
    width: 100px;
  }
  .crab-box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .helmet {
      position: absolute;
      width: 40px;
      top: -40px;
      z-index: 1;
    }
    .crab {
      position: absolute;
    }
  }
  .constructor2 {
    transform: rotateY(180deg);
  }
  .img-box {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  h3 {
    margin-top: 80px;
    font-size: 5rem;
  }
}
</style>
