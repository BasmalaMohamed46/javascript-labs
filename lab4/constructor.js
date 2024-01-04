function PersonConstructor(fullName, money, sleepMood, healthRate) 
{
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
}
  
  PersonConstructor.prototype.sleep = function (hours) 
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
  };
  
  PersonConstructor.prototype.eat = function (meals) 
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
  };
  
  PersonConstructor.prototype.buy = function (items) 
  {
    this.money -= items * 10;
  };
  

const person = new PersonConstructor("Basmala", 50, "tired", 50);
person.sleep(9);
person.eat(2);
person.buy(2);
console.log(person);