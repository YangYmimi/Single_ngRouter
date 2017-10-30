/**
 *
 * @description
 * This is a very easy directive for slider picture which is used in your book list page
 * Tab Applications.
 *
 * @example
   <easy-slider pics="book.pics"></easy-slider>
   <file name="script.js">
        hotel.pics = [{img: "pic1.jpg"}, {img: "pic2.jpg"}, {img: "pic3.jpg"}]
   </file>
 *
 */

'use strict';

angular.module('JustinApp').directive('easyModalSlider', ['$anchorScroll', function($anchorScroll) {
  return {
    restrict: 'E',
    require: '?pics',
    templateUrl: 'tpls/directive/easyModalSlider.html',
    replace: true,
    scope: {
      pictures: '=pics'
    },
    link: function(scope, elem, attrs) {
      scope.scrollRandomName =  ("scroll" + Math.random() * 10000).replace('.', '');
      scope.modalShow = false;
      scope.modalHeight = "100px";
      scope.starIndex = 0;
      scope.showModal = function(index) {
        scope.modalHeight =  getDocHeight() + 'px';
        scope.modalShow = true;
        $anchorScroll();
      };

      scope.hideModal = function() {
        scope.modalShow = false;
      };

      var slider = function(direction) {
        if (!scope.pictures) {
          return;
        }
        var len = scope.pictures.length, inc = 1, index = scope.starIndex;
        direction = parseInt(direction, 10);

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

      scope.slideToNext = function(e) {
        e.stopPropagation();
        slider(1);
        $anchorScroll();
      };

      var getDocHeight = function () {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight,document.body.offsetHeight, document.documentElement.offsetHeight,document.body.clientHeight, document.documentElement.clientHeight);
      };

    }
  };
}]);
