const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
}

// create map
const map = L.map('mapid', options).setView([54.9553768,-7.7394357], 14);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});


// create icon
L.marker([54.9553768,-7.7394357], { icon: icon })
  .addTo(map)


  /* image gallery */
  function selectImage(event) {
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {button.classList.remove('active')});

    const button = event.currentTarget;
    button.classList.add('active');

    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img');
    imageContainer.src = image.src;
  }