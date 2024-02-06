<h1 align="center">
반려동물 케어 서비스

🐾 **우리 아이 프렌드, WOOF!** 🐾</h1>


<div align="center">
<img src="img/main.png" width="600" height="600"/>
</div>


> [플레이 데이터] 한화시스템 BEYOND SW캠프 / Woof


<br>

##  🌅 프로젝트 배경

<div align="center">
<img src="img/petissue.jpg" />
</div>
유로모니터 인터네셔널에 따르면 지난해 세계 반려동물 시장 규모는 1680억 달러로 올해는 9.5% 성장한 1840억 달러 규모가 전망된다.

(...)

펫(pet)과 인간화(Humanization)가 합쳐진 ‘펫휴머니제이션’, 즉 동물을 사람처럼 생각하는 소비자들의 트렌드를 꼽았다. 반려동물 소비자들이 반려동물을 자기와 동일시하거나 가족처럼 대하면서 반려동물 시장의 프리미엄화를 이끌고 있다는 것이다.  
>출처 : [농수축산신문](https://www.aflnews.co.kr/news/articleView.html?idxno=251068)


## ✨ 프로젝트 소개

 * 펫휴머니제이션 시대를 살아가는 반려인과 반려동물들을 위한 특별한 펫시터 서비스를 제공하기 위한 서비스입니다.

 * 사용자들이 전문적인 반려동물 케어 서비스(미용, 병원)를 찾고 원하는 펫시터(매니저)를 선택하여 반려동물에게 필요한 케어를 쉽게 찾을 수 있도록 도와줍니다.

 * 이 서비스를 통해 효과적이고 편리하게 반려인과 반려동물이 더 나은 삶을 즐길 수 있기를 바랍니다.


## 📌 프로젝트 목표

<p align="left">
  HTML, CSS, JavaScript, Vue.js 등을 이용해서 기존 백엔드 프로젝트(be02-2nd-woof-animal_careservice)와 연계하여
  이용자의 회원가입 및 로그인, 정보수정, 조회가 가능하도록 구현하였습니다.

  로그인 후 Ceo와 Manager는 상품을 CRUD를 할 수 있습니다.

  Member는 상품을 List와 Read기능을 통해 조회 후 Orders 기능을 통해 상품을 주문 할 수 있습니다.
  
  사용자는 Review를 조회할 수 있고, 주문을 한 사용자(Member)는 Review 작성, 수정이 가능합니다.
 </p>

## 프로젝트 설계
<img src="img/SystemArchitecture.png" width="800" height="600"/>

<br />

## 💻STACKS
<div align=center>
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
  <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=flat&logo=vuedotjs&logoColor=%234FC08D" />
<img src="https://img.shields.io/badge/Ununtu-E95420?style=flat&logo=Ubuntu&logoColor=black&color=darkorange">
<img src="https://img.shields.io/badge/nginx-%23009639.svg?style=flat&logo=nginx&logoColor=white"></a>
<img src="https://img.shields.io/badge/Pinia-0285C9?style=flat&color=dark"></a></a>
<br>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white&color=black"></a></a>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white&color=ffa500"></a></a>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/></a></a>
<img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat&logo=AmazonAWS&logoColor=black&color=orange"/></a></a>
<img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat&logo=Amazon S3&logoColor=white&color=red"/></a></a>
<img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=flat&logo=Amazon%20EC2&logoColor=white"></a></a>
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

일반 회원 가입 & 로그인
<br/>
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/93915072/bf47c430-5fcd-4201-a916-d3f5e5f4216d">
</p>
<br/>

매니저 회원 가입 & 로그인 
<hr/>
<p align="center">
<img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/93915072/5ae8ff13-1946-4dc5-826c-289433143e85"> 
</p>
<br/>

업체 회원 가입 & 로그인
<hr/>
<p align="center">
<img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/93915072/fecdd191-c26c-493d-b078-f3d6cf51345c">
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
