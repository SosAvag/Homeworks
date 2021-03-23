class Animal {

    constructor(name,age) {
      this.name = name;
      this.age = age
    }
  
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed} km/h`);
    }
   }
  
  class Dog extends Animal {
    jump(meters) {
        this.meters=meters;
      console.log(`${this.name} jumps ${meters} hight!`);
    }
  }

  class Cat extends Animal {
    sleep(hours) {
        this.hours=hours;
      console.log(`${this.name} sleeps ${hours} in a day!`);
    }
  }
  
  let graf = new Dog("Graf", 8);
  let max = new Cat('Max',6);

  console.log(graf);
  console.log(max);
  console.log(graf.run(25));
  console.log(graf.jump(3));
  console.log(max.run(18));
  console.log(max.sleep(16));