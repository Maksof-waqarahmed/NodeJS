function User(name, age, city, description) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.description = description;
}
const user1 = new User("Waqar" , 22, "Karachi" , "Developer");
const user2 = new User("Ahmed" , 22, "lahore" , "FullStack Developer");
module.exports = [user1, user2];