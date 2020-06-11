window.onload = function start() {
  OKBtns = this.document.getElementsByClassName("attached-btn");
  OKBtns[0].addEventListener("click", async () => {
    if (window.confirm("수락하시겠습니까?")) {
      // 수락하는 로직
      window.alert("수락 하셨습니다.");
      window.location.href = "./riderSubmitted.html";
    }
  });
};
