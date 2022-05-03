const h1 = document.querySelector("h1");

function handleTitleClick(){
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "tomato"){
    newColor = "black";
  } else{
    newColor = "tomato";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

const input = document.querySelector("input");

function handleCopy(){
  alert("복사했습니다.");
}
function handlePaste(){
  alert("붙여넣었습니다.");
}

function handleTitleSelect(){
  console.log("선택하고 있습니다.");
}

input.addEventListener("copy", handleCopy);
input.addEventListener("paste", handlePaste);
input.addEventListener("select", handleTitleSelect);

const h2 = document.querySelector("h2");

function handleTitleClick(){
  h2.classList.toggle("clicked");
  h2.style.color.
}

h2.addEventListener("click", handleTitleClick);
