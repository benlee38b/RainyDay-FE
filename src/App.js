
import './App.css';
import Header from './components/Header'
import DetailInputForm from './components/DetailInputForm'
import ReactAnimatedWeather from 'react-animated-weather';


 
const defaults = {
  icon: 'RAIN',
  color: '#5b677a',
  size: '100vw',
  animate: true
};



function App() {
  return (
    <div>

    
    <div className="App" >
      <Header className="App-header" />
      <ReactAnimatedWeather
        className="rain-animation"
        icon={defaults.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}/>
      <DetailInputForm />
    </div>
    </div>
      

  );
}

export default App;
