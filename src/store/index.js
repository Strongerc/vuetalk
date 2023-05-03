import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";

Vue.use(Vuex)

const store = new Vuex.Store({


    // 用于修改state数据 mutations: {
    // setname(state, newval) {
    //     state.num = newval
    //   },
    // }
    // 通过this.$store.commit('mutation事件名',mapper参数)可以修改state里面的数据
    state: {
        currentPathName: ''
    },
    mutations: {
        setPath(state) {
            state.currentPathName = localStorage.getItem("currentPathName")
        },
        logout() {
            // 清空缓存
            localStorage.removeItem("user")
            router.push("/login")
        }
    }

})

export default store
