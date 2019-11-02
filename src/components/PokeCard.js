import React, { Component } from 'react';

class PokeCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
    };

    componentDidMount(){
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        this.setState({
            name,
            imageUrl,
            pokemonIndex
        });
    }

    render(){
        const name = this.props.name;
        const url = this.props.url;

        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <div className="card-header">
                        <h1>{name}</h1>
                        <img src={this.state.imageUrl}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PokeCard;