function personFactory(fullName, money, sleepMood, healthRate) {
    return {
      fullName,
      money,
      sleepMood,
      healthRate,
  
      sleep(hours) 
      {
        if (hours === 7) 
        {
          this.sleepMood = "happy";
        } 
        else if (hours < 7) 
        {
          this.sleepMood = "tired";
        } 
        else 
        {
          this.sleepMood = "lazy";
        }
      },
  
      eat(meals) 
      {
        switch (meals) {
          case 3:
            this.healthRate = 100;
            break;
          case 2:
            this.healthRate = 75;
            break;
          case 1:
            this.healthRate = 50;
            break;
          default:
            console.error("Invalid number of meals");
        }
      },
  
      buy(items) 
      {
        this.money -= items * 10;
      },
    };
  }
  
const person4 = personFactory("Basmala", 50, "tired", 50);
person4.sleep(7);
person4.eat(1);
person4.buy(4);
console.log(person4);
  