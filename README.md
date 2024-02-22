<h1 align="center">
반려동물 케어 서비스

🐾 **우리 아이 프렌드, WOOF!** 🐾</h1>


<div align="center">
<img src="img/main.png" width="600" height="600"/>
</div>


> [플레이 데이터] 한화시스템 BEYOND SW캠프 / Woof


> [WOOF]http://woofwoof.kro.kr/


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

[1] 사용자
1. Woof에 회원가입을 할 수 있습니다.
   -> e-mail, PW, 닉네임, 전화번호, 반려동물정보를 입력해야 합니다.
2. 이메일 인증이 완료된 후 로그인 할 수 있습니다.
3. 헤더의 메뉴를 통해 업체조회, 매니저조회, 예약페이지, 상세페이지(About Us), 마이페이지로 이동할 수 있습니다.
4. 업체, 매니저를 선택하여 원하는 시간대에 예약(주문)할 수 있습니다.
   
[2] 업체 CEO (유치원, 병원, 미용실)
1. Woof에 회원가입을 할 수 있습니다.
   -> 사업자등록번호, PW, 이름, 전화번호, 업체소개를 입력해야 합니다.
2. 업체 등록을 할 수 있습니다
   -> 메뉴바에 업체를 클릭하면 업체List로 이동됩니다.
   -> CEO 권한이 부여되어있으면 상품등록 버튼이 활성화됩니다.
   -> 가게이름, 상품이름, 전화번호, 가격, 상품설명, 사진등록 모든 사항을 입력해야 합니다.

[3] Woof 매니저
1. Woof에 회원가입을 할 수 있습니다.
   -> e-mail, PW, 닉네임은 필수로 기입하고, 전화번호, 반려동물정보는 선택적으로 기입합니다.
2. 매니저 등록을 할 수 있습니다
   -> 메뉴바에 매니저를 클릭하면 매니저List로 이동됩니다.
   -> 매니저 권한이 부여되어있으면 상품등록 버튼이 활성화 됩니다.
   -> 매니저이름, 성별, 전화번호, 가격, 경력, 사진등록 모든 사항을 입력해야 합니다.

[4] 예약(주문)
1. 고객은 이름, 전화번호, 예약시간, 특이사항(요구사항), 픽업장소(매니저가 반려동물을 픽업할 장소)를 작성합니다.
2. 주문이 완료되면 예약 성공 페이지로 이동합니다.
   -> 성공페이지에서는 예약확인, 예약삭제, 예약수정 버튼을 통해 원하는 서비스가 이용 가능합니다.

[5] 리뷰
1. 사용자는 이용한 업체에 대한 리뷰 작성을 할 수 있습니다.
   ->주문한 상품 목록에 위치한 리뷰 작성하기를 통해 작성 가능합니다.
2. 해당 상품을 주문한 사용자는 리뷰 열람에 대한 권한 설정을 할 수 있습니다.
   ->리뷰를 작성하면 해당 상품의 idx 및 정보들을 불러와 해당 상품의 리뷰인 것을 확인 후 권한 부여
3. 업체는 고객의 리뷰 번호와 리뷰 내용을 확인할 수 있습니다.
   ->사용자에게 리뷰를 받으면 해당 상품과 리뷰 내용을 업체는 열람할 수 있습니다.

[6] 마이페이지
1. 사용자는 마이페이지에서 자신의 정보(닉네임, 이메일)를 확인할 수    있습니다.
2. 사용자는 회원 정보(닉네임, 비밀번호)를 수정할 수 있습니다.
3. 사용자는 마이페이지를 통해 자신의 예약내역을 확인할 수 있는 페이지로 이동할 수 있습니다.
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
<br/>

업체 등록
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/148935493/ee6f650b-4e4f-44a8-b1cf-aec1ee8bd720">
</p>
<br/>

업체 리스트
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/148935493/f9d36f71-6bc4-40b2-a74e-70021748b158">
</p>
<br/>

업체 조회
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/148935493/164d8970-ee43-43e0-ac34-5cf7c45fa90b">
</p>
<br/>

업체 수정
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/148935493/d2951578-f364-4313-80e3-8e2c025ef0ee">
</p>
<br/>

업체 삭제
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/148935493/78bc5ac7-c233-49b1-9f12-d67c01bc5a68">
</p>
<br/>

매니저 등록
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/148935493/73669221-794c-4092-a515-2b09c2937d09">
</p>

매니저 리스트
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/148935493/9b944368-d6ca-45fc-adfc-2850bd182d700">
</p>

매니저 조회
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/148935493/443c920d-4371-4363-9040-34f5a728cc0a">
</p>


매니저 수정
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/148935493/ed490434-54ac-4847-b3ff-b83d9f5c4db0">
</p>

매니저 삭제
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/148935493/a0f44e8c-89ec-473a-b011-2d272dac8574">
</p>
</details>
<details>
<summary>주문 기능</summary>


주문 등록
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/122515113/434fba18-33e4-4e62-b073-55977d53509d">
	<br>
	사용자가 업체와 매니저를 선택하고 폼 데이터를 양식에 맞게 입력하면 주문 전송이 완료된다
</p>

<br/>

주문 내역 확인 
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/122515113/7e2ff502-7f41-47fb-aeea-d825f878a8c2">
  <br> 주문 데이터를 보내면 예약내역, 삭제하기, 수정하기 창으로 넘어가게 되고 
  내역을 누르면 사용자의 주문 내역이 모두 불러와진다

</p>
<br/>

주문 수정
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/122515113/ad441577-cd83-4dba-aa34-f2b0fa276316">
<br>사용자가 주문 수정하기를 누르면 수정 가능한 양식이 나오고 양식에 따라 작성 후 주문 데이터를 전송하면 주문 수정이 이뤄진다
</p>

<br/>


주문 삭제
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/122515113/8fa4e810-10cf-455d-8d2c-71c7641e6d83">
	<br>주문 삭제를 누르면 주문 삭제 후 메인 페이지로 이동하게 된다 
</p>
<br/>
</details>

<details>
<summary>마이페이지 기능</summary>
<br/>

회원 정보 수정
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/148943354/c336ce0c-acd0-4f46-8897-84f50392407d">
</p>
<br/>

예약 내역
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/148943354/271c6a52-b4dc-4384-849f-5f85ac797c60">
  </p>
<br/>
</details>

<details>
<summary>리뷰 기능</summary>
<br/>

리뷰 등록
<hr/>
<p align="center">
  <img src="https://github.com/beyond-sw-camp/be02-3rd-woof-animal_careservice/assets/93915072/1538386d-8f18-4b83-962c-8d59b9f96597">
</p>
<br/>
</details>

<details>
<summary>결제 기능</summary>
결제 기능


자세한 사진은 Docs/실행결과 폴더 확인해주세요.

</details>



## 🤼‍♂️팀원

**👽️팀원 : 강문혜**

**✨️팀원 : 강지흔**

**💚️팀원 : 김주연**

**🙂️팀원 : 김지은**

**🚀️팀원 : 이창훈**
