<template>
  <div class="profile">
    <img src="/icons/frankenstein.png" alt="" />
    <div class="profile__name family-Nerko">{{ personalData.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProfileSquare',
  props: {
    personalData: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background-color: #f9faf79f;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.193);
  border-radius: 30px;
  padding: 10px;
  img {
    width: 30%;
  }
  &__name {
    font-size: 1.8rem;
    width: 50%;
    text-align: center;
    border-left: 1px solid black;
  }
}
@media screen and (min-width: 454px) {
  .profile {
    width: 60%;
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    background-color: #f9faf79f;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.193);
    border-radius: 30px;
    padding: 10px;
    img {
      width: 50px;
    }
  }
}
@media screen and (min-width: 1200px) {
  .profile {
    width: 25%;
    height: 100px;
    margin-bottom: 10px;
    img {
      width: 50px;
    }
  }
}
</style>
