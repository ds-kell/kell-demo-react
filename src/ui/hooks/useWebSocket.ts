import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

const useWebSocket = () => {
    const [stompClient, setStompClient] = useState<Client | null>(null);
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        const socket = new SockJS('http://localhost:8088/ws');
        const stompClient = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        });

        stompClient.onConnect = (frame) => {
            console.log('Connected: ' + frame);

            stompClient.subscribe('/topic/response', (message) => {
                setMessages((prevMessages) => [...prevMessages, message.body]);
            });
        };

        stompClient.activate();
        setStompClient(stompClient);

        return () => {
            if (stompClient.active) {
                stompClient.deactivate();
                console.log('Disconnected from WebSocket');
            }
        };
    }, []);

    const sendMessage = (msg: string) => {
        if (stompClient && stompClient.connected) {
            stompClient.publish({
                destination: '/app/message',
                body: msg,
            });
        }
    };

    return { messages, sendMessage };
};

export default useWebSocket;
