var $$ = $.fn;

$$.extend({
  SplitID : function()
  {
    return this.attr('id').split('-').pop();
  },

  Slideshow : {
    Ready : function()
    {
      $('div.tmpSlideshowControl2')
        .hover(
          function() {
            $(this).addClass('tmpSlideshowControlOn2');
          },
          function() {
            $(this).removeClass('tmpSlideshowControlOn2');
          }
        )
        .click(
          function() {
            $$.Slideshow.Interrupted = true;

            $('div.tmpSlide2').hide();
            $('div.tmpSlideshowControl2').removeClass('tmpSlideshowControl2Active');

            $('div#tmpSlide2-' + $(this).SplitID()).fadeIn('slow')
            $(this).addClass('tmpSlideshowControl2Active');
          }
        );

      this.Counter = 1;
      this.Interrupted = false;

      this.Transition();
    },

    Transition : function()
    {
      if (this.Interrupted) {
        return;
      }

      this.Last = this.Counter - 1;

      if (this.Last < 1) {
        this.Last = 3;
      }

      $('div#tmpSlide2-' + this.Last).fadeOut(
        'slow',
        function() {
          $('div#tmpSlideshowControl2-' + $$.Slideshow.Last).removeClass('tmpSlideshowControl2Active');
          $('div#tmpSlideshowControl2-' + $$.Slideshow.Counter).addClass('tmpSlideshowControl2Active');
          $('div#tmpSlide2-' + $$.Slideshow.Counter).fadeIn('slow');

          $$.Slideshow.Counter++;

          if ($$.Slideshow.Counter > 3) {
            $$.Slideshow.Counter = 1;
          }

          setTimeout('$$.Slideshow.Transition();', 10000);
        }
      );
    }
  }
});

$(document).ready(
  function() {
    $$.Slideshow.Ready();
  }
);