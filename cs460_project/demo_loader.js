// Demo loader - loads the demo images automatically
window.addEventListener('load', () => {
  // Wait a bit for the main script to initialize
  setTimeout(() => {
    const demoLayers = [
      {
        id: Date.now() + 0,
        imageUrl: '1.1.png',
        depth: 0,
        parallaxSpeed: 0.05,
        scale: 5
      },
      {
        id: Date.now() + 1,
        imageUrl: '1.2.png',
        depth: 0.5,
        parallaxSpeed: 0.06,
        scale: 5
      },
      {
        id: Date.now() + 2,
        imageUrl: '1.3.png',
        depth: 1.0,
        parallaxSpeed: 0.07,
        scale: 5
      },
      {
        id: Date.now() + 3,
        imageUrl: '1.4.png',
        depth: 1.5,
        parallaxSpeed: 0.08,
        scale: 5
      },
      {
        id: Date.now() + 4,
        imageUrl: '1.5.png',
        depth: 2.0,
        parallaxSpeed: 0.09,
        scale: 5
      },
      {
        id: Date.now() + 5,
        imageUrl: '1.6.png',
        depth: 2.5,
        parallaxSpeed: 0.10,
        scale: 5
      },
      {
        id: Date.now() + 6,
        imageUrl: '1.7.png',
        depth: 3.0,
        parallaxSpeed: 0.11,
        scale: 5
      }
    ];
    
    // Call the loadDemo function from the main script
    if (typeof loadDemo === 'function') {
      loadDemo(demoLayers);
    }
  }, 100);
});