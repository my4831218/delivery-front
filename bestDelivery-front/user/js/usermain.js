window.onload = function start() {
  let categories = this.document.getElementsByClassName("food-category");

  categories[0].addEventListener("click", (e) => {
    window.location.href = "./userCategoryList.html";
  });

  categories[1].addEventListener("click", (e) => {
    window.location.href = "./userCategoryList.html";
  });

  categories[2].addEventListener("click", (e) => {
    window.location.href = "./userCategoryList.html";
  });

  categories[3].addEventListener("click", (e) => {
    window.location.href = "./userCategoryList.html";
  });

  let myPageBtn = this.document.getElementsByClassName("usermain-mypage-btn");
  myPageBtn[0].addEventListener("click", (e) => {
    window.location.href = "./usermyPage.html";
  });
};
