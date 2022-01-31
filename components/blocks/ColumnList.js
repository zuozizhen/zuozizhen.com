import { Fragment } from 'react'
import { renderBlocks } from '@/lib/renderBlocks';

const ColumnList = ({ children }) => {
  if (children == null) return null
  return (
    <div
      className={`grid my-2 gap-x-6`}
      style={{ gridTemplateColumns: `repeat(${children.length}, minmax(0, 1fr))` }}
    >
      {children.map((column, index) => {
        const blocks = column.block_children ?? []
        return (
          <section key={index}>
            {blocks.map(block => (
              <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
            ))}
          </section>
        )
      })}
    </div>
  )
}

export default ColumnList