(function() {
   angular
      .module('shop')
      .factory('storebikes', function($http) {
         var bikes = [];

         const getWeather = function(city) {
            var call = $http({
               method: 'GET',
               url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7cf16558d759d14815306832bd7341e2&units=imperial`

            });
            return call;

         }

         return {
            getWeather
         }
      });
})();
