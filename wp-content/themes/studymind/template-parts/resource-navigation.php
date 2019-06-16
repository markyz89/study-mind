<div class="resource-intro">
	<?php $page = get_the_ID();

	if ($page == 19): ?>
	<h2><?php the_field('resources_header'); ?></h2>
	<?php else :?>
	<h2>Navigate Elsewhere...</h2>
	<?php endif; ?>
	<p><?php the_field('resources_blurb'); ?></p>
</div> <!-- resource-intro -->

<div class="selectors">
	<button class="purple-button" id="gcse-selector">GCSE</button>
	<button id="a-level-selector">A-Level</button>
</div>

<div class="subject-buttons-grid gcse">
	<?php

	// check if the repeater field has rows of data
	if( have_rows('subject_buttons', 19) ):

	 	// loop through the rows of data
	    while ( have_rows('subject_buttons', 19) ) : the_row();
	    	
	    	$subject = get_sub_field('subject');
	    	$qual = get_sub_field('gcse_or_a-level');
	    	//echo $qual;
	    	if ($qual == 'GCSE'):
	    	?>
	    	<div class="item">
	    		<a href="<?php echo get_home_url().'/resource/'. get_sub_field('subject_link'); ?>">
	    			<button class="<?php echo $subject; ?>" data="<?php the_sub_field('gcse_or_a-level'); ?>">
	    				<img src="<?php echo get_sub_field('button_image')['url'];?> ">
	    				<p><?php the_sub_field('subject_name'); ?></p>
	    			</button>
	    		</a>
	    	</div> <!-- item -->
	        
	    	<?php
	    	endif;
	    endwhile;

	else :

	    // no rows found

	endif;

	?>
</div> <!-- subject-buttons-grid gcse -->

<div class="a-level-wrapper change"> 
	
<h2>Biology</h2>
	<div class="subject-buttons-grid alevel">
		<?php

		// check if the repeater field has rows of data
		if( have_rows('subject_buttons', 19) ):
			?>
			
		 	<?php
		 	// loop through the rows of data
		    while ( have_rows('subject_buttons', 19) ) : the_row();
		    	$subject = get_sub_field('subject');
		    	$qual = get_sub_field('gcse_or_a-level');
		    	//echo $qual;
		    	if ($qual == 'A-level' AND $subject == 'Biology'):
		    	?>

				    
				    	<div class="item">
				    		<a href="<?php echo get_sub_field('subject_link'); ?>">
				    			<button class="<?php echo $subject; ?>" data="<?php the_sub_field('gcse_or_a-level'); ?>" >
				    				<img src="<?php echo get_sub_field('button_image')['url'];?> ">
				    				<p><?php the_sub_field('subject_name'); ?></p>
				    			</button>
				    		</a>
				    	</div> <!-- item -->
				        <?php
	            	   
		    	endif;
		    endwhile;

		else :

		    // no rows found

		endif;



		?>
	</div> <!-- subject-buttons-grid alevel change -->

<h2>Chemistry</h2>
	<div class="subject-buttons-grid alevel">
		<?php

		// check if the repeater field has rows of data
		if( have_rows('subject_buttons', 19) ):
			?>
			
		 	<?php
		 	// loop through the rows of data
		    while ( have_rows('subject_buttons', 19) ) : the_row();
		    	$subject = get_sub_field('subject');
		    	$qual = get_sub_field('gcse_or_a-level');
		    	//echo $qual;
		    	if ($qual == 'A-level' AND $subject == 'Chemistry'):
		    	?>

				    
				    	<div class="item">
				    		<a href="<?php echo get_sub_field('subject_link'); ?>">
				    			<button class="<?php echo $subject; ?>" data="<?php the_sub_field('gcse_or_a-level'); ?>">
				    				<img src="<?php echo get_sub_field('button_image')['url'];?> ">
				    				<p><?php the_sub_field('subject_name'); ?></p>
				    			</button>
				    		</a>
				    	</div> <!-- item -->
				        <?php
	            	   
		    	endif;
		    endwhile;

		else :

		    // no rows found

		endif;



		?>
	</div> <!-- subject-buttons-grid alevel change -->
<h2>Physics</h2>
	<div class="subject-buttons-grid alevel">
		<?php

		// check if the repeater field has rows of data
		if( have_rows('subject_buttons', 19) ):
			?>
			
		 	<?php
		 	// loop through the rows of data
		    while ( have_rows('subject_buttons', 19) ) : the_row();
		    	$subject = get_sub_field('subject');
		    	$qual = get_sub_field('gcse_or_a-level');
		    	//echo $qual;
		    	if ($qual == 'A-level' AND $subject == 'Physics'):
		    	?>

				    
				    	<div class="item">
				    		<a href="<?php echo get_sub_field('subject_link'); ?>">
				    			<button class="<?php echo $subject; ?>" data="<?php the_sub_field('gcse_or_a-level'); ?>">
				    				<img src="<?php echo get_sub_field('button_image')['url'];?> ">
				    				<p><?php the_sub_field('subject_name'); ?></p>
				    			</button>
				    		</a>
				    	</div> <!-- item -->
				        <?php
	            	   
		    	endif;
		    endwhile;

		else :

		    // no rows found

		endif;



		?>
	</div> <!-- subject-buttons-grid alevel change -->
</div> <!-- a-level-wrapper -->