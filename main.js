let expression = '';

function number(val) {
  if(val == '0'){
    if(expression.length == 0)
    return;
  }
  expression = expression + val;
  document.querySelector("#text-display").value = expression;
}

function clean() {
  expression = '';
  document.querySelector("#text-display").value = expression;
}

function result(){
  if(expression.length == 0){
    return;
  }
  let evaluate = eval(expression)
  if(evaluate == "undefined" || evaluate == "Infinity" || evaluate == "NaN" || evaluate == "-Infinity"){
    document.querySelector("#text-display").value = "Error";
    return;
  }
  document.querySelector("#text-display").value = evaluate;
  expression = document.querySelector("#text-display").value;
}

function back(){
  if(expression.length == 0){
    return;
  }
  expression = expression.slice(0,-1);
  document.querySelector("#text-display").value = expression;
}

function doubleZero(){
  if(expression.length == 0)
  return;

  expression = expression + "00";
  document.querySelector("#text-display").value = expression;
}

function operator(val){
  if(expression.length == 0){
    if(val == '-'){
      expression = expression + val;
      document.querySelector("#text-display").value = expression;
    }
    return;
  }

  if(expression.charAt(expression.length-1) == '.'){
    return;
  }

  if(expression.charAt(expression.length-1) == '+' ||
  expression.charAt(expression.length-1) == '-' || expression.charAt(expression.length-1) == '*' || expression.charAt(expression.length-1) == '/' || expression.charAt(expression.length-1) == '%'){
    expression = expression.slice(0,-1);
    expression = expression + val;
    document.querySelector("#text-display").value = expression;
    return;
  }

  expression = expression + val;
  document.querySelector("#text-display").value = expression;

}

function decimal() {
  if(expression.length == 0 || expression.charAt(expression.length-1) == '+' ||
  expression.charAt(expression.length-1) == '-' || expression.charAt(expression.length-1) == '*' || expression.charAt(expression.length-1) == '/' || expression.charAt(expression.length-1) == '%'){
    return;
  }
  expression = expression + ".";
  document.querySelector("#text-display").value = expression;
}