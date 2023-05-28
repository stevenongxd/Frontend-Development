// Vanilla JS
// document.getElementById('form-register').addEventListener('submit', (e) => {
//   e.preventDefault();
//   window.location.href = 'index.html';
// });

// jQuery
$(function(){
  $('#form-register').submit((e) => {
    e.preventDefault();
    window.location.href = 'index.html';
  }); 

  $('#back').click(() => {
    window.location.href = 'register.html';
  });

  $('#next').click(() => {
    window.location.href = 'slide.html';
  }); 

  $('#btn1').click(() => {
    /* 
    Parameter for .show(); 
    | .show(speed, easing, callback) 
    | ex: .show(5000) = 5s 
    | .show('slow') = 600ms 
    | .show('fast') = 200ms 
    | .show('normal') = 400ms
    */
    $('#panel1').show('slow');
  });

  $('#btn2').click(() => {
    $('#panel2').hide('slow');
  });

  $('#btn3').click(() => {
    $('#panel3').hide('slow').show('slow');
  });

  $('#btn4').click(() => {
    $('#panel4').toggle('slow');
  });

  $('#btn5').click(() => {
    $('#panel5').slideDown('slow');
  });

  $('#btn6').click(() => {
    $('#panel6').slideUp('slow');
  });

  $('#btn7').click(() => {
    $('#panel7').slideUp('slow').slideDown('slow');
  });

  $('#btn8').click(() => {
    $('#panel8').slideToggle('slow');
  });

  $('#btn9').click(() => {
    $('#panel9').fadeIn('slow');
  });

  $('#btn10').click(() => {
    $('#panel10').fadeOut('slow');
  });

  $('#btn11').click(() => {
    $('#panel11').fadeOut('slow').fadeIn('slow');
  });

  $('#btn12').click(() => {
    $('#panel12').fadeToggle('slow');
  });
  
  let isShowing = true;
  $('#btn13').click(() => {
    if (isShowing) {
      $('#panel13').fadeTo('slow', 0.5);
      isShowing = false;
    }else {
      $('#panel13').fadeTo('slow', 1);
      isShowing = true;
    }
  });

  let $slider = $('#slider');
  const width = 1869;
  $('.right').click(() => {
    $slider.animate({
      left: -width

    }, 1000, () => {
      $('#slider :first-child').appendTo($slider);
      $slider.css('left', 0);
    });
  });

  $('.left').click(() => {
    $slider.animate({
      left: width
    }, 1000, () => {
      $('#slider :last-child').prependTo($slider);
      $slider.css('left', 0);
    });
  });

});

