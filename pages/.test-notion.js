import React, { Component } from 'react';
import Container from '@/components/Container';
import SimpleItem from '@/components/SimpleItem';
import PageTitle from '@/components/PageTitle';

import Link from 'next/link';
import { Client } from "@notionhq/client"
import slugify from 'slugify';


const RecipePage = ({recipes}) => {
  return recipes.map((recipe) => (
    <p key={recipe}>
      <Link href={`/recipes/${slugify(recipe).toLowerCase()}`}>
        <a>{recipe}</a>
      </Link>
    </p>

  ))
}

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  })

  const recipes = []

  data.results.forEach(result => {
    if (result.type === 'child_page') {
      recipes.push(
        result.child_page.title,
      );
    }
  })

  return {
    props: {
      recipes,
    }
  }
}

export default RecipePage;