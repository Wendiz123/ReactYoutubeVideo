import React, {Component} from 'react'

class SearchBar extends Component{
    
    constructor(props) {
        super(props);

        this.state = {term:''}
    }

    onTextChanged(ev) {
        this.setState({term:ev})
        // console.log(ev)
    }

    render() {

        var placeholder = ""
        if(this.props.placeholder){
            placeholder = this.props.placeholder
        }

        return (
        <div>
            <input onChange={(event) => this.onTextChanged(event.target.value)} placeholder={placeholder}  />
            <br />
            Ini textnya : {this.state.term}
        </div>)
    }
}

export default SearchBar