function search(){
    var input = document.getElementById("search-box");
    var filter = input.value.toLowerCase();
    var movieBox = document.getElementsByClassName('movie-box');
    for (x = 0; x < movieBox.length; x++){
        movieBox[x].style.display = "none";
    }
    for (i = 0; i < movieBox.length; i++){
        var movieTitle = movieBox[i].getElementsByClassName('movie-title');
        for (j = 0; j < movieTitle.length; j++){
            if(movieTitle[j].innerText.toLowerCase().includes(filter)){
                movieBox[i].style.display = "block";
            }
        }
    }
}

