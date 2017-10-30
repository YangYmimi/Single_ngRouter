angular.module('JustinApp')
  .factory('bookCache', ['$cacheFactory', function($cacheFactory) {
    return $cacheFactory('super-cache');
  }]);
