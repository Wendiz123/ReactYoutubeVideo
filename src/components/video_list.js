import React from 'react'
import ReactDOM from 'react-dom'
import VideoListItem from './video_list_item'

export class VideoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const VideoItem = this.props.list.map((video) =>{
            // return (<li onClick={ () => this.props.onVideoSelect(video)}>
            //     {video.snippet.title} <br /><img src={video.snippet.thumbnails.medium.url} />
            // </li>)

            return (
                <VideoListItem 
                key = {video.etag}
                video = {video}
                onVideoSelect = {this.props.onVideoSelect}
                />
            )
        });

        return <div>
            <ul>
                {VideoItem}
            </ul>
        </div>
    }
}