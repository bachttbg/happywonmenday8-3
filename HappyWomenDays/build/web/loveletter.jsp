<%-- 
    Document   : loveletter
    Created on : Mar 7, 2026, 2:04:19 AM
    Author     : Admin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="vi">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Love Letter</title>
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/animation.css">
        <link rel="stylesheet" href="css/heart.css">
        <script src="js/love.js"></script>
        <script src="js/heart.js"></script>
    </head>
    <body>
        <h1>💖 Love Letter 💖</h1>
        <div class="heart" id="main-heart" role="img" aria-label="Heart"></div>
        <div class="messageBox" id="message"></div>
        <nav>
            <a href="home">← Back to Home</a>
        </nav>
        <audio autoplay loop>
            <source src="music/love.mp3">
        </audio>
    </body>
</html>
