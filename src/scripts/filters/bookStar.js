/**
 *
 * @description
 *
 */

angular.module('JustinApp').filter('bookStar', [function() {
  return function(num) {
    var retCls = 'star-level-';
    var star = parseFloat(num, 10);
    if (isNaN(star)) {
      return '';
    }
    retCls = retCls + parseInt(star/1, 10);
    if (star%1 === 0) {
      retCls = retCls + '-0';
    } else {
      retCls = retCls + '-5';
    }
    return retCls;
  };
}]);
