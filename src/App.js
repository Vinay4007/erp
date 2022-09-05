import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,
  Route
} from "react-router-dom";

import img1 from './images/iittplogo.jfif';  //to invoke images we need to import from where we have putted.

import Home from "./Component/Home";
import Gl from "./Component/Gl";
import Ha from "./Component/Ha";
import Others from "./Component/Others";

import Sp from "./Component/Sp";
import Compr from "./Component/Compr";
import Curp from "./Component/Curp";

import Eal from "./Component/Eal";
import Lohis from "./Component/Lohis";
import Newlo from "./Component/Newlo";
import Adv from "./Component/Adv";

import CulEx from "./Component/Culex";
import Dpb from "./Component/Dpb";
import Pk from "./Component/Pk";

import Es from "./Component/Es";
import DownloadReceipt from "./Component/DownloadReceipt";
import Cultural from "./Component/Cultural";
import Navbar from './Component/Navbar';



const App = () => {
 return( 
    <div className='print'>
    

      <Router>
        <Route>
          <Image/>
          <Navbar />
          <Route path='/' />
        
          <Route exact path = "/" component={Home} />
          <Route path = "/transactions" component={Gl} />
          <Route path = "/ha" component={Ha} />
          <Route path = "/others" component={Others} />

          <Route path = "/sp" component={Sp} />
          <Route path = "/compr" component={Compr} />
          <Route path = "/curp" component={Curp} />

          <Route path = "/eal" component={Eal} />
          <Route path = "/lh" component={Lohis} />
          <Route path = "/newloan" component={Newlo} />
          <Route path = "/adv" component={Adv} />

          <Route path = "/ce" component={CulEx} />
          <Route path = "/dpb" component={Dpb} />
          <Route path = "/pk" component={Pk} />

          <Route path = "/es" component={Es}/>
          <Route path = "/downreceipt" component={DownloadReceipt}/>
          <Route path = "/cultural" component={Cultural}/>
          </Route>
      </Router>
    </div> 
     
 
  );
  
}



const Image = () =>{ 
return(
  <div className='main'>
    
    <img src={img1} width='150px' alt=''/>
    <div class = "form-check form-check-inline">
    <h1 className='title'><b>Indian Institute Of Technology Tirupati</b></h1>
    </div>

  </div>
  
  
)
}

export default App;