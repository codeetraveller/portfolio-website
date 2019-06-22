
		// menu dropdown toggle between show and hide
		function menuDropdown() {
			if (document.getElementById("menuChange").classList.toggle("change")) {
				document.getElementById("navList").style.display = "block";
			} else {
				document.getElementById("navList").style.display = "none";
			}
		}


		/*-- close menu dropdown if clicked elsewhere 
		window.onclick = function menuDropdown(event) {
			if (!event.target.matches('.menu-dropbtn')) {
				var dropdowns = document.getElementByClassName("nav");
				var i;
				for (i = 0; i < dropdowns.length; i++) {
					var openDropdown = dropdowns[i];
					if (openDropdown.classList.contains('show')) {
						openDropdown.classList.remove('show');
					}
				}
			}
		}
		this needs work ---*/

		// navigation resize on scroll
		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
				document.getElementById("nav-container").style.height = "70px";
				document.getElementById("nav-logo").style.width = "65px";
				document.getElementById("pull-left").style.height = "70px";
				document.getElementById("pull-right").style.height = "70px";
				document.getElementById("pull-middle").style.height = "70px";
				document.getElementById("site-title").style.display = "none";
				document.getElementById("site-title2").style.display = "none";
				document.getElementById("projectspage").style.margin = "-543px 0px 0px 0px";
				document.getElementById("projectMenu").style.display = "block";
			} else {
				document.getElementById("nav-container").style.height = "350px";
				document.getElementById("nav-logo").style.width = "300px";
				document.getElementById("pull-left").style.height = "350px";
				document.getElementById("pull-right").style.height = "350px";
				document.getElementById("pull-middle").style.height = "350px";
				document.getElementById("site-title").style.display = "block";
				document.getElementById("site-title2").style.display = "block";
				document.getElementById("projectspage").style.margin = "-263px 0px 0px 0px";
				document.getElementById("projectMenu").style.display = "none";
			}
		} 

		//About Me button
		/*var modal = document.getElementById("myModal");
		var btn = document.getElementById("modalButton");
		var span = document.getElementsByClassName("nav2") [0];*/

		function aboutClick() {
			if (document.getElementById("modalButton").classList.toggle("change")) {
				document.getElementById("myModal").style.display = "block";
			}
		}
		function closeClick() {
			if (document.getElementById("closeButton").classList.toggle("change")) {
				document.getElementById("myModal").style.display = "none";
			}
		}
		/*
		window.onclick = function aboutClose(event) {
			if (event.target == modal) {
				document.getElementById("myModal").style.display = "none";
			}
		}*/

		//pagination re-sizing on click

		function section1Click() {
			if (document.getElementById("anchor1").classList.toggle("change")) {
				document.getElementById("section1").style.height = "25px";
				document.getElementById("section2").style.height = "15px";
				document.getElementById("section3").style.height = "15px";
				document.getElementById("section4").style.height = "15px";
				document.getElementById("section5").style.height = "15px";
				/*document.getElementById("section6").style.height = "15px";*/
				document.getElementById("section7").style.height = "15px";
			}
			
		}
		function section2Click() {
			if (document.getElementById("anchor2").classList.toggle("change")) {
				document.getElementById("section2").style.height = "25px";
				document.getElementById("section1").style.height = "15px";
				document.getElementById("section3").style.height = "15px";
				document.getElementById("section4").style.height = "15px";
				document.getElementById("section5").style.height = "15px";
				/*document.getElementById("section6").style.height = "15px";*/
				document.getElementById("section7").style.height = "15px";
			}
		}
		function section3Click() {
			if (document.getElementById("anchor3").classList.toggle("change")) {
				document.getElementById("section3").style.height = "25px";
				document.getElementById("section2").style.height = "15px";
				document.getElementById("section1").style.height = "15px";
				document.getElementById("section4").style.height = "15px";
				document.getElementById("section5").style.height = "15px";
				/*document.getElementById("section6").style.height = "15px";*/
				document.getElementById("section7").style.height = "15px";
			}
		}
		function section4Click() {
			if (document.getElementById("anchor4").classList.toggle("change")) {
				document.getElementById("section4").style.height = "25px";
				document.getElementById("section2").style.height = "15px";
				document.getElementById("section3").style.height = "15px";
				document.getElementById("section1").style.height = "15px";
				document.getElementById("section5").style.height = "15px";
				/*document.getElementById("section6").style.height = "15px";*/
				document.getElementById("section7").style.height = "15px";
			}
		}
		function section5Click() {
			if (document.getElementById("anchor5").classList.toggle("change")) {
				document.getElementById("section5").style.height = "25px";
				document.getElementById("section2").style.height = "15px";
				document.getElementById("section3").style.height = "15px";
				document.getElementById("section4").style.height = "15px";
				document.getElementById("section1").style.height = "15px";
				/*document.getElementById("section6").style.height = "15px";*/
				document.getElementById("section7").style.height = "15px";
			}
		}
		/*function section6Click() {
			if (document.getElementById("anchor6").classList.toggle("change")) {
				document.getElementById("section6").style.height = "25px";
				document.getElementById("section2").style.height = "15px";
				document.getElementById("section3").style.height = "15px";
				document.getElementById("section4").style.height = "15px";
				document.getElementById("section5").style.height = "15px";
				document.getElementById("section1").style.height = "15px";
				/*document.getElementById("section7").style.height = "15px";
			}
		}*/
		function section7Click() {
			if (document.getElementById("anchor7").classList.toggle("change")) {
				document.getElementById("section7").style.height = "25px";
				document.getElementById("section2").style.height = "15px";
				document.getElementById("section3").style.height = "15px";
				document.getElementById("section4").style.height = "15px";
				document.getElementById("section5").style.height = "15px";
				/*document.getElementById("section6").style.height = "15px";*/
				document.getElementById("section1").style.height = "15px";
			}
		}

		// Icon background color

		/*--function change1Color() {
			document.getElementById("iconsBackground").className = "backgroundColor1"
			document.getElementById("iconsBackground").classList.add("backgroundColor1")
			document.getElementById("iconsBackground").classList.remove("backgroundColor1")

			document.getElementById("iconsBackground").className = 
				document.getElementById("iconsBackground").className.replace
					( /(?:^|\s)MyClass(?!\S)/g , '' )
			if (document.getElementById("colorINVIA").toggleClass("backgroundColor, backgroundColor2")) {
				document.getElementsByClassName("backgroundColor1");
			}
		}
		function change2Color() {
			document.getElementById("iconsBackground").className = "backgroundColor2"
			document.getElementById("iconsBackground").classList.add("backgroundColor2")
			document.getElementById("iconsBackground").classList.remove("backgroundColor2")

			document.getElementById("iconsBackground").className = 
				document.getElementById("iconsBackground").className.replace
					( /(?:^|\s)MyClass(?!\S)/g , '' )
			if (document.getElementById("colorINVIA").toggleClass("backgroundColor, backgroundColor2")) {
				document.getElementsByClassName("backgroundColor2");
			}
		}
		--*/

