var peppaPig = 
        {
            name:'Peppa Pig',
            age:'4',
            image:'images/peppapig.jpg',
            price:15,
          
        
        };
var pappaPig =
        {
            name:'Pappa Pig',
            age:'5',
            image:'images/pappapig.jpg',
            price:7,
        
        };
var georgie =
        {
            name:'Georgie',
            age:'3',
            image:'images/georgie.jpg',
            price:5,
           
        };

function pig(name, age, image, price) {
    this.name = name;
    this.age = age;
    this.image = image;
    this.price = price;
};

console.log(pig);