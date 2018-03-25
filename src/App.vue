<template>
    <div id="app">
        <k-header></k-header>
        <tab></tab>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    import kHeader from 'components/k-header/k-header'
    import tab from 'components/tab/tab'
    export default {
        name: 'App',
        components: {
            kHeader,
            tab
        }
    }
</script>

<style>

</style>
