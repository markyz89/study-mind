<?php 

get_header();

?>

<div class="desktop-banner banner">
	<div class="banner-content">
		<div class="text-content">
			<h1><?php the_field('banner_title'); ?></h1>
			<p><?php the_field('banner_sub_title'); ?></p>

			<a href="<?php the_field('button_link'); ?>">
				<button><?php the_field('button_text'); ?><i class="fas fa-arrow-right"></i></button>
			</a>
			<?php $image = get_field('review_image'); ?>
			<img src="<?php echo $image['sizes']['banner-review']; ?>">
		</div> <!-- text content -->
		<div class="banner-image">
			<?php $image = get_field('main_banner_image'); ?>
			<img src="<?php echo $image['sizes']['banner-image']; ?>">
		</div> <!-- banner image -->
	</div> <!-- banner content -->
</div> <!-- banner -->

<div class="mobile-banner banner">
	<div class="banner-content">
		<div class="text-content">
			<h1><?php the_field('banner_title'); ?></h1>
		</div> <!-- text-content --> 
		<div class="banner-image">
			<?php $image = get_field('main_banner_image'); ?>
			<img src="<?php echo $image['sizes']['banner-image']; ?>">
		</div> <!-- banner image -->
		<div class="text-content mobile-text-content">
			<?php $subTitle = strip_tags(get_field('banner_sub_title')); ?>
			<p><?php echo $subTitle; ?></p>
			<a href="<?php the_field('button_link'); ?>">
				<button><?php the_field('button_text'); ?><i class="fas fa-arrow-right"></i></button>
			</a>
			<?php $image = get_field('review_image'); ?>
			<img src="<?php echo $image['sizes']['banner-review']; ?>">
		</div> <!-- text-content --> 
	</div> <!-- banner-content -->
</div>

<div class="banner-stats">
	<?php //print_r(get_field('stat_1_icon')); ?>
	<div>
		<img src="<?php echo get_field('stat_1_icon')['sizes']['banner-icon'];?>">
		<p><?php the_field('stat_1'); ?></p>
	</div>
	<div>
		<img src="<?php echo get_field('stat_2_icon')['sizes']['banner-icon'];?>">
		<p><?php the_field('stat_2'); ?></p>
	</div>
	<div>
		<img src="<?php echo get_field('stat_3_icon')['sizes']['banner-icon'];?>">
		<p><?php the_field('stat_3'); ?></p>
	</div>
</div> <!-- banner-stats -->


<div id="#courses" class="courses">
	<h2><?php the_field('courses_header'); ?></h1>
	<p><?php the_field('courses_sub_header'); ?></p>

	<!-- First row of course tabs -->
	<div class="desktop-course-tabs desktop-course-tabs-1 appear hidden" data-appear-offset="280" data-appear-toggle-class="hidden">
		<div class="course-images">
			<?php

			// check if the repeater field has rows of data
			if( have_rows('course_tabs') ):

				$count = 1;
			 	// loop through the rows of data
			    while ( have_rows('course_tabs') ) : the_row();

		    		?>
	    			<div class="course-tab course-tab-<?php echo $count?>">
	    				
	    				<img class="course-logo" src="<?php echo get_sub_field('course_logo')['sizes']['course-logo']; ?>">
	    				<p><?php the_sub_field('course_title'); ?></p>

	    				<div class="buttons">
		    				<a href="<?php the_sub_field('top_button_link') ?>"><?php the_sub_field('top_button'); ?></a>
		    				<a href="<?php the_sub_field('middle_button_link') ?>"><?php the_sub_field('middle_button'); ?></a>
	    				
		    				<?php $bottomButton = get_sub_field('bottom_button');

		    				 if($bottomButton) {
		    				 ?>
								<a href="<?php the_sub_field('bottom_button_link') ?>"><?php the_sub_field('bottom_button'); ?></a>	    				 	
		    				 <?php

		    				}
		    				?>
	    				</div> <!-- buttons -->
	    				<img class="bottom-design" src="<?php echo get_sub_field('bottom_design')['sizes']['bottom-swoosh']; ?>">

	    			</div>


		    		<?php
		    		$count++;
			    endwhile;

			else :

			    // no rows found

			endif;

			?>
			
		</div>

		<?php $courseType = get_field('type_of_course'); ?>
		
		<div class="course-group-details">
			<p class="small-sub-header"><?php echo $courseType['small_sub_header']; ?></p>
			<h3><?php echo $courseType['larger_header']; ?></h3>
			<img src="<?php echo $courseType['verification_image']['sizes']['thumbs-up-review']; ?>">
		</div>
	</div>

	<!-- Second row of course tabs, image and text order reversed -->
	<div class="desktop-course-tabs desktop-course-tabs-2 appear hidden" data-appear-offset="700" data-appear-toggle-class="hidden">
		<div class="course-group-details-2">
			<?php $courseType2 = get_field('type_of_course_2'); ?>
			<p class="small-sub-header"><?php echo $courseType2['small_sub_header']; ?></p>
			<h3><?php echo $courseType2['larger_header']; ?></h3>
			<img src="<?php echo $courseType2['verification_image']['sizes']['thumbs-up-review']; ?>">
		</div>

		<div class="course-images">
			<?php

			// check if the repeater field has rows of data
			if( have_rows('course_tabs_2') ):

				$count = 1;
			 	// loop through the rows of data
			    while ( have_rows('course_tabs_2') ) : the_row();

		    		?>
	    			<div class="course-tab course-tab-row-2-card-<?php echo $count?>">
	    				
	    				<img class="course-logo" src="<?php echo get_sub_field('course_logo')['sizes']['course-logo'] ?>">
	    				<p><?php the_sub_field('course_title'); ?></p>

	    				<div class="buttons">
		    				<a href="<?php the_sub_field('top_button_link') ?>"><?php the_sub_field('top_button'); ?></a>
		    				<a href="<?php the_sub_field('middle_button_link') ?>"><?php the_sub_field('middle_button'); ?></a>

	    				


	    				<?php $bottomButton = get_sub_field('bottom_button');

	    				 if($bottomButton) {
	    				 ?>
							<a href="<?php the_sub_field('bottom_button_link') ?>"><?php the_sub_field('bottom_button'); ?></a>	    				 	
	    				 <?php

	    				}
	    				?>
	    				</div> <!-- buttons -->
	    				<img class="bottom-design" src="<?php echo get_sub_field('bottom_design')['sizes']['bottom-swoosh']; ?>">
    					

	    			</div> <!-- course-tab -->


		    		<?php
		    		$count++;
			    endwhile;

			else :

			    // no rows found

			endif;

			?>
			
		</div>



		
		
	</div> <!-- desktop-course-tabs-2 -->

	<div class="mobile-course-tabs">
		<h3><?php the_field('mobile_qualification_header'); ?></h3>
		<div class="mobile-course-images">
			<?php
			
				// check if the repeater field has rows of data
				if( have_rows('mobile_course_tabs') ):

					$count = 1;
				 	// loop through the rows of data
				    while ( have_rows('mobile_course_tabs') ) : the_row();

			    		?>
			    		<a href="<?php echo get_sub_field('course_link') ?>">
		    			<div class="mobile-course-tab">
		    				
		    				<img class="course-logo" src="<?php echo get_sub_field('course_logo')['url'] ?>">
		    				<p style="color:<?php echo get_sub_field('text_colour'); ?>"><?php the_sub_field('course_title'); ?></p>

		    				<img class="right-side-design" src="<?php echo get_sub_field('right_side_design')['url']; ?>">
		   					

		    			</div> <!-- course-tab -->
		    			</a>

			    		<?php
			    		$count++;
				    endwhile;

				else :

				    // no rows found

				endif;



			?>
		</div>
	</div>

	<div class="mobile-course-tabs-2 mobile-course-tabs">
		<h3><?php the_field('mobile_qualification_header_2'); ?></h3>
		<div class="mobile-course-images">
			<?php
				// check if the repeater field has rows of data
					if( have_rows('mobile_course_tabs_2') ):

						$count = 1;
					 	// loop through the rows of data
					    while ( have_rows('mobile_course_tabs_2') ) : the_row();

				    		?>
				    		<a href="<?php echo get_sub_field('course_link') ?>">
			    			<div class="mobile-course-tab">
			    				
			    				<img class="course-logo" src="<?php echo get_sub_field('course_logo')['url'] ?>">
			    				<p style="color:<?php echo get_sub_field('text_colour'); ?>"><?php the_sub_field('course_title'); ?></p>

			    				<img class="right-side-design" src="<?php echo get_sub_field('right_side_design')['url']; ?>">
			   					

			    			</div> <!-- course-tab -->
			    			</a>

				    		<?php
				    		$count++;
					    endwhile;

					else :

					    // no rows found

					endif;
			?>
		</div>
	</div>


</div> <!-- courses -->

<div id='cta'>
	<?php get_template_part('template-parts/contact','us'); ?>
</div>


<div class="products">
	<h2><?php the_field('products_header'); ?></h2>
	
		<?php
		if( have_rows('products_group') ):
			$count = 1;

			while ( have_rows('products_group') ) : the_row();
				// $product1 = get_field('products_group')[0];
				// print_r(get_field('products_group'));
				?>

				<div class="product-row product-row-<?php echo $count ?>">
					<div class="products-text">

						<div class="sub-head-container">
							<p class="sub-head"><?php echo get_sub_field('product_sub_heading'); ?></p>
							<?php if(get_sub_field('coming_soon')): ?>
							<p class="coming-soon-icon">Coming soon</p>
							<?php 
								endif;
							?>
						</div>


						<a href="<?php the_sub_field('product_link'); ?>" class="product-link"><?php the_sub_field('product_link_text'); ?> </a>
						<p class="description"><?php the_sub_field('product_description'); ?></p>
						<p class="intro"><?php the_sub_field('product_courses_intro'); ?></p>

						<div class="product-courses">
								
							<?php

							// check if the repeater field has rows of data
							if( have_rows('product_courses') ):
								
							 	// loop through the rows of data
							    while ( have_rows('product_courses') ) : the_row();
							    	?>
							  
						        	<?php
							        // display a sub field value
							        $course = get_sub_field('course'); ?>

							        	<a href="<?php echo $course['course_link']; ?>" class="course-link <?php echo $course['course_name']; ?>" style="color: <?php echo $course['course_colour']; ?>"><?php echo $course['course_name']; ?></a>

							        	

							        <?php
							        
							    endwhile;

							else :

							    // no rows found

							endif; ?>
						</div> <!-- product-courses -->

					</div> <!-- products-text -->

						<div class="products-image">
							<img src="<?php echo get_sub_field('products_image')['sizes']['products-image']; ?>">
						</div> <!-- products-image -->
					
				</div> <!-- product-row -->
				<?php
				$count++;
			endwhile;

		endif;
		?>

		

</div> <!-- products -->

<div class="content-separator">
		<h2 class="desktop-heading"><?php the_field('content_separator_heading'); ?></h3>
		<p><?php the_field('sub_heading'); ?></p>
		<h2 class="mobile-heading"><?php the_field('content_separator_mobile_heading'); ?></h3>

		<p><?php the_field('content_separator_content'); ?></p>

		<div class="partners">
			<?php 
			$partners = get_field('partner_images'); 

			if( $partners ):
				foreach($partners as $partner):
			?>
				<img src="<?php echo $partner['url'] ?>">
			<?php
				endforeach;
			endif;
			?>
		</div>                   

</div> <!-- content separator -->

<div class="why">
	
	<h2><?php the_field('why_header'); ?></h2>

	<div class="why-product-groups">
		
		<?php

		// check if the repeater field has rows of data
		if( have_rows('why_product_group') ):
			$count = 1;
		 	// loop through the rows of data
		    while ( have_rows('why_product_group') ) : the_row();
		    	
		    	?>
		    		<div class="why-product-group-<?php echo $count ?> why-product-group">
		    			<img class="desktop-why-image" src="<?php echo get_sub_field('why_image')['url']; ?>">
		    			<?php
		    			$mobileImage = get_sub_field('why_mobile_image');

		    				if($mobileImage): ?>
		    					<img class="mobile-why-image" src="<?php echo get_sub_field('why_mobile_image')['url']; ?>">	
		    			<?php
		    				endif;
		    			?>
		    			<div class="<?php if ($count == 1) { echo "group-text group-text-1 hide1 slide1";} else if ($count == 2) { echo "group-text group-text-2 hide2 slide2";} else if ($count == 3) { echo "group-text group-text-3 hide3 slide3";} ?>" 

    							  data-appear-offset="<?php if($count == 1) { echo "3250";}
							  	   else if($count == 2) { echo "3900";} 
							  	   else if($count == 3) {echo "4500";} ?>" 

							  	   data-appear-toggle-class="<?php if($count == 1) {echo "hide1";}
							  	    else if ($count == 2) {echo "hide2";} 
							  	    else if ($count == 3) {echo "hide3";} ?>">

		    				<p class="sub-header"><?php the_sub_field('why_product_sub_header'); ?></p>
		    				<h3><?php the_sub_field('why_product_header'); ?></h3>
		    				<p class="description"><?php the_sub_field('why_description'); ?></p>
		    			</div>
	    			</div> <!-- why-product-group -->
		    	<?php

		        $count++;
		    endwhile;

		else :

		    // no rows found

		endif;

		?>


	</div> <!-- why-product-group -->


</div> <!-- why -->


<?php get_template_part('template-parts/contact','us2'); ?>

<?php
get_footer();


?>