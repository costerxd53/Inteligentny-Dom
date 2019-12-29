function setCookie(name, val, days, path, domain, secure) {
    if (navigator.cookieEnabled) { //czy ciasteczka są włączone
        const cookieName = encodeURIComponent(name);
        const cookieVal = encodeURIComponent(val);
        let cookieText = cookieName + "=" + cookieVal;

        if (typeof days === "number") {
            const data = new Date();
            data.setTime(data.getTime() + (days * 24*60*60*1000));
            cookieText += "; expires=" + data.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    }
  }

function update() {
  if (window.XMLHttpRequest) {
  xmlhttp=new XMLHttpRequest();
} else {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
var spr = 1;
xmlhttp.onreadystatechange=function() {
  if (this.readyState==4 && this.status==200) {
        spr = 0;
    var htmlindexup = this.responseText;
    document.getElementById("status").innerHTML= "50% Complete";
    console.log("50% Complete.");
      setCookie('indexfilehtml', htmlindexup, '180');
      document.getElementById("status").innerHTML= "100% Complete. Restart Your App";
        console.log("100% Complete. Restart Your App");
  }
  else if(this.readyState!=4 && spr != 0) {
    //document.getElementById("status").innerHTML= "Error";
  }
}
xmlhttp.open("GET","http://77.252.137.224/ce0b18773e6538384d2a683df76e6cde/update/update.php?part=index",true);
xmlhttp.send();
}


  function showCookie(name) {
    if (document.cookie !== "") {
        const cookies = document.cookie.split(/; */);

        for (let i=0; i<cookies.length; i++) {
            const cookieName = cookies[i].split("=")[0];
            const cookieVal = cookies[i].split("=")[1];
            if (cookieName === decodeURIComponent(name)) {
                return decodeURIComponent(cookieVal);
            }
        }
    }
}

  var aktver = showCookie("version");

function  getver() {
  if (window.XMLHttpRequest) {
  xmlhttp=new XMLHttpRequest();
} else {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
var spr = 1;
xmlhttp.onreadystatechange=function() {
  if (this.readyState==4 && this.status==200) {
    spr = 0;
      setCookie('version', this.responseText, '180');
}
  else if(this.readyState!=4 && spr != 0) {
    //document.getElementById("status").innerHTML= "<c>Server Connection Error 1</c>";
      console.log("Server Connection Error 1");
  }
}
xmlhttp.open("GET","http://77.252.137.224/ce0b18773e6538384d2a683df76e6cde/update/getver.php",true);
xmlhttp.send();

}

function verquery(ver) {
    if (window.XMLHttpRequest) {
    xmlhttp=new XMLHttpRequest();
  } else {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  var spr = 1;
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
          spr = 0;
      if(this.responseText == "1")
      {
        getver();
        update();
      }
      else {
        document.getElementById("status").innerHTML= "<c>Actual Version</c>";
        console.log("Actual Version");
        load();
      }
    }
    else if(this.readyState!=4 && spr != 0) {
      //document.getElementById("status").innerHTML= "<c>Server Connection Error 2</c>";
      console.log("Server Connection Error 2");
    }
  }
  xmlhttp.open("GET","http://77.252.137.224/ce0b18773e6538384d2a683df76e6cde/update/index.php?ver="+ver,true);
  xmlhttp.send();
}

verquery(aktver);

function showCookie(name) {
  if (document.cookie !== "") {
      const cookies = document.cookie.split(/; */);

      for (let i=0; i<cookies.length; i++) {
          const cookieName = cookies[i].split("=")[0];
          const cookieVal = cookies[i].split("=")[1];
          if (cookieName === decodeURIComponent(name)) {
              return decodeURIComponent(cookieVal);
          }
      }
  }
}
function load() {
document.getElementById('html').innerHTML = showCookie('indexfilehtml');
}
