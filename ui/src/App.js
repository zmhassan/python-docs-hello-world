import React from 'react';
// import './App.css'
import Navigation from './components/Navigation';
import Panel from "./components/Panel"
function App() {
  return (
    <div class="fullPage">

         <Navigation />

          <div class="container">
              
              <div  class="text-center">


                    <main role="main" class="inner cover">
                      <h1 class="cover-heading">Metacloud Console</h1>
                      <p class="lead">Metacloud Console provides a way to manage your cloud environments across
                      multiple cloud environments. 
                     YOu can manage your databases and schedule backups. You can also migrate your databases from one cloud to another.
                     
                     
                     </p>
                      <p class="lead">
                        <a href="/#learn" class="btn btn-lg btn-secondary">Learn more</a>
                      </p>
                    </main>

              </div>
              <br />

              <Panel />
              <br />
              <Panel />
              <br />
              <Panel />
              <br />

          </div>    
              
    
    </div>
  );
}

export default App;
