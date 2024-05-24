// Exercitiu 2: Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

//Funcția primește 2 parametri ca date de intrare. Unul dintre parametri este obiectul, iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.

//Exemplu 1:

//Input: obiect = { a: 1, b: 2 }, proprietate = “b”

//Output: { a: 1 }


function removeProperties(car, model) {

    const newcar = { ...car };

    model.forEach(model => {

        delete newcar[model];

    });

    return newcar;

}

const car = {
    marke: 'Porsche',
    model: [911, 'Carrera'],
    year: 1998,
}

const propertieToRemove = [`model`];

const resultCar = removeProperties(car, propertieToRemove);

console.log(resultCar);

