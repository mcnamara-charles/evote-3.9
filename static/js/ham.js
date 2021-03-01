//Get All Radio Controls
sauce = document.getElementsByClassName("radio__control");
//Get All inputs then only radio buttons
inp = document.getElementsByTagName("input");
for (let i = 0; i < inp.length; i++) {
  if (inp[i].type == "radio" && inp[i].checked) {
    inp[i].parentNode.classList.add("radioactive");
  }
  if (inp[i].type == "radio" && !inp[i].checked && inp[i].disabled) {
    console.log("DEBUG HIT");
    inp[i].parentNode.classList.add("disabled-rad");
  }
}


for (let i = 0; i < sauce.length; i++) {
  sauce[i].addEventListener("click", function() {
    changeStyle(sauce[i]);
  });
}


function changeStyle(marinara) {
  console.log(marinara);
  let breadsticks = marinara.childNodes;
  let drumstick = getDrumStick(breadsticks);
  console.log(drumstick);
  if (!drumstick.checked && !drumstick.disabled) {
    let inputs = document.getElementsByTagName("input")
    for (let i = 0; i < inputs.length; i++) {
      if(inputs[i].name == drumstick.name && inputs[i].type == "radio") {
        inputs[i].checked = false
        inputs[i].parentNode.classList.remove("radioactive");
      }
    }
    drumstick.checked = true
    marinara.classList.add("radioactive");
  }
}



function getDrumStick(garlic) {
  for (let i=0; i < garlic.length; i++) {
    if (garlic[i].type == "radio") {
      toast = garlic[i];
      break;
    }
  }
  if (toast) {
    return toast;
  } else {
    return null;
  }
}
