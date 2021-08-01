import React, { Component } from 'react';
import Container from '@/components/Container';
import SimpleItem from '@/components/SimpleItem';
import PageTitle from '@/components/PageTitle';
import Skeleton from 'react-loading-skeleton';


const AIRTABLE_KEY = process.env.NEXT_PUBLIC_AIRTABLE_KEY;
const TABLE_NAME = 'articles';
const TABLE_VIEW = 'default';
export default class App extends Component {
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
      <Container title="书签 – 左子祯">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <PageTitle title="书签" />

          <div className="space-y-8">
                {this.state.articles.map((article) => (
                  // <SimpleItem {...article.fields} />
                  <SimpleItem
                    key={article.fields.title}
                    title={`《${article.fields.title}》`}
                    description={article.fields.description}
                    href={article.fields.href}
                    site={article.fields.site}
                  />
                ))}
              </div>
        </div>
      </Container>
    );
  }
}
