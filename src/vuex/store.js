import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'




Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: []
    },
    mutations:{
    //    SET_PRODUCTS_TO_STATE: (state :s ,products) => {
      //      state.products = products;
        //}
    }, 
    actions:{
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://127.0.0.1:8000/shop/api/products', {
                method: "GET"
            }) AxiosResponse<any>
                .then((products: AxiosResponse<any ) => {
                commit('SET_PRODUCTS_TO_STATE', products);
                return products; 
                }) Promise < AxiosResponse<any>
                .catch((error) =>{
                    comsole.log(error)
                    return error;
                })
        }
    },
    getters:{
        PRODUCTS(state){
            return state.products;
        }
    },



});


export default {
    store,

}