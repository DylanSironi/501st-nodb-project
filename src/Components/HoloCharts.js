import React, {Component} from 'react';

class HoloCHarts extends Component {
    handleRecruit = () => {
        const {troopers} = this.props;
        let newTrooper = {
            name: troopers.name,
            // image: troopers.sprites.front_default
            image: troopers.url
        }

        this.props.recruitFn(newTrooper);
        this.props.refreshFn();
    }

    render(){
        return (
            <div onClick={this.handleRecruit}>
                {/* <img src={this.props.troopers.sprites.front_default} alt={this.props.troopers.name}/> */}
                <img src={this.props.troopers.url} alt={this.props.troopers.name}/>
                <p>{this.props.troopers.name}</p>
            </div>
        )
    }
}
export default HoloCHarts;