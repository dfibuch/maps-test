class MapMesser {

    constructor(map) {
        this.map = map;
    }

    drawAndMoveMarker(lat) {
        let marker = this.map.addMarker({ position: {lat: lat, lng: 0} }, newMarker => {
            setInterval(
                () => {
                    newMarker.setPosition({ lat: lat, lng: new Date().getMilliseconds() / 10 });
                },
                1);
        });
    }
}