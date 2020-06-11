window.onload = function start() {
  let buttons = this.document.getElementsByClassName("common-btn");
  buttons[0].addEventListener("click", () => {
    window.location.href = "./riderCallList.html";
  });
  buttons[1].addEventListener("click", () => {
    window.location.href = "./riderFeeManage.html";
  });
};
