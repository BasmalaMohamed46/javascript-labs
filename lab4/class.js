class PersonClass 
{
    constructor(fullName, money, sleepMood, healthRate) 
    {
      this.fullName = fullName;
      this.money = money;
      this.sleepMood = sleepMood;
      this.healthRate = healthRate;
    }
  
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
    }
  
    eat(meals) 
    {
        switch(meals)
        {
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
    }
  
    buy(items) 
    {
      this.money -= items * 10;
    }
}

const person2 = new PersonClass("Basmala", 50, "tired", 50);
person2.sleep(9);
person2.eat(3);
person2.buy(2);
console.log(person2);

  