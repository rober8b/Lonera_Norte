/*	gallery */
(function(){
	$(document).ready(function(){
		$(".btn-prod").click(function(e){
			e.preventDefault();
			var filtro = $(this).attr("data-filter");

			if (filtro == "*") {
				$(".box-img").show(500);
			} else {
				$(".box-img").not("."+filtro).hide(500);
				$(".box-img").filter("."+filtro).show(500);
			}
		});

		$("ul li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		});
	});
}())
/*	end gallery */

