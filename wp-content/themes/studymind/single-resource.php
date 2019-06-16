<?php get_header(); ?>


<style type="text/css">
	
/*Use this to impelement hover styles dependent on backend selection?*/
<?php if(get_field('subject') == 'Chemistry'):?>
	body {
		--chem-colour: #1883B2 ;
	}
	.resource-tables-wrapper .resource-tables .resource-table ul li a:hover {
		/*background: linear-gradient(to right, #00f 0.15%, #29a8df 100%);*/
		background-color: var(--chem-colour);
		color: #fff;
	}
	.resource-tables .resource-table ul li a  {
		color: #52A4BA;
	}
	h3 {
		background-color: var(--chem-colour);
	}
	h1 {
		color: var(--chem-colour);
	}
	.cta-resource h2 span {
		color: #4aa7d0;
	}


	<?php elseif (get_field('subject') == 'Biology'): ?>
	body {
		--biology-colour: #7FC610;
	}
	.resource-tables-wrapper .resource-tables .resource-table ul li a:hover {
		/*background: linear-gradient(to right, #008f45 0%, #008f45 0.15%, #2ca043 31.77%, #8cc63f 100%);*/
		background-color: #7FC610;
		color: #fff;
	}
	.resource-tables .resource-table ul li a {
		color: #7FC610;
	}
	.cta-resource h2 span {
		color: #95EFAB;
	}
	h1 {
		color: #7FC610;
	}
	h3 {
		background-color: #7FC610;
	}


	<?php elseif (get_field('subject') == 'Physics'): ?>
	body {
		--physics-colour: #EB5D60;
	}
	.resource-tables-wrapper .resource-tables .resource-table ul li a:hover {
		/*background: linear-gradient(to right, #9b005d 0.15%, #ea1c24 100%);*/
		background-color: #D3768D;
		color: #fff;
	}
	.resource-tables .resource-table ul li a {
		color: #D3768D;
	}
	.cta-resource h2 span {
		color: #e62b61;
	}
	h1 {
		color: var(--physics-colour);
	}
	h3 {
		background-color: var(--physics-colour);
	}
	<?php endif; ?> 

</style>

<div class="subject-resource-intro">
	<div>
		<?php $icon;
			if(get_field('subject') == 'Chemistry'):
				$icon = get_field('study_mind_icon', 338)['url'];
				elseif (get_field('subject') == 'Biology'):
					$icon = get_field('study_mind_icon', 501)['url'];
				 elseif (get_field('subject') == 'Physics'):
				 	$icon = get_field('study_mind_icon', 502)['url'];
		 	endif;
		?>
		<img src="<?php echo $icon; ?>">
		<h1><?php the_field('subject_resource_header'); ?></h1>
	</div>
	<p><?php the_field('subject_resource_blurb'); ?></p>
</div> <!-- subject-resource-intro -->

<div class="resource-tables-wrapper">
	<?php 

	// check for rows (parent repeater)
	if( have_rows('resource_tables') ): ?>
		<div class="resource-tables">
		<?php 

		// loop through rows (parent repeater)
		while( have_rows('resource_tables') ): the_row(); ?>
			<div class="resource-table">
				<h3><?php the_sub_field('resource_table_header'); ?></h3>
				<?php 

				// check for rows (sub repeater)
				if( have_rows('resource_cell') ): ?>
					<ul>
					<?php 

					// loop through rows (sub repeater)
					while( have_rows('resource_cell') ): the_row();

						// display each item as a list - with a class of completed ( if completed )
						$image = get_template_directory_uri() . '/img/arrow.png';
						?>
							<li><p><?php the_sub_field('resource_number');?> | <?php the_sub_field('resource_name'); ?></p><a href="<?php echo get_sub_field('qp_link'); ?>" target="_blank"><?php echo the_sub_field('question_paper'); ?><img src="<?php echo $image ?>"></a><a href="<?php echo get_sub_field('marks_link'); ?>" target="_blank"><?php echo the_sub_field('mark_scheme'); ?><img src="<?php echo $image ?>"></a>


								
							</li>
						
					<?php endwhile; //resource cell ?> 
					</ul>
				<?php endif; //reource cell ?>
			</div>	<!-- resource-table singular -->

		<?php endwhile; //  resource tables plural ?>
		</div> <!-- resource tables plural -->
	<?php endif; // resource_tables ?>

</div> <!-- resource-tables plural -->


<div class="cta-resource">
	
	<h2>1-to-1 lessons tailored to <span><?php the_field('subject_resource_header');  ?></span></h2>

	<?php get_template_part('template-parts/contact','us'); ?>


</div>

<div class="subject-grid">
	<?php get_template_part('template-parts/resource','navigation'); ?>
</div> <!-- subject-grid -->




<?php get_footer(); ?>