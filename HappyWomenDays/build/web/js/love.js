/* 
 * Happy Women's Day love letter typing effect
 */
document.addEventListener("DOMContentLoaded", function() {
    var text = "Hôm nay là ngày 8/3 anh có đôi lời gửi đến em.\n\nChúc em ngày càng xinh đẹp.\nChúc em ngày càng học tập giỏi.\nChúc em ngày càng đạt được nhiều thành tích tốt.\nChúc những ngày tháng sau này đều cùng nhau đi qua.\nCảm ơn em vì em đã đến bên anh.\nMong rằng 2 đứa chúng mình sẽ bền vững và có nhiều kỉ niệm đẹp từ giờ cho đến mãi mãi về sau.\nAnh yêu em nhiều lắm ạ. 💖";
    var i = 0;
    var el = document.getElementById("message");
    function escapeHtml(c) {
        if (c === "\n") return "<br>";
        if (c === "<") return "&lt;";
        if (c === ">") return "&gt;";
        if (c === "&") return "&amp;";
        return c;
    }
    function love() {
        if (i < text.length) {
            el.innerHTML += escapeHtml(text.charAt(i));
            i++;
            setTimeout(love, 50);
        }
    }
    love();
});