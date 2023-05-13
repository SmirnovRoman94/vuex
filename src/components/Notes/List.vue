<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="notes-list">
    <div v-for="(note, index) in list.items" :key="index" class="note-item">
      <div class="note-header">
        <p>{{ note.title }}</p>
        <p style="cursor: pointer" @click="$emit('remove', index)">&#10005;</p>
      </div>
      <div class="note-footer">
        <TagsList v-if="note.tags && note.tags.length > 0" :items="note.tags" :is-preview="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TagsList from '@/components/UI/TagsList'
const list = defineProps({
  // получаем пропы
  items: {
    type: Array,
    default() {
      return []
    },
  },
})
//emits
// отправялем в родителя что мы удаляем определенную ноту
const emits = defineEmits(['remove'])
</script>

<style lang="scss">
.notes-list {
  padding: 40px 0;
}
.note-item {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
