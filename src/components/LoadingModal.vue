<template>
  <div class="modal">
    <div class="window">
      <h3>{{ message }}</h3>
      <img src="/icons/crab.png" alt="" />
      <AppButton :dis="passData" class="button cypress-modal-btn" @click.prevent="closeModal">
        OK
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from './styleComponents/AppButton.vue';
export default {
  name: 'AppModal',
  props: {
    message: {
      required: true,
      type: String,
    },
    passData: {
      required: true,
      type: Boolean,
    },
    showModal: {
      required: true,
      type: Boolean,
    },
    closeModal: {
      required: true,
      type: Function,
    },
  },
  components: {AppButton},
};
</script>

<style lang="scss" scoped>
.window {
  width: 320px;
  height: 250px;
  background-color: $primeColor;
  border: 2px solid $secColor;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  h3 {
    font-size: 1.8rem;

    text-align: center;
  }
  img {
    width: 70px;
    height: 70px;
    animation: rotate 3s infinite;
    margin-bottom: 10px;
  }
}
.button:disabled {
  background-color: gray;
}

@media screen and (min-width: 1200px) {
  .modal {
    position: fixed;
    width: 100%;
  }
}
</style>
