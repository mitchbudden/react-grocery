var React = require('react');
var action = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({

    togglePurchased: function (e) {
        e.preventDefault();
        if (this.props.item.purchased) {
            action.unbuy(this.props.item);
        } else {
            action.buy(this.props.item);
        }
    },

    delete: function (e) {
        e.preventDefault();
        action.delete(this.props.item);
    },

    render: function () {
        return (
            <div className="grocery-item">
                <div className="item-name">
                    <h4 className={this.props.item.purchased ? "strikethrough" : ""}>
                        {this.props.item.name}
                    </h4>
                </div>
                <form onSubmit={this.togglePurchased}>
                    <button className={this.props.item.purchased ? "btn-default item-button" : "btn btn-primary item-button"}>
                        {this.props.item.purchased ? "Unbuy" : "Buy"}
                    </button>
                </form>
                <form onSubmit={this.delete}>
                    <button className="item-button btn btn-danger">&times;</button>
                </form>
            </div>
        )
    }
})