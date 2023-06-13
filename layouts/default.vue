<template>
    <div>
        <Navbar/>
        <h1>default layout</h1>
        <slot />
    </div>
</template>
<script>
import Navbar from '~/components/navbar.vue';

export default {
    components: { Navbar }
}
</script>
<style>
    
</style>