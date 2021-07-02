import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

import { MessageTypes } from '../../types/messageTypes';

import * as S from './styles';

interface MessageToast extends Omit<MessageTypes, 'id'> {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const MessageToast: React.FC<MessageToast> = ({
  onClick,
  status,
  text = '',
}) => {
  const getStatusIcon = () => {
    if (!!status && status === 'error') {
      return <FiAlertCircle size={24} data-testid="error-icon" />;
    }

    if (!!status && status === 'success') {
      return <FiCheckCircle size={24} data-testid="success-icon" />;
    }

    return '';
  };

  return (
    <S.Container status={status}>
      <div>
        {status && getStatusIcon()}
        <p>{text}</p>
      </div>

      <button onClick={onClick} type="button">
        <IoMdClose size={28} />
      </button>
    </S.Container>
  );
};

export default MessageToast;
