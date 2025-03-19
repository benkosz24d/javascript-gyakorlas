// arra of <number>
var szamok = [2, 4, 13, 4, 6, 42];

var paroskaSzama = 0;

paroskaSzama += szamok[0] % 2 === 0? 1 : 0;
paroskaSzama += szamok[1] % 2 === 0? 1 : 0; 
paroskaSzama += szamok[2] % 2 === 0? 1 : 0;
paroskaSzama += szamok[3] % 2 === 0? 1 : 0;
paroskaSzama += szamok[4] % 2 === 0? 1 : 0;
paroskaSzama += szamok[5] % 2 === 0? 1 : 0;


console.log(paroskaSzama);

var index = 0;
while(index < 6) {
     console.log(index);
    index++;
}