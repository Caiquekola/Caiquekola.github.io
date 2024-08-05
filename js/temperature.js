// Variável para armazenar os parâmetros da URL
let urlParams;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('back-button').addEventListener('click', function () {
        window.history.back(); // Volta para a tela anterior
    });

    // Obtém parâmetros da URL
    urlParams = new URLSearchParams(window.location.search);
    const temp = parseFloat(urlParams.get('temp')); // Certifique-se de converter para número
    const lat = urlParams.get('lat');
    const lon = urlParams.get('lon');
    const regionName = urlParams.get('region') || 'Localização Desconhecida';

    // Atualiza o cabeçalho da localização
  function updateLocationHeader(location, currentTemperature, alertStatus) {
    const locationHeader = document.getElementById("location-header");
    if (locationHeader) {
      locationHeader.innerHTML = `
                <h2 style="text-align: center;">${location}</h2>
                <h1 style="text-align: center;">${temp} °C</h1>
                <h3 style="text-align: center; color: red;">${alertStatus}</h3>
            `;
    }
  }

    // Função para obter o nome da região a partir das coordenadas
    function getRegionName(lat, lon) {
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Dados da API de Geocodificação:', data); // Log dos dados recebidos
                if (data && data.address) {
                    return data.address.city || data.address.town || data.address.village || 'Localização Desconhecida';
                } else {
                    return 'Localização Desconhecida';
                }
            })
            .catch(error => {
                console.error('Erro ao obter nome da região:', error);
                return 'Localização Desconhecida';
            });
    }

    // Mapeamento das condições de saúde para diferentes faixas de temperatura
    const healthConditionsByTemperature = {
        cold: [
            { icon: 'fa-temperature-low', title: 'Hipotermia', text: 'Use roupas quentes para evitar hipotermia.' },
            { icon: 'fa-wind', title: 'Proteção Contra o Vento', text: 'Proteja-se do vento frio com agasalhos adequados.' },
            { icon: 'fa-cloud-rain', title: 'Prevenção de Nevasca', text: 'Esteja preparado para possíveis nevascas.' },
            { icon: 'fa-smog', title: 'Qualidade do Ar', text: 'A qualidade do ar pode ser ruim. Evite exercícios ao ar livre.' }
        ],
        moderate: [
            { icon: 'fa-tint', title: 'Hidratação', text: 'Mantenha-se hidratado ao longo do dia.' },
            { icon: 'fa-wind', title: 'Ventos Moderados', text: 'Ventos moderados podem ocorrer. Tenha cuidado ao dirigir.' },
            { icon: 'fa-cloud-rain', title: 'Chuvas Leves', text: 'Pode haver chuvas leves. Leve um guarda-chuva.' },
            { icon: 'fa-smog', title: 'Qualidade do Ar', text: 'A qualidade do ar pode variar. Esteja atento.' }
        ],
        hot: [
            { icon: 'fa-tint', title: 'Desidratação', text: 'Beba bastante água para evitar desidratação.' },
            { icon: 'fa-wind', title: 'Ventos Quentes', text: 'Ventos quentes podem ocorrer. Evite exposição prolongada.' },
            { icon: 'fa-cloud-rain', title: 'Chuvas Fortes', text: 'Pode haver chuvas fortes. Evite áreas propensas a alagamentos.' },
            { icon: 'fa-smog', title: 'Qualidade do Ar', text: 'A qualidade do ar pode ser ruim. Evite atividades ao ar livre.' }
        ]
    };

    // Função para determinar a faixa de temperatura com base na temperatura atual
    function getHealthConditionsByTemperature(temp) {
        if (temp <= 15) {
            return healthConditionsByTemperature.cold;
        } else if (temp > 15 && temp <= 25) {
            return healthConditionsByTemperature.moderate;
        } else {
            return healthConditionsByTemperature.hot;
        }
    }

    // Função para renderizar as condições de saúde
    function renderHealthConditions(temp) {
        const healthList = document.getElementById('health-list');
        let listHTML = '';

        const conditions = getHealthConditionsByTemperature(temp);

        conditions.forEach(condition => {
            listHTML += `
                <div class="weather-widget health-condition">
                    <h4>
                        <i class="fas ${condition.icon} widget-icon"></i>
                        ${condition.title}
                    </h4>
                    <p>${condition.text}</p>
                </div>
            `;
        });

        healthList.innerHTML = listHTML;
    }

    // Função para renderizar os dados meteorológicos em widgets
    function renderWeatherWidgets(weatherData) {
        const weatherContainer = document.getElementById('weather-data');
        let widgetsHTML = '';

        const currentData = weatherData[0];

        // Usando a temperatura atual da URL
        widgetsHTML += `
            <div class="weather-widget">
                <h4>
                    <i class="fas fa-temperature-high widget-icon"></i> 
                    Temperatura Atual
                </h4>
                <p>${temp} °C</p>
            </div>
        `;
        widgetsHTML += `
            <div class="weather-widget">
                <h4>
                    <i class="fas fa-temperature-high widget-icon"></i>
                    Temperatura Máx.
                </h4>
                <p>${currentData.maxTemperature} °C</p>
            </div>
        `;
        widgetsHTML += `
            <div class="weather-widget">
                <h4>
                    <i class="fas fa-temperature-low widget-icon"></i>
                    Temperatura Mín.
                </h4>
                <p>${currentData.minTemperature} °C</p>
            </div>
        `;
        widgetsHTML += `
            <div class="weather-widget">
                <h4>
                    <i class="fas fa-thermometer-half widget-icon"></i>
                    Sensação Térmica
                </h4>
                <p>${currentData.apparentTemperature} °C</p>
            </div>
        `;
        widgetsHTML += `
            <div class="weather-widget">
                <h4>
                    <i class="fas fa-wind widget-icon"></i>
                    Vento
                </h4>
                <p>${currentData.windSpeed} km/h</p>
            </div>
        `;
        
        widgetsHTML += `
            <div class="weather-widget">
                <h4>
                    <i class="fas fa-cloud-rain widget-icon"></i> 
                    Precipitação
                </h4>
                <p>${currentData.precipitationProbability} mm nas últimas 24h</p>
            </div>
        `;
        widgetsHTML += `
            <div class="weather-widget">
                <h4>
                    <i class="fas fa-sun widget-icon"></i> 
                    Índice UV
                </h4>
                <p>${currentData.uvIndex}</p>
            </div>
        `;
        widgetsHTML += `
             <div class="weather-widget">
                <h4>
                    <i class="fas fa-tint widget-icon"></i> 
                    Umidade
                </h4>
                <p>${currentData.humidity} %</p>
            </div>
        `;

        weatherContainer.innerHTML = widgetsHTML;
    }

    // Função para obter dados meteorológicos
function getWeatherData(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,wind_speed_10m,uv_index&daily=temperature_2m_max,temperature_2m_min,precipitation_hours,precipitation_probability_max&alerts=true`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Verifique os dados retornados

        // Verifique se os dados estão corretos antes de mapear
        if (data && data.hourly && data.hourly.time) {
          const weatherData = data.hourly.time.map((time, index) => ({
            time: time,
            temperature: data.hourly.temperature_2m[index],
            apparentTemperature: data.hourly.apparent_temperature[index] || 0,
            windSpeed: data.hourly.wind_speed_10m[index] || 0,
            precipitationProbability:
              data.hourly.precipitation_probability[index] || 0,
            uvIndex: data.hourly.uv_index[index] || 0,
            humidity: data.hourly.relative_humidity_2m[index] || "N/A",
            maxTemperature: data.daily.temperature_2m_max[0],
            minTemperature: data.daily.temperature_2m_min[0],
          }));

          renderWeatherWidgets(weatherData); // Chama a função para renderizar os widgets

          // Obtém o status de alerta
          const alertStatus =
            data.alerts && data.alerts.length > 0
              ? data.alerts[0].description
              : "Nenhum alerta sobre Enchentes";
          updateLocationHeader(regionName, temp, alertStatus);
        } else {
          console.error("Dados meteorológicos não estão no formato esperado");
        }
      })
      .catch((error) =>
        console.error("Erro ao obter dados meteorológicos:", error)
      );
  }


    // Obtém o nome da região a partir das coordenadas e renderiza as informações
    getRegionName(lat, lon).then(region => {
        updateLocationHeader(region, temp);
        getWeatherData(lat, lon);
        renderHealthConditions(temp);
    });
});


// Função para abrir o menu lateral
function openSideMenu() {
    document.getElementById("sideMenu").style.width = "250px"; // Define a largura do menu
}

// Função para fechar o menu lateral
function closeSideMenu() {
    document.getElementById("sideMenu").style.width = "0"; // Volta a largura do menu para 0
}

// Evento para abrir o menu ao clicar no botão "Emergências"
document.getElementById("btnEmergencias").onclick = openSideMenu;



// Variável para armazenar os parâmetros da URL


