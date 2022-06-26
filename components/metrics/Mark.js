import MetricCard from '@/components/metrics/Card';
import React, { Component } from 'react';

export default class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      database: []
    };
  }
  render() {
    return (
      <MetricCard
        header="书签"
        link={`/bookmark`}
        metric={this.state.database?.length}
      />
    );
  }
}
