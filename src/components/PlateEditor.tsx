'use client';

import React from 'react';
import {
  createPlugins,
  Plate,
  PlateProvider,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createParagraphPlugin,
  createHeadingPlugin,
  createBoldPlugin,
  createItalicPlugin,
  createUnderlinePlugin,
  createBlockquotePlugin,
  createCodeBlockPlugin,
  createListPlugin,
} from '@udecode/plate';

interface PlateEditorProps {
  onChange: (value: string) => void;
  initialValue?: string;
}

const plugins = createPlugins([
  createParagraphPlugin(),
  createHeadingPlugin(),
  createBoldPlugin(),
  createItalicPlugin(),
  createUnderlinePlugin(),
  createBlockquotePlugin(),
  createCodeBlockPlugin(),
  createListPlugin(),
]);

const PlateEditor: React.FC<PlateEditorProps> = ({ onChange, initialValue }) => {
  return (
    <div className="border border-gray-300 rounded-md">
      <div className="border-b border-gray-300 p-2 flex gap-2">
        {/* Toolbar will go here */}
      </div>
      <PlateProvider plugins={plugins}>
        <Plate
          onChange={(newValue) => {
            onChange(JSON.stringify(newValue));
          }}
          initialValue={initialValue ? JSON.parse(initialValue) : [
            {
              type: 'p',
              children: [{ text: 'Start writing your blog post...' }],
            },
          ]}
        >
          <div className="p-4 min-h-[300px] prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none">
            {/* Editor content will go here */}
          </div>
        </Plate>
      </PlateProvider>
    </div>
  );
};

export default PlateEditor; 