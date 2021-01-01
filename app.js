/* Skriv din kod här */

/*
1- Skappa en mal som tar flag bilderna från URL.

2- Använda DISPLAY method for  kommet att visa flaga bolderna. 

3- Använda FETCH method for att hämta info från url. 

4-  Prototype method kan visa spesefik info som vi skapat. 

*/

// Conectig HTML to Dom

let name = document.querySelectorAll('h1');
let time = document.querySelectorAll('h3');
let img = document.querySelectorAll('img'); 
           
// console.log(name);
// console.log(time);
// console.log(img);


const url='https://restcountries.eu/rest/v2/all'; 



fetch(url).then(
    function(res){
        console.log(res.status);
        if (res.status===404){
            throw"NOT FOUND" ; 

        }else{
            return res.json();
        }
    }
).then(
    function(data){
        let countries =[]; // Skappa en tom array for att behllar lander

        for (let i = 0; i < 3; i++) {
           let random = Math.floor(Math.random()* data.length);
           //console.log(data[random]);            
           
           // skapa ett nytt objekt
           let country= new Country(data[random].name, data[random].flag, data[random].timezones[0]); 
           countries.push(country); 

           country.display(i);
        }

    }
)


// Konstruktor Country med 3 parameter Start


Country.prototype.display= function(index) {
    name[index].innerHTML = this.name;
    img[index].src = this.img;
    time[index].innerHTML = this.time();
}


//  Konstruktor Country 

function Country(_name, _img, _timezones){
    this.img = _img;
    this.name = _name;
    this.timezones=_timezones;

}


    // Prototype for tidzones

    Country.prototype.time = function () {
        let time = Date.now();
        console.log(this.timezones);
        let hoursString = this.timezones.substring(3, 3);
        let minutesString = this.timezones.substring(7, 9);
        // Räkna ut tiden

        return this.timezones;
        
    }
   