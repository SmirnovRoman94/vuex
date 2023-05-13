<template>
  <div class="container">
    <Form @onSubmit="subItem" />
    <List :items="notes" @remove="onRemove" />
  </div>
</template>

<script setup>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
import { ref, onMounted, watch } from 'vue'

const notes = ref([
  {
    title: 'Learn Vue 3',
    tags: ['work'],
  },
  {
    title: 'Finish course',
    tags: ['work', 'home'],
  },
])

// добавление нода
const subItem = (item) => {
  notes.value.push({ title: item.title, tags: item.tags })
}
// удаление нода
const onRemove = (ind) => {
  notes.value.splice(ind, 1)
}
//локальное хранение
const getNotes = () => {
  const localNotes = localStorage.getItem('notes')
  if (localNotes) {
    notes = JSON.parse(localNotes)
  }
}
// извлекаем данные и локала
onMounted(() => {
  getNotes
})
//следим за изменениями в массиве
watch(
  () => [...notes.value],
  (updateList, o) => {
    console.log(updateList, o)
    localStorage.setItem('notes', JSON.stringify(updateList))
  },
  { deep: true }
)

// export default {
//   name: 'HomeView',
//   components: {
//     Form,
//     List
//   },
//   data: ()=>({
//     value: '',
//     notes: [
//       {
//         title: 'Learn Vue 3',
//         tags: ['work']
//       },
//       {
//         title: 'Finish course',
//         tags: ['work', 'home']
//       }
//     ]
//   }),
//   methods: {
//     // добавление нода
//     subItem(item) {
//       this.notes.push({title: item.title, tags: item.tags})
//     },
//     // удаление нода
//     onRemove(ind){
//       this.notes.splice(ind, 1)
//     },
//     getNotes(){
//       const localNotes = localStorage.getItem('notes');
//       if(localNotes){
//         this.notes = JSON.parse(localNotes);
//       }
//     }
//   },
//   watch: {
//     notes: {
//       handler(updateList) {
//         localStorage.setItem('notes', JSON.stringify(updateList))
//       },deep: true
//     }
//   },
//   mounted() {
//     this.getNotes()
//   }
// };
</script>