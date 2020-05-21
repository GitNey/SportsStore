<template>
    <div v-if="pageCount > 1" class="text-right">
        <div class="btn-group mx-2">
            <button
                v-for="i in pageNumbers" 
                v-bind:key="i" 
                class="btn"
                v-bind:class="i == currentPage ? 'btn-primary' : 'btn-secondary'"
                v-on:click="setCurrentPage(i)">
                {{ i }}    
            </button>
        </div>
    </div>
</template>

<script>
import Store from '@/store'
import { mapState, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['pageCount']),
        ...mapState(['currentPage']),
        pageNumbers() {
            // [...Array(4 + 1).keys()] -> [0,1,2,3,4] 
            return [
                ...Array(this.pageCount + 1).keys()
            ].slice(1);
        }
    },
    methods: {
        setCurrentPage (page) {
            Store.commit('setCurrentPage', page)
            console.log('Store.state.currentPage:', Store.state.currentPage)
        }
    }   
}
</script>