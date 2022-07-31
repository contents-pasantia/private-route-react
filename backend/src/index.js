import Server from "./server.js";

function main() {
    const server = new Server(3001);
    server.start();
}

main();

