var sauce = document.getElementById("expand");
var sausage = document.getElementById("sausage");

var arr = [];
var ast = [];

sausage.addEventListener("click", function(){
  if (sauce.style.display === "none") {
    sauce.style.display = "block";
    sausage.innerHTML = "Collapse Advanced Properties";
  } else {
    sauce.style.display = "none";
    sausage.innerHTML = "Expand Advanced Properties";
  }
});

var ins = document.getElementsByTagName('INPUT');
var tar = document.getElementsByTagName('TEXTAREA');
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
  var parent = document.createElement("DIV");
  var span = document.createElement("SPAN");
  var iframe = document.createElement("i")
  parent.classList.add("input-effect");
  parent.classList.add("col-3");
  arr[i].classList.add("effect-20");
  arr[i].classList.add("question-title");
  span.classList.add("focus-border");
  span.appendChild(iframe);
  parent.appendChild(arr[i]);
  parent.appendChild(span);
  grandparent.appendChild(parent);
}
