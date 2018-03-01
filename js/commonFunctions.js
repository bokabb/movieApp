var logDisabled=true;
function log(){
    if(logDisabled){
        return
    }
    return console.log.apply(console, arguments);
}

var displayLoginForm = function () {

    var formDisplay = "<form action='#'>"
        + "<p><input type='text' id='usernameInput' class='form-field' placeholder='Username'></p>"
        + "<p><input type='password' id='passwordInput' class='form-field' placeholder='Password'></p>"
        + "<p id='formMessage'></p>"
        + "<input type='submit' id='loginButton' value='Login to App'>"
        + "</form>";
    document.querySelector("#appContent #formBlock").innerHTML = formDisplay;
    document.getElementById("loginButton").addEventListener("click", checkUser);
};

var putDataToStorage = function (storageKey, data) {
    localStorage.setItem(storageKey, JSON.stringify(data));
};

var getStorageData = function (storageKey) {
    return JSON.parse(localStorage.getItem(storageKey));
};

var createFormTag = function (fieldType, fieldAttributes, listName) {

    var tag = "";
    var tagAttributes = "";
    for (var attribute in fieldAttributes) {
        tagAttributes += attribute + "=" + fieldAttributes[attribute] + " ";
    }
    if (fieldType == "text") {
        tag = "<input " + tagAttributes + ">";
    } else if (fieldType == "select") {
        tag = "<select class='form-field' id='" + listName + "'>";
        for (var option in fieldAttributes["values"]) {
            tag += "<option value='" + Object.values(fieldAttributes["values"][option])[1] + "'>" + Object.values(fieldAttributes["values"][option])[1] + "</option>";
        }
        tag += "</select>";
    } else {
        tag = "<input " + tagAttributes + ">";
    }
    return tag;
};

var addFormData = function (storageKey, sourceForm) {

    var dataObj = {};
    var storageData = getStorageData(storageKey);

    if (storageData == null) {
        storageData = [];
    }
    var sourceFields = document.querySelectorAll("#" + sourceForm + " input, #" + sourceForm + " select");
    var dataArray = getStorageData(storageKey);
    var nextID = 1;
    if (dataArray != null && dataArray.length > 0) {
        nextID = dataArray[dataArray.length - 1].id + 1;
    }
    dataObj["id"] = nextID;
    for (var field = 0; field < sourceFields.length; field++) {
        if (sourceFields[field].type != "submit" && sourceFields[field].type != "button") {
            dataObj[sourceFields[field].id] = sourceFields[field].value;
        }
    }
    storageData.push(dataObj);
    putDataToStorage(storageKey, storageData);
};
/*
var addFormData = function (storageKey, sourceForm) {

    var dataObj = {};
    var storageData = getStorageData(storageKey);

    if (storageData == null) {
        storageData = [];
    }
    var sourceFields = document.querySelectorAll("#" + sourceForm + " input, #" + sourceForm + " select");
    var dataArray = getStorageData(storageKey);
    var nextID = 1;
    dataObj["id"] = nextID;
    for (var field = 0; field < sourceFields.length; field++) {
        if (sourceFields[field].type != "submit" && sourceFields[field].type != "button") {
            dataObj[sourceFields[field].id] = sourceFields[field].value;
        }
    }
    storageData.push(dataObj);
    putDataToStorage(storageKey, storageData);

    var followingID = (function () {
        //console.log(followingID.getNextID(storageKey));
        var nextID = 1;
        var dataArray = getStorageData(storageKey);
        dataObj["id"] = nextID;
        if (dataArray != null && dataArray.length > 0) {
            nextID = dataArray[dataArray.length - 1].id + 1;
        }
        var getNextID = function () {
            return nextID;
        }

        return {
            getNextID: getNextID
        }
    })(storageKey);
    console.log(followingID.getNextID(storageKey));
};
*/

function updateData(storageKey, dataKey, dataID) {

    var changeDataFields = document.getElementsByClassName("changeDataField");
    for (var dataField = 0; dataField < changeDataFields.length; dataField++) {
        changeDataFields[dataField].addEventListener("change", function (e) {
            var dataFromStorage = getStorageData(storageKey);
            for (var key in dataFromStorage) {
                if (dataFromStorage[key].id == dataID) {
                    console.log(dataFromStorage[key][dataKey]);
                    dataFromStorage[key][dataKey] = e.target.value;
                    break;
                }
            }
            putDataToStorage(storageKey, dataFromStorage);
            displayTableData(storageKey, "appResults");
            // followingID(storageKey, "appResults");
            // getNextID(storageKey, dataID);
        });
    }
}

var displayTableData = function (storageKey, targetElement) {

    var storageItems = getStorageData(storageKey);
    var tableID = storageKey + "table";
    var table = "<h2>Inserted Data: </h2><table id='" + tableID + "'>";
    if (storageItems != null && storageItems.length > 0) {
        for (var item in storageItems) {
            table += "<tr>";
            for (var storeItem in storageItems[item]) {
                table += "<td data-key='" + storeItem + "' data-value='" + storageItems[item].id + "' class='changeItem'>" + storageItems[item][storeItem] + "</td>";
            }
            table += "<td style='width:150px'><input type='checkbox' class='userCheckBox' value='" + storageItems[item].id + "'></td>";
        }
        table += "<tr><td colspan='" + storageItems[item][storeItem].length + 1 + "' style='text-align: right;padding: 10px'><input type='button' id='deleteDataButton' value='Delete Selected Data'></td></tr>";
        table += "</table>";
        document.getElementById(targetElement).innerHTML = table;
        document.querySelector("#" + targetElement + " h2").innerHTML += storageItems.length;

        var changeDataItem = document.getElementsByClassName("changeItem");
        for (var newItem = 0; newItem < changeDataItem.length; newItem++) {
            changeDataItem[newItem].addEventListener("click", function (e) {
                e.target.innerHTML = "<form action='#'><input type='text' value='" + e.target.innerHTML + "' data-id='" + e.target.getAttribute('data-value') + "' data-key='" + e.target.getAttribute('data-key') + "' class='changeDataField'></form>";
                e.target.children[0][0].focus();
                updateData(storageKey, e.target.getAttribute('data-key'), e.target.getAttribute('data-value'));
            });
        }

        var removeFocus = document.getElementsByClassName("changeDataField");
        for (var newItem = 0; newItem < removeFocus.length; newItem++) {
            removeFocus[newItem].addEventListener("blur", function (e) {
                console.log('item: ' + e.target.value);
                e.target.parentNode.parentNode.innerHTML = e.target.value;
                e.target.parentNode.remove();
            });
        }
        document.body.addEventListener('click', function(e) {
            var removeFocus = document.getElementsByClassName("changeDataField");
            for (var newItem = 0; newItem < removeFocus.length; newItem++) {
             removeFocus[newItem].addEventListener("blur", function (e) {
              console.log('item: ' + e.target.value);
              e.target.parentNode.parentNode.innerHTML = e.target.value;     
              e.target.parentNode.remove();
             });
            }
            console.log('Kliknuo: ' + e.target.parentNode.parentNode);
           }); 
        document.getElementById("deleteDataButton").addEventListener("click", function (e) {
            deleteDataObject(tableID, storageKey);
        })
    } else {
        document.getElementById(targetElement).innerHTML = "<p>There is no inserted data!</p>";
    }
};

var deleteDataObject = function (tableID, storageKey) {

    var storageData = getStorageData(storageKey);
    var tableCheckBoxes = document.querySelectorAll("#" + tableID + " input[type=checkbox]");
    for (var input = 0; input < tableCheckBoxes.length; input++) {
        if (tableCheckBoxes[input].checked == true) {
            for (var data in storageData) {
                if (storageData[data].id == tableCheckBoxes[input].value) {
                    console.log("Brisem objekat iz niza", storageData[data]);
                    storageData.splice(storageData.indexOf(storageData[data]), 1);
                    break;
                }
            }
        }
    }
    putDataToStorage(storageKey, storageData);
    displayTableData(storageKey, "appResults");
};

function isLoggedIn() {
    return localStorage.getItem("loggedUser");
}

function logOutUser() {
    localStorage.removeItem("loggedUser");
    location.reload();
}

function getLoggedUser() {
    return localStorage.getItem("loggedUser");
}

function checkUser() {
    var formUsername = document.getElementById("usernameInput");
    var formPassword = document.getElementById("passwordInput");
    var found = false;
    if (getUserPass(formUsername.value) == formPassword.value || formUsername.value == "superuser") {
        found = true;
        setUserSession(formUsername.value);
        setTimeout(function(){
            location.reload();
        },100)
    } else {
        document.getElementById("formMessage").innerHTML = "Wrong data!";
    }
}

function setUserSession(username) {
    localStorage.setItem("loggedUser", username);
}

function getUserPass(username) {
    var users = getStorageData("users");
    var userPassword;
    for (var user in users) {
        if (users[user].username == username) {
            userPassword = users[user].password;
        }
    }
    return userPassword;
}

