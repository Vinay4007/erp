
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,
  Route
} from "react-router-dom";

import img1 from './images/iittplogo.jfif';  //to invoke images we need to import from where we have putted.

import Logins from "./Component/Logins";

import Home from "./Component/Home";
import Gl from "./Component/Gl";
import Ha from "./Component/Ha";
import Others from "./Component/Others";
import Mess1 from "./Component/Mess1";
import FEEDBACK from "./Component/Messfeedback";

import Sp from "./Component/Sp";
import Compr from "./Component/Compr";
import Curp from "./Component/Curp";

import Eal from "./Component/Eal";
import Lohis from "./Component/Lohis";
import NewLo from "./Component/Newlo";

import CulEx from "./Component/Culex";
import Pk from "./Component/Pk";

import PayCul from "./Component/paycul";

import Es from "./Component/Es";
import DownloadReceipt from "./Component/DownloadReceipt";
import Budget from "./Component/Budget";
import contact from './Component/contact';
import Applyforloan from './Component/Applyforloan';
import Signup from './Component/signup';
import Login from './Component/login';
// import Errorpage from './Component/Errorpage';

import Payments1 from './Component/Payments1';
import Payments2 from './Component/payments2';
import CHECKSTAT from './Component/checkstaths';
import Newadvance from './Component/Newadvance';
import Cultural from './Component/Cultural';

import Request from './Component/Request';
import Scholar from './Component/scholar';
import SendReceipt from './Component/recscho';

import Budgets from './Component/budget1';
import Csb from './Component/csbud';
import Eeb from './Component/eebud';
import Meb from './Component/mebud';
import Chb from './Component/chbud';
import Ceb from './Component/cebud';



import NewFund from './Component/fundrequest';

import Signup1 from './Component/Facultysignup';
import Login1 from './Component/Facultylogin';
import Signup2 from './Component/Adminsignup';
import Login2 from './Component/adminlogin';
import Home1 from './Component/Home1';
import Home2 from './Component/Home2';

const App = () => {
  
  return( 
    <div className='print'>
      <div className="bckground">
      
      <Router>

      

    
      <Route exact path = "/" component={Logins} />
      <Route path = "/signup" component={Signup} />
      <Route path = "/login" component={Login} />
      <Route path = "/home" component={Home} />
      

    
        <Route path = "/signup1" component={Signup1} />
        <Route path = "/login1" component={Login1} />
        <Route path = "/home1" component={Home1} />
      

    
        <Route path = "/signup2" component = {Signup2} />
        <Route path = "/login2" component = {Login2} />
        <Route path = "/home2" component={Home2} />

      

      
          
          
          
          
          
          {/* <Route path = "/home" component={Home} /> */}
          <Route path = "/transactions" component={Gl} />
          <Route path = "/ha" component={Ha} />
          <Route path = "/others" component={Others} />

          <Route path = "/sp" component={Sp} />
          <Route path = "/compr" component={Compr} />
          <Route path = "/curp" component={Curp} />

          <Route path = "/eal" component={Eal} />
          <Route path = "/lh" component={Lohis} />
          <Route path = "/newloan" component={NewLo} />

          <Route path = "/ce" component={CulEx} />
          <Route path = "/pk" component={Pk} />

          <Route path = "/es" component={Es}/>
          <Route path = "/downreceipt" component={DownloadReceipt}/>
          <Route path = "/budget" component={Budget}/>
          <Route path = "/cont" component={contact}/>
          <Route path = "/applyforloan" component={Applyforloan}/>
          

          <Route path = "/pay1" component={Payments1}/>
          <Route path = "/pay2" component={Payments2}/>
          <Route path = "/chs" component={CHECKSTAT}/>
          <Route path = "/adv" component={Newadvance}/>
          <Route path = "/cultural" component={Cultural}/>

          <Route path = "/request" component={Request}/>
          <Route path = "/paycul" component={PayCul}/>
          <Route path = "/scholar" component={Scholar}/>
          <Route path = "/sendreceipt" component={SendReceipt}/>

          <Route path = "/dpb" component={Budgets}/>
          <Route path = "/csbud" component={Csb}/>
          <Route path = "/eebud" component={Eeb}/>
          <Route path = "/mebud" component={Meb}/>
          <Route path = "/chbud" component={Chb}/>
          <Route path = "/cebud" component={Ceb}/>

          
          <Route path = "/mess1"  component={Mess1}/>
          <Route path = "/feedback" component={FEEDBACK} />
          <Route path = "/fund" component={NewFund}/>

          
          
          {/* <Route path = "" component={Errorpage}/> */}
          {/* <Route path="*">
            <Errorpage/>
          </Route> */}
          
          
      </Router>
      </div>
    </div> 
     
 
  );
  
}



const Image = () =>{ 
return(
  <div className='main'>
    
    <img src={img1} width='150px' alt=''/>
    <div className = "form-check form-check-inline">
    <h1 className='title'>Indian Institute Of Technology Tirupati</h1>
    </div>

  </div>
  
  
)
}

export default App;