function hi() {
  //alert("hi!");
  console.log("hihihihi");
  console.log("aaa");
}

function total(x, y) {
  return x + y;
}

function sum(x, y) {
  let result = x + y;
  console.log(result);
}

function name() {
  let n = null;
  while (n == null) {
    alert("입력해주세요");
    n = prompt("이름 입력");
  }
  console.log(n);
  alert(n + "님 안녕하세요!");
}
