window.onload = function start() {
  let storelist = this.document.getElementsByClassName("storelist-list");
  storelist[0].addEventListener("click", (e) => {
    window.location.href = "./userStoreDesc.html";
  });
};
