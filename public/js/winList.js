
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
        console.log(winLocations);
        resources(winLocations, winServices);
        
      }



      // resources(winLocations);
      $("#resourceForm").hide();
      $("#resourceTable").show();


    });
  }





});