/*FACTORIAL*/

function calculateFactorial() {
    var inputElement = document.getElementById("number001");
    var resultElement = document.getElementById("result001");
    // Validate input
    var inputValue = inputElement.value;
    if (inputValue === "" || isNaN(inputValue) || inputValue < 0) {
      resultElement.value = "Please enter number.";
      return;
    }
    // Calculate factorial
    var factorialResult = 1;
    for (var i = 2; i <= inputValue; i++) {
      factorialResult *= i;
    }
    // Display result
    resultElement.value = "Factorial of " + inputValue + " is: " + factorialResult;
  }


   /*FIND RADIUS OF CIRCLE*/
  function calculateRadius() {
    var radius = document.getElementById('radiusInput002').value;
    var area = Math.PI * Math.pow(radius, 2);
    document.getElementById('result002').value = 'circle: ' + area.toFixed(2);
  }


  /*Fahrenheit to Celsius Converter*/
  function convertTemperature() {
    var fahrenheitInput = document.getElementById("fahrenheit").value;
    var resultElement = document.getElementById("result");

    if (!isNaN(fahrenheitInput)) {
        var celsius = (parseFloat(fahrenheitInput) - 32) * 5 / 9;
        resultElement.value = fahrenheitInput + "  is " + celsius.toFixed(2) + " Celsius.";
    } else {
        resultElement.value = "Please enter number.";
    }
}

    // เลือก element ด้วย id
    var characterDisplay = document.getElementById('characterDisplay');

    // ฟังก์ชันที่จะเปลี่ยนตัวอักษรและแสดงผล
    function changeCharacter() {
        // สุ่มตัวอักษร a-z
        var randomChar = String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random() * 26));

        // แสดงตัวอักษรใน element
        characterDisplay.textContent = randomChar;
    }

    // เรียกฟังก์ชันเปลี่ยนตัวอักษรทุก 30 วินาที
    setInterval(changeCharacter, 500);

    // โปรแกรมทำงานครั้งแรกเพื่อแสดงตัวอักษรเริ่มต้น
    changeCharacter();

    // First Chart
    var ctx1 = document.getElementById('chart1').getContext('2d');
    var chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'First Dataset',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Second Chart
    var ctx2 = document.getElementById('chart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Second Dataset',
                data: [5, 10, 8, 15, 7],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
      // เลือก element ที่จะแสดงข้อมูล
      var cryptoList = document.getElementById('cryptoList');
  
      // URL ของ CoinGecko API
      var apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
  
      // ดึงข้อมูลจาก API
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              // วนลูปข้อมูลและแสดงผล
              data.forEach(crypto => {
                  var cryptoItem = document.createElement('div');
                  cryptoItem.innerHTML = `
                      <p><strong>${crypto.name}</strong> (${crypto.symbol})</p>
                      <p>Price: $${crypto.current_price}</p>
                      <p>Market Cap: $${crypto.market_cap}</p>
                      <hr>
                  `;
                  cryptoList.appendChild(cryptoItem);
              });
          })
          .catch(error => console.error('Error fetching data:', error));
  });
  
  function displayCurrentTime() {
    const currentTimeElement = document.getElementById('currentTime');
    const currentTime = new Date().toLocaleString();
    currentTimeElement.textContent = currentTime;
  }

  function fetchCoinPrices() {
    const coins = ['1INCH', 'AAVE', 'ABT', 'ACH', 'ACS', 'ADA', 'AED', 'BTC', 'ETH'];

    const promises = coins.map(coin => {
      return fetch(`https://api.coinbase.com/v2/prices/${coin}-USD/spot`)
        .then(response => response.json())
        .then(data => {
          const coinPrice = data.data.amount;
          return { coin, price: coinPrice };
        })
        .catch(error => {
          console.error(`Error fetching ${coin} price:`, error);
          return { coin, price: 'N/A' };
        });
    });

    Promise.all(promises)
      .then(prices => {
        const coinPricesContainer = document.getElementById('coinPrices');
        coinPricesContainer.innerHTML = '';

        prices.forEach(price => {
          const { coin, price: coinPrice } = price;
          const coinPriceElement = document.createElement('p');
          coinPriceElement.textContent = `${coin}: $${coinPrice} USD`;
          coinPricesContainer.appendChild(coinPriceElement);
        });
      });
  }

  window.onload = function() {
    displayCurrentTime();
    fetchCoinPrices();
  };