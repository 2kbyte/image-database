var folder = "images/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if (val.match(/\.(jpe?g|png|gif)$/)) { 
                let figure = document.createElement("figure");
                let image = document.createElement("img");
                let figure_caption = document.createElement("figcaption");
                image.src = (folder + val);                
                figure_caption.textContent = val;

                figure.appendChild(image);
                figure.appendChild(figure_caption);
                figure.appendChild(button);

                $(".images").append(figure);
            } 
        });
    }
});