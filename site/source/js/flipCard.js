(function($){
	$(document).ready(function(){

		$('.over').on('hover',function(){
			$this = $(this);

			direction($this);

		});

		$('.click').on('click', function(){
			$this = $(this);

			direction($this);

		});

		$('.card').on('click', '.cbutton', function(e){
			e.preventDefault();
			$this = $(this);

			direction($this.parents('.card'));
		});


		function direction($this){
			if( getInternetExplorerVersion() != -1){
				$this.find('div').fadeToggle();
				return;
			}

			if($this.data('direction') === 'right'){
				
				$this.toggleClass('flipping-right');

			}else if($this.data('direction') === 'left'){
				
				$this.toggleClass('flipping-left');

			}else if($this.data('direction') === 'top'){
				
				$this.toggleClass('flipping-top');
				
			}else if($this.data('direction') === 'bottom'){
				
				$this.toggleClass('flipping-bottom');
				
			}
			
		}

		function getInternetExplorerVersion()
		// Returns the version of Windows Internet Explorer or a -1
		// (indicating the use of another browser).
		{
		   var rv = -1; // Return value assumes failure.
		   if (navigator.appName == 'Microsoft Internet Explorer')
		   {
		      var ua = navigator.userAgent;
		      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		      if (re.exec(ua) != null)
		         rv = parseFloat( RegExp.$1 );
		   }
		   return rv;
		}

	});
})(jQuery);