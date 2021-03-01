var button = document.getElementById("sausage");


sausage.addEventListener("click", function(){
  console.log("Click Detected");
  let expandable = document.getElementById("expand");
  if (expandable.style.display != "none") {
    expandable.style.display = "none";
    button.innerHTML = "Expand Advanced Properties";
  } else {
    expandable.style.display = "block";
    button.innerHTML = "Collapse Advanced Properties";
  }
});
