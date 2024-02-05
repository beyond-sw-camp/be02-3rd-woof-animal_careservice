<template>
    <div class="gototop" v-show="showGoToTop" v-on:click="goToTop">
        <i class="fa-solid fa-caret-up"></i>
    </div>
    <div class="gotodown" v-show="showGoToDown" v-on:click="goToDown">
        <i class="fa-solid fa-caret-down"></i>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showGoToTop: false,
      showGoToDown: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showGoToTop = window.scrollY > 40;
      this.showGoToDown = window.scrollY < document.body.scrollHeight - window.innerHeight;
    },
    goToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    goToDown() {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }
}
</script>




<style>

.gototop{
    position: fixed;
    right: 76px;
    bottom: 59px;
    color: #313131;
    font-size: 64px;
    z-index: 10;
    cursor: pointer;
    border: none;
    BACKGROUND: none;
  }
  .gotodown{
    position: fixed;
    right: 75px;
    bottom: 36px;
    color: #313131;
    font-size: 64px;
    z-index: 10;
    cursor: pointer;
    border: none;
    BACKGROUND: none;
  }
</style>
  