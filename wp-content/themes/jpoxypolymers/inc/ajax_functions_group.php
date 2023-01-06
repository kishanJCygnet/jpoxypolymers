<?php
/* Common Listing using AJAX */
add_action('wp_ajax_get_casestudy_listing_data', 'get_casestudy_listing_data');
add_action('wp_ajax_nopriv_get_casestudy_listing_data', 'get_casestudy_listing_data');

function get_casestudy_listing_data()
{
  //Declaration of temporary variables
  $type_query = array();
  $date_query = array();
  $industry_query = '';
  $solution_query = '';
  $category_query = '';
  $items_per_page = '';
  $news_category_query = '';

  $current_page = $_REQUEST['current_page'];

  $flag = $_REQUEST['flag'];

  if ($flag == 'casestudy_listing') {
    $post_type = 'case_studies';
    $items_per_page = 6;
    $content_priority = 'content_priority';

    $indusryTermId = $_REQUEST['ind_term_id'];
    if ($indusryTermId) {
      $industry_query = array(
        'taxonomy' => 'industry',
        'field' => 'term_id',
        'terms' => $indusryTermId
      );
    }

    $solutionTermId = $_REQUEST['sol_term_id'];
    if ($solutionTermId) {
      $solution_query = array(
        'taxonomy' => 'solution',
        'field' => 'term_id',
        'terms' => $solutionTermId
      );
    }

    $countryTermId = $_REQUEST['con_term_id'];
    if ($countryTermId) {
      $country_query = array(
        'taxonomy' => 'country',
        'field' => 'term_id',
        'terms' => $countryTermId
      );
    }
  } elseif ($flag == 'blog_listing') {
    $post_type = 'post';
    $items_per_page = 6;
    $content_priority = 'content_priority';

    $categoryId = $_REQUEST['category_id'];
    if ($categoryId) {
      $category_query = array(
        'taxonomy' => 'category',
        'field' => 'term_id',
        'terms' => $categoryId
      );
    }
  } elseif ($flag == 'whitepaper_listing') {
    $post_type = 'whitepapers';
    $items_per_page = 6;
    $content_priority = 'content_priority';
  } elseif ($flag == 'ebook_listing') {
    $post_type = 'ebooks';
    $items_per_page = 6;
    $content_priority = 'content_priority';
  } elseif ($flag == 'webinar_listing') {
    $post_type = 'webinars';
    $items_per_page = 6;
    $content_priority = 'content_priority';
	$meta_key = "status";
	$meta_val = "Past";
	$type_query[] =  array(
          'key'       => $meta_key,
          'value'     => $meta_val,
          'compare'   => '='
        );
  } elseif ($flag == 'ourleaders_listing') {
    $post_type = 'our_leaders';
    $items_per_page = 12;
    $content_priority = 'content_priority';
  } elseif ($flag == 'in_the_news_listing') {
    $post_type = 'in_the_news';
    $items_per_page = 6;
    $content_priority = 'content_priority';
	
	$newscategoryId = $_REQUEST['news_category_id'];
    if ($newscategoryId) {
      $news_category_query = array(
        'taxonomy' => 'news_categories',
        'field' => 'term_id',
        'terms' => $newscategoryId
      );
    }
  }

  //Querying wordpress to fetch all the data conditionally.
  $args = array(
    'post_type'     => $post_type,
    'post_status'   => 'publish',
    'posts_per_page' => $items_per_page,
    'paged'      => $current_page,
    'tax_query' => array(
      'relation' => 'AND',
      $industry_query,
      $solution_query,
      $country_query,
      $category_query,
	  $news_category_query
    ),
    'meta_query' => array(
      'relation' => 'AND',
      /*array(
    		'key' => $content_priority,
    		'value' => 'none',
    		'compare' => '='
    	),*/
      $type_query,
    ),
    'date_query' => $date_query
  );

  $listingObj = new WP_Query($args); ?>
  <?php $i = 0; ?>
  <div class="insights-section row mb-n4">
    <?php if ($listingObj->have_posts()) :  ?>
	<div class="insights-inner">
	<?php
      while ($listingObj->have_posts()) :  $listingObj->the_post();

        // Case Study Listing by AJAX
        if ($flag == 'casestudy_listing') :
          //$terms = @get_the_terms($listingObj->ID, 'solutions');
          ?>
          <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div class="card h-100 wow fadeInUp" data-wow-delay="<?php echo $s; ?>s" data-wow-offset="30">
              <div class="card-image-box">
                <?php if (has_post_thumbnail($post->ID)) : ?>
                  <?php $caseImage = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'medium_large'); ?>
                  <div class="card-image cover-bg" style="background-image: url('<?php echo $caseImage[0]; ?>');"></div>
                <?php endif; ?>
              </div>
              <div class="card-body">
                <?php if($terms) : ?>
                <p>
                  <span class="btn btn-sm btn-outline-primary btn-muted px-3 case-tag">
                    <?php echo $terms[0]->name; ?>
                  </span>
                </p>
                <?php endif; ?>

                <?php if (get_the_title()) : ?>
                  <!--<h5 class="card-title"><a href="<?php echo the_field('pdf_link'); ?>" target="_blank"><?php echo wp_trim_words(get_the_title(), 10, '...'); ?></a></h5>-->
                  <h5 class="card-title"><a href="<?php echo the_permalink(); ?>"><?php echo wp_trim_words(get_the_title(), 10, '...'); ?></a></h5>
                <?php endif; ?>

                <?php
                $caseContent = get_field('short_description', $post->ID);
                if ($caseContent) : ?>
                  <p class="card-text"><?php echo wp_trim_words($caseContent, 30, '...'); ?></p>
                <?php endif; ?>
              </div>

              <?php /*if (get_field('pdf_link')) : ?>
                <div class="card-footer bg-transparent border-top-0">
                  <a href="<?php echo the_field('pdf_link'); ?>" class="read-more-link" title="Read Full Story" target="_blank">Read Full Story <img src="<?php echo THEME_PATH; ?>assets/images/Iconfeather-arrow-right.svg" alt="navigation right" /></a>
                </div>
              <?php endif; */ ?>
				<div class="card-footer bg-transparent border-top-0">
					<a href="<?php the_permalink(); ?>" class="read-more-link" title="Read Full Story">Read Full Story <img src="<?php echo THEME_PATH; ?>assets/images/Iconfeather-arrow-right.svg" alt="navigation right" /></a>
			    </div>
            </div>
          </div>

        <?php
        // Blog Listing by AJAX
        elseif ($flag == 'blog_listing') :
          $category = @get_the_terms($listingObj->ID, 'category');  ?>
          <div class="col-sm-6 col-lg-4 mb-4">
            <div class="card h-100 wow fadeInUp" data-wow-delay="<?php echo $s; ?>s" data-wow-offset="30">
              <div class="card-image-box">
                <?php if ($category[0]->name) : ?>
                  <div class="card-image-tag">
                    <span class="btn btn-sm btn-lightest-blue btn-muted px-3 case-tag"><?php echo $category[0]->name; ?></span>
                  </div>
                <?php endif; ?>
                <?php if (has_post_thumbnail($post->ID)) : ?>
                  <?php $caseImage = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'medium_large'); ?>
                  <div class="card-image cover-bg" loading="lazy" style="background-image: url('<?php echo $caseImage[0]; ?>');"></div>
                <?php endif; ?>
              </div>
              <div class="card-body">
                <?php if (get_the_title()) : ?>
                  <h5 class="card-title">
                    <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                      <?php echo wp_trim_words(get_the_title(), 10, '...'); ?>
                    </a>
                  </h5>
                <?php endif; ?>
                <?php
                $blogContent = get_field('short_description', $post->ID);
                if ($blogContent) : ?>
                  <p class="card-text"><?php echo wp_trim_words($blogContent, 30, '...'); ?></p>
                <?php endif; ?>
              </div>
              <div class="card-footer bg-transparent border-top-0">
                <a href="<?php the_permalink(); ?>" class="read-more-link" title="Know More">Read More <img src="<?php echo THEME_PATH; ?>assets/images/Iconfeather-arrow-right.svg" alt="navigation right" /></a>
              </div>
            </div>
          </div>
        <?php
        // White Paper Listing by AJAX
        elseif ($flag == 'whitepaper_listing') : ?>
          <div class="col-sm-6 col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-image-box">
                <!-- <div class="card-image-tag">
                  <span class="btn btn-sm btn-lightest-blue btn-muted px-3 case-tag"><?php //echo 'Technology' ?></span>
                </div> -->
                <?php if (has_post_thumbnail($post->ID)) : ?>
                  <?php $caseImage = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'medium_large'); ?>
                  <div class="card-image cover-bg" style="background-image: url('<?php echo $caseImage[0]; ?>');"></div>
                <?php endif; ?>
              </div>
              <div class="card-body">
                <?php if (get_the_title()) : ?>
                  <h5 class="card-title">
                    <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                      <?php echo wp_trim_words(get_the_title(), 10, '...'); ?>
                    </a>
                  </h5>
                <?php endif; ?>
                <?php
                $whiteContent = get_field('short_description', $post->ID);
                if ($whiteContent) : ?>
                  <p class="card-text"><?php echo wp_trim_words($whiteContent, 30, '...'); ?></p>
                <?php endif; ?>
              </div>
              <div class="card-footer bg-transparent border-top-0 text-end">
                <a href="<?php the_permalink(); ?>" class="read-more-link" title="Know More">Know More<img src="<?php echo THEME_PATH; ?>assets/images/Iconfeather-arrow-right.svg" alt="navigation right" /></a>
              </div>
            </div>
          </div>

        <?php
        // eBooks Listing by AJAX
        elseif ($flag == 'ebook_listing') : ?>
          <div class="col-sm-6 col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-image-box">
                <?php /*
                $ebookCategory = get_the_terms(get_the_ID(), 'ebook_categories');
                if ($ebookCategory[0]->name) : ?>
                  <div class="card-image-tag">
                    <span class="btn btn-sm btn-lightest-blue btn-muted px-3 case-tag"><?php echo $ebookCategory[0]->name; ?></span>
                  </div>
                <?php endif; */ ?>
                
                <?php if (has_post_thumbnail($post->ID)) : ?>
                  <?php $caseImage = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'medium_large'); ?>
                  <div class="card-image cover-bg" style="background-image: url('<?php echo $caseImage[0]; ?>');"></div>
                <?php endif; ?>
              </div>
              <div class="card-body">
                <?php if (get_the_title()) : ?>
                  <h5 class="card-title">
                    <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                      <?php echo wp_trim_words(get_the_title(), 10, '...'); ?>
                    </a>
                  </h5>
                <?php endif; ?>
                <?php
                $ebookContent = get_field('short_description', $post->ID);
                if ($ebookContent) : ?>
                  <p class="card-text"><?php echo wp_trim_words($ebookContent, 30, '...'); ?></p>
                <?php endif; ?>
              </div>
              <div class="card-footer bg-transparent border-top-0 text-end">
                <a href="<?php the_permalink(); ?>" class="read-more-link" title="Know More">Know More<img src="<?php echo THEME_PATH; ?>assets/images/Iconfeather-arrow-right.svg" alt="navigation right" /></a>
              </div>
            </div>
          </div>

        <?php
        // Webinars Listing by AJAX
        elseif ($flag == 'webinar_listing') :
          $category = @get_the_terms($listingObj->ID, 'category'); 
		  $speakerinner = '';
			if (have_rows('webinars_list')) :
				while (have_rows('webinars_list')) : the_row(); 
					if (get_sub_field('speaker_name', $post->ID)) : 
						$speakerinner .= get_sub_field('speaker_name', $post->ID).' | '; 
					endif; 
				endwhile;
			endif;		  
		  ?>
          <div class="col-sm-6 col-lg-4 mb-4">
            <div class="card h-100 wow fadeInUp" data-wow-delay="<?php echo $s; ?>s" data-wow-offset="30">
              <div class="card-image-box">
                <?php if ($category[0]->name) : ?>
                  <div class="card-image-tag">
                    <span class="btn btn-sm btn-lightest-blue btn-muted px-3 case-tag"><?php echo $category[0]->name; ?></span>
                  </div>
                <?php endif; ?>
                <?php if (has_post_thumbnail($post->ID)) : ?>
                  <?php $webinarImage = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'medium_large'); ?>
                  <div class="card-image cover-bg" style="background-image: url('<?php echo $webinarImage[0]; ?>');"></div>
                <?php endif; ?>
              </div>
              <div class="card-body">
                <?php if (get_the_title()) : ?>
                  <h5 class="card-title">
                    <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                      <?php echo wp_trim_words(get_the_title(), 10, '...'); ?>
                    </a>
                  </h5>
                <?php endif; ?>                

                <?php if (get_field('date', $post->ID)) :
				$formated_date_inner = date('jS F Y', strtotime(get_field('date', $post->ID))); ?>
                  <p class="card-text"><span><i class="fas fa-calendar-alt"></i><?php echo $formated_date_inner; ?></span><span class="text-uppercase"><i class="fas fa-clock"></i><?php if (get_field('start_time', $post->ID)) : ?> <?php echo the_field('start_time', $post->ID); ?> <!--To <?php echo the_field('end_time', $post->ID); ?> -->(<?php echo the_field('time_selection', $post->ID); ?>)</span><?php endif; ?></p>
                <?php endif; ?>

                <?php
                if ($speakerinner != '') : ?>
                  <p class="card-text"><img src="<?php echo THEME_PATH; ?>assets/images/employee.svg" alt="navigation right" /> <?php echo rtrim(trim($speakerinner), '|'); ?></p>
                <?php endif; ?>
              </div>
              <div class="card-footer bg-transparent border-top-0">
                <a href="<?php the_permalink(); ?>" class="read-more-link" title="Watch Now">Watch Now <img src="<?php echo THEME_PATH; ?>assets/images/Iconfeather-arrow-right.svg" alt="navigation right" /></a>
              </div>
            </div>
          </div>

         <?php
        // In the News Listing by AJAX
        elseif ($flag == 'in_the_news_listing') : 
			$category = @get_the_terms($listingObj->ID, 'news_categories'); 
			$newsImage = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'medium_large'); ?>
			  <div class="insights-card card wow fadeInUp" data-wow-delay="<?php echo $s; ?>s" data-wow-offset="50">
				<div class="insights-content card-body">
					<div class="client-details" <?php if ((has_post_thumbnail( $post->ID ) )) { ?>style="background-image:url('<?php echo $newsImage[0]; ?>')" <?php } ?> >
						<span class="badge"><?php echo $category[0]->name; ?></span>
					</div>
					<div class="insight-in-content">
						<span class="post-date-cls"><?php echo get_the_date( 'd F, Y', $post->ID ); ?></span>
						<h2 class="slider-title">
							<a href="<?php echo the_field('news_url', $post->ID); ?>" target="_blank"><?php echo wp_trim_words(get_the_title(), 10, '...'); ?></a>										
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
							<a href="<?php echo the_field('news_url', $post->ID); ?>" target="_blank">Read More <svg fill="none" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m13.7071 4.29289c-.3905-.39052-1.0237-.39052-1.4142 0-.3905.39053-.3905 1.02369 0 1.41422l5.2929 5.29289h-13.5858c-.55228 0-1 .4477-1 1s.44772 1 1 1h13.5858l-5.2929 5.2929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l7-7c.3905-.3905.3905-1.0237 0-1.4142z" fill="rgb(0,0,0)" fill-rule="evenodd"/></svg></a>
						</div>
					</div>
				</div>
			  </div>
    <?php endif;
	
		$s = $s + 0.2;
      endwhile; ?>
	  </div>
	  <?php else : ?>
	  <p class="text-center">No Record Found</p>
    <?php endif; ?>
  </div>

  <div class="pagination justify-content-center">
    <?php
    $output = '';
    $total = $listingObj->found_posts;

    if ($current_page > 1) :
      $output .= '<a href="javascript:void(0);" title="Previous" class="pagination-link prev-link" data-page_num = ' . ($current_page - 1) . '><span aria-hidden="true"><i class="bi bi-chevron-left"></i></span></a>';

    endif;

    if ($current_page >= 5) :

      if ($current_page == 1) :
        $output .= '<a href="javascript:void(0);" class="pagination-link current-page" id="pagination_link' . $current_page . '" data-page_num = 1> 1 </a>';

      else :
        $output .= '<a href="javascript:void(0);" class="pagination-link" data-page_num = 1> 1 </a>';
      endif;

      $output .= '<span> .... </span>';

      for ($j = ($current_page - 3); $j < $current_page; $j++) {
        if ($current_page == $j) :
          $output .= '<a href="javascript:void(0);" class="pagination-link current_page" id="pagination_link' . $current_page . '" data-page_num = ' . $j . '>' . $j . '</a>';

        else :
			$output .= '<a href="javascript:void(0);" class="pagination-link" data-page_num = ' . $j . '>' . $j . '</a>';
        endif;
      }

      for ($k = $current_page; $k < ($current_page + 3); $k++) {

        if ($k != (ceil($total / $items_per_page)) && $k != (ceil($total / $items_per_page) + 1)) :
          if ($current_page != ceil($total / $items_per_page)) :
            if ($current_page == $k) :
              $output .= '<a href="javascript:void(0);" class="pagination-link current-page" id="pagination_link' . $current_page . '" data-page_num = ' . $k . '>' . $k . '</a>';

            else :
              $output .= '<a href="javascript:void(0);" class="pagination-link" data-page_num = ' . $k . '>' . $k . '</a>';
            endif;
          endif;
        endif;
      }

      $output .= '<span> .... </span>';

      if ($current_page == ceil($total / $items_per_page)) :
        $output .= '<a href="javascript:void(0);" class="pagination-link current-page" id="pagination_link' . $current_page . '" data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';

      else :
        $output .= '<a href="javascript:void(0);" class="pagination-link" data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';
      endif;

    else :

      for ($i = 1; $i <= ceil($total / $items_per_page); $i++) {
        if ($i > 5) :
          $output .= '<span> .... </span>';
          if ($current_page == ceil($total / $items_per_page)) :
            $output .= '<a href="javascript:void(0);" class="pagination-link current-page" id="pagination_link' . $current_page . '"  data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';

          else :
            $output .= '<a href="javascript:void(0);" class="pagination-link" data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';
          endif;

          break;

        else :
          if ($current_page == $i) :
            $output .= '<a href="javascript:void(0);" class="pagination-link current-page"  id="pagination_link' . $current_page . '" data-page_num = ' . $i . '>' . $i . '</a>';

          else :
            $output .= '<a href="javascript:void(0);" class="pagination-link" data-page_num = ' . $i . '>' . $i . '</a>';
          endif;
        endif;
      }
    endif;

    if (($current_page < ceil($total / $items_per_page)) && ($current_page != ceil($total / $items_per_page))) :
      $output .= '<a href="javascript:void(0);" title="Next" class="pagination-link next-link" data-page_num = ' . ($current_page + 1) . '><span aria-hidden="true"><i class="bi bi-chevron-right"></i></span></a>';
    endif;

	if($total <= 6){
		$output = '';
	}
    echo $output;
    die();
    ?>
  </div>
<?php } 



/* Resources Listing using AJAX */
add_action('wp_ajax_get_resources_listing_data', 'get_resources_listing_data');
add_action('wp_ajax_nopriv_get_resources_listing_data', 'get_resources_listing_data');

function get_resources_listing_data()
{
  //Declaration of temporary variables
  $type_query = array();
  $date_query = array();
  $category_query = '';
  $items_per_page = '';

  $current_page = $_REQUEST['current_page'];
  
  $flag = $_REQUEST['flag'];
  $categoryId = $_REQUEST['category_id'];
  
  if($flag == '' && $categoryId != ''){
	$post_type = array('post','ebooks','case_studies','webinars','whitepapers');
  } else {
	$post_type = $flag;
  }  
  $items_per_page = 6;
  $content_priority = 'content_priority';
  
  if ($categoryId) {
	  $category_query = array(
		'taxonomy' => 'category',
		'field' => 'term_id',
		'terms' => $categoryId //$categoryId    array(50,53,52)
	  );
  }

  //Querying wordpress to fetch all the data conditionally.
  $args = array(
    'post_type'     => $post_type,
    'post_status'   => 'publish',
    'posts_per_page' => $items_per_page,
    'paged'      => $current_page,
	'orderby'   => '_post_type__in',
    'tax_query' => array(
      'relation' => 'OR',
      $category_query
    )/*,
    'meta_query' => array(
      'relation' => 'AND',
      $type_query,
    ),
    'date_query' => $date_query*/
  );

  $listingObj = new WP_Query($args); 
  //echo "Last SQL-Query: {$listingObj->request}";

  $i = 0; ?>
  <div class="insights-section row mb-n4">
    <?php if ($listingObj->have_posts()) :  ?>
	<div class="insights-inner">
		<?php
		  while ($listingObj->have_posts()) :  $listingObj->the_post();
			
			  $category = @get_the_terms($listingObj->ID, 'category');  
			  $post_type = get_post_type_object(get_post_type($listingObj->ID));
			  //echo "<pre>";print_r($post_type);
				if($post_type->labels->singular_name == 'Post'){
					$display_cpt_title = "Blog";
				} else {
					$display_cpt_title = $post_type->labels->singular_name;
				}
				$caseImage = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'medium_large');				
			  ?>
				<div class="insights-card card wow fadeInUp" data-wow-delay="<?php echo $s; ?>s" data-wow-offset="50">
					<div class="insights-content card-body">
						<div class="client-details" <?php if ((has_post_thumbnail( $post->ID ) )) { ?>style="background-image:url('<?php echo $caseImage[0]; ?>')" <?php } ?> >
							<span class="badge"><?php echo $category[0]->name .' / '. $display_cpt_title; ?></span>
						</div>
						<div class="insight-in-content">
							<!--<span class="post-date-cls"><?php echo get_the_date( 'd F, Y', $post->ID ); ?></span>-->
							<h2 class="slider-title">
								<a href="<?php echo the_field('custom_url', $post->ID); ?>" target="_blank"><?php echo wp_trim_words(get_the_title(), 10, '...'); ?></a>										
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
								<a href="<?php echo the_field('custom_url', $post->ID); ?>" target="_blank">Read More <svg fill="none" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m13.7071 4.29289c-.3905-.39052-1.0237-.39052-1.4142 0-.3905.39053-.3905 1.02369 0 1.41422l5.2929 5.29289h-13.5858c-.55228 0-1 .4477-1 1s.44772 1 1 1h13.5858l-5.2929 5.2929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l7-7c.3905-.3905.3905-1.0237 0-1.4142z" fill="rgb(0,0,0)" fill-rule="evenodd"/></svg></a>
							</div>
						</div>
				  </div>
				</div>
		<?php 
			$s = $s + 0.2;
		  endwhile; ?>
	  </div>
	  <?php
	  else : ?>
	  <p class="text-center">No Record Found</p>
    <?php endif; ?>
  </div>

  <div class="pagination justify-content-center">
    <?php
    $output = '';
    $total = $listingObj->found_posts;

    if ($current_page > 1) :
      $output .= '<a href="javascript:void(0);" title="Previous" class="pagination-link prev-link" data-page_num = ' . ($current_page - 1) . '><span aria-hidden="true"><i class="bi bi-chevron-left"></i></span></a>';

    endif;

    if ($current_page >= 5) :

      if ($current_page == 1) :
        $output .= '<a href="javascript:void(0);" class="pagination-link current-page" id="pagination_link' . $current_page . '" data-page_num = 1> 1 </a>';

      else :
        $output .= '<a href="javascript:void(0);" class="pagination-link" data-page_num = 1> 1 </a>';
      endif;

      $output .= '<span> .... </span>';

      for ($j = ($current_page - 3); $j < $current_page; $j++) {
        if ($current_page == $j) :
          $output .= '<a href="javascript:void(0);" class="pagination-link current_page" id="pagination_link' . $current_page . '" data-page_num = ' . $j . '>' . $j . '</a>';

        else :
			$output .= '<a href="javascript:void(0);" class="pagination-link" data-page_num = ' . $j . '>' . $j . '</a>';
        endif;
      }

      for ($k = $current_page; $k < ($current_page + 3); $k++) {

        if ($k != (ceil($total / $items_per_page)) && $k != (ceil($total / $items_per_page) + 1)) :
          if ($current_page != ceil($total / $items_per_page)) :
            if ($current_page == $k) :
              $output .= '<a href="javascript:void(0);" class="pagination-link current-page" id="pagination_link' . $current_page . '" data-page_num = ' . $k . '>' . $k . '</a>';

            else :
              $output .= '<a href="javascript:void(0);" class="pagination-link" data-page_num = ' . $k . '>' . $k . '</a>';
            endif;
          endif;
        endif;
      }

      $output .= '<span> .... </span>';

      if ($current_page == ceil($total / $items_per_page)) :
        $output .= '<a href="javascript:void(0);" class="pagination-link current-page" id="pagination_link' . $current_page . '" data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';

      else :
        $output .= '<a href="javascript:void(0);" class="pagination-link" data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';
      endif;

    else :

      for ($i = 1; $i <= ceil($total / $items_per_page); $i++) {
        if ($i > 5) :
          $output .= '<span> .... </span>';
          if ($current_page == ceil($total / $items_per_page)) :
            $output .= '<a href="javascript:void(0);" class="pagination-link current-page" id="pagination_link' . $current_page . '"  data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';

          else :
            $output .= '<a href="javascript:void(0);" class="pagination-link" data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';
          endif;

          break;

        else :
          if ($current_page == $i) :
            $output .= '<a href="javascript:void(0);" class="pagination-link current-page"  id="pagination_link' . $current_page . '" data-page_num = ' . $i . '>' . $i . '</a>';

          else :
            $output .= '<a href="javascript:void(0);" class="pagination-link" data-page_num = ' . $i . '>' . $i . '</a>';
          endif;
        endif;
      }
    endif;

    if (($current_page < ceil($total / $items_per_page)) && ($current_page != ceil($total / $items_per_page))) :
      $output .= '<a href="javascript:void(0);" title="Next" class="pagination-link next-link" data-page_num = ' . ($current_page + 1) . '><span aria-hidden="true"><i class="bi bi-chevron-right"></i></span></a>';
    endif;

	if($total <= 6){
		$output = '';
	}
    echo $output;
    die();
    ?>
  </div>
<?php } 




/* Press Release Listing */
add_action('wp_ajax_get_press_release_listing', 'get_press_release_listing');
add_action('wp_ajax_nopriv_get_press_release_listing', 'get_press_release_listing');

function get_press_release_listing()
{

  //Declaration of temporary variables
  $items_per_page = '';
  $current_page = $_REQUEST['current_page'];
  $flag = $_REQUEST['flag'];

  if ($flag == 'press_release_listing') {
    $post_type = 'press-release';
    $items_per_page = 6;
    $content_priority = 'content_priority';
	
	$prcategoryId = $_REQUEST['press_release_category_id'];
    if ($prcategoryId) {
      $pr_category_query = array(
        'taxonomy' => 'press_release_categories',
        'field' => 'term_id',
        'terms' => $prcategoryId
      );
    }
  }

  //Querying wordpress to fetch all the data conditionally.
  $args = array(
    'post_type'     => $post_type,
    'post_status'   => 'publish',
    'posts_per_page' => $items_per_page,
    'paged'      => $current_page,
	'tax_query' => array(
      'relation' => 'AND',
      $pr_category_query
    ),
  );

  $listingObj = new WP_Query($args); ?>
  <?php $i = 0; ?>
  <div class="insights-section row mb-n4">
    <?php if ($listingObj->have_posts()) :  ?>
	<div class="insights-inner">
	<?php
      while ($listingObj->have_posts()) :  $listingObj->the_post();
		$category = @get_the_terms($listingObj->ID, 'press_release_categories');
		$pressImage = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'medium_large');
        // Press Release Listing by AJAX
        if ($flag == 'press_release_listing') : ?>
          <div class="insights-card card wow fadeInUp" data-wow-delay="<?php echo $s; ?>s" data-wow-offset="50">
            <div class="insights-content card-body">
				<div class="client-details" <?php if ((has_post_thumbnail( $post->ID ) )) { ?>style="background-image:url('<?php echo $pressImage[0]; ?>')" <?php } ?> >
					<span class="badge"><?php echo $category[0]->name; ?></span>
				</div>
				<div class="insight-in-content">
					<!--<span class="post-date-cls"><?php echo get_the_date( 'd F, Y', $post->ID ); ?></span>-->
					<h2 class="slider-title">
						<a href="<?php the_permalink(); ?>"><?php echo wp_trim_words(get_the_title(), 10, '...'); ?></a>										
					</h2>
					<!--<div class="short-decoration">
					   <p class="p2">
					   <?php
						if (get_field('short_description', $post->ID)) {
							echo wp_trim_words( the_field('short_description', $post->ID), 20 );
						}
						?>
						<p>
					</div>-->
					<div class="action">
						<a href="<?php the_permalink(); ?>">Read More <svg fill="none" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m13.7071 4.29289c-.3905-.39052-1.0237-.39052-1.4142 0-.3905.39053-.3905 1.02369 0 1.41422l5.2929 5.29289h-13.5858c-.55228 0-1 .4477-1 1s.44772 1 1 1h13.5858l-5.2929 5.2929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l7-7c.3905-.3905.3905-1.0237 0-1.4142z" fill="rgb(0,0,0)" fill-rule="evenodd"/></svg></a>
					</div>
				</div>
            </div>
          </div>
    <?php endif;
      endwhile; ?>
	  </div>
	  <?php else : ?>
	  <p class="text-center">No Record Found</p>
    <?php endif; ?>
  </div>

  <div class="pagination justify-content-center">
    <?php
    $output = '';
    $total = $listingObj->found_posts;

    if ($current_page > 1) :
      $output .= '<a href="javascript:void(0);" title="Previous" class="pagination-links prev-link" data-page_num = ' . ($current_page - 1) . '><span aria-hidden="true"><i class="bi bi-chevron-left"></i></span></a>';

    endif;

    if ($current_page >= 5) :

      if ($current_page == 1) :
        $output .= '<a href="javascript:void(0);" class="pagination-links current-page" id="pagination_link' . $current_page . '" data-page_num = 1> 1 </a>';

      else :
        $output .= '<a href="javascript:void(0);" class="pagination-links" data-page_num = 1> 1 </a>';
      endif;

      $output .= '<span> .... </span>';

      for ($j = ($current_page - 3); $j < $current_page; $j++) {
        if ($current_page == $j) :
          $output .= '<a href="javascript:void(0);" class="pagination-links current_page" id="pagination_link' . $current_page . '" data-page_num = ' . $j . '>' . $j . '</a>';

        else :
          $output .= '<a href="javascript:void(0);" class="pagination_link" data-page_num = ' . $j . '>' . $j . '</a>';
        endif;
      }

      for ($k = $current_page; $k < ($current_page + 3); $k++) {

        if ($k != (ceil($total / $items_per_page)) && $k != (ceil($total / $items_per_page) + 1)) :
          if ($current_page != ceil($total / $items_per_page)) :
            if ($current_page == $k) :
              $output .= '<a href="javascript:void(0);" class="pagination-links current-page" id="pagination_link' . $current_page . '" data-page_num = ' . $k . '>' . $k . '</a>';

            else :
              $output .= '<a href="javascript:void(0);" class="pagination-links" data-page_num = ' . $k . '>' . $k . '</a>';
            endif;
          endif;
        endif;
      }

      $output .= '<span> .... </span>';

      if ($current_page == ceil($total / $items_per_page)) :
        $output .= '<a href="javascript:void(0);" class="pagination-links current-page" id="pagination_link' . $current_page . '" data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';

      else :
        $output .= '<a href="javascript:void(0);" class="pagination-links" data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';
      endif;

    else :

      for ($i = 1; $i <= ceil($total / $items_per_page); $i++) {
        if ($i > 5) :
          $output .= '<span> .... </span>';
          if ($current_page == ceil($total / $items_per_page)) :
            $output .= '<a href="javascript:void(0);" class="pagination-links current-page" id="pagination_link' . $current_page . '"  data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';

          else :
            $output .= '<a href="javascript:void(0);" class="pagination-links" data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';
          endif;

          break;

        else :
          if ($current_page == $i) :
            $output .= '<a href="javascript:void(0);" class="pagination-links current-page"  id="pagination_link' . $current_page . '" data-page_num = ' . $i . '>' . $i . '</a>';

          else :
            $output .= '<a href="javascript:void(0);" class="pagination-links" data-page_num = ' . $i . '>' . $i . '</a>';
          endif;
        endif;
      }
    endif;

    if (($current_page < ceil($total / $items_per_page)) && ($current_page != ceil($total / $items_per_page))) :
      $output .= '<a href="javascript:void(0);" title="Next" class="pagination-links next-link" data-page_num = ' . ($current_page + 1) . '><span aria-hidden="true"><i class="bi bi-chevron-right"></i></span></a>';
    endif;
	
	if($total <= 6){
		$output = '';
	}
    echo $output;
    die();
    ?>
  </div>
<?php }

/* Search Result Listing */
add_action('wp_ajax_get_search_result_listing', 'get_search_result_listing');
add_action('wp_ajax_nopriv_get_search_result_listing', 'get_search_result_listing');

function get_search_result_listing()
{
  //Declaration of temporary variables
  $items_per_page = '';
  $current_page = $_REQUEST['current_page'];
  $flag = $_REQUEST['flag'];

  if ($flag == 'search_result') {
    $post_type = array('post', 'page', 'case_studies', 'ebooks', 'whitepapers', 'webinars', 'press-release');
    $items_per_page = 10;
    $content_priority = 'content_priority';
  }

  //Querying wordpress to fetch all the data conditionally.
  $args = array(
    'post_type'     => $post_type,
    's' => esc_attr($_POST['keyword']),
    'post_status'   => 'publish',
    'posts_per_page' => $items_per_page,
    'paged'      => $current_page
  );

  $listingObj = new WP_Query($args);
  $count = $listingObj->found_posts;
  $i = 0; ?>

  <div class="search-result-page">
    <p> Your search for <strong class="text-light-orange"><?php echo $_POST['keyword'];?></strong> matches <strong class="text-light-orange"><?php echo $count; ?></strong> Results </p>
  </div>
  <div class="">
    <ul id="search-results list-unstyled">
      <?php if ($listingObj->have_posts()) :
        while ($listingObj->have_posts()) :  $listingObj->the_post();
          if ($flag == 'search_result') : ?>
            <li>
              <div>
                <a href="<?php the_permalink(); ?>" class="search-table">
                  <div class="search-table-cell">
                    <h4><?php the_title(); ?></h4>
                    <p><?php echo wp_trim_words(get_the_content(), 40, '...'); ?><span class="mobile-arrow"><i class="icon bi bi-arrow-right" aria-hidden="true"></i></span></p>
                  </div>
                  <div class="search-table-cell"><i class="icon bi bi-arrow-right" aria-hidden="true"></i></div>
                </a>
              </div>
            </li>
      <?php endif;
        endwhile;
      endif; ?>
    </ul>
    <div>

      <div class="pagination justify-content-center">
        <?php
        $output = '';
        $total = $listingObj->found_posts;

        if ($current_page > 1) :
          $output .= '<a href="javascript:void(0);" title="Previous" class="pagination-lnk prev-link" data-page_num = ' . ($current_page - 1) . '><span aria-hidden="true"><i class="bi bi-chevron-left"></i></span></a>';

        endif;

        if ($current_page >= 5) :

          if ($current_page == 1) :
            $output .= '<a href="javascript:void(0);" class="pagination-lnk current-page" id="pagination_link' . $current_page . '" data-page_num = 1> 1 </a>';

          else :
            $output .= '<a href="javascript:void(0);" class="pagination-lnk" data-page_num = 1> 1 </a>';
          endif;

          $output .= '<span> .... </span>';

          for ($j = ($current_page - 3); $j < $current_page; $j++) {
            if ($current_page == $j) :
              $output .= '<a href="javascript:void(0);" class="pagination-lnk current_page" id="pagination_link' . $current_page . '" data-page_num = ' . $j . '>' . $j . '</a>';

            else :
              $output .= '<a href="javascript:void(0);" class="pagination-link" data-page_num = ' . $j . '>' . $j . '</a>';
            endif;
          }

          for ($k = $current_page; $k < ($current_page + 3); $k++) {

            if ($k != (ceil($total / $items_per_page)) && $k != (ceil($total / $items_per_page) + 1)) :
              if ($current_page != ceil($total / $items_per_page)) :
                if ($current_page == $k) :
                  $output .= '<a href="javascript:void(0);" class="pagination-lnk current-page" id="pagination_link' . $current_page . '" data-page_num = ' . $k . '>' . $k . '</a>';

                else :
                  $output .= '<a href="javascript:void(0);" class="pagination-lnk" data-page_num = ' . $k . '>' . $k . '</a>';
                endif;
              endif;
            endif;
          }

          $output .= '<span> .... </span>';

          if ($current_page == ceil($total / $items_per_page)) :
            $output .= '<a href="javascript:void(0);" class="pagination-lnk current-page" id="pagination_link' . $current_page . '" data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';

          else :
            $output .= '<a href="javascript:void(0);" class="pagination-lnk" data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';
          endif;

        else :

          for ($i = 1; $i <= ceil($total / $items_per_page); $i++) {
            if ($i > 5) :
              $output .= '<span> .... </span>';
              if ($current_page == ceil($total / $items_per_page)) :
                $output .= '<a href="javascript:void(0);" class="pagination-lnk current-page" id="pagination_link' . $current_page . '"  data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';

              else :
                $output .= '<a href="javascript:void(0);" class="pagination-lnk" data-page_num = ' . ceil($total / $items_per_page) . '> ' . ceil($total / $items_per_page) . ' </a>';
              endif;

              break;

            else :
              if ($current_page == $i) :
                $output .= '<a href="javascript:void(0);" class="pagination-lnk current-page"  id="pagination_link' . $current_page . '" data-page_num = ' . $i . '>' . $i . '</a>';

              else :
                $output .= '<a href="javascript:void(0);" class="pagination-lnk" data-page_num = ' . $i . '>' . $i . '</a>';
              endif;
            endif;
          }
        endif;

        if (($current_page < ceil($total / $items_per_page)) && ($current_page != ceil($total / $items_per_page))) :
          $output .= '<a href="javascript:void(0);" title="Next" class="pagination-lnk next-link" data-page_num = ' . ($current_page + 1) . '><span aria-hidden="true"><i class="bi bi-chevron-right"></i></span></a>';
        endif;

        echo $output;
        die();
        ?>
      </div>
<?php }

/* Career Listing 12-12-2022*/
add_action('wp_ajax_get_career_listing', 'get_career_listing');
add_action('wp_ajax_nopriv_get_career_listing', 'get_career_listing');

function get_career_listing()
{
  $current_page = $_REQUEST['current_page'] - 1;
  $flag = $_REQUEST['flag'];

  if ($flag == 'career_listing') {
	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'https://api.preprod1.zwayam.com/core/v1/jobs/?from_created_date=2021-01-01%2010:10:10&to_created_date=2022-12-12%2010:10:10&page_number='.$current_page.'&careersite_enabled=false',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'GET',
	  CURLOPT_HTTPHEADER => array(
		'Content-Type: application/json',
		'api_key: d6uukp_810007262b6968bda3657b225b56cd026a275c0a614bd86cf8cfdc034ca257535e90fc2b8f2eb6bddbe12c45d29dfc7df20436cf1522a33839a9d3c0cbbb09e9'
	  ),
	));

	$response = curl_exec($curl);
	$errno = curl_errno($curl);
	$err = curl_error($curl);
	
	curl_close($curl);
	$errtex = '';
	if ($errno) {
		$errtex = "cURL Error #:" . $err;
	} else {
		$response = json_decode($response,true);
		$data = $response['data'];
			
		//echo "<pre>";
		//print_r($data);
		
		if ($data && count($data) > 0) :  
			foreach ($data as $jobs) :
				?>
				<li>
						<?php if($jobs['jobTitle'] != ''){  ?>
							<h3><?php echo $jobs['jobTitle']; ?></h3>
						<?php } ?>						
						<?php /*if($jobs['role'] != ''){  ?>
							<span>Role: <?php echo $jobs['role']; ?> Years</span>
						<?php } ?>
						<?php if($jobs['location'] != ''){  ?>
							<span>Location: <?php echo $jobs['location']; ?> Years</span>
						<?php } ?>
						<?php if($jobs['minYrsOfExperience'] != ''){  ?>
							<span>Min Years Of Experience: <?php echo $jobs['minYrsOfExperience']; ?>+ Years</span>
						<?php } ?>
						<?php if($jobs['positionsReq'] != ''){  ?>
							<span>Positions Required: <?php echo $jobs['positionsReq']; ?></span>
						<?php } */?>
						<span><a class="btn" href="<?php echo site_url();?>/career-details?jobid=<?php echo $jobs['id']; ?>">Know More <i class="fas fa-arrow-right"></i></a></span>
						</li>
				<?php
			endforeach;
		endif;
	}
 }
 die();
} ?>