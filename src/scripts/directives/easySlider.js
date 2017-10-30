/**
 *
 * @description
 * This is a very easy directive for slider picture which is used in your book list page
 * Tab Applications.
 *
 * @example
   <justin-easy-slider pics="book.pics"></justin-easy-slider>
   <file name="script.js">
      book.pics = [{img: "pic1.jpg"}, {img: "pic2.jpg"}, {img: "pic3.jpg"}]
   </file>
 *
 */

'use strict';

angular.module('JustinApp').directive('easySlider', ['$interval', function($interval) {
  return {
    restrict: 'E',
    require: '?pics',
    templateUrl: 'tpls/directive/easySlider.html',
    replace: true,
    scope: {
      pictures: '=pics'
    },
    link: function(scope, elem, attrs) {
      var overStar = false;
      var autoSlider = $interval(function() {
        if (overStar) {
          return;
        }
        scope.arrowChange(1);
      }, 3000);

      scope.starIndex = 0;
      scope.changePic = function(index) {
        scope.starIndex = index;
      };

      scope.onOverStar = function() {
        overStar = true;
      };

      scope.onOutStar = function() {
        overStar = false;
      };

      scope.arrowChange = function(direction) {
        if (!scope.pictures || scope.pictures.lenght === 0) {
          return;
        }
        var inc = 1, index = scope.starIndex, len = scope.pictures.length;
        if (direction < 0) {
          inc = -1 * inc;
        }
        index = index + inc;
        if (index < 0) {
          index = len -1;
        }
        if (index >= len) {
          index = 0;
        }
        scope.starIndex = index;
      };

      scope.$on('$destroy', function() {
        $interval.cancel(autoSlider);
      });
    }
  };
}]);
