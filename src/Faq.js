import React, {Component} from "react";
import './App.css';

class Faq extends Component {
    render() {

        return (

            <div>
            <div id="titles">FAQ</div>

              <h4>Is this a Website?</h4>
              <p>Maybe</p>
              <h4>Is it done?</h4>
              <p>No.</p>
              <h4>Does it suck?</h4>
              <p>Due to lack of actual website content, it fails as an actual website. However for the purpose of learning, it serves its purpose.</p>
              <p>So it is up for you to decide for yourself.</p>
              <h4>What is Lorem Ipsum?</h4>
              <p><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>

        );
    }
}

export default Faq;