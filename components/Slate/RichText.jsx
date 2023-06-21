import React, {useCallback, useEffect, useMemo} from 'react';
import isHotkey from 'is-hotkey';
import {Editable, withReact, Slate} from 'slate-react';
import {Editor, Transforms, createEditor} from 'slate';
import {withHistory} from 'slate-history';
import {Toolbar} from './components';
import {Element, Leaf} from './_children/Element';
import {BlockButton, MarkButton} from './_children/Buttons';
import {InsertImageButton, withImages} from './_children/WithImages';
import {InsertEmbedButton, withEmbeds} from './_children/WithEmbeds';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

const RichText = ({newData, isNota}) => {
  let initialValue = [
    {
      type: 'paragraph',
      children: [{text: ''}],
    },
  ];

  const jsonText = newData;

  const objConvert = jsonText ? JSON.parse(jsonText) : undefined;

  useEffect(() => {
    if (editor?.children?.length > 0) {
      // Delete all entries leaving 1 empty node
      Transforms.delete(editor, {
        at: {
          anchor: Editor.start(editor, []),
          focus: Editor.end(editor, []),
        },
      });

      // Removes empty node
      Transforms.removeNodes(editor, {
        at: [0],
      });

      initialValue = newData ? objConvert : initialValue;

      // Insert array of children nodes
      Transforms.insertNodes(editor, initialValue);
    }
  }, [newData]);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  const editor = useMemo(
    () => withEmbeds(withImages(withHistory(withReact(createEditor())))),
    [],
  );

  return (
    <div className="RichText">
      <Slate
        editor={editor}
        value={initialValue}
        onChange={(value) => {
          const isAstChange = editor.operations.some(
            (op) => 'set_selection' !== op.type,
          );
          if (isAstChange) {
            // Save the value to Local Storage.
            const content = JSON.stringify(value);
            localStorage.setItem('content', content);
          }
        }}
      >
        <Toolbar>
          <MarkButton format="bold" icon="format_bold" />
          <MarkButton format="italic" icon="format_italic" />
          <MarkButton format="underline" icon="format_underlined" />
          <MarkButton format="code" icon="code" />
          <BlockButton format="heading-one" icon="looks_one" />
          <BlockButton format="heading-two" icon="looks_two" />
          <BlockButton format="block-quote" icon="format_quote" />
          <BlockButton format="numbered-list" icon="format_list_numbered" />
          <BlockButton format="bulleted-list" icon="format_list_bulleted" />
          <BlockButton format="left" icon="format_align_left" />
          <BlockButton format="center" icon="format_align_center" />
          <BlockButton format="right" icon="format_align_right" />
          <BlockButton format="justify" icon="format_align_justify" />
          <InsertImageButton />
          <InsertEmbedButton />
        </Toolbar>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Ingrese algun texto"
          spellCheck
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
          style={
            isNota && {
              height: '410px',
              maxWidth: '930px',
              overflow: 'auto',
              padding: '0 16px 0 0',
            }
          }
        />
      </Slate>
    </div>
  );
};

export default RichText;
