import React from 'react';
import './app.css';

import AppHeader from '../app-header/app-header';
import List from '../list/list';
import ItemAddForm from '../item-add-form/item-add-form';

export default class App extends React.Component {
    
    newID = 0;

    state = {
        listData:[
          this.createItem('Cofee'),
          this.createItem('Bread'),
          this.createItem('Eggs') 
        ],
        filter: 'all' //active, have, all
    };

    createItem(label){
        return {
          label: label,
          have: false,
          status: 5,
          id: this.newID++
        };
    };

    addNewItem = (text) => {
        this.setState(( { listData } ) =>{
            const newItem = this.createItem(text);
            return {
                listData: [...listData, newItem]
            };
        });
    };

    deleteItem = (id) => {
        this.setState(({ listData }) => {
            const arr = listData.filter((element) => element.id !== id );
            return {
                listData: arr
            }
        });
    };

    onHave = (id) => {
        this.setState(({ listData }) => {
            const newData = listData.map((item, index) => {
                if (index === id) {
                    return {
                        ...item,
                        have: !item.have
                      };
                } else {
                    return item;
                };
            });
            
            return {
                listData: newData
            };
        });
    };

    changeStatus = (id, status) => {
        this.setState(( {listData} ) => {
            const newData = listData.map((item, index) => {
                if (index === id) {
                    return {
                        ...item,
                        status: status
                      };
                } else {
                    return item;
                };
            });

            return {
                listData: newData
            };
        });
    }

    render() {
        const { listData } = this.state;

        return(
            <div className="list-app">
                <AppHeader />
                <List listData={ listData }
                      onHave={ this.onHave }
                      deleteItem={ this.deleteItem }
                      changeStatus={ this.changeStatus }/>
                <ItemAddForm addNewItem={ this.addNewItem }/>
            </div>
        );
    };
};