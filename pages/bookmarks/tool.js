import React, { Component } from 'react';
import Container from '@/components/Container';
import SimpleItem from '@/components/SimpleItem';
import PageTitle from '@/components/PageTitle';
import Skeleton from 'react-loading-skeleton';


const AIRTABLE_KEY = process.env.NEXT_PUBLIC_AIRTABLE_KEY;
const TABLE_NAME = 'bookmarks';
const TABLE_VIEW = 'tool';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      database: []
    };
  }
  componentDidMount() {
    fetch(
      `https://api.airtable.com/v0/appD1SuztrNriM2Uj/${TABLE_NAME}?&view=${TABLE_VIEW}&api_key=${AIRTABLE_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ database: data.records });
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
          <div class="hidden grid-cols-4 gap-2 overflow-x-auto md:grid tabbed-navigation md:justify-center md:-ml-0 md:-mr-0 flex-nowrap mb-8 w-full">
            <a
              class="font-medium flex flex-none rounded-lg text-gray-500 items-center justify-center space-x-3 hover:bg-gray-100 filter-saturate  dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300 text-tertiary"
              href="/bookmarks"
            >
              <span class="flex items-center px-4 py-2 space-x-2">
                <span>全部</span>
              </span>
            </a>
            <a
              class="font-medium flex flex-none rounded-lg text-gray-500 items-center justify-center space-x-3 hover:bg-gray-100 filter-saturate  dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300 text-tertiary"
              href="/bookmarks/reading"
            >
              <span class="flex items-center px-4 py-2 space-x-2">
                <span>好文</span>
              </span>
            </a>
            <a
              class="font-medium flex flex-none rounded-lg text-gray-500 items-center justify-center space-x-3 hover:bg-gray-100 filter-saturate  dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300 text-tertiary"
              href="/bookmarks/personal-site"
            >
              <span class="flex items-center px-4 py-2 space-x-2">
                <span>个人网站</span>
              </span>
            </a>
            <a
              class="font-medium flex flex-none rounded-lg text-gray-900 dark:text-gray-100 items-center justify-center space-x-3 bg-gray-100 dark:bg-gray-800"
              href="/bookmarks/tool"
            >
              <span class="flex items-center px-4 py-2 space-x-2">
                <span>工具</span>
              </span>
            </a>
          </div>
          <div className="space-y-8">
            {this.state.database.map((data) => (
              // <SimpleItem {...data.fields} />
              <SimpleItem
                key={data.fields.title}
                title={`${data.fields.title}`}
                description={data.fields.description}
                href={data.fields.href}
                tagGreen={data.fields.toolTag}
              />
            ))}
          </div>
        </div>
      </Container>
    );
  }
}
