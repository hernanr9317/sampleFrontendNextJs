import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  XIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

export const SocialLinks = ({url}) => {
  return (
    <div className="social-links">
      <FacebookShareButton url={url} className="network__share-button">
        <FacebookIcon
          className="social-icon"
          bgStyle={{fill: 'grey'}}
          iconFillColor={'white'}
          size={32}
          round
        />
      </FacebookShareButton>
      <TwitterShareButton url={url} className="network__share-button">
        <XIcon
          className="social-icon"
          bgStyle={{fill: 'grey'}}
          iconFillColor={'white'}
          size={32}
          round
        />
      </TwitterShareButton>
      <TelegramShareButton url={url} className="network__share-button">
        <TelegramIcon
          className="social-icon"
          bgStyle={{fill: 'grey'}}
          iconFillColor={'white'}
          size={32}
          round
        />
      </TelegramShareButton>
      <WhatsappShareButton
        url={url}
        separator=":: "
        className="network__share-button"
      >
        <WhatsappIcon
          className="social-icon"
          bgStyle={{fill: 'grey'}}
          iconFillColor={'white'}
          size={32}
          round
        />
      </WhatsappShareButton>
      <EmailShareButton url={url} body="body" className="network__share-button">
        <EmailIcon className="social-icon" size={32} round />
      </EmailShareButton>
    </div>
  );
};
