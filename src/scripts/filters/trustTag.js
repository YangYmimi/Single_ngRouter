/**
 * @description
 * Use angular module - $sce
 */

'use strict';

angular.module('JustinApp').filter('trustTag', ['$sce', function($sce) {
  return function(htmlTags) {
    /* same as = trustAs($sce.HTML, value) */
    return $sce.trustAsHtml(htmlTags);
  };
}]);
