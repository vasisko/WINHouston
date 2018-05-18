// When form is submitted on members.hbrs page, this code responds

$(document).ready(function() {
    
 
//Event listener to list resources
  $(document).on("submit", "#resource-form", handleResourceFormSubmit);

// TBD later :
 //Event listener for delete resource button  
//   $(document).on("click", ".delete-resource", handleDeleteButtonPress);

// Member request to view resources, this function gets the resources
    getResources();

    // get resources from DB and get ready to post on members dashboard in table (****fix this function to do that)
    function getResources() {
        $.get("/api/resources", function(data) {
          var rowsToAdd = [];
          for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createResourceRow(data[i]));
          }
          renderResourceList(rowsToAdd);
          nameInput.val("");
        });
      }
  /******************** itegrate this example code for actually posting the ready to go resource data to the page
      //// A function for rendering the list of authors to the page
//   function renderAuthorList(rows) {
//     authorList.children().not(":last").remove();
//     authorContainer.children(".alert").remove();
//     if (rows.length) {
//       console.log(rows);
//       authorList.prepend(rows);
//     }
//     else {
//       renderEmpty();
//     }
//   }

//   // Function for handling what to render when there are no authors
//   function renderEmpty() {
//     var alertDiv = $("<div>");
//     alertDiv.addClass("alert alert-danger");
//     alertDiv.text("You must create an Author before you can create a Post.");
//     authorContainer.append(alertDiv);
//   }
****************/


//  TBD later:    // Function for handling what happens when the delete button is pressed
//   function handleDeleteButtonPress() {
//     var listItemData = $(this).parent("td").parent("tr").data("resource");
//     var id = listItemData.id;
//     $.ajax({
//       method: "DELETE",
//       url: "/api/resources/" + id
//     })
//       .then(getResources);
//   }



});