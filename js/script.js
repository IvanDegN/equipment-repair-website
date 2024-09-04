
  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      projection: 'EPSG:3857',
      center: ol.proj.fromLonLat([40.271546, 48.316393]),
      zoom: 20,
    })
  });


  var adr = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([40.271546, 48.316393])),
                name: 'adr'
            })

    var stl = new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: 'https://cdn-icons-png.flaticon.com/512/1397/1397898.png',
            scale: 0.1
        })
    })

  var vector = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [adr]
    }),
    style:[
        stl
    ]
  });


  map.addLayer(vector)


  // // Получаем все поля ввода на странице
// const inputFields = document.querySelectorAll('input');
// var item = document.getElementsByClassName('placeholder');
// // Для каждого поля ввода добавляем обработчик события 'input'
// inputFields.forEach(input => {
//   input.addEventListener('input', () => {
//     // Проверяем, пустое ли поле ввода
//     if (input.value === '') {
//       // Если поле ввода пустое, то скрываем placeholder
//       input.setAttribute('placeholder', '');
//       item.style.display = 'none';
//     }
//     else{
//         input.setAttribute('placeholder', 'qq');
//     }
//   });
// });