

// JavaScript Document
var div_top = $('.header-section').offset().top;

$(window).scroll(function () {
    var window_top = $(window).scrollTop() - 0;
    if (window_top > div_top) {
        if (!$('.header-section').is('.sticky')) {
            $('.header-section').addClass('sticky');
        }
    } else {
        $('.header-section').removeClass('sticky');
    }
});

/* Variables */
var row = $(".addskills");

function addRow() {
    row.clone(true, true).appendTo("#addskillsattributes");
}

function removeRow(button) {
    button.closest("div.addskills").removed();
}

$('.addskills:first-child').find('.removed').hide();

/* Doc ready */
$(".add").on('click', function () {
    addRow();
    if ($(".addskills").length > 1) {
        //alert("Can't removed row.");
        $(".removed").show();
    }
});
$(".removed").on('click', function () {
    if ($(".addskills").size() == 1) {
        //alert("Can't removed row.");
        $(".removed").hide();
    } else {
        removeRow($(this));

        if ($(".addskills").size() == 1) {
            $(".removed").hide();
        }
    }
});

// tabbed content
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    /*$(".tabs").css("margin-top", function(){ 
       return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
    });*/
});
$(".tab_container").css("min-height", function () {
    return $(".tabs").outerHeight() + 50;
});
/* if in drawer mode */
$(".tab_drawer_heading").click(function () {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});

// JavaScript Document
$(".show-more").click(function () {
    if ($(".show-more-text").hasClass("show-more-height")) {
        $(this).text("Less...");
    } else {
        $(this).text("More...");
    }

    $(".show-more-text").toggleClass("show-more-height");
});

$(".show-more2").click(function () {
    if ($(".show-more-text2").hasClass("show-more-height2")) {
        $(this).text("Less...");
    } else {
        $(this).text("More...");
    }

    $(".show-more-text2").toggleClass("show-more-height2");
});



// JavaScript Document
$('.coaches-js').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }
    ]
});

// JavaScript Document
$('#btn-open').click(function () {
    $('#filter-content').slideToggle({
        direction: "up"
    }, 300);
    $(this).toggleClass('Close');
});

// JavaScript Document
$('.popular-teachers-js').slick({
    autoplay: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1.4,
                slidesToScroll: 1,
                infinite: false
            }
        }
    ]
});

// Anchor Sub Nav  - Sticky Header
$(function () {

    var anchorLink = $('ul.tabs-details li a'),
        anchorNav = $('ul.tabs-details');

    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 0) {
            $('.tabs-content').each(function (i) {
                if ($(this).position().top <= windscroll) {
                    $('ul.tabs-details li a.active').removeClass('active');
                    anchorLink.eq(i).addClass('active');
                }
            });

        } else {

            $(' ul li a.active').removeClass('active');
        }

    }).scroll();
});

// Anchor Sub Nav  - Active on click
$('ul.tabs-details li a').on("click", function (f) {
    $('ul.tabs-details li a.active').removeClass('active');
    $(this).addClass('active');
});


// var div_top = $('.tabs-details').offset().top;

// $(window).scroll(function () {
//     var window_top = $(window).scrollTop() - 0;
//     if (window_top > div_top) {
//         if (!$('.tabs-details').is('.sticky')) {
//             $('.tabs-details').addClass('sticky');
//         }
//     } else {
//         $('.tabs-details').removeClass('sticky');
//     }
// });

// JavaScript Document
$('.certificates-js').slick({
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1.4,
                slidesToScroll: 1,
                infinite: false
            }
        }
    ]
});

// JavaScript Document
$('.photos-js').slick({
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1.4,
                slidesToScroll: 1,
                infinite: false
            }
        }
    ]
});

// JavaScript Document
$('.videos-js').slick({
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1.4,
                slidesToScroll: 1,
                infinite: false
            }
        }
    ]
});

// JavaScript Document
$('.recommended-coaches-js').slick({
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false
            }
        }
    ]
});

// JavaScript Document
$('.recommended-academies-js').slick({
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false
            }
        }
    ]
});

// JavaScript Document
$("#FileInput").on('change', function (e) {
    var labelVal = $(".title").text();
    var oldfileName = $(this).val();
    fileName = e.target.value.split('\\').pop();

    if (oldfileName == fileName) { return false; }
    var extension = fileName.split('.').pop();

    if ($.inArray(extension, ['jpg', 'jpeg', 'png']) >= 0) {
        $(".filelabel i").removeClass().addClass('fa fa-file-image-o');
        $(".filelabel i, .filelabel .title").css({ 'color': '#64CE23' });
        $(".filelabel").css({ 'border': ' 1px solid #64CE23' });
    }
    else if (extension == 'pdf') {
        $(".filelabel i").removeClass().addClass('fa fa-file-pdf-o');
        $(".filelabel i, .filelabel .title").css({ 'color': '#FB5D52' });
        $(".filelabel").css({ 'border': ' 1px solid #FB5D52' });

    }
    else if (extension == 'doc' || extension == 'docx') {
        $(".filelabel i").removeClass().addClass('fa fa-file-word-o');
        $(".filelabel i, .filelabel .title").css({ 'color': '#64CE23' });
        $(".filelabel").css({ 'border': ' 2px solid #64CE23' });
    }
    else {
        $(".filelabel i").removeClass().addClass('fa fa-file-o');
        $(".filelabel i, .filelabel .title").css({ 'color': '#484C5B' });
        $(".filelabel").css({ 'border': ' 1px solid #484C5B' });
    }

    if (fileName) {
        if (fileName.length > 10) {
            $(".filelabel .title").text(fileName.slice(0, 4) + '...' + extension);
        }
        else {
            $(".filelabel .title").text(fileName);
        }
    }
    else {
        $(".filelabel .title").text(labelVal);
    }
});

// Hide the extra content initially, using JS so that if JS is disabled, no problemo:
$('.read-more-content').addClass('hide')
$('.read-more-show, .read-more-hide').removeClass('hide')

// Set up the toggle effect:
$('.read-more-show').on('click', function (e) {
    $(this).next('.read-more-content').removeClass('hide');
    $(this).addClass('hide');
    e.preventDefault();
});

$('.read-more-hide').on('click', function (e) {
    $(this).parent('.read-more-content').addClass('hide');
    var moreid = $(this).attr("more-id");
    $('.read-more-show#' + moreid).removeClass('hide');
    e.preventDefault();
});

// JavaScript Document
function addacustomprice() {
    jQuery("#addacustompricerow")
        .append(`
      <div class="row g-2 g-md-3 mt-1"><div class="col-lg-6 col-md-6"><input type="text" class="form-control" id="" value="" placeholder="Enter Package Name"></div><div class="col-lg-6 col-md-6"><input type="text" class="form-control" id="" value="" placeholder="Enter Amount"></div></div>
      `)
}

// Tabs

$(".tabContent").hide();
$("ul.tabs li:first").addClass("active").show();
$(".tabContent:first").show();

$("ul.tabs li").click(function () {
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tabContent").hide();
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
});