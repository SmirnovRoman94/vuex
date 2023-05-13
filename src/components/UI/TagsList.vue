<template>
  <div class="tags-list">
    <div
      v-for="tag in listTag.items"
      :id="tag"
      :key="tag"
      class="tag-item"
      :class="computedClass"
      @click="tagClick(tag)"
    >
      <span>{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'

const listTag = defineProps({
  // получаем пропы
  // ноты
  items: {
    type: Array,
    required: true,
  },
  // из компонента листа (для отображения определенного класса)
  isPreview: {
    type: Boolean,
    default: false,
  },
  // из компонента формы (для отображения определенного класса)
  isActive: {
    type: Boolean,
    default: false,
  },
  // релоад для сбрасывания всех активных классов
  reload: {
    type: Boolean,
    default: false,
  },
})
// меняем стиль тегов в зависимости от того откуда они были вызваны (лист или форма)
const computedClass = computed(() => {
  return listTag.isPreview == true ? 'isPreview' : 'isActive'
})
// определяем эмиты
const emits = defineEmits(['onItemClick'])
// клик по определенному тегу (меняем класс)
const tagClick = (tag) => {
  let el = document.getElementById(`${tag}`)
  el.classList.toggle('active')
  emits('onItemClick', tag)
}
// следим за reload для сбрасывания всех активных классов
watch(
  () => listTag.reload,
  (n, o) => {
    if (n == true) {
      let items = document.querySelectorAll('.active')
      items.forEach((el) => {
        el.classList.toggle('active')
      })
    }
  }
)
</script>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-out;
    background: #fc5c65;
    color: #fff;
  }
  &.isActive.active {
    background: #26de81;
    transition: all 0.3s ease-out;
  }
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
