(function($) {
  $(function() {
    $('.js-studyitem').click(function() {
      if ($(this).hasClass('Study-tab-list-item-active'))
      {
        return;
      }
      $('.Study-tab-list-item-active').removeClass('Study-tab-list-item-active');
      $(this).addClass('Study-tab-list-item-active');

      var index = $(this).index('.js-studyitem'); //find in "js-studyitem"
      var itemcontent = $('.js-studycontent[data-index='+index+']');
      $('.js-studylist').animate({
        left: 0 - itemcontent.position().left
      },500); //500 milli second
    });
  });
})(jQuery);
