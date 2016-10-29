/*---------------------*/
/*  Copyright 2016 Logustra
/*  To use this theme you must have a license purchase
/*
/*  01. Preloader
/*  02. Wow
/*  03. Scrolling Nav
/*  04. jQbar
/*  05. Isotope
/*  06. Lightbox
/*  07. Countup
/*  08. Owl Carousel
/*  09. Google Map
/*  10. Tooltip
/*---------------------*/

$(function(){
  "use strict";

  /*----------------------/
  /*  01. Preloader
  /*---------------------*/

  $(document).ready(function() {
    setTimeout(function(){
      $('body').addClass('loaded');
    }, 5000);
  });

  /*----------------------/
  /*  02. Wow
  /*---------------------*/

  new WOW().init();


  /*----------------------/
  /*  03. Scrolling Nav
  /*---------------------*/

  var topoffset = 35; //variable for menu height

  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
    var hash = $(this).find('.active a').attr('href');
    if (hash !== '#home') {
      $('header nav').addClass('inbody');
    }
    else {
      $('header nav').removeClass('inbody');
    }
  });

  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 700);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

  /*----------------------/
  /*  04. jQbar
  /*---------------------*/

  $(document).ready(function () {
      $('#bar-1').jqbar({
        label: 'HTML5',
        barColor: '#e44b23',
        barLength: 350,
        barWidth: 85,
        value: 90,
        orientation: 'v'
      });
      $('#bar-2').jqbar({
        label: 'CSS3',
        barColor: '#3a89c9',
        barLength: 350,
        barWidth: 85,
        value: 85,
        orientation: 'v'
      });
      $('#bar-3').jqbar({
        label: 'PHP',
        barColor: '#4F5D95',
        barLength: 350,
        barWidth: 85,
        value: 95,
        orientation: 'v'
      });
      $('#bar-4').jqbar({
        label: 'JavaScript',
        barColor: '#f1e05a',
        barLength: 350,
        barWidth: 85,
        value: 50,
        orientation: 'v'
      });
      $('#bar-6').jqbar({
        label: 'Java',
        barColor: '#b07219',
        barLength: 350,
        barWidth: 85,
        value: 20,
        orientation: 'v'
      });
      $('#bar-7').jqbar({
        label: 'Laravel',
        barColor: '#D64747',
        barLength: 350,
        barWidth: 85,
        value: 80,
        orientation: 'v'
      });
      $('#bar-8').jqbar({
        label: 'Phalcon',
        barColor: '#2eb393',
        barLength: 350,
        barWidth: 85,
        value: 80,
        orientation: 'v'
      });
      $('#bar-9').jqbar({
        label: 'CI',
        barColor: '#d6ce00',
        barLength: 350,
        barWidth: 85,
        value: 45,
        orientation: 'v'
      });
      $('#bar-10').jqbar({
        label: 'Jquery',
        barColor: '#3a89c9',
        barLength: 350,
        barWidth: 85,
        value: 80,
        orientation: 'v'
      });
      $('#bar-11').jqbar({
        label: 'VueJs',
        barColor: '#00b57f',
        barLength: 350,
        barWidth: 85,
        value: 40,
        orientation: 'v'
      });
  });

  /*----------------------/
  /*  05. Isotope
  /*---------------------*/

  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
      numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
      ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

  /*----------------------/
  /*  06. Lightbox
  /*---------------------*/

  // gallery
  $('.magnific-gallery').each(function(index , value){
    var gallery = $(this);
    var galleryImages = $(this).data('links').split(',');
      var items = [];
      for(var i=0;i<galleryImages.length; i++){
        items.push({
          src:galleryImages[i],
          title:''
        });
      }
      gallery.magnificPopup({
        mainClass: 'mfp-fade',
        items:items,
        gallery:{
          enabled:true,
          tPrev: $(this).data('prev-text'),
          tNext: $(this).data('next-text')
        },
        type: 'image'
      });
  });
  // single
  $(document).ready(function() {
    $('.img-link').magnificPopup({type:'image'});
  });

  /*----------------------/
  /*  07. Countup
  /*---------------------*/

  $('.counter').each(function() {
    var $this = $(this),
      countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 9999,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    });
  });

  function checkAnimation() {
    var $elem = $('.counter');
    if ($elem.hasClass('start')) return;
    if (isElementInViewport($elem)) {
        $elem.addClass('start');
    }
  }

  /*----------------------/
  /*  08. Owl Carousel
  /*---------------------*/

  $(document).ready(function() {
    $("#support").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
    });
  });

  /*----------------------/
  /*  09. Google Map
  /*---------------------*/

  google.maps.event.addDomListener(window, 'load', init);
  function init() {
    var mapOptions = {
        zoom: 13,
        scrollwheel: false,
        DoubleClickZoom: true,
        center: new google.maps.LatLng(-7.8150345, 110.4818201), // New York
        styles: [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var icon = {
      url: "images/map-marker.svg", // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
   var point = new google.maps.LatLng(-7.8150345, 110.4818201);
   var data = "Sukorame, Mangunan <br> Dlingo, Bantul <br><br> <a href='https://www.google.co.id/maps/place/Pondok+Programmer+Pusat/@-7.9317272,110.4314643,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a5366a266035d:0xa5af257ca4df9767!8m2!3d-7.9317325!4d110.433653'>View on Google Maps</a>";
   var infowindow = new google.maps.InfoWindow({
     content: data
   });
    var marker = new google.maps.Marker({
        position: point,
        map: map,
        icon: icon,
    });
    google.maps.event.addListener(marker, 'click', function() {
     infowindow.open(map,marker);
   });
  }

  /*----------------------/
  /*  10. Tooltip
  /*---------------------*/

  $(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  });
});

(function()
{
$('form[data-remote]').on('submit', function(e) {
  var form = $(this);
  var url = form.prop('action');

  $.ajax({
    type: 'POST',
    url: url,
    dataType:'html',
    data: form.serialize(),
    success: function(data){
        var message = "<h4>Success</h4>Your send message <b>Thank You</b>";
        if (message) {
          $('#info').html(message).fadeIn(300).delay(2500).fadeOut(300);
        }
      }
    });
  e.preventDefault();
});
})();