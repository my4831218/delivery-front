window.onload = function start() {
  loginBtn = this.document.getElementsByClassName("riderlogin-btn");
  loginBtn[0].addEventListener("click", () => {
    window.location.href = "./ridermain.html";
  });

  loginBtn[1].addEventListener("click", () => {
    window.location.href = "../signUp.html";
  });
};
