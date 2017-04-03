angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicPlatform) {
  $ionicPlatform.ready().then(() => {
    let mapElement = document.getElementById('map');
    let mapOptions = {
      mapType: plugin.google.maps.MapTypeId.HYBRID
    };
    let map = window.plugin.google.maps.Map.getMap(mapElement, mapOptions);
    map.one(plugin.google.maps.event.MAP_READY, () => {
      let mapMesser = new MapMesser(map);
      for (let i = -80; i < 80; i += 10) {
        mapMesser.drawAndMoveMarker(i);
      }
    });
  });
});
