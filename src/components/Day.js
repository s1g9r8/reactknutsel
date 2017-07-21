import React from 'react';

export default class Day extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hoursValue: ""
    };
    this.getDayData = this.getDayData.bind(this);
    this.changeHours = this.changeHours.bind(this);
  }

  getDayData () {
      return this.state.hoursValue;
  }

  changeHours (e) {
     this.setState({hoursValue: e.target.value});
  }

  render() {
    return (
      <div>
        <label>{this.props.labelName}
          <input type="text" ref={this.props.ref} value={this.state.hoursValue} onChange={this.changeHours}/>
        </label>
      </div>
    );
  }
}
