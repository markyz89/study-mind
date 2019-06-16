<?php
/**
 * Study Mind functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Study_Mind
 */

if ( ! function_exists( 'studymind_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function studymind_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Study Mind, use a find and replace
		 * to change 'studymind' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'studymind', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in two locations.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'studymind' ),
			'menu-2' => esc_html__( 'Secondary', 'studymind' ),
			'subject-menu' => esc_html__( 'Subjects', 'studymind' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'studymind_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );

		add_image_size('banner-review', 210, 90, false );
		add_image_size('banner-image', 825, 652, false );
		add_image_size('course-image', 250, 365, false );
		add_image_size('thumbs-up-review', 550, 110, false);
		add_image_size('portrait', 253, 253, false);
		add_image_size('products-image', 958, 796, false);
		add_image_size('tutor-banner', 1920, 796, false);
		add_image_size('bottom-swoosh', 277, 68, false);
		add_image_size('course-logo', 85, 85, false);
		add_image_size('banner-icon', 55, 55, false);
		add_image_size('slider-image', 890, 501, false);
		add_image_size('tutor-profile', 308, 524, false);
		add_image_size('line-graph', 308, 204, false);

	}
endif;
add_action( 'after_setup_theme', 'studymind_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function studymind_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'studymind_content_width', 640 );
}
add_action( 'after_setup_theme', 'studymind_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function studymind_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'studymind' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'studymind' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'studymind_widgets_init' );

/**
 * Enqueue scripts and styles.
 */

if (!is_admin()) add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);
function my_jquery_enqueue() {
   wp_deregister_script('jquery');
   wp_register_script('jquery', "http" . ($_SERVER['SERVER_PORT'] == 443 ? "s" : "") . "://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js", true, null);
   wp_enqueue_script('jquery');
}

function studymind_scripts() {
	// styles from sass - make sure mirotime() is removed at end of development
	wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css?family=Montserrat:300,400|Poppins:300,400,600', false ); 
	
	wp_enqueue_style( 'studymind-styles', get_template_directory_uri() . '/css/style.css', array(), microtime(), false );
	// wp_enqueue_style('fonts', get_template_directory_uri() . '/fonts/fonts.css',  NULL, '1.0.0' );
	wp_enqueue_style('font-awesome', 'https://use.fontawesome.com/releases/v5.8.1/css/all.css');

	wp_enqueue_style( 'studymind-style', get_stylesheet_uri() );
	wp_enqueue_style( 'fancybox-css', 'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.css' );	

	if(is_page('resources') || 'resource' == get_post_type()):
	wp_enqueue_script( 'studymind-resources', get_template_directory_uri() . '/js/resources.js', array(), '1.01', true );
	endif;

	if('subject' == get_post_type()):
	wp_enqueue_script( 'studymind-tutor', get_template_directory_uri() . '/js/tutor.js', array(), '1.01', true );
	endif;

	wp_enqueue_script( 'studymind-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'studymind-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	wp_enqueue_script( 'scroll-appear', get_template_directory_uri() . '/js/scroll-appear.min.js', array(), '1.01', true );

	wp_enqueue_script( 'microinteractions', get_template_directory_uri() . '/js/microinteractions.js', array(), '1.01', true );

	wp_enqueue_script( 'fancybox', "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js" , array(), '1.01', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'studymind_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}



//disable Gutenberg

add_filter( 'use_block_editor_for_post', '__return_false' );

// Custom Post Types
function custom_post_Stype() {
	// Register Subject Custom Post Type
	$labels = array(
		'name'                  => _x( 'Subject', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Subject', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Subjects', 'text_domain' ),
		'name_admin_bar'        => __( 'Subjects', 'text_domain' ),
		'archives'              => __( 'Subject Archives', 'text_domain' ),
		'attributes'            => __( 'Subject Attributes', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Subject:', 'text_domain' ),
		'all_items'             => __( 'All Subjects', 'text_domain' ),
		'add_new_item'          => __( 'Add New Subject', 'text_domain' ),
		'add_new'               => __( 'Add New', 'text_domain' ),
		'new_item'              => __( 'New Subject', 'text_domain' ),
		'edit_item'             => __( 'Edit Subject', 'text_domain' ),
		'update_item'           => __( 'Update Subject', 'text_domain' ),
		'view_item'             => __( 'View Subject', 'text_domain' ),
		'view_items'            => __( 'View Subject', 'text_domain' ),
		'search_items'          => __( 'Search Subject', 'text_domain' ),
		'not_found'             => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Featured Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into Subject', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Subject', 'text_domain' ),
		'items_list'            => __( 'Subjects list', 'text_domain' ),
		'items_list_navigation' => __( 'Subjects list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter Subjects list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Subject', 'text_domain' ),
		'description'           => __( 'Subjects', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
	);
	register_post_type( 'subject', $args );

	$labels = array(
		'name'                  => _x( 'Resource', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Resource', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Resources', 'text_domain' ),
		'name_admin_bar'        => __( 'Resources', 'text_domain' ),
		'archives'              => __( 'Resource Archives', 'text_domain' ),
		'attributes'            => __( 'Resource Attributes', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Resource:', 'text_domain' ),
		'all_items'             => __( 'All Resources', 'text_domain' ),
		'add_new_item'          => __( 'Add New Resource', 'text_domain' ),
		'add_new'               => __( 'Add New', 'text_domain' ),
		'new_item'              => __( 'New Resource', 'text_domain' ),
		'edit_item'             => __( 'Edit Resource', 'text_domain' ),
		'update_item'           => __( 'Update Resource', 'text_domain' ),
		'view_item'             => __( 'View Resource', 'text_domain' ),
		'view_items'            => __( 'View Resource', 'text_domain' ),
		'search_items'          => __( 'Search Resource', 'text_domain' ),
		'not_found'             => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Featured Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into Resource', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Resource', 'text_domain' ),
		'items_list'            => __( 'Resources list', 'text_domain' ),
		'items_list_navigation' => __( 'Resources list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter Resources list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Resource', 'text_domain' ),
		'description'           => __( 'Resources', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
	);
	register_post_type( 'resource', $args );

}
add_action( 'init', 'custom_post_Stype', 0 );

// Register Sidebars
function custom_sidebars() {

	$args = array(
		'id'            => 'footer_menu_1',
		'class'         => 'footer_menu_1',
		'name'          => __( 'Footer Menu 1', 'text_domain' ),
		'description'   => __( 'The first menu in the footer', 'text_domain' ),
				// below copied direct from WP codex
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		// 'before_title'  => '<h2 class="widgettitle">',
		// 'after_title'   => '</h2>'
	);
	register_sidebar( $args );

	$args = array(
		'id'            => 'footer_menu_2',
		'class'         => 'footer_menu_2',
		'name'          => __( 'Footer Menu 2', 'text_domain' ),
		'description'   => __( 'The second menu in the footer', 'text_domain' ),
				// below copied direct from WP codex
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => '</h2>'
	);
	register_sidebar( $args );

	$args = array(
		'id'            => 'footer_menu_3',
		'class'         => 'footer_menu_3',
		'name'          => __( 'Footer Menu 3', 'text_domain' ),
		'description'   => __( 'The third menu in the footer', 'text_domain' ),
				// below copied direct from WP codex
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => '</h2>'
	);
	register_sidebar( $args );

	$args = array(
		'id'            => 'footer_menu_4',
		'class'         => 'footer_menu_4',
		'name'          => __( 'Footer Menu 4', 'text_domain' ),
		'description'   => __( 'The fourth menu in the footer', 'text_domain' ),
				// below copied direct from WP codex
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => '</h2>'
	);
	register_sidebar( $args );

	$args = array(
		'id'            => 'footer_menu_5',
		'class'         => 'footer_menu_5',
		'name'          => __( 'Footer Menu 5', 'text_domain' ),
		'description'   => __( 'The fifth menu in the footer', 'text_domain' ),
				// below copied direct from WP codex
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => '</h2>'
	);
	register_sidebar( $args );

	$args = array(
		'id'            => 'lower_footer',
		'class'         => 'lower_footer',
		'name'          => __( 'Lower Footer', 'text_domain' ),
		'description'   => __( 'The bottom part of the footer', 'text_domain' ),
				// below copied direct from WP codex
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => '</h2>'
	);
	register_sidebar( $args );

	$args = array(
		'id'            => 'mobile_lower_footer',
		'class'         => 'mobile_lower_footer',
		'name'          => __( 'Mobile Lower Footer', 'text_domain' ),
		'description'   => __( 'The bottom part of the footer (Mobile)', 'text_domain' ),
				// below copied direct from WP codex
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => '</h2>'
	);
	register_sidebar( $args );

}
add_action( 'widgets_init', 'custom_sidebars' );

/*
 * Function for post duplication. Dups appear as drafts. User is redirected to the edit screen
 */
function rd_duplicate_post_as_draft(){
	global $wpdb;
	if (! ( isset( $_GET['post']) || isset( $_POST['post'])  || ( isset($_REQUEST['action']) && 'rd_duplicate_post_as_draft' == $_REQUEST['action'] ) ) ) {
		wp_die('No post to duplicate has been supplied!');
	}
 
	/*
	 * Nonce verification
	 */
	if ( !isset( $_GET['duplicate_nonce'] ) || !wp_verify_nonce( $_GET['duplicate_nonce'], basename( __FILE__ ) ) )
		return;
 
	/*
	 * get the original post id
	 */
	$post_id = (isset($_GET['post']) ? absint( $_GET['post'] ) : absint( $_POST['post'] ) );
	/*
	 * and all the original post data then
	 */
	$post = get_post( $post_id );
 
	/*
	 * if you don't want current user to be the new post author,
	 * then change next couple of lines to this: $new_post_author = $post->post_author;
	 */
	$current_user = wp_get_current_user();
	$new_post_author = $current_user->ID;
 
	/*
	 * if post data exists, create the post duplicate
	 */
	if (isset( $post ) && $post != null) {
 
		/*
		 * new post data array
		 */
		$args = array(
			'comment_status' => $post->comment_status,
			'ping_status'    => $post->ping_status,
			'post_author'    => $new_post_author,
			'post_content'   => $post->post_content,
			'post_excerpt'   => $post->post_excerpt,
			'post_name'      => $post->post_name,
			'post_parent'    => $post->post_parent,
			'post_password'  => $post->post_password,
			'post_status'    => 'draft',
			'post_title'     => $post->post_title,
			'post_type'      => $post->post_type,
			'to_ping'        => $post->to_ping,
			'menu_order'     => $post->menu_order
		);
 
		/*
		 * insert the post by wp_insert_post() function
		 */
		$new_post_id = wp_insert_post( $args );
 
		/*
		 * get all current post terms ad set them to the new post draft
		 */
		$taxonomies = get_object_taxonomies($post->post_type); // returns array of taxonomy names for post type, ex array("category", "post_tag");
		foreach ($taxonomies as $taxonomy) {
			$post_terms = wp_get_object_terms($post_id, $taxonomy, array('fields' => 'slugs'));
			wp_set_object_terms($new_post_id, $post_terms, $taxonomy, false);
		}
 
		/*
		 * duplicate all post meta just in two SQL queries
		 */
		$post_meta_infos = $wpdb->get_results("SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=$post_id");
		if (count($post_meta_infos)!=0) {
			$sql_query = "INSERT INTO $wpdb->postmeta (post_id, meta_key, meta_value) ";
			foreach ($post_meta_infos as $meta_info) {
				$meta_key = $meta_info->meta_key;
				if( $meta_key == '_wp_old_slug' ) continue;
				$meta_value = addslashes($meta_info->meta_value);
				$sql_query_sel[]= "SELECT $new_post_id, '$meta_key', '$meta_value'";
			}
			$sql_query.= implode(" UNION ALL ", $sql_query_sel);
			$wpdb->query($sql_query);
		}
 
 
		/*
		 * finally, redirect to the edit post screen for the new draft
		 */
		wp_redirect( admin_url( 'post.php?action=edit&post=' . $new_post_id ) );
		exit;
	} else {
		wp_die('Post creation failed, could not find original post: ' . $post_id);
	}
}
add_action( 'admin_action_rd_duplicate_post_as_draft', 'rd_duplicate_post_as_draft' );
 
/*
 * Add the duplicate link to action list for post_row_actions
 */
function rd_duplicate_post_link( $actions, $post ) {
	if (current_user_can('edit_posts')) {
		$actions['duplicate'] = '<a href="' . wp_nonce_url('admin.php?action=rd_duplicate_post_as_draft&post=' . $post->ID, basename(__FILE__), 'duplicate_nonce' ) . '" title="Duplicate this item" rel="permalink">Duplicate</a>';
	}
	return $actions;
}
 
add_filter( 'post_row_actions', 'rd_duplicate_post_link', 10, 2 );
add_filter('page_row_actions', 'rd_duplicate_post_link', 10, 2);
add_filter('subject_row_actions', 'rd_duplicate_post_link', 10, 2);
add_filter('resource_row_actions', 'rd_duplicate_post_link', 10, 2);


// Gravity forms snippet

add_filter( 'gform_pre_render_1', 'populate_html' );
function populate_html( $form ) {
    //this is a 2-page form with the data from page one being displayed in an html field on page 2
    $current_page = GFFormDisplay::get_current_page( $form['id'] );
    $html_content;

    // setting dynamic text content for step 2
    if ( $current_page == 2 ) {
        foreach ( $form['fields'] as &$field ) {
            //gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id == 4) {
               $field_data = rgpost('input_' . $field->id );

                   $html_content .= "<img src='https://studymind.co.uk/wp-content/uploads/2019/04/Mohil.png' alt='mohil founder of study mind'><p class='nex-text'> Nice to meet you ". $field_data . "! Could we have your phone number for a free consultation?</p>";

            }
        }
        //loop back through form fields to get html field (id 6 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            //get html field
            if ( $field->id == 8 ) {
                //set the field content to the html
                $field->content = $html_content;
            }
        }
    }
    // setting dynamic text content for step 3
    if ( $current_page == 3 ) {
        foreach ( $form['fields'] as &$field ) {
            //gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id == 4) {
               $field_data = rgpost('input_' . $field->id );

                   $html_content .= "<p class='nex-text'> Which qualifications would you like help with ". $field_data."? </p>";

            }
        }
        //loop back through form fields to get html field (id 6 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            //get html field
            if ( $field->id == 13 ) {
                //set the field content to the html
                $field->content = $html_content;
            }
        }
    }

    // setting dynamic text content for step 4 GCSE
    if ( $current_page == 4 ) {
        foreach ( $form['fields'] as &$field ) {
            //gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id == 4) {
               $field_data = rgpost('input_' . $field->id );

                   $html_content = "<p class='nex-text'> Which GCSE subjects would you like help with ". $field_data."? </p>";

            }
        }
        //loop back through form fields to get html field (id 6 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            //get html field
            if ( $field->id == 20 ) {
                //set the field content to the html
                $field->content = $html_content;
            }
        }
    }

    // setting dynamic text content for step 4 A-Level
    if ( $current_page == 4 ) {
        foreach ( $form['fields'] as &$field ) {
            //gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id == 4) {
               $field_data = rgpost('input_' . $field->id );

                   $html_content = "<p class='nex-text'> Which A-Level subjects would you like help with ". $field_data."? </p>";

            }
        }
        //loop back through form fields to get html field (id 6 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            //get html field
            if ( $field->id == 27 ) {
                //set the field content to the html
                $field->content = $html_content;
            }
        }
    }
    if ( $current_page == 4 ) {
        foreach ( $form['fields'] as &$field ) {
            //gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id == 4) {
               $field_data = rgpost('input_' . $field->id );

                   $html_content = "<p class='nex-text'> Which University Applications would you like help with ". $field_data."? </p>";

            }
        }
        //loop back through form fields to get html field (id 6 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            //get html field
            if ( $field->id == 31 ) {
                //set the field content to the html
                $field->content = $html_content;
            }
        }
    }
    //return altered form so changes are displayed
    return $form;
}

// The filter for the pink desktop form
add_filter( 'gform_pre_render_6', 'populate_html2' );
function populate_html2( $form ) {
    //this is a 2-page form with the data from page one being displayed in an html field on page 2
    $current_page = GFFormDisplay::get_current_page( $form['id'] );
    $html_content;

    // setting dynamic text content for step 2
    if ( $current_page == 2 ) {
        foreach ( $form['fields'] as &$field ) {
            //gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id == 4) {
               $field_data = rgpost('input_' . $field->id );

                   $html_content .= "<div class='intro-text'><p class='nex-text'>Nice to meet you ". $field_data . "! Could we have your phone number for a free consultation?</p><img src='https://studymind.co.uk/wp-content/uploads/2019/05/arrow-and-lines.png'>";

            }
        }
        //loop back through form fields to get html field (id 6 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            //get html field
            if ( $field->id == 8 ) {
                //set the field content to the html
                $field->content = $html_content;
            }
        }
    }
    // setting dynamic text content for step 3
    if ( $current_page == 3 ) {
        foreach ( $form['fields'] as &$field ) {
            //gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id == 4) {
               $field_data = rgpost('input_' . $field->id );

                   $html_content .= "<p class='nex-text'>Which qualifications would you like help with ". $field_data."? </p>";

            }
        }
        //loop back through form fields to get html field (id 6 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            //get html field
            if ( $field->id == 13 ) {
                //set the field content to the html
                $field->content = $html_content;
            }
        }
    }

    // setting dynamic text content for step 4 GCSE
    if ( $current_page == 4 ) {
        foreach ( $form['fields'] as &$field ) {
            //gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id == 4) {
               $field_data = rgpost('input_' . $field->id );

                   $html_content = "<p class='nex-text'> Which GCSE subjects would you like help with ". $field_data."? </p>";

            }
        }
        //loop back through form fields to get html field (id 6 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            //get html field
            if ( $field->id == 20 ) {
                //set the field content to the html
                $field->content = $html_content;
            }
        }
    }

    // setting dynamic text content for step 4 A-Level
    if ( $current_page == 4 ) {
        foreach ( $form['fields'] as &$field ) {
            //gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id == 4) {
               $field_data = rgpost('input_' . $field->id );

                   $html_content = "<p class='nex-text'> Which A-Level subjects would you like help with ". $field_data."? </p>";

            }
        }
        //loop back through form fields to get html field (id 6 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            //get html field
            if ( $field->id == 27 ) {
                //set the field content to the html
                $field->content = $html_content;
            }
        }
    }
        //return altered form so changes are displayed
    return $form;
}

// The filter for the blue mobile form
add_filter( 'gform_pre_render_7', 'populate_htmlMobile1' );
add_filter( 'gform_pre_render_8', 'populate_htmlMobile1' );
function populate_htmlMobile1( $form ) {
    //this is a 2-page form with the data from page one being displayed in an html field on page 2
    $current_page = GFFormDisplay::get_current_page( $form['id'] );
    $html_content;

    // setting dynamic text content for step 2
    if ( $current_page == 2 ) {
        foreach ( $form['fields'] as &$field ) {
            //gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id == 4) {
               $field_data = rgpost('input_' . $field->id );

                   $html_content .= "<p class='nex-text'>Which qualifications would you like help with ". $field_data."? </p>";

            }
        }
        //loop back through form fields to get html field (id 6 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            //get html field
            if ( $field->id == 13 ) {
                //set the field content to the html
                $field->content = $html_content;
            }
        }
    }

    // setting dynamic text content for step 3 GCSE
    if ( $current_page == 3 ) {
        foreach ( $form['fields'] as &$field ) {
            //gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id == 4) {
               $field_data = rgpost('input_' . $field->id );

                   $html_content = "<p class='nex-text'> Which GCSE subjects would you like help with ". $field_data."? </p>";

            }
        }
        //loop back through form fields to get html field (id 6 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            //get html field
            if ( $field->id == 20 ) {
                //set the field content to the html
                $field->content = $html_content;
            }
        }
    }

    // setting dynamic text content for step 3 A-Level
    if ( $current_page == 3 ) {
        foreach ( $form['fields'] as &$field ) {
            //gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id == 4) {
               $field_data = rgpost('input_' . $field->id );

                   $html_content = "<p class='nex-text'> Which A-Level subjects would you like help with ". $field_data."? </p>";

            }
        }
        //loop back through form fields to get html field (id 6 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            //get html field
            if ( $field->id == 27 ) {
                //set the field content to the html
                $field->content = $html_content;
            }
        }
    }
    if ( $current_page == 3 ) {
        foreach ( $form['fields'] as &$field ) {
            //gather form data to save into html field (id 6 on my form), exclude page break
            if ( $field->id == 4) {
               $field_data = rgpost('input_' . $field->id );

                   $html_content = "<p class='nex-text'> Which University Applications would you like help with ". $field_data."? </p>";

            }
        }
        //loop back through form fields to get html field (id 6 on my form) that we are populating with the data gathered above
        foreach( $form['fields'] as &$field ) {
            //get html field
            if ( $field->id == 31 ) {
                //set the field content to the html
                $field->content = $html_content;
            }
        }
    }
        //return altered form so changes are displayed
    return $form;
}




/**
 * Add all Gravity Forms capabilities to Editor role.
 * Runs when this theme is activated.
 * 
 * @access public
 * @return void
 */
function grant_gforms_editor_access() {
  
  $role = get_role( 'editor' );
  $role->add_cap( 'gform_full_access' );
}
// Tie into the 'after_switch_theme' hook
add_action( 'after_switch_theme', 'grant_gforms_editor_access' );

/**
 * Remove Gravity Forms capabilities from Editor role.
 * Runs when this theme is deactivated (in favor of another).
 * 
 * @access public
 * @return void
 */
function revoke_gforms_editor_access() {
  
  $role = get_role( 'editor' );
  $role->remove_cap( 'gform_full_access' );
}
// Tie into the 'switch_theme' hook
add_action( 'switch_theme', 'revoke_gforms_editor_access' );

// stop gravity forms scrolling

add_filter( 'gform_confirmation_anchor', '__return_false' );

add_filter('gform_init_scripts_footer', 'init_scripts');
function init_scripts() {
    return true;
}