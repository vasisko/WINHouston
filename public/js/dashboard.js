// When form is submitted on members.hbrs page, this code responds
$(document).ready(function() {
    
//Event listener to list resources
  $(document).on("submit", "#dashboardListAll", handleFormSubmit);

// checked to this point!***********************************

// TBD later :
 //Event listener for delete resource button  
//   $(document).on("click", ".delete-resource", handleDeleteButtonPress);

// Member request to view resources, this function gets the resources
//   getResources();

// A function for handling what happens when the form to create a new post is submitted
function handleFormSubmit(event) {
  event.preventDefault();
  alert("you hit here 1st")
  getResources(); 
}

    // get resources from DB and get ready to post on members dashboard in table (****fix this function to do that)
    function getResources() {
      alert("you hit here 2nd")
      //**********BREAK HERE!!!!!**********/

        $.get("/resources", function(data) {
            console.log(data);
          // var rowsToAdd = [];
          // for (var i = 0; i < data.length; i++) {
          //   rowsToAdd.push(createResourceRow(data[i]));
          // }
          // renderResourceList(rowsToAdd);
          // nameInput.val("");
        });
      }

// Function for creating a new list row for authors
// function createResourceRow(resourceData) {
//     console.log(resourceData);
//     // var newTr = $("<tr>");
//     // newTr.data("author", resourceData);
//     // newTr.append("<td>" + resourceData.name + "</td>");
//     // newTr.append("<td># of posts will display when we learn joins in the next activity!</td>");
//     // newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
//     // newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
//     // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
//     // return newTr;
//   }






  /******************** itegrate this example code for actually posting the ready to go resource fdata to the page
      //// A function for rendering the list of authors to the page
//   function renderResourceList(rows) {
//     resourceList.children().not(":last").remove();
//     resourceContainer.children(".alert").remove();
//     if (rows.length) {
//       console.log(rows);
//       resourceList.prepend(rows);
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