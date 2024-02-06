
<h1 align="center">
반려동물 케어 서비스

Woof </h1>


<div align="center">
<img src="img/main.png" width="600" height="600"/>
</div>


> [플레이 데이터] 한화시스템 BEYOND SW캠프 / Woof


<br>

## ✨ 프로젝트 설명

```sh
이 프로젝트는 반려동물의 전반적인 루틴을 관리하고, 반려인들이 편리한 서비스를 이용할 수 있도록 돕는 서비스를 제공합니다. 이 서비스는 반려동물의 일상, 생활 패턴, 건강 상태 등 다양한 정보를 분석하여 반려인들에게 유용한 피드백과 조언을 제공합니다.

또한, 이 서비스는 바쁜 반려인들의 반려동물 케어를 조금이나마 돕고 반려동물을 지속적으로 모니터링하여 적절한 조치를 취할 수 있도록 돕습니다.

그리고, 사용자들이 전문적인 반려동물 케어 서비스를 찾고 예약할 수 있도록 지원합니다. 우리는 미용, 병원등과 같은 다양한 종류의 서비스를 제공하는 업체들과 협력하여, 사용자들이 그들의 반려동물에게 필요한 케어를 쉽게 찾을 수 있도록 도와줍니다.

우리의 목표는 반려동물이 건강하고 행복한 생활을 할 수 있도록 반려인들을 지원하는 것입니다. 우리는 이 서비스를 통해 반려동물 케어를 더 효과적이고 편리하게 만들기를 희망하고, 반려인과 반려동물이 더 나은 삶을 즐길 수 있도록 돕고자 합니다.
```

## 📌 프로젝트 목표

```sh
HTML, CSS, JavaScript, Vue.js 등의 기술을 이용해서 기존 백엔드 프로젝트(be02-2nd-woof-animal_careservice)와 연계하여
Ceo(반려동물 업체) / Manager(직원) / Member(소비자) 이용자가 회원가입 및 로그인, 회원정보수정, 조회, 탈퇴가 가능하도록 구현하였습니다.
로그인 후 Ceo와 Manager는 상품을 CRUD를 할 수 있습니다.
Member는 상품을 List와 Read기능을 통해 조회 후 Cart기능을 통해 즐겨찾기를 할 수 있고, Orders 기능을 통해 상품을 주문 할 수 있습니다.
사용자는 Review를 조회할 수 있고, 주문을 한 사용자(Member)는 Review를 작성, 수정이 가능합니다.
우리의 플랫폼은 사용자가 필요에 따라 전문적인 반려동물 케어 서비스를 찾고 예약할 수 있도록 지원합니다.
이를 통해 반려인들은 그들의 반려동물에게 필요한 케어를 손쉽게 받을 수 있습니다.
최종적으로 우리의 목표는 반려동물의 건강을 향상시키고, 반려인과 반려동물 사이의 삶의 질을 향상시키는 데 기여하는 것입니다.
이 프로젝트를 통해 반려동물이 건강하고 행복한 삶을 즐길 수 있도록 돕는 데 중요한 역할을 하고자 합니다.
```

## 프로젝트 설계
<img src="img/SystemArchitecture.png" width="800" height="600"/>

<br />

## 💻STACKS
<div align=center>
<img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=Vue.js&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>
<img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white">
<img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white">
<img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
   <br>
</div>

## 🔍 요구사항 명세서

<details>
<summary>자세히 보기(클릭)</summary>

<!-- 일단 옛날꺼 복붙한거임 -->
[1] 사용자

1. Woof에 회원가입을 할 수 있다
   ->ID, PW, e-mail을 입력해야 한다
2. 로그인을 할 수 있다
3. 아이디는 이메일로 비밀번호는 대문자, 소문자, 특수문자를 사용하여 10자리 이상으로 설정한다
4. 원하는 시간대에 예약을 할 수 있다
   ->1시간 단위로 예약이 가능하고 중복 선택이 가능하다
5. 각 서비스 마다 요구사항을 작성할 수 있다

[2] 업체(유치원, 병원, 미용실)
1. 업체 등록을 할 수 있다
   ->ID, PW, e-mail, 사업자등록증을 입력해야한다
2. 예약한 고객 정보를 확인하고 관리할 수 있다.

[3] Woof 매니저
1. 우프는 매니저의 경력, 차량 번호, 사원번호를 등록할 수 있다
2. 사용자는 반려동물의 상태에 따라 매니저의 성별을 선택할 수 있고 미선택시 랜덤배정이 된다
3. 고객의 정보를 확인하고 매니저를 배정한다

[4] 예약
1. 고객은 시간, 픽업장소를 선택할 수 있다
2. 고객은 가게 책임자의 ID를 확인할 수 있다
3.  사용자들은 예약번호와 시간, 매니저의 식별번호를 확인할 수 있다
4. 예약 내역은 예약 시간, 처치내용, 방문업체를 사용자로부터 수집한다.

[5] 리뷰
1. 사용자는 이용한 업체에 대한 리뷰 작성과 사진 첨부가 가능하다
2. 사용자는 리뷰 열람에 대한 권한 설정을 할 수 있다.
3. 업체는 고객의 리뷰 번호와 별점, 사진을 확인할 수 있다
4. 업체는 고객의 리뷰에 댓글을 작성할 수 있다
5. 리뷰 작성 시 최소 10글자 이상, 사진 선택, 별점 필수
6. 별점이 일정 시간 이상 꾸준히 낮다면 업체는 상위 노출이 되지 않게 패널티를 부여 받는다


[6] 결제
1. woof는 사용자에게 결제를 요청할 수 있다

[7] 반려동물 등록
1. 고객은 반려동물의 상태를 등록할 수 있다
2. 고객은 반려동물의 나이, 보유질환, 반려동물 등록번호를
3. 업체는 고객의 반려동물의 정보를 확인할 수 있다.
</details>


## 기능 명세서
[Figma](https://www.figma.com/file/yjIBFhdhZncLcf8b86gVjo/woof?type=design&node-id=0%3A1&mode=design&t=yL5aeT6QrqejlCSP-1)


## 테스트 및 결과

<details>
<summary>회원 기능</summary>
<br/>

일반 회원 가입
<br/>
<hr/>
<p align="center">
  <img src="img/public%20signup.png">
</p>
<br/>
일반 회원 로그인
<hr/>
<p align="center">
  <img src="img/public%20login.png">
</p>
<br/>

매니저 회원 가입
<hr/>
<p align="center">
<img src="img/manager%20signup.png"> 
</p>
<br/>

매니저 로그인
<hr/>
<p align="center">
<img src="img/manager%20login.png">
</p>
<br/>

업체 회원 가입
<hr/>
<p align="center">
<img src="img/Ceo%20signup.png">
</p>
<br/>

업체 로그인
<hr/>
<p align="center">
<img src="img/Ceo%20login.png">
</p>
<br/>
</details>



<details>
<summary>상품 기능</summary>

업체 등록
<hr/>
<p align="center">
  <img src="img/product%20create.png">
</p>
<br/>

업체 리스트
<hr/>
<p align="center">
  <img src="img/product%20list.png">
</p>
<br/>

업체 조회
<hr/>
<p align="center">
  <img src="img/product%20read.png">
</p>
<br/>

업체 수정
<hr/>
<p align="center">
  <img src="img/product%20modify.png">
</p>
<br/>

업체 삭제
<hr/>
<p align="center">
  <img src="img/product%20delete.png">
</p>
<br/>

매니저 등록
<hr/>
<p align="center">
  <img src="">
</p>

매니저 리스트
<hr/>
<p align="center">
  <img src="">
</p>

매니저 조회
<hr/>
<p align="center">
  <img src="">
</p>


매니저 수정
<hr/>
<p align="center">
  <img src="">
</p>

매니저 삭제
<hr/>
<p align="center">
  <img src="">
</p>
</details>

<details>
<summary>주문 기능</summary>


주문 등록
<hr/>
<p align="center">
  <img src="">
</p>
<br/>

주문 리스트
<hr/>
<p align="center">
  <img src="">
</p>
<br/>

주문 조회
<hr/>
<p align="center">
  <img src="">
</p>
<br/>

주문 수정
<hr/>
<p align="center">
  <img src="">
</p>
<br/>


주문 삭제
<hr/>
<p align="center">
  <img src="">
</p>
<br/>
</details>

<details>
<summary>마이페이지 기능</summary>
<br/>

회원 정보 수정
<hr/>
<p align="center">
  <img src="">
</p>
<br/>

예약 내역
<hr/>
<p align="center">
  <img src="">
</p>
<br/>

즐겨찾기 목록
<hr/>
<p align="center">
  <img src="">
</p>
<br/>

리뷰 관리
<hr/>
<p align="center">
  <img src="">
</p>
<br/>
</details>

<details>
<summary>리뷰 기능</summary>
<br/>

리뷰 등록
<hr/>
<p align="center">
  <img src="">
</p>
<br/>

리뷰 조회
<hr/>
<p align="center">
  <img src="">
</p>
<br/>

리뷰 수정
<hr/>
<p align="center">
  <img src="">
</p>
<br/>
</details>

<details>
<summary>결제 기능</summary>
결제 기능


자세한 사진은 Docs/실행결과 폴더 확인해주세요.

</details>

<details>
<summary>상세 기능</summary>
<br/>

About us
<hr/>
<p align="center">
  <img src="">
</p>
<br/>

</details>



## 🤼‍♂️팀원

**👽️팀원 : 강문혜**

**✨️팀원 : 강지흔**

**💚️팀원 : 김주연**

**🙂️팀원 : 김지은**

**🚀️팀원 : 이창훈**