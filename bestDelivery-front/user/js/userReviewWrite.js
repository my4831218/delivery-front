window.onload = function start() {
  submitBtn = document.getElementsByClassName("common-btn");
  submitBtn[0].addEventListener("click", async () => {
    if (window.confirm("리뷰를 작성하시겠습니까?")) {
      await alert("리뷰 작성이 완료 되었습니다.");
      window.location.href = "./usermain.html";
    }
  });
};
