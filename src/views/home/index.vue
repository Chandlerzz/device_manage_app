<script setup lang="ts">
import Header from "./header.vue";
import Main from "./main.vue";
import Sidebar from "./sidebar.vue";
import Footer from "./footer.vue";
import {ref} from "vue"
const menuid = ref(1)
function changeId(id:number)
{
  menuid.value = id;
}
</script>

<template>
  <div class="container">
    <Header class="header"> Header content </Header>
    <Sidebar class="sidebar" @changeId="changeId" :menuid="menuid"> Sidebar content </Sidebar>
    <Main class="main" :menuid="menuid"> </Main>
    <Footer class="footer"> </Footer>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  height:100vh;
  width:100vw;
  grid-template-columns:2fr 10fr;
  grid-template-rows:1fr 10fr 1fr;
  grid-template-areas:
 " header header"
  "main main"
  "footer footer";
}
.container .header{
  margin-left:55px;
  grid-area:header;
}
.container .sidebar{
  grid-area:sidebar;
}
.container .main{
  margin-left:55px;
  grid-area:main;
  align-content:start;
}
.container .footer{
  margin-left:55px;
  grid-area:footer;
}
@media screen and (min-width: 800px)
{
  .container .header{
    margin-left:250px;
  }
  .container .main{
    margin-left:250px;
  }
  .container .footer{
    margin-left:250px;
  }
}
</style>
