<template>
 <div class="cards-list">
  
  <a :href="page.url" target="_blank" v-for="page in cpages" :key="page.id">
   <img  :src="page.imgUrl" alt="" />
  </a>
</div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import {pages} from "../../data/pages"
import { defineProps } from "vue";
const props = defineProps({
  menuid: {
    type: Number,
    default: 1,
  },
});
const cpages = computed( () =>{
  return pages.filter((item) => item.menuId === props.menuid)
})
</script>


<style scoped>
.cards-list {
  display: grid;
  grid-template-columns:1fr 1fr;
  grid-template-columns:1fr 1fr 1fr 1fr;
  gap:2rem 2rem;
  padding:1rem;
}
img{
  width:100%;
}
img:hover{
  transform:scale(0.9, 0.9);
}
@media screen and (min-width:800px){
  .cards-list{
    padding:1rem;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
    gap:2rem 3rem;
  }
}


</style>

