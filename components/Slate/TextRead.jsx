import React, {useCallback, useMemo} from 'react';
import {Editable, withReact, Slate} from 'slate-react';
import {createEditor} from 'slate';
import {withHistory} from 'slate-history';
import {Element, Leaf} from './_children/Element';
import {withImages} from './_children/WithImages';

const ReadOnlyText = (props) => {
  let initialValue = [props];

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  const editor = useMemo(
    () => withImages(withHistory(withReact(createEditor()))),
    [],
  );

  return (
    <div className="RichText">
      <Slate editor={editor} value={initialValue}>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          readOnly
        />
      </Slate>
    </div>
  );
};

export default ReadOnlyText;
