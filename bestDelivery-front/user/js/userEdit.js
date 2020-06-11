window.onload = function start() {
  let inputs = this.document.getElementsByClassName("useredit-inputbox");

  let fixBtn = this.document.getElementById("fixBtn");

  fixBtn.addEventListener("click", async () => {
    if (
      window.confirm(`
      이름 : ${inputs[0].value}\n
      ID : ${inputs[1].value}\n
      PW : ${inputs[2].value}\n
      이 정보로 수정하시겠습니까?
      `)
    ) {
      // 여기에 정보를 수정하는 로직
      await alert("수정 되었습니다!");
      window.location.href = "./userInfo.html";
    }
  });
};
