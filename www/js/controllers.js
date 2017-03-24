angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicPlatform) {
  $ionicPlatform.ready().then(() => {
    let mapElement = document.getElementById('map');
    let mapOptions = {
      mapType: plugin.google.maps.MapTypeId.HYBRID
    };
    window.plugin.google.maps.Map.getMap(mapElement, mapOptions);
  });
});
