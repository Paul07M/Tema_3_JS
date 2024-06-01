// EX.1: Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

//Ar trebui să aibă proprietăți pentru titlu (un șir de caractere), porții (un număr) și ingrediente (o șir de elemente - array). Va fi afișată pe rânduri separate (o instrucțiune console.log pentru fiecare) toate informațiile obiectului după crearea acestuia.

//Exemplu 1:

//Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]

//Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }


function recipeComponents(title, category, portion, ingredients) {
    const recipe = {
        title: title,
        category: category,
        portion: portion,
        ingredients: ingredients,
    };

    console.log("Title: " + recipe.title);
    console.log("Category: " + recipe.category);
    console.log("Portion: " + recipe.portion);
    console.log("Ingredients : ");
    recipe.ingredients.forEach(ingredients => {
        console.log(` - ` + ingredients);
    });

    return recipe;
}

const crepeRecipe = recipeComponents('Clatite clasice frantuzesti', 'Desert', 20, [`500 ml lapte`, `280 g faina`, `100 ml apa minerala`, `50 g unt`, `6 oua`, `1 lingurita esenta de vanilie`, `1 praf sare`]);

