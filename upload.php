<?php

var_dump($_FILES);

foreach ($_FILES['thumbnail']['tmp_name'] as $key => $value) {
    $targetPath = "uploads/". basename($_FILES["thumbnail"]["name"][$key]);
    move_uploaded_file($value, $targetPath);
}