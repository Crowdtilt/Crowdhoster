var unsavedChangesChecker = function() {
    var warn;
    $('form').find(':input').each(function( i, el ) {
        if (el.type === 'checkbox') {
          if (el.checked != el.defaultChecked) {
              warn = true;
          }
        } else {
          if (el.value != el.defaultValue) {
              warn = true;
          }
        }
    });
    if (warn) {
        return "Your campaign changes have not been saved.";
    }
}

$(function() {
  if ($('#admin_website_form, #admin_campaign_form').length) {
    $(window).bind('beforeunload', unsavedChangesChecker);
  }
});
