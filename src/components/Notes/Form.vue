<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="note-form-wrapper">
    <form class="form" @submit.prevent="onSubmit">
      <textarea v-model="note.title" required placeholder="Type ur note" />
      <TagsList
        :items="tags"
        :is-active="true"
        :reload="reloadTasgs"
        @onItemClick="handleTagClick"
      />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import TagsList from '@/components/UI/TagsList'
//NOTES
// определяем эмиты
const emit = defineEmits(['onSubmit'])
//начальные данные ноты
const note = reactive({
  title: '',
  tags: [],
})
//кнопка добавления ноты
const onSubmit = () => {
  emit('onSubmit', note)
  note.title = '' // очищаем поле
  note.tags = [] // очищаем теги
  reloadTasgs.value = true // отправляем в компонент TagsList чтобы теги обновились и приянли исходное значение (дефолтный класс)
  setTimeout(() => {
    reloadTasgs.value = false // отменяем релоад (так как в TagsList следит за ним и меняем активные классы)
  }, 1000)
}
//начальное значение релоада теглиста
const reloadTasgs = ref(false)

//TAGS
// основной массив тегов
const tags = ['home', 'work', 'travel']
// кнопка по добавлению тега в ноту
const handleTagClick = (item) => {
  let find = note.tags.findIndex((el) => el === item)
  if (find != -1) {
    note.tags.splice(find, 1)
  } else {
    note.tags.push(item)
  }
}
</script>

<style>
.note-form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
}
.form button {
  width: 100%;
}
textarea {
  margin-bottom: 0 !important;
}
</style>