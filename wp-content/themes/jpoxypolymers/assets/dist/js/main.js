function AddReadMore(){jQuery(".icon-box .description:not(.no-readmore .icon-box .description):not(.automation-experience .icon-box .description):not(.benifits .icon-box .description):not(.desktop-commands .icon-box .description):not(.Integrations-section .icon-box .description):not(.capabilitie-section .icon-box .description),.icon-box .readmore_description:not(.partner-comments .icon-box .readmore_description)").each((function(){if(!jQuery(this).find(".firstSec").length){for(var e=jQuery(this).text().split(" "),t="",n="",o=0;o<e.length;o++)o<20?t+=e[o]+" ":n+=e[o]+" ";if(""!=n)var i=t+"<span class='dot'>...</span><span class='SecSec'>"+n+"</span><span class='readMore'  title='Click to Show More'> Read more<i class='fas fa-angle-down'></i></span><span class='readLess' title='Click to Show Less'> Read less<i class='fas fa-angle-up'></i></span>";else i=t;jQuery(this).html(i)}})),jQuery(document).on("click",".readMore, .readLess",(function(){jQuery(this).closest(".icon-box .description, .icon-box .readmore_description:not(.partner-comments .icon-box .readmore_description)").toggleClass("showlesscontent showmorecontent")}))}function AddLargeReadMore(){jQuery(".readmore_large_description, .partner-comments .icon-box .readmore_description").each((function(){if(!jQuery(this).find(".firstSec").length){for(var e=jQuery(this).text().split(" "),t="",n="",o=0;o<e.length;o++)o<100?t+=e[o]+" ":n+=e[o]+" ";if(""!=n)var i=t+"<span class='dot'>...</span><span class='SecSec'>"+n+"</span><span class='readMore'  title='Click to Show More'> Read more<i class='fas fa-angle-down'></i></span><span class='readLess' title='Click to Show Less'> Read less<i class='fas fa-angle-up'></i></span>";else i=t;jQuery(this).html(i)}})),jQuery(document).on("click",".readMore, .readLess",(function(){jQuery(this).closest(".readmore_large_description, .partner-comments .icon-box .readmore_description").toggleClass("showlesscontent showmorecontent")}))}jQuery(document).ready((function(){wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}),wow.init(),jQuery(".search-icon .overlay").click((function(){jQuery(".search-icon").toggleClass("show")})),jQuery(".navbar-toggler").click((function(){jQuery("html").toggleClass("overflow-h")})),jQuery(window).scroll((function(){var e=jQuery("header .navbar");jQuery(window).scrollTop()>=48?e.addClass("fixed"):e.removeClass("fixed")}))})),jQuery((function(){AddLargeReadMore(),AddReadMore()})),jQuery((function(){var e=jQuery(".sygnature-type-content .nav-tabs li .nav-link");e.click((function(){jQuery(this).addClass("active").parent("li").siblings("li").children(".active").removeClass("active")})),setInterval((function(){var t=e.filter(".active");(t.index()<e.length-1?t.next():e.first()).click()}),5e3)})),jQuery(document).ready((function(){jQuery(".accordion_section.faq-accordian:nth-child(2) .accordion-content-item:first-child").find(".accordion-collapse").addClass("show"),jQuery(".accordion_section.faq-accordian:nth-child(2) .accordion-content-item:first-child").find(".accordion-button").removeClass("collapsed"),setTimeout((()=>{jQuery("#contact_us").addClass("shake-btn")}),400),jQuery("#contact_us").addClass("shake-btn"),setTimeout((function(){jQuery("#contact_us").removeClass("shake-btn")}),1e4),jQuery("#primary-menu-list > .menu-item-has-children > a").click((function(){jQuery(this).parent("li").toggleClass("show-menu")})),jQuery(".loader").fadeOut(),jQuery("input[name=phrase]").change((function(){jQuery("input[name=phrase]").val().length>0?jQuery(".search-icon .overlay").hide():jQuery(".search-icon .overlay").show()})),jQuery(".banner-content.digital-transformation-banner .inner-text ul li:first-child").addClass("active animate__animated animate__fadeIn")})),setInterval((function(){var e=jQuery(".banner-content.digital-transformation-banner .inner-text ul > li.active").removeClass("active animate__animated animate__fadeIn").next("li");e.length||(e=e.prevObject.siblings("li:first-child")),e.addClass("active animate__animated animate__fadeIn")}),5e3),jQuery(".ac-back").click((function(e){e.preventDefault(),jQuery(".product-feature-tab ul").animate({scrollLeft:"+=200px"},"slow")})),jQuery(".ac-fow").click((function(e){e.preventDefault(),jQuery(".product-feature-tab ul").animate({scrollLeft:"-=200px"},"slow")})),jQuery(".btn").on("mouseenter",(function(e){var t=jQuery(this).offset(),n=e.pageX-t.left,o=e.pageY-t.top;jQuery(this).find("span.effect").css({top:o,left:n})})).on("mouseout",(function(e){var t=jQuery(this).offset(),n=e.pageX-t.left,o=e.pageY-t.top;jQuery(this).find("span.effect").css({top:o,left:n})})),jQuery(".circle-anim1").append('<span class="circle-animation"><span class="span1"></span><span class="span2"></span><span class="span3"></span><span class="span4"></span></span>'),jQuery(".circle-anim2").append('<span class="circle-animation canim-2"><span class="span1"></span><span class="span2"></span><span class="span3"></span><span class="span4"></span></span>'),jQuery(".counter").each((function(){var e=jQuery(this),t=e.attr("data-count");jQuery({countNum:e.text()}).animate({countNum:t},{duration:4e3,easing:"linear",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})})),jQuery(document).ready((function(){jQuery(".case-studies-slider").each((function(){var e=0;jQuery(".insights-card",this).each((function(){jQuery(this).height()>e&&(e=jQuery(this).height())})),jQuery(".insights-card",this).height(e)})),jQuery(".contact-form-content").addClass("shape-aw-top"),jQuery("svg").each((function(){jQuery(this).find("g").removeAttr("clip-path"),jQuery(this).find("clipPath").remove()}));var e=jQuery('<div class="shape-bottom"></div>');jQuery(".circle-shape").append(e);var t=jQuery('<div class="shape-top"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1920" height="213.646" viewBox="0 0 1920 213.646"><defs><linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#0d3461"/><stop offset="1" stop-color="#41bfe7"/></linearGradient></defs><g id="Mask_Group_21" data-name="Mask Group 21" transform="translate(0 -4795)" clip-path="url(#clip-path)"><path id="Path_46339" data-name="Path 46339" d="M2107.856,3507.776c74.517-14.069,155.885-14.069,230.4,0L4234.315,3805.8C4598.338,3874.529,4551.425,0,4165.092,0H372.977C-13.354,0-152.224,3874.529,211.8,3805.8Z" transform="translate(3188.832 8483.046) rotate(180)" fill="url(#linear-gradient)"/></g></svg></div>');jQuery(".shape-aw-top").append(t),jQuery(".page-insight .insights-card").each((function(){var e=jQuery(this).find(".client-details").attr("style");jQuery(this).children(".insights-content").attr("style",e),jQuery(this).find(".client-details").removeAttr("style")}))}));var controller=new ScrollMagic.Controller;function pepoleclu(){var e=jQuery(window).width(),t=jQuery(".pepole-culture-album .col-right").width()+(e-jQuery(".pepole-culture-album .container").width())/2;jQuery(".pepole-culture-album .col-right").css("min-width",t)}new ScrollMagic.Scene({triggerElement:".menu-section",triggerHook:1,reverse:!1}).setClassToggle(".menu-section","show-drop").addTo(controller),jQuery(".long-time-cygnetian .testimonial-slider").owlCarousel({items:1}),jQuery(".album-item .album-item-box .overlay").each((function(){$overlay=jQuery(this).clone(),jQuery(this).siblings(".awp_center").find(".group").append($overlay),jQuery(this).remove()})),jQuery(document).ready((function(){pepoleclu(),jQuery(".cdes").hover((function(){jQuery(".des-logo").toggleClass("highlight-logo")})),jQuery(".cygnet-teatech").hover((function(){jQuery(".tt-logo").toggleClass("highlight-logo")})),jQuery(".cygnetirp").hover((function(){jQuery(".irp-logo").toggleClass("highlight-logo")})),jQuery(".cygnetfintech").hover((function(){jQuery(".ft-logo").toggleClass("highlight-logo")})),jQuery(".testingwhiz").hover((function(){jQuery(".tw-logo").toggleClass("highlight-logo")})),jQuery(".automationwhiz").hover((function(){jQuery(".aw-logo").toggleClass("highlight-logo")})),jQuery(".cygnature").hover((function(){jQuery(".cn-logo").toggleClass("highlight-logo")})),jQuery(".git").hover((function(){jQuery(".gitlab-logo").toggleClass("highlight-logo")})),jQuery(".home-menu").after('<div class="home-sticky-section"><div class="side-navigation" id="homesidenav"><ul class="home-sticky-inner"><a class="navigation__link" href="#whoweare">Who We Are</a><a class="navigation__link" href="#whatwedo">What We Do</a><a class="navigation__link" href="#ourwork">Our Work</a></ul></div></div>'),jQuery(".stiky1").each((function(){$StikyHomeoverlay=jQuery(this).clone(),jQuery(".home-sticky-section").append($StikyHomeoverlay),jQuery(this).remove()})),jQuery("#whoweare").after('<section id="whatwedo"></section>'),jQuery(".stiky-sub").each((function(){$StikysubHomeoverlay=jQuery(this).clone(),jQuery("#whatwedo").append($StikysubHomeoverlay),jQuery(this).remove()})),jQuery(".stiky-osp-after-content").after('<section class="py-0 osp-sticky-section"></section>'),jQuery(".stiky-osp").each((function(){$Stikysosp=jQuery(this).clone(),jQuery(".osp-sticky-section").append($Stikysosp),jQuery(this).remove()})),jQuery(".osp-sticky-section > .stiky-osp:first-child").before('<div class="tce-about-icon-box"></div>'),jQuery(".ops-stiky-icon-box .icon-box-list").each((function(){$Stikysospiconbox=jQuery(this).clone(),jQuery(".tce-about-icon-box").prepend($Stikysospiconbox),jQuery(this).remove()})),jQuery(".Website-list a[href*=\\#]").bind("click",(function(e){e.preventDefault();var t=jQuery(this).attr("href");return jQuery("html, body").stop().animate({scrollTop:jQuery(t).offset().top},600,(function(){location.hash=t})),!1})),jQuery(".modal .btn-close").click((function(){jQuery("iframe")[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")})),$(".modal").modal({backdrop:"static",keyboard:!1})})),jQuery(window).resize((function(){pepoleclu()})),jQuery(window).scroll((function(){var e=jQuery(window).scrollTop()+200;jQuery(".home-sticky-section > section").each((function(t){jQuery(this).position().top<=e&&(jQuery(".side-navigation .navigation__link.active").removeClass("active"),jQuery(".side-navigation .navigation__link").eq(t).addClass("active"))})),jQuery(window).width()>767&&jQuery(".osp-sticky-section").each((function(t){jQuery(this).position().top<=e?jQuery(this).addClass("fix-sticky"):jQuery(this).removeClass("fix-sticky")}))})).scroll(),jQuery(window).on("load",(function(){jQuery(".home-banner-content").before('<div class="home-banner-with-menu"></div>'),jQuery(".anim-home-sec").each((function(){$homeaanim=jQuery(this).clone(),jQuery(".home-banner-with-menu").append($homeaanim),jQuery(this).remove()}))}));