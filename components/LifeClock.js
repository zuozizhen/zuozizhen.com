import React, { Component } from 'react';

function timeRun(date) {
  // Personal Info
  var birth = 1994;
  var lifeSpan = 75;
  // Date Time
  var minutes = date.getMinutes();
  var days = date.getDate();
  var months = date.getMonth();
  var hours = date.getHours();
  var allTime = date.getTime();
  var years = date.getFullYear();
  var ageRun;
  var age = years - birth;
  var lifeRest = lifeSpan - age;
  var lifePassed = Math.floor((age / lifeSpan) * 100);
  var allDays = new Date(years, months, 0).getDate();
  var month_per = days / allDays;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  var t = allTime / 1000 / 60 / 60 / 24 / 365;
  var y = Math.floor(t) - (birth - 1970);
  var s = (years - 1970) * 365 * 24 * 60 * 60 * 1000;
  var f = t - (years - 1970);
  var r = Math.floor(f * 1000000000);
  ageRun = y + '.' + r;
  return ageRun;
}

class LifeClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <span>
        {timeRun(this.state.date)}
      </span>
    );
  }
}

export default LifeClock;