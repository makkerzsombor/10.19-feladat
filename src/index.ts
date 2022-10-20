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

document.addEventListener('DOMContentLoaded', () => {
    // Football
    document.getElementById('fHozzaad')?.addEventListener('click',() => {
        let csapat = ((document.getElementById('fNev') as HTMLInputElement).value);
        let idoPont = ((document.getElementById('fIdo') as HTMLInputElement).value);
        let cs1 = ((document.getElementById('f1G') as HTMLInputElement).value);
        let cs2 = ((document.getElementById('f2G') as HTMLInputElement).value);
        meccsek.push(new Football(csapat, new Date(idoPont), parseInt(cs1), parseInt(cs2)));  
        for (let i = 0; i < meccsek.length; i++) {
            console.log(meccsek[i].result());    
        }      
    })
    // Marathon
    document.getElementById('mHozzaad')?.addEventListener('click',() => {
        let nev = ((document.getElementById('mNev') as HTMLInputElement).value);
        let idoPont = ((document.getElementById('mIdo') as HTMLInputElement).value);
        let ideje = ((document.getElementById('mIdeje') as HTMLInputElement).value);
        meccsek.push(new Marathon(nev, new Date(idoPont), parseInt(ideje)));  
        for (let i = 0; i < meccsek.length; i++) {
            console.log(meccsek[i].result());    
        }    
    })
    // Calvin
    document.getElementById('cHozzaad')?.addEventListener('click',() => {
        let nev = ((document.getElementById('CH') as HTMLInputElement).value);
        let idoPont = ((document.getElementById('cIdo') as HTMLInputElement).value);
        meccsek.push(new Calvinball(nev, new Date(idoPont)));  
        for (let i = 0; i < meccsek.length; i++) {
            console.log(meccsek[i].result());    
        }  
    })
});