<?php
$directoryName = "images";

if(is_writable($directoryName)){ 
    echo 'directory is writable';
}else{ 
    echo 'test';
}
?>