var siteName = document.getElementById("siteName");
var sitUrl = document.getElementById("SiteURL");
var siteList;

if (localStorage.getItem("siteinfo") == null) {
  siteList = [];
} else {
  siteList = JSON.parse(localStorage.getItem("siteinfo"));
  display();
}


// ================================================================
function validateName(name)
{
  for(var i = 0; i < siteList.length; i++)
  {
    if(name == siteList[i].site_name)
    {
    return false;
    }
  }
}
// =================================================================
function validateEmail(url){


  var urlformat =/^[(http:\/\/www\.|https:\/\/www\.|www\.)][a-zA-Z0-9\-_$]/

if(url.match(urlformat))
{
  return true;
}
else{
  return false;
}
}

// ========================================================================
function submit() {

 if(validateName(siteName.value) == false || validateEmail(sitUrl.value)==false)
 {

  alert(` check your inputs: You may enter used name or Invalid URL:
  The URL must start with either http or https and
  then followed by :// and
  then it must contain www. and
  then followed by subdomain and
  last part contains .com, .org `); 
 }
  else{
    var site = {
      site_name: siteName.value,
      site_url: sitUrl.value,
    };
      siteList.push(site);
  localStorage.setItem("siteinfo", JSON.stringify(siteList));
  display();
  }
  clearForm();
 }

// ======================================================================
function clearForm() {
  siteName.value = "";
  sitUrl.value = "";
}

// =========================================================================

function display() {
  var cartona = ``;
  for (var i = 0; i < siteList.length; i++) {
    cartona += `<tr>
    <td>${i + 1}</td>
    <td>${siteList[i].site_name}</td>
    <td><button id="visit" class="rounded-1 p-1 pe-2"> <i class="fa-solid fa-eye me-2"></i><a href="${
      siteList[i].site_url
    }" target="_blank" class="text-decoration-none text-white"> Visit</a></button></td>
    <td><button id="deleteData" onclick=delet(${i}) class="rounded-1 p-1 pe-2"><i class="fa-solid fa-trash-can me-2"></i> Delete</button></td>
  </tr>`;
  }
  document.getElementById("tablebody").innerHTML = cartona;
}


// ===========================================================================
function delet(index) {
  siteList.splice(index, 1);
  localStorage.setItem("siteinfo", JSON.stringify(siteList));
  display();
}
// =============================================================================