# README #

## Task - The Building App ##

Create a simple web app with only 2 pages. You should use Vuejs or vanialla JavaScript.

### The first page: ###
* Just a simple title: BUILDINGS which is also a link to the second page
* Some random text underneath the title
* Footer with links to the first (Home) and second (Buildings) page

### The second page: ###
* Should have a header with some welcoming text on one side and a small avatar on the other
* The same footer as it is on the first page
* A table in the middle with buildings with the following columns: Id, Name, Area, Location, Image
* Three actions for the table: Add, Update and Delete
* Add action: should create new rows in the table. Could be done with a separate popup with a small form or with separate prompts or any way you think is fit (UI FOR THIS IS UP TO YOU). Required fields are: id, name and area. Location and image are not required.
* Update action: similar to add action but it should update an already existing record by id. (UI FOR THIS IS UP TO YOU) Required and optional fields are the same.
* Delete action should simply remove a record by id. (UI FOR THIS IS UP TO YOU) You can use a popup, a prompt or even create a sixth column with delete icon in each.
* You can use localstorage, state management or a simple JSON file to save the information.


### Used elements ###
* vue 3 with vite 
* axios (if you don't have instaled axios use npm install axios)
* json server (if you don't have instaled json-server use npm install json-server -D)


### How do I get set up? ###

* Clone the progect from [here](https://github.com/GTolev/examp1) 
* npm install
* npm run dev - start development dev server
* npm run db:serve - start json server