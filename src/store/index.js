/**
 * The best place to start with any new app is the data
 * 
 * Vuex is used to create the data store that is used to share data
 * throughout the application, providing a common repo of data for components
 * 
 * Generally, vuex data stores are defined as separate modules
 */
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex) // Vue.js consumes plugins with the `use` method on the Vue instance

const testData = populateTestData([])

function populateTestData (store) {
    let i = 0
    for (i = 1; i <= 10; i++) {
        store.push({
            id: i,
            name: `Product #${i}`,
            category: `Categroy ${i % 3}`,
            description: `This is Product #${i}`,
            price: i * 50
        })
    }
    return store
}
/**
 * Data that is required by more than one part of the app
 * should be placed in the data store.
 * 
 * Data that is specific to a single component should be defined in
 * its script element.
 * */ 
export default new Vuex.Store({
    strict: true,
    state: {
        products: testData,
        productsTotal: testData.length,
        currentPage: 1,
        pageSize: 4
    },
    getters: {
        processedProducts: state => {
            let index = (state.currentPage - 1) * state.pageSize;
            return state.products.slice(index, index + state.pageSize);
        },
        pageCount: state => Math.ceil(state.productsTotal / state.pageSize)
    },
    mutations: {
        setCurrentPage (state, page) {
            state.currentPage = page
        },
        setPageSize (state, size) {
            state.pageSize = size
            state.currentPage = 1
        }
    },

})

/**
 * In Vuex data values are read-only and are modified ONLY through mutation
 * 
 */