//Script for cleaning action attr in form for Django-inline -paginator.
(function ($) {
  $(document).ready(function() {
    $('form').removeAttr('action');
  });
})(django.jQuery);