/* Remove image function */
// x button top right when hover
// are you sure window

/* Read and display images */
function delete_image() {
    console.log('delteted')
}

var folder = "images/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if (val.match(/\.(jpe?g|png|gif)$/)) { 
                let figure = document.createElement("figure");
                let image = document.createElement("img");
                image.src = (folder + val);
                
                let figure_caption = document.createElement("figcaption");
                figure_caption.textContent = val;
                figure_caption.id = "caption";

                let x_image = document.createElement("img");
                let button = document.createElement("button");
                button.onclick = 'delete_image()';
                x_image.src = '/images/x-button.png';
                x_image.style.width = '50px';

                figure.appendChild(image);
                figure.appendChild(figure_caption);
                figure.appendChild(button);
                button.appendChild(x_image)

                $(".images").append(figure);
            } 
        });
    }
});

/* Search images */
function search() {
    var input, filter, images, figure, v, i, caption_text;
    input = document.getElementById("search-input")
    filter = input.value.toLowerCase();
    images = document.getElementById("image_storage");
    figure = images.getElementsByTagName("figure")

    for (i = 0; i < figure.length; i++) {
        v = figure[i].getElementsByTagName("figcaption")[0];
        caption_text = v.textContent || v.innerText;
        if (caption_text.toLowerCase().indexOf(filter) > -1) {
            figure[i].style.display = "";
        } else {
            figure[i].style.display = "none";
        }
    }
}