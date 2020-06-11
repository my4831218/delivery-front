window.onload = function start() {
  menuBtns = document.getElementsByClassName("common-btn");

  menuBtns[0].addEventListener("click", () => {
    window.location.href = "./ownerMenuEdit.html";
  });

  menuBtns[1].addEventListener("click", () => {
    window.location.href = "./ownerMenuAdd.html";
  });
};
