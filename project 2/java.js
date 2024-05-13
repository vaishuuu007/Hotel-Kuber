
function addtocart() {
    alert("Added to Cart successfully");
  }
  
  function darkmode(){
      const imgDark =document.getElementById("dark");
      imgDark.classList.add("active");
  
      const imgLight = document.getElementById("light");
      imgLight.classList.remove("active");
  
      const bodyElement = document.getElementById("body");
      bodyElement.className = "theme-dark";
  }
  function lightmode(){
      const imgDark =document.getElementById("dark");
      imgDark.classList.remove("active");
  
      const imgLight = document.getElementById("light");
      imgLight.classList.add("active");
  
      const bodyElement = document.getElementById("body");
      bodyElement.className = "theme-light";
  }
  
  function submit() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    if (name && email && phone != '') {
      alert("Sumbited Successfully")
    }
    else {
      alert("Please fill all required fields")
    }
  }
  
  
  const listFromLocalStorage = localStorage.getItem("submit");
  if(listFromLocalStorage)
  {
      Feedback = JSON.parse(listFromLocalStorage);
      data();
  }
  function data(){
      const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const Phone = document.getElementById("phone").value;
    console.log('Name Email Phone');
  }