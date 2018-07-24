import React, { Component } from 'react';
import { NavLink as RouteLink } from 'react-router-dom';

class ApiMyUseList extends Component {
  state = {
    path: '/api/' + this.props.info.apiId,
    listOn: false,
    removeOn: false,
  };

  handleRemoveApi = () => {
    const { info, onRemove } = this.props;
    this.setState({
      removeClick: true,
    });
    onRemove(info.apiId);
  };

  onListEnterHandler = () => {
    this.setState({
      listOn: true,
    });
  };

  onListLeaveHandler = e => {
    this.setState({
      listOn: false,
    });
  };

  onDelBtnEnterHandler = () => {
    this.setState({
      removeOn: true,
    });
  };

  onDelBtnLeaveHandler = e => {
    this.setState({
      removeOn: false,
    });
  };

  render() {
    const { info } = this.props;
    return (
      <RouteLink
        to={this.state.removeOn ? '/api' : this.state.path}
        className="nav-link btn btn-outline-tmon"
        onMouseEnter={this.onListEnterHandler}
        onMouseLeave={this.onListLeaveHandler}
      >
        &nbsp; {info.apiName} &nbsp;
        {this.state.listOn && (
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={this.handleRemoveApi}
            onMouseEnter={this.onDelBtnEnterHandler}
            onMouseLeave={this.onDelBtnLeaveHandler}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}
      </RouteLink>
    );
  }
}

export default ApiMyUseList;
