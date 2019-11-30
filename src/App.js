import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    		<div>Hello, this is my first React app. Let's read a poem, shall we ?</div>
				<div className="poem">
					<div>小池</div>
					<div>宋-杨万里</div>
					<div>
						泉眼无声惜细流，<br />
						树阴照水爱晴柔。<br />
						小荷才露尖尖角，<br />
						早有蜻蜓立上头。<br />
					</div>
				</div>
    </div>
  );
}

export default App;
