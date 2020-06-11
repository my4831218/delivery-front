window.onload = function start() {
  doneBtn = this.document.getElementsByClassName("common-btn");
  doneBtn[0].addEventListener("click", async () => {
    if (window.confirm("정말 배달을 완료하시겠습니까?")) {
      await alert("배달 완료 처리 되었습니다.");
      window.location.href = "./riderFeeManage.html";
    }
  });
};
