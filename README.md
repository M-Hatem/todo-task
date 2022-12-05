# TO-DO List Application

## Table of content

- [Description](#project-description)
- [Usage](#usage)
- [Directory](#directory-structure)
- [Technologies](#technologies-i-used)
- [Installation](#installation)

## Project Description

This is a TO-DO List Application for adding, modifying and removing items from or to your list with a validation system and an authentication system for making all things right.

## Usage

The Website consits of few sections, the first one is the homepage that includes an intro to the application with a welcoming message and a button for creating a new item but it will redirect the user if the user isn't logged in.

I added a Navbar with Sign In/Sing Up link which switched to Sign out if the user is already logged in, it contains also a profile picture of the user which is a default picture of the user if he didn't have an existing one, also there's a link for My-List page which have all the TO-DO List for the logged user, Lastly The Logo of the website on the very start of the navbar which redirect the user to the homepage.

It includes also an **_Authentication system_** with **signing in**, **signing up** and **signing out**, this system has a validation for not submitting witout filling every field with specific rules, like the following:

- first_name field: must be filled, at least 4 charachters, at maximum 20 characters, and it only contains characters and spaces.
- last_name field: must be filled, at least 4 charachters, at maximum 20 characters, and it only contains characters and spaces.
- email: must be filled, and contains a valid email with this format *example@company.com*.
- password: must be filled, at least 4 charachters, and at maximum 20 characters.
- confirm_password: must be filled, and must be exact like password field.
- terms_anc_conditions: must be checked.

but The API doesn't set new users at database when registering as it says

> Note: Only defined users succeed registration.

so I did setup the API for **signing in** / **signing up** with these users only:

- email : george.bluth@reqres.in
- email : janet.weaver@reqres.in
- email : emma.wong@reqres.in
- email : eve.holt@reqres.in
- email : charles.morris@reqres.in

I used the token that returns from the API and saved it into **the state of the application** along with **local storage** to keep the state of the user and his/her authority to access the list even when the page is reloaded.

I also set a **guard** for not entering the TO-DO List without **signing in**, as every user have their own List.

I did add My-List page which have all the user's List, After entering the page A request is sent to get the user's list, With the ability to **add**, **Edit**, and **delete** items from the list, Also the user can search for a specific title of an item in the list, and the user can sort the list **Ascending** or **Descending** whenever he/she wants.

I added a confirmation message when the user deletes an item, so that I make sure the action was intended or not, Also I added an error if the user wanted to add another item without completing the last added item, And I added a confirmation message when the user confirms the edited item.

The API that gets the list doesn't set the updated list as it says

> Important: resource will not be really updated on the server but it will be faked as if.

so i used **a state inside the application** along with **local storage** to store every update that may occur to the list, and to keep the state even after the page is reloaded, to always show the latest updated list without the need of setting the updated list to the API.

Lastly I added not_found page for redirecting the user to it if the user typed a wrong url/routing that doesn't exist in the application.

## Directory Structure

### The application contains the following directories:

- assets: for saving all imgs included in the project along with the main css file of the project.
- components: for saving used components in all application.
- includes: for configuration files of used _libraries_ / _packages_ such as form validaiton file.
- router: for configuring the router of the application.
- stores: for storing states for accessing inside all _components_ / _views_ of the application.
- views: for saving used views of the application, i separated it into:
  - activities directory: for the view of TO-DO List.
  - auth directory: for the views of **signing in** / **signing up**.

## Technologies i used

- **Vue CLI** for scaffolding the project.
- **Css** / **Scss** for styling.
- **Bootstrap V5** for styling.
- **vee-validate** for form validation.
- **vee-validate/rules** for adding rules to the validation.
- **axios** for calling APIs.
- **vue-router** for Routing between views.
- **Pinia** for state management system.
- **sweetalert2** for adding aesthetic styled alerts.

## Installation

Simply type in Terminal **_npm install_** and then **_npm run dev_** for a dev server. Navigate to `http://localhost:5173/`. The app will automatically reload if you change any of the source files.
