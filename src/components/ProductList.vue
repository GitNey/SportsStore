<template>
    <div>
        {{
            /**
                Keys are important way of defining data fragments on the dom 
                for efficient response to data manipulation (v-bind:key="p.id")
             */
        }}
        <div 
            v-for="p in products" 
            v-bind:key="p.id"
            class="card bg-light m-1 p-1">
            <h4>
                {{ p.name }}
                <span class="badge badge-pill badge-primary float-right">
                    {{ p.price | currency }}
                </span>
            </h4>
            <div class="card-text bg-white p-1">{{ p.description }}</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex' // impport the mapState operation from vuex
export default {
    computed: {
        ...mapState(['products']) // single expression declaration of computed 
        /**
         * Shorthand from
         * computed: {
         *  products() {
         *    return Store.state.products
         *  }
         * }
         */
    },
    filters: {
        currency(value) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(value)
        }
    }
}
</script>