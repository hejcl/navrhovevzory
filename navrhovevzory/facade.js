// Facade – jednoduché ovládání složitého systému
class Console {
    start(game) {
        console.log("Zapínám zvuk, grafiku, hru: " + game);
    }
    stop() {
        console.log("Vypínám vše");
    }
}

// Ukázka:
const ps5 = new Console();
ps5.start("FIFA"); // Zapínám zvuk, grafiku, hru: FIFA
ps5.stop();        // Vypínám vše
