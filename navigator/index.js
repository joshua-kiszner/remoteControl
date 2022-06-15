import inquirer from 'inquirer';
import socketIOClient from 'socket.io-client';
const socket = socketIOClient(`http://localhost:${3001}`, {
    path: '/',
});
socket.on("connect", () => {
    console.log("Connected to server");

    inquirer
        .prompt([
            {
                type: 'number', name: 'altitude', message: 'Enter Altitude', validate: (value) => {
                    if (value >= 0 && value <= 3000) {
                        return true;
                    }
                    return "Please enter a number between 0 and 3000";
                }
            },
            {
                type: 'number', name: 'his', message: 'HIS', validate: (value) => {
                    if (value >= 0 && value <= 360) {
                        return true;
                    }
                    WriteStream.clearLine()
                    return "Please enter a number between 0 and 360";
                }
            },
            {
                type: 'number', name: 'adi', message: 'ADI', validate: (value) => {
                    if (value >= -100 && value <= 100) {
                        return true;
                    }
                    return "Please enter a number between -100 and 100";
                }
            }
        ])
        .then((coordinates) => {
            socket.emit("controller-event", coordinates);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log("Something else went wrong");
            }
        }
        )

});