import React, { useState, createContext } from 'react';
import { v4 as generateId } from 'uuid';
import { MessageTypes } from '../types/messageTypes';

interface IMessageProvider {
  messages: MessageTypes[];
  addMessage: ({ status, text }: Omit<MessageTypes, 'id'>) => void;
  removeMessage: (id: string) => void;
}

export const MessageContext = createContext({} as IMessageProvider);

export const MessageProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<MessageTypes[]>([]);

  const removeMessage = (id: string) => {
    const updatedMessages = messages
      .filter(message => message.id !== id)
      .map(message => message);

    setMessages(updatedMessages);
  };

  const addMessage = ({ status, text }: Omit<MessageTypes, 'id'>) => {
    const message = {
      id: generateId(),
      status,
      text,
    } as MessageTypes;

    setMessages(oldState => [...oldState, message]);
  };

  return (
    <MessageContext.Provider
      value={{
        messages,
        addMessage,
        removeMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
