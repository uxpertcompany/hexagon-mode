document.addEventListener('DOMContentLoaded', function(){
	var aside = $("aside")
	var toggleList = $("#toggle_list")
	var toggleMenu = $("#toggle_menu");
	var closeList = $("#close_list");
	var closeController = $("#close_controller");
	var hiddenBg = $("#hidden_bg")

	window.onload = function() {
  		aside.removeClass("closed");
	}
	if (window.matchMedia("(min-width: 900px)").matches) {
			closeController.click(function(){
				aside.addClass("closed");
				setTimeout(function() {
  					$("#head_tab").addClass("opened");
  				}, 200);
			})
	} else {
		closeController.click(function(){
			aside.addClass("shrinked");
			$(".button_next_video").addClass("shrinked")
			$(".button_next_video").addClass("move");
			$("#next_video").addClass("shrinked");
			hiddenBg.removeClass("popup")
			$("#disclamer_to_form").addClass("moved")
			// $(aside).removeClass("moved")
		})
	}

		$("#close_fab").click(function(){
			openFormTab()
		})
		$("#disclamer_to_form").click(function(){
			$(this).removeClass("opened")
			$("aside").removeClass("moved");
			$(".form_cont").removeClass("closed");
			$("#hidden_bg").addClass("hidden");
			$("#slide_mob_disclamer").addClass("opened");
			$("#toggle_list").removeClass("opened_list");
		})

		$("#open_form").click(function(){
			$(".form_cont").removeClass("closed");
			$("#popup_smart_mob_text").addClass("closed");
			$("#hidden_bg").addClass("hidden");
			$("#slide_mob_disclamer").addClass("opened");
		})
		$("#close_popup_smart_text").click(function(){
			openFormTab()
			$(".form_cont").addClass("closed");
			$("#hidden_bg").removeClass("hidden");
			$("#slide_mob_disclamer").removeClass("opened");	
		})
		$("#head_tab").click(function() {
			$("#head_tab").removeClass("opened");
			setTimeout(function() {
	  			aside.removeClass("closed");
	  		}, 200);
		})

	toggleMenu.click(function(){
		toggleList.toggleClass("opened_list");
		hiddenBg.fadeIn(400);
	})
	closeList.click(function(){
		toggleList.removeClass("opened_list");
		hiddenBg.fadeOut(400);
	})

	function nextClick() {
		$('#next_video').click(function() {
				playNext()
			if ($(this).hasClass("shrinked")) {
				$(".button_next_video").removeClass("move")
				// $(".button_next_video").removeClass("shrinked");
				$("#disclamer_to_form").removeClass("moved");
				setTimeout(function() {
  					aside.removeClass("shrinked")
  					$(".button_next_video").removeClass("shrinked");
  				}, 50);
			}	else {
    			// var pos = $('.test_video').scrollLeft();
    			// $(".test_video").animate({scrollLeft: pos += 400}, 300);
    			hiddenBg.fadeIn("slow", function() {
    				$(this).addClass("popup");
    			})
    			setTimeout(function() {
  					$(".video_iframe").addClass("opened")
  				}, 300);
			}
		})
	}
	nextClick()
})

			function openFormTab() {
				$("#popup_smart_mob_text").addClass("closed");
				setTimeout(function() {
					$("#disclamer_to_form").addClass("opened");
					$("aside").addClass("moved");

					// $("#close_controller").addClass("moved");
	  		// 		$(".watching_video").addClass("moved");
	  		// 		$(".next_video").addClass("moved")
	  			}, 200);
			}

function playNext() {
    var from = $('.watching_now');
    var current = $('.test_video').first()
    var next = current.clone(true)
	    .addClass('minified');

    var songName = next.find('.text_in').clone(from.find('.text_in').text())
    var title = next.find('.type_next_vid').clone(from.find('.type_next_vid'))
    var songPoster = next.find('.test_video > img').attr('src', from.find('.image_place > img').attr('src'));
    // var title = next.find('.cont_list').clone(from.find('.cont_list'))

    next.appendTo('aside .cont_next_video')

    var animationDuration = 1000;
    setTimeout(() => {
		next.removeClass('minified')
		current.addClass('slide')
	    setTimeout(() => {
	    	current.remove()
	    }, 1000)
    })
}
