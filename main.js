(function() {
   'use strict';

   angular
      .module('shop', ['ui.router'])
      .directive('weather', function(storebikes) {
         return {
            restrict: 'E',
            templateUrl: "partials/getweather.html",
            link: function(vm, element, attrs) {

               let weather = storebikes.getWeather(attrs.city);

               weather.then(function(weatherData) {
                  vm.weather = weatherData.data;
               });

            }
         };
      })

   .config(appConfig);

   appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

   function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/404error');

      $stateProvider
         .state('home', {
            url: '/',
            views: {
               'content': {
                  templateUrl: 'partials/home.html',
                  controller: 'ShopController',
                  controllerAs: 'controller'
               },
               'sidebar': {
                  templateUrl: 'partials/nav.html',
               }
            }
         })
         .state('productCategories', {
            url: '/productCategories',
            views: {
               'content': {
                  templateUrl: 'partials/productcategories.html',
                  // controller: 'CategoryController',
                  // controllerAs: 'controller'
               },
               'sidebar': {
                  templateUrl: 'partials/nav.html',
               }
            }
         })
         .state('productDetail', {
            url: '/productDetail',
            views: {
               'content': {
                  templateUrl: 'partials/productdetail.html',
                  // controller: 'ItemController',
                  // controllerAs: 'controller'
               },
               'sidebar': {
                  templateUrl: 'partials/nav.html',
               }
            }
         })
         .state('404', {
            url: '/404',
            templateUrl: 'partials/404error.html',
         })
   }
})();
