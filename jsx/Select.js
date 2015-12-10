/* global React, $ */
'use strict';

require('../js/bootstrap-select');
var React = require('react');
var Input = require('react-bootstrap').Input;
var ReactDOM = require('react-dom');

var BootstrapSelect = React.createClass({displayName: 'BootstrapSelect',
  getInitialState: function () {
    return {
      open: false
    };
  },
  componentDidUpdate: function () {
    $(ReactDOM.findDOMNode(this)).find('select').selectpicker('refresh');
    var select = $(ReactDOM.findDOMNode(this)).find('div.bootstrap-select');
    select.toggleClass('open', this.state.open);
  },
  componentWillUnmount: function () {
    var self = this;
    var select = $(ReactDOM.findDOMNode(this)).find('select');

    var button = $(ReactDOM.findDOMNode(this)).find('button');
    var dropdown = $(ReactDOM.findDOMNode(this)).find('.dropdown-menu.open');
    var items = $(ReactDOM.findDOMNode(this)).find('ul.dropdown-menu li a');

    $('html').off('click');
    button.off('click');
    items.off('click');
  },
  componentDidMount: function () {
    var self = this;
    var select = $(ReactDOM.findDOMNode(this)).find('select');
    $(select).selectpicker();

    var button = $(ReactDOM.findDOMNode(this)).find('button');
    var dropdown = $(ReactDOM.findDOMNode(this)).find('.dropdown-menu.open');
    var items = $(ReactDOM.findDOMNode(this)).find('ul.dropdown-menu li a');

    $('html').click(function () {
      self.setState({ open: false });
    });

    button.click(function (e) {
      e.stopPropagation();
      self.setState({ open: !self.state.open });
    });

    items.click(function () {
      if (self.props.multiple) return;
      self.setState({ open: !self.state.open });
    });
  },
  render: function () {
    return (
      <Input {...this.props} type='select' />
    );
  }
});

module.exports = BootstrapSelect;
