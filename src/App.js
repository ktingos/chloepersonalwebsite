import ct_headshot from './CT_Headshot.JPG';
import './App.css';

function App() {
  return (
    <div className="App">

      <div id="top-row">

        {/* <table>
          <tr id="row">
            <td className="blank-col"></td>
            <td id="image-area">
              <span><img src={ct_headshot} id="headshot" alt="Chloe Tingos Headshot"/></span> &nbsp;
            </td>
            <td id="info">
              <div>
                <span id="name">Chloe Tingos</span> <br></br>
                <i className="fas fa-map-marker-alt"></i> Boston, MA <br></br>
                <i className="fas fa-book"></i> Boston College Eagle studying Economics <br></br>
                <a href="mailto:ctingos20@gmail.com"><i class="fas fa-envelope link-logo"></i></a> &nbsp;
                <a href="https://www.linkedin.com/in/chloe-tingos-2a105a168/"><i class="fab fa-linkedin link-logo"></i></a> &nbsp;
                <a href="https://www.instagram.com/c_tingos3/"><i className="fab fa-instagram link-logo"></i></a> &nbsp;
                <a href="https://www.facebook.com/chloe.tingos"><i className="fab fa-facebook-square link-logo"></i></a>
              </div>
            </td>
            <td className="blank-col"></td>
          </tr>
        </table> */}
        
        <div>
          <span id="name">Chloe Tingos</span> <br></br>
          <i className="fas fa-map-marker-alt"></i> Boston, MA <br></br>
          <i className="fas fa-book"></i> Boston College Eagle studying Economics <br></br>
          <a href="mailto:ctingos20@gmail.com"><i class="fas fa-envelope link-logo"></i></a> &nbsp;
          <a href="https://www.linkedin.com/in/chloe-tingos-2a105a168/"><i class="fab fa-linkedin link-logo"></i></a> &nbsp;
          <a href="https://www.instagram.com/c_tingos3/"><i className="fab fa-instagram link-logo"></i></a> &nbsp;
          <a href="https://www.facebook.com/chloe.tingos"><i className="fab fa-facebook-square link-logo"></i></a> <br></br>
          <img src={ct_headshot} id="headshot" alt="Chloe Tingos Headshot"/>
        </div>
        
      </div>

      <div id="bottom-row">
        <div id="experience">
          <div className="bottom-row-header">Experience</div>
          <div>
            <ul>
              <li>Technology Department Assistant @ Belmont Public Schools</li>
              <li>Volunteer Tutor w/ the Pulse Program (Notre Dame Educational Center)</li>
              <li>Student @ Harvard Medical School MEDScience</li>
              <li>Wall Street 101 Program Participant @ Bentley University</li>
            </ul>
          </div>
        </div>
        <div id="about-me">
          <div className="bottom-row-header">About Me</div>
          <div>
            <ul>
              <li>Soccer enthusiast</li>
              <li>Comfortable speaking English, Greek, and Spanish</li>
              <li>Constantly listening to music</li>
              <li>Always eager to travel</li>
            </ul>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
