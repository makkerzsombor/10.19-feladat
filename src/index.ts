import { Calvinball } from "./Calvinball";
import { Football } from "./Football";
import { Marathon } from "./Marathon";
import { Results } from "./Results";


let meccsek: Results[] = [
    new Football('Manchester', new Date(2002, 10, 2), 4, 2),
    new Football('Barcelona', new Date(1996, 6, 14), 1, 6),
    new Marathon('urusei yatsura', new Date(1978, 9, 24), 245),
    new Marathon('Jormungand', new Date(2012, 4, 11), 186),
    new Calvinball('Calvin', new Date(2022, 10, 19)),
    new Calvinball('Hobbes', new Date(2020, 8, 30)),
];

for (let i = 0; i < meccsek.length; i++) {
    console.log(meccsek[i].result());    
}

console.log();
console.log('Csak Calvin nyert:');
for (let i = 0; i < meccsek.length; i++) {
    if (meccsek[i].winner == 'Calvin') {
        console.log(meccsek[i].result());
    }
}

console.log()
console.log('Rendezett:')
meccsek.sort((a, b) => {return a.date.getTime() - b.date.getTime()})
for (let i = 0; i < meccsek.length; i++) {
    console.log(meccsek[i].result());    
}

