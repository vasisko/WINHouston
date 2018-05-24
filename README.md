# WIN Houston:  Connecting women in need in Houston with resources

This application provides Women In Need in Houston with a means for accessing resources in times of need.  The application provides a simple interface to make it easy for those in crisis to fill out a needs survey and quickly receive a list of area resources in return.

In addition, the application provides local organizations that provide services and goods to women in need with a network.  When an organization registers as a member, they specify what services they offer.  In this initial state, the members then can use their member dashboard to view members in the network.  Eventually the dashboard would offer even more functionality for the member.


## Getting Started
The application has the ability to run on a local host, and has the capability for  database storage located on Heroku.
  

### Prerequisites

1. In order to set this application up on a local server, the local host will need MySQL Workbench installed.  

2. In order to provide database storage, an account will be necessary at Heroku.

### Installing

1.  The project files must be copied in their entirety onto the local host.

2.  The config.json file, located in the config folder must be modified by adding in the local host MySql Workbench root password where password is listed in the development parameters.

3.  MySQL Workbench should be opened to the schema file found in the db file.

## Running the Application
Women in Need:  

These users will access a needs survey using the navbar or link at the center of the home page.  The needs survey can be easily filled out by checking any items that they are in search of.  Submitting the form will return a list of any available items to the user.

Resource Providers: 
1. These users can register by selecting the registration page from the navbar or link at the center of the home page.  A registration page will ask for username and password.  Using password encryption & authentication, the member login data will be written to the user table in the database. The user will then be directed to the login page. 
 -- Verify that the passwords are in fact encrypted by viewing the User table in the WIN database in Workbench. 
 
2. The member area is restricted to registered users, therefore the members will need to login each time they visit the site. With an authorized login, the user(member) will be directed to the member dashboard. Currently the functionality of this dashboard is limited to the ability of viewing a listing of members. -- Verify that the Resource table in the WIN database is functional by selecting the 
"View Members" button and results should appear.

## Deployment

In order to deploy this application, a JAWS database must be established at Heroku.  Please refer to Heroku documentation for setting this up.  

The Heroku parameters: source, host, and password will be required by Workbench in order to establish the connection to the database at Heroku.  While setting this up, there is an option to check the connection -- verify that the connection to Heroku is active with this check.

With the Heroku database in place, start the server on the local host by typing in "node server.js" on the command line.  The application can then be viewed in a browser window by typing in "localhost:3000" into the url.

## Built With

* Server : 
    
    Node.js

    Express npm 

    body-parser npm

* Handlebars - For page templates
* Sequelize - ORM package for MySQL
* Login Feature:  

    Bcryptjs npm - encryption

    Passport npm - authentication

    isAuthorized - middleware to restrict member area to authorized users only

    connect-flash - for error messages
     
* Javascript and JQuery 
* CSS and Bootstrap

## Authors

* Scott Bedner 
https://github.com/Sbedner

* Oluwatoyin Oshinkoya https://github.com/Oluwatoyin17

* Alan Burke
https://github.com/someknow

* Carolyn Vasisko
https://github.com/vasisko
