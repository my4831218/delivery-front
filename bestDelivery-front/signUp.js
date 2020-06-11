window.onload = function start() {
  let radios = this.document.getElementsByClassName("radio-input");

  let id = this.document.getElementById("id");
  let pw = this.document.getElementById("pw");

  let value = null;

  let signUpBtn = document.getElementsByClassName("common-btn");
  signUpBtn[0].addEventListener("click", async () => {
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        value = radios[i].value;
      }
    }
    if (
      window.confirm(
        `타입 : ${value}\nID : ${id.value}\n PW : ${pw.value}\n위 정보가 맞습니까?`
      )
    ) {
      await this.alert("회원가입이 완료 되었습니다!");
      window.location.href = "./index.html";
    }
  });
};
