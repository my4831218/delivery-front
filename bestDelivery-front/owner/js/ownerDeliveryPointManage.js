window.onload = function start() {
  chargeBtn = document.getElementsByClassName("common-btn");
  chargeInput = document.getElementById("chargeInput");

  chargeBtn[0].addEventListener("click", async () => {
    if (
      window.confirm(`정말 ${chargeInput.value} 포인트를 충전하시겠습니까?`)
    ) {
      await window.alert(`${chargeInput.value} 포인트가 충전 되었습니다.`);
      window.location.reload();
    }
  });
};
