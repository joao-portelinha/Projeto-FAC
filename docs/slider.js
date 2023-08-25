
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


function fileValidationLocal() {
  var fileInput = document.getElementById('local');
  var filePath = fileInput.value;

  var allowedExtensions = /(\.JSON)$/i;
   
  if (!allowedExtensions.exec(filePath)) {
      alert('Selecione um ficheiro em formato JSON.');
      fileInput.value = '';
      return false;
  } 
}

function fileValidationRemote() {
  var fileInput = document.getElementById('remote');
  var filePath = fileInput.value;

  var allowedExtensions = /(\.JSON)$/i;
   
  if (!allowedExtensions.exec(filePath)) {
      alert('Selecione um ficheiro em formato JSON.');
      fileInput.value = '';
      return false;
  }
}

  var obj_local;
  var obj_remote;
  var arrow_left = document.getElementById('arrow_left');
  var arrow_right = document.getElementById('arrow_right');
  var next = document.getElementById('next');
  var prev = document.getElementById('prev');
  var refazer = document.getElementById('refazer');
  var refresh = document.getElementById('refresh');

  arrow_left.style.display = 'none';
  arrow_right.style.display = 'none';
  next.style.display = 'none';
  prev.style.display = 'none';
  refazer.style.display = 'none';
  refresh.style.display = 'none';
    
  /* LOCAL */

  function onChange(event) {
      var reader = new FileReader();
      reader.onload = onReaderLoad;
      reader.readAsText(event.target.files[0]);
  }

  function onReaderLoad(event){
      console.log(event.target.result);
      obj_local = JSON.parse(event.target.result);
  }

  document.getElementById('local').addEventListener('change', onChange);

/* REMOTE */

  function onChange2(event2) {
    var reader = new FileReader();
    reader.onload = onReaderLoad2;
    reader.readAsText(event2.target.files[0]);
}

function onReaderLoad2(event2){
    console.log(event2.target.result);
    obj_remote = JSON.parse(event2.target.result);
}


document.getElementById('remote').addEventListener('change', onChange2);


document.getElementById('import_btn').onclick = function() {

  const temp_chart = document.getElementById('temp_chart');
  const hum_chart = document.getElementById('hum_chart');
  const pressure_chart = document.getElementById('pressure_chart');
  const temp_efect_chart = document.getElementById('temp_efect_chart');
  const temp_skin_chart = document.getElementById('temp_skin_chart');

  try{

  new Chart(temp_chart, {
    type: 'line',
    data: {
      labels: obj_local.tempo,
      //labels: Array.from({ length: obj_local.temperatura.length }, (_, i) => `Temperatura ${i + 1}`),
      datasets: [{
        label: 'Local',
        data: obj_local.temperatura,
        backgroundColor: 'transparent',
        borderColor: '#ff7f00',
        borderWidth: 4
      },
      {
        label: 'Remote',
        data: obj_remote.temperatura,
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
  

  document.getElementById("initialText").innerHTML = "Humidade";
  document.getElementById("hideNr").innerHTML = "(1/5)";
  arrow_left.style.display = 'block';
  arrow_left.style = 'column';
  arrow_right.style.display = 'block';
  arrow_right.style = 'column';
  next.style.display = 'block';
  prev.style.display = 'block';

  document.addEventListener('keydown', function(e){
    if(e.key === "ArrowLeft") {
      plusSlides(-1);
    } else if(e.key === "ArrowRight") {
      plusSlides(1);
    }
    
  })   

  new Chart(hum_chart, {
    type: 'line',
    data: {
      labels: obj_local.tempo,
      //labels: Array.from({ length: obj_local.humidade.length }, (_, i) => `Humidade ${i + 1}`),
      datasets: [{
        label: 'Local',
        data: obj_local.humidade,
        backgroundColor: 'transparent',
        borderColor: '#5500cc',
        borderWidth: 4
      },
      {
        label: 'Remote',
        data: obj_remote.humidade,
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
      labels: obj_local.tempo,
      //labels: Array.from({ length: obj_local.pressao.length }, (_, i) => `Pressão ${i + 1}`),
      datasets: [{
        label: 'Local',
        data: obj_local.pressao,
        backgroundColor: 'transparent',
        borderColor: '#724c7f',
        borderWidth: 4
      },
      {
        label: 'Remote',
        data: obj_remote.pressao,
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
      labels: obj_local.tempo,
      //labels: Array.from({ length: obj_local.temperatura_efetiva.length }, (_, i) => `Temperatura Efetiva ${i + 1}`),
      datasets: [{
        label: 'Local',
        data: obj_local.temperatura_efetiva,
        backgroundColor: 'transparent',
        borderColor: '#ff4040',
        borderWidth: 4
      },
      {
        label: 'Remote',
        data: obj_remote.temperatura_efetiva,
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
      labels: obj_local.tempo,
      //labels: Array.from({ length: obj_local.temperatura_na_pele.length }, (_, i) => `Temperatura na Pele ${i + 1}`),
      datasets: [{
        label: 'Local',
        data: obj_local.temperatura_na_pele,
        backgroundColor: 'transparent',
        borderColor: '#f52bc0',
        borderWidth: 4
      },
      {
        label: 'Remote',
        data: obj_remote.temperatura_na_pele,
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

  var select_files = document.getElementById('select_files');
  var lbl_local = document.getElementById('lbl_local');
  var lbl_remote = document.getElementById('lbl_remote');
  var local = document.getElementById('local');
  var remote = document.getElementById('remote');
  var import_btn = document.getElementById('import_btn');
  select_files.style.display = 'none';
  lbl_local.style.display = 'none';
  lbl_remote.style.display = 'none';
  local.style.display = 'none';
  remote.style.display = 'none';
  import_btn.style.display = 'none';

  
  refazer.style.display = 'block';
  refresh.style.display = 'block';
  refresh.style = 'column';


  /*document.getElementById('refresh').addEventListener('click', function (e) {
    location.reload();
  });*/


} catch {
  alert("Selecione os dois ficheiros JSON.")
}

};

