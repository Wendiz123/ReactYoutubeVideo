import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import { VideoList } from './components/video_list';

const API_KEY = 'AIzaSyDxe6TuLRDBwol_kv0QJUDFMpTmlnqd7rg';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { videos:[] };

        YTSearch({key: API_KEY, term: 'this is it detikcom'}, (videos)=>{
                    this.setState({ videos });
        });
    }

    render(){
        return(<div>
            <VideoList list={this.state.videos} />
        </div>);
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));