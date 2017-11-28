import React from 'react'
import ReactDOM from 'react-dom'

export class VideoDetail extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        if(!this.props.video){
            return <div>Loading...</div>
        }

        const videoId = this.props.video.id.videoId;
        const url = "https://www.youtube.com/embed/" + videoId;

        return (
            <div>
                <div>
                    <iframe src={url} width="640" height="480"> </iframe> {this.videoId}
                </div>

                <div>
                    <p>{this.props.video.snippet.title}</p>
                </div>
            </div>
        )
    }
}