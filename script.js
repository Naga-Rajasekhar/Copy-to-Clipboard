let input = document.getElementById("textarea");
let button = document.getElementById("copyButton");


button.addEventListener("click", () => {
  input.select();
  navigator.clipboard.writeText(input.value);
  if (input.value != "") {
    window.alert(`"${input.value}" has been copied to clipboard`);
  } else {
    window.alert(`Please enter any text to copy`);
  }
});
