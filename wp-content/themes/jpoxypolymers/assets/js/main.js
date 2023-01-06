jQuery(document).ready(function () {
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: false, // default
    live: true, // default
  });
  wow.init();
  jQuery(".search-icon .overlay").click(function () {
    jQuery(".search-icon").toggleClass("show");
  });

  jQuery(".navbar-toggler").click(function () {
    jQuery("html").toggleClass("overflow-h");
  });

  // jQuery(function() {
  //   jQuery('a[href*=\\#]:not([href=\\#]):not(.tab-within-tab-section a)').click(function() {
  //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
  // && location.hostname == this.hostname) {

  //       var target = jQuery(this.hash);
  //       target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
  //       if (target.length) {
  //         jQuery('html,body').animate({
  //           scrollTop: target.offset().top - 0//offsets for fixed header
  //         }, 300);
  //         return false;
  //       }
  //     }
  //   });
  //   //Executed on page load with URL containing an anchor tag.
  //   if(jQuery(location.href.split("#")[1])) {
  //       var target = jQuery('#'+location.href.split("#")[1]);
  //       if (target.length) {
  //         jQuery('html,body').animate({
  //           scrollTop: target.offset().top - 0 //offset height of header here too.
  //         },300 );
  //         return false;
  //       }
  //     }
  // });

  jQuery(window).scroll(function () {
    var sticky = jQuery("header .navbar"),
      scroll = jQuery(window).scrollTop();

    if (scroll >= 48) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  });
});

function AddReadMore() {
  //This limit you can set after how much characters you want to show Read More.
  var carLmt = 20;
  // Text to show when text is collapsed
  var readMoreTxt = " Read more";
  // Text to show when text is expanded
  var readLessTxt = " Read less";

  //Traverse all selectors with this class and manupulate HTML part to show Read More
  jQuery(
    ".icon-box .description:not(.no-readmore .icon-box .description):not(.automation-experience .icon-box .description):not(.benifits .icon-box .description):not(.desktop-commands .icon-box .description):not(.Integrations-section .icon-box .description):not(.capabilitie-section .icon-box .description),.icon-box .readmore_description:not(.partner-comments .icon-box .readmore_description)"
  ).each(function () {
    //alert(words.length);
    if (jQuery(this).find(".firstSec").length) return;

    var allstr = jQuery(this).text().split(" ");
    var firstSet = "";
    var secdHalf = "";
    for (var i = 0; i < allstr.length; i++) {
      if (i < carLmt) {
        firstSet += allstr[i] + " ";
      } else {
        secdHalf += allstr[i] + " ";
      }
    }

    if (secdHalf != "") {
      var strtoadd =
        firstSet +
        "<span class='dot'>...</span>" +
        "<span class='SecSec'>" +
        secdHalf +
        "</span><span class='readMore'  title='Click to Show More'>" +
        readMoreTxt +
        "<i class='fas fa-angle-down'></i></span><span class='readLess' title='Click to Show Less'>" +
        readLessTxt +
        "<i class='fas fa-angle-up'></i></span>";
    } else {
      var strtoadd = firstSet;
    }
    jQuery(this).html(strtoadd);
  });
  //Read More and Read Less Click Event binding
  jQuery(document).on("click", ".readMore, .readLess", function () {
    jQuery(this)
      .closest(
        ".icon-box .description, .icon-box .readmore_description:not(.partner-comments .icon-box .readmore_description)"
      )
      .toggleClass("showlesscontent showmorecontent");
  });
}
function AddLargeReadMore() {
  //This limit you can set after how much characters you want to show Read More.
  var carLmt = 100;
  // Text to show when text is collapsed
  var readMoreTxt = " Read more";
  // Text to show when text is expanded
  var readLessTxt = " Read less";

  //Traverse all selectors with this class and manupulate HTML part to show Read More
  jQuery(
    ".readmore_large_description, .partner-comments .icon-box .readmore_description"
  ).each(function () {
    //alert(words.length);
    if (jQuery(this).find(".firstSec").length) return;

    var allstr = jQuery(this).text().split(" ");
    var firstSet = "";
    var secdHalf = "";
    for (var i = 0; i < allstr.length; i++) {
      if (i < carLmt) {
        firstSet += allstr[i] + " ";
      } else {
        secdHalf += allstr[i] + " ";
      }
    }

    if (secdHalf != "") {
      var strtoadd =
        firstSet +
        "<span class='dot'>...</span>" +
        "<span class='SecSec'>" +
        secdHalf +
        "</span><span class='readMore'  title='Click to Show More'>" +
        readMoreTxt +
        "<i class='fas fa-angle-down'></i></span><span class='readLess' title='Click to Show Less'>" +
        readLessTxt +
        "<i class='fas fa-angle-up'></i></span>";
    } else {
      var strtoadd = firstSet;
    }
    jQuery(this).html(strtoadd);
  });
  //Read More and Read Less Click Event binding
  jQuery(document).on("click", ".readMore, .readLess", function () {
    jQuery(this)
      .closest(
        ".readmore_large_description, .partner-comments .icon-box .readmore_description"
      )
      .toggleClass("showlesscontent showmorecontent");
  });
}
jQuery(function () {
  //Calling function after Page Load
  AddLargeReadMore();
  AddReadMore();
});

jQuery(function () {
  //cache a reference to the tabs
  var tabs = jQuery(".sygnature-type-content .nav-tabs li .nav-link");

  //on click to tab, turn it on, and turn previously-on tab off
  tabs.click(function () {
    jQuery(this)
      .addClass("active")
      .parent("li")
      .siblings("li")
      .children(".active")
      .removeClass("active");
  });

  //auto-rotate every 5 seconds
  setInterval(function () {
    //get currently-on tab
    var onTab = tabs.filter(".active");

    //click either next tab, if exists, else first one
    var nextTab = onTab.index() < tabs.length - 1 ? onTab.next() : tabs.first();
    nextTab.click();
  }, 5000);
});

// function solution(){
//   var windowWidth = jQuery(window).width();
//   var secWidth = jQuery('.solution .tab-content').width();
//   var marginSet = (secWidth - windowWidth) / 2;
//   jQuery('.solution .tab-content').css({marginLeft: marginSet, marginRight: marginSet});
// }

jQuery(document).ready(function () {
  jQuery(
    ".accordion_section.faq-accordian:nth-child(2) .accordion-content-item:first-child"
  )
    .find(".accordion-collapse")
    .addClass("show");
  jQuery(
    ".accordion_section.faq-accordian:nth-child(2) .accordion-content-item:first-child"
  )
    .find(".accordion-button")
    .removeClass("collapsed");

  //solution();

  setTimeout(() => {
    jQuery("#contact_us").addClass("shake-btn");
  }, 400);
  jQuery("#contact_us").addClass("shake-btn");

  setTimeout(function () {
    jQuery("#contact_us").removeClass("shake-btn");
  }, 10000);

  jQuery("#primary-menu-list > .menu-item-has-children > a").click(function () {
    jQuery(this).parent("li").toggleClass("show-menu");
  });
  jQuery(".loader").fadeOut();

  jQuery("input[name=phrase]").change(function () {
    if (jQuery("input[name=phrase]").val().length > 0) {
      jQuery(".search-icon .overlay").hide();
    } else {
      jQuery(".search-icon .overlay").show();
    }
  });
  // jQuery('.testimonials h2 a').attr("href","#");
  // jQuery('.testimonials h2 a').attr("href","#");

  jQuery(
    ".banner-content.digital-transformation-banner .inner-text ul li:first-child"
  ).addClass("active animate__animated animate__fadeIn");
});
// jQuery(window).on('resize', function(){
//   solution();
// });
setInterval(function () {
  // Remove .active class from the active li, select next li sibling.
  var next = jQuery(
    ".banner-content.digital-transformation-banner .inner-text ul > li.active"
  )
    .removeClass("active animate__animated animate__fadeIn")
    .next("li");

  // Did we reach the last element? Of so: select first sibling
  if (!next.length) next = next.prevObject.siblings("li:first-child");

  // Add .active class to the li next in line.
  next.addClass("active animate__animated animate__fadeIn");
}, 5000);

// jQuery(window).scroll(function () {
//   var scroll = jQuery(window).scrollTop();

//   if (scroll >= 300) {
//     jQuery("#contact_us").addClass("shake-btn");
//     setTimeout(function () {
//       jQuery("#contact_us").removeClass("shake-btn");
//     }, 10000);
//   } else if (scroll >= 600) {
//     jQuery("#contact_us").addClass("shake-btn");
//     setTimeout(function () {
//       jQuery("#contact_us").removeClass("shake-btn");
//     }, 10000);
//   } else if (scroll >= 900) {
//     jQuery("#contact_us").addClass("shake-btn");
//     setTimeout(function () {
//       jQuery("#contact_us").removeClass("shake-btn");
//     }, 10000);
//   } else if (scroll >= 1200) {
//     jQuery("#contact_us").addClass("shake-btn");
//     setTimeout(function () {
//       jQuery("#contact_us").removeClass("shake-btn");
//     }, 10000);
//   }
// });
// jQuery('.testimonial-slider > li:first-child').addClass('active');
// setInterval(function()
// {
//     // Remove .active class from the active li, select next li sibling.
//     var next = jQuery('.testimonial-slider > li.active').removeClass('active').next('li');
//     // Did we reach the last element? Of so: select first sibling
//     if (!next.length) next = next.prevObject.siblings('li:first-child');
//     // Add .active class to the li next in line.
//     next.addClass('active');
// }, 40000);

// jQuery('.testimonial .nav-arrow .arrow-prev').click(function(){
//   // Remove .active class from the active li, select next li sibling.
//   var prev = jQuery('.testimonial-slider > li.active').removeClass('active').prev('li');
//   // Did we reach the last element? Of so: select first sibling
//   if (!prev.length) prev = prev.prevObject.siblings('li:last-child');
//   // Add .active class to the li next in line.
//   prev.addClass('active');
// });
// jQuery('.testimonial .nav-arrow .arrow-next').click(function(){
//     // Remove .active class from the active li, select next li sibling.
//     var next = jQuery('.testimonial-slider > li.active').removeClass('active').next('li');
//     // Did we reach the last element? Of so: select first sibling
//     if (!next.length) next = next.prevObject.siblings('li:first-child');
//     // Add .active class to the li next in line.
//     next.addClass('active');
// });

jQuery(".ac-back").click(function (e) {
  e.preventDefault();
  jQuery(".product-feature-tab ul").animate(
    {
      scrollLeft: "+=200px",
    },
    "slow"
  );
});

jQuery(".ac-fow").click(function (e) {
  e.preventDefault();
  jQuery(".product-feature-tab ul").animate(
    {
      scrollLeft: "-=200px",
    },
    "slow"
  );
});
//  jQuery('.btn').append( '<span class="effect"></span>' );
jQuery(".btn")
  .on("mouseenter", function (e) {
    var parentOffset = jQuery(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    jQuery(this).find("span.effect").css({ top: relY, left: relX });
  })
  .on("mouseout", function (e) {
    var parentOffset = jQuery(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    jQuery(this).find("span.effect").css({ top: relY, left: relX });
  });

jQuery(".circle-anim1").append(
  '<span class="circle-animation"><span class="span1"></span><span class="span2"></span><span class="span3"></span><span class="span4"></span></span>'
);
jQuery(".circle-anim2").append(
  '<span class="circle-animation canim-2"><span class="span1"></span><span class="span2"></span><span class="span3"></span><span class="span4"></span></span>'
);

// if (typeof videos.loop == 'boolean') { // loop supported
//   videos.loop = true;
// } else { // loop property not supported
//   videos.addEventListener('ended', function () {
//     this.currentTime = 0;
//     this.play();
//   }, false);
// }
// //...
// videos.play();

jQuery(".counter").each(function () {
  var $this = jQuery(this),
    countTo = $this.attr("data-count");

  jQuery({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },
    {
      duration: 4000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      },
    }
  );
});

jQuery(document).ready(function () {
  // Select and loop the container element of the elements you want to equalise
  jQuery(".case-studies-slider").each(function () {
    // Cache the highest
    var highestBox = 0;

    // Select and loop the elements you want to equalise
    jQuery(".insights-card", this).each(function () {
      // If this box is higher than the cached highest then store it
      if (jQuery(this).height() > highestBox) {
        highestBox = jQuery(this).height();
      }
    });

    // Set the height of all those children to whichever was highest
    jQuery(".insights-card", this).height(highestBox);
  });

  jQuery(".contact-form-content").addClass("shape-aw-top");
  jQuery("svg").each(function () {
    jQuery(this).find("g").removeAttr("clip-path");
    jQuery(this).find("clipPath").remove();
  });
  // <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1920" height="181.318" viewBox="0 0 1920 181.318"><defs><clipPath id="clip-path"><rect id="Rectangle_8161" data-name="Rectangle 8161" width="1920" height="181.318" transform="translate(0 4044)" fill="#fff"/></clipPath></defs><g id="Mask_Group_20" data-name="Mask Group 20" transform="translate(0 -4044)" clip-path="url(#clip-path)"><path id="Subtraction_18" data-name="Subtraction 18" d="M1995.9,1789.985c-34.173,0-68.729-.607-102.709-1.8-33.758-1.188-67.861-2.989-101.359-5.353-33.259-2.344-66.866-5.309-99.888-8.812-32.8-3.48-65.869-7.581-98.287-12.187-32.233-4.58-64.723-9.787-96.562-15.476-31.653-5.654-63.52-11.937-94.714-18.675-31.031-6.7-62.233-14.032-92.738-21.789-30.355-7.717-60.85-16.065-90.637-24.813-29.673-8.716-59.419-18.054-88.411-27.755-28.887-9.664-57.841-19.961-86.059-30.6-28.106-10.6-56.229-21.829-83.585-33.371-27.26-11.5-54.5-23.63-80.978-36.048-26.4-12.381-52.724-25.382-78.253-38.64-25.478-13.229-50.847-27.072-75.4-41.143-24.521-14.05-48.887-28.705-72.421-43.558-23.519-14.844-46.841-30.283-69.318-45.89s-44.708-31.8-66.086-48.131-42.5-33.259-62.732-50.286c-20.27-17.055-40.205-34.669-59.253-52.354-19.075-17.712-37.8-35.992-55.646-54.335-17.882-18.38-35.349-37.3-51.916-56.229-16.626-19-32.794-38.527-48.058-58.038-15.32-19.579-30.15-39.685-44.078-59.757-13.972-20.134-27.419-40.788-39.969-61.389-12.6-20.684-24.622-41.858-35.738-62.936-11.179-21.2-21.736-42.867-31.378-64.394-9.7-21.649-18.747-43.775-26.9-65.766-8.2-22.121-15.694-44.681-22.286-67.051C33.915,660.889,28.009,637.927,23,615.157,17.953,592.225,13.682,568.89,10.3,545.8c-3.4-23.271-6-46.951-7.707-70.381C.875,451.824,0,427.829,0,404.1a979.972,979.972,0,0,1,22.075-206.82,1016.137,1016.137,0,0,1,27-99.97C59.681,64.715,72.164,31.975,86.178,0a1132.077,1132.077,0,0,0,52.609,104.678c19.327,33.983,40.878,67.854,64.057,100.669C225.88,237.961,251.1,270.355,277.8,301.63c26.566,31.118,55.271,61.909,85.313,91.52,29.932,29.5,61.935,58.563,95.122,86.377,33.128,27.763,68.248,54.965,104.386,80.853s74.194,51.106,113.1,74.951C714.688,659.208,755.491,682.313,797,704c41.621,21.747,84.991,42.611,128.9,62.011,44.112,19.488,89.863,37.984,135.983,54.973,46.4,17.093,94.353,33.093,142.517,47.555,48.528,14.571,98.493,27.947,148.506,39.759,206.494,48.764,422.829,73.488,643,73.488s436.5-24.725,643-73.488c50.013-11.812,99.978-25.187,148.506-39.759,48.166-14.462,96.114-30.462,142.517-47.555C2976.036,804,3021.786,785.5,3065.9,766.012c43.905-19.4,87.274-40.262,128.9-62.011,41.5-21.686,82.307-44.789,121.274-68.671,38.918-23.852,76.972-49.068,113.1-74.951s71.256-53.088,104.387-80.853c33.188-27.813,65.189-56.875,95.121-86.377,30.043-29.61,58.747-60.4,85.313-91.52,26.711-31.284,51.931-63.679,74.957-96.283,23.184-32.822,44.735-66.693,64.057-100.669A1132.308,1132.308,0,0,0,3905.625,0c14.014,31.97,26.5,64.71,37.105,97.31a1015.641,1015.641,0,0,1,27,99.97A980.228,980.228,0,0,1,3991.8,404.1c0,23.728-.875,47.722-2.6,71.317-1.709,23.433-4.3,47.112-7.707,70.381-3.377,23.089-7.646,46.425-12.691,69.359-5.012,22.771-10.918,45.733-17.555,68.246-6.59,22.37-14.09,44.93-22.285,67.051-8.148,21.99-17.2,44.116-26.9,65.766-9.643,21.526-20.2,43.192-31.378,64.394-11.125,21.1-23.149,42.271-35.738,62.936-12.544,20.593-25.991,41.247-39.969,61.389-13.926,20.068-28.755,40.174-44.076,59.757-15.267,19.514-31.436,39.041-48.06,58.038-16.567,18.933-34.036,37.852-51.915,56.229-17.832,18.326-36.554,36.607-55.646,54.335-19.059,17.7-39,35.311-59.252,52.354s-41.354,33.954-62.731,50.286-43.62,32.53-66.088,48.131-45.782,31.036-69.317,45.89-47.891,29.5-72.421,43.558c-24.556,14.072-49.923,27.915-75.4,41.143-25.534,13.261-51.862,26.262-78.251,38.64-26.467,12.416-53.713,24.545-80.979,36.048-27.356,11.542-55.479,22.77-83.584,33.371-28.206,10.639-57.16,20.936-86.06,30.6-29,9.7-58.744,19.042-88.41,27.755-29.8,8.75-60.291,17.1-90.637,24.813-30.512,7.759-61.713,15.089-92.737,21.789-31.2,6.737-63.063,13.021-94.714,18.675-31.84,5.688-64.329,10.9-96.562,15.476-32.418,4.606-65.487,8.707-98.286,12.188-33.02,3.5-66.627,6.469-99.887,8.813-33.5,2.363-67.6,4.164-101.36,5.353C2064.634,1789.378,2030.076,1789.985,1995.9,1789.985Z" transform="translate(-1035.9 2421.628)" fill="#41bfe7" /></g></svg>
  var mySecondDiv = jQuery('<div class="shape-bottom"></div>');
  jQuery(".circle-shape").append(mySecondDiv);
  var myshapearrowDiv = jQuery(
    '<div class="shape-top"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1920" height="213.646" viewBox="0 0 1920 213.646"><defs><linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#0d3461"/><stop offset="1" stop-color="#41bfe7"/></linearGradient></defs><g id="Mask_Group_21" data-name="Mask Group 21" transform="translate(0 -4795)" clip-path="url(#clip-path)"><path id="Path_46339" data-name="Path 46339" d="M2107.856,3507.776c74.517-14.069,155.885-14.069,230.4,0L4234.315,3805.8C4598.338,3874.529,4551.425,0,4165.092,0H372.977C-13.354,0-152.224,3874.529,211.8,3805.8Z" transform="translate(3188.832 8483.046) rotate(180)" fill="url(#linear-gradient)"/></g></svg></div>'
  );
  jQuery(".shape-aw-top").append(myshapearrowDiv);

  jQuery(".page-insight .insights-card").each(function () {
    var styleAttribute = jQuery(this).find(".client-details").attr("style");
    jQuery(this).children(".insights-content").attr("style", styleAttribute);
    jQuery(this).find(".client-details").removeAttr("style");
  });
});

var controller = new ScrollMagic.Controller();

// var timelinedrop = new TimelineMax();
// var tween1 = TweenMax.to(".menu-section .drops", 0.5, {
//   scale: 1,
//   y: 320,
//   opacity: 1,
//   ease: Linear.easeNone,
// });
// var tween2 = TweenMax.to(".menu-section .place-work-center", 1, {
//   scale: 1,
//   opacity: 1,
//   ease: Sine.easeOut,
//   delay: 1.5,
// });

// var menuitem1 = TweenMax.to(".menu-section .menu li:first-child", 0.5, {
//   opacity: 1,
//   y: 20,
//   x: -400,
//   ease: Sine.easeOut,
// });
// var menuitem2 = TweenMax.to(".menu-section .menu li:nth-child(2)", 0.2, {
//   opacity: 1,
//   y: 170,
//   x: -50,
//   ease: Sine.easeOut,
// });
// var menuitem3 = TweenMax.to(".menu-section .menu li:nth-child(3)", 0.3, {
//   opacity: 1,
//   y: 20,
//   x: 300,
//   ease: Sine.easeOut,
// });
// var menuitem4 = TweenMax.to(".menu-section .menu li:nth-child(4)", 0.2, {
//   opacity: 1,
//   y: 270,
//   x: -500,
//   ease: Sine.easeOut,
// });
// var menuitem5 = TweenMax.to(".menu-section .menu li:nth-child(5)", 0.5, {
//   opacity: 1,
//   y: 370,
//   x: -200,
//   ease: Sine.easeOut,
// });
// var menuitem6 = TweenMax.to(".menu-section .menu li:nth-child(6)", 0.4, {
//   opacity: 1,
//   y: 344,
//   x: 172,
//   ease: Sine.easeOut,
// });
// var menuitem7 = TweenMax.to(".menu-section .menu li:nth-child(7)", 0.7, {
//   opacity: 1,
//   y: 270,
//   x: 400,
//   ease: Sine.easeOut,
// });
// var menuitem8 = TweenMax.to(".menu-section .menu li:nth-child(8)", 0.4, {
//   opacity: 1,
//   y: 490,
//   x: -450,
//   ease: Sine.easeOut,
// });
// var menuitem9 = TweenMax.to(".menu-section .menu li:nth-child(9)", 0.7, {
//   opacity: 1,
//   y: 550,
//   x: -50,
//   ease: Sine.easeOut,
// });
// var menuitem10 = TweenMax.to(".menu-section .menu li:nth-child(10)", 0.3, {
//   opacity: 1,
//   y: 510,
//   x: 450,
//   ease: Sine.easeOut,
// });

// timelinedrop
//   .add(tween1)
//   .add(tween2)
//   .add(menuitem1)
//   .add(menuitem2)
//   .add(menuitem3)
//   .add(menuitem4)
//   .add(menuitem5)
//   .add(menuitem6)
//   .add(menuitem7)
//   .add(menuitem8)
//   .add(menuitem9)
//   .add(menuitem10);
// create a scene
new ScrollMagic.Scene({
  triggerElement: ".menu-section",
  triggerHook:1,
  reverse: false,
}) // pins the element for the the scene's duration
  // .setTween(timelinedrop)
  // .on("enter", function (event) {
  //   jQuery(".menu-section .drops").delay("slow").fadeOut();
  //   jQuery("#vd1")[0].push();
  // })
  .setClassToggle(".menu-section", "show-drop")
  .addTo(controller); // assign the scene to the controller

jQuery(".long-time-cygnetian .testimonial-slider").owlCarousel({
  items: 1,
});

function pepoleclu() {
  var widnowWidth = jQuery(window).width();
  var colRight = jQuery(".pepole-culture-album .col-right").width();
  var containerWidth = jQuery(".pepole-culture-album .container").width();
  var coladdWidth = (widnowWidth - containerWidth) / 2;
  var restultWidth = colRight + coladdWidth;
  jQuery(".pepole-culture-album .col-right").css("min-width", restultWidth);
}

jQuery(".album-item .album-item-box .overlay").each(function () {
  $overlay = jQuery(this).clone();
  jQuery(this).siblings(".awp_center").find(".group").append($overlay);
  jQuery(this).remove();
});

jQuery(document).ready(function () {
  pepoleclu();

  jQuery(".cdes").hover(function () {
    jQuery(".des-logo").toggleClass("highlight-logo");
  });
  jQuery(".cygnet-teatech").hover(function () {
    jQuery(".tt-logo").toggleClass("highlight-logo");
  });
  jQuery(".cygnetirp").hover(function () {
    jQuery(".irp-logo").toggleClass("highlight-logo");
  });
  jQuery(".cygnetfintech").hover(function () {
    jQuery(".ft-logo").toggleClass("highlight-logo");
  });
  jQuery(".testingwhiz").hover(function () {
    jQuery(".tw-logo").toggleClass("highlight-logo");
  });
  jQuery(".automationwhiz").hover(function () {
    jQuery(".aw-logo").toggleClass("highlight-logo");
  });
  jQuery(".cygnature").hover(function () {
    jQuery(".cn-logo").toggleClass("highlight-logo");
  });
  jQuery(".git").hover(function () {
    jQuery(".gitlab-logo").toggleClass("highlight-logo");
  });

  // Home page Sticky menu
  jQuery(".home-menu").after(
    '<div class="home-sticky-section"><div class="side-navigation" id="homesidenav"><ul class="home-sticky-inner"><a class="navigation__link" href="#whoweare">Who We Are</a><a class="navigation__link" href="#whatwedo">What We Do</a><a class="navigation__link" href="#ourwork">Our Work</a></ul></div></div>'
  );
  jQuery(".stiky1").each(function () {
    $StikyHomeoverlay = jQuery(this).clone();
    jQuery(".home-sticky-section").append($StikyHomeoverlay);
    jQuery(this).remove();
  });
  jQuery("#whoweare").after('<section id="whatwedo"></section>');
  jQuery(".stiky-sub").each(function () {
    $StikysubHomeoverlay = jQuery(this).clone();
    jQuery("#whatwedo").append($StikysubHomeoverlay);
    jQuery(this).remove();
  });

  // Home page

 
  jQuery(".stiky-osp-after-content").after(
    '<section class="py-0 osp-sticky-section"></section>'
  ); 
  jQuery(".stiky-osp").each(function () {
    $Stikysosp = jQuery(this).clone();
    jQuery(".osp-sticky-section").append($Stikysosp);
    jQuery(this).remove();
  });

  jQuery(".osp-sticky-section > .stiky-osp:first-child").before(
    '<div class="tce-about-icon-box"></div>'
  );
  jQuery(".ops-stiky-icon-box .icon-box-list").each(function () {
    $Stikysospiconbox = jQuery(this).clone();
    jQuery(".tce-about-icon-box").prepend($Stikysospiconbox);
    jQuery(this).remove();
  });

  jQuery(".Website-list a[href*=\\#]").bind("click", function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior
    var target = jQuery(this).attr("href"); // Set the target as variable
    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    jQuery("html, body")
      .stop()
      .animate(
        {
          scrollTop: jQuery(target).offset().top
        },
        600,
        function () {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
        }
      );
    return false;
  });
});
jQuery(window).resize(function () {
  pepoleclu();
});

jQuery(window)
  .scroll(function () {
    var scrollDistance = jQuery(window).scrollTop() + 200;
    // Assign active class to nav links while scolling
    jQuery(".home-sticky-section > section").each(function (i) {
      if (jQuery(this).position().top <= scrollDistance) {
        jQuery(".side-navigation .navigation__link.active").removeClass("active");
        jQuery(".side-navigation .navigation__link").eq(i).addClass("active");
      }
    });

    if(jQuery(window).width() > 767){
      jQuery(".osp-sticky-section").each(function (i) {
        if (jQuery(this).position().top <= scrollDistance) {
          jQuery(this).addClass("fix-sticky");
        } else {
          jQuery(this).removeClass("fix-sticky");
        }
      });
    }
  })
  .scroll();

  jQuery(window).on('load', function(){
    jQuery(".home-banner-content").before(
      '<div class="home-banner-with-menu"></div>'
    );
    jQuery(".anim-home-sec").each(function () {
      $homeaanim = jQuery(this).clone();
      jQuery(".home-banner-with-menu").append($homeaanim);
      jQuery(this).remove();
    });
  
  });
