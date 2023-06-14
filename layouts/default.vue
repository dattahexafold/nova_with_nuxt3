<template>
    <Navbar/>
    <div class="main-content" style="background-color: #F5F5F1;">
        <slot />
    </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue';
export default {
    components: { 
        Navbar
    }
}
</script>
<style>
    
</style>   
<style>
.main-content{
    margin-top: 80px;
}
</style> 