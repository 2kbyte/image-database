/* Reads the local 'images' folder and creates image element consiting of figure, figcaption appending it to the main image block
Does not run if on the upload.php page */
var folder = "images/";

$.ajax({
    url: folder,
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

/* Shows and hides sections based on the which tab is clicked on the .explore.html tab, colouring the selected tab */
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

/* Checks to detect which tab you are on to hide and display the respective tabs by reading the url of the current page */
function checkTab() {
    if (document.URL.includes("explore.html#upload")) {
        document.getElementById('upload').style.display = "block";
        document.getElementById('images').style.display = "none";
        tab2.style.backgroundColor = '#d7d7d7';
        tab1.style.backgroundColor = '';
    } else if (document.URL.includes("explore.html#images") || document.URL.includes("explore.html")) {
        document.getElementById('images').style.display = "block";
        document.getElementById('upload').style.display = "none";
        tab1.style.backgroundColor = '#d7d7d7';
        tab2.style.backgroundColor = '';
    }
}

/* Checks the 'figcaption' for the name of the image and matches it with the inputted text, displaying and hiding its respective images */
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

/* Calls the check tab function to ensure that the tab highlighting stays if the page is loaded or refreshed */ 
window.onload = checkTab()