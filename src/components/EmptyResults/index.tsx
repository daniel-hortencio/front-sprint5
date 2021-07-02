import { MdInfo } from 'react-icons/md';

import * as S from './styles';

interface EmptyResultsProps {
  text: string;
}

const EmptyResults: React.FC<EmptyResultsProps> = ({ text }) => {
  return (
    <S.Container>
      <MdInfo size={24} />
      <p>{text}</p>
    </S.Container>
  );
};

export default EmptyResults;
