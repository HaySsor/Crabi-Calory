<template>
  <div class="modal">
    <div class="window">
      <h3>{{ message }}</h3>
      <img src="/public/icons/frankenstein.png" alt="" />
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
  methods: {},
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
    width: 300px;
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
    }
    img {
      width: 100px;
      height: 100px;
      animation: rotate 10s infinite;
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
  }
  .button:disabled {
    background-color: gray;
    border: 1px solid black;
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
</style>
