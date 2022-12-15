<template>
  <nav class="nav">
    <div class="blur">
      <ul class="nav__list">
        <router-link :to="{name: 'addMeal'}" class="nav__list-item">
          <li>
            <img src="/icons/salad.png" alt="" />
            <span class="family-Nerko">Add Meal</span>
          </li></router-link
        >
        <router-link :to="{name: 'weightHistory'}" class="nav__list-item"
          ><li>
            <img src="/icons/bars.png" alt="" />
            <span class="family-Nerko">Weight</span>
          </li></router-link
        >
        <router-link :to="{name: 'mealList'}" class="nav__list-item"
          ><li>
            <img src="/icons/book-2.png" alt="" />
            <span class="family-Nerko"> Meal list</span>
          </li></router-link
        >
        <router-link :to="{name: 'profile'}" class="nav__list-item"
          ><li>
            <img src="/icons/user.png" alt="" />
            <span class="family-Nerko">Profile</span>
          </li></router-link
        >
        <li class="nav__list-logout">
          <button @click.prevent="singOut">
            <App-icon
              icon="ant-design:logout-outlined"
              width="30"
              height="25"
              class="icon"></App-icon>
          </button>
          <span class="family-Nerko">LogOut</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import useUserStore from '@/stores/user';
import {useRouter} from 'vue-router';
export default {
  name: 'HomePageNavbar',
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    function singOut() {
      userStore.singOutUser();
      router.push({name: 'home'});
    }

    return {singOut};
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  bottom: 0;
  padding: 10px;
  z-index: 999;
  width: 100%;
  background: rgb(226, 136, 47);
  background: linear-gradient(
    90deg,
    rgba(226, 136, 47, 0.65) 0%,
    rgba(226, 136, 47, 0.3) 100%
  );
  backdrop-filter: blur(3px);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  &__list {
    display: flex;
    list-style: none;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    &-item {
      text-align: center;
      text-decoration: none;
      color: black;
      width: 20%;
      display: flex;
      flex-direction: column;

      img {
        width: 80%;
        height: 100%;
      }
      span {
        font-size: 1.4rem;
      }
    }
    &-logout {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      button {
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-color: tomato;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        font-size: 1.4rem;
      }
    }
    &-item,
    &-logout {
      transition: transform 0.3s;
    }
  }
}
.active {
  background-color: rgba(0, 0, 0, 0.185);
  transform: scale(0.8);
  padding: 5px;
  border-radius: 40px;
}
</style>
