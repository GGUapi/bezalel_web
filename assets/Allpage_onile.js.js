//搞menu Button圖案變化效果
$(document).ready(function(){
    //$("#testImg").attr("src", "/img/未選擇2.png");
    $("tr[id^='image-container']").each(function() {
      var img = $(this).find("img"); // 选择当前 <a> 元素下的 <img> 元素
      var mytext = $(this).find("#floating-menu");
  
      var oldSrc = img.attr("src"); // 获取 <img> 元素的原始 src 属性
      var newSrc = "new-image.jpg"; // 定义新的图片 URL
      
      $(this).hover(function() {
        // 当鼠标移入当前 <a> 元素时，将 <img> 元素的 src 属性更改为新的图片 URL
        img.attr("src", "https://cdn.shopify.com/s/files/1/0739/6425/7565/files/2.png?v=1681268250");
        mytext.css('opacity',1);
      }, function() {
        // 当鼠标移出当前 <a> 元素时，将 <img> 元素的 src 属性还原为原始的图片 URL
        img.attr("src","https://cdn.shopify.com/s/files/1/0739/6425/7565/files/2_bd324cd2-3961-47b9-8a04-139a085a3075.png?v=1681268250");
        mytext.css('opacity',0);
      });
  
    });
  
  
    $("img[class^='minSize']").each(function() {
      
      $(this).hover(function() {
        // 当鼠标移入当前 <a> 元素时，将 <img> 元素的 src 属性更改为新的图片 URL
        $(this).attr("src", "https://cdn.shopify.com/s/files/1/0739/6425/7565/files/2.png?v=1681268250");
  
      }, function() {
        // 当鼠标移出当前 <a> 元素时，将 <img> 元素的 src 属性还原为原始的图片 URL
        $(this).attr("src","https://cdn.shopify.com/s/files/1/0739/6425/7565/files/2_bd324cd2-3961-47b9-8a04-139a085a3075.png?v=1681268250");
  
      });
  
    });
  
  
    $(window).scroll(function() {
          var nav = document.querySelector('.nav_top');
          var section2 = document.querySelector('#section2');
          if (section2.getBoundingClientRect().top <= 0) {
          //av.classList.add('newFixed');
              nav.style.opacity="0.3";
  
              $('.nav_top').hover(function(){
                $(this).css('opacity',1);
              },function(){
                $(this).css('opacity',0.3);
              });
  
          } else {
          //nav.classList.remove('newFixed');
              nav.style.opacity="0";
              $('.nav_top').unbind();
          }
      });



      //footer show


    $(window).scroll(function() {
      
      var scrollTop = $(window).scrollTop();
      var targetDivs = $('#everfoot');
      
      // 判斷滾動位置是否在目標範圍內
      if (scrollTop > $('#section2').offset().top && 
          scrollTop < $('#footshowend').offset().top) {       
        // 顯示目標 div
        targetDivs.show();
      } else {
        // 隱藏目標 div
        targetDivs.hide();
      }
    });
  
  
  
  
  
  
  
  
      //折扣碼
      $('#iWantToBuy').click(function(e) {
        e.preventDefault();
        var discountCode = '無線隨行';
        // 複製到剪貼簿
        var temp = $('<input>').val(discountCode).appendTo('body').select();
        document.execCommand('copy');
        temp.remove();
        //前往購買
        window.location.hash = "#slider";
        window.location.href = window.location.href.split('#')[0] + '#slider';
  
              // 顯示alert訊息
              alert('您已成功複製折扣碼 : 無線隨行');
      });

        //折扣碼
      $('#iWantToBuy2').click(function(e) {
        e.preventDefault();
        var discountCode = '無線隨行';
        // 複製到剪貼簿
        var temp = $('<input>').val(discountCode).appendTo('body').select();
        document.execCommand('copy');
        temp.remove();
        //前往購買
        window.location.hash = "#slider";
        window.location.href = window.location.href.split('#')[0] + '#slider';
  
              // 顯示alert訊息
              alert('您已成功複製折扣碼 : 無線隨行');
      });
  
  
  });


  
  
  // $(window).scroll(function() {
  //   var nav = $('#myDiv');
  //   var section2 = $('#section2');
  //   if (section2.offset().top < 0) {
  //     nav.css('opacity', '1');
  //   } else {
  //     nav.css('opacity', '0');
  //   }
  
  //   var navText3 = $('.navText3');
  //   var section3 = $('#section3');
  //   if (section3.offset().top < 0 && section3.offset().top + section3.height() > 0) {
  //     navText3.css('opacity', '1');
  //   } else {
  //     navText3.css('opacity', '0');
  //   }
  // });
  
  
  