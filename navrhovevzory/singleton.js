// Singleton – jen jeden uživatel
class User {
    constructor(name) {
        if (User.instance) return User.instance; // vrátíme už existujícího
        this.name = name;
        User.instance = this; // uložíme instanci
    }
}

// Ukázka:
const u1 = new User("Petr");
const u2 = new User("Karel");

console.log(u1.name); // Petr
console.log(u2.name); // Petr (protože instance už existuje)
