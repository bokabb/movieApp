//prikaz funkcija samo za korisnike
displayMoviesBlock();
displayGenresBlock();

function displayMoviesBlock() {

    var movies = getStorageData("movies");

    for (var movie in movies) {
        document.getElementById("moviesBlock").innerHTML += "<div class='block-20 border tabItems " + movies[movie].genre + "'><a href='http://www.imdb.com/title/" + movies[movie].imdbNumber + "' target='_blank'><img src='/img/" + movies[movie].image + "' alt='" + movies[movie].title + "'><div class='block-100 border'>" + movies[movie].title + "</div></div>";
    }

}

function displayGenresBlock() {

    var genres = getStorageData("genres");

    document.getElementById("genresBlock").innerHTML += "<div class='block-20 border filterTabItem' data-item='all'>Show All</div>";

    for (var genre in genres) {
        document.getElementById("genresBlock").innerHTML += "<div class='block-20 border filterTabItem' data-item='" + genres[genre].genreName + "'>" + genres[genre].genreName + "</div>";
    }
}

tabItemsShow();

function tabItemsShow() {

    var tabs = document.getElementsByClassName("filterTabItem");

    for (var filter = 0; filter < tabs.length; filter++) {
        tabs[filter].addEventListener("click", function (e) {
            hideItems();
            if (e.target.getAttribute("data-item") == "all") {
                var itemsToShow = document.getElementsByClassName("tabItems");
            } else {
                var itemsToShow = document.getElementsByClassName(e.target.getAttribute("data-item"));
            }

            for (var item = 0; item < itemsToShow.length; item++) {
                itemsToShow[item].style.display = "block";
            }
        })
    }
}

function hideItems() {

    var items = document.getElementsByClassName("tabItems");
    for (var tab = 0; tab < items.length; tab++) {
        items[tab].style.display = "none";
    }
}

var menuItems = document.getElementsByClassName("menuItem");
for (var menu = 0; menu < menuItems.length; menu++) {
    console.log("Dodajem klik na stavke u meniju!");
    menuItems[menu].addEventListener("click", function (e) {
        ajaxGetFileContent(e.target.getAttribute("data-page"));
    })
}

function ajaxGetFileContent(url) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-type', 'text/html');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = xhr.responseText;
            document.getElementById("frontendContent").innerHTML = data;
        } else {
            console.log('error:', xhr.status);
        }
    };
}