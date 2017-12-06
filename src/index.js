import _ from 'lodash';
import React from 'react'
import ReactDOM from 'react-dom'
import YSearch from 'youtube-api-search'
import { VideoList } from './components/video_list'
import { VideoDetail } from './components/video_detail'
import { SearchBar } from './components/search_bar'

const API_KEY = 'AIzaSyDxe6TuLRDBwol_kv0QJUDFMpTmlnqd7rg';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { videos: [], selectedVideo:null}

        this.searching("IT Detikcom");
    }

    searching(term) {
        YSearch({key: API_KEY, term: term}, (videos)=>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        const videoSearch = _.debounce((term) => { this.searching(term) }, 300);
        return (<div>
            <SearchBar onSearchTerm={ videoSearch } />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
            onVideoSelect={selectedVideo =>this.setState({selectedVideo})}
            list={this.state.videos} />
        </div>)
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));