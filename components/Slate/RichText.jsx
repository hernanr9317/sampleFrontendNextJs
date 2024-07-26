import React, {
  useCallback,
  useEffect,
  useMemo,
  useContext,
  useState,
} from 'react';
import {useRouter} from 'next/router';
import isHotkey from 'is-hotkey';
import {Editable, withReact, Slate} from 'slate-react';
import {
  Editor,
  Transforms,
  createEditor,
  Element as ElementSlate,
  Range,
  Node,
} from 'slate';
import {withHistory} from 'slate-history';
import {Toolbar} from './components';
import {Element, Leaf} from './_children/Element';
import Hotkeys from './utils/hotkeys';
import {
  AddLinkButton,
  BlockButton,
  MarkButton,
  RemoveLinkButton,
} from './_children/Buttons';
import {InsertImageButton, withImages} from './_children/WithImages';
import {InsertEmbedButton, withEmbeds} from './_children/WithEmbeds';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

const RichText = ({newData, isNota}) => {
  if (!isNota) return null;

  let initialValue = [
    {
      type: 'paragraph',
      children: [{text: ''}],
    },
  ];

  const router = useRouter();
  const [description, setDescription] = useState(undefined);

  const {products, categories} = useContext(ChangeDataContext);

  const checkIsValidJson = (str) => {
    return str?.startsWith('[{');
  };

  useEffect(() => {
    if (router.isReady) {
      if (isNota === 'category') {
        setDescription(newData);
      }
      if (isNota !== 'category' && router.query.id) {
        const product = products?.productos?.find(
          (product) => product._id === router.query.id,
        );
        setDescription(product?.description);
      }
    }
  }, [router]);

  const jsonText = description;

  const objConvert =
    checkIsValidJson(description) && jsonText
      ? JSON.parse(jsonText)
      : undefined;

  useEffect(() => {
    if (editor?.children?.length > 0) {
      Transforms.delete(editor, {
        at: {
          anchor: Editor.start(editor, []),
          focus: Editor.end(editor, []),
        },
      });

      Transforms.removeNodes(editor, {
        at: [0],
      });

      initialValue = description ? objConvert : initialValue;

      Transforms.insertNodes(editor, initialValue);
    }
  }, [description]);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  const inlineTypes = ['link'];

  const useEditor = () => {
    const editor = useMemo(
      () => withEmbeds(withImages(withHistory(withReact(createEditor())))),
      [],
    );
    const {isInline} = editor;
    editor.isInline = (el) => {
      return (
        (ElementSlate.isElement(el) && inlineTypes.includes(el.type)) ||
        isInline(el)
      );
    };
    return editor;
  };

  const editor = useEditor();

  function getDirection(text) {}

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
          <AddLinkButton />
          <RemoveLinkButton />
        </Toolbar>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Ingrese algún texto"
          spellCheck
          onKeyDown={(event) => {
            const {nativeEvent} = event;
            const {selection} = editor;
            const element =
              editor.children[selection !== null ? selection.focus.path[0] : 0];
            const isRTL = getDirection(Node.string(element)) === 'rtl';

            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }

              if (Hotkeys.isMoveBackward(nativeEvent)) {
                event.preventDefault();
                if (selection && Range.isCollapsed(selection)) {
                  Transforms.move(editor, {reverse: !isRTL});
                } else {
                  Transforms.collapse(editor, {edge: 'start'});
                }
                return;
              }

              if (Hotkeys.isMoveForward(nativeEvent)) {
                event.preventDefault();
                if (selection && Range.isCollapsed(selection)) {
                  Transforms.move(editor, {reverse: isRTL});
                } else {
                  Transforms.collapse(editor, {edge: 'end'});
                }
                return;
              }
            }
          }}
          style={
            isNota === true && {
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
