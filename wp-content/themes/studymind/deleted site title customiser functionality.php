if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$studymind_description = get_bloginfo( 'description', 'display' );
			if ( $studymind_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $studymind_description; /* WPCS: xss ok. */ ?></p>
			<?php endif; ?>