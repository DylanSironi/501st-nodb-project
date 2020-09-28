import React, {Component} from 'react';
import axios from 'axios';
import HoloCharts from './HoloCharts';

class Recruiter extends Component {
    constructor(props){
        super(props);
        this.state = {
            openTroopers: []
        }
    }

    componentDidMount(){
        this.getOpenTroopers();
    }

    getOpenTroopers = () => {
        axios.get('/api/open-troopers')
        .then(res => {
            this.setState({openTroopers: res.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        const mappedTroopers = this.state.openTroopers.map((troopers, i) => (
            <HoloCharts 
                key={i}
                troopers={troopers}
                recruitFn={this.props.recruitFn}
                refreshFn={this.getOpenTroopers}/>
        ))
        return (
            <div className='troop-flex'>
                {mappedTroopers}
            </div>
        )
    }
}

export default Recruiter;