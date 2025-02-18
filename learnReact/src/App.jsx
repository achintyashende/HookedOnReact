import { useEffect, useState } from 'react'
import './App.css'

// conditional rendering
function App() {

  const [visible, setVisible] = useState(true);
  useEffect(function(){
    setInterval(function(){
      setVisible(temp => !temp)
    },5000)
  },[])

  return (
    <div>
      <b>
        Hi there timer
      </b>
      {visible ? <Counter/> : null}
      {/* OR */}
      {/* {counterVisible && <Counter/>} */}
      {/* <button onClick={visibility}>show</button> */}
    </div>
  )
}



function Counter() {
  

  const [count, setCount] = useState(0);

  console.log("counter")
  useEffect(
    function(){
      console.log("mounted");
      let clock = setInterval(function(){
        setCount(count => count+1);
        // OR
        // setCount(function(count){
        //   return count+1;
        // });
      }, 1000)

      return function(){
        console.log("unmounted")
        clearInterval(clock)
      }
    } ,[])

    

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}
export default App
