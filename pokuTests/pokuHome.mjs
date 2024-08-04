import { expect } from 'chai';
import sinon from 'sinon';
import L from 'leaflet';
import { initMap } from '../js/home.js'; // ajuste o caminho conforme necessário

describe('Map Initialization', function() {
    let mapStub;

    beforeEach(function() {
        mapStub = {
            setView: sinon.stub().returnsThis(),
            on: sinon.stub()
        };
        sinon.stub(L, 'map').returns(mapStub);
        sinon.stub(L, 'tileLayer').returns({
            addTo: sinon.stub()
        });
        sinon.stub(L, 'marker').returns({
            addTo: sinon.stub()
        });
    });

    afterEach(function() {
        sinon.restore();
    });

    it('should initialize the map', function() {
        initMap();
        expect(L.map.calledOnce).to.be.true;
        expect(mapStub.setView.calledOnceWith([51.505, -0.09], 13)).to.be.true;
    });

    it('should add a marker to the map on click', function() {
        initMap();
        const clickHandler = mapStub.on.getCall(0).args[1];
        clickHandler({ latlng: { lat: 51.505, lng: -0.09 } });
        expect(L.marker.calledOnceWith([51.505, -0.09])).to.be.true;
    });
});