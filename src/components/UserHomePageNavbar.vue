<template>
  <nav class="nav">
    <div class="blur">
      <ul class="nav__list">
        <router-link
          v-for="navbarLink in navbarLinkList"
          :key="navbarLink.id"
          :to="{name: navbarLink.link}"
          class="nav__list-item">
          <li>
            <img :src="navbarLink.imgSrc" aria-hidden="true" />
            <span class="family-Nerko">{{ navbarLink.name }}</span>
          </li></router-link
        >
        <li class="nav__list-logout">
          <button @click.prevent="singOut">
            <i class="fas fa-sign-out-alt icon"></i>
          </button>
          <span class="family-Nerko cypress-log-out">LogOut</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import useUserStore from '@/stores/user';
import {useRouter} from 'vue-router';
export default {
  name: 'UserHomePageNavbar',
  setup() {
    const navbarLinkList = [
      {
        id: 1,
        name: 'Add Meal',
        link: 'addMeal',
        imgSrc: '/icons/salad.png',
      },
      {
        id: 2,
        name: 'Weight',
        link: 'weightHistory',
        imgSrc: '/icons/bars.png',
      },
      {
        id: 3,
        name: 'Meal list',
        link: 'mealList',
        imgSrc: '/icons/book-2.png',
      },
      {
        id: 4,
        name: 'Profile',
        link: 'profile',
        imgSrc: '/icons/user.png',
      },
    ];
    const userStore = useUserStore();
    const router = useRouter();

    function singOut() {
      userStore.singOutUser();
      location.reload();
      router.push({name: 'home'});
    }

    return {singOut, navbarLinkList};
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  bottom: 0;
  padding: 10px;
  z-index: 49;
  width: 100%;
  height: 90px;
  background-color: #f9faf7;
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
      transform: scale(0.8);

      img {
        width: 40px;
        filter: saturate(0.1);
      }
      span {
        font-size: 1.4rem;
        display: block;
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
        background-color: tomato;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 15px;
        i {
          font-size: 1.5rem;
        }
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
  transform: scale(1.1);
  img {
    filter: saturate(1);
  }
}
@media screen and (min-width: 454px) {
  .nav {
    left: 50%;
    max-width: 800px;
    transform: translate(-50%);
    backdrop-filter: blur(3px);
    &__list {
      &-item {
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        img {
          width: 40px;
          height: 50%;
        }
        span {
          font-size: 1.6rem;
        }
      }
      &-logout {
        button {
          padding: 10px;
          i {
            font-size: 2.5rem;
          }
        }
        span {
          font-size: 1.4rem;
        }
      }
      &-logout:hover {
        transform: scale(1.1);
      }
      &-item,
      &-logout {
        transition: transform 0.3s;
      }
    }
  }
}
</style>
