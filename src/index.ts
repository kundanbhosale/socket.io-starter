import { createServer } from 'http'
import { Server } from 'socket.io'

const startServer = async () => {
    const httpServer = createServer()
    const io = new Server(httpServer, {
        // options
    })

    io.on('connection', (socket) => {
        console.log('A user connected')

        socket.on('disconnect', () => {
            console.log('A user disconnected')
        })

        socket.on('message', (message) => {
            console.log('Received message:', message)
            io.emit('message', message)
        })
    })

    httpServer.listen(3001, () => {
        console.log('Server started on port 3001')
    })
}
startServer()
