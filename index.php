<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/global.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <script src="https://kit.fontawesome.com/cf8e3c5165.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
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
            <input class="card-head-input" type="text" placeholder="Add a new thing" id="addTask">
            <button class="btn-plus" onclick="add()"><i class="fa-solid fa-plus icon"></i></button>
        </div>
        <div class="card-body" id="cardBody">
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