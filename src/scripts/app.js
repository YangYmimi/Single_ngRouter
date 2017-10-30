/* angular enter file */

"use strict";//严格和非严格模式？

/* 定义模块，注入ngRoute和translate模块 */
/* 这里用到了$routeProvider和$translateProvider，初学可以瞅瞅，这也是angular1中比较常用的provider了。 */
angular.module('JustinApp', ['ngRoute', 'pascalprecht.translate'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    /* configure html5 */
    $locationProvider.html5Mode(false);

    /* Use $routeProvider to config route states */
    $routeProvider
      .when('/', {
        templateUrl: 'tpls/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .when('/list/:language', {
        templateUrl: 'tpls/bookList.html',
        controller: 'BookListCtrl'
      })
      .when('/detail/:bookId/:language', {
        templateUrl: 'tpls/bookDetail.html',
        controller: 'BookDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  /* 国际化采用的是Service的方式去定义，然后再注入进来 */
  .config(['$translateProvider', 'TRANSLATE_ASSETS_zh_CN', 'TRANSLATE_ASSETS_en_US', function($translateProvider, TRANSLATE_ASSETS_zh_CN, TRANSLATE_ASSETS_en_US) {
    $translateProvider
      .translations('zh_CN', TRANSLATE_ASSETS_zh_CN)
      .translations('en_US', TRANSLATE_ASSETS_en_US);
    $translateProvider.preferredLanguage('zh_CN');
  }])
  /* 可以全局控制$sce子系统，但是angular是建议我们开启的,这个code可以不写的，只是让大家知道有这么个东西而已 */
  .config(['$sceProvider', function($sceProvider) {
    $sceProvider.enabled(true);
  }])
  /* $routeParams可以获取到url的参数有2种方式。
   * (1): 第一种是　":bookId"
   * (2): 第二种是　"?bookId="
  **/
  .run(['$rootScope', '$routeParams', '$translate', function($rootScope, $routeParams, $translate) {
    var supportLanguage = ['en_US', 'zh_CN'];
    $rootScope.$on('$routeChangeSuccess', function(event, next, current) {
      var language = $routeParams.language;
      if (supportLanguage.indexOf(language) === -1) {//如果当前访问的url上没有language这个参数，那么默认使用的是zh_CN
        language = 'zh_CN';//默认中文
      }
      $rootScope.language = language;
      $translate.use(language);
    });
  }]);
