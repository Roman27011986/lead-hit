<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MainContainer'
}
</script>

<style  scoped>
.container {
    max-width: 1230px;
    padding: 0 15px 0 15px;
    margin: 0 auto;
}
</style>