import './App.css';
import Headers from './Component/Headers.js';
import './services/services.js'
import DataTable from './Component/DataTable.js';
import Footer from './Component/Footer.js';
function App() {
  return (
    <div>
      <Headers/>
      <DataTable/>    
      <Footer/>
    </div>
  );
}

export default App;
