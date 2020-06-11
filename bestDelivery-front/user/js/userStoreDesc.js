window.onload = function start() {
  let reviewBtn = this.document.getElementById("reviewBtn");
  let orderBtn = this.document.getElementById("orderBtn");

  reviewBtn.addEventListener("click", (e) => {
    window.location.href = "./userStoreReview.html";
  });

  orderBtn.addEventListener("click", async (e) => {
    if (
      window.confirm(`정말 주문하시겠습니까?\n
    선택한 음식 : ${"짜장면"}\n
    선택한 쿠폰 : ${"100% 할인쿠폰"}\n
    총 가격: ${"3000원"}\n`)
    ) {
      await alert("주문이 완료되었습니다.");
      window.location.href = "./userCategoryList.html";
    }
  });
};
