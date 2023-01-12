/* Read and display images */
var folder = "images/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if(val.match(/\.(jpe?g|png|gif)$/) ) { 
                $(".body_images").append( "<img src='"+ folder + val +"'>" );
                console.log("test")
            } 
        });
    }
});