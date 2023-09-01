let slideIndex = 1;

showSlides(slideIndex);
            
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

document.getElementById('arrow_left').addEventListener('click', function (e) {
  plusSlides(-1);
});

document.getElementById('arrow_right').addEventListener('click', function (e) {
  plusSlides(1);
});

Promise.all([
  fetch("output.json").then(data => data.json()),
  fetch("output_remote.json").then(data => data.json())])
  .then(data =>{

    console.log(data)
    console.log(data[1].temperatura)

    //document.querySelector("#print_json").innerText = data.temperatura

     const temp_chart = document.getElementById('temp_chart');
  const hum_chart = document.getElementById('hum_chart');
  const pressure_chart = document.getElementById('pressure_chart');
  const temp_efect_chart = document.getElementById('temp_efect_chart');
  const temp_skin_chart = document.getElementById('temp_skin_chart');
  const acel_x_chart = document.getElementById('acel_x_chart');
  const acel_y_chart = document.getElementById('acel_y_chart');
  const acel_z_chart = document.getElementById('acel_z_chart');
  

  new Chart(temp_chart, {
    type: 'line',
    data: {
      labels: data[0].tempo,
      //labels: Array.from({ length: obj_local.temperatura.length }, (_, i) => `Temperatura ${i + 1}`),
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
      title: {
        display: true,
        text: 'Temperatura',
        fontSize: 25,
        fontColor: '#ff7f00'
      },
      tension: 0.6,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Tempo',
          }
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
        labels: data[0].tempo,
        //labels: Array.from({ length: obj_local.humidade.length }, (_, i) => `Humidade ${i + 1}`),
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
            title: {
              display: true,
              text: 'Tempo'
            }
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
        labels: data[0].tempo,
        //labels: Array.from({ length: obj_local.pressao.length }, (_, i) => `Pressão ${i + 1}`),
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
            title: {
              display: true,
              text: 'Tempo'
            }
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
        labels: data[0].tempo,
        //labels: Array.from({ length: obj_local.temperatura_efetiva.length }, (_, i) => `Temperatura Efetiva ${i + 1}`),
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
            title: {
              display: true,
              text: 'Tempo'
            }
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
        labels: data[0].tempo,
        //labels: Array.from({ length: obj_local.temperatura_na_pele.length }, (_, i) => `Temperatura na Pele ${i + 1}`),
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
            title: {
              display: true,
              text: 'Tempo'
            }
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

    new Chart(acel_x_chart, {
      type: 'line',
      data: {
        labels: data[0].tempo,
        //labels: Array.from({ length: obj_local.humidade.length }, (_, i) => `Humidade ${i + 1}`),
        datasets: [{
          label: 'Local (X)',
          data: data[0].acel_x,
          backgroundColor: 'transparent',
          borderColor: '#750000',
          borderWidth: 4
        },
        {
          label: 'Remote (X)',
          data: data[1].acel_x,
          backgroundColor: 'transparent',
          borderColor: '#D10000',
          borderWidth: 4
        },
      ]
      },
      options: {
        tension: 0.6,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Tempo'
            }
        },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Aceleração (X)',
            }
          }
        }
      }
  
      
    });

    new Chart(acel_y_chart, {
      type: 'line',
      data: {
        labels: data[0].tempo,
        //labels: Array.from({ length: obj_local.humidade.length }, (_, i) => `Humidade ${i + 1}`),
        datasets: [{
          label: 'Local (Y)',
          data: data[0].acel_y,
          backgroundColor: 'transparent',
          borderColor: '#0047AB',
          borderWidth: 4
        },
        {
          label: 'Remote (Y)',
          data: data[1].acel_y,
          backgroundColor: 'transparent',
          borderColor: '#6495ED',
          borderWidth: 4
        },
      ]
      },
      options: {
        tension: 0.6,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Tempo'
            }
        },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Aceleração (Y)',
            }
          }
        }
      }
  
      
    });
  
    new Chart(acel_z_chart, {
      type: 'line',
      data: {
        labels: data[0].tempo,
        //labels: Array.from({ length: obj_local.humidade.length }, (_, i) => `Humidade ${i + 1}`),
        datasets: [{
          label: 'Local (Z)',
          data: data[0].acel_z,
          backgroundColor: 'transparent',
          borderColor: '#228B22',
          borderWidth: 4
        },
        {
          label: 'Remote (Z)',
          data: data[1].acel_z,
          backgroundColor: 'transparent',
          borderColor: '#7CFC00',
          borderWidth: 4
        },
      ]
      },
      options: {
        tension: 0.6,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Tempo'
            }
        },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Aceleração (Z)',
            }
          }
        }
      }
  
      
    });

})

