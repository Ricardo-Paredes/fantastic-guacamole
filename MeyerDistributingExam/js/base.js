function init(){
  // disable the submit button
  document.getElementById('submit').disabled = true;
  document.getElementById('submit').style.color = "rgb(39,39,39)";
  document.getElementById('submit').style.backgroundColor = "rgb(255,255,255)";
  // binding statement
  document.getElementById('select').addEventListener('change', submitButton, false);
  document.getElementById('registrationForm').addEventListener('submit', process, false);
}
// disable submit button
function submitButton(){
  // if the checkbox for "terms" is checked, enable the submit button
  if ((document.getElementById('select').value == "Online") || (document.getElementById('select').value == "Family") || (document.getElementById('select').value == "Friend") || (document.getElementById('select').value == "Other")){
    document.getElementById('submit').disabled = false;
    document.getElementById('submit').style.color = "rgb(255,255,255)";
    document.getElementById('submit').style.backgroundColor = "rgb(25,104,179)";
    if (document.getElementById('select').value == "Online"){
      document.getElementById('inputBox').innerHTML = "<label for='online'>Online URL: </label><input id='online' type=text name='online' size=60 maxlength=60 placeholder='www.example.com'>";
    }
    else if (document.getElementById('select').value == "Other"){
      document.getElementById('inputBox').innerHTML = "<label for='other'>Other: </label><input id='other' type=text name='other' size=60 maxlength=60 placeholder='Other'>";
    }
    else {
      document.getElementById('inputBox').innerHTML = "";
    }
  }
  else if (document.getElementById('select').value == "Select"){
    document.getElementById('submit').disabled = true;
    document.getElementById('submit').style.color = "rgb(39,39,39)";
    document.getElementById('submit').style.backgroundColor = "rgb(255,255,255)";
    document.getElementById('inputBox').innerHTML = "";
  }
  else {
    document.getElementById('submit').disabled = true;
    document.getElementById('submit').style.color = "rgb(39,39,39)";
    document.getElementById('submit').style.backgroundColor = "rgb(255,255,255)";
  }
}

window.addEventListener('load', init, false);