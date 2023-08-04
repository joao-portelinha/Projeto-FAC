
var arr = []
fetch("output.json")
.then(response => response.json())
.then(data =>{
    console.log(data)
    console.log(data.temperatura)

    document.querySelector("#print_json").innerText = data.temperatura

    for (var i=0; i<data.temperatura.length; i++){
        arr[i] = data.temperatura[i];
    }
    console.log(arr)
})

/*var xmlhttp = new XMLHttpRequest();
var url = "output.json"
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var temperature = data.temperatura.map(function(elem){
            return elem.temperatura
        });

        console.log(temperature)

    }
}*/

const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Temperatura (ºC)',
      data: [arr],
      backgroundColor: 'transparent',
      borderColor: 'red',
      borderWidth: 4
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