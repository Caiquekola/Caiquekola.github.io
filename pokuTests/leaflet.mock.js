const L = {
    map: () => ({
        setView: () => {},
        getCenter: () => ({ lat: -14.2350, lng: -51.9253 }),
        setZoom: () => {},
        on: (event, callback) => { 
            // Mock da função `on` para aceitar eventos e callbacks
            if (event === 'click') {
                // Simule o evento de clique com um latlng fictício se necessário
                callback({ latlng: { lat: 0, lng: 0 } });
            }
        }
    }),
    tileLayer: () => ({
        addTo: () => {}
    }),
    marker: () => ({
        addTo: () => {},
        on: (event, callback) => { 
            // Mock da função `on` para aceitar eventos e callbacks
            if (event === 'click') {
                // Simule o evento de clique no marcador com um latlng fictício se necessário
                callback({ latlng: { lat: 0, lng: 0 } });
            }
        },
        bindPopup: () => ({ openPopup: () => {} }),
        getLatLng: () => ({ lat: 0, lng: 0 })
    }),
    latLng: (lat, lng) => ({ lat, lng }),
};

export default L;
