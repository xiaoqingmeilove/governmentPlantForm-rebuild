<template>
    <section>
        <el-container class="main-container">
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="20%">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </section>
</template>
<script>
    export default {
        name: 'blankPage',
        data() {
            return {
                
            }
        },
        methods: {

        }
    }
</script>
<style>
    .main-container {
        width: 100%;
        height: 100%;
    }
</style>