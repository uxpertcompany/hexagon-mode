document.addEventListener('DOMContentLoaded', function(){
	var controlWithoutTrigger = document.querySelector(".arrow_without_trigger");
	var triggerWidget = document.querySelector("#trigger_widget");
	var openFullTabs = document.querySelector("#open_tabs");
	var hammertime = new Hammer(triggerWidget);
	var hammerArrowCloseWidget = new Hammer(controlWithoutTrigger);
	var hammerOpenFullTabs = new Hammer(openFullTabs);
	var iframeLottie = document.querySelector("iframe");
	var pulseOff = document.querySelector("#pulse_off");
	var aside = document.querySelector("aside");
	var classes = aside.classList;

	hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
	hammerArrowCloseWidget.get('pan').set({ direction: Hammer.DIRECTION_ALL });
	hammerOpenFullTabs.get('pan').set({ direction: Hammer.DIRECTION_ALL });
	
	window.onload = function() {
  			$("#popup_smart_mob_text").removeClass("closed")
  			aside.classList.remove("transition_up")
  			setTimeout(function() {
  				aside.classList.remove("transition_second_up")
  			}, 1500);
	}

	function controlTrigger() {
		var header = document.querySelector("header");
		var main = document.querySelector("main");
		var headerClasses = header.classList;
		var mainClasses = main.classList;
		var widgetClosed = document.querySelector("closed");
		var closeWithoutTrigger = document.querySelector("#close_without_trigger");
		var toggleDisclamer = document.querySelector(".disclamer");
		var widgetPic = document.querySelector("#widget_pic");
		var closWithoutTrigger = document.querySelector(".close_without_trigger");
		var arrowWithoutTrigger = document.querySelector(".arrow_without_trigger");

		hammertime.on('panup', function() {
			classes.remove("closed");
			classes.remove("opened_tab");
  			$("#hidden_bg").addClass("hidden");
  			setTimeout(function() {
  				toggleDisclamer.classList.add("toggle_disclamer")
  			}, 200);
  			changePic()
			});
		hammertime.on('pandown', function() {
			classes.add("closed");
			classes.remove("opened_tab");
			$("#hidden_bg").removeClass("hidden");
  				toggleDisclamer.classList.remove("toggle_disclamer")
			changePic()
		})
		hammerArrowCloseWidget.on('panup', function() {
			classes.remove("closed");
			classes.remove("without_trigger");
			setTimeout(function() {
				toggleDisclamer.classList.remove("toggle_disclamer")
			}, 500);
  			$("#hidden_bg").addClass("hidden");
  			changePic()
		});
		hammerArrowCloseWidget.on('panright', function() {
			classes.remove("without_trigger");
			changePic()
		});
		hammerOpenFullTabs.on('panup', function() {
			classes.remove("closed");
			classes.remove("opened_tab");
			setTimeout(function() {
				toggleDisclamer.classList.add("toggle_disclamer")
			}, 500);
  			$("#hidden_bg").addClass("hidden");
  			changePic()
		});
		triggerWidget.onclick = function() {
			if (classes.contains("opened_tab")) {
				classes.remove("opened_tab");
			} else {
			classes.toggle("closed");
			$("#hidden_bg").toggleClass("hidden");
			classes.remove("opened_tab");
			setTimeout(function() {
				toggleDisclamer.classList.toggle("toggle_disclamer")
			}, 200);
		};
			changePic()
			}
		openFullTabs.onclick = function() {
			classes.remove("closed");
			classes.remove("opened_tab");
			setTimeout(function() {
				toggleDisclamer.classList.add("toggle_disclamer")
			}, 500);
			$("#hidden_bg").addClass("hidden");
  			changePic()
  		}
  		closeWithoutTrigger.onclick = function() {
  			classes.remove("without_trigger");
  			changePic()
  		}
  		arrowWithoutTrigger.onclick = function() {
  			classes.remove("closed");
  			classes.remove("without_trigger");
  			setTimeout(function() {
  				toggleDisclamer.classList.add("toggle_disclamer")
  			}, 200);  		
  			changePic()		
  		}
  		window.onclick = function(event) {
       		if (event.target === header) {
       			classes.add("closed");
       			toggleDisclamer.classList.remove("toggle_disclamer")
       			$("#hidden_bg").removeClass("hidden");
  				changePic()
       		}
		}


		$("#close_fab").click(function(){
			$("#popup_smart_mob_text").addClass("closed");
		})

		$(".open_form").click(function(){
			$(aside).addClass("closed")
			$("#popup_smart_mob_text").addClass("closed");
			$(".form_cont").removeClass("closed");
			$("#hidden_bg").addClass("hidden");
			setTimeout(function() {
  				$(".disclamer").addClass("toggle_disclamer")
  			}, 100);
		})

		$("#close_popup_smart_text").click(function(){
			$(".disclamer").removeClass("toggle_disclamer");
			$(".form_cont").addClass("closed");
			$("#hidden_bg").removeClass("hidden");
		})		
	}
	controlTrigger()
	function toSubscribe() {
		var subscribe = document.querySelector("#click_subscribe");
		var classes = subscribe.classList;
		subscribe.onclick = function() {
			var result = classes.toggle("subscribed")
		}
	}
	toSubscribe()

		function changePic() {	if (classes.contains("closed")) {
				pulseOff.style.display = "none"
				iframeLottie.style.display = "block";
			} else {
				pulseOff.style.display = "block";
				iframeLottie.style.display = "none";
			}
		}
})