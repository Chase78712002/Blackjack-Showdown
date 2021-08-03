import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const ENDPOINT = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';
export const socket = io.connect(ENDPOINT);
export const SocketContext = React.createContext();
