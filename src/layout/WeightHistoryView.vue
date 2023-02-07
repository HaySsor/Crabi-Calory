<template>
  <div class="weight-container">
    <div class="img-box">
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
  height: 400px;
  width: 80%;
  margin: 0 auto;
  border: 5px solid $secColor;
  border-radius: 35px;
  background-color: $primeColor;
  img {
    width: 100px;
  }

  .constructor2 {
    transform: rotateY(180deg);
  }
  .img-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    justify-items: center;
    .crab-box {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

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
  }
  h3 {
    margin-top: 80px;
    font-size: 5rem;
    text-align: center;
  }
}
</style>
