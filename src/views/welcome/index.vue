<script setup lang="ts">
import { ref } from "vue";
import Carousel from "./Carousel.vue";
import Title from "./Title.vue";
import Globe from "./Globe.vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="grid">
    <globe></globe>
    <Title></Title>
    <footer>东方日升新能源有限公司</footer>
  </div>
</template>

<style scoped>
.grid{
  display:grid;
  grid-template-rows:12fr 8fr 1fr;
  height:inherit;
  width:inherit;
}
footer{
  opacity:0.7;
  font-size:0.8rem;
  align-self:end;
  padding-bottom:5px;
}
</style>
