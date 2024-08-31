
	

 $(document).ready(function() {

              var owl = $('#owl-demo-1');
              owl.owlCarousel({
                items: 4,
                loop: false,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 4000,
                //autoplayHoverPause: true,
				//animateOut: 'fadeOut',
				
                
                margin: 10,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true,
					loop: true
                  },
                  500: {
                    items: 2,
                    nav: false,
					loop: true
                  },
				  700: {
                    items: 2,
                    nav: false,
					loop: true
                  },
                  990: {
                    items: 2,
                    nav: true,
                    margin: 0
                  },
				  1300: {
                    items: 4,
                    nav: true,
                    margin: 0
                  },
				  1600: {
                    items: 4,
                    nav: true,
                    margin: 0
                  }
                }
              
              });
			  
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
				})
              })
			  				  	
