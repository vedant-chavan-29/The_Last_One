function scrollToDonate(){
  document.getElementById("donate").scrollIntoView({
    behavior:"smooth"
  });
}

function submitForm(e){
  e.preventDefault();
  alert("Thank you for donating food ❤️");
}