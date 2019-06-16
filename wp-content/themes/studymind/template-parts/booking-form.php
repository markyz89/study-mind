<div class="booking-form" id="booking">
	<div class="desktop-booking-form">
		<div class="paper-plane">
			<img src="<?php echo get_template_directory_uri().'/img/paper-plane.png'; ?>">
		</div>
		<?php gravity_form( 2, $display_title = false, $display_description = false, $display_inactive = false, $field_values = null, $ajax = true, $tabindex, $echo = true );?>
	</div> <!-- desktop-booking-form -->
	<div class="mobile-form">
		<?php gravity_form( 4, $display_title = false, $display_description = false, $display_inactive = false, $field_values = null, $ajax = true, $tabindex, $echo = true ); ?>
	</div>
</div> <!-- booking-form -->