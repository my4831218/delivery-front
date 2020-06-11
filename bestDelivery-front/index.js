window.onload = function start() {
  let buttons = document.getElementsByClassName("index-btn");
  buttons[0].addEventListener("click", (e) => {
    window.location.href = "./user/userlogin.html";
  });

  buttons[1].addEventListener("click", (e) => {
    window.location.href = "./rider/riderlogin.html";
  });

  buttons[2].addEventListener("click", (e) => {
    window.location.href = "./owner/ownerlogin.html";
  });
};
