// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require gmaps4rails/googlemaps.js
//= require_tree .

// jQuery.ajaxSetup({
//   'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")}
// })
// 
// jQuery.fn.submitWithAjax = function() {
//   this.submit(function() {
//     $.post(this.action, (this).serialize(), null, "script");
// 	return false;
//   })
//   return this;
// };
// 
// $(document).ready(function() {
//   $("#new_map").submitWithAjax();
// })

// $('#gmaps').live('pageshow',function(event){
// 
//   Gmaps.loadMaps(); 
// });

$(function(){
  
  $("#new_map_form_link").click(function(e) {
    e.preventDefault();
    $("#new_map").show();
    $("#new_map_form_link").hide();
  });
});






