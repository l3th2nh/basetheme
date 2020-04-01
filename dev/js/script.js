/**
 * @file
 * Description.
*/

(function ($, Drupal) {
  Drupal.behaviors.themeToast = {
    attach: function () {
      $('.toast').toast('show');
    }
  }

  Drupal.behaviors.general = {
    attach: function (context, settings) {
    }
  };
})(jQuery, Drupal);
