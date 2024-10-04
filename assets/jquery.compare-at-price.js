//$(document).ready(function () {
//     $(document).ajaxComplete(function () {
//  	$('.accessories-item').each(function (index) {
//            var self = $(this),
//            fullhandle = self.find('.accessories-title').attr('href'),
//            fullhandleminus = fullhandle.slice(0, -2),
//        	handle = self.find('.accessories-title').attr('href').substr(10),
//        	handletrim = handle.slice(0, -2),
//            total = self.length;
//            if(index <= total + 1) {
//                $.getJSON(handle + '.js', function(product) {
//                      price = Shopify.formatMoney(product.compare_at_price); 
//                      self.find('.accessory-price').before('<span>' + price + '</span>'); 
//                })
//            }
//            else {
//                return false;
//            }
//			self.find('.accessories-title').prop('href', handletrim);
//			self.find('.accessories-img-wrapper img').wrap('<a href="' + fullhandleminus + '"></a>');
//       });	
//	});
//});

jQuery(window).load(function() {
                 
  $(document).one("ajaxStop", function() {      
      $('.accessories-item').each(function (index) {
            var self = $(this),
            fullhandle = self.find('.accessories-title').attr('href'),
            fullhandleminus = fullhandle.slice(0, -2),
        	handle = self.find('.accessories-title').attr('href').substr(10),
        	handletrim = handle.slice(0, -2),
            total = self.length;
            if(index <= total + 1) {
                $.getJSON(handle + '.js', function(product) {
                      price = Shopify.formatMoney(product.compare_at_price); 
                      self.find('.accessory-price').before('<span>' + price + '</span>'); 
                })
            }
            else {
                return false;
            }
			self.find('.accessories-title').prop('href', handletrim);
			self.find('.accessories-img-wrapper img').wrap('<a href="' + fullhandleminus + '"></a>');
       });	
	});
});
            	             
            	             