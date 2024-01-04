const personOLOO = 
{
    init(fullName, money, sleepMood, healthRate) 
    {
      this.fullName = fullName;
      this.money = money;
      this.sleepMood = sleepMood;
      this.healthRate = healthRate;
      return this;
    },
  
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
  
  const person3 = Object.create(personOLOO).init("Basmala", 50, "tired", 50);

  person3.sleep(7);
  person3.eat(2);
  person3.buy(3);
  console.log(person3);

  