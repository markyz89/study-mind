'use strict';

jQuery(document).ready(
function()
	{
function end_nf_tours(){
	/* TOURS */
	main_tour.end();
	email_setup_tour.end();
	user_email_setup_tour.end();
	paypal_setup_tour.end();
	pdf_setup_tour.end();
	ftp_setup_tour.end();
	mc_setup_tour.end();
	gr_setup_tour.end();
	form_submit_setup_tour.end();
	hidden_fields_setup_tour.end();
	other_options_setup_tour.end();
	
	/* TUTORIALS */
	tutorial_1.end();
	tutorial_2.end();
	tutorial_3.end();
	tutorial_4.end();
	first_run.end();
}
/* FIRST RUN */
var first_run = new Tour({
		  name: "first-run",
		  onStart: function(){ },
		  onEnd: function(){ },
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		  steps: [
		  {
			
			element: "#nex-forms",
			title: "<strong>Welcome to NEX-Forms</strong>",
			content: "We recomend that you first take a Main Tour and then procede with some Quick Tutorials <a href='#' class='start-button start-tutorial tour-main' data-role='' style='display:block;'><span class='start-border'>Start Tour</span><span class='start-border-2 pulsate_1'></span></a><div class='more_tuts'><h5>Tutorials</h5><a href='#' class='tut-1'>Building a Simple Contact Form</a><a href='#' class='tut-2'>Using Conditional Logic</a><a href='#' class='tut-3'>Using Math Logic</a><a href='#' class='tut-4'>Creating a Multi-Step Form</a></div>",
			template: "<div class='popover tour first-run tutorial-step-1 animated zoomIn'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			placement: 'bottom',
		  },
		  ]
		}
	);
first_run.init();
// Start the tour
first_run.start();

/* BUY NOW DEMO */
var demo_popup = new Tour({
		  name: "demo-popup",
		  onStart: function (tour) {jQuery('#nex-forms').addClass('demo-popup');
		  				jQuery('.upgrade_pro').fadeOut('slow');
		  			},
 		  onEnd: function (tour)
		  			{
						jQuery('#nex-forms').removeClass('demo-popup'); 
						setTimeout(
							function(){run_demo_popup()},300000);
						
						jQuery('.upgrade_pro').show();
						
					},
		  steps: [
				  {
					element: ".builder-footer",
					title: "Like this plugin?",
					content: "<strong>Buy once</strong> and recieve <strong>lifetime FREE</strong> automatic <strong>updates</strong>!<a href='http://codecanyon.net/item/nexforms-the-ultimate-wordpress-form-builder/7103891?license=regular&open_purchase_for_item_id=7103891&purchasable=source&ref=Basix' target='_blank' class='start-button'><span class='start-border'>Buy Now</span><span class='start-border-2 pulsate_1'></a>",
					template: "<div class='popover tour tour-demo-popup animated fadeInUp'><h3 class='popover-title'></h3><div class='popover-content'></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
					placement: 'bottom',
				  },
				]
			}
		);


		
	if(jQuery('#demo_site').text()=='yes')
		{
		run_demo_popup();
		}
		

	function run_demo_popup(){
		setTimeout(
			function(){
				demo_popup.restart();
			}, 90000);
	}

/* TOURS */
	
/* SETUP EMAILS */
	var email_setup_tour = new Tour({
		  name: "email_setup_tour",
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			element: ".show-admin-email-setup",
			title: "Admin E-Mails",
			content: "Setup your admin email notifications here",
			placement: 'right'
		  },
		  {
			element: ".tut_admin_email_1",
			title: "From Address",
			content: "This is the address where the email is sent from. If you setup confirmation emails then this is the address the user who completed the form will reply to.",
			placement: 'bottom'
		  },
		  {
			element: ".tut_admin_email_2",
			title: "From Name",
			content: "This is the name of the sender (you) and will be displayed in the recipients inbox. Example your company name.",
			placement: 'bottom'
		  },
		  {
			element: ".tut_admin_email_3",
			title: "Recipients",
			content: "Add a comma seperated list of email addresses to whom this admin email will be sent to. <br><br> Example: email1@domain.com, email2@domain.com, email3@domain.com",
			placement: 'bottom'
		  },
		  
		  {
			element: ".tut_admin_email_4",
			title: "BCC",
			content: "Blind Carbon Copy. Same as recipients list but each recipient does not see who else recieved the email.",
			placement: 'bottom'
		  },
		  {
			element: ".tut_admin_email_5",
			title: "Subject",
			content: "This is the subject of the email and will be dislayed in the users inbox.",
			placement: 'bottom'
		  },
		  {
			element: ".tut_admin_email_6",
			title: "Email Attachments",
			content: "If your form includes file uploader fields then you can choose whether to attach these files that the user submits via the form.",
			placement: 'bottom'
		  },
		  {
			element: "#admin_email .mce-edit-area",
			title: "Email Body",
			content: "This is where you construct your admin email body, the actual content of the email that will be sent to the recipients specified above. <br><br>Note: This Editor works the same as the Classic WordPress TinyMCE Page/Post Editor",
			placement: 'top'
		  },
		  
		  {
			element: "#admin_email .mce-flight_shortcodes",
			title: "Form Data Tags",
			content: "Add form Data tags from this button into your email body or any of the above fields, like in the \"Subject\". Data tags are placeholders for the data that is submitted from a field in the form.",
			placement: 'top'
		  },
		  {
			orphan: true,
			title: "End of Tour",
			content: "For more information on email setup and data tags see: <a href='http://basixonline.net/nex-forms-documentation/nex-forms-email-setup/#1' target='_blank'>Docs - Email Notifications</a><br><br><a href='#' class=\"btn btn-default tour-email-setup-user\">Also see: User Email Setup Tour <span class=\"fa fa-arrow-right\"></span></a>",
		  },
		  
		]});
	jQuery(document).on('click','.tour-email-setup',
		function()
			{
			end_nf_tours();
			jQuery('a.email_setup').trigger('click');
			setTimeout(function(){ jQuery('.form_attr_left_menu a.show-admin-email-setup').trigger('click'); },300);
			email_setup_tour.init();
			email_setup_tour.restart();
			email_setup_tour.goTo(0) 
			}
		);
	var user_email_setup_tour = new Tour({
		  name: "user_email_setup_tour",
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			element: ".show-user-email-setup",
			title: "User E-Mails",
			content: "Setup your user confirmation emails from here.",
			placement: 'right'
		  },
		  {
			element: ".tut_user_email_1",
			title: "Map Recipient Field",
			content: "Map the field from the form that the user will use to enter their email address.<br><br> Note: You need to add an email field and VALIDATE that field to be and email address!",
			placement: 'bottom'
		  },
		  {
			element: ".tut_user_email_2",
			title: "BCC",
			content: "Blind Carbon Copy. Add a comma seperated list of email addresses to whom this user email will be sent other than the email field specified above.",
			placement: 'bottom'
		  },
		  {
			element: ".tut_user_email_3",
			title: "Subject",
			content: "This is the subject of the email and will be dislayed in the users inbox.",
			placement: 'bottom'
		  },
		  {
			element: "#user_email .mce-edit-area",
			title: "Email Body",
			content: "This is where you construct your user confirmation email body, the actual content of the email that will be sent to the user email field specified above. <br><br>Note: This Editor works the same as the Classic WordPress TinyMCE Page/Post Editor",
			placement: 'top'
		  },
		  
		  {
			element: "#user_email .mce-flight_shortcodes",
			title: "Form Data Tags",
			content: "Add form Data tags from this button into your email body or any of the above fields, like in the \"Subject\". Data tags are placeholders for the data that is submitted from a field in the form.",
			placement: 'top'
		  },
		  {
			orphan: true,
			title: "End of Tour",
			content: "For more information on email setup and data tags see: <a href='http://basixonline.net/nex-forms-documentation/nex-forms-email-setup/#2' target='_blank'>Docs - Email Notifications</a><br><br><a href='#' class=\"btn btn-default tour-email-setup\">Also see: Admin Email Setup Tour <span class=\"fa fa-arrow-right\"></span></a>",
		  },
		  
		]});
	jQuery(document).on('click','.tour-email-setup-user',
		function()
			{
			end_nf_tours();
			jQuery('a.email_setup').trigger('click');
			setTimeout(function(){ jQuery('.form_attr_left_menu a.show-user-email-setup').trigger('click'); },300);
			user_email_setup_tour.init();
			user_email_setup_tour.restart();
			user_email_setup_tour.goTo(0) 
			}
		);
/* INTEGRATION TOURS */	
/* SETUP PAYPAL */
	var paypal_setup_tour = new Tour({
		  name: "paypal-setup-tour",
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		 
		  {
			element: ".show_paypal_setup",
			title: "Paypal Setup",
			content: "Setup your paypal setup and checkout items here.",
			placement: 'right'
		  },
		   {
			element: ".paypal_not_installed .message",
			title: "Add-on Not Found!",
			content: "Buy this add-on from <strong>Envato CodeCanyon</strong> or download it from <strong>Envato Elements</strong><br><br>Click on the Buttons below.",
			placement: 'top',
		  	template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		  },
		  {
			element: ".tour_paypal_setup_1",
			title: "Go to Paypal",
			content: "For the form to redirect to PayPal Checkout select <strong>Yes</strong>.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_paypal_setup_2",
			title: "PayPal Environment",
			content: "Select to use a test (Sanbox) or Live Paypal account. Use the sandbox environtment to test your paypal checkout and if all goes to plan switch to live environment.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_paypal_setup_3",
			title: "Client ID",
			content: "Here you enter your PayPal Client ID, see <a href='https://basix.ticksy.com/article/13639/' target='_blank'>Help Article</a>",
			placement: 'bottom'
		  },
		  
		  {
			element: ".tour_paypal_setup_4",
			title: "Client Secret Key",
			content: "Here you enter your PayPal Client Secret key, see <a href='https://basix.ticksy.com/article/13639/' target='_blank'>Help Article</a>",
			placement: 'bottom'
		  },
		  {
			element: ".tour_paypal_setup_5",
			title: "Currency Selection",
			content: "Select the Currency you want to be payed in.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_paypal_setup_6",
			title: "Success Message",
			content: "If the transaction is successful then this is the message the user will come back to.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_paypal_setup_7",
			title: "Failure Message",
			content: "If the transaction is unsuccessful or canceled then this is the message the user will come back to.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_paypal_setup_8",
			title: "Email Alerts",
			content: "Choose when you want to recieve an email. On successful payments, failed payments, before payments takes place or all or any of the above.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_paypal_setup_9",
			title: "Add Paypal Item",
			content: "Click this button to add a new PayPal checkout Item.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_paypal_setup_10",
			title: "PayPal Items List",
			content: "All PayPal Checkout items will be displayed and edited here.",
			placement: 'top'
		  },
		  {
			orphan: true,
			title: "End of Tour",
			content: "For more information on paypal setup see: <a href='#' target='_blank'>Docs - PayPal Setup</a><br><br><a href='#' class=\"btn btn-default tour-pdf-setup\">Also see: PDF Setup <span class=\"fa fa-arrow-right\"></span></a>",
		  },
		  
		]});
	jQuery(document).on('click','.tour-paypal-setup',
		function()
			{
			end_nf_tours();
			jQuery('.top-menu-dropdown a.integration').trigger('click');
			setTimeout(function(){ jQuery('.form_attr_left_menu a.show_paypal_setup').trigger('click'); },300);
			paypal_setup_tour.init();
			paypal_setup_tour.restart();
			paypal_setup_tour.goTo(0) 
			}
		);
		


/* PDF CREATOR SETUP*/
	var pdf_setup_tour = new Tour({
		  name: "pdf-setup-tour",
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			element: ".show_pdf_setup",
			title: "PDF Creator",
			content: "Create and setup PDF here.",
			placement: 'right'
		  },
		  {
			element: ".pdf_not_installed .message",
			title: "Add-on Not Found!",
			content: "Buy this add-on from <strong>Envato CodeCanyon</strong> or download it from <strong>Envato Elements</strong><br><br>Click on the Buttons below.",
			placement: 'top',
		  	template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		  },
		  {
			element: ".tour_pdf_setup_1",
			title: "PDF Email Attachments",
			content: "Choose to attached this PDF to your User and/or Admin emails.",
			placement: 'bottom'
		  },
		  {
			element: "#pdfcreator .mce-edit-area",
			title: "PDF Body",
			content: "This is where you construct your PDF body (the actual content of the PDF). You can add your own CSS by adding it in a &lt;style&gt;&lt;/style&gt; tag in the \"Text\" view of the editor. Or you can simply use inline CSS on your HTML elements.<br><br>Note: This Editor works the same as the Classic WordPress TinyMCE Page/Post Editor.",
			placement: 'top'
		  },
		  
		  {
			element: "#pdfcreator .mce-flight_shortcodes",
			title: "Form Data Tags",
			content: "Add form Data tags from this button into your PDF body. These tags will be replaced with actual data submitted from these form fields.",
			placement: 'top'
		  },
		 
		  {
			orphan: true,
			title: "End of Tour",
			content: "For more information on PDF setup see: <a href='#' target='_blank'>Docs - PDF Setup</a><br><br><a href='#' class=\"btn btn-default tour-ftp-setup\">Also see: Form to Post Setup <span class=\"fa fa-arrow-right\"></span></a>",
		  },
		  
		]});
	jQuery(document).on('click','.tour-pdf-setup',
		function()
			{
			end_nf_tours();
			jQuery('.top-menu-dropdown a.integration').trigger('click');
			setTimeout(function(){ jQuery('.form_attr_left_menu a.show_pdf_setup').trigger('click'); },300);
			pdf_setup_tour.init();
			pdf_setup_tour.restart();
			pdf_setup_tour.goTo(0) 
			}
		);

/* FORM TO POST PDF */
	var ftp_setup_tour = new Tour({
		  name: "ftp-setup-tour",
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			element: ".show_ftp_setup",
			title: "Form to Post/Page Setup",
			content: "Form to Post setup is found here.",
			placement: 'right'
		  },
		  {
			element: ".ftp_not_installed .message",
			title: "Add-on Not Found!",
			content: "Buy this add-on from <strong>Envato CodeCanyon</strong> or download it from <strong>Envato Elements</strong><br><br>Click on the Buttons below.",
			placement: 'top',
		  	template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		  },
		  {
			element: ".tour_ftp_setup_1",
			title: "Integrate with Form to Post",
			content: "Select <strong>Yes</strong> to have this form's submissions create posts or pages to the specified settings below.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_ftp_setup_2",
			title: "Set Post Title",
			content: "Select/Map the Field that will be used for the Post/Page's Title",
			placement: 'bottom'
		  },
		  {
			element: ".tour_ftp_setup_3",
			title: "Set Featured Image",
			content: "Select/Map the Field that will be used for the Post/Page's Featured Image. <br><br>Note: This field should be a file/image upload field.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_ftp_setup_4",
			title: "Set Post or Page Type",
			content: "Choose to create Posts or Pages from the form's submissions.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_ftp_setup_5",
			title: "Set Post/Page Status",
			content: "Select what the status of the Post or Page will be upon creation.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_ftp_setup_6",
			title: "Allow Commnets",
			content: "Choose to allow comments for the post or page.",
			placement: 'bottom'
		  },
		  {
			element: "#formtopost .mce-edit-area",
			title: "Post/Page Content",
			content: "This is where you construct the Page/Post content. Note: This Editor works the same as the Classic WordPress TinyMCE Page/Post Editor.",
			placement: 'top'
		  },
		  
		  {
			element: "#formtopost .mce-flight_shortcodes",
			title: "Form Data Tags",
			content: "Add form Data tags from this button into your Page/Post content. These tags will be replaced with actual data submitted from these form fields.",
			placement: 'top'
		  },
		 
		  {
			orphan: true,
			title: "End of Tour",
			content: "For more information on Form to Post setup see: <a href='#' target='_blank'>Docs - Form to Post Setup</a><br><br><a href='#' class=\"btn btn-default tour-mc-setup\">Also see: MailChimp Setup <span class=\"fa fa-arrow-right\"></span></a>",
		  },
		  
		]});	
	jQuery(document).on('click','.tour-ftp-setup',
		function()
			{
			end_nf_tours();
			jQuery('.top-menu-dropdown a.integration').trigger('click');
			setTimeout(function(){ jQuery('.form_attr_left_menu a.show_ftp_setup').trigger('click'); },300);
			ftp_setup_tour.init();
			ftp_setup_tour.restart();
			ftp_setup_tour.goTo(0) 
			}
		);
	

/* MAILCHIMP SETUP */
	var mc_setup_tour = new Tour({
		  name: "mc-setup-tour",
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			element: ".show_mc_setup",
			title: "MailChimp Setup",
			content: "MailChimp integration setup is found here.",
			placement: 'right'
		  },
		  {
			element: ".mc_not_installed .message",
			title: "Add-on Not Found!",
			content: "Buy this add-on from <strong>Envato CodeCanyon</strong> or download it from <strong>Envato Elements</strong><br><br>Click on the Buttons below.",
			placement: 'top',
		  	template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		  },
		  {
			element: ".tour_mc_setup_1",
			title: "Integrate with Mailchimp",
			content: "Select <strong>Yes</strong> to have this form's submissions added to your MailChimp list specified below.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_mc_setup_2",
			title: "Mailchimp Lists",
			content: "Choose which list this form's submissions will be adding to. ",
			placement: 'bottom'
		  },
		  {
			element: ".tour_mc_setup_3",
			title: "Lists Columns",
			content: "The selected list's columns/fields will be populated here. Map a form field to the corresponding list column.",
			placement: 'bottom'
		  },
		 
		  {
			orphan: true,
			title: "End of Tour",
			content: "For more information on MailChimp setup see: <a href='#' target='_blank'>Docs - MailChimp Setup</a><br><br><a href='#' class=\"btn btn-default tour-gr-setup\">Also see: GetResponse Setup <span class=\"fa fa-arrow-right\"></span></a>",
		  },
		  
		]});	
	jQuery(document).on('click','.tour-mc-setup',
		function()
			{
			end_nf_tours();
			jQuery('.top-menu-dropdown a.integration').trigger('click');
			setTimeout(function(){ jQuery('.form_attr_left_menu a.show_mc_setup').trigger('click'); },300);
			mc_setup_tour.init();
			mc_setup_tour.restart();
			mc_setup_tour.goTo(0) 
			}
		);
		
/* GETRESPONSE SETUP */
	var gr_setup_tour = new Tour({
		  name: "gr-setup-tour",
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			element: ".show_gr_setup",
			title: "GetResponse Setup",
			content: "GetResponse integration setup is found here.",
			placement: 'right'
		  },
		  {
			element: ".gr_not_installed .message",
			title: "Add-on Not Found!",
			content: "Buy this add-on from <strong>Envato CodeCanyon</strong> or download it from <strong>Envato Elements</strong><br><br>Click on the Buttons below.",
			placement: 'top',
		  	template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		  },
		  {
			element: ".tour_gr_setup_1",
			title: "Integrate with GetResponse",
			content: "Select <strong>Yes</strong> to have this form's submissions added to your GetResponse list specified below.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_gr_setup_2",
			title: "GetResponse Lists",
			content: "Choose which list this form's submissions will be adding to. ",
			placement: 'bottom'
		  },
		  {
			element: ".tour_gr_setup_3",
			title: "Lists Columns",
			content: "The selected list's columns/fields will be populated here. Map a form field to the corresponding list column.",
			placement: 'bottom'
		  },
		 
		  {
			orphan: true,
			title: "End of Tour",
			content: "For more information on GetResponse setup see: <a href='#' target='_blank'>Docs - GetResponse Setup</a><br><br><a href='#' class=\"btn btn-default tour-paypal-setup\">Also see: PayPal Setup <span class=\"fa fa-arrow-right\"></span></a>",
		  },
		  
		]});	
	jQuery(document).on('click','.tour-gr-setup',
		function()
			{
			end_nf_tours();
			jQuery('.top-menu-dropdown a.integration').trigger('click');
			setTimeout(function(){ jQuery('.form_attr_left_menu a.show_gr_setup').trigger('click'); },300);
			gr_setup_tour.init();
			gr_setup_tour.restart();
			gr_setup_tour.goTo(0) 
			}
		);
	


/* FORM OPTIONS TOURS */
/* On Form Submission */
	var form_submit_setup_tour = new Tour({
		  name: "form-submit-setup-tour",
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			element: ".show_on_submission_options",
			title: "On Form Submit Setup",
			content: "Find your on form submission options here",
			placement: 'right'
		  },
		  {
			element: ".tour_form_submit_setup_1",
			title: "Submission Type",
			content: "Choose between AJAX or Custom submissions. Note, if you choose Custom you should have coding knowledge as you will be required to do the submitted form data processing yourself.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_form_submit_setup_2",
			title: "After Submission",
			content: "Choose whether to show the on-screen message below or to redirect the user to your own custom \"Thank You\" page.",
			placement: 'bottom'
		  },
		  {
			element: "#on_submission_settings .mce-edit-area",
			title: "On-Screen Message",
			content: "This is where you construct the on-screen confirmation message that will be displayed when the user submits the form. <br><br>Note: This Editor works the same as the Classic WordPress TinyMCE Page/Post Editor.",
			placement: 'top'
		  },
		  
		  {
			element: "#on_submission_settings .mce-flight_shortcodes",
			title: "Form Data Tags",
			content: "Add form Data tags from this button into your on-screen message. These tags will be replaced with actual data submitted from these form fields.",
			placement: 'top'
		  },
		 
		  {
			orphan: true,
			title: "End of Tour",
			content: "For more information on Submission options setup see: <a href='#' target='_blank'>Docs - On Form Submission Setup</a><br><br><a href='#' class=\"btn btn-default tour-hidden-fields-setup\">Also see: Hidden Fields Setup <span class=\"fa fa-arrow-right\"></span></a>",
		  },
		  
		]});	
	jQuery(document).on('click','.tour-form-submit-setup',
		function()
			{
			end_nf_tours();
			jQuery('.top-menu-dropdown a.form_options').trigger('click');
			setTimeout(function(){ jQuery('.form_attr_left_menu a.show_on_submission_options').trigger('click'); },300);
			form_submit_setup_tour.init();
			form_submit_setup_tour.restart();
			form_submit_setup_tour.goTo(0) 
			}
		);


/* Hidden Fields */
	var hidden_fields_setup_tour = new Tour({
		  name: "hidden-fields-setup-tour",
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			element: ".show_hidden_fields",
			title: "Hidden Fields Setup",
			content: "Add hidden Fields to your form here.",
			placement: 'right'
		  },
		  {
			element: ".tour_hidden_fields_setup_1",
			title: "Add a Hidden Field",
			content: "Click this button to add a new hidden field.",
			placement: 'right'
		  },
		  {
			element: ".tour_hidden_fields_setup_2",
			title: "Hidden Fields List",
			content: "This is where all your form's hidden fields can be found, edited and deleted.",
			placement: 'top'
		  },
		  {
			orphan: true,
			title: "End of Tour",
			content: "For more information on Hidden Fields see: <a href='#' target='_blank'>Docs - Hidden Fields Setup</a><br><br><a href='#' class=\"btn btn-default tour-other-options-setup\">Also see: Other Form Options <span class=\"fa fa-arrow-right\"></span></a>",
		  },
		  
		]});	
	jQuery(document).on('click','.tour-hidden-fields-setup',
		function()
			{
			end_nf_tours();
			jQuery('.top-menu-dropdown a.form_options').trigger('click');
			setTimeout(function(){ jQuery('.form_attr_left_menu a.show_hidden_fields').trigger('click'); },300);
			hidden_fields_setup_tour.init();
			hidden_fields_setup_tour.restart();
			hidden_fields_setup_tour.goTo(0) 
			}
		);
		

/* Other Options */
	var other_options_setup_tour = new Tour({
		  name: "other-options-setup-tour",
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			element: ".show_file_uploads_options",
			title: "Other Options",
			content: "Find all other form options here.",
			placement: 'right'
		  },
		  {
			element: ".tour_other_options_setup_1",
			title: "File Uploads",
			content: "Choose if you want your submitted files to be uploaded and saved to the server. The uploaded files will be saved in your /wp-uploads folder.",
			placement: 'bottom'
		  },
		  {
			element: ".tour_other_options_setup_2",
			title: "Google Analytics Conversion Tracking",
			content: "Add your google on-click conversion tracking here.",
			placement: 'bottom'
		  },
		  {
			orphan: true,
			title: "End of Tour",
			content: "Also see: <a href='#' class=\"btn btn-default tour-form-submit-setup\">Also see: On Form Submission Setup <span class=\"fa fa-arrow-right\"></span></a>",
		  },
		  
		]});	
	jQuery(document).on('click','.tour-other-options-setup',
		function()
			{
			end_nf_tours();
			jQuery('.top-menu-dropdown a.form_options').trigger('click');
			setTimeout(function(){ jQuery('.form_attr_left_menu a.show_file_uploads_options').trigger('click'); },300);
			other_options_setup_tour.init();
			other_options_setup_tour.restart();
			other_options_setup_tour.goTo(0) 
			}
		);

	
	var main_tour = new Tour({
		  name: "main-tour",
		  animation:true,
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			element: ".btn-dashboard",
			title: "Dashboard",
			content: "Takes you back to your NEX-Forms Dashboard.",
			placement: 'bottom',
			
		  },
		  {
			element: ".saved-forms",
			title: "Saved Forms",
			content: "Click here to select and switch forms.",
			placement: 'bottom',
		  },
		  {
			element: ".create_new_form",
			title: "New Form",
			content: "Click here to start creating a new form.",
			placement: 'bottom',
			
		  },
		  {
			element: "a.canvas_view",
			title: "Form Canvas",
			content: "From here you build and style your form.",
			placement: 'bottom',
		  },
		  {
			element: "li a.email_setup",
			title: "Autoresponders",
			content: "Setup your admin notification and user confirmation emails here.",
			placement: 'bottom'
		  },
		  {
			element: "li a.integration",
			title: "Integrate with Add-ons",
			content: "Setup your PayPal, PDF's, Mailchimp, GetResponse and Form to post settings from here.",
			placement: 'bottom'
		  },
		  {
			element: "li a.form_options",
			title: "Submission options",
			content: "These settings specify what happens when a form has been submitted such as the on-screen confirmation message, additional hidden fields to be sent, etc.",
			placement: 'bottom'
		  },
		  {
			element: "li a.embed_options",
			title: "Embedding a form",
			content: "You can find the form's shortcodes here to embed the form into your Page(s), Post(s) or Theme template(s)",
			placement: 'bottom'
		  },
		  {
			element: "#form_name",
			title: "Form Title",
			content: "This is the Title of your form.",
			placement: 'bottom'
		  },
		  {
			element: ".top-menu-btn.form-preview",
			title: "Form Preview",
			content: "Gives you a live preview of your form while you build it. ",
			placement: 'bottom'
		  },
		   {
			element: ".save_nex_form.prime_save",
			title: "Save your form",
			content: "When you are done with your form and overall setup then hit this button to save it all. If this button keeps spinning see: <a href='https://basix.ticksy.com/articles/' target='_blank'>Support Articles</a>",
			placement: 'bottom'
		  },
		  {
			element: ".view_test_page",
			title: "New Test Page Created",
			content: "<br>A front-end test page has been created just for you!<br><br> Click on this button after you created <strong>AND SAVED</strong> the form. You can test your form live with email submissions and everything. </br></br>Remember you can download the form you create here to import into your own site!",
			placement: 'bottom'
			},
		  {
			element: ".tutorial-menu",
			title: "Tutorials",
			content: "This menu includes some very usefull interactive tutorials.",
			placement: 'left',
			onShow:function(){ jQuery('.help_menu a.tutorial-menu').parent().find('.aa_menu_2').addClass('open');  },
			onHide:function(){ jQuery('.aa_menu_2').removeClass('open');  }
		  },
		  {
			element: ".tours-menu",
			title: "Backend Tours",
			content: "Here you will find all the tours (like this one) to get familiarized with the NEX-Forms Backend.",
			placement: 'left',
			onShow:function(){ jQuery('.help_menu a.tours-menu').parent().find('.aa_menu_2').addClass('open-2');  },
			onHide:function(){ jQuery('.aa_menu_2').removeClass('open-2');  }
		  },
		  {
			element: "select.set_form_theme",
			title: "Form Base",
			content: "Change your overall form base to: Bootstrap, Material Design, jQuery UI or Classic (Browser Default) style.<br><br>Requires <a href='https://codecanyon.net/item/form-themes-for-nexforms/10037800' target='_blank'>Themes Add-on for NEX-Forms</a>.",
			placement: 'bottom'
		  },
		  {
			element: "select.choose_form_theme",
			title: "Preset Color Schemes",
			content: "Choose a color scheme from here to instantly style your whole form. <br><br>Requires <a href='https://codecanyon.net/item/form-themes-for-nexforms/10037800' target='_blank'>Themes Add-on for NEX-Forms</a>",
			placement: 'bottom'
		  },
		   {
			element: "select.md_theme_shade_selection",
			title: "Form Canvas Shade",
			content: "Select the shade you want to build your form on, light or dark. <br><br> <strong>NOTE!</strong> This is for building purposes only and does not effect the form on the front end. For example if you are using light shades for field labels then select the dark shade so you can see what are you doing when building and editing the form.",
			placement: 'bottom'
		  },
		  {
			element: ".full-screen-btn",
			title: "Full Screen",
			content: "Click here to go to full screen mode. When in full screen mode click again to go back to normal editing mode.",
			placement: 'left'
		  },
		  {
			element: ".field_selection_dropdown_menu",
			title: "Fields Menu",
			content: "Show/hide the fields menu from here. Usefull to hide the fields menu to create more editing space on smaller screens.",
			placement: 'bottom'
		  },
		  {
			element: ".other-form-elements",
			title: "Other Elements",
			content: "This panel includes form elements that is not input related like headings, dividers, text paragraphs, etc.",
			placement: 'bottom'
		  },
		  {
			element: ".select-grid-fields",
			title: "Grid System",
			content: "Add grid layouts from this panel. The number on the button is equal to the total columns that will be added.",
			placement: 'bottom'
		  },
		  {
			element: ".multi-step-fields",
			title: "Add a new Multi-step",
			content: "Click this button to add a new step in your form.",
			placement: 'bottom'
		  },
		  {
			element: ".conditional-logic-btn",
			title: "Conditional Logic",
			content: "From here you can add Conditional Logic to your form fields.<br><br>See <a href='' class='tut-2'>Using Conditional Logic Tutorial</a>",
			placement: 'left'
		  },
		  {
			element: ".tool-section",
			title: "Field Menu",
			content: "Add your form fields from this menu. Click on the field type you want and the field will be added to the form canvas.",
			placement: 'right'
		  },
		  {
			element: ".nex-forms-container",
			title: "Form Canvas",
			content: "This is the WYSIWYG area where you build, drag, sort and edit your form fields.",
			placement: 'top'
		  },
		  {
			element: ".overall-form-styling-column",
			title: "Overall Styling Options",
			content: "Although each field can be styled individually this panel includes settings to apply styling to all fields simultaneously and the form container itself as well.<br><br> You can close this panel (click on X -> top left corner) to create more editing space and re-open it again next to the Conditional Logic button above.",
			placement: 'left'
		  },
		  
		  {
			orphan: true,
			title: "End of Tour",
			content: "That concludes the Main Tour. <br><br>See next: <br><br><a href='#' class='tour-email-setup'>Email Setup Tour</a><br><a href='#' class='tour-paypal-setup'>Integartions Tour</a><br><a href='#' class='tour-form-submit-setup'>Form Options Tour</a>",
			placement: 'bottom',
		  },
		  
		  
		]});
	jQuery(document).on('click','a.tour-main',
		function()
			{
			end_nf_tours();
			jQuery('a.canvas_view').trigger('click');
			main_tour.init();
			main_tour.start();
			main_tour.restart();
			}
		);	
		
/* TUTORIALS */
function nf_check_form_canvas(){
	
	if(jQuery('.nex-forms-container').find('.form_field').length>0)
		{  
		setTimeout(function(){ 
			jQuery('.start-tutorial').hide();
			jQuery('.tut_clear_form').show();
			jQuery('.new_tut').hide();
		},200);
		} 
	else
		{	
		setTimeout(function(){ 
			jQuery('.start-tutorial').show();
			jQuery('.tut_clear_form').hide();
			jQuery('.new_tut').show();
			
			},200);
		}
}

jQuery(document).on('click','.clear_form, .restart-tutorial',
		function()
			{
			jQuery('.nex-forms-container').html('');
			jQuery('.con-logic-column .set_rules').html('');	
			jQuery('.nf_step_breadcrumb').hide();
			end_nf_tours();
			var step = 0;
			if(jQuery(this).hasClass('restart-tutorial'))
				step = 1;
			
			var get_tut = jQuery(this).attr('data-tutorial');
			if(get_tut=='tut-1')
				{
				tutorial_1.restart();
				tutorial_1.goTo(step);
				}
			if(get_tut=='tut-2')
				{
				tutorial_2.restart();
				tutorial_2.goTo(step);
				}
			if(get_tut=='tut-3')
				{
				tutorial_3.restart();
				tutorial_3.goTo(step);
				}
			if(get_tut=='tut-4')
				{
				tutorial_4.restart();
				tutorial_4.goTo(step);
				}
			
			jQuery('#nex-forms').addClass('running-tutorial');
			jQuery('.popover.tour.tour-'+get_tut).addClass('animated').addClass('flipInY');
			}
		);

var current_tut_step = '';
/* TUT 1 - CREATE A CONTACT FORM */		
		
		
		var tutorial_1 = new Tour({
		  name: "tut-1",
		  onStart: function(){ nf_check_form_canvas(); },
		  onEnd: function(){ jQuery('#nex-forms').removeClass('tut-1').removeClass('running-tutorial'); },
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			orphan: true,
			title: "Tutorial 1 - Simple Contact Form",
			content: "<div class='new_tut'>In this tutorial you will learn how to build a simple contact form.</div><div class='tut_clear_form' style='display:none;'><span class='fa fa-warning pulsate_2'></span>For this tutorial to work you need to clear your form canvas from all fields or create a new blank form and re-start this tutorial.<br></br><a href='#' class='btn btn-default clear_form' data-tutorial='tut-1'>Clear Now</a> <a href='#' class='btn btn-default create_new_form'>New Form</a></div>",
			template: "<div class='popover tour tutorial-step-1 animated fadeInUp'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><a href='#' class='start-button start-tutorial' data-role='next' style='display:block;'><span class='start-border'>Start</span><span class='start-border-2 pulsate_1'></a></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			placement: 'bottom',
			onShow: function(){ nf_check_form_canvas(); },
		  },
		  {
			element: ".tool-section .form_field.name",
			title: "Step 1",
			content: "Add a Name Field",
			placement: 'bottom',
			reflex: true,
		  },
		  {
			element: ".tool-section .form_field.email",
			title: "Step 2",
			content: "Now add an Email field so we can get back to the customer.",
			placement: 'bottom',
			reflex: true,
		  },
		  {
			element: ".tool-section .form_field.Query",
			title: "Step 3",
			content: "Good, now we can add a query field so we get some feedback from the customer.",
			placement: 'bottom',
			reflex: true,
		  },
		  {
			element: ".canvas-tools .form_field.the_submit",
			title: "Step 4",
			content: "Thats all we need for now, just add a submit button so the user can send the form.",
			placement: 'bottom',
			reflex: true,
		  },
		  {
			element: ".save_nex_form.prime_save",
			title: "Step 5",
			content: "Lastly, save or <a href='#' class='preview-form'>Preview</a> the Form.",
			placement: 'bottom',
			template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			reflex: true,
		  },
		  {
			orphan: true,
			title: "Tutorial 1 - Complete!",
			content: "<span class='fa fa-check'></span><strong>Well done!</strong></br>You have just created your first Contact Form! <a href='#' class='start-button start-tutorial restart-tutorial' data-tutorial='tut-1' data-role='' style='display:block;'><span class='start-border'>restart</span><span class='start-border-2 pulsate_1'></span></a><div class='more_tuts'><h5>Also See:</h5><a href='#' class='tut-1'>Building a Simple Contact Form</a><a href='#' class='tut-2'>Using Conditional Logic</a><a href='#' class='tut-3'>Using Math Logic</a><a href='#' class='tut-4'>Creating a Multi-Step Form</a></div>",
			template: "<div class='popover tour tutorial-last-step animated zoomIn'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			placement: 'bottom',
		  },
		]});
		
	jQuery(document).on('click','a.tut-1',
		function()
			{
			end_nf_tours();
			jQuery('a.canvas_view').trigger('click');
			jQuery('#nex-forms').addClass('tut-1').addClass('running-tutorial');
			tutorial_1.init();
			tutorial_1.restart();
			}
		);
		
		




/* TUT 2 - USING CONDITIONAL LOGIC */		
		
		
		var tutorial_2 = new Tour({
		  name: "tut-2",
		  onStart: function (tour) {jQuery('#nex-forms').addClass('tut-2')},
 		  onEnd: function (tour) {jQuery('#nex-forms').removeClass('tut-2').removeClass('running-tutorial')},
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			orphan: true,
			title: "Tutorial 2 - Using Conditional Logic",
			content: "<div class='new_tut'>In this tutorial you will to create a simple contact form and will learn how to apply Conditional Logic to the fields.</div><div class='tut_clear_form' style='display:none;'><span class='fa fa-warning pulsate_2'></span>For this tutorial to work you need to clear your form canvas from all fields or create a new blank form and re-start this tutorial.<br></br><a href='#' class='btn btn-default clear_form' data-tutorial='tut-2'>Clear Now</a> <a href='#' class='btn btn-default create_new_form'>New Form</a></div>",
			template: "<div class='popover tour tutorial-step-1 animated fadeInUp'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><a href='#' class='start-button start-tutorial' data-role='next' style='display:block;'><span class='start-border'>Start</span><span class='start-border-2 pulsate_1'></a><button class='btn btn-default hidden start-tut' data-role='next'>Start Tutorial <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			placement: 'bottom',
			onShow: function(){ nf_check_form_canvas(); },
		  },
		  {
			element: ".tool-section .form_field.name",
			title: "Step 1",
			content: "Add a Name Field",
			placement: 'bottom',
			reflex: true,
		  },
		  {
			element: ".tool-section .form_field.radio-group",
			title: "Step 2",
			content: "Add a Radio Button Field",
			placement: 'bottom',
			reflex: true,
		  },
		  {
			element: ".tool-section .form_field.email",
			title: "Step 3",
			content: "Add an Email field",
			placement: 'bottom',
			reflex: true,
		  },
		  {
			element: ".tool-section .form_field.phone_number",
			title: "Step 4",
			content: "Add a Phone Number field",
			placement: 'bottom',
			reflex: true,
		  },
		  {
			element: ".nex-forms-container .form_field.radio-group",
			title: "Step 5",
			content: "Good, now lets edit the Radio Button field.",
			placement: 'bottom',
			reflex: true,
			onShow: function (tour) {if(current_field){ jQuery('li#label-settings a').trigger('click') } }
		  },
		  {
			element: ".field-settings-column #set_label",
			title: "Step 6",
			content: "Change the <strong>Label Text</strong> setting to<br></br><strong>Contact Method</strong><br><br>Note: This label can be anything but for this tutorial please follow the instructions.",
			placement: 'left',
		  },
		  {
			element: "li#input-settings",
			title: "Step 7",
			content: "Now we want to change the input buttons so we go to the Input Settings for the field.",
			placement: 'top',
		  },
		  {
			element: ".field-settings-column #set_radios",
			title: "Step 8",
			content: "Change the radio buttons to:<br><br><strong>Email<br>Phone</strong><br><br>Note: You can have any number of buttons with any labels but for this tutorial please follow the instructions.",
			placement: 'left',
		  },
		   {
			element: ".conditional-logic-btn",
			title: "Step 9",
			content: "Now that your fields are setup we can add some Conditional Logic.",
			placement: 'bottom',
			reflex: true,
		  },
		  {
			element: ".refresh_cl_fields",
			title: "Step 10",
			content: "We added some new fields to the form so we need to hit the <strong>Refresh Fields</strong> button so the fields reflect in the fields selection lists.",
			placement: 'left',
			reflex: true,
		  },
//CL - CREATE RULE 1
		  {
			element: ".add_new_rule.cl-tool-btn",
			title: "Step 11 - Create First Rule",
			content: "Good, now lets create our first rule.",
			placement: 'top',
			reflex: true,
		  },
		  {
			element: ".conditional_logic_wrapper",
			title: "Step 11 - Rule 1",
			content: "For this rule we want to show the <strong>Email</strong> field only when the <strong>Contact Method</strong> field's selected value is equal to the value <strong>Email</strong>",
			placement: 'left',
			template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>Create Rule 1 <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		  },
		  {
			element: ".set_rules .new_rule:first-child select.cl_field",
			title: "Step 11 - Rule trigger field",
			content: "Select <strong>Contact Method</strong> form the list",
			placement: 'top',
		  },
		  {
			element: ".set_rules .new_rule:first-child select[name='field_condition']",
			title: "Step 11 - Trigger field Condition",
			content: "Select <strong>Equal To</strong>",
			placement: 'top',
		  },
		  {
			element: ".set_rules .new_rule:first-child input[name='conditional_value']",
			title: "Step 11 - Trigger field value",
			content: "Enter <strong>Email</strong><br><br>Note: Field values are case sensitive!",
			placement: 'top',
		  },
		  
		  {
			element: ".set_rules .new_rule:first-child select[name='the_action']",
			title: "Step 11 - Action to Take",
			content: "Select <strong>Show</strong>. <br><br>Note that if the condition is false, in this case if the selected value of the <strong>Contact Method</strong> field is not equal to <strong>Email</strong> then this action will be automatically reversed. Meaning a <strong>Shown</strong> field will become <strong>Hidden</strong>, an <strong>Enabled</strong> field will become <strong>Disabled</strong> and vice versa.",
			placement: 'left',
		  },
		  {
			element: ".set_rules .new_rule:first-child select[name='cla_field']",
			title: "Step 11 - Apply action to field",
			content: "Select <strong>Email</strong> under text fields.",
			placement: 'top',
		  },
		  
//CL - CREATE RULE 2		  
		  {
			element: ".add_new_rule.cl-tool-btn",
			title: "Step 12 - Create Second Rule",
			content: "Well done, now lets create a second rule.",
			placement: 'top',
			reflex: true,
		  },
		  {
			element: ".conditional_logic_wrapper",
			title: "Step 12 - Rule 2",
			content: "For this rule we want to show the <strong>Phone</strong> field only when the <strong>Contact Method</strong> field's selected value is equal to the value <strong>Phone</strong>",
			placement: 'left',
			template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>Create Rule 2 <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		  },
		  {
			element: ".set_rules .new_rule:nth-child(2) select.cl_field",
			title: "Step 12 - Rule trigger field",
			content: "Select <strong>Contact Method</strong> form the list",
			placement: 'top',
		  },
		  {
			element: ".set_rules .new_rule:nth-child(2) select[name='field_condition']",
			title: "Step 12 - Trigger field Condition",
			content: "Select <strong>Equal To</strong>",
			placement: 'top',
		  },
		  {
			element: ".set_rules .new_rule:nth-child(2) input[name='conditional_value']",
			title: "Step 12 - Trigger field value",
			content: "Enter <strong>Phone</strong><br><br>Note: Field values are case sensitive!",
			placement: 'top',
		  },
		  
		  {
			element: ".set_rules .new_rule:nth-child(2) select[name='the_action']",
			title: "Step 12 - Action to Take",
			content: "Select <strong>Show</strong>. <br><br>Note that if the condition is false, in this case if the selected value of the <strong>Contact Method</strong> field is not equal to <strong>Phone</strong> then this action will be automatically reversed. Meaning a <strong>Shown</strong> field will become <strong>Hidden</strong>, an <strong>Enabled</strong> field will become <strong>Disabled</strong> and vice versa.",
			placement: 'left',
		  },
		  {
			element: ".set_rules .new_rule:nth-child(2) select[name='cla_field']",
			title: "Step 12 - Apply action to field",
			content: "Select <strong>Phone Number</strong> under text fields.",
			placement: 'top',
		  },
		  {
			orphan: true,
			title: "Logic Setup Complete!",
			content: "Thats it! Now lets finish up the form with a Query Field and a Submit Button.",
			template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			placement: 'bottom',
		  },
		  {
			element: ".tool-section .form_field.Query",
			title: "Step 13",
			content: "Add a Query Field so the user can supply some information to you...",
			placement: 'right',
			reflex: true,
		  },
		  {
			element: ".tool-section .form_field.the_submit",
			title: "Step 14",
			content: "...and now add a Submit button so the user can send the form.",
			placement: 'right',
			reflex: true,
		  },
		  {
			element: ".save_nex_form.prime_save",
			title: "Step 15",
			content: "Lastly, save or <a href='#' class='preview-form'>Preview</a> the Form.",
			placement: 'bottom',
			template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			reflex: true,
		  },
		  {
			orphan: true,
			title: "Tutorial 2 - Complete!",
			content: "<span class='fa fa-check'></span><strong>Well done!</strong></br>You have just created your first form that uses Conditional Logic!<a href='#' class='start-button start-tutorial restart-tutorial' data-tutorial='tut-2' data-role='' style='display:block;'><span class='start-border'>restart</span><span class='start-border-2 pulsate_1'></span></a><div class='more_tuts'><h5>Also See:</h5><a href='#' class='tut-1'>Building a Simple Contact Form</a><a href='#' class='tut-2'>Using Conditional Logic</a><a href='#' class='tut-3'>Using Math Logic</a><a href='#' class='tut-4'>Creating a Multi-Step Form</a></div>",
			template: "<div class='popover tour tutorial-last-step'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			placement: 'bottom',
		  },
		]});
		
	jQuery(document).on('click','a.tut-2',
		function()
			{
			end_nf_tours();
			jQuery('a.canvas_view').trigger('click');
			tutorial_2.init();
			tutorial_2.start();
			tutorial_2.restart();
			jQuery('#nex-forms').addClass('tut-2').addClass('running-tutorial');
			}
		);
	
	jQuery(document).on('keyup','.tut-2 #set_label',
		function()
			{
			if(jQuery(this).val()=='Contact Method')
				tutorial_2.goTo(7) 
			}
		);
	jQuery(document).on('click','.tut-2 li#input-settings',
		function()
			{
			tutorial_2.goTo(8);
			}
		);
		
	jQuery(document).on('keyup','.tut-2 #set_radios',
		function()
			{
			if(strstr(jQuery(this).val(),'Email') && strstr(jQuery(this).val(),'Phone'))
				tutorial_2.goTo(9) 
			}
		);
//RULE 1 STEPPING
	jQuery(document).on('change','.tut-2 .set_rules .new_rule:first-child select.cl_field',
		function()
			{
			var selected_value = jQuery(this).val();
			var get_field = selected_value.split('##');
			if(get_field[1]=='contact_method')
				tutorial_2.goTo(14) 
			}
		);
	jQuery(document).on('change','.tut-2 .set_rules .new_rule:first-child select[name="field_condition"]',
		function()
			{
			if(jQuery(this).val()=='equal_to')
				tutorial_2.goTo(15) 
			}
		);
	jQuery(document).on('keyup','.tut-2 .set_rules .new_rule:first-child input[name="conditional_value"]',
		function()
			{
			if(jQuery(this).val()=='Email')
				tutorial_2.goTo(16) 
			}
		);
	jQuery(document).on('change','.tut-2 .set_rules .new_rule:first-child select[name="the_action"]',
		function()
			{
			if(jQuery(this).val()=='show')
				tutorial_2.goTo(17) 
			}
		);
	jQuery(document).on('change','.tut-2 .set_rules .new_rule:first-child select[name="cla_field"]',
		function()
			{
			var selected_value = jQuery(this).val();
			var get_field = selected_value.split('##');
			if(get_field[1]=='email')
				tutorial_2.goTo(18) 
			}
		);
		
//RULE 2 STEPPING
	jQuery(document).on('change','.set_rules .new_rule:nth-child(2) select.cl_field',
		function()
			{
			var selected_value = jQuery(this).val();
			var get_field = selected_value.split('##');
			if(get_field[1]=='contact_method')
				tutorial_2.goTo(21) 
			}
		);
	jQuery(document).on('change','.tut-2 .set_rules .new_rule:nth-child(2) select[name="field_condition"]',
		function()
			{
			if(jQuery(this).val()=='equal_to')
				tutorial_2.goTo(22) 
			}
		);
	jQuery(document).on('keyup','.tut-2 .set_rules .new_rule:nth-child(2) input[name="conditional_value"]',
		function()
			{
			if(jQuery(this).val()=='Phone')
				tutorial_2.goTo(23) 
			}
		);
	jQuery(document).on('change','.tut-2 .set_rules .new_rule:nth-child(2) select[name="the_action"]',
		function()
			{
			if(jQuery(this).val()=='show')
				tutorial_2.goTo(24) 
			}
		);
	jQuery(document).on('change','.tut-2 .set_rules .new_rule:nth-child(2) select[name="cla_field"]',
		function()
			{
			var selected_value = jQuery(this).val();
			var get_field = selected_value.split('##');
			if(get_field[1]=='phone_number')
				tutorial_2.goTo(25) 
			}
		);
	
	




/* TUT 3- USING MATH LOGIC */		
		
		var tutorial_3 = new Tour({
		  name: "tut-3",
		  onStart: function (tour) {jQuery('#nex-forms').addClass('tut-3')},
 		  onEnd: function (tour) {jQuery('#nex-forms').removeClass('tut-3').removeClass('running-tutorial')},
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			orphan: true,
			title: "Tutorial 3 - Using Math Logic",
			content: "<div class='new_tut'>In this tutorial you will learn how to use Math Logic.</div><div class='tut_clear_form' style='display:none;'><span class='fa fa-warning pulsate_2'></span>For this tutorial to work you need to clear your form canvas from all fields or create a new blank form and re-start this tutorial.<br></br><a href='#' class='btn btn-default clear_form' data-tutorial='tut-3'>Clear Now</a> <a href='#' class='btn btn-default create_new_form'>New Form</a></div>",
			template: "<div class='popover tour tutorial-step-1 animated fadeInUp'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><a href='#' class='start-button start-tutorial' data-role='next' style='display:block;'><span class='start-border'>Start</span><span class='start-border-2 pulsate_1'></a><button class='btn btn-default hidden start-tut' data-role='next'>Start Tutorial <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			placement: 'bottom',
			onShow: function(){ nf_check_form_canvas(); },
		  },
		  
		  {
			element: ".tool-section .form_field.radio-group",
			title: "Step 1",
			content: "We will start by adding a Radio Button field for <strong>Products</strong>.",
			placement: 'right',
			reflex: true,
			onNext: function (tour) {
				jQuery(".tool-section").animate(
						{
						scrollTop:400
						},20
					);
				}
		  },
		  {
			element: ".tool-section .form_field.touch_spinner",
			title: "Step 2",
			content: "Now lets add a spinner field for the Quantity.",
			placement: 'right',
			reflex: true,
			
		  },
		  {
			element: ".canvas-tools .form_field.math_logic",
			title: "Step 3",
			content: "Finally, add a math field.",
			placement: 'bottom',
			reflex: true,
		  },
		  {
			element: ".nex-forms-container .form_field.radio-group",
			title: "Step 4",
			content: "Good, now lets edit the Radio Button field.",
			placement: 'bottom',
			reflex: true,
			onShow: function (tour) {if(current_field){ jQuery('li#label-settings a').trigger('click') } }
		  },
		  
		  {
			element: ".field-settings-column #set_label",
			title: "Step 5",
			content: "Change the <strong>Label Text</strong> to<br></br><strong>Products</strong><br><br>Note: This label can be anything but for this tutorial please follow the instructions.",
			placement: 'left',
		  },
		  {
			element: "li#input-settings",
			title: "Step 6",
			content: "Now we want to change <strong>Products</strong> selection radios so we go to the Input Settings for the field.",
			placement: 'top',
		  },
		  {
			element: ".field-settings-column #set_radios",
			title: "Step 7",
			content: "Change the radio buttons to:<br><br><strong>50==Product 1<br>100==Product 2<br>150==Product 3<br>200==Product 4</strong><br><br><strong>IMPORTANT!</strong> To have different values to labels you use a double equal ==<br><br>So its <strong>VALUE==LABEL</strong><br><br>Math logic with radios, checks and selects only work with numeric values.<br><br>Note: You can have any number of buttons with any labels and values but for this tutorial please follow the instructions.",
			placement: 'left',

		  },
		  {
			element: ".nex-forms-container .form_field.touch_spinner",
			title: "Step 8",
			content: "Good, now lets edit the Spinner field.",
			placement: 'bottom',
			reflex: true,
			onShow: function (tour) {if(current_field){ jQuery('li#label-settings a').trigger('click') } }
			
		  },
		  {
			element: ".field-settings-column #set_label",
			title: "Step 9",
			content: "Change the <strong>Label Text</strong> to<br></br><strong>Quantity</strong><br><br>Note: This label can be anything but for this tutorial please follow the instructions.",
			placement: 'left',

		  },
		  {
			element: ".nex-forms-container .form_field.math_logic",
			title: "Step 10",
			content: "Now that your fields are all setup we can do the Math Logic bit.<br><br>Edit the Math Logic Field.",
			placement: 'bottom',
			reflex: true,
		  },
		  {
			element: ".field-settings-column #set_heading_text",
			title: "Step 11",
			content: "Here you can use any symbols or words, etc, but you must make sure to leave in (and not change) the <strong>{math_result}</strong> placeholder tag. If this tag is not in this string or the tag is changed then the math will not work! <br><br> Lets Change it to<br><br><strong>Total = ${math_result}</strong>",
			placement: 'left',
		  },
		  {
			element: ".field-settings-column #math-settings",
			title: "Step 12",
			content: "Now we can do the equation and need to click on the Math Logic Settings tab.",
			placement: 'top',
		  },
		  {
			element: ".field-settings-column select[name='math_fields']",
			title: "Step 13",
			content: "We will be multiplying the selected <strong>Products</strong> field value with the <strong>Quantity</strong> field's value.<br><br>Select <strong>Products</strong> from the dropdown.",
			placement: 'left',
			onShow: function (tour) { current_tut_step = '13'; }		
		  },
		  {
			element: "#set_math_logic_equation",
			title: "Step 14",
			content: "The products field data tag has been added to the equation. Add a <strong>*</strong> (for Multiply) after the products data tag so it will end up to look like <strong>{products}*</strong>",
			placement: 'left',
			onShow: function (tour) { current_tut_step = '14'; }
		  },
		  {
			element: ".field-settings-column select[name='math_fields']",
			title: "Step 15",
			content: "Perfect, now select <strong>Quantity</strong> from the dropdown list.",
			placement: 'left',
			onShow: function (tour) { current_tut_step = '15'; }
		  },
		  {
			element: ".save_nex_form.prime_save",
			title: "Step 16",
			content: "Thats it! Save or <a href='#' class='preview-form'>Preview</a> the Form.",
			placement: 'bottom',
			template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			reflex: true,
		  },
		  {
			orphan: true,
			title: "Tutorial 3 - Complete!",
			content: "<span class='fa fa-check'></span><strong>Well done!</strong></br>You have just created your first form that uses Math Logic!<a href='#' class='start-button start-tutorial restart-tutorial' data-tutorial='tut-3' data-role='' style='display:block;'><span class='start-border'>restart</span><span class='start-border-2 pulsate_1'></span></a><div class='more_tuts'><h5>Also See:</h5><a href='#' class='tut-1'>Building a Simple Contact Form</a><a href='#' class='tut-2'>Using Conditional Logic</a><a href='#' class='tut-3'>Using Math Logic</a><a href='#' class='tut-4'>Creating a Multi-Step Form</a></div>",
			template: "<div class='popover tour tutorial-last-step'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			placement: 'bottom',
		  },
		]});
		
	jQuery(document).on('click','a.tut-3',
		function()
			{
			end_nf_tours();
			jQuery('a.canvas_view').trigger('click');
			tutorial_3.init();
			tutorial_3.start();
			tutorial_3.restart();
			tutorial_3.goTo(0) ;
			jQuery('#nex-forms').addClass('tut-3').addClass('running-tutorial');
			}
		);
	jQuery(document).on('keyup','.tut-3 #set_label',
		function()
			{
			if(jQuery(this).val()=='Products' && current_field.hasClass('radio-group'))
				tutorial_3.goTo(6) 
			if(jQuery(this).val()=='Quantity' && current_field.hasClass('touch_spinner'))
				tutorial_3.goTo(10)	
			}
		);
	jQuery(document).on('click','.tut-3 li#input-settings',
		function()
			{
			if(current_field.hasClass('radio-group'))
				tutorial_3.goTo(7);
			if(current_field.hasClass('math_logic'))
				tutorial_3.goTo(11);
			}
		);
		
	jQuery(document).on('keyup','.tut-3 #set_radios',
		function()
			{
			if(strstr(jQuery(this).val(),'50==Product 1') && strstr(jQuery(this).val(),'100==Product 2'))
				{
				tutorial_3.goTo(8) 
				jQuery('.tut-3 #set_radios').trigger('blur');
				jQuery('.tut-3 #set_radios').trigger('change');
				}
			}
		);
	jQuery(document).on('keyup','.tut-3 #set_heading_text',
		function()
			{
			if(jQuery(this).val()=='Total = ${math_result}')
				tutorial_3.goTo(12) 
			}
		);
	jQuery(document).on('click','.tut-3 li#math-settings',
		function()
			{
			tutorial_3.goTo(13) 
			}
		);
	
	
	jQuery(document).on('change','.tut-3 select[name="math_fields"]',
		function()
			{
			if(jQuery(this).val()=='{products}' && current_tut_step == '13')
				tutorial_3.goTo(14)
			if(jQuery(this).val()=='{quantity}' && current_tut_step == '15')
				tutorial_3.goTo(16) 
			}
		);
	
	jQuery(document).on('keyup','.tut-3 #set_math_logic_equation',
		function()
			{
			if(jQuery(this).val()=='{products}*' && current_tut_step == '14')
				{
				tutorial_3.goTo(15)
				jQuery('.tut-3 #set_math_logic_equation').trigger('blur');
				jQuery('.tut-3 #set_math_logic_equation').trigger('change');
				}
			}
		);
	


/* TUT 4- CREATING MULISTEPS */
  		  var tutorial_4 = new Tour({
		  name: "tut-4",
		  onStart: function (tour) {jQuery('#nex-forms').addClass('tut-4')},
 		  onEnd: function (tour) {jQuery('#nex-forms').removeClass('tut-4').removeClass('running-tutorial')},
		  template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		
		  steps: [
		  {
			orphan: true,
			title: "Tutorial 4 - Creating Multi-Steps",
			content: "<div class='new_tut'>In this tutorial you will learn how to create a Multi-Step Form. We will split up a contact form into 3 simple steps.</div><div class='tut_clear_form' style='display:none;'><span class='fa fa-warning pulsate_2'></span>For this tutorial to work you need to clear your form canvas from all fields or create a new blank form and re-start this tutorial.<br></br><a href='#' class='btn btn-default clear_form' data-tutorial='tut-4'>Clear Now</a> <a href='#' class='btn btn-default create_new_form'>New Form</a></div>",
			template: "<div class='popover tour tutorial-step-1 animated fadeInUp'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><a href='#' class='start-button start-tutorial' data-role='next' style='display:block;'><span class='start-border'>Start</span><span class='start-border-2 pulsate_1'></a><button class='btn btn-default hidden start-tut' data-role='next'>Start Tutorial <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			placement: 'bottom',
			onShow: function(){ nf_check_form_canvas(); },
		  },
		  {
			element: ".canvas-tools .form_field.step",
			title: "Create Step 1",
			content: "Click on Create Multi-Step",
			placement: 'bottom',
			onShow: function (tour) { current_tut_step = '1'; }
		  },
		  {
			orphan: true,
			title: "Multi-Step 1 Created",
			content: "Your first step is ready and you can now add field(s) into it.<br><br>Notice that your <strong>Next</strong> and <strong>Back</strong> step buttons are automatically added when creating a new step.<br></br>Also note: While you are actively editing a single step the fields will automatically be added to the step.",
			placement: 'bottom',
			template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
		  },
		  {
			element: ".nf_multi_step_1 input[name='multi_step_name']",
			title: "Name Step 1",
			content: "Lets call this step:<br><br><strong>Personal Details</strong>",
			placement: 'bottom',
		  },
		  {
			element: ".tool-section .form_field.name",
			title: "Add a field to Step 1",
			content: "Lets add a Name Field...",
			placement: 'right',
			reflex: true,
		  },
		  {
			element: ".tool-section .form_field.surname",
			title: "Add another field to Step 1",
			content: "...and a Surname (last name) Field",
			placement: 'right',
			reflex: true,
		  },
		  
		  {
			element: ".nf_step_breadcrumb .new_step",
			title: "Create Step 2",
			content: "Well done! Your first step is complete.<br><br>Now add a new step by clicking here on this <strong><span class='fa fa-plus'></span></strong>",
			placement: 'right',
			reflex: true,
			onShow: function (tour) { current_tut_step = '5'; }
		  },
		  {
			element: ".nf_multi_step_2 input[name='multi_step_name']",
			title: "Name Step 2",
			content: "Lets call this step:<br><br><strong>Contact Info</strong>",
			placement: 'bottom',
		  },
		  {
			element: ".tool-section .form_field.email",
			title: "Add a field to Step 2",
			content: "In this step add an Email field...",
			placement: 'right',
			reflex: true,
		  },
		  {
			element: ".tool-section .form_field.phone_number",
			title: "Add another field to Step 2",
			content: "...and a Phone field",
			placement: 'right',
			reflex: true,
		  },
		  
		  {
			element: ".nf_step_breadcrumb .new_step",
			title: "Create Step 3",
			content: "Step 2 done! Add a 3rd step.",
			placement: 'right',
			reflex: true,
			onShow: function (tour) { current_tut_step = '9'; }
		  },
		  {
			element: ".nf_multi_step_3 input[name='multi_step_name']",
			title: "Name Step 3",
			content: "Lets call this step:<br><br><strong>Query</strong>",
			placement: 'bottom',
		  },
		  {
			element: ".tool-section .form_field.Query",
			title: "Add a Field to Step 3",
			content: "Lets add a Query field for the last step.",
			placement: 'right',
			reflex: true,
		  },
		  {
			element: ".nf_multi_step_3 .nex_prev_steps .grid_input_holder:last-child .button_fields",
			title: "Submit on last Step",
			content: "This is the last step so we want to change the <strong>Next Button</strong> to a <strong>Submit Button</strong>.<br><br>Edit this button.",
			placement: 'right',
		  },
		  {
			element: ".field-settings-column #set_button_val",
			title: "Edit the button",
			content: "Change the Button Text to:<br><br><strong>Submit</strong><br><br>Note: Button text can be anything but for this tutorial please follow the instructions.",
			placement: 'left',
		  },
		  {
			element: ".button-settings .button-type .do-submit",
			title: "Change to Submit",
			content: "Change the Button Type from Next to Submit.",
			placement: 'bottom',
			reflex: true,
		  },
		  
		  {
			element: ".save_nex_form.prime_save",
			title: "Save or Preview",
			content: "Thats it! Save or <a href='#' class='preview-form'>Preview</a> the Form.",
			placement: 'bottom',
			template: "<div class='popover tour'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default tour-step-back' data-role='prev'><span class='fa fa-arrow-left'></span> PREV </button><button class='btn btn-default tour-step-next' data-role='next'>NEXT <span class='fa fa-arrow-right'></span></button></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			reflex: true,
		  },
		  
		  {
			orphan: true,
			title: "Tutorial 4 - Complete!",
			content: "<span class='fa fa-check'></span><strong>Well done!</strong></br>You have just created your first Multi-step Form!<a href='#' class='start-button start-tutorial restart-tutorial' data-tutorial='tut-4' data-role='' style='display:block;'><span class='start-border'>restart</span><span class='start-border-2 pulsate_1'></span></a><div class='more_tuts'><h5>Also See:</h5><a href='#' class='tut-1'>Building a Simple Contact Form</a><a href='#' class='tut-2'>Using Conditional Logic</a><a href='#' class='tut-3'>Using Math Logic</a><a href='#' class='tut-4'>Creating a Multi-Step Form</a></div>",
			template: "<div class='popover tour tutorial-last-step'><div class='popover-arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'></div><button class='end-tour' data-role='end'><span class='fa fa-close'></span></button></div>",
			placement: 'bottom',
		  },
		  
		  
		]});
		
	jQuery(document).on('click','a.tut-4',
		function()
			{
			end_nf_tours();
			jQuery('a.canvas_view').trigger('click');
			tutorial_4.init();
			tutorial_4.start();
			tutorial_4.restart();
			tutorial_4.goTo(0) ;
			jQuery('#nex-forms').addClass('tut-4').addClass('running-tutorial');
			}
		);
	
	jQuery(document).on('click','.tut-4 .tool-section.multi-step-fields .step',
		function()
			{
			
			if(current_tut_step=='1')
				setTimeout(function(){tutorial_4.goTo(2); jQuery('.step').removeClass('tour-tut-4-element');},200); 
			if(current_tut_step=='5')
				setTimeout(function(){tutorial_4.goTo(7); jQuery('.step').removeClass('tour-tut-4-element');},200); 
			if(current_tut_step=='9')
				setTimeout(function(){tutorial_4.goTo(11); jQuery('.step').removeClass('tour-tut-4-element');},200); 
			}
		);
	
	jQuery(document).on('keyup',".tut-4 .nf_multi_step_1 input[name='multi_step_name']",
		function()
			{
			if(jQuery(this).val()=='Personal Details')
				tutorial_4.goTo(4)
			}
		);
	jQuery(document).on('keyup',".tut-4 .nf_multi_step_2 input[name='multi_step_name']",
		function()
			{
			if(jQuery(this).val()=='Contact Info')
				tutorial_4.goTo(8)
			}
		);
	jQuery(document).on('keyup',".tut-4 .nf_multi_step_3 input[name='multi_step_name']",
		function()
			{
			if(jQuery(this).val()=='Query')
				tutorial_4.goTo(12)
			}
		);
	jQuery(document).on('click','.tut-4 .nf_multi_step_3 .nex_prev_steps .grid_input_holder:last-child .button_fields',
		function()
			{
			setTimeout(function(){tutorial_4.goTo(14);},300); 
			}
		);
	jQuery(document).on('keyup',".tut-4 #set_button_val",
		function()
			{
			if(jQuery(this).val()=='Submit')
				tutorial_4.goTo(15)
			}
		);	
	}
);


