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

//수정
function solution() {
  let name = null;
  while (name === null || name === "") {
    alert("입력해주세요");
    name = prompt("이름 입력");
  }
  console.log(name);
  alert(name + "님 안녕하세요!");
}

function solution2() {
  let number = prompt("입력");

  while (isNaN(number) || number === "" || number === null) {
    alert("숫자를 입력해주세요");
    number = prompt("입력");
  }

  if (number >= 1 && number <= 100) {
    for(let i=1; i<=100; i++){
        console.log(i);
    }
    alert("완료되었습니다")
  }else{
    alert("1이상 100이하를 넣어주세요");
    solution2();
  }
}
