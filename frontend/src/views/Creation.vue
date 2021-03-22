<template>
  <div class="creation container">
    <ul class="creation-list">
      <div class="card-container">
        <li class="card" v-for="item in creation" :key="item.id">
          <img
            class="card-img-top zoom"
            :src="item.img"
            :alt="item.name"
          />
          <div class="card-body">
            <h2 class="card-title name">{{ item.name }}</h2>
            <p class="card-text">{{ item.description }}</p>
            <p class="card-text taille">{{ item.taille }}</p>
          </div>
          <div class="card-footer">
            <div v-if="item.vendu == false" class="en-vente">
            <span  class="prix-list"
              >{{ item.price }},00 €</span
            ></div>
            <div v-else class="vente-faite">
              <span class="prix-vendu"><s>{{ item.price }},00 €</s></span>
            <span class="vendu">Pièce déjà vendue</span>
            </div>
          </div>
        </li>
      </div>
      <div id="scroll_to_top">
        <a href="#top"
          ><font-awesome-icon :icon="['fas', 'chevron-circle-up']" size="3x" color="grey"
        /></a>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "creation",
  data() {
    return {
      creation: [
        {
          id: 1, 
          name: "Porte-bijoux",
          description: "Bois flotté pour bagues et colliers.",
          price: 25, 
          img: "../img/creations/1.jpg",
          vendu: false
        },
        {
          id: 2, 
          name: "Porte -bijoux",
          description: "Bois flotté pour bagues et colliers.",
          price: 35,
          img: "../img/creations/2.jpg",
          vendu: false
        },
        {
          id: 3,
          name: "Poisson",
          description: "Poisson en bois flotté et inox.",
          price: 30,
          img: "../img/creations/3.jpg",
          vendu: false
        },
        {
          id: 4,
          name: "Goélands",
          description: "Peinture sur bois.",
          price: 50,
          img: "../img/creations/4.jpg",
          vendu: false
        },
        {
          id: 5,
          name: "Oléron liberté",
          description: "Peinture sur bois flotté.",
          price: 30,
          img: "../img/creations/5.jpg",
          vendu: false
        },
        {
          id: 6,
          name: "Arête !!! de poisson",
          description: "Peinture sur bois flotté.",
          dimensions: "60 cm x 7,5 cm",
          price: 20,
          img: "../img/creations/6.jpg",
          vendu: false
        },
      ],
      
    };
  },
};
</script>

<style lang="scss" scoped>
.creation-list {
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.creation-list img {
  width: 90%;
  margin: 5% auto;
}
li:hover {
  transition-duration: 0.5s;
  transform: scale(1.1);
  img {
    transition-duration: 0.5s;
    transform: scale(1.1);
  }
}
.creation-list li {
  margin: 7% auto;
}
.creation {
  width: 80%;
  margin: 0 auto;
}
.card-container {
  margin: auto;
}
.card-body h2 {
  font-family: Tangerine;
  font-size: 4em;
}
.card-body p {
  font-size: 1.5em;
}
.card-footer span {
  font-size: 1.8em;
}
.card-img-top {
  margin: 0 auto;
}
.vente-faite span {
  margin: 0 5%;
}
#scroll_to_top {
  position: fixed;
  width: 25px;
  height: 25px;
  bottom: 3%;
  right: 3%;

}
#scroll_to_top img {
  width: 25px;
}
</style>