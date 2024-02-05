<template>
    <div>
        <h1>예약을 성공적으로 <br> 삭제했습니다</h1>
        <button class="btn" v-on:click="gomain">메인 페이지로 가기</button>
    </div>
        
</template>

<script>
  export default {

methods: {
  async gomain() {

      this.$router.push("/");
    
  }
}};
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
}
h1{
    margin: 0 auto;
    font-size: 34px;
    margin-bottom: 40px;
    font-weight: bold;
    width: 350px;
    text-align: center;
}
.btn{

    background-color: #fae14a;
    margin-top: 20px;
    border: none;
    padding: 25px;
    border-radius: 10px;
    transition: all 0.2s ease 0s;
    align-items: center;
    width: 217px;
}

.btn:hover{
    background-color: #e9df6959;
}
</style>