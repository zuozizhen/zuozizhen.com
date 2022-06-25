import React, { Fragment } from 'react';
import { slugify } from 'transliteration'

import NotionImage, { getMediaCtx } from '@/components/blocks/NotionImage'
import Bookmark from '@/components/blocks/NotionBookmark'
import { Callout } from '@/components/blocks/Callout';
import { CodeBlock } from '@/components/blocks/Codeblock';
import { YoutubeEmbed } from '@/components/blocks/YoutubeEmbed';
import ColumnList from '@/components/blocks/ColumnList';

import Latex from 'react-latex-next'
import { Text } from '@/components/blocks/NotionTextBlock'

export function renderBlocks(block) {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p className="my-2">
          <Text text={value.rich_text} />
        </p>
      )

    case 'heading_1':
      return (
        <h1 id={slugify(value.rich_text[0].plain_text)} className="font-bold mt-4 mb-2 text-2xl leading-7 dark:text-white">
          <Text text={value.rich_text} />
        </h1>
      )

    case 'heading_2':
      return (
        <h2 id={slugify(value.rich_text[0].plain_text)} className="font-bold mt-4 text-xl mb-2 leading-7 dark:text-white">
          <Text text={value.rich_text} />
        </h2>
      )

    case 'heading_3':
      return (
        <h3 id={slugify(value.rich_text[0].plain_text)} className="font-bold mt-4 text-lg mb-2 leading-7 dark:text-white">
          <Text text={value.rich_text} />
        </h3>
      )
    case 'bulleted_list_item':
      return (
      <ul className='pl-0'>
        <li className="list-disc list-inside my-1">
          <Text text={value.rich_text} />
          </li>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
      </ul>
      )

    case 'numbered_list_item':
      return (
        <ul>
          <li className="list-decimal list-inside my-1">
            <Text text={value.rich_text} />
          </li>
        </ul>
      )

    case 'to_do':
      return (
        <div>
          <label
            htmlFor={id}
            className="flex items-center justify-start space-x-3"
          >
            <input
              id={id}
              aria-describedby={value.rich_text}
              name={id}
              type="checkbox"
              className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
            />
            <Text text={value.rich_text} />
          </label>
        </div>
      );

    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
        </details>
      );

    case 'child_page':
      return <p className="my-2">{value.title}</p>;

    case 'image':
      return <NotionImage value={value} />;

    case 'video':
      return <YoutubeEmbed url={value.external.url} />;

    case 'code':
      return (
        <div>
          <CodeBlock
            language={value.language}
            code={value.rich_text[0].text.content}
          />
        </div>
      );
    case 'callout':
      return (
        <Callout>
          {value.icon && <span>{value.icon.emoji}</span>}
          <div>
            <Text text={value.rich_text} />
          </div>
        </Callout>
      );

    case 'bookmark':
      return <Bookmark value={value} />;

    case 'column_list':
      return <ColumnList>{block.block_children}</ColumnList>

    case 'embed':
      const codePenEmbedKey = value.url.slice(value.url.lastIndexOf('/') + 1);
      return (
        <div>
          <iframe
            height="600"
            className="w-full"
            scrolling="no"
            title="Postage from Bag End"
            src={`https://codepen.io/braydoncoyer/embed/preview/${codePenEmbedKey}?default-tab=result`}
            frameBorder="no"
            loading="lazy"
            allowFullScreen={true}
          >
            See the Pen <a href={value.url}>Postage from Bag End</a> by Braydon
            Coyer (<a href="https://codepen.io/braydoncoyer">@braydoncoyer</a>)
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      );
    case 'table_of_contents':
      return <div>TOC</div>;

    case 'video':
      return <YoutubeEmbed url={value.external.url} />;

    case 'quote':
      return (
        <blockquote className="p-4 rounded-r-lg">
          <Text text={value.rich_text} />
        </blockquote>
      );

    case 'divider':
      return <p className="font-mono text-center py-2 tracking-[1em]">...</p>

    case 'equation':
      return <Latex>{`\\[${value.expression}\\]`}</Latex>

    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`;
  }
}
