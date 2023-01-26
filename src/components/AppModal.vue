<template>
  <div class="modal">
    <div class="window">
      <h3>{{ message }}</h3>
      <img src="/icons/crab.png" alt="" />
      <button :disabled="passData" class="button" @click.prevent="closeModal">
        OK
      </button>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(41, 40, 40, 0.506);
  display: flex;
  justify-content: center;
  align-items: center;
  .window {
    width: 320px;
    height: 250px;
    background-color: #e2882f;
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
  .button {
    padding: 15px 50px;
    border: none;
    border-radius: 20px;
    background-color: white;
    color: #e2882f;
    font-size: 1.7rem;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .button:disabled {
    background-color: gray;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@media screen and (min-width: 1200px) {
  .modal {
    position: fixed;
    width: 100%;
  }
}
</style>
