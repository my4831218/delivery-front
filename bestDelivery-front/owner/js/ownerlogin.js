window.onload = function start() {
  ownerLoginBtns = this.document.getElementsByClassName("ownerlogin-btn");

  ownerLoginBtns[0].addEventListener("click", () => {
    // 로그인
    window.location.href = "./ownermain.html";
  });

  ownerLoginBtns[1].addEventListener("click", () => {
    window.location.href = "../signUp.html";
  });
};
