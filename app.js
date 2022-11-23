(function($) {
	$(document).ready(function() {
		$('input[name="card_number"]').on('keypress change', function () {
			if( $(this).val().length < 19 ) {
			  $(this).val(function (index, value) {
			    return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
			  });
			}
		});
		
		$('.form').on('submit', function(e) {
			e.preventDefault();
			$('.form-field').removeClass('field-error');
			$('.form-error').remove();

			let isValid = true;

			$('.form-field').each( function( index, element ) {
				if ( $(element).val() == '' ) {
					isValid = false;
					$(element).addClass('field-error');
					$(element).closest('.form-group').find('.form-error').remove();
					$(element).closest('.form-group').append('<p class="form-error">Can&apos;t be blank</p>');
				} else {
					if( $(element).attr('name') == 'card_name') {
						$('.credit-card-name').html($(element).val());
					}
					if( $(element).attr('name') == 'card_number') {
						$('.credit-card-number').html($(element).val());
					}
					if( $(element).attr('name') == 'card_month') {
						$('.credit-card-month').html($(element).val());
					}
					if( $(element).attr('name') == 'card_year') {
						$('.credit-card-year').html($(element).val());
					}
					if( $(element).attr('name') == 'card_cvc') {
						$('.credit-card-cvc').html($(element).val());
					}
				}

				if ( $(element).attr('name') !== 'card_name' ) {
					if( isNaN( $(element).val().replaceAll(' ', '') ) ) {
						isValid = false;
						$(element).addClass('field-error');
						$(element).closest('.form-group').find('.form-error').remove();
						$(element).closest('.form-group').append('<p class="form-error">Wrong format, numbers only</p>');
					}
				}
			});

			if( isValid ) {
				$(this).hide();
				$('.form-success').show();
			}
	
		});
		$('.reset').on('click', function(e) {
			e.preventDefault();
			$('.form-success').hide();
			$('.form').trigger('reset');
			$('.form').show();
		});
	});
})(jQuery);