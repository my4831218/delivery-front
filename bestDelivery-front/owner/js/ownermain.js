window.onload = function start() {
  mainButtons = this.document.getElementsByClassName("common-btn");

  mainButtons[0].addEventListener("click", () => {
    //배달 포인트 관리
    window.location.href = "./ownerDeliveryPointManage.html";
  });

  mainButtons[1].addEventListener("click", () => {
    //메뉴 관리
    window.location.href = "./ownerMenuManage.html";
  });

  mainButtons[2].addEventListener("click", () => {
    //주문 관리
    window.location.href = "./ownerOrderManage.html";
  });

  mainButtons[3].addEventListener("click", () => {
    //지난 주문
    window.location.href = "./ownerLastOrders.html";
  });
};
