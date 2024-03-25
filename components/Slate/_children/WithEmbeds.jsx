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
  if (!url) return null;
  const text = {text: ''};
  const embed = {type: 'embed', url, children: [text]};
  Transforms.insertNodes(editor, embed);
  Transforms.removeNodes(editor, {
    at: [editor?.selection.anchor.path[0] - 1],
  });
  Transforms.insertNodes(editor, [
    {
      type: 'paragraph',
      children: [text],
    },
  ]);
};

export const InsertEmbedButton = () => {
  const editor = useSlateStatic();
  return (
    <Button
      onMouseDown={(event) => {
        event.preventDefault();
        const url = window.prompt('Ingresar URL del video:');
        insertEmbed(editor, url);
      }}
    >
      <Icon style={{width: '18px'}}>videocamera</Icon>
    </Button>
  );
};
