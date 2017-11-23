import React from 'react';
import ReactDOM from 'react-dom';

export class VideoList extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const VideoItem = this.props.list.map((video) => {
            return (<li id={video.etag}>
                <img src={video.snippet.thumbnails.high.url} /> {video.snippet.title} <p>{ video. snippet.description }</p>
            </li>)
        });

        return (
            <div>
                <ul>
                    { VideoItem }
                </ul>
            </div>
        )
    }

    
}