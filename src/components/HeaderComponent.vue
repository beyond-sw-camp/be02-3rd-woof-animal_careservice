<template>
    <header>
        <div class="innerheader">
            <div class="top">
                <a class="menubars" href="#">
                    <i class="fa-solid fa-bars"></i>
                </a>
                <h1 class="logo">
                    <a href="/"><img class="woofpic" src="/static/images/logo.png" alt="" /></a>
                </h1>
                <input type="text" name="" value="" placeholder="Search.." />
                <a class="search" href="#">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </a>
                <ul class="topMenu">
                    <li v-show="!isLoggedIn">
                        <a href="/signup/member">SignUp</a>
                    </li>
                    <li v-show="!isLoggedIn">
                        <a href="/login/member">Login</a>
                    </li>
                    <li v-show="isLoggedIn">
                        <a @click="logout()">로그아웃</a>
                    </li>
                    <li >
                        <!-- v-show="isLoggedIn" -->
                        <a href="/mypage">My Page</a>
                    </li>

                    <!-- <li>
                        <a href="/#">About </a>
                    </li> -->
                </ul>
            </div>
        </div>
        <div class="innerheaderDown">
            <ul class="gnb">
                <li>
                    <a href="/productCeo/list">업체</a>
                </li>
                <li>
                    <a href="/productManager/list">매니저</a>
                </li>
                <li>
                    <a href="/orders/create">예약하기</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
            </ul>
        </div>
    </header>
</template>
  
  
<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const logout = () => {
    sessionStorage.removeItem("atoken");
    router.push("");
    router.go();
}

const isLoggedIn = computed(() => {
    if (sessionStorage.getItem("atoken") !== null) {
        return true;
    } else {
        return false;
    }

});

</script>
  
<style>
/* 헤더 */
/* .topMenu {
    background-color: #fae14a;
} */

.innerheaderDown {
    background-color: #fae14a;
}

/* 줄바꿈 해결 */
.topMenu li {
    white-space: nowrap;
}

/* .innerheader {
    background-color: #fae14a;
} */


header.mobile {
    display: none;
}

header {
    width: 100%;
    /* height: 140px; */
}

.innerheader {
    /* background: black; */
    width: 100%;
}

.top {
    width: 100%;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
}

.menubars {
    display: none;
}

.logo {
    width: 200px;
    height: 70px;
    /* background: #fae14a; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.top>input {
    width: 112px;
    height: 19px;
    padding-left: 6px;
    padding-right: 25px;
    font-size: 10px;
    /* border: 0; */
    outline: none;
    margin-top: 10px;
    border-radius: 10px;
    position: absolute;
    right: 22%;
    top: 16px;
    background: white;
}

.top>.search {
    position: absolute;
    right: 23%;
    top: 26px;
    font-size: 12px;
}

.topMenu {
    display: flex;
    align-items: center;
    height: 100%;
    width: 20%;
    font-size: 13px;
}

.topMenu>li {
    margin-right: 14px;
    /* color: #cccccc; */
    transition: all 0.2s ease 0s;
}

.topMenu>li:hover {
    color: #d2ba32;
}

.topMenu>li:last-of-type {
    margin-right: 0;
}

.innerheaderDown {
    /* background: #191919; */
    height: 70px;
    width: 100%;
}



.gnb {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
}

.gnb>li {
    flex: 1;
    text-align: center;
    /* color: white; */
    position: relative;
    transition: all 0.s ease 0s;
}
.gnb>li:hover{
    background-color: #ebebeb6e;
}


.gnb>li>a {
    display: block;
    line-height: 70px;
    transition: all 0.1s ease 0s;
}

.gnb>li:hover>a {
    color: black;
}

.gnb>li>ul>li:hover {
    background: #ebebeb6e;
    color: black;
}

.gnb>li>ul {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: all 0.1s ease 0s;
}

.gnb>li>ul::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 93%;
    border-left: 1px solid gray;
}



.gnb>li>ul>li {
    padding: 8px 15px;
    transition: all 0.1s ease 0s;
    /* color: #fff */
}

.gnb>li>ul>li>a {
    display: block;
}

.gnb>li>ul>li>a:hover {
    color: black;
}
</style>
  