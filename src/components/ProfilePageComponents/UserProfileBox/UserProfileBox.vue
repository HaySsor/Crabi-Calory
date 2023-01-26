<template>
  <div class="profile">
    <img src="/icons/frankenstein.png" alt="" />
    <div class="profile__name family-Nerko">{{ personalData.name }}</div>
    <i @click="OpenModalUserEditProfile" class="settings fas fa-cog"></i>
  </div>
</template>

<script>
export default {
  name: 'UserProfileBox',
  props: {
    personalData: {
      required: true,
    },
    OpenModalUserEditProfile: {
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
  background-color: #ffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.193);
  transform: translateY(-11px);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 10px;
  position: relative;
  img {
    width: 30%;
  }
  &__name {
    font-size: 1.8rem;
    width: 50%;
    text-align: center;
    border-left: 1px solid black;
  }
  .settings {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2rem;
    transition: transform 0.3s;
    color: gray;
    &:hover {
      transform: rotate(360deg);
    }
  }
}
@media screen and (min-width: 454px) {
  .profile {
    width: 60%;
    max-width: 400px;
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
