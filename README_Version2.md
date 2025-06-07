# Flight Sim Website Starter

A hi-res flight simulator website starter built with React and Three.js.  
This project renders a simple 3D scene with a placeholder airplane and ground, ready for you to upgrade with real models and scenery.

## Features

- React + Three.js for modern frontend and 3D graphics
- Responsive full-screen canvas
- Simple placeholder plane model
- Easy to extend with real 3D assets

## Getting Started

1. **Clone the repository**  
   `git clone https://github.com/your-username/flight-sim-website.git`

2. **Install dependencies**  
   `npm install`

3. **Start the development server**  
   `npm start`

4. **Open in browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

## Adding Real 3D Models

- Place your `.gltf` or `.obj` files in the `public/models` directory.
- Replace the placeholder model in `FlightSimCanvas.js` with a Three.js loader (GLTFLoader, OBJLoader, etc).

## Customization Ideas

- Replace the simple plane with a high-res model.
- Add skyboxes, clouds, and terrain textures.
- Implement controls for flying the plane.
- Add camera switching (cockpit, chase, free, etc).

## License

MIT