// import logo from './logo.svg';
import './App.css';
// import Globe from 'react-globe.gl';
import World from './world';

// const N = 20;
// const arcsData = [...Array(N).keys()].map(() => ({
//   startLat: (Math.random() - 0.5) * 180,
//   startLng: (Math.random() - 0.5) * 360,
//   // endLat: (Math.random() - 0.5) * 180,
//   // endLng: (Math.random() - 0.5) * 360,
//   endLat: 32.43986816991341,
//   endLng: 53.43986816991341,
//   color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
// }));
// console.log(arcsData)
function App() {
  return (
    <div className="App">
    {/* <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      arcsData={arcsData}
      arcColor={'color'}
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 4000 + 1000}
      /> */}

<World />
      
    </div>
  );
}

export default App;
