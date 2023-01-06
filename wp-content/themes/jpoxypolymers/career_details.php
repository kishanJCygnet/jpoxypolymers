<?php
get_header();
if (have_posts()) :
    while (have_posts()) : the_post(); ?>
        <div class="case-study">
            <section class="bg-light pt-0">
				<div class="blog-detail">                        
					<div class="section-container-padding pb-0">
						<div class="single-container">
							<div class="blog-top-section">
								<div class="container">
									<div class="head-title-content">
										<div class="col-left">											
											<div class="blog-title">
												<h1><?php the_title(); ?></h1>
											</div>
											<div>
												<div class="author-share-block ">
													<ul class="author-block mb-0 list-unstyled d-flex flex-wrap">
														<?php if (get_field('author_name')) : ?>
														<li><i class="fas fa-comments"></i> By <?php echo the_field('author_name'); ?></li>
														<?php endif; ?>
														<li>
														<i class="fas fa-calendar-alt"></i>  <?php the_date(); ?>
														</li>
														<li>
														<i class="fas fa-clock"></i> <?php echo do_shortcode('[rt_reading_time label="Reading Time:" postfix="minutes" postfix_singular="minute"]'); ?>
														</li>
													</ul>
												</div>                                       
											</div>
										</div>
										<!--<div class="col-right">
											<div class="share-social-media">
												<span>Share </span>
												<a href="javascript:void(0)" title="Share" class="share-btn"><i class="bi bi-share" aria-hidden="true"></i></a>
												<?php echo sharethis_inline_buttons(); ?>
												<a href="#newsletter" class="btn"><span class="text">Subscribe</span><span class="effect"></span></a>
											</div>
									   </div>-->                           
									</div> 
								</div>
							</div>
							<div class="container section-container-padding pt-0 pb-0">
								<div class="article-container">
									<div class="container-with-sidebar">
										<article class="blog-contents">
											<?php   /* grab the url for the full size featured image */
												$featured_img_url = get_the_post_thumbnail_url(get_the_ID(), '1920w');
												if ($featured_img_url) : ?>
													<div class="blog-banner cover-bg lazyload" style="background-image: url('<?php echo $featured_img_url; ?>')"></div>
												<?php endif; ?>
											<?php the_content(); ?>
										</article>	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </section>
            <section>
                <div class="container">
                        <?php $category = @get_the_terms($post->ID, 'press_release_categories');
                        $relatedPost = get_posts(
                            array(
                                'numberposts' => 3,
								'post_type' => 'press-release',
                                'post__not_in' => array($post->ID),
								'tax_query' => array(
									array(
									  'taxonomy' => 'press_release_categories',
									  'field' => 'id',
									  'terms' => $category[0]->term_id
									)
								  )
                            )
                        );
                        
                        if (count($relatedPost) > 0) : ?>
                            <div class="title-heading">
								<h2>Related Press Release
									<span class="heading-border"></span>
								</h2>
        					</div>
                            <div class="insights-section mt-5">
							   <div class="insights-inner row mb-n4">
								<?php 
									foreach ($relatedPost as $post) {
										setup_postdata($post); 
										$category_detail = get_the_terms($post->ID, 'press_release_categories');
										$thumb = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'medium_large'); ?>
										 <div class="insights-card card wow fadeInUp">
											<div class="insights-content card-body">
												<div class="client-details" <?php if ((has_post_thumbnail( $post->ID ) )) { ?>style="background-image:url('<?php echo $thumb[0]; ?>')" <?php } ?> >
													<span class="badge"><?php echo $category_detail[0]->name; ?></span>
												</div>
												<div class="insight-in-content">
													<span class="post-date-cls"><?php echo get_the_date( 'd F, Y', $post->ID ); ?></span>
													<h2 class="slider-title">
														<a href="<?php the_permalink(); ?>"><?php echo wp_trim_words(get_the_title(), 10, '...'); ?></a>										
													</h2>
													<div class="short-decoration">
													   <p class="p2">
													   <?php
														if (get_field('short_description', $post->ID)) {
															echo wp_trim_words( the_field('short_description', $post->ID), 20 );
														}
														?>
														<p>
													</div>
													<div class="action">
														<a href="<?php the_permalink(); ?>">Read More <svg fill="none" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m13.7071 4.29289c-.3905-.39052-1.0237-.39052-1.4142 0-.3905.39053-.3905 1.02369 0 1.41422l5.2929 5.29289h-13.5858c-.55228 0-1 .4477-1 1s.44772 1 1 1h13.5858l-5.2929 5.2929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l7-7c.3905-.3905.3905-1.0237 0-1.4142z" fill="rgb(0,0,0)" fill-rule="evenodd"/></svg></a>
													</div>
												</div>
											</div>
										</div>
									<?php }
									wp_reset_postdata(); ?>
								</div>
                            </div>
                           <?php endif; ?>
                </div>
            </section>
        </div>
<?php endwhile;
endif;
get_footer(); ?>