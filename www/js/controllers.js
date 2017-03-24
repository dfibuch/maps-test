angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicPlatform) {
  $ionicPlatform.ready().then(() => {
    let mapElement = document.getElementById('map');
    window.plugin.google.maps.Map.getMap(mapElement, {});
  });
});
