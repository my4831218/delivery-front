window.onload = function start() {
  //정보, 수정, 기록

  let userMyPageBtns = this.document.getElementsByClassName("common-btn");

  userMyPageBtns[0].addEventListener("click", () => {
    //회원 정보 바로가기
    window.location.href = "./userInfo.html";
  });

  userMyPageBtns[1].addEventListener("click", () => {
    //회원 정보 수정 바로가기
    window.location.href = "./userEdit.html";
  });

  userMyPageBtns[2].addEventListener("click", () => {
    //나의 주문 기록 바로가기
    window.location.href = "./userOrderHistory.html";
  });
};
