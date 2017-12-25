function addBand(name, genre, rating) {

    var newBand = {}
    bands.push({
        bandName: name,
        bandGenre: genre,
        bandRating: rating
    })


}

$('.post-band').click(function (name, genre, rating) {
    name = $('.band-input').val();
    genre = $('.genre-input').val();
    rating = $('.band-rating').val();
    addBand(name, genre, rating);
    renderBeers();
})

function renderBeers() {
    $('.band-input').val('')
    $('.genre-input').val('')
    $('.bands-list').find('li').remove();
    for (i = 0; i < bands.length; i++) {
        $('.bands-list').append('<li>' + bands[i].bandRating + "       " + bands[i].bandName + "  -  " + bands[i].bandGenre + '</li>')
    }
}

$('.reverse-order').click(function () {
    if (sorted === false) {
        bands.sort(function (a, b) {
            if (a.bandRating < b.bandRating) return -1;
            if (a.bandRating > b.bandRating) return 1;
            return 0;
        })
        sorted = true;
    } else if (sorted === true){
        bands.reverse();
        sorted = false;
    }
    renderBeers();
})

var bands = [];
var sorted = false;