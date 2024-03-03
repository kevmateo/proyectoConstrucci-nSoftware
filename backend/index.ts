import app from './src/app';
import { wss } from './src/websocket';

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server listening on port 3000');
});

wss