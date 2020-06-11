window.onload = function start() {
  callRiderBtns = document.getElementsByClassName("attached-btn");

  for (let i = 0; i < callRiderBtns.length; i++) {
    callRiderBtns[i].addEventListener("click", async () => {
      if (window.confirm("라이더를 호출하시겠습니까?")) {
        await window.alert("라이더를 호출했습니다!");
        window.location.href = "./ownermain.html";
      }
    });
  }
};
