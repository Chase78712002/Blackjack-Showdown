import React from 'react';
import io from 'socket.io-client';

const ENDPOINT =
  process.env.REACT_APP_API_BASE_URL ||
  'https://blackjack-showdown.herokuapp.com/';
export const socket = io.connect(ENDPOINT);
export const SocketContext = React.createContext();
