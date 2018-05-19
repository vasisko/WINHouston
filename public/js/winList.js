
$(document).ready(function () {
  $("#resourceTable").hide();

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
  function getResources() {


    $.get("/getresources", function (data) {
      console.log("data is", data);

      if ($('#checkNW').is(":checked")) {
        for (i = 0; i < data.length; i++) {
          if (data[i].location === $("#checkNW").val()) {
            console.log("NW works!");
           }
          console.log("it is checked");
          }

        // $("#resourceForm").hide();
        // $("#resourceTable").show();
        // // $("#address").text(data[0].address);
        // var brandon = $("#checkNW").val().trim();
        // console.log("brandon is:", brandon);
        // for (i = 0; i < data.length; i++) {
        //   if (data[i].location = $("#checkNW").val()) {
        //     console.log("NW works!");
        //       }

            }

      });
  }





});