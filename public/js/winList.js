
$(document).ready(function() {
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
  

        $.get("/getresources", function(data) {
            console.log(data);
            $("#resourceForm").hide();
            $("#resourceTable").show();
            $("#resourceTable").text(data[0].address);
        });
      }

    



});