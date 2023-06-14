<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" :fill="fill" class="bi bi-dot" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg>
    </div>
</template>

<script>
export default{
    name:"ActiveIcon",
    props:{
        fill:{
            type:String
        }
    }
}
</script>