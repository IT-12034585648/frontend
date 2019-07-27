function getNum1() {
  // num1の数値を戻り値としてreturnする処理を書いてください
  return parseFloat(document.getElementById("num1").value);
}

function getNum2() {
  // num2の数値を戻り値としてreturnする処理を書いてください
  return parseFloat(document.getElementById("num2").value);
}

function showResult(num) {
  // <div id="box">にnumを表示する処理を書いてください
  document.getElementById("box").innerHTML = num;
}

document.getElementById("add-button").onclick = function() {
  var result = getNum1() + getNum2();
  showResult(result);
};

document.getElementById("sub-button").onclick = function() {
  var result = getNum1() - getNum2();
  showResult(result);
};

document.getElementById("mul-button").onclick = function() {
  var result = getNum1() * getNum2();
  showResult(result);
};

document.getElementById("div-button").onclick = function() {
  var result = getNum1() / getNum2();
  showResult(result);
};
