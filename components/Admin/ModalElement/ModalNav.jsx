import {useRouter} from 'next/router';

export const ModalNav = () => {
  const router = useRouter();

  const onClick = (type) => {
    router.push({
      pathname: router.pathname,
      query: {modal: type},
    });
  };

  return (
    <ul className="modal-navigation">
      <li>
        <a onClick={() => onClick('media')}>Media principal</a>
      </li>
      <li>
        <a onClick={() => onClick('write')}>Redactar</a>
      </li>
    </ul>
  );
};
