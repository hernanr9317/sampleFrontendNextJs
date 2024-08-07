import {css} from '@emotion/css';
import {extractURLFromText} from '../../helpers/helpers';
import {useSelected} from 'slate-react';

const Image = ({attributes, children, element}) => {
  return (
    <div {...attributes}>
      {children}
      <div
        contentEditable={false}
        className={css`
          display: flex;
          max-width: 930px !important;
          max-height: 100% !important;
          margin: 0 auto 16px auto !important;
        `}
      >
        <img
          src={element.url}
          className={css`
            width: 100% !important;
            max-height: 100% !important;
          `}
        />
      </div>
    </div>
  );
};

const VideoElement = ({attributes, children, element}) => {
  let {url} = element;
  url = extractURLFromText(url);

  if (!url) return null;

  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <div
          className={css`
            aspect-ratio: 16 / 9;
            display: flex;
            max-width: 930px !important;
            max-height: 100% !important;
            margin: 0 auto 16px auto !important;
          `}
        >
          <iframe
            src={url}
            title="Video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {children}
    </div>
  );
};

const InlineChromiumBugfix = () => (
  <span
    contentEditable={false}
    className={css`
      font-size: 0;
    `}
  >
    {String.fromCodePoint(160) /* Non-breaking space */}
  </span>
);

const LinkComponent = ({attributes, children, element}) => {
  const selected = useSelected();
  const url = element?.url?.startsWith('https://')
    ? element?.url
    : `https://${element?.url}`;
  return (
    <a
      {...attributes}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        selected
          ? css`
              box-shadow: 0 0 0 1px #ddd;
            `
          : ''
      }
    >
      <InlineChromiumBugfix />
      {children}
      <InlineChromiumBugfix />
    </a>
  );
};

export const Element = ({attributes, children, element}) => {
  let style = {textAlign: element.align};
  const props = {attributes, children, element};
  switch (element.type) {
    case 'image':
      return <Image {...props} />;
    case 'embed':
      return <VideoElement {...props} />;
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    case 'link':
      return <LinkComponent {...props} />;
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

export const Leaf = ({attributes, children, leaf}) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return (
    <span {...attributes} style={{paddingRight: '0.001em'}}>
      {children}
    </span>
  );
};
