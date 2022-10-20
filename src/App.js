import felix from  './images/felix.png'
import whiskerson from './images/whiskerson.png'
import phone from './images/phone.png'
import mail from './images/mail.png'
import fluffykins from './images/fluffykins.png'
import pumpkin from './images/pumpkin.png'

import './App.css';


function Cat() {
  return (
      <div className="contacts">
      
          <div className="contact-card">
          <img src={whiskerson} alt="images/whiskerson.png" />
              <h3>Mr. Whiskerson</h3>
              <div className="info-group">
                  <img src={phone}  alt="/images/phone.png" />
                  <p>(212) 555-1234</p>
              </div>
              <div className="info-group">
                  <img src={mail} alt="/images/mail.png" />
                  <p>mr.whiskaz@catnap.meow</p>
              </div>
          </div>
          
          <div div className="contact-card">
              <img src={fluffykins} alt="/images/fluffykins.png"/>
              <h3>Fluffykins</h3>
              <div className="info-group">
                  <img src={phone} alt="/images/phone.png" />
                  <p>(212) 555-2345</p>
              </div>
              <div className="info-group">
                  <img src={mail} alt="/images/mail.png" />
                  <p>fluff@me.com</p>
              </div>
          </div>
          
          <div className="contact-card">
          <img src={felix} alt="images/felix.png" />
              <h3>Felix</h3>
              <div className="info-group">
                  <img src={phone} alt="/images/phone.png" />
                  <p>(212) 555-4567</p>
              </div>
              <div className="info-group">
                  <img src={mail} alt="/images/mail.png" />
                  <p>thecat@hotmail.com</p>
              </div>
          </div>
          
          <div className="contact-card">
              <img src= {pumpkin}alt="/images/pumpkin.png"/>
              <h3>Pumpkin</h3>
              <div className="info-group">
                  <img src={phone} alt="/images/phone.png" />
                  <p>(0800) CAT KING</p>
              </div>
              <div className="info-group">
                  <img src={mail} alt="/images/mail.png" />
                  <p>pumpkin@scrimba.com</p>
              </div>
          </div>
          
      </div>
  )
}

function App() {
  return (
    <div className="App">

      <Cat />
     
    </div>
  );
}

export default App;
