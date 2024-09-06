const MapComponent = () => {
  
  return (
    <div style={{ overflow: 'hidden', resize: 'none', maxWidth: '100%', width: '100%', height: '100%' }}>
      <div id="my-map-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
        <iframe
          style={{ height: '100%', width: '100%', border: '0' }}
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=Kshara+Sutra+Hospital+Near+N.L+High+School+Malad+West,+Mumbai+400064&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
        ></iframe>
      </div>
      <a
        className="embed-ded-maphtml"
        href="https://www.bootstrapskins.com/themes"
        id="make-map-data"
      >
        premium bootstrap themes
      </a>
      <style>
        {`
          #my-map-canvas img {
            max-height: none;
            max-width: none !important;
            background: none !important;
          }
        `}
      </style>
    </div>
  );
};

export default MapComponent;
