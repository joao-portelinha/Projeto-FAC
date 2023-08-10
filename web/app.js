
Promise.all([
  fetch("output.json").then(data => data.json()),
  fetch("output_remote.json").then(data => data.json())])
  .then(data =>{

    //console.log(data)
    //console.log(data.temperatura)

    //document.querySelector("#print_json").innerText = data.temperatura

    const temp_chart = document.getElementById('temp_chart');
    const hum_chart = document.getElementById('hum_chart');
    const pressure_chart = document.getElementById('pressure_chart');
    const temp_efect_chart = document.getElementById('temp_efect_chart');
    const temp_skin_chart = document.getElementById('temp_skin_chart');
  

    new Chart(temp_chart, {
      type: 'line',
      data: {
        labels: Array.from({ length: data[0].temperatura.length }, (_, i) => `Temperatura ${i + 1}`),
        datasets: [{
          label: 'Local',
          data: data[0].temperatura,
          backgroundColor: 'transparent',
          borderColor: '#ff7f00',
          borderWidth: 4
        },
        {
          label: 'Remote',
          data: data[1].temperatura,
          backgroundColor: 'transparent',
          borderColor: '#ffb48a',
          borderWidth: 4
        }]
      },
      options: {
        tension: 0.6,
        scales: {
          x: {
            display: false 
        },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Temperatura (ºC)',
            }
          }
        }
      }
    });
    
    
    new Chart(hum_chart, {
      type: 'line',
      data: {
        labels: Array.from({ length: data[0].humidade.length }, (_, i) => `Humidade ${i + 1}`),
        datasets: [{
          label: 'Local',
          data: data[0].humidade,
          backgroundColor: 'transparent',
          borderColor: '#5500cc',
          borderWidth: 4
        },
        {
          label: 'Remote',
          data: data[1].humidade,
          backgroundColor: 'transparent',
          borderColor: '#8895ff',
          borderWidth: 4
        }]
      },
      options: {
        tension: 0.6,
        scales: {
          x: {
            display: false 
        },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Humidade',
            }
          }
        }
      }
    });

    new Chart(pressure_chart, {
      type: 'line',
      data: {
        labels: Array.from({ length: data[0].pressao.length }, (_, i) => `Pressão ${i + 1}`),
        datasets: [{
          label: 'Local',
          data: data[0].pressao,
          backgroundColor: 'transparent',
          borderColor: '#724c7f',
          borderWidth: 4
        },
        {
          label: 'Remote',
          data: data[1].pressao,
          backgroundColor: 'transparent',
          borderColor: '#cb89ff',
          borderWidth: 4
        }]
      },
      options: {
        tension: 0.6,
        scales: {
          x: {
            display: false 
        },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Pressão',
            }
          }
        }
      }
    });

    new Chart(temp_efect_chart, {
      type: 'line',
      data: {
        labels: Array.from({ length: data[0].temperatura_efetiva.length }, (_, i) => `Temperatura Efetiva ${i + 1}`),
        datasets: [{
          label: 'Local',
          data: data[0].temperatura_efetiva,
          backgroundColor: 'transparent',
          borderColor: '#ff4040',
          borderWidth: 4
        },
        {
          label: 'Remote',
          data: data[1].temperatura_efetiva,
          backgroundColor: 'transparent',
          borderColor: '#FF8A8A',
          borderWidth: 4
        }]
      },
      options: {
        tension: 0.6,
        scales: {
          x: {
            display: false 
        },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Temperatura Efetiva',
            }
          }
        }
      }
    });

    new Chart(temp_skin_chart, {
      type: 'line',
      data: {
        labels: Array.from({ length: data[0].temperatura_na_pele.length }, (_, i) => `Temperatura na Pele ${i + 1}`),
        datasets: [{
          label: 'Local',
          data: data[0].temperatura_na_pele,
          backgroundColor: 'transparent',
          borderColor: '#f52bc0',
          borderWidth: 4
        },
        {
          label: 'Remote',
          data: data[1].temperatura_na_pele,
          backgroundColor: 'transparent',
          borderColor: '#ff99de',
          borderWidth: 4
        }]
      },
      options: {
        tension: 0.6,
        scales: {
          x: {
            display: false 
        },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Temperatura na Pele',
            }
          }
        }
      }
    });

})
