var gemma = document;
var arr = [];
var ast = [];


var ins = gemma.getElementsByTagName('INPUT');
var tar = gemma.getElementsByTagName('TEXTAREA');
//Skip first element in tar
for (i = 0; i < tar.length; i++) {
  if (tar[i].id != "election_ballot_model") {
    arr.push(tar[i]);
  }
}

for (i = 0; i < ins.length; i++) {
  if (ins[i].type === "text") {
    arr.push(ins[i]);
  } else if (ins[i].type === "checkbox") {
    console.log("Attempting to uncheck box");
    ins[i].checked = false;
  }
}


for (i = 0 ; i < arr.length; i++) {
  var grandparent = arr[i].parentElement
  var parent = gemma.createElement("DIV");
  var span = gemma.createElement("SPAN");
  var iframe = gemma.createElement("i")
  parent.classList.add("input-effect");
  parent.classList.add("col-3");
  arr[i].classList.add("effect-20");
  arr[i].classList.add("question-title");
  arr[i].autocomplete="off";
  span.classList.add("focus-border");
  span.appendChild(iframe);
  parent.appendChild(arr[i]);
  parent.appendChild(span);
  grandparent.appendChild(parent);
}
