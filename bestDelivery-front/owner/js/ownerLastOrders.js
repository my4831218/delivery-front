window.onload = function start() {
  showReviewBtns = this.document.getElementsByClassName("attached-btn");

  for (let i = 0; i < showReviewBtns.length; i++) {
    showReviewBtns[i].addEventListener("click", async () => {
      window.location.href = "./ownerReviewCheck.html";
    });
  }
};
