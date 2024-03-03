import WebSocket from 'ws';

// Export the WebSocket server
export const wss = new WebSocket.Server({ port: 8081 });

// Handle incoming connections
wss.on('connection', function connection(ws) {
    console.log('Cliente conectado');

    // Handle incoming messages from the client
    ws.on('message', function incoming(message) {
        console.log('Mensaje recibido del cliente:', message);
    });
});

// Export the function to send messages to connected clients
export function sendMessageToClients(message: any) {
   // console.log('Enviando mensaje a los clientes:', message);
    const jsonMessage = JSON.stringify(message);

    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            //console.log('Enviando mensaje al cliente:', jsonMessage);
            client.send(jsonMessage);
        }
    });
}