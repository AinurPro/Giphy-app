
import {Component} from "react"
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     giphy: []
  //   }
  // }

  state= {
    giphy: []
  }

 

componentDidMount(){
  // console.log('Hello from component did mount')

  fetch('https://api.giphy.com/v1/gifs/trending?api_key=f3gFQFdXg5McSbAIOi3z4nDLKQbmT1Xp&limit=25&rating=g')
  .then(response=> response.json()) // parse the request
      // .then(json=> console.log(json)) 
      .then(json => {
        console.log(json.data)
        this.setState({giphy:json.data}) // get the data
      })
    }
    render(){
      return(
        <div className="App">
          <Navbar />
         <h1>GIPHY APP</h1>
         {
           this.state.giphy.map(g=> (
             <div>

             <img src={g.images.original.url}/>
             </div>
           ))
         }
        </div>
      )
    }

}
   


export default App;
