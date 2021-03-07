
const loadTime = {
  state: {
    pageLoadStartTime: '',
    pageLoadedTime: ''
  },
  mutaitions: {
    SET_PAGELOADSTARTTIME: (state, time) => {
      state.pageLoadStartTime = time
    },
    SET_PAGELOADEDTIME: (state, time) => {
      state.pageLoadedTime = time
    }
  },
  actions: {}
}

export default loadTime