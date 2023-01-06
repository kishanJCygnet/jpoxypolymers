<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */
?>	
	<?php $post_slug = $post->post_name;
	if($post_slug != 'community-version' && $post_slug != 'download-enterprise' && $post_slug != 'sign-up' && $post_slug != 'thank-you-for-contacting-us' && $post_slug != 'thank-you-for-signing-up' && $post_slug != 'thank-you-for-your-interest' && $post_slug != 'thank-you-for-webinar-registration' && $post_slug != 'thank-you-for-downloading-case-study' && $post_slug != 'thank-you-for-signing-up-community' && $post_slug != 'thank-you-for-signing-up-enterprise' && !is_404() && !is_page_template( 'template_career_details.php')){  ?>				
		<section class="contact-form-content">
			<div class="contact-form"> 
				<div class="container" id="contactus">
						<div class="title-heading">	
							<h2>Get in touch
								<span class="heading-border"></span>
							</h2>
						</div>
						<div class="form-content">
							<?php echo do_shortcode('[contact-form-7 id="172" title="Contact Us"]'); ?>
							<input type="hidden" value="contact_us" id="hd_type">
						</div>
				</div>
			</div>
		</section>
	<?php } ?>
	<?php if(is_page_template( 'template_career_details.php' )){ ?>
		<section class="contact-form-content">
			<div class="contact-form"> 
				<div class="container" id="contactus">
					<div class="title-heading">	
						<h2>Apply Now
							<span class="heading-border"></span>
						</h2>
					</div>
					<div class="form-content">
						<?php echo do_shortcode('[contact-form-7 id="37334" title="Apply Job"]'); ?>
						<input type="hidden" value="contact_us" id="hd_type">
					</div>
				</div>
			</div>
		</section>
	<?php } ?>
	<?php /* Start Footer section dynamic display */
		if (get_field('footer_section_text')){ 	?>
		<section class="footer-section-text-main">
			<div class="container">
				<div class="footer-section-text" >
					<?php echo the_field('footer_section_text'); ?> 
					<?php if (get_field('footer_section_button_title')){ ?>
						<a href="<?php echo the_field('footer_section_button_url'); ?>" class="btn"><?php echo the_field('footer_section_button_title'); ?> </a>
					<?php } ?>
				</div>
			</div>
		</section>
	<?php } 
	/* End Footer section dynamic display */ ?>
	<!-- Footer -->
    <footer class="footer ">
        <div class="footer-container">
			<div class="container">				
				<div class="footer-contents d-flex justify-content-between align-items-center">
					<!-- Footer logo begin -->
					<div class="footer-logo">
						<a href="<?php echo site_url(); ?>" title="Jpoxy Polymers" alt="Jpoxy Polymers">
							<span class="visually-hidden">Jpoxy Polymers</span>
							<img src='<?php echo get_field("footer_logo", "option"); ?>' alt="Jpoxy Polymers">
						</a>
					</div>
					<!-- Footer logo end -->
					<div class="terms-condition">
						<!-- social links begin -->
						<div class="social-media">
							<span class="mb-md-0 fw-medium textPrimery">
								<?php if (get_field('footer_inquiry_email', 'option')) : ?>
									<span class=" textSecondry">Inquiry :
									<a href="mailto:<?php echo the_field('footer_inquiry_email', 'option'); ?>"><?php echo the_field('footer_inquiry_email', 'option'); ?></a></span> 
									
								<?php endif; ?>
								<?php if (get_field('footer_support_email', 'option')) : ?>
									<span class=" textSecondry">Support :<a href="mailto:<?php echo the_field('footer_support_email', 'option'); ?>"><?php echo the_field('footer_support_email', 'option'); ?></a></span> 
									
								<?php endif; ?>
								<?php if (get_field('footer_phone_number', 'option')) : ?>
									<span class=" textSecondry">Phone : <a href="tel:<?php echo the_field('footer_phone_number', 'option'); ?>"><?php echo the_field('footer_phone_number', 'option'); ?></a></span>
								<?php endif; ?>
							</span>
						</div>
						<!-- social links end -->

						<!-- Copyright and footer links begin -->
						<div class="footer-links">
							<address
								class="copyright-text">
								&#169; Copyright <?php echo date('Y'); ?> by <?php echo the_field('copyright_text', 'option'); ?> </address>
							<div class="menu-footer-links-container">
							<?php wp_nav_menu(array(
								'theme_location'  => 'footer_menu',
								'menu_class' => 'footer-links',
								'items_wrap'      => '<ul id="menu-footer-links" class="%2$s">%3$s</ul>',
								'echo'            => true
							)); ?>
							</div>
						</div>
						<!-- Copyright and footer links end -->
					</div>
					<div class="footer-social-icons">
						<!-- Social icon start-->
						<?php if (have_rows('header_icons', 'option')) : ?>
						  <?php while (have_rows('header_icons', 'option')) : the_row(); ?>
							  <a class="so-icon" href="<?php if (get_sub_field('social_link', 'option')) {
										  echo the_sub_field('social_link', 'option');
										} else {
										  echo '#';
										} ?>" <?php if (get_sub_field('social_link_title', 'option')) : ?>title="<?php echo the_sub_field('social_link_title', 'option'); ?>" <?php endif; ?> target="_blank" rel="noopener">
								<?php if (get_sub_field('social_icons', 'option')) : ?>
								  <i class="fab <?php echo the_sub_field('social_icons', 'option'); ?>" aria-hidden="true"></i>
								<?php endif; ?>
							  </a>
						  <?php endwhile; ?>
						<?php endif; ?>			
						<!-- Social icon end -->
					</div>
				</div>
			</div>
        </div>
    </footer>
    <!-- End Footer -->
	
	<?php if ( is_front_page() ) : ?>
	<div class="modal fade" id="videoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
	  <div class="modal-dialog modal-lg">
		<div class="modal-content">
		  <div class="modal-body">
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			<div class="ratio ratio-16x9">								  
			  <iframe src="" allow="autoplay;" allowfullscreen></iframe>
			</div>
		  </div>
		</div>
	  </div>
	</div>
	<script>
	  jQuery(document).ready(function() {
		autoPlayYouTubeModal();
	  });
	  function autoPlayYouTubeModal() {
		  var triggerOpen = jQuery("body").find('[data-tagVideo]');
		  triggerOpen.click(function() {
			var theModal = jQuery(this).data("bs-target"),
			  videoSRC = jQuery(this).attr("data-tagVideo"),
			  videoSRCauto = videoSRC + "?autoplay=1";
			jQuery(theModal + ' iframe').attr('src', videoSRCauto);
			jQuery(theModal + ' button.btn-close').click(function() {
			  jQuery(theModal + ' iframe').attr('src', videoSRC);
			});
		  });
		}
	</script>
	<?php endif; ?>
	
   <!-- js -->
    <script src="<?php echo THEME_PATH; ?>assets/dist/js/jquery-3.6.0.min.js"></script>
    <script src="<?php echo THEME_PATH; ?>assets/dist/js/bootstrap.bundle.js"></script>   
	<script src="<?php echo THEME_PATH; ?>assets/dist/js/owl.carousel.min.js"></script>	
	<script src="<?php echo THEME_PATH; ?>assets/dist/js/wow.min.js"></script>
	<script src="<?php echo THEME_PATH; ?>assets/dist/js/particles.min.js"></script>	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
	<script src="<?php echo THEME_PATH; ?>assets/dist/js/main.js"></script>	
	<script type='text/javascript' id='cygnet-global-js-extra'>
	/* <![CDATA[ */
	var templateUrl = '<?= site_url(); ?>'+'\/wp-admin\/admin-ajax.php';
	var ajaxPath = {"ajaxurl":templateUrl};
	/* ]]> */
	</script>
	<script src="<?php echo THEME_PATH; ?>assets/dist/js/scripts.js"></script>
    <!-- End js -->
	<script>
	jQuery(document).ready(function () {		
		CYGNET.init();
    });
	</script>
	<script>
	  var url = '<?php echo site_url(); ?>';
	  document.addEventListener('wpcf7mailsent', function(e) {
		if (e.detail.contactFormId == 666) {
			location = url + '/thank-you-for-your-interest';
		} else if(e.detail.contactFormId == 172 || e.detail.contactFormId == 30976) {
			location = url + '/thank-you-for-contacting-us';
		} else if(e.detail.contactFormId == 37334) {
			location = url + '/thank-you-for-applying-job';
		}
	  }, false);
	</script>
	
		
<?php wp_footer(); ?>

<ul class="Website-list">
	<li class="nav-item ">
		<a class="nav-link gp-website" href="javascript:void(0);">Group Websites</a> 
		<div class="innerweb-list">
			<h2>Group Websites</h2>
		<?php /* Group website links start */
			if (have_rows('group_websites', 'option')) : ?>
			<ul>
				<?php while (have_rows('group_websites', 'option')) : the_row(); 
						if (get_sub_field('website_url', 'option') && get_sub_field('website_title', 'option')) { ?>
						<li>
							<a href="<?php echo the_sub_field('website_url', 'option'); ?>" title="<?php echo the_sub_field('website_title', 'option'); ?>" ><?php echo the_sub_field('website_title', 'option'); ?></a>
							<?php if (get_sub_field('website_description', 'option')){ ?>
								<span><?php echo the_sub_field('website_description', 'option'); ?></span>
							<?php } ?>
						</li>
						<?php } 
					endwhile; ?>
			</ul>
			<?php endif; 
			/* Group website links end */ ?>	
			</div>
	</li>
</ul>

<div class="modal fade" id="sigrid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
 <a href="#" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
        <div class="text-center">
<div class="brand-vid ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/RCHU_LCn_sg" title="" allowfullscreen=""></iframe>
</div>
</div>
      </div>    
    </div>
  </div>
</div>
</body>
</html>