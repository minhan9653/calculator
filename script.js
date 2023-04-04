
  function input(value) {
    const display = document.getElementById("display");
    const answer = document.getElementById("answer");
  
    if (value === "back") {
      display.value = display.value.slice(0, -1);
    } else if (value === "ce") {
      display.value = "";
    } else if (value === "c") {
      display.value = "";
      answer.value = "";
    } else if (value === "=") {
        document.getElementById("answer").value = eval(document.getElementById("display").value);
    }else {
        document.getElementById("display").value += value;
    }
  }
  
  
  
  