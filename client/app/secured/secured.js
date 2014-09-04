'use strict';

angular.module('angularFullstackStormpathApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/secured', {
        templateUrl: 'app/secured/secured.html',
        controller: 'SecuredCtrl'
      });
  });
