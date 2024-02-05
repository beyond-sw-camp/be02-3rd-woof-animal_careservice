<template>
    <footer>
        <div class="footTop">
            <!-- <div class="innerfootTop">
                <a href="#">
                    <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                </a>
            </div> -->
        </div>
        <div class="footDown">
            <div class="innerfootDown">
                <div class="footleft">
                    <img src="/static/images/logo.png" alt="BOSE logo" />
                </div>
                <div class="footTxt">
                    <p>(주) WOOF | 대표자명 : 홍길동</p>
                    <address>
                        주소 : 서울시 동작구 보라매로87 402호 | 연락처: 02-1234-5678
                    </address>
                    <p>
                        사업자등록번호 : 123-12-12345 | 통신판매업신고번호 : 2024-서울동작-01234
                    </p>
                    <p>개인정보관리책임자 : 전우치</p>
                    <p>
                        <a href="#">이용약관 | 개인정보처리방침 </a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
  
  
<script>
export default {
    name: 'FooterComponent',
    components: {
    }
}
</script>
  
<style>
/* 풋터 */
/* footer {
    background: black;
    height: 251px;
} */

/* .footTop {
    height: 50px;
    background: #efe7b6;
} */

/* .innerfootTop {
    padding-top: 3px;
    align-items: center;
    background: #efe7b6;
    width: 100%;
    height: 43px;
    margin: 0 auto;
    color: #fff;
} */

.innerfootTop>a {
    font-size: 30px;
    color: #474646;
    margin: 0px 25px;
    transition: all 1s ease 0s;
}

.innerfootTop>a:hover {
    color: white;
}

.footDown {
    background: #fae14a;

    /* height: 200px;
    padding: 30px 0; */
}

.innerfootDown {
    width: 100%;
    height: 200px;
    margin: 0 auto;
    display: flex;
    position: relative;
}

.footTxt {
    position: absolute;
    top: 50%;
    left: 200px;
    transform: translateY(-50%);
    /* color: #aeacac; */
    font-size: 12px;
}

.footTxt>* {
    margin: 10px 50px;
    display: flex;
}
</style>
  