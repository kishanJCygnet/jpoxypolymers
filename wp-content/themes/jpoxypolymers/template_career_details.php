<?php 
/* Template Name: Career Detail Page */
get_header();

$jobid = $_GET['jobid'];
if($jobid != ''){
	$curl = curl_init();

	curl_setopt_array($curl, array(
		CURLOPT_URL => 'https://api.preprod1.zwayam.com/core/v1/jobs/'.$jobid,
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
		$data = $response['reponseObject'];
	}
	if($errtex == '' && $data != ''){
?>
        <div class="case-study">
            <section class="pt-0">
				<div class="career-detail">                        
				
							<div class="career-top-section image-shape">
								<div class="container">
									<div class="head-title-content">																				
											<div class="job-title">
												<h1><?php echo $data['jobTitle']; ?></h1>
												<div class="job-type">
													<?php if($data['location'] != ''){  ?>
														<span class="location"><?php echo $data['location']; ?></span>
													<?php } ?>
													<?php if($data['minYrsOfExperience'] != ''){  ?>
														<span class="JobExp">Experience: <?php echo $data['minYrsOfExperience']; ?>+ Years</span>
													<?php } ?>
													<!--<span class="location">Ahmedabad, Gujarat</span>
													<span class="JobExp">Experience: 6+ Years</span>-->
												</div>
												<div class="jobAply">
													<a class="btn" href="#">Apply Now <i class="fas fa-right-arrow"></i></a>
												</div>
											</div>										        
									</div> 
								</div>
							</div>							
						
				</div>
            </section>
			<section class="py-0">
				<div class="container">
				<div class="job-description">
								<div class="introduction">
									<h3>Introduction</h3>
									<p>Client Interfacing, requirement gathering, analysis, scoping & review for IT Services customers across multiple domains</p>

									<ul>
										<li>Experience in Scoping, preparing BRS / SRS / FRS, Wireframes & different Diagrams </li>
										<li>Technology & solution consulting </li>
										<li>Developing a compelling proposal by involving key stakeholders </li>
										<li>Risk tracking and management throughout the Proposal process </li>
										<li>Presales support (Case Study, Capability Decks, etc.) </li>
										<li>Strong Presentation and Visual Enhancement skills - MS PowerPoint/Visio/related Graphic tools</li>
										<li>Industry/Domain & Technology led research/Market research</li>
									</ul>

								</div>
								<div class="experience">
									<h3>Experience/Skills</h3>
									
									<ul>
											<li>Excellent written/verbal English language skills</li>
											<li>Excellent interpersonal & collaboration skills/Stakeholder Management</li>
											<li>Consultative Approach while understanding Customer's business & requirements and proposing solution </li>
											<li>Problem solving </li>
											<li>Strong Presentation and Visual Enhancement skills - MS Office/Visio/related Graphic tools</li>
											<li>Ability to work on aggressive schedules </li>
											<li>Client Interfacing </li>
											<li>Good team player</li>
									</ul>
								</div>
							</div>
							<!--<div class="section-container-padding pt-0 pb-0">
								<div class="article-container">
									<div class="container-with-sidebar">
										<article class="blog-contents">
											<?php if($data['longDescription'] != ''){  ?>
												<span>Long Description: <?php echo $data['longDescription']; ?></span>
											<?php } ?>
											<?php if($data['desiredSkill'] != ''){  ?>
												<span>Desired Skill: <?php echo $data['desiredSkill']; ?></span>
											<?php } ?>
											<?php if($data['qualification'] != ''){  ?>
												<span>Qualification: <?php echo $data['qualification']; ?></span>
											<?php } ?>
											<?php if($data['role'] != ''){  ?>
												<span>Role: <?php echo $data['role']; ?></span>
											<?php } ?>										
											<?php if($data['positionsReq'] != ''){  ?>
												<span>Positions Required: <?php echo $data['positionsReq']; ?></span>
											<?php } ?>
										</article>	
									</div>
								</div>
							</div>-->
				</div>
			</section>
        </div>
		
		<!-- <div>
			<?php echo do_shortcode('[contact-form-7 id="37334" title="Apply Job"]'); ?>
		</div> -->
	<?php } else { ?>
		<div class="container norecordfound">
			<p>No Record Found</p>
		</div>
	<?php } ?>
	<script>
jQuery( document ).ready(function() {
	jQuery('#jobid').val(<?php echo $jobid; ?>);
});
</script>
<?php } else { ?>
	<div class="container norecordfound">
		<p>No Record Found</p>
	</div>
<?php }
	
get_footer(); ?>
