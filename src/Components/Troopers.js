import React, {Component} from 'react';

class Troopers extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            nameInput: ''
        }
    }

    handleInput = (val) => {
        this.setState({nameInput: val})
    }

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleEdit = (id) => {
        this.props.nameFn(id, this.state.nameInput);
        this.handleToggle();
    }

    render(){
        return (
            <div>
                <img src={this.props.troopers.image} alt={this.props.troopers.name}/>
                {this.state.isEditing
                ? (
                    <div>
                        <input 
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleEdit(this.props.troopers.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.troopers.name}</p>
                        <button onClick={this.handleToggle}>Edit Name</button>
                    </div>
                )}
                <button onClick={() => this.props.KIAFn(this.props.troopers.id)}>KIA</button>
            </div>
        )
    }
}

export default Troopers;