<template>
    <div class="home-menus">
        <div class="main">
            <router-link to="/healthy" class="main__heal">
                <img src="../assets/Healty-logo.png" alt="logo healthy">
            </router-link>
            <router-link to="/hard" class="main__hard">
                <img src="../assets/Hard-logo.png" alt="logo hard">
            </router-link>
            <section class="recipe-user">
                <article class="recipe-user__list">
                    <div class="recipe-user__hard">
                        <img class="photo-recipe" src="../assets/burger.jpg" alt="photo du plat de la recette">
                        <h4 class="name-recipe-list">Hamburger</h4>
                        <p class="text-recipe-list">
                            Hamburger avec cheese, salade, oignon rouge, cornichon aigre doux accompagner de frite maison. 
                        </p>
                        <p class="text-recipe-states">
                           <span class="state">Note:8</span>
                           <span class="state">Qts:1000g</span>
                           <span class="state">Kcal:560</span>
                           <span class="state">Coût:30€</span> 
                        </p>
                    </div>
                </article>
                <article class="recipe-user__list">
                    <div class="recipe-user__heal">
                        <img class="photo-recipe" src="../assets/salade.jpg" alt="photo du plat de la recette">
                        <h4 class="name-recipe-list">Salade César</h4>
                         <p class="text-recipe-list">
                            Salade César avec laitue, œuf dur, croûtons, parmesan et sauce César.
                        </p>
                        <p class="text-recipe-states">
                           <span class="state">Note:10</span>
                           <span class="state">Qts:800g</span>
                           <span class="state">Kcal:230</span>
                           <span class="state">Coût:24€</span> 
                        </p>
                    </div>
                </article>
            </section>
        </div>
        
    </div>
</template>

<script>
</script>

<style lang="scss">

      // MAIN RECIPE //

.recipe-user {

    width: 100%;
    margin-top: 50px;

  &__list {
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    width: 95%;
    padding: 15px;
  }
  &__hard {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 170px;
    background: #FF8686;
    border-radius: 20px;
    box-shadow: 1px 5px 5px rgb(141, 141, 141);
  }
  &__heal {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 170px;
    background: #86F0FF;
    border-radius: 20px;
    box-shadow: 1px 5px 5px rgb(141, 141, 141);
  }
}

.photo-recipe {
    width: 35%;
    height: 100px;
    border-radius: 15%;
    margin-top: 8px;
    margin-left: 8px;
}

.name-recipe-list {
    height: 20px;
    font-size: 1em;
    font-weight: bold;
    margin-left: 60px;
    margin-top: 5px;
}
.text-recipe-list {
    width: 50%;
    height: 118px;
    position: absolute;
    right: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 25px;
    padding: 4px;
    text-align: left;
    font-size: 16px;
    border-radius: 10px;
    text-shadow: 1px 1px 2px rgb(107, 107, 107);
}

.text-recipe-states {
    position: relative;
    top: 28px;
    left: 18px;
    justify-content: space-around;
    font-weight: bold;
}

.state {
    margin: 5px;
}

</style>