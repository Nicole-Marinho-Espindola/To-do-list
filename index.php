<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/global.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <script src="https://kit.fontawesome.com/cf8e3c5165.js" crossorigin="anonymous"></script>
    <title>To do list</title>
</head>
<body>
    <div class="title-to-do-list-block">
        <span>
            To do List
        </span>
    </div>
    <div class="card-to-do-list">
        <div class="card-head">
            <input class="card-head-input" type="text" placeholder="Add a new thing">
            <i class="fa-solid fa-circle-plus icon"></i>
        </div>
        <div class="card-body">
            <div class="card-item" draggable="true" id="item1">
                <input class="input-checkbox" type="checkbox" name="" id="checkbox1">
                <label for="checkbox1"><input class="input-text" type="text" value="Learn javascript"></label>
                <i class="fa-solid fa-trash icon" onclick="delet()"></i>
            </div>
            <div class="card-item" draggable="true" id="item2">
                <input class="input-checkbox" type="checkbox" name="" id="checkbox2">
                <label for="checkbox2"><input class="input-text" type="text" value="Learn Sass"></label>
                <i class="fa-solid fa-trash icon" onclick="delet()"></i>
            </div>
            <div class="card-item" draggable="true" id="item3">
                <input class="input-checkbox" type="checkbox" name="" id="checkbox3">
                <label for="checkbox3"><input class="input-text" type="text" value="Listen to music"></label>
                <i class="fa-solid fa-trash icon" onclick="delet()"></i>
            </div>
            <div class="card-item" draggable="true" id="item4">
                <input class="input-checkbox" type="checkbox" name="" id="checkbox4">
                <label for="checkbox4"><input class="input-text" type="text" value="Read a book"></label>
                <i class="fa-solid fa-trash icon" onclick="delet()"></i>
            </div>
        </div>
    </div>
    <div class="copyright-block">
        <span>feito com <i class="fa-solid fa-heart icon"></i> por Nicole</span>
    </div>

    <script src="./assets/js/changeColor.js"></script>
    <script src="./assets/js/dragDrop.js"></script>
    <script src="./assets/js/addDelete.js"></script>
</body>
</html>