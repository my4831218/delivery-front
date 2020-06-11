window.onload = function start() {
  inputs = document.getElementsByClassName("input-menu-add");
  addMenuBtn = this.document.getElementsByClassName("common-btn");

  addMenuBtn[0].addEventListener("click", async () => {
    if (
      window.confirm(
        `메뉴명 : ${inputs[0].value} \n가격 : ${inputs[1].value}\n 을 추가하시겠습니까?`
      )
    ) {
      await this.alert("메뉴가 추가 되었습니다.");
      window.location.href = "./ownerMenuManage.html";
    }
  });
};
