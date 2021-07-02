import Message from '../MessageToast';

import { useMessage } from '../../hooks';

import * as S from './styles';

export const MessagesContainer: React.FC = () => {
  const { messages, removeMessage } = useMessage();

  return (
    <S.Container>
      {messages?.map(message => (
        <Message
          key={message.id}
          onClick={() => removeMessage(message.id)}
          status={message.status}
          text={message.text}
        />
      ))}
    </S.Container>
  );
};
