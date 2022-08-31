<template>
    <div class="form">
        <section class="main">
            <div class="main__gauge">
                <div class="main__choice">
                    <img class="logo-heal" src="../assets/Healty-logo.png" alt="logo healthy">
                    <img src="../assets/Hard-logo.png" alt="logo hard">
                </div>
                
                <img src="../assets/Bouton-gris.png" alt="boutton de jauge healthy ou hard">
            </div>
            <article class="main__form">
                <h2 class="title-form">Formulaire:</h2>
                <form action="post" method="post" class="main__add-recipe">
                    <label>
                        <span>Titre de recette:</span><br/>
                        <input type="text" id="title-recipe" name="title-recipe" placeholder="Lasagne au épinard..." required>
                    </label>
                    <label>
                        <span>Catégorie:</span><br />
                        <input type="radio" id="entree" class="category" name="category" value="entree">
                        <label for="entree" id="entree-label">Entrée</label>

                        <input type="radio" id="dish" class="category" name="category" value="plat">
                        <label for="dish" id="dish-label">Plat</label>

                        <input type="radio" id="dessert" class="category" name="category" value="dessert">
                        <label for="dessert" id="dessert-label">Dessert</label>
                    </label>
                    
                    
                    <label for="preparation-time">
                        <span >Temps de préparation: </span>
                        <input type="number" id="preparation-time" name="preparation-time" min="1" max="300" placeholder="30">
                        <span>min</span>
                    </label>
                    <label for="cost-recipe">
                        <span>Côut: </span> 
                        <input type="number" id="cost" name="cost" min="1" max="200" placeholder="25">
                        <span>€</span>
                    </label>
                    <label for="calories-recipe" class="kcal">
                        <span>Calories: </span> 
                        <input type="number" id="calories-recipe" name="calories-recipe" min="0" max="2000" placeholder="500">
                        <span>Kcal</span>
                    </label>
                    <label for="description">Description :</label>
                    <textarea id="description" name="description" placeholder="Ingrédient..."></textarea>
                    <label for="recipe-step">Etapes :</label>
                    <textarea 
                        id="recipe-step" 
                        name="recipe-step" 
                        placeholder="1.couper
    2.saler
    3.cuir
    4.Manger">
                    </textarea>

                    <label for="photo-upload">Image</label>
                    <input type="file" @change="loadFile(input, 'photo-preview')" id="photo-upload" name="photo-upload" accept="image/*">
                    <img id="photo-preview" src="../assets/photo.png">

                    <button type="submit" class="submit" @click="sendForm">Envoyer</button>
                </form>
            </article>
        </section>
       
    </div>
</template>

<script>
export default {
    

  data() {
    return {
        addRecipe : {
            title: "",
            category: "",
            preparationTime: "",
            costRecipe: "",
            caloriesRecipe: "",
            description:"",
            photoRecipe:""
        }
    };
  },
  methods: {

    loadFile(input, target) {
        let file = input.files[0];
        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function () {
            let img = document.getElementById(target);
            // can also use "this.result"
            img.src = reader.result;
        }
    },

    sendAddRecipe() {
        this.addRecipe.title = document.querySelector("#title-recipe").value;
        this.addRecipe.category = document.querySelector("radio").value;
        this.addRecipe.preparationTime = document.querySelector("#preparation-time").value;
        this.addRecipe.costRecipe = document.querySelector("#cost-recipe").value;
        this.addRecipe.caloriesRecipe = document.querySelector("#calories-recipe").value;
        this.addRecipe.description = document.querySelector("#description").value;
        this.addRecipe.recipeStep = document.querySelector("#recipe-step").value;
        this.addRecipe.photoUploads = document.querySelector("#photo-upload").value;
    }
  }
}
</script>

<style lang="scss">


.logo-heal {
    position: relative;
    right: 20px;
}

        // FORM //

.main {
    &__add-recipe {
        font-family: 'Rubik', sans-serif; 
        margin: auto;
        width: 90%;
        padding: 15px;
        border-radius: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        background-color: #F1F1F1;

        label {
            margin-top: 20px;
        }
    }
}

#title-recipe {
    width: 284px;
}

*::placeholder {
   text-align: center; 
}

.title-form {
    font-family: 'Inspiration', cursive;
    font-size: 64px;
}

input {
    border-radius: 5px;
}

input {
    border: none;
}

input, span {
    margin-right: 4px;
}

.submit {
    font-family: 'Rubik', sans-serif;
    font-size: 24px;
    margin: auto;
    margin-top: 30px;
    width: 145px;
    height: 38px;
    border: none;
    border-radius: 25px;
    box-shadow: 3px 5px 5px rgb(136, 136, 136);
    background: rgb(255,0,0);
    background: linear-gradient(0deg, rgba(255,0,0,0.5043290043290043) 0%, rgba(33,122,255,0.5) 100%);

}

// BUTTON RADIO 

input[type="radio"].category {
    display: none;
}

input[type="radio"].category + label {
    width: 90px;
    height: 75px;
    padding-top: 20px;
    margin-left: 16px;
    border-radius: 17px;
}
input[type="radio"].category:checked  + label{
    padding: 10px;
    padding-top: 20px;
    border: 1px solid black;
    color: black;
    font-size: 16px;
}

#entree-label {
    background: rgb(255,0,0);
    background: linear-gradient(0deg, rgba(255,0,0,0.18831168831168832) 0%, rgba(33,122,255,1) 100%);
}

#dish-label {
    background: rgb(255,0,0);
    background: linear-gradient(0deg, rgba(255,0,0,0.6038961038961039) 0%, rgba(33,122,255,1) 100%);
}

#dessert-label {
    background: rgb(255,0,0);
    background: linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(33,122,255,1) 100%);
}

// PHOTO RECIPE

img{
  max-width:120px;
  margin: auto;
}

input[type=file]{
    padding:10px;

}


</style>