<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header();

/* Start the Loop */
while ( have_posts() ) :
	the_post();
	//get_template_part( 'template-parts/content/content-page' );
	if(is_cart() || is_checkout()){ 
		get_template_part( 'template-parts/content/content-page' );
	 } 
	
	/* flexible content Start */
	   $pageId = get_the_ID();
	   require_once(__DIR__ . "/flexible-content.php");
	
	// If comments are open or there is at least one comment, load up the comment template.
	/*if ( comments_open() || get_comments_number() ) {
		comments_template();
	}*/
endwhile; // End of the loop.

get_footer(); 
