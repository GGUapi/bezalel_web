document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("myModal");
    var popup2 = document.getElementById("myModal2");
    var closeButton = document.getElementsByClassName('close')[0];
    var closeButton2 = document.getElementsByClassName('close2')[0];
    var openDate = new Date('2024-09-09T00:00:00');
    var closeDate = new Date('2024-09-23T23:59:59'); 


    var currentDate = new Date();
    if (currentDate >= openDate && currentDate <= closeDate) {
        setTimeout(function() {
            popup.style.display = "block"; 
        }, 0);

    }

    else{
        setTimeout(function() {
            popup2.style.display = "block"; 
        }, 3000);
    }

    //點擊關閉按鈕時關閉彈跳視窗
    if (closeButton) {
        closeButton.addEventListener("click", function() {
            if (popup) {
                popup.style.display = "none";
            }
        });
    }

    if (closeButton2) {
        closeButton2.addEventListener("click", function() {
            if (popup2) {
                popup2.style.display = "none";
            }
        });
    }

    if (popup) {
        popup.addEventListener("click", function() {
            popup.style.display = "none";
        });
    }

    if (popup2) {
        popup2.addEventListener("click", function() {
            popup2.style.display = "none";
        });
    }
});