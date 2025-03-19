// arra of <number>
var szamok = [2, 4, 13, 4, 6, 42, 3];

var paroskaSzama = 0;

paroskaSzama += szamok[0] % 2 === 0? 1 : 0;
paroskaSzama += szamok[1] % 2 === 0? 1 : 0; 
paroskaSzama += szamok[2] % 2 === 0? 1 : 0;
paroskaSzama += szamok[3] % 2 === 0? 1 : 0;
paroskaSzama += szamok[4] % 2 === 0? 1 : 0;
paroskaSzama += szamok[5] % 2 === 0? 1 : 0;


console.log(paroskaSzama);

var index = 0;
var paratlanokSzama = 0;
while(index < szamok.length) {
    
    index++;
}
//console.log(paratlanokSzama);


// for loop
var paratlanokSzama2 = 0;
for(var i=0; i< szamok.length; i++) {
    //console.log(i);
    //console.log(szamok[i]);
    //console.log('------- ');
    paratlanokSzama += szamok[i] % 2 === 0 ? 1 :  0;
}

console.log(paratlanokSzama2);

//for - of

for(var szam of szamok)




 


