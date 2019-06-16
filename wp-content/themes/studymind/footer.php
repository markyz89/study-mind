<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Study_Mind
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="desktop-footer">
			<div class="upper-footer">
				<div class="site-info">
					<div class="site-branding">
						<a href="<?php echo site_url(); ?>"><img src="<?php echo site_url() .'/wp-content/'; ?>uploads/2019/04/Study-Mind-Logo-features-compared.png"></a>
						<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">Study <span>Mind</span></a></p>
					</div><!-- .site-branding -->
				</div><!-- .site-info -->

				<hr>

				<div class="footer-menus">
					<div class="footer-menu-1 footer-menu">
						<?php dynamic_sidebar('footer_menu_1') ?>
					</div>
					<div class="footer-menu-2 footer-menu">
						<?php dynamic_sidebar('footer_menu_2') ?>
					</div>
					<div class="footer-menu-3 footer-menu">
						<?php dynamic_sidebar('footer_menu_3') ?>
					</div>
					<div class="footer-menu-4 footer-menu">
						<?php dynamic_sidebar('footer_menu_4') ?>
					</div>
					<div class="footer-menu-5 footer-menu">
						<?php dynamic_sidebar('footer_menu_5') ?>
					</div>


				</div> <!-- footer-menus -->
			</div> <!-- upper-footer -->

			<div class="lower-footer">
				 <?php dynamic_sidebar('lower_footer') ?>

				 <p class="copyright">Copyright © <?php echo date('Y');  ?> Study Mind. All rights reserved.   /   Privacy   /   Terms of Use   /   Cookies</p>
			</div> <!-- lower-footer -->
		</div> <!-- desktop-footer -->

		<div class="mobile-footer">
			<div class="upper-footer">
				<div class="site-info">
					<div class="site-branding">
						<a href="<?php echo site_url(); ?>"><img src="<?php echo get_site_url().'/wp-content/uploads/2019/04/Study-Mind-Logo-features-compared.png'?>"></a>
						<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">Study <span>Mind</span></a></p>
					</div><!-- .site-branding -->
				</div><!-- .site-info -->
			</div> <!-- upper-footer -->

			<hr>

			<div class="middle-footer">
				<div class="footer-menus">
					<div class="footer-menu-1 footer-menu">
						<?php dynamic_sidebar('footer_menu_1') ?>
					</div>
					<div class="footer-menu-2 footer-menu">
						<?php dynamic_sidebar('footer_menu_2') ?>
					</div>
					<div class="footer-menu-3 footer-menu">
						<?php dynamic_sidebar('footer_menu_3') ?>
					</div>
				</div> <!-- footer-menus -->
			</div> <!-- middle-footer -->

			<div class="lower-footer">
				<?php dynamic_sidebar('mobile_lower_footer') ?>
				<p>© <?php echo date('Y');  ?> Study Mind. All rights reserved.</p>
				<?php
				the_custom_logo();
				?>
			</div> <!-- lower-footer -->



		</div> <!-- mobile-footer -->
		


	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
