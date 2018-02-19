var React = require('react');
var GroceryItem = require('./GroceryItem.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="item-list">
                <h1 className="list-title">Grocery Listify</h1>
                <div>
                    {
                        this.props.items.map(function (item, index) {
                            return (
                                <div className="item-component">
                                    <GroceryItem item={item} key={"item" + index} />
                                </div>
                            );
                        })
                    }
                </div>
                <GroceryListAddItem />
            </div>
        )
    }
})