window.onload = function start() {
  let submitBtn = document.getElementsByClassName("common-btn");
  let textArea = document.getElementsByClassName("text-area");

  submitBtn[0].addEventListener("click", async () => {
    if (window.confirm(`답장을 작성하시겠습니까?\n${textArea[0].value}`)) {
      await this.alert("답장이 작성 되었습니다.");
      window.location.href = "./ownerReviewCheck.html";
    }
  });
};
