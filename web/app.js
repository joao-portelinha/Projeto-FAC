

var arr = []
fetch("output.json")
.then(response => response.json())
.then(data =>{
    console.log(data)
    console.log(data.temperatura)

    //document.querySelector("#print_json").innerText = data.temperatura

    const ctx = document.getElementById('myChart');
      
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: data.temperatura.length }, (_, i) => `Temperatura ${i + 1}`),
        datasets: [{
          label: 'Temperatura (ºC)',
          data: data.temperatura,
          backgroundColor: 'transparent',
          borderColor: 'red',
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
    

})
