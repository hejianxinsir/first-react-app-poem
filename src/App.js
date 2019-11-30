import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    		<p>Hello, this is my first React app. Let's read a poem, shall we ?</p>
				<div className="poem">
					<h3>小池</h3>
					<footer>宋-杨万里</footer>
					<p>
						泉眼无声惜细流，<br />
						树阴照水爱晴柔。<br />
						小荷才露尖尖角，<br />
						早有蜻蜓立上头。<br />
					</p>
				</div>
    </div>
  );
}

export default App;
