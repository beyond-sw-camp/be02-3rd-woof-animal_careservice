<template>
    <a class="page-item" :href="'/productCeo/detail/' + product.idx">
        <div class="item-wrapper">
            <div class="item-image-wrapper">
                <div class="item-image"></div>
            </div>
            <div class="item-info-wrapper">
                <div class="item-info">
                    <div class="item-info-profille-image-wrapper">
                        <img class="item-info-profille-image"
                            src="https://dugs12pdb1jsf.cloudfront.net/profile/8c06f4f423fd4efdbbe85133d991d0ca.png"
                            alt=" 훈련사" />
                    </div>
                    <p class="item-info-profille-name">
                        김승규 훈련사<!-- -->
                        ·
                        <!-- -->KKC 훈련사
                    </p>
                    <p class="item-info-profille-message">
                        우리 아이들의 마음을 이해하는 소통의 창이 되어드릴게요
                    </p>
                    <div class="item-info-review-wrapper">
                        <div class="item-info-review">
                            <img class="item-info-review-star-image"
                                src="https://wayopet.com/static/images/common/star_1.png" />
                            <span class="item-info-review-score">5.0</span><span class="item-info-review-count">452<!-- -->개
                                리뷰</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-bottom-wrapper">
                <div class="item-bottom">
                    <div class="item-bottom-type-wrapper">
                        <p class="item-bottom-type">영상 / 방문</p>
                    </div>
                    <p class="item-bottom-price">₩80,000 / ₩150,000</p>
                </div>
            </div>
        </div>
    </a>
</template>
  
  
<script>
export default {
    name: 'CardComponent',
    props:["product"]
}
</script>
  
<style>
.page-item {
    display: block;
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 39px;
    min-height: 387px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.07);
    border: 1px solid #ebebeb;
    border-radius: 9px;
}

.item-wrapper {
    position: relative;
}

.item-image-wrapper {
    position: relative;
    height: 181px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    overflow: hidden;
}

.item-image {
    position: relative;
    height: 100%;
    overflow: hidden;
}

.item-info-wrapper {
    display: flex;
    position: relative;
}

.item-info {
    margin-top: 12px;
    margin-left: 24px;
    margin-right: 24px;
    padding-bottom: 18px;
    border-bottom: 1px solid #ebebeb;
}

.item-info-profille-image-wrapper {
    position: absolute;
    top: -25px;
    right: 24px;
}

.item-info-profille-image {
    width: 50px;
    height: 50px;
    border-radius: 25px;
}

.item-info-profille-name {
    font-size: 13px;
    letter-spacing: -0.2px;
    font-weight: 500;
    color: #777777;
    line-height: 15px;
    margin-top: 16px;
}

.item-info-profille-message {
    color: #333333;
    font-size: 18px;
    font-weight: 500;
    margin-top: 12px;
    line-height: 27px;
}

.item-info-review-wrapper {
    margin-top: 12px;
    display: flex;
    align-items: center;
}

.item-info-review {
    display: flex;
    margin-right: 3px;
    align-items: center;
}

.item-info-review-star-image {
    width: 12px;
    height: 12px;
    margin-right: 4px;
}

.item-info-review-score {
    font-size: 13px;
    font-weight: 600;
    color: #555555;
    margin-right: 9px;
}

.item-info-review-count {
    font-size: 12px;
    font-weight: 500;
    color: #a0a0a0;
    text-decoration: underline;
}

.item-bottom-wrapper {
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 18px;
    margin-bottom: 18px;
}

.item-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item-bottom-type-wrapper {
    padding: 5px 6px 3px 6px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 11px;
}

.item-bottom-type {
    font-weight: 500;
    font-size: 11px;
    letter-spacing: -0.2px;
    color: #999999;
    line-height: 15px;
}

.item-bottom-price {
    font-size: 15px;
    color: #333333;
    letter-spacing: 0.5px;
}
</style>
  