import { Client } from '@notionhq/client';
import slugify from 'slugify';

const notion = new Client({
  auth: process.env.NOTION_SECRET
});

export const getBooksData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Status',
      select: {
        equals: 'Read'
      }
    },
  });
  return response.results;
};

export const getFeaturedProjectData = async (databaseId) => {
  let results = []
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Type',
      select: {
        equals: 'Featured'
      }
    },
  });

  results = [...response.results];

  while (response.has_more) {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Type',
        select: {
          equals: 'Featured'
        }
      },
      start_cursor: response.next_cursor
    });


    results = [...results, ...response.results];
  }
  return response.results;
};

export const getOtherProjectData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Type',
      select: {
        equals: 'Other'
      }
    },
  });
  return response.results;
};

export const getOpenSourceProjectData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Type',
      select: {
        equals: 'OpenSource'
      }
    },
  });
  return response.results;
};

export const getBucketListData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    // sorts: [
    //   {
    //     property: 'Name',
    //     direction: 'descending'
    //   }
    // ]
  });
  return response.results;
};

export const getStackData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getOtherBookmarksData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Type',
      select: {
        equals: 'Other'
      }
    },
  });
  return response.results;
};

export const getArticleBookmarksData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Type',
      select: {
        equals: 'Article'
      }
    },
  });
  return response.results;
};

export const getPersonalWebsiteBookmarksData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Type',
      select: {
        equals: 'PersonalSite'
      }
    },
  });
  return response.results;
};

export const getToolBookmarksData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Type',
      select: {
        equals: 'Tool'
      }
    },
  });
  return response.results;
};

export const getChangelogData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Date',
        direction: 'descending'
      }
    ]
  });

  let completed = [],
    active = [],
    backlog = [];

  response.results.forEach((item) => {
    switch (item.properties.Status.select.name) {
      case 'Completed':
        completed = turnIntoChangelogItem(item, completed);
        break;
      case 'Backlog':
        backlog = turnIntoChangelogItem(item, backlog);
        break;
      case 'Active':
        active = turnIntoChangelogItem(item, active);
        break;
      default:
        break;
    }
  });

  return {
    completed,
    active,
    backlog
  };
};

// notion 获取数据表中状态是 Published 的列
export const getPublishedArticles = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Status',
      select: {
        equals: 'Published'
      }
    },
    sorts: [
      {
        property: 'Published',
        direction: 'descending'
      }
    ]
  });

  return response.results;
};


// notion 获取单页面
export const getPage = async (pageId) => {
  const response = await notion.blocks.children.list({
    block_id: pageId
  });

  return response.results;
};

export const getSponsoredArticles = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Sponsor',
      relation: {
        is_not_empty: true
      }
    }
  });

  return response.results;
};

export const convertToArticleList = (tableData) => {
  let tags = [];
  const articles = tableData.map((article) => {
    return {
      title: article.properties.Name.title[0].plain_text,
      tags: article.properties.tags.multi_select.map((tag) => {
        if (!tags.includes(tag.name)) {
          const newList = [...tags, tag.name];
          tags = newList;
        }
        return { name: tag.name, id: tag.id };
      }),
      coverImage:
        article.properties?.coverImage?.files[0]?.file?.url ||
        article.properties.coverImage?.files[0]?.external?.url ||
        'https://via.placeholder.com/600x400.png',
      publishedDate: article.properties.Published.date.start,
      summary: article.properties?.Summary.rich_text[0]?.plain_text
    };
  });

  return { articles, tags };
};

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId
  });

  return response.results;
};

export const getMoreArticlesToSuggest = async (
  databaseId,
  currentArticleTitle
) => {
  let moreArticles;

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            equals: 'Published'
          }
        },
        {
          property: 'Name',
          rich_text: {
            does_not_equal: currentArticleTitle
          }
        }
      ]
    }
  });

  moreArticles = response.results.map((article) => {
    return {
      title: article.properties.Name.title[0].plain_text,
      coverImage:
        article.properties?.coverImage?.files[0]?.file?.url ||
        article.properties.coverImage?.files[0]?.external?.url ||
        'https://via.placeholder.com/600x400.png',
      publishedDate: article.properties.Published.date.start,
      summary: article.properties?.Summary.rich_text[0]?.plain_text
    };
  });

  shuffleArray(moreArticles);

  return moreArticles.slice(0, 3);
};

export const getArticlePage = (data, slug) => {
  const response = data.find((result) => {
    if (result.object === 'page') {
      const resultSlug = slugify(
        result.properties.Slug.rich_text[0].text.content
      ).toLowerCase();
      return resultSlug === slug;
    }
    return false;
  });

  return response;
};

export const getArticlePageByID = (data, slug) => {
  const response = data.find((result) => {
    if (result.object === 'page') {
      const resultSlug = slugify(
        result.id
      ).toLowerCase();
      return resultSlug === slug;
    }
    return false;
  });

  return response;
};

export function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    // Pick a random element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
}

function turnIntoChangelogItem(item, array) {
  const updatedChangelogList = [
    ...array,
    {
      title: item.properties.Name.title[0].plain_text,
      description: item.properties.Description.rich_text[0].plain_text,
      date: item.properties.Date?.date?.start
    }
  ];
  return updatedChangelogList;
}
