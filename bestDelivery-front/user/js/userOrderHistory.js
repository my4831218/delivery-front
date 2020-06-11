window.onload = function start() {
  let reviewBtns = this.document.getElementsByClassName("attached-btn");

  reviewBtns[0].addEventListener("click", () => {
    window.location.href = "./userReviewWrite.html";
  });
};
