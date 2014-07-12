jQuery(function(){

	// Add uid in body classes
  var uid = Drupal.settings.currentUser;
  jQuery("body").addClass("user-"+uid);
  
  // Main Menu editor
  jQuery("#menu-editor-overview-form th.description").next(".checkbox")
    .text("Enabled");
  /*
  jQuery("#menu-editor-overview-form .tabledrag-hide").prev(".checkbox")
    .hide()
    .remove();
  */
  jQuery("input[id^='edit-mlid-56'][id$='link-path']").attr("disabled","disabled");
  jQuery("input[id^='edit-mlid-56'][id$='-delete'], label[for^='edit-mlid-56'][for$='-delete'], #menu-overview .master-delete-checkbox").hide().remove();
  
  jQuery("input[id^='edit-mlid-2526'][id$='link-path']").attr("disabled","disabled");
  jQuery("input[id^='edit-mlid-2526'][id$='-delete'], label[for^='edit-mlid-2526'][for$='-delete']").hide().remove();
  
  // Social Links menu editor
  jQuery(".page-admin-structure-menu-manage-menu-social-buttons-poweredit #menu-editor-overview-form .delete-checkbox")
    .hide()
    .remove();
  
  jQuery("#edit-mlid-558-link-path").attr("disabled","disabled");
  
  // Go Back link
  jQuery("#block-block-6 p").prepend('<a class="go-back" href="' + document.referrer + '">go back</a>');
  
  //Node form
  jQuery("#page-node-form #edit-menu-icon").hide();
  
  // Administrator tables
  jQuery("td.views-field-status").each(function(){
    var text = jQuery(this).text().trim(),
        parent = jQuery(this).parent("tr");
    if (text == "No") {
      parent.addClass("disabled-row");
    }
  });
  
  
}); // end of all codes