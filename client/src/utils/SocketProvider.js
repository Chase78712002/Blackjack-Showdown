import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:8080/';
export const socket = io.connect(ENDPOINT);
export const SocketContext = React.createContext();
