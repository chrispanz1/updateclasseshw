
//code here//
class Hamster{
    owner='';
    name='robert'
    price=15;
   

    constructor(owner,name,price){
        this.owner=owner;
        this.name=name;
        this.price=price;
    }
    wheelRun(){
        console.log("squeak" ,'squeak');
    }
    eatFood(){
        console.log('nibble','nibble')
    }
    getPrice(){
        return this.price;
    }

    }
    //below I am making an instance of the hamster class//
    
let myHamster= new Hamster('john','pete',17);
console.log(myHamster);
myHamster.eatFood();
//--------------------------------------------------------------------------------------------------------------------------------------------------//

class Person{
    name='';
    age=0;
    height=0;
    weight=0;
    mood=0;
    hamsters="";
    bankAccount=0;
    constructor(name,age,height,weight,mood,hamsters,bankAccount){
        this.name=name;
        this.age=age;
        this.height=height;
        this.weight=weight;
        this.mood=mood;
        this.hamsters=hamsters;
        this.bankAccount=bankAccount;
    }
    

   
getName(){
    return this.name
}

getAge(){
    return this.age
}
getWeight(){
    return this.weight
}
greet(){
    console.log(this.name)
}
eat(){
    this.weight=this.weight+1;
    this.mood=this.mood+1;
}
exercise(){
    this.weight--;
}
ageUp(){
    this.age++;
    this.weight++
    this.mood--
    this.bankAccount+=10;
}
buyHamster(){
    this.mood=this.mood+10;
    this.bankAccount=this.bankAccount-(Hamster.price)
}
      

}
var person = new Person('timmy',10,5,100,10,0,25 );
console.log(person)
//ok cool now lets throw the ageUp method into a for loop//
for (let i = 1; i <=5; i++) {
  person.ageUp();
}
console.log(person)

for(let j=1;j<=5;j++){
  person.eat();
}
console.log(person)

for(let p=1; p<=5;p++){
  person.exercise();
}
console.log(person)
for (let z = 1; z <=9; z++) {
  person.ageUp();
}
console.log(person)
//the last iteration asks to age timmy by 9//

  //---------------------------------------------------------//
let gus= new Hamster('timmy','gus',10);
//ok so now we have made a new instance//
person.buyHamster()
console.log(person)
//this part works but gives a Nan??, this last part we call the methods twice each//
person.eat()
person.eat()

person.exercise()
person.exercise()

//complete last part!//
let newArray=[""]
class Dinner {
    appetizer='';
    entree='steak'
    dessert=cake;
    constructor(appetizer,entree,dessert){
        this.appetizer=appetizer;
        this.entree=entree
        this.dessert=dessert
    }
}
class Chef {

    createNewDInner(appetizer,entree,dessert){
        newArray.push(appetizer);
        newArray.push(entree);
        newArray.push(dessert);
    }
    showDinner(){
        console.log(createNewDinner("nachos","burger","pie"))
        console.log(createNewDinner("pretzel","pasta","fruit"))
        console.log(createNewDinner("salad","pizza","brownies"))

    }


    }
    showDinner();


    
    







