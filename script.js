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
    renderBands();
})

function renderBands() {
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
            $('.reverse-order').html("Sort by Ascending")
            if (a.bandRating < b.bandRating) return -1;
            if (a.bandRating > b.bandRating) return 1;
            return 0;
        })
        sorted = true;
    } else if (sorted === true){
        $('.reverse-order').html("Sort by Descending")
        bands.reverse();
        sorted = false;
    }
    renderBands();
})

var bands = [];
var sorted = false;