import React from 'react';
import {Transforms} from 'slate';
import {useSlateStatic} from 'slate-react';
import {Button, Icon} from '../components';

export const withEmbeds = (editor) => {
  const {isVoid} = editor;
  editor.isVoid = (element) =>
    element.type === 'embed' ? true : isVoid(element);
  return editor;
};

const insertEmbed = (editor, url) => {
  const text = {text: ''};
  const embed = {type: 'embed', url, children: [text]};
  if (!url) return null;
  Transforms.insertNodes(editor, embed);
  Transforms.insertNodes(editor, [
    {
      type: 'paragraph',
      children: [{text: ''}],
    },
  ]);
};

export const InsertEmbedButton = () => {
  const editor = useSlateStatic();
  return (
    <Button
      onMouseDown={(event) => {
        event.preventDefault();
        const url = window.prompt('Enter the URL of the video:');
        insertEmbed(editor, url);
      }}
    >
      <Icon>videocamera</Icon>
    </Button>
  );
};
