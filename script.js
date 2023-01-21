/* Read and display images */
var folder = "images/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if (document.URL.includes("upload.php")) {
                return
            }
            if (val.match(/\.(jpe?g|png|gif)$/)) { 
                let figure = document.createElement("figure");
                let image = document.createElement("img");
                let figure_caption = document.createElement("figcaption");
                image.src = (folder + val);                
                figure_caption.textContent = decodeURI(val);

                figure.appendChild(image);
                figure.appendChild(figure_caption);

                $(".images").append(figure);
            } 
        });
    }
});

/* Show section */
var tab1 = document.getElementById('image-tab');
var tab2 = document.getElementById('upload-tab');

function showSection(section1, section2) {
    

    document.getElementById(section1).style.display = "block";
    document.getElementById(section2).style.display = "none";
    
    if (section1 == 'images') {
        tab1.style.backgroundColor = '#d7d7d7';
        tab2.style.backgroundColor = '';
    } else {
        tab2.style.backgroundColor = '#d7d7d7';
        tab1.style.backgroundColor = '';
    }
}

/* Check tab on load */
function checkTab() {
    if (document.URL.includes("explore.html#upload")) {
        document.getElementById('upload').style.display = "block";
        document.getElementById('images').style.display = "none";
        tab2.style.backgroundColor = '#d7d7d7';
        tab1.style.backgroundColor = '';
    } else if (document.URL.includes("explore.html#images")) {
        document.getElementById('images').style.display = "block";
        document.getElementById('upload').style.display = "none";
        tab1.style.backgroundColor = '#d7d7d7';
        tab2.style.backgroundColor = '';
    }
}

function uploadTab() {
    document.getElementById('upload').style.display = "block";
    document.getElementById('images').style.display = "none";
    tab2.style.backgroundColor = '#d7d7d7';
    tab1.style.backgroundColor = '';
    window.location.hash = "images";
}

/* Search images */
function search() {
    var input, filter, images, figure, v, i, caption_text;
    input = document.getElementById("search");
    filter = input.value.toLowerCase();
    images = document.getElementById("images");
    figure = images.getElementsByTagName("figure");

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

window.onload = checkTab()