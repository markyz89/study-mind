<?php get_header(); ?>

<!-- <style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,700');
</style> -->
<!-- <hr class="top-line"> -->
<?php
			wp_nav_menu( array(
				'theme_location' => 'subject-menu',
				'menu_id'        => 'subject-menu',
			) );
			

$findSubject = get_field('subject_banner');
if (strpos($findSubject, 'Biology')):
	?> <style type="text/css">
		#tutor-banner .banner-content .text-content button {
			color: #80B10A;
		}

		#tutor-banner .banner-content .text-content button:hover {
			background-color: #CCF998;
		}

	</style> <?php
elseif(strpos($findSubject, 'Chemistry')):
	?> <style type="text/css">
		#tutor-banner .banner-content .text-content button {
			color: #74A2BC;
		}
		#tutor-banner .banner-content .text-content button:hover {
			background-color: #B7E2F9;
		}
	</style> <?php
elseif (strpos($findSubject, 'Physics')):
	?> <style type="text/css">
		#tutor-banner .banner-content .text-content button {
			color: #BB2A1F;
		}
		#tutor-banner .banner-content .text-content button:hover {
			background-color: #F4E4E4;
		}
	</style> <?php
endif;



$bannerImage = get_field('tutor_banner_image')['sizes']['tutor-banner'];

?>

<div id="right-menu">
	<ul>
		<a href="#pink-slider">
			<li>
				<p>Why Study Mind?</p>
				<div class="circle">
					
				</div>
			</li>
		</a>
		<a href="#tutoring-details">
			<li>
				<p>1-1 Tutoring</p>
				<div class="circle">
					
				</div>
			</li>
		</a>
		<a href="#reviews">
			<li>
				<p>Our Reviews</p>
				<div class="circle">
					
				</div>
			</li>
		</a>
		
		<a href="#getting-started">
			<li>
				<p>Getting Started</p>
				<div class="circle">
					
				</div>
			</li>
		</a>
		<a href="#faqs">
			<li>
				<p>FAQ</p>
				<div class="circle">
					
				</div>
			</li>
		</a>
	</ul>
</div>

<div class="banner" id="tutor-banner" style="background-image: url('<?php echo $bannerImage; ?>');">
	<div class="banner-content">
		<div class="text-content">
			 <h2><?php the_field('tutor_sub_title'); ?></h2>
			 <h1><?php the_field('subject_banner'); ?></h1>
			 <h3><?php the_field('tutoring_price'); ?></h3>
			 <p><?php the_field('tutor_description'); ?></p>

			 <a href="<?php the_field('tutor_button_link'); ?>">
			 	<button><?php the_field('tutor_button_text'); ?><i class="fas fa-arrow-right"></i></button>	
			 </a>
			 

			 <p class="exam-details"><?php the_field('exam_details'); ?></p>
 		</div> <!-- text-content -->

	 <!-- loop out the images -->
	 <?php
	 $images = get_field('exam_board_images');

	 if( $images ): ?>
	     
	         <?php foreach( $images as $image ): ?>

	         	<img src="<?php echo $image['url']; ?>">
	            
	         <?php endforeach; ?>
	   
	 <?php endif; ?>
	</div> <!-- banner-content -->
</div>

<?php $MobileBannerImage = get_field('tutor_mobile_image')['url']; ?>

<div class="tutor-banner-mobile" style="background-image: url('<?php echo $MobileBannerImage; ?>');"> <!-- tutor-banner-mobile -->
	<p>Select Course</p>
	<button><?php the_title(); ?></button>
	<h1><?php the_field('tutor_sub_title'); ?></h1>
</div> <!-- tutor-banner-mobile -->

<div class="mobile-image-below-banner">
	<img src="<?php echo get_field('mobile_image_below_banner')['url']; ?>">
</div>


<!-- <div class="booking-form" style="height: 30vh">
	<h1>Booking form here</h1>	
</div>

<div class="slider" style="height: 30vh">
	<h1>Slider here</h1>	
</div> -->

<div class="mobile-contact-options">
	<?php get_template_part('template-parts/whatsapp','button'); ?>

	<?php get_template_part('template-parts/contact','us2'); ?>
</div> <!-- mobile-contact-options -->


<?php get_template_part('template-parts/booking','form'); ?>


<div id= "pink-slider" class="pink-slider">
	<h2><?php the_field('slider_header');?></h2>
	<div class="selection-icons">	

		<div class="tab tab-1 selected">
			<img class="white hide" src="<?php echo get_template_directory_uri(). '/img/illustrative-diagrams@2x.png' ?>">
			<img class="pink show" src="<?php echo get_template_directory_uri(). '/img/illustrative-diagrams-pink@2x.png' ?>">
			<p>Illustrative Diagrams</p>
		</div>

		<div class="tab tab-2">
			<img class="white show" src="<?php echo get_template_directory_uri(). '/img/step-by-step@2x.png' ?>">
			<img class="pink hide" src="<?php echo get_template_directory_uri(). '/img/step-by-step-pink@2x.png' ?>">
			<p>Step-by-Step Explanations</p>
		</div>

		<div class="tab tab-3">
			<img class="white show" src="<?php echo get_template_directory_uri(). '/img/examiner-tips@2x.png' ?>">
			<img class="pink hide" src="<?php echo get_template_directory_uri(). '/img/examiner-tips-pink@2x.png' ?>">
			<p>Examiner<br>Tips</p>
		</div>

		<div class="tab tab-4">
			<img class="white show" src="<?php echo get_template_directory_uri(). '/img/past-papers@2x.png' ?>">
			<img class="pink hide" src="<?php echo get_template_directory_uri(). '/img/past-papers-pink@2x.png' ?>">
			<p>Past<br>Papers</p>
		</div>

		<div class="tab tab-5">
			<img class="white show" src="<?php echo get_template_directory_uri(). '/img/specification-based@2x.png' ?>">
			<img class="pink hide" src="<?php echo get_template_directory_uri(). '/img/specification-based-pink@2x.png' ?>">
			<p>Specification Based</p>
		</div>
		
	</div> <!-- selection-icons -->
	<div class="monitor-display">
		<div class="slide">
			<?php $images = get_field('slider_images');
				$image1 = $images[0]['sizes']['slider-image'];
				$count=1;
				foreach( $images as $image ):
					?>
						<div class="photo<?php echo $count ?>" data-pic-<?php echo $count ?>='<?php echo $image['sizes']['slider-image']; ?>'></div>
					<?php
					$count++;
				endforeach;

			?>
			<img class="the-slide" src="<?php echo $image1; ?>">
			
		</div>
	</div>

	<button><?php the_field('slider_button_text');?><i class="fas fa-arrow-right"></i></button>


</div> <!-- pink slider -->





<div id="tutoring-details" class="tutoring-details">
	<div class="intro-text">
		<h2><?php the_field('tutoring_header', 166); ?></h2>
		<p><?php the_field('tutoring_intro', 166); ?></p>		
	</div>

	<?php

	// group including microinteraction that should be three separate images

	
	// vars
	$tutors = get_field('hand-picked_tutors', 166);	

	if( $tutors ): ?>
		<div class="tutor-profile">

			<div class="tutor-carousel"
				<?php
				$images = $tutors['tutor_images'];
				if( $images ): 
					$count = 1;
			        	foreach( $images as $image ):
			        	?>
			            data-tutor-<?php echo $count ?>="<?php echo $image['sizes']['tutor-profile']; ?>"
			            data-fancy-<?php echo $count ?>="<?php echo $image['url']; ?>"
			        <?php
			        	$count++; 
			    		endforeach; ?>
				<?php endif; ?>
			>
				


				<?php
					$images = $tutors['tutor_images'];

						if( $images ):
							$count = 1;
					        	foreach( $images as $image ):
						        	?>
						        	<a href="<?php echo $image['url']; ?>" data-fancybox="gallery">
						        		<img id="tutor-<?php echo $count ?>" class="tutor-profile"   src="<?php echo $image['sizes']['tutor-profile']; ?>">
						        	</a>
							            
							        <?php
					        	$count++;
					        	if ($count == 4) {
					        		break;
					        	} 
					    		endforeach; ?>
						<?php endif;

				?>
			</div> <!-- tutor-carousel -->



			
			
			
			<div id="tutor-text-1" class="text-content slide hidden"  data-appear-offset="2550" data-appear-toggle-class="hidden">
				<h3> <?php echo $tutors['tutor_header']; ?></h3>
				<p><?php echo $tutors['tutor_description']; ?></p>
			</div><!-- text-content -->
			<div class="line-path right-left"><div id="line-overlay-1" class="line-overlay reveal-right hidden" data-appear-offset="2850" data-appear-toggle-class="hidden"></div></div>
		</div> <!-- tutor-profile -->

	<?php endif;

	// Mobile version

	$tutors = get_field('hand-picked_tutors', 166);

	if( $tutors ): ?>
		<div class="mobile-tutor-profile">
			<h3> <?php echo $tutors['tutor_header']; ?></h3>
			<img src="<?php echo $tutors['tutor_image']['url']; ?>" alt="<?php echo $tutors['tutor_image']['alt']; ?>" />
			<p><?php echo $tutors['tutor_description']; ?></p>
			
			<div class="mobile-divider"></div>
		</div> <!-- tutor-profile -->

	<?php endif;

	// Desktop version

	// check if the repeater field has rows of data
	if( have_rows('tutoring_benefits', 166) ):

		?>
		<div class="tutor-profiles">
		 	<?php 
		 	$count =1; // this is to output the whatsapp messenger icon on 3rd
		 	

		 	// loop through the rows of data
		    while ( have_rows('tutoring_benefits', 166) ) : the_row();

		        // display a sub field value
		    	$tutorImage = get_sub_field('tutoring_image')['url'];
		        ?>
		        <div class="tutor-profile">
		        	<img src="<?php echo $tutorImage; ?>">
		        	<div id="tutor-text-<?php echo $count+1 ?>" class="text-content slide hidden"  data-appear-offset="<?php if($count == 1) { echo "2850";} elseif($count==2) {echo "3550";} elseif($count==3) {echo "3950";}  ?>" data-appear-toggle-class="hidden">
		        		<?php if($count == 3) {
		        			?><a href="https://wa.me/447898211341?text=Hi%20there%20I'm%20interested%20in%201%20to%201%20tutoring%20for%20UKCAT" target="_blank"><img src="<?php echo get_template_directory_uri() . '/img/whatsapp.png'?>" alt="call Study Mind" class='whatsapp'></a> <?php
		        		} ?>
		        		<h3><?php the_sub_field('tutoring_header'); ?></h3>
		        		<p><?php the_sub_field('tutoring_description'); ?></p>	
		        	</div> <!-- text-content -->
		        	<?php
				        
				        if($count == 3) { 
				        	
				        	} else if ($count % 2 == 0) { 
				        		 ?>
				        		<div class="line-path right-left" ><div id="line-overlay-2" class="line-overlay reveal-right hidden" data-appear-offset="3950" data-appear-toggle-class="hidden"></div>
				        		</div> <!-- line-path --> <?php
				        	} else {  ?>
				        		<div class="line-path left-right reveal-left "><div id="line-overlay-3" class="line-overlay reveal-left hidden-left" data-appear-offset="3550" data-appear-toggle-class="hidden-left"></div>
				        		</div> <!-- line-path --> <?php
			        		 } 
				        ?>

				        

		        </div> <!-- tutor-profile -->

		        
    	
		        <?php

		        $count++;
		    endwhile;
		    	?>
    	</div> <!-- tutor-profiles -->
    	
    	<?php

	else :

	    // no rows found

	endif;

	// Mobile version

		// check if the repeater field has rows of data
		if( have_rows('tutoring_benefits', 166) ):

			?>
			<div class="mobile-tutor-profiles">
			 	<?php 
			 	$count =1; // this is to output the whatsapp messenger icon on 3rd
			 	

			 	// loop through the rows of data
			    while ( have_rows('tutoring_benefits', 166) ) : the_row();

			        // display a sub field value
			    	$tutorImage = get_sub_field('tutoring_image')['url'];
			        ?>
			        <div class="mobile-tutor-profile mobile-tutor-profile-<?php echo $count ?>">
			        	<h3><?php the_sub_field('tutoring_header'); ?>
			        		<?php if($count == 3) {
			        			?><img src="<?php echo get_template_directory_uri() . '/img/whatsapp.png'?>" alt="call Study Mind" class='whatsapp'> <?php
			        		} ?></h3>
			        		<img src="<?php echo $tutorImage; ?>">
			        		<p><?php the_sub_field('tutoring_description'); ?></p>	
			        </div> <!-- mobile-tutor-profile -->
			        <?php
			        if ($count < 3) : ?>
			        	<div class="mobile-divider"></div>
			        <?php
			    	endif;

			        $count++;
			    endwhile;
			    	?>
	    	</div> <!-- mobile-tutor-profiles -->
	    	
	    	<?php

		else :

		    // no rows found

		endif;



	?>

</div> <!-- tutoring details -->


<?php get_template_part('template-parts/whatsapp','button'); ?>


<div class="comparison">
	<div class="features-compared">
		<h3><?php the_field('comparison_header', 166); ?></h3>

		<?php

		// check if the repeater field has rows of data
		if( have_rows('features_compared', 166) ):
			?>
			<ul>
			<?php
		 	// loop through the rows of data
		    while ( have_rows('features_compared', 166) ) : the_row();
		    	?>
		    	<li>
		    		<?php the_sub_field('feature_name'); ?>
		    	</li>
		    	<?php

		    endwhile;
	    	?>
	    	</ul>
	    	<?php
		else :

		    // no rows found

		endif;

		?>

	</div> <!-- features-compared -->
	<div class="study-mind-features">

		<div class="pentagon">
			<img src="<?php echo get_field('study_mind_logo', 166)['url']; ?>">
			<h3><?php the_field('study_mind_header', 166); ?></h3>
		</div> <!-- pentagon -->

		<?php

		// check if the repeater field has rows of data
		if( have_rows('study_mind_features', 166) ):
			?>
			<ul>
			<?php
		 	// loop through the rows of data
		    while ( have_rows('study_mind_features', 166) ) : the_row();
		    	?>
		    	<li>
		    		<?php the_sub_field('studymind_feature'); ?>
		    	</li>
		    	<?php

		    endwhile;
	    	?>
	    	</ul>
	    	<?php
		else :

		    // no rows found

		endif;

		?>
		<div class="bottom-pentagon"></div>

	</div> <!-- study-mind-features -->

	<div class="average-tutor-features">
		
		<div class="flat-pentagon">
			<h3><?php the_field('average_header', 166); ?></h3>
		</div> <!-- flat-pentagon -->

		<?php

		// check if the repeater field has rows of data
		if( have_rows('average_tutor_features', 166) ):
			?>
			<ul>
			<?php
		 	// loop through the rows of data
		    while ( have_rows('average_tutor_features', 166) ) : the_row();
		    	?>
		    	<li>
		    		<?php the_sub_field('average_feature'); ?>
		    	</li>
		    	<?php

		    endwhile;
	    	?>
	    	</ul>
	    	<?php
		else :

		    // no rows found

		endif;

		?>

	</div> <!-- average-tutor-features -->
</div> <!-- comparison -->


<?php get_template_part('template-parts/contact','us'); ?>


<div id="reviews" class="reviews">
	<h2><?php the_field('review_header'); ?></h2>
	<p class="review-blurb"><?php the_field('review_blurb', 166); ?></p>

	<?php

	if( !have_rows('review_boxes') ) {
		$copy = 166;
	}

	// check if the repeater field has rows of data
	if( have_rows('review_boxes', $copy) ):
		
		?> 
		<div class="review-boxes">
		 	<?php
		 	// loop through the rows of data
		 	$count= 1;
		    while ( have_rows('review_boxes', $copy) ) : the_row();
		        // display a sub field value
		        $class = '';
		    	if ($count == 2) {
		    		$class = 'featured-review';
		    	} elseif ($count == 3) {
		    		$class = 'third-review';
		    	} elseif ($count == 1) {
		    		$class = 'first-review';
		    	} else {
		    		$class = 'review-hidden';
		    	}


		        ?> 

		        <div class="review-box <?php echo $class ?>" id="review-<?php echo $count ?>">
	        		<img class="desktop-reviewee" src="<?php echo get_sub_field('reviewee_picture')['url']; ?>">
	        		<?php if($count == 2) { ?>
	        			<img class="mobile-reviewee"src="<?php echo get_sub_field('mobile_reviewee_picture')['url']; ?>">
	        		<?php } ?>
		        	<p class="name"><?php the_sub_field('reviewee_name'); ?></p>
		        	<?php

		        	$noOfStars = get_sub_field('star_rating');
		        	for($i = 0; $i<$noOfStars; $i++) {
		        		?><i class="fas fa-star"></i><?php
		        	}
		        	?>
		        	<div class="review-area">
		        		<p><?php the_sub_field('review'); ?></p>
	        		</div>


		        </div> <!-- review-box -->
		        <?php
		        $count ++;
		    endwhile;

		else :

		    // no rows found

		endif;

		?>
			
	</div> <!-- review-boxes -->

	


		
	<div class="social-proofs">

	<?php 

	$images = get_field('social_proofs', 166);

	if( $images ):
		//print_r($images);
	        foreach( $images as $image ): ?>
	            	<img src="<?php echo $image['url'] ?>">
	        <?php 
	    	endforeach; ?>
	<?php endif; ?>

	</div> <!-- social-proofs -->


</div> <!-- reviews -->

<div class="tutor-content-separator">
	<div class="desktop-users">
	<h2><?php the_field('study_mind_trusted_by', 166) ?></h2>
	<img src="<?php echo get_field('tutor_icon', 166)['url']; ?>">
	<p><?php the_field('list_of_users', 166); ?></p>
	</div> <!-- desktop-users -->

	<div class="mobile-users">
		<h2><?php the_field('mobile_trusted_by', 166) ?></h2>

		<div class="trusting-users">
			<?php

			// check if the repeater field has rows of data
			if( have_rows('mobile_users', 166) ):

			 	// loop through the rows of data
			    while ( have_rows('mobile_users', 166) ) : the_row();
			    	?> 
			    		<div class="user-group">
			    			<?php
			    			$image = get_sub_field('user_image');

			    			if ($image): ?>

			    				<img src="<?php echo get_sub_field('user_image')['url']; ?>">
		    				<?php
		    				endif;
		    				?>
			    			<p><?php the_sub_field('user'); ?></p>
			    		</div>
			    	<?php
			        // display a sub field value
			        the_sub_field('sub_field_name');

			    endwhile;

			else :

			    // no rows found

			endif;

			?>
		</div> <!-- trusting-users -->
	</div>
	

</div> <!-- tutor-content-separator -->

<div id="getting-started" class="getting-started">
	<h2><?php the_field('getting_started_header', 166); ?></h2>
	<p class="blurb"><?php the_field('getting_started_blurb', 166) ?></p>
	<div class="steps">
		<div class="vertical-line"></div>
		<?php

		// check if the repeater field has rows of data
		if( have_rows('getting_started_steps', 166) ):
			$count = 1;
		 	// loop through the rows of data
		    while ( have_rows('getting_started_steps', 166) ) : the_row();

		      ?>
		      	<div class="step step-<?php echo $count ?> appear hidden" data-appear-offset="<?php if($count == 1) { echo '7250';} elseif ($count == 2) {echo '7450';} elseif ($count == 3) {echo '7600';} ?>" data-appear-toggle-class="hidden">
		      		<div class="col-1">
		      			<p><?php the_sub_field('the_step'); ?></p>	
		      		</div>
		      		<div class="col-2 row-<?php echo $count ?>">
		      			<!-- <img src="<?php //echo get_sub_field('step_image')['url']; ?>"> -->
		      			<div class="circle">
		      				<?php if($count == 2): ?>
		      					<div class="middle-circle">
		      						<div class="inner-circle">
		      							<p><?php echo $count; ?></p>
		      						</div> <!-- inner-circle -->
		      					</div> <!-- middle-circle -->
		      					<?php else: ?>
		      						<p><?php echo $count; ?></p>
	      						<?php endif; ?>
		      			</div> <!-- circle -->
		      		</div>
		      		<div class="col-3">
		      			<div class="step-explanation">
		      				<span><?php the_sub_field('step_explanation_header'); ?></span>
		      				<p><?php the_sub_field('step_explanation'); ?></p>
		      			</div> <!-- step-explanation -->
		      		</div>
		      		
		      		
		      	</div> <!-- step -->

	      		
		      <?php
		      $count++;
		    endwhile;

		else :

		    // no rows found

		endif;

		?>
	</div> <!-- steps -->

	<div class="mobile-steps">
		<?php

		// check if the repeater field has rows of data
		if( have_rows('mobile_steps', 166) ):

		 	// loop through the rows of data
		    while ( have_rows('mobile_steps', 166) ) : the_row();

		      ?>
		      	<div class="mobile-step">
		      		<div class="head">
		      			<img src="<?php echo get_sub_field('step_image')['url']; ?>">
		      			<p><?php the_sub_field('the_step'); ?></p>
		      			
		      		</div> <!-- head -->
		      		<div class="body">
		      			
	      				<p><?php the_sub_field('step_explanation'); ?></p>
		      			
		      		</div>
		      		
		      		
		      	</div> <!-- step -->

		     		
		      <?php

		    endwhile;

		else :

		    // no rows found

		endif;
		?>
	</div>


	<div class="graph-background" style="background-image: url(<?php echo get_field('getting_started_image', 166)['url']; ?>);">
		<img id="line-graph" src="<?php echo get_field('getting_started_graph_line', 166)['url']; ?>" >
		<div id="graph-overlay" class="hidden grow" data-appear-offset="7700" data-appear-toggle-class="hidden"></div>
	</div>

	<p class="getting-started-proof"><?php the_field('getting_started_proof', 166); ?></p>

</div> <!-- getting-started -->

<?php get_template_part('template-parts/whatsapp','button'); ?>

<div id="faqs" class="faqs">
	<h2><?php the_field('faq_header'); ?></h2>
	<p class="faq-blurb"><?php the_field('faq_blurb'); ?></p>

	<?php

	// check if the repeater field has rows of data
	if( have_rows('faqs') ):
		$faqs = get_field('faqs');
		// print_r($faqs);
		$faqsNo = count($faqs);

		$count = 1;
	 	// loop through the rows of data
	    while ( have_rows('faqs') ) : the_row();
    		?>
    		<div class="faq">
    			<div id="question-<?php echo $count ?>" class="question">
    				<p><?php the_sub_field('faq_question'); ?></p>
    				<i class="fas fa-chevron-down hide"></i>
    				<i class="fas fa-chevron-up show"></i>
    			</div> <!-- question -->
	    		
	    		<p id="answer-<?php echo $count ?>" class="answer hide"><?php the_sub_field('faq_answer'); ?></p>
	    		<?php if ($count < $faqsNo) {
	    			?> <hr> <?php	
    			}
	    			?>
    		</div>

    		<?php
	        // display a sub field value
	        the_sub_field('sub_field_name');

        $count++;
	    endwhile;

	else :

	    // no rows found

	endif;

	?>


</div> <!-- faqs -->

<div class="cta-2 cta-form">
	<div class="desktop-form-2 desktop-form">
		<?php gravity_form( 10, $display_title = false, $display_description = false, $display_inactive = false, $field_values = null, $ajax = true, $tabindex, $echo = true ); ?>
	</div>
	

	<div class="mobile-form">
		<?php gravity_form( 11, $display_title = false, $display_description = false, $display_inactive = false, $field_values = null, $ajax = true, $tabindex, $echo = true ); ?>
	</div>
</div>




<?php
get_footer(); ?>
			
		<!-- if($count == 1) { echo 'hide'; } else { echo 'show';}?> -->