import React from 'react';
import './list-item.css'

export default class ListItem extends React.Component {
    
    state = {
        value: 5
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeStatus(this.props.id, this.state.value);
    };
    
    render() {
        const { label, have, status, onHave, deleteItem} = this.props;

        let className = 'list-item';

        if ( have ) {
            className += ' have'; 
        };
    
        return (
            <div className={ className }>
                <span className="list-item-label"
                      onClick={ onHave }>
                    {label}
                </span>
    
                <form onSubmit={this.handleSubmit}>
                    <select className='select-priorty'
                            value={ status } 
                            onChange={ this.handleChange }>
                        <option value='1' >1</option>
                        <option value='2' >2</option>
                        <option value='3' >3</option>
                        <option value='4' >4</option>
                        <option value='5' >5</option>
                    </select>
                </form>
    
                <button type='button'
                        className="btn-delete"
                        onClick={ deleteItem }>
                    Delete
                </button>
    
            </div>
        );
    };
};