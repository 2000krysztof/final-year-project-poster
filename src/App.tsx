//import { useState } from 'react'
import photo from './assets/photo.jpg'
import diagram from './assets/diagram.png'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
	  <h1>Facial Interface: An Interactive AI System</h1>
		<h2>Krzysztof Malczuk</h2>
          <img src={photo} className="photo" alt="Photo of me"  />
      </section>


      <section id="next-steps">
        <div id="description">
          <h2>Description</h2>
		  <p>
		  This project presents a facial interface for large language models, designed to provide a more natural and engaging interaction. The system runs on a Raspberry Pi and interprets speech to generate micro-expressions, enabling the AI to convey subtle emotional cues while communicating.

				  The AI processing, including natural language understanding, response generation, and text-to-speech synthesis, is performed on a remote server. Audio embeddings are used to drive the micro-expressions, allowing the interface to reflect the emotional content of the conversation in real time.
			</p>
			  <ul>
				<li>Real-time conversational AI interaction</li>
				<li>Micro-expression generation based on audio embeddings</li>
				<li>Lightweight deployment on Raspberry Pi</li>
				<li>Remote AI processing for text and speech generation</li>
			  </ul>
        </div>
        <div id="diagram">
		<h2>Diagram</h2>
          <img src={diagram} alt="Diagram of architecture"/>
		</div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
