$.getJSON("./json/about-us.json", function(about) {
    $.each(about, function(key, val) {
        //$('#' + key).html(val);
        console.log(val);
        $('.aboutText').append('<div>' + val + '</div>');
    });
});