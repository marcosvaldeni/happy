// create map
const map = L.map('mapid').setView([54.9553768,-7.7394357], 14);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]
});

let marker;

map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  marker && map.removeLayer(marker);

  marker = L.marker([lat, lng], { icon })
  .addTo(map);
});

// adding foto's field
function addPhotoField() {
  const container = document.querySelector('#images');
  const fieldContainer = document.querySelectorAll('.new-upload');

  const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  if (newFieldContainer.children[0].value != '') {
    newFieldContainer.children[0].value = '';

    container.appendChild(newFieldContainer);
  }
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll('.new-upload');

  if (fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return
  }

  span.parentNode.remove();
}

function toggleSelect(event) {
  document.querySelectorAll('.button-select button')
  .forEach(button => button.classList.remove('active'));

  const btn = event.currentTarget;
  btn.classList.add('active');

  const input = document.querySelector('[name="open_weekends"]');

  input.value = button.dataset.value
}
