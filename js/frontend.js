//prikaz funkcija samo za korisnike
displayMoviesBlock();
displayGenresBlock();
tabItemsShow();

var menuItems = document.getElementsByClassName("menuItem");
for (var menu = 0; menu < menuItems.length; menu++) {
    console.log("Dodajem klik na stavke u meniju!");
    menuItems[menu].addEventListener("click", function (e) {
        ajaxGetFileContent(e.target.getAttribute("data-page"));
    })
}

function displayMoviesBlock() {

    var movies = getStorageData("movies");

    for (var movie in movies) {
        document.getElementById("moviesBlock").innerHTML += "<div class='block-20 tabItems " + movies[movie].genre + "'><a href='http://www.imdb.com/title/" + movies[movie].imdbNumber + "' target='_blank'><img src='/img/" + movies[movie].image + "' alt='" + movies[movie].title + "'><div class='block-100 black bold'>" + movies[movie].title + "</div></div>";
    }

}

function displayGenresBlock() {

    var genres = getStorageData("genres"),
        counters = getCounters();

    document.getElementById("genresBlock").innerHTML += "<div class='block-20 border bold seablue filterTabItem' data-item='all'>Show All (" + counters.All + ")</div>";
    for (var genre in genres) {
        var counter = counters[genres[genre].genreName] || 0;
        document.getElementById("genresBlock").innerHTML += "<div class='block-20 border filterTabItem' data-item='" + genres[genre].genreName + "'>" + genres[genre].genreName + " (" + counter + ")</div>";
    }
}

function getCounters() {
    var movies = getStorageData("movies"),
        counter = {},
        counterAll = 0;
    for (var movie in movies) {
        if (typeof counter[movies[movie].genre] === 'undefined') {
            counter[movies[movie].genre] = 0;
        }
        counter[movies[movie].genre]++;
        counterAll++;
    }
    counter.All = counterAll;
    return counter;
}

function tabItemsShow() {

    var tabs = document.getElementsByClassName("filterTabItem");

    for (var filter = 0; filter < tabs.length; filter++) {
        tabs[filter].addEventListener("click", function (e) {
            hideItems();

            var className = e.target.getAttribute("data-item");
            if (className === "all") {
                className = "tabItems";
            }
            var itemsToShow = document.getElementsByClassName(className);

            for (var item = 0; item < itemsToShow.length; item++) {
                itemsToShow[item].style.display = "block";
            }
        });
    }
}

function hideItems() {

    var items = document.getElementsByClassName("tabItems");
    for (var tab = 0; tab < items.length; tab++) {
        items[tab].style.display = "none";
    }
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