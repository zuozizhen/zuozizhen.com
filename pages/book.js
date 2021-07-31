import React, { Component } from 'react';
import Container from '@/components/Container';
import SimpleItem from '@/components/SimpleItem';
import PageTitle from '@/components/PageTitle';

const AIRTABLE_KEY = process.env.NEXT_PUBLIC_AIRTABLE_KEY;
const TABLE_NAME = 'books';
const TABLE_VIEW = 'default';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    fetch(
      `https://api.airtable.com/v0/appD1SuztrNriM2Uj/${TABLE_NAME}?&view=${TABLE_VIEW}&api_key=${AIRTABLE_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ books: data.records });
      })
      .catch((err) => {
        // Error :(
      });
  }
  render() {
    return (
      <Container title="书单 – 左子祯">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <PageTitle title="书单" description="这里记录了我曾经看过的书" />
          <div className="space-y-8">
            {this.state.books.map((book) => (
              // <SimpleItem {...book.fields} />
              <SimpleItem
                key={book.fields.title}
                title={`《${book.fields.title}》`}
                description={book.fields.description}
                imgSrc={book.fields.imgSrc[0].thumbnails.large.url}
                href={book.fields.href}
                score={book.fields.score}
              />
            ))}
          </div>
        </div>
      </Container>
    );
  }
}
