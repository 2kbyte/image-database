<!DOCTYPE html>
<html>
    <script src="script.js"></script>
    <link href="style.css" rel="stylesheet" type="text/css" />

    <div class="sidebar">
        <a href="./index.html">Explore</a><!--
        <a href="#">Tags</a>-->
        <a href="./upload.html" class="disabled-link">Upload</a>
    </div>
    <div class="main">
        <div class="header">
            Upload Image
        </div>
        <div class="body">
            <?php
            
            $filename = $_FILES['file']['name'];
            $location = "images/".$filename;
            
            if(move_uploaded_file($_FILES['file']['tmp_name'], $location)){
                echo 'File uploaded successfully';
            }else{
                echo 'Error uploading file';
            }
            ?>
        </div>
    </div>
</html>