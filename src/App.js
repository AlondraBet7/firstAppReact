import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHoly from './components/cardHojy.js';
import SearchHoly from './components/searchHoly.js';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchHoly/>
                <div className="container">
          <div className="row">
            <CardHoly img="https://www.diariomovil.info/wp-content/uploads/2020/07/Santa-Rita-da-Cascia-1-696x385-1.png"
              title="Santa Rita"/>
              <CardHoly img="https://formacioncatolicahoy.org/images/StaTeresitadelnioJesus.gif"
              title="Santa Teresita"/>
              <CardHoly img="http://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Saint_Augustine_by_Philippe_de_Champaigne.jpg/250px-Saint_Augustine_by_Philippe_de_Champaigne.jpg?w=144"
              title="San Agustín"/>
              <CardHoly img="http://www.santos-catolicos.com/misc/imagenes/santos/san-francisco-de-asis/imagenes-de-san-francisco-de-asis-1.jpg"
              title="San Francisco"/>
              <CardHoly img="https://i.pinimg.com/originals/ff/f3/a2/fff3a2a83a918c9ca48f0fa12e855c74.jpg"
              title="San Marcos de Leon"/>
                <CardHoly img="http://media-cache-ec0.pinimg.com/originals/2d/78/3d/2d783d4ac734c8c88c79fde6bfc9f656.jpg"
              title="San José"/>


          </div>
        </div>
      </React.Fragment>
    );
  }

}


export default App;
