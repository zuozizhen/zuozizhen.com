import MetricCard from '@/components/metrics/Card';
import React, { Component } from 'react';

const AIRTABLE_KEY = process.env.NEXT_PUBLIC_AIRTABLE_KEY;
const TABLE_NAME = 'articles';
const TABLE_VIEW = 'default';
export default class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    fetch(
      `https://api.airtable.com/v0/appD1SuztrNriM2Uj/${TABLE_NAME}?&view=${TABLE_VIEW}&api_key=${AIRTABLE_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ articles: data.records });
      })
      .catch((err) => {
        // Error :(
      });
  }
  render() {
    return (
      <MetricCard
        header="书签"
        link={`/bookmark`}
        metric={this.state.articles.length}
      />
    );
  }
}