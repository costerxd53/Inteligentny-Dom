var ip_home = "http://10.0.1.198:8694";
var ip_outdoor = "http://77.252.137.224:8694";

var switch_1 = document.getElementById("switch_2");
var switch_2 = document.getElementById("switch_1");
var switch_3 = document.getElementById("switch_3");

switch_1.addEventListener("click", switch_check_1, false);
switch_2.addEventListener("click", switch_check_2, false);
switch_3.addEventListener("click", switch_check_3, false);

function error() {
  switch_1.style.background = "red";
  switch_2.style.background = "red";
  switch_3.style.background = "red";
}

switch_check_1_load();
switch_check_2_load();
switch_check_3_load();

function switch_check_1() {
$.get(ip_home+"/switch_1_check", function(data, status){
  //alert("Data: " + data + "\nStatus: " + status);
  if(status != "success") {
    $.get(ip_outdoor+"/switch_1_check", function(data, status){
      //alert("Data: " + data + "\nStatus: " + status);
      if(status != "success") {
        //definitly not work
        error();
      }
      else {
        //work ip_outdoor
        if(data == "0") {
          //on
          switch_off_1()
        }
        else if(data == "1") {
          //off
          switch_on_1();
        }
        else {
          //error
          error();
        }
      }
      });
  }
  else {
    //work ip_home
    if(data == "0") {
      //on
      switch_off_1()
    }
    else if(data == "1") {
      //off
      switch_on_1();
    }
    else {
      //error
      error();
    }
  }
});
}

function switch_check_2() {
$.get(ip_home+"/switch_2_check", function(data, status){
  //alert("Data: " + data + "\nStatus: " + status);
  if(status != "success") {
    $.get(ip_outdoor+"/switch_2_check", function(data, status){
      //alert("Data: " + data + "\nStatus: " + status);
      if(status != "success") {
        //definitly not work
        error();
      }
      else {
        //work ip_outdoor
        if(data == "0") {
          //on
          switch_off_2()
        }
        else if(data == "1") {
          //off
          switch_on_2();
        }
        else {
          //error
          error();
        }
      }
      });
  }
  else {
    //work ip_home
    if(data == "0") {
      //on
      switch_off_2()
    }
    else if(data == "1") {
      //off
      switch_on_2();
    }
    else {
      //error
      error();
    }
  }
});
}

function switch_check_3() {
$.get(ip_home+"/switch_4_check", function(data, status){
  //alert("Data: " + data + "\nStatus: " + status);
  if(status != "success") {
    $.get(ip_outdoor+"/switch_4_check", function(data, status){
      //alert("Data: " + data + "\nStatus: " + status);
      if(status != "success") {
        //definitly not work
        error();
      }
      else {
        //work ip_outdoor
        if(data == "0") {
          //on
          switch_off_3()
        }
        else if(data == "1") {
          //off
          switch_on_3();
        }
        else {
          //error
          error();
        }
      }
      });
  }
  else {
    //work ip_home
    if(data == "0") {
      //on
      switch_off_3()
    }
    else if(data == "1") {
      //off
      switch_on_3();
    }
    else {
      //error
      error();
    }
  }
});
}

function switch_check_1_load() {
$.get(ip_home+"/switch_1_check", function(data, status){
  //alert("Data: " + data + "\nStatus: " + status);
  if(status != "success") {
    $.get(ip_outdoor+"/switch_1_check", function(data, status){
      //alert("Data: " + data + "\nStatus: " + status);
      if(status != "success") {
        //definitly not work
        error();
      }
      else {
        //work ip_outdoor
        if(data == "0") {
          //on
        switch_1.style.background = "green";
        }
        else if(data == "1") {
          //off
        switch_1.style.background = "white";
        }
        else {
          //error
          error();
        }
      }
      });
  }
  else {
    //work ip_home
    if(data == "0") {
      //on
    switch_1.style.background = "green";
    }
    else if(data == "1") {
      //off
      switch_1.style.background = "white";
    }
    else {
      //error
      error();
    }
  }
});
}

function switch_check_2_load() {
$.get(ip_home+"/switch_2_check", function(data, status){
  //alert("Data: " + data + "\nStatus: " + status);
  if(status != "success") {
    $.get(ip_outdoor+"/switch_2_check", function(data, status){
      //alert("Data: " + data + "\nStatus: " + status);
      if(status != "success") {
        //definitly not work
        error();
      }
      else {
        //work ip_outdoor
        if(data == "0") {
          //on
        switch_2.style.background = "green";
        }
        else if(data == "1") {
          //off
        switch_2.style.background = "white";
        }
        else {
          //error
          error();
        }
      }
      });
  }
  else {
    //work ip_home
    if(data == "0") {
      //on
      switch_2.style.background = "green";
    }
    else if(data == "1") {
      //off
      switch_2.style.background = "white";
    }
    else {
      //error
      error();
    }
  }
});
}

function switch_check_3_load() {
$.get(ip_home+"/switch_4_check", function(data, status){
  //alert("Data: " + data + "\nStatus: " + status);
  if(status != "success") {
    $.get(ip_outdoor+"/switch_4_check", function(data, status){
      //alert("Data: " + data + "\nStatus: " + status);
      if(status != "success") {
        //definitly not work
        error();
      }
      else {
        //work ip_outdoor
        if(data == "0") {
          //on
          switch_3.style.background = "green";
        }
        else if(data == "1") {
          //off
          switch_3.style.background = "white";
        }
        else {
          //error
          error();
        }
      }
      });
  }
  else {
    //work ip_home
    if(data == "0") {
      //on
          switch_3.style.background = "green";


    }
    else if(data == "1") {
      //off
      switch_3.style.background = "white";
    }
    else {
      //error
      error();
    }
  }
});
}



  function switch_on_1() {
    $.get(ip_home+"/switch_1_on", function(data, status){
      //alert("Data: " + data + "\nStatus: " + status);
      if(status != "success") {
        $.get(ip_outdoor+"/switch_1_on", function(data, status){
          //alert("Data: " + data + "\nStatus: " + status);
          if(status != "success") {
            //definitly not work
            switch_1.style.background = "orange";
          }
          else {
            //work ip_outdoor
            switch_1.style.background = "green";
          }
          });
      }
      else {
        //work ip_home
        switch_1.style.background = "green";
      }
    });
}

function switch_on_2() {
  $.get(ip_home+"/switch_2_on", function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
    if(status != "success") {
      $.get(ip_outdoor+"/switch_2_on", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
        if(status != "success") {
          //definitly not work
          switch_2.style.background = "orange";
        }
        else {
          //work ip_outdoor
          switch_2.style.background = "green";
        }
        });
    }
    else {
      //work ip_home
      switch_2.style.background = "green";
    }
  });
}

function switch_on_3() {
  $.get(ip_home+"/switch_4_on", function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
    if(status != "success") {
      $.get(ip_outdoor+"/switch_4_on", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
        if(status != "success") {
          //definitly not work
          switch_3.style.background = "orange";
        }
        else {
          //work ip_outdoor
          switch_3.style.background = "green";
        }
        });
    }
    else {
      //work ip_home
      switch_3.style.background = "green";
    }
  });
}

function switch_off_1() {
  $.get(ip_home+"/switch_1_off", function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
    if(status != "success") {
      $.get(ip_outdoor+"/switch_1_off", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
        if(status != "success") {
          //definitly not work
          switch_1.style.background = "orange";
        }
        else {
          //work ip_outdoor
          switch_1.style.background = "white";
        }
        });
    }
    else {
      //work ip_home
      switch_1.style.background = "white";
    }
  });
}

function switch_off_2() {
  $.get(ip_home+"/switch_2_off", function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
    if(status != "success") {
      $.get(ip_outdoor+"/switch_2_off", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
        if(status != "success") {
          //definitly not work
          switch_2.style.background = "orange";
        }
        else {
          //work ip_outdoor
          switch_2.style.background = "white";
        }
        });
    }
    else {
      //work ip_home
      switch_2.style.background = "white";
    }
  });
}

function switch_off_3() {
  $.get(ip_home+"/switch_4_off", function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
    if(status != "success") {
      $.get(ip_outdoor+"/switch_4_off", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
        if(status != "success") {
          //definitly not work
          switch_3.style.background = "orange";
        }
        else {
          //work ip_outdoor
          switch_3.style.background = "white";
        }
        });
    }
    else {
      //work ip_home
      switch_3.style.background = "white";
    }
  });
}
