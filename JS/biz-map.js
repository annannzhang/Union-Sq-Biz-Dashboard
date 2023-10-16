let dataLayer = null;

function initializeBizMap(bizpoints) {
    const map = L.map('map').setView([40.737, -73.99], 14);
    const baseTileLayer =L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}@2x.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors', 
      }).addTo(map);
      
    dataLayer = L.layerGroup();
    dataLayer.addTo(map);

    addPointsToMap(bizpoints);
    
    return map;
  }

function addPointsToMap(bizpoints) {
  for (const bizpoint of bizpoints) {
    const [lon, lat] = bizpoint.geometry.coordinates;
    const name = bizpoint.properties.Business;
    const marker = L.marker([lat, lon], {
      title:name,
      alt: name,
    });
    dataLayer.addLayer(marker);
  };
}

  export{
    initializeBizMap,
  }