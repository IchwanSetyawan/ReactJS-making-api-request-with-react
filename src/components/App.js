import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
    async onSearchSubmit(term) {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: {query: term},
            headers: {
                Authorization:
                "Client-ID Vf3hwxZk9xWrQt_ZrHv8s5he-9daAx1j-097tKmQDuA"
            },
        });
        console.log(response.data.results);
    }

    render(){
        return(
            <div className='ui container' style={{marginTop:'10px'}}>            
                <SearchBar onSubmit={this.onSearchSubmit }/>    
            </div>
        )
    }
}

export default App;
