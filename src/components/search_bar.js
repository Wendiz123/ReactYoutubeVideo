import React from 'react'

export class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = { term: ''}
    }

    render() {
        return (
            <div className='search-bar'>
                <input 
                    value={this.state.term} 
                    onChange={ event => this.InputTerms(event.target.value)} 
                />
            </div>
        );
    }

    InputTerms(term) {
        this.setState({ term });
        this.props.onSearchTerm(term)
    }
}