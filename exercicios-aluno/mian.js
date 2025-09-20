let peso = 0;
let pesototal = 0;

for(let num = 1; num < 11; num += 1) {
    peso = prompt('insira o peso da pessoa numero ' + num);
    pesototal = pesototal + Number(peso);

}
let media = pesototal / 10; // calcule de media

console.log('✅')
