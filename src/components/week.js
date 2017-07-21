
import React from 'react';
import Day from './Day.js';

export default class Week extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    //TODO: samenstellen van dynamische variabele en hierover itereren. Ook checken of het een integer is anders foutmelding retourneren.
    alert(Number(this.refs.monday.getDayData()) + Number(this.refs.tuesday.getDayData()) + Number(this.refs.wednesday.getDayData())
    + Number(this.refs.thursday.getDayData()) + Number(this.refs.friday.getDayData()));
  }

  render() {

    var days = this.props.weekdays.map(function(weekday) {
      return <Day labelName={weekday.fieldLabel} ref={weekday.fieldRef}/>
    });

    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          {days}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
