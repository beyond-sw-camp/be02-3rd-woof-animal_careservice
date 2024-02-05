<template>
    <div class="gototop">
        <i class="fa-solid fa-caret-up"></i>
    </div>
    <div class="gotodown">
        <i class="fa-solid fa-caret-down"></i>
    </div>
</template>
  
  
<script>
export default {
    name: 'GoToBtnComponent',
    methods: {

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
  