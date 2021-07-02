import { ClipLoader } from 'react-spinners';
import Portal from '../Portal';

import * as S from './styles';

const Spinner: React.FC = () => {
  return (
    <Portal>
      <S.Container>
        <div className="Loading__spinner" data-testid="loading-spinner">
          <ClipLoader />
        </div>
      </S.Container>
    </Portal>
  );
};

export default Spinner;
