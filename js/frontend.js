//prikaz funkcija samo za korisnike
displayMoviesBlock();
displayGenresBlock();

function displayMoviesBlock(){

    var movies =getStorageData("movies");
 
    for(var movie in movies){
        document.getElementById("moviesBlock").innerHTML += "<div class='block-20 border tabItems "+movies[movie].genre+"'><a href='http://www.imdb.com/title/"+movies[movie].imdbNumber+"' target='_blank'><img src='/img/"+movies[movie].image+"' alt='"+movies[movie].title+"'><div class='block-100 border'>"+movies[movie].title+"</div></div>";
    }

}

function displayGenresBlock(){

    var genres =getStorageData("genres");
 
    document.getElementById("genresBlock").innerHTML += "<div class='block-20 border filterTabItem' data-item='all'>Show All</div>";

    for(var genre in genres){
        document.getElementById("genresBlock").innerHTML += "<div class='block-20 border filterTabItem' data-item='"+genres[genre].genreName+"'>"+genres[genre].genreName+"</div>";
    }
}

tabItemsShow();

function tabItemsShow() {

    var tabs = document.getElementsByClassName("filterTabItem");

    for(var i=0;i<tabs.length;i++){
        tabs[i].addEventListener("click", function (e) {
            hideItems();
            if(e.target.getAttribute("data-item") == "all"){
                var itemsToShow = document.getElementsByClassName("tabItems"); 
            }else{
                var itemsToShow = document.getElementsByClassName(e.target.getAttribute("data-item")); 
            }
        
            for(var j=0;j<itemsToShow.length;j++){
                itemsToShow[j].style.display = "block";
            }
        })
    }
}

function hideItems() { 

    var items = document.getElementsByClassName("tabItems");
    for(var i = 0;i<items.length;i++){
        items[i].style.display = "none";
    }
}

var menuItems = document.getElementsByClassName("menuItem");
for (var i = 0; i < menuItems.length; i++) {
    console.log("Dodajem klik na stavke u meniju!");
    menuItems[i].addEventListener("click", function (e) {
        ajaxGetFileContent(e.target.getAttribute("data-page"));
    })
}

//Ajax funkcija preko koje učitavam druge stranice u div-u na index stranici
function ajaxGetFileContent(url){
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url,true);
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