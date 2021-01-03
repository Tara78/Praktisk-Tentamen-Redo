
/* Skriv din kod här */


// Conectig HTML to Dom

let name = document.querySelectorAll('h1');
let time = document.querySelectorAll('h3');
let img = document.querySelectorAll('img'); 
           
// console.log(name);
// console.log(time);
// console.log(img);


// Skappa en mal som tar flag bilderna från URL.


const url='https://restcountries.eu/rest/v2/all'; 

// Använda FETCH method for att hämta info från url. 

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
        let countries =[]; // Skappa en tom array for att behållar lander

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
// Använda DISPLAY method for kommet att visa flaga, name, lokal tid. 

Country.prototype.display= function(index) {
    name[index].innerHTML = this.name;
    img[index].src = this.img;
    time[index].innerHTML = this.time();
}

//  Konstruktor Country 
// Skapa en function med img, name, ocg tidzones! 

function Country(_name, _img, _timezones){
    this.img = _img;
    this.name = _name;
    this.timezones=_timezones;
}

// Prototype for tidzones
// Prototype method kan visa spesefik info som vi skapat. ocg returena till lokal tid! 

    Country.prototype.time = function () {
        let date = new Date;      
        let hoursString = date.getUTCHours(); 
        let minutesString = date.getMinutes();
     
        let time;
        time=Number((this.timezones).substr(3,3))
        let countryHours= (`${time+hoursString}:${minutesString}`)
        return countryHours; 
     
    }
