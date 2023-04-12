# 22.5assessment


import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [fontSize, setFontSize] = useState(12)
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  const increaseFont = () => setFontSize(fontSize + 2)
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} handleFontSizeIncrease={increaseFont} />
      <Content loggedIn={loggedIn} fontSize={fontSize}/>
    </div>
  );
}

export default App;

1
import React, { useState } from "react";
2
import Content from "./Content";
3
import Header from "./Header";
4
​
5
function App() {
6
  const [loggedIn, setLoggedIn] = useState(false);
7
  const [fontSize, setFontSize] = useState(12)
8
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
9
  const increaseFont = () => setFontSize(fontSize + 2)
10
  return (
11
    <div>
12
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} handleFontSizeIncrease={increaseFont} />
13
      <Content loggedIn={loggedIn} fontSize={fontSize}/>
14
    </div>
15
  );
16
}
17
​
18
export default App;
19
​
React state management: State over multiple components
Instructions
Add a button to the header which increases the font size of the content. Initialize the font size to 12 and increase it by 2 with each button click.

Specific instructions
The button should be after the login button
Within the App component, store the font size as a state variable. The font size will in turn have to be passed to the Content component, which renders the content for the app, via a prop called fontSize.
For the tests to pass, make sure you use Increase Font size when declaring the font size button (e.g., <button onClick={handleFontSizeIncrease}>Increase Font Size</button>).
