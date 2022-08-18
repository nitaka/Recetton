<template>
    <div class="user">
        <section class="main">
            <img class="photo-profil" src="../assets/login.png" alt="photo de profil">
            <h1 class="name-profil">User</h1>
            <div class="main__btn-profil">
                <button class="add-recipe"><router-link class="nav-link text-light" aria-current="page" to="/form">Ajouter recette</router-link></button>
                <button class="add-recipe">Supprimer recette</button>
            </div>
        </section>
        <section class="score">
            <h1 class="score__title">Score</h1>
            <h2 class="score__sub-title">Nombres de recettes :</h2>
            <div class="score__recipe">
                <img src="../assets/aureole.png" alt="dessin aureol d'ange"><span class="nombre-recipe">10</span>
            </div>
            <div class="score__recipe">
                <img class="fire" src="../assets/fire.png" alt="dessin d'une flamme"><span class="nombre-recipe">8</span>
            </div>
        </section>
    </div>
</template>

<script>
</script>

<style lang="scss">

        // HEADER USER //
.photo-profil {
    position: absolute;
    width: 149px;
    height: 141px;
    left: 25px;
    top: 150px;
    border-radius: 100%;
}

.name-profil {
    font-family: 'Inspiration', cursive;
    margin-left: 190px;
}

        // BUTTON USER //

.main__btn-profil {
    margin-top: 150px;
    display: flex;
    justify-content: space-around;
}

.add-recipe {
    font-size: 1.2em;
    font-weight: bold;
    width: 146px;
    height: 70px;
    color: white;
    background: #989898;
    border-radius: 25px;
    border: none;
    box-shadow: inset 5px 3px 3px gray;
}

.add-recipe:hover {
    font-size: 1.3em;
    box-shadow: 5px 3px 3px gray;
    text-shadow: 5px 3px 3px gray;
}

        // SECTION SCORE //

.score {
    margin-top: 100px;
    &__title {
        font-family: 'Inspiration', cursive;
        font-size: 4em;
    }
    &__sub-title {
        margin-top: 50px;
    }
    &__recipe {
        display: flex;
        justify-content: space-evenly;
    }
    
}

.nombre-recipe {
    font-size: 48px;
    font-family: 'Rubik', sans-serif;
}

.fire {
    position: relative;
    right: 5px;
}

</style>