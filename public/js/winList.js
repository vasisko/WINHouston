
$(document).ready(function () {
  $("#resourceTable").hide();
  var winLocations = [];
  var winServices = ["housing", "domestic_violence", "food", "clothing", "babysitting", "doctor_visit", "medicine", "infant_items", "daycare", "auto_repair", "bus_pass", "other_transport", "furniture", "employment", "legal_aide", "school_supplies", "education_assistance", "counseling", "drug_addiction", "internet_phone_tech", "immigration_assist"
  ];
  var winServicesLoc = [];
  var reqServices = [];
  //Event listener to list resources
  $(document).on("click", "#searchAll", searchAll);
  $(document).on("click", "#reset", reset);


  function searchAll(event) {
    event.preventDefault();
    getResources();
    resources();
    
    
    

  }

  function reset(event) {
    location.reload();
  }

  function resources() {

 console.log(winLocations)
 for (i=0; i< winLocations.length; i++){
  console.log(winLocations[i]);
  console.log(winServices[i]);

 }





  }


  function getResources() {


    $.get("/getresources", function (data) {
      console.log("data is", data);

      if ($('#checkNW').is(":checked")) {
        for (i = 0; i < data.length; i++) {
          if (data[i].location === $("#checkNW").val()) {
            winLocations.push(data[i]);
            console.log(data[i].name);
            var name= data[i].name;
            var address= data[i].address;
            var email= data[i].email;
            var phone=data[i].phone;
            var website=data[i].website;
            $("#placement").append("<p>"+name+"</p><p>"+address+"</p><p>"+email+"</p><p> Phone: "+phone+ "</p><p>"+website+"</p><br/>")




          }

        }
        
        console.log(winLocations);
      }

      if ($('#checkSW').is(":checked")) {
        for (i = 0; i < data.length; i++) {
          if (data[i].location === $("#checkSW").val()) {
            winLocations.push(data[i]);
            var name= data[i].name;
            var address= data[i].address;
            var email= data[i].email;
            var phone=data[i].phone;
            var website=data[i].website;
            $("#placement").append("<p>"+name+"</p><p>"+address+"</p><p>"+email+"</p><p> Phone: "+phone+ "</p><p>"+website+"</p><br/>")




          }
        }
        console.log(winLocations);
      }

      if ($('#checkSE').is(":checked")) {
        for (i = 0; i < data.length; i++) {
          if (data[i].location === $("#checkSE").val()) {
            winLocations.push(data[i]);
            var name= data[i].name;
            var address= data[i].address;
            var email= data[i].email;
            var phone=data[i].phone;
            var website=data[i].website;
            $("#placement").append("<p>"+name+"</p><p>"+address+"</p><p>"+email+"</p><p> Phone: "+phone+ "</p><p>"+website+"</p><br/>")




          }
        }
        console.log(winLocations);
      }

      if ($('#checkNE').is(":checked")) {
        for (i = 0; i < data.length; i++) {
          if (data[i].location === $("#checkNE").val()) {
            winLocations.push(data[i]);
            var name= data[i].name;
            var address= data[i].address;
            var email= data[i].email;
            var phone=data[i].phone;
            var website=data[i].website;
            $("#placement").append("<p>"+name+"</p><p>"+address+"</p><p>"+email+"</p><p> Phone: "+phone+ "</p><p>"+website+"</p><br/>")




          }
        }
        console.log(winLocations);
      }


      if ($('#checkCN').is(":checked")) {
        for (i = 0; i < data.length; i++) {
          if (data[i].location === $("#checkCN").val()) {
            winLocations.push(data[i]);
            var name= data[i].name;
            var address= data[i].address;
            var email= data[i].email;
            var phone=data[i].phone;
            var website=data[i].website;
            $("#placement").append("<p>"+name+"</p><p>"+address+"</p><p>"+email+"</p><p> Phone: "+phone+ "</p><p>"+website+"</p><br/>")




          }
        }
      }
      

      if ($('#housing').is(":checked")) {
        for (i = 0; i < winLocations.length; i++) {
          if (winLocations[i].housing === $("#housing").val()) {winServicesLoc.push("housing");
          console.log("housing");
        }  
      };
    }

    if ($('#clothing').is(":checked")) {
      for (i = 0; i < winLocations.length; i++) {
        if (winLocations[i].clothing === $("#clothing").val()) {winServicesLoc.push("clothing");
        
      }  
    };
  }

  if ($('#babysitting').is(":checked")) {
    for (i = 0; i < winLocations.length; i++) {
      if (winLocations[i].babysitting === $("#babysitting").val()) {winServicesLoc.push("babysitting");
    
    }  
  };
}

if ($('#infant_items').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].infant_items === $("#infant_items").val()) {winServicesLoc.push("infant_items");
    
  }  
};
}

if ($('#daycare').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].daycare === $("#daycare").val()) {winServicesLoc.push("daycare");
   
  }  
};
}

if ($('#school_supplies').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].school_supplies === $("#school_supplies").val()) {winServicesLoc.push("school_supplies");
    
  }  
};
}
      
if ($('#employment').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].employment === $("#employment").val()) {winServicesLoc.push("employment");
    
  }  
};
}
if ($('#counseling').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].counseling === $("#counseling").val()) {winServicesLoc.push("counseling");
    
  }  
};
}
if ($('#immigration_assist').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].immigration_assist === $("#immigration_assist").val()) {winServicesLoc.push("immigration_assist");
    
  }  
};
}

if ($('#doctor_visit').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].doctor_visit === $("#doctor_visit").val()) {winServicesLoc.push("doctor_visit");
    
  }  
};
}
if ($('#legal_aide').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].legal_aide === $("#legal_aide").val()) {winServicesLoc.push("legal_aide");
    
  }  
};
}
if ($('#drug_addiction').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].drug_addiction === $("#drug_addiction").val()) {winServicesLoc.push("drug_addiction");
    
  }  
};
}
if ($('#furniture').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
if (winLocations[i].furniture === $("#furniture").val()) {winServicesLoc.push("furniture");
    
  }  
};
}
if ($('#domestic_violence').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].domestic_violence === $("#domestic_violence").val()) {winServicesLoc.push("domestic_violence");
    
  }  
};
}
if ($('#bus_pass').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].bus_pass === $("#bus_pass").val()) {winServicesLoc.push("bus_pass");
    
  }  
};
}
if ($('#internet_phone_tech').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].internet_phone_tech === $("#internet_phone_tech").val()) {winServicesLoc.push("internet_phone_tech");
    
  }  
};
}
if ($('#auto_repair').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].auto_repair === $("#auto_repair").val()) {winServicesLoc.push("auto_repair");
    
  }  
};
}
if ($('#food').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].food === $("#food").val()) {winServicesLoc.push("food");
    
  }  
};
}
if ($('#medicine').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].medicine === $("#medicine").val()) {winServicesLoc.push("medicine");
    
  }  
};
}


$("#placement").prepend("<p> These resources are available in your area      "   +winServicesLoc+   ",   </p><br/>") 

      
      $("#resourceForm").hide();
      $("#resourceTable").show();
  

    });



  }


  
  





});
