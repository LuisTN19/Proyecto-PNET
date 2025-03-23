// Crear el mapa y centrarlo en España
const map = L.map('map').setView([40.416775, -3.703790], 6); // Coordenadas de España y nivel de zoom

// Añadir una capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Definir un icono rojo personalizado
const redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png', // Icono rojo
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Sombra del icono
    iconSize: [25, 41], // Tamaño del icono
    iconAnchor: [12, 41], // Punto de anclaje del icono
    popupAnchor: [1, -34], // Punto de anclaje del popup
    shadowSize: [41, 41] // Tamaño de la sombra
});

// Ubicaciones de las instalaciones en España
const locations = [
    { lat: 40.416775, lng: -3.703790, title: "Madrid", description: "Dirección: Calle de la Palma, 18, 28004" },
    { lat: 41.385063, lng: 2.173404, title: "Barcelona", description: "Dirección: Avenida Diagonal, 500, 08006" },
    { lat: 37.389092, lng: -5.984459, title: "Sevilla", description: "Dirección: Calle Guadalquivir, 12, 41001" },
    { lat: 42.878213, lng: -8.544844, title: "Santiago de Compostela", description: "Dirección: Rúa do Franco, 7, 15705" },
    { lat: 43.262985, lng: -2.935013, title: "Calle Ledesma, 5", description: "Dirección: Calle Ledesma, 548001" },
    { lat: 39.469907, lng: -0.376288, title: "Valencia", description: "Dirección: Calle de la Paz, 12, 46003" },
    { lat: 39.569600, lng: 2.650160, title: "Mallorca", description: "Dirección: Paseo Marítimo, 29, 07014" },
];

// Añadir marcadores al mapa
locations.forEach(location => {
    L.marker([location.lat, location.lng], { icon: redIcon }) // Usar el icono rojo
        .addTo(map)
        .bindPopup(`<strong>${location.title}</strong><br>${location.description}`); // Ventana emergente
});