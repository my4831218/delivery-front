window.onload = function start() {
  editBtns = this.document.getElementsByClassName("attached-btn");

  for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener("click", () => {
      window.location.href = "./ownerMenuEditDetail.html";
    });
  }
};
