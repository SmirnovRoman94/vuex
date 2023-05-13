<template>
  <div class="container">
    <Form @onSubmit="subItem" />
    <List :items="arrNotes" @remove="onRemove" />
  </div>
</template>

<script setup>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'
const store = useStore()
//form
// добавление нода
const subItem = (item) => store.dispatch('addNotes', item)

//list
// извлекаем данные из локала через vuex (сразу стучимся в мутацию без экшена)
const loadNotes = () => store.commit('loadNotesVuex')
//вытягиваем данные через getters
const arrNotes = computed(() => store.getters.getNotes)
const onRemove = (ind) => store.dispatch('deleteNote', ind)

// mounted
onMounted(() => {
  loadNotes()
})
</script>
