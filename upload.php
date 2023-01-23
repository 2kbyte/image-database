<!DOCTYPE html>
<html>

<!--import all scripts, styles, fonts, sets icons, title-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Explore - Database</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="assets/logo.png">
    <script src="jquery.js"></script>
    <script src="script.js" defer></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Source+Code+Pro&display=swap');
    </style>
</head>

<body>
    <!--Create navigation bar with logo, explore tab, github tab, and upload button-->
    <header>
        <a class="logo" href="./index.html">Database</a>
        <nav>
            <ul class="nav-links">
                <li><a href="./explore.html">Explore</a></li>
                <li><a href="https://github.com/2kbyte/image-database" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
        </nav>
        <a class="button" href="./explore.html#upload">Upload</a>
    </header>
    <!--Create block with heading information and button which leads to images tab-->
    <div class="block">
        <h2 class="headline">View all of your images.<br>All in one place.</h2>
        <a class="down" href="#image-block"><img src="assets/down-arrow.png"></a>
    </div>
    <!--Create white image block with two tabs; one image tab and one upload tab (image tab leads back to main .html page)-->
    <div class="white-block" id="image-block">
        <div class="tabs" id="tab-header">
            <a href="./explore.html#images" class="tab" id="image-tab" onclick="showSection('images', 'upload')">Images</a>
            <a href="./explore.html#upload" class="tab" id="upload-tab" onclick="showSection('upload', 'images')">Upload</a>
            <input class="search" type="text" placeholder="Search..." id="search" onkeyup="search()">
        </div>
        <!--Create upload section with php which receives the data from the form and uploads it to the local folder
            Echoes if the file has been successfully uploaded or not.-->
        <div class="upload" id ="upload">
        <?php
            $filename = $_FILES['file']['name'];
            $location = "images/".$filename;
            
            if(move_uploaded_file($_FILES['file']['tmp_name'], $location)){
                echo '<br />File uploaded successfully';
            }else{
                echo '<br />Error uploading file. File must be a valid image type';
            }
            ?>
        </div>
    </div>
</body>

</html>