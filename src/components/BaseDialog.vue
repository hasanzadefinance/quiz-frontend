<template>
  <transition name="fade">
    <div v-if="model" class="dialog-overlay" @click="close">
      <div class="dialog-content" @click.stop :class="class">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>

const model = defineModel()
const props = defineProps({
  persistent: {
    type: Boolean,
    default: false
  },
  class: {
    default: []
  }
})

function close() {
  if (!props.persistent)
    model.value = false
}
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.dialog-content {
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  max-width: 35rem;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
