<template>
    <a-button type="primary">{{year}}</a-button>
</template>
<script setup lang="ts">
    import { defineComponent,ref,reactive } from 'vue'
    // import type { Ref } from 'vue'
    const state = reactive({ count: 0 })
    // const year: Ref<string | number> = ref('2020')
    const year = ref<string | number>('2020')

    function increment() {
        state.count++
    }
</script>
<style>

</style>