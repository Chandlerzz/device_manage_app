<template>
  <nav ref="root" class="main-menu">
    <div class="logo">
      <img src="https://guide.risen.com/guidetest/img/risen-logo.d62cbb0a.png" alt=""/>
    </div>
    <div class="settings">东方日升</div>
    <ul>
      <li class="has-subnav" :menuid="item.id" v-for="item in menu" :key="item.id" @click="menuClick"> 
        <a href="#/home">
            <i class="el-icon fa fa-lg" >
              <component :is="item.icon"></component>
            </i>
            <span class="nav-text">{{item.name}}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import {menu} from "../../data/menu"
import {watch,onMounted,defineEmits,defineProps,ref} from "vue"
const props = defineProps({
  menuid: {
    type: Number,
    default: 1,
  },
});
watch(
  ()=>props.menuid,
  (n:any,o:any) => {
    try{
      const nEl:HTMLElement | null = getElmentById(n)
      if(nEl)
      {
        nEl.classList.add("active")
      }
      const oEl:HTMLElement | null = getElmentById(o)
      if(oEl)
      {
        oEl.classList.remove("active")
      }
    }catch(err){
      console.log(err)
    }
  },
  {
    immediate:true
  }
)
const root = ref(null);
onMounted(() => {
  const el:HTMLElement | null = getElmentById(props.menuid)
  if(el)
  {
    el.classList.add("active")
  }
})
const emit = defineEmits(['changeId'])
function menuClick(event:any){
  let li:any = event.srcElement
  let flag:boolean = true
  while(flag)
  {
    if( li.tagName === "LI")
    {
      flag = false
    }else{
      li = li.parentElement
    }
  }
  let menuid = li.getAttribute("menuid")
  emit('changeId',parseInt(menuid))
  li.classList.add("active")
}
function getElmentById(menuid:any){
  const condition = "[menuid=\""+menuid+"\"]"
  let el:HTMLElement|null = root?.value
  if(el)
  {
    el = (el as HTMLElement).querySelector(condition)
  }
  return el;
}
</script>


<style scoped>
.logo img {
  width:2rem;
  padding-top:10px;
}
.settings {
  height: 43px;
  background-repeat: no-repeat;
  width: 250px;
  text-align: center;
  font-size: 0.8rem;
  font-family: "Strait", sans-serif;
}

.hover {
  height: 73px;
  float: left;
  background-image: url();
  background-repeat: no-repeat;
  width: 255px;
  margin: 0px;
}

.fa-lg {
  font-size: 1em;
}

.fa {
  position: relative;
  display: table-cell;
  width: 55px;
  height: 36px;
  text-align: center;
  top: 0px;
  line-height:36px;
  font-size: 20px;
}

.main-menu:hover,
nav.main-menu.expanded {
  width: 250px;
  overflow: hidden;
  opacity: 1;
}

.main-menu {
  background: #f7f7f7;
  border-right: 1px solid #e5e5e5;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  left: 0;
  width: 55px;
  overflow: hidden;
  -webkit-transition: width 0.2s linear;
  transition: width 0.2s linear;
  -webkit-transform: translateZ(0) scale(1, 1);
  box-shadow: 1px 0 15px rgba(0, 0, 0, 0.07);
  opacity: 1;
}

.main-menu > ul {
  margin: 0;
}

.main-menu li {
  position: relative;
  display: block;
  width: 250px;
}

.main-menu li > a {
  position: relative;
  width: 255px;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  color: #959595;
  font-size: 14px;
  text-decoration: none;
  -webkit-transform: translateZ(0) scale(1, 1);
  -webkit-transition: all 0.14s linear;
  transition: all 0.14s linear;
  font-family: "Strait", sans-serif;
  border-top: 1px solid #f0f0f0;
  box-shadow: inset 0 1px 1px #fafafa;
  text-shadow: 1px 1px 1px #fff;
}

.main-menu .nav-icon {
  position: relative;
  display: table-cell;
  width: 55px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 18px;
}

.main-menu .nav-text {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  width: 190px;
  font-family: "Titillium Web", sans-serif;
}

.main-menu .share {
}

.main-menu .fb-like {
  left: 180px;
  position: absolute;
  top: 15px;
}

.main-menu > ul.logout {
  position: absolute;
  left: 0;
  bottom: 0;
  background: white;
}

.no-touch .scrollable.hover {
  overflow-y: hidden;
}

.no-touch .scrollable.hover:hover {
  overflow-y: auto;
  overflow: visible;
}

a:hover,
a:focus {
  text-decoration: none;
  border-left: 0px solid #f7f7f7;
}

nav {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

nav ul,
nav li {
  outline: 0;
  margin: 0;
  padding: 0;
}

.main-menu li:hover > a,
nav.main-menu li.active > a,
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus,
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus,
.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,
.dashboard-page nav.dashboard-menu ul li.active a {
  color: #fff;
  background-color: #00bbbb;
  text-shadow: 0px 0px 0px;
}

.area {
  float: left;
  background: #e2e2e2;
  width: 100%;
  height: 100%;
}

@font-face {
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 300;
  src: local("Titillium WebLight"), local("TitilliumWeb-Light"),
    url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff)
      format("woff");
}
@media screen and (min-width: 800px) {
  .main-menu{
    width: 250px;
  }
}
</style>

