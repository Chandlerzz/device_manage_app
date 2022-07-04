<template>
  <div class="title">
    <h2>设备管理系统</h2>
    <h2>
      <entry></entry>
    </h2>
  </div>
</template>

<script lang='ts' setup>
import Entry from "./Entry.vue";
</script>

<style scoped>
.title{
  display:grid;
  grid-template-rows:1fr 2fr;
}
h2 {
  font-size: 3rem;
  width: 100%;
  text-align: center;
  color: #388cde;
}
</style>

