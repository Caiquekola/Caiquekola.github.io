// pokuTests/pokuTemperature.mjs

import { expect } from 'chai';
import { describe, it, beforeEach } from 'poku';
import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';

let window, document, urlParams;

// Inicializa o ambiente antes de cada teste
beforeEach(() => {
    const dom = new JSDOM(`<!DOCTYPE html><html><body>
        <div id="location-header"></div>
        <div id="weather-data"></div>
        <div id="health-list"></div>
        <button id="back-button"></button>
        <select id="time-range"></select>
        </body></html>`, { runScripts: "dangerously" });
    window = dom.window;
    document = window.document;
    global.window = window;
    global.document = document;
    global.fetch = fetch;
    global.URLSearchParams = window.URLSearchParams;
    
    urlParams = new URLSearchParams('?temp=25&lat=-15.7942&lon=-47.8822&region=Brasília');
    global.window.location.search = urlParams.toString();

    // Inclua o código do seu script.js ou inclua-o de outra forma
    // Se necessário, ajuste o caminho do script para sua configuração
    import('/js/temperature.js').then(module => {
        global.updateLocationHeader = module.updateLocationHeader;
        global.getRegionName = module.getRegionName;
        global.renderWeatherWidgets = module.renderWeatherWidgets;
        global.getWeatherData = module.getWeatherData;
        global.renderHealthConditions = module.renderHealthConditions;
    });
});

describe('updateLocationHeader', () => {
    it('should update the location header with the region name and temperature', () => {
        updateLocationHeader('Brasília', '25');
        const locationHeader = document.getElementById('location-header');
        expect(locationHeader.innerHTML).to.include('Brasília');
        expect(locationHeader.innerHTML).to.include('25 °C');
    });
});

describe('getRegionName', () => {
    it('should return the region name based on coordinates', async () => {
        global.fetch = () => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                address: {
                    city: 'Brasília'
                }
            })
        });
        const regionName = await getRegionName(-15.7942, -47.8822);
        expect(regionName).to.equal('Brasília');
    });

    it('should handle errors and return "Localização Desconhecida"', async () => {
        global.fetch = () => Promise.reject(new Error('Network error'));
        const regionName = await getRegionName(-15.7942, -47.8822);
        expect(regionName).to.equal('Localização Desconhecida');
    });
});

describe('renderWeatherWidgets', () => {
    it('should render weather widgets with provided data', () => {
        const weatherData = [{
            apparentTemperature: 27,
            windSpeed: 10,
            maxTemperature: 30,
            minTemperature: 20,
            precipitationProbability: 50,
            uvIndex: 5
        }];

        renderWeatherWidgets(weatherData);
        const weatherContainer = document.getElementById('weather-data');
        expect(weatherContainer.innerHTML).to.include('Temperatura Atual');
        expect(weatherContainer.innerHTML).to.include('27 °C');
    });
});

describe('getWeatherData', () => {
    it('should fetch and render weather data', async () => {
        global.fetch = () => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                hourly: {
                    time: ['2024-08-04T00:00:00Z'],
                    temperature_2m: [25],
                    apparent_temperature: [27],
                    wind_speed_10m: [10],
                    precipitation_probability: [50],
                    uv_index: [5]
                },
                daily: {
                    temperature_2m_max: [30],
                    temperature_2m_min: [20],
                    precipitation_hours: [3],
                    precipitation_probability_max: [50]
                }
            })
        });

        await getWeatherData(-15.7942, -47.8822);
        const weatherContainer = document.getElementById('weather-data');
        expect(weatherContainer.innerHTML).to.include('Temperatura Atual');
        expect(weatherContainer.innerHTML).to.include('27 °C');
    });
});

describe('renderHealthConditions', () => {
    it('should render health conditions', () => {
        renderHealthConditions();
        const healthList = document.getElementById('health-list');
        expect(healthList.innerHTML).to.include('Risco de desidratação. Beba bastante água.');
        expect(healthList.innerHTML).to.include('Possibilidade de ventos fortes. Evite áreas abertas.');
    });
});
