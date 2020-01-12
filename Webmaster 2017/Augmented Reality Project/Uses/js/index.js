(function() {
  $('.usesBox').on('click', '.edBox', function(e) {
    var $body, position;
    $body = $('body');
    position = $(this).offset();
    $('.show-content').css({
      clip: "rect(" + position.top + "px, " + ($(this).width() + position.left + 45) + "px, " + ($(this).height() + position.top + 25) + "px, " + position.left + "px )",
      display: 'block'
    });
    setInterval(function() {
      return $('.show-content').css({
        clip: "rect(0px, 120vw, 120vh, 0px)"
      });
    }, 200);
    return $('.show-content').on('click', function() {
      return $(this).css({
        clip: 'initial',
        display: 'none'
      });
    });
  });

}).call(this);

(function() {
  $('.usesBox').on('click', '.enBox', function(e) {
    var $body, position;
    $body = $('body');
    position = $(this).offset();
    $('.show-content2').css({
      clip: "rect(" + position.top + "px, " + ($(this).width() + position.left + 45) + "px, " + ($(this).height() + position.top + 25) + "px, " + position.left + "px )",
      display: 'block'
    });
    setInterval(function() {
      return $('.show-content2').css({
        clip: "rect(0px, 120vw, 120vh, 0px)"
      });
    }, 200);
    return $('.show-content2').on('click', function() {
      return $(this).css({
        clip: 'initial',
        display: 'none'
      });
    });
  });

}).call(this);

(function() {
  $('.usesBox').on('click', '.hBox', function(e) {
    var $body, position;
    $body = $('body');
    position = $(this).offset();
    $('.show-content3').css({
      clip: "rect(" + position.top + "px, " + ($(this).width() + position.left + 45) + "px, " + ($(this).height() + position.top + 25) + "px, " + position.left + "px )",
      display: 'block'
    });
    setInterval(function() {
      return $('.show-content3').css({
        clip: "rect(0px, 120vw, 120vh, 0px)"
      });
    }, 200);
    return $('.show-content3').on('click', function() {
      return $(this).css({
        clip: 'initial',
        display: 'none'
      });
    });
  });

}).call(this);

(function() {
  $('.usesBox').on('click', '.nBox', function(e) {
    var $body, position;
    $body = $('body');
    position = $(this).offset();
    $('.show-content4').css({
      clip: "rect(" + position.top + "px, " + ($(this).width() + position.left + 45) + "px, " + ($(this).height() + position.top + 25) + "px, " + position.left + "px )",
      display: 'block'
    });
    setInterval(function() {
      return $('.show-content4').css({
        clip: "rect(0px, 120vw, 120vh, 0px)"
      });
    }, 200);
    return $('.show-content4').on('click', function() {
      return $(this).css({
        clip: 'initial',
        display: 'none'
      });
    });
  });

}).call(this);

(function() {
  $('.usesBox').on('click', '.oBox', function(e) {
    var $body, position;
    $body = $('body');
    position = $(this).offset();
    $('.show-content5').css({
      clip: "rect(" + position.top + "px, " + ($(this).width() + position.left + 45) + "px, " + ($(this).height() + position.top + 25) + "px, " + position.left + "px )",
      display: 'block'
    });
    setInterval(function() {
      return $('.show-content5').css({
        clip: "rect(0px, 120vw, 120vh, 0px)"
      });
    }, 200);
    return $('.show-content5').on('click', function() {
      return $(this).css({
        clip: 'initial',
        display: 'none'
      });
    });
  });

}).call(this);

(function() {
  $('.usesBox').on('click', '.vBox', function(e) {
    var $body, position;
    $body = $('body');
    position = $(this).offset();
    $('.show-content6').css({
      clip: "rect(" + position.top + "px, " + ($(this).width() + position.left + 45) + "px, " + ($(this).height() + position.top + 25) + "px, " + position.left + "px )",
      display: 'block'
    });
    setInterval(function() {
      return $('.show-content6').css({
        clip: "rect(0px, 120vw, 120vh, 0px)"
      });
    }, 200);
    return $('.show-content6').on('click', function() {
      return $(this).css({
        clip: 'initial',
        display: 'none'
      });
    });
  });

}).call(this);