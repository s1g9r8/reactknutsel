import React from 'react';

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      data: ''
    }
  }

  onFormSubmit(e) {
    e.preventDefault();

    alert (Number(this.refs.monday.value) + Number(this.refs.tuesday.value)+ Number(this.refs.wednesday.value)+ Number(this.refs.thursday.value)+ Number(this.refs.friday.value));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Monday
            <input type="text" ref="monday"></input>
          </label>
          <label>Tuesday
            <input type="text" ref="tuesday"></input>
          </label>
          <label>Wednesday
            <input type="text" ref="wednesday"></input>
          </label>
          <label>Thursday
            <input type="text" ref="thursday"></input>
          </label>
          <label>Friday
            <input type="text" ref="friday"></input>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
