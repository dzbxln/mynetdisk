import { createStore } from 'vuex'

export default createStore({
  state: {
    CardData:[{
      src: "https://huyi-1312710090.cos.ap-guangzhou.myqcloud.com/image%2F%E6%96%87%E4%BB%B6%E5%A4%B9.jpeg",
        display: true,
        text: "我的资源",
        key: "我的资源",
        index:0
    }]
  },
  getters: {
  },
  mutations: {
    addData(state, data){
      let isor = true
      for(let i = 0; i < state.CardData.length; i++){
        if (!state.CardData[i].text || state.CardData[i].text.trim().length === 0){
          isor = false
        }
      }
      if(isor){
        state.CardData.push(data)
      }
    },
    deleteData(state, data){
      state.CardData.splice(state.CardData.indexOf(data), 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
