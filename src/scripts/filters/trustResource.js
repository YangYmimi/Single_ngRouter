/**
 * @description
 * Use angular module - $sce
 */

'use strict';

angular.module('JustinApp').filter('trustResource', ['$sce', function($sce) {
  return function(url) {
    /* same as = trustAs($sce.RESOURCE_URL, value) */
    return $sce.trustAsResourceUrl(url);
  };
}]);
