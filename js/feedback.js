var a= document.getElementById('male');
var b= document.getElementById('female')
function male_hs() {
  if(a==1){
  document.getElementById('rmale').style.display="block";
  document.getElementById('rfemale').style.display="none";
  return a=0;
  }
  else{
    document.getElementById('rmale').style.display="block";
    document.getElementById('rfemale').style.display="none";
  return a=1;
  }
}
function female_hs() {
  if(b==1){
  document.getElementById('rfemale').style.display="block";
  document.getElementById('rmale').style.display="none";
  return b=0;
  }
  else{
    document.getElementById('rfemale').style.display="block";
    document.getElementById('rmale').style.display="none";
  return b=1;
  }
}


