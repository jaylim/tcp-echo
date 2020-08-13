const net  = require('net');
let server = net.createServer((socket) => {
    let addr = socket.remoteAddress;
    let port = socket.remotePort;
    socket.write('Echo server\r\n');
    socket.pipe(socket);

    console.log(`New connection from ${addr}:${port}`);

    socket.on('close', () => {
        console.log(`Connect close from ${addr}:${port}`);
    });
});

server.listen(1337, '127.0.0.1');
