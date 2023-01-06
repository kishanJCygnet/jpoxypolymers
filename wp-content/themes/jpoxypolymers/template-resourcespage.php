<?php
/* Template Name: Resources Page */

get_header();

/* flexible content Start */
	   $pageId = get_the_ID();
	   require_once(__DIR__ . "/flexible-content.php");
?>
		
<div>
	<!-- More Blog section start -->
	<section class="resources-page-listing pt-4">
		<div class="container section-container-padding ">
			<!-- Filter block start -->
			<div class="filter-box mb-5">
				<!-- <h5 class="text-dark-blue mb-3">Filter By:</h5> -->
				<form class="submit-all-filter d-flex">
						<div class="category me-4 select2-cn">
							<select class="form-select select-category js-select2 filter-by-cpt" name="filter-by-cpt" multiple="multiple">
								<!--<option value=""></option>-->
								<option value="post">Blog</option>
								<option value="ebooks">eBook</option>
								<option value="case_studies">Case Studies</option>
								<option value="webinars">Webinars</option>
								<option value="whitepapers">White Papers</option>
							</select>
						</div>
						<div class="solution me-4 select2-cn">
							<select class="form-select select-category offering-select2 filter-by-category" name="filter-by-category" multiple="multiple">
							<!--<select class="form-select select-category filter-by-category" name="filter-by-category">
								<option value=""></option>-->
								<?php
								$categories = get_terms(['taxonomy' => 'category', 'hide_empty' => true]);
								foreach ($categories as $category) {?>
									<option value="<?php echo $category->term_id;?>"><?php echo $category->name;?></option>
								<?php }?>
							</select>
						</div>
						<div  class="action ms-auto ">
							<div class="d-md-flex justify-content-start justify-content-lg-end justify-content-xl-start">
								<input type="button" class="btn disvar" title="Submit" value="Submit" id="filter_submit" disabled>
								<input type="button" class="btn btn-outline ms-4 disvar" title="Clear all" value="Clear all" id="clear-filter-research" disabled>
							</div>
						</div>
				</form>
			</div>
			<!-- Filter block end -->
			<!-- Resources start -->
			<div class="default-content text-center"><p>Please select a filter to explore more.</p></div>
			<!-- Image loader -->
			<div id="loader" class="loader" style="display: none;">
			</div>
			<!-- Image loader -->
			<div class="resources-container" style="display:none;"></div>
			<!-- Resources end -->
		</div>
	</section>
</div>
<?php
get_footer();
?>
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.4/css/select2.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.4/js/select2.min.js"></script>
<script>
	jQuery(document).ready(function () {
		jQuery('.select-category').on('change', function() {
			var cpt = jQuery('.filter-by-cpt').val();
			var cat = jQuery('.filter-by-category').val();
			if(cpt != '' || cat !=''){
				jQuery('.disvar').prop('disabled', false);
			} else {
				if (jQuery('.resources-container').is(':empty')){
					jQuery('#clear-filter-research').prop('disabled', true);
				} else {
					jQuery('#clear-filter-research').prop('disabled', false);
				}
				jQuery('#filter_submit').prop('disabled', true);
				//jQuery('.disvar').prop('disabled', true);
			}
		});

		jQuery("#filter_submit").click(function(){
			jQuery('.default-content').hide();
			jQuery('.resources-container').empty();
			jQuery('.resources-container').show();
		}); 
		jQuery("#clear-filter-research").click(function(){
			jQuery('.resources-container').hide();
			jQuery('.resources-container').empty();
			jQuery('.default-content').show();
		}); 
		
		
		
		jQuery(".js-select2").select2({
			closeOnSelect : false,
			placeholder : "Please select category",
			allowHtml: true,
			allowClear: true,
			tags: true
		});
		jQuery(".offering-select2").select2({
			closeOnSelect : false,
			placeholder : "Please select offering",
			allowHtml: true,
			allowClear: true,
			tags: true
		});
    });	
</script>