(function() {
   angular
      .module('shop')
      .controller('ShopController', function(storebikes,$stateParams) {
         let vm = this;

         let city = $stateParams.weatherData;

         storebikes.getWeather(city);


      });
})();
