import { createStore } from 'vuex'
import { setItem, getItems } from '@/utils'

export const store = createStore({
  state: {
    notes: [],
  },
  mutations: {
    addNotes(state, note) {
      let item = { title: note.title, tags: note.tags }
      state.notes.push(item)
      this.commit('setLocal', state.notes)
    },
    setLocal(state, arrNotes) {
      let arr = JSON.stringify(arrNotes)
      setItem('notesItems', arr)
    },
    loadNotesVuex(state) {
      let arr = getItems('notesItems')
      state.notes = arr
    },
    deleteNote(state, ind) {
      state.notes.splice(ind, 1)
      this.commit('setLocal', state.notes)
    },
  },
  actions: {
    addNotes(context, note) {
      context.commit('addNotes', note)
    },
    deleteNote(context, ind) {
      context.commit('deleteNote', ind)
    },
  },
  getters: {
    getNotes(state) {
      return state.notes
    },
  },
})
