window.onload = function start() {
  editBtns = this.document.getElementsByClassName("common-btn");

  inputs = this.document.getElementsByClassName("input-menu-add");

  editBtns[0].addEventListener("click", async () => {
    if (
      window.confirm(
        `이름 : ${inputs[0].value}\n가격 : ${inputs[1].value}\n수정 하시겠습니까?`
      )
    ) {
      await this.alert("메뉴가 수정 되었습니다!");
      window.location.href = "./ownerMenuManage.html";
    }
  });

  editBtns[1].addEventListener("click", async () => {
    if (window.confirm("메뉴를 삭제하시겠습니까?")) {
      await this.alert("메뉴가 삭제 되었습니다!");
      window.location.href = "./ownerMenuManage.html";
    }
  });
};
