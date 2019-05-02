//3 object literal with method function
var peppa1 = 
        {
            name:'Peppa Pig',
            age:'4',
            image:'images/peppapig.png',
            price:15,
            total: function() {
               return this.price * 0.09;
            }
          
        
        };
var peppa2 =
        {
            name:'Pappa Pig',
            age:'5',
            image:'images/pappapig.jpg',
            price:7,
            total: function() {
                return this.price * 0.09;
            }
        
        };
var peppa3 =
        {
            name:'Georgie',
            age:'3',
            image:'images/georgie.jpg',
            price:5,
            total: function() {
               return this.price * 0.09;
            }
           
        };

console.log(peppa1, peppa2, peppa3);

//object constructor function with  the object Pig
function Pig(name, age, image, price) {
    this.name = name;
    this.age = age;
    this.image = image;
    this.price = price;
    this.total = function() {
               return this.price * 0.09;
            };
};

// 3 Pig objects 
var pep1 = new Pig('Peppa Pig', 4, 'images/peppapig.png', 15);
var pep2 = new Pig('Pappa Pig', 5, 'images/pappapig.jpg', 7);
var pep3 = new Pig('Georgie', 3, 'images/georgie.jpg', 5);

console.log(pep1, pep2, pep3);

var pepArray = [pep1, pep2, pep3];

for(var i =0; i < pepArray.length; i++) {
    
    var newDiv = document.createElement('div');
    var newImg = document.createElement('img');
    var newH1 = document.createElement('h1');
    var newH2 = document.createElement('h2');
    var newP = document.createElement('p');
    var newSpan = document.createElement('span');
    
    newDiv.className = 'border';
    console.log(newDiv, newImg, newH1, newH2, newP, newSpan);
    
    
    var newH1Text = document.createTextNode(pepArray[i].name);
    var newH2Text = document.createTextNode('You are ' + pepArray[i].age + ' years old');
    var newPText = document.createTextNode('price: ' + pepArray[i].price);
    var newSpanText = document.createTextNode('sales tax: ' + pepArray[i].total());
    
    console.log(newH1Text, newH2Text, newPText, newSpan);
    
    newH1.appendChild(newH1Text);
    newH2.appendChild(newH2Text);
    newP.appendChild(newPText);
    newSpan.appendChild(newSpanText);
    
    newImg.src = pepArray[i].image;
    newImg.alt = pepArray[i].age + ' ' + pepArray[i].name;
    
    newDiv.appendChild(newImg);
    newDiv.appendChild(newH1);
    newDiv.appendChild(newH2);
    newDiv.appendChild(newP);
    newDiv.appendChild(newSpan);
    
    document.getElementById('display').appendChild(newDiv);
}
    
    
