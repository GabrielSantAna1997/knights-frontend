<template>
    <div id="app">
        <div>
            <KnightsHeader />
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import KnightsHeader from './components/KnightsHeader.vue';
export default {
    components: {
        KnightsHeader
    },
    name: 'App'
}
</script>

<style></style>