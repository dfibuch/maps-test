angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicPlatform) {
  let gMap;

  $ionicPlatform.ready().then(() => {
    let mapElement = document.getElementById('map');
    let mapOptions = {
      mapType: plugin.google.maps.MapTypeId.HYBRID
    };
    let map = window.plugin.google.maps.Map.getMap(mapElement, mapOptions);
    map.one(plugin.google.maps.event.MAP_READY, () => {
      gMap = map;
    });
  });

  function addAndRemove() {
    let mapMesser = new MapMesser(gMap);
    for (let i = -80; i < 80; i += 1) {
      // mapMesser.drawAndMoveMarker(i);
      mapMesser.addAndRemoveMarker(i);
    }
  }

  return {
    addAndRemove
  };
});
