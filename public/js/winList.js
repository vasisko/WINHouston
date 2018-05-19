
$(document).ready(function() {
    
    //Event listener to list resources
      $(document).on("click", "#searchAll", searchAll);
      
    

    function searchAll(event) {
      event.preventDefault();
      alert("you hit here 1st")
      getResources(); 
    }
    function getResources() {
      alert("you hit here 2nd")
      //**********BREAK HERE!!!!!**********/

        $.get("/resources", function(data) {
            console.log(data);
       
        });
      }

    
});