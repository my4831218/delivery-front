window.onload = function start() {
  userLoginBtns = document.getElementsByClassName("userlogin-btn");
  userLoginBtns[0].addEventListener("click", (e) => {
    window.location.href = "./usermain.html";
  });

  userLoginBtns[1].addEventListener("click", (e) => {
    window.location.href = "../signUp.html";
  });
};
