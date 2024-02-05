<template>
  <div>
      <h2>설명 수정</h2>
      <br><br><br>
      가게 이름 <input type="text" v-model="storeName" /><br>
      상품 이름 <input type="text" v-model="productName" /><br>
      상품 설명 <input type="text" v-model="contents" /><br>
      전화 번호 <input type="text" v-model="phoneNumber" /><br>
      가     격 <input type="text" v-model="price" /><br>
      <br>
      <button @click="updateProduct">상품 수정</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          idx: null,
          storeName: "",
          productName: "",
          contents: "",
          phoneNumber: "",
          price: ""
      }
  },
  methods: {
      loadProductInfo(idx) {
          fetch(`http://localhost:8080/productCeo/${idx}`)
              .then(response => response.json())
              .then(data => {
                  if (data.code === 1000) {
                      const product = data.result;
                      this.idx = product.idx;
                      this.storeName = product.storeName;
                      this.productName = product.productName;
                      this.contents = product.contents;
                      this.phoneNumber = product.phoneNumber;
                      this.price = product.price;
                  }
              });
      },
      updateProduct() {
          fetch(`http://localhost:8080/productCeo/updateCeo`, {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  idx: this.idx,
                  storeName: this.storeName,
                  productName: this.productName,
                  contents: this.contents,
                  phoneNumber: this.phoneNumber,
                  price: this.price
              }),
          })
              .then((response) => response.text())
              .then((data) => {
                  if (data === "수정") {
                      alert('상품이 성공적으로 수정되었습니다.');
                      this.$router.push(`/productCeoDetail?idx=${this.idx}`);
                  } else {
                      alert('상품 수정에 실패했습니다.');
                  }
              })
              .catch((error) => {
                  console.error('Error:', error);
              });
      }
  },
  created() {
      const urlParams = new URLSearchParams(window.location.search);
      this.idx = urlParams.get('idx');
      if (this.idx) {
          this.loadProductInfo(this.idx);
      }
  }
}
</script>