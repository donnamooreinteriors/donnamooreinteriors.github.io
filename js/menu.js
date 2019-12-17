jQuery(document).ready(function(e) {
    e("ul.tabs li").click(function() {
      var a = e(this).attr("data-tab");
      e("ul.tabs li").removeClass("current"), e(".tab-content").removeClass("current"), e(this).addClass("current"), e("#" + a).addClass("current")
    })
});

// - - - - - - -

$('ul.tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');
  $('ul.tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
});
