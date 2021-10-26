/* MAINSTONE 1:
    Mandare a schermo tutti gli oggetti appartenenti ad icons in forma di icone come segnalato esternamente.
*/

/* MAINSTONE 2:
    Coloriamo le icone per tipo.
*/

// Array di icone:

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

// Struttura per ogni oggetto (es.):
/*
    name: 'cat',
	prefix: 'fa-',
	type: 'animal',
	family: 'fas'
*/


/* Utilizziamo un ciclo foreach per creare una card per ogni icon;
    La card sarà strutturata utilizzando i valori di alcune proprietà relative ad ogni icon;
*/

// Mainston 2: aggiungiamo il valore relativo ad icon.type per sfruttarlo come selettore rapido.

icons.forEach(icon => {
    
    console.log(icon)

    let card = `
        <div class="card">
            <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.type}"></i>
            <h5>${icon.name}</h5>
        </div>
    `
    
    console.log(card);
    
    //Mandiamo a schermo;
    document.querySelector(".container").insertAdjacentHTML("beforeend", card);
        
})