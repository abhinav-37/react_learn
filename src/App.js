
function App() {
  let number = 0
  
  const increase = () => {
    number += 1
    console.log(number);
  }

  return (
    <div className="App">
      <h1> {number} </h1>
      <button onClick={increase} >add</button>
    </div>
  );
}

export default App;
