var AppManager = function () {
    
    this.formsObject = {
        "actors": [
            { "type": "text", "id": "actorName", "placeholder": "Name", "class": "form-field" },
            { "type": "text", "id": "description", "placeholder": "Description", "class": "form-field" },
            { "type": "submit", "id": "addDataButton", "value": "Add-Actor", "class": "form-btn" }
        ],
        "movies": [
            { "type": "text", "id": "title", "placeholder": "Title", "class": "form-field" },
            { "type": "select", "id": "genre", "class": "form-field", "values": getStorageData("genres") },
            { "type": "select", "id": "actor", "class": "form-field", "values": getStorageData("actors") },
            { "type": "text", "id": "duration", "placeholder": "Duration", "class": "form-field" },
            { "type": "text", "id": "image", "placeholder": "Enter-image-name", "class": "form-field" },
            { "type": "text", "id": "imdbNumber", "placeholder": "IMDB-Number", "class": "form-field" },
            { "type": "submit", "id": "addDataButton", "value": "Add-Movie" }
        ],
        "genres": [
            { "type": "text", "id": "genreName", "placeholder": "Genre-Name", "class": "form-field" },
            { "type": "submit", "id": "addDataButton", "value": "Add-Genre", "class": "form-btn" }
        ],
        "login": [
            { "username": "type:text" },
            { "password": "type:password" }
        ],
        "users": [
            { "type": "text", "id": "firstname", "placeholder": "Firstname", "class": "form-field" },
            { "type": "text", "id": "lastname", "placeholder": "Lastname", "class": "form-field" },
            { "type": "text", "id": "username", "placeholder": "Username", "class": "form-field" },
            { "type": "text", "id": "email", "placeholder": "Email", "class": "form-field" },
            { "type": "text", "id": "password", "placeholder": "password", "class": "form-field" },
            { "type": "select", "id": "role", "class": "form-field", "values": getStorageData("roles") },
            { "type": "submit", "id": "addDataButton", "value": "Add-User", "class": "form-btn" }
        ],
        "roles": [
            { "type": "text", "id": "roleName", "placeholder": "Role-Name", "class": "form-field" },
            { "type": "submit", "id": "addDataButton", "value": "Add-Role", "class": "form-btn" }
        ]
    };

    this.currentAppForm = [];
    this.currentAppFormName = "";
    console.log("Pokrenut AppManager Konstruktor, inicijalizujem objekat sa formama: ", this.formsObject);
    console.log(getStorageData("movies"));
}

AppManager.prototype.getFormFromObject = function (formName) {

    var allForms = this.formsObject;
    for (var form in allForms) {
        if (form == formName) {
            this.currentAppForm = allForms[form];
            console.log("Našao sam formu, postavljam je kao niz u konstruktor", allForms[form]);
            this.currentAppFormName = form;
            console.log("Postavljam ime forme u konstruktor", form);
            break;
        } else {
            this.currentAppForm = "Form doesn't exist.";
        }
    }
}

AppManager.prototype.displayForm = function () {

    var selectedForm = this.currentAppForm;
    var selectedFormName = this.currentAppFormName;
    var formDisplay = "<form action='#' id='mainForm'>";

    for (var selected in selectedForm) {
        console.log("Metoda display form, prolazim kroz niz sa objektima", selected, "Pristup ključu type u objektu", selectedForm[selected].type);
        formDisplay += "<p>" + createFormTag(selectedForm[selected].type, selectedForm[selected], selectedForm[selected].id) + "</p>";
    }
    formDisplay += "</form>";
    document.getElementById("formBlock").innerHTML = formDisplay;
    document.getElementById("appFormTitle").innerHTML = "ADD " + selectedFormName.toUpperCase() + " FORM";
    document.getElementById("addDataButton").addEventListener("click", function (e) {
        e.preventDefault();
        addFormData(selectedFormName, "mainForm");
        displayTableData(selectedFormName, "appResults");
    })
}

function checkAppUser() {

    if (isLoggedIn() == null) {
        displayLoginForm();
    } else {
        initApp();
    }
}

function initApp() {

    document.querySelector("#navMenuBlock ul").style.display = "block";
    document.getElementById("logOutItem").addEventListener("click", logOutUser);
    document.getElementById("loggedUser").innerHTML += getLoggedUser();
    document.getElementById("appContent").style.display = "none";
    addListenerOnNavMenuItems();
}

function addListenerOnNavMenuItems() {

    var menuItems = document.getElementsByClassName("menuItem");
    for (var menu = 0; menu < menuItems.length; menu++) {
        menuItems[menu].addEventListener("click", function (e) {
            var appInit = new AppManager();
            appInit.getFormFromObject(e.target.getAttribute("data-form"));
            appInit.displayForm();
            document.getElementById("appContent").style.display = "block";
            document.getElementById("appResults").style.display = "block";
            displayTableData(e.target.getAttribute("data-form"), "appResults");
        })
    }
    document.getElementById("demoDataItem").addEventListener("click", function () {
        loadDemoData();
    })
}

checkAppUser();
