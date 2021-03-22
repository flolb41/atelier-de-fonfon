<template>
  <div class="sculptures container">
    <ul class="sculpture-list">
      <li class="card sculpture" v-for="item in sculptures" :key="item.id">
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
  name: "Sculptures",
  components: {},
  data() {
    return {
      sculptures: [
        {
          id: 1,
          name: "Envolée...",
          description: "Sculptures traitées sur cinq faces au durcisseur, cela permet à l'arrière de respirer.",
          dimensions: "28,5 cm x 17,5 cm",
          price: 40,
          img: "../img/sculptures/1.jpg",
          vendu: false
        },
        {
          id: 2,
          name: "Jeu de miroir",
          description: "Sculptures traitées sur cinq faces au durcisseur, cela permet à l'arrière de respirer.",
          dimensions: "29 cm x 20 cm",
          price: 40,
          img: "../img/sculptures/2.jpg",
          vendu: false
        },
        {
          id: 3,
          name: "Sieste du chat",
          description: "Sculpture traitée sur cinq faces au durcisseur.",
          dimensions: "29 cm x 19 cm",
          price: 40,
          img: "../img/sculptures/3.jpg",
          vendu: false
        },
        {
          id: 4,
          name: "Petits pieds deviendront grands",
          description: "En pierre de tuffeau, traitée au durcisseur sur 5 faces.",
          dimensions: "29 cm x 23 cm",
          price: 40,
          img: "../img/sculptures/4.jpg",
          vendu: false
        },
        {
          id: 5, 
          name: "Trompettiste sous la lune",
          description: "En pierre de tuffeau, traitée au durcisseur sur 5 faces.",
          dimensions: "14 cm x 29 cm",
          price: 40,
          img: "../img/sculptures/5.jpg",
          vendu: false
        },
        {
          id: 6, 
          name: "Bavardage sur une branche",
          description: "En pierre de tuffeau, traitée au durcisseur sur 5 faces.",
          dimensions: "29 cm x 13 cm",
          price: 40,
          img: "../img/sculptures/6.jpg",
          vendu: false
        },
        {
          id: 7, 
          name: "Poisson puzzle",
          description: "En pierre de tuffeau, traitée au durcisseur sur 5 faces.",
          price: 40,
          img: "../img/sculptures/7.jpg",
          vendu: false
        },
        {
          id: 8,
          name: "Jeu de chat",
          description: "En pierre de tuffeau, traitée au durcisseur sur 5 faces.",
          dimensions: "28,5 cm x 19 cm",
          price: 40,
          img: "../img/sculptures/8.jpg",
          vendu: false
        },
        {
          id: 9,
          name: "Arête !",
          description: "En pierre de tuffeau, traitée au durcisseur sur 5 faces.",
          dimensions: "28 cm x 14 cm",
          price: 40,
          img: "../img/sculptures/9.jpg",
          vendu: true
        },
        {
          id: 10,
          name: "Chat assis",
          description: "En pierre de tuffeau, traitée au durcisseur sur 5 faces.",
          dimensions: "20 cm x 17 cm",
          price: 40,
          img: "../img/sculptures/10.jpg",
          vendu: true
        },
        {
          id: 11,
          name: "Afrique",
          description: "En pierre de tuffeau, traitée au durcisseur sur 5 faces.",
          dimensions: "29 cm x 21 cm",
          price: 40,
          img: "../img/sculptures/11.jpg",
          vendu: false
        },
        {
          id: 12, 
          name: "Migration",
          description: "En pierre de tuffeau, traitée au durcisseur sur 5 faces.",
          dimensions: "29 cm x 22 cm",
          price: 40,
          img: "../img/sculptures/12.jpg",
          vendu: true
        },
        {
          id: 13, 
          name: "Aloha",
          description: "En pierre de tuffeau, traitée au durcisseur sur 5 faces.",
          dimensions: "29 cm x 7 cm", 
          price: 40, 
          img: "../img/sculptures/13.jpg",
          vendu: false
        },
        {
          id: 14,
          name: "Repos du soir",
          description: "En pierre de tuffeau, traitée au durcisseur sur 5 faces.",
          dimentions:"",
          price: 40,
          img: "../img/sculptures/14.jpg",
          vendu: false
        }
      ],     
    };
  },
};
</script>

<style lang="scss" scoped>
.sculpture-list {
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.sculpture-list img {
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
.sculpture-list li {
  margin: 7% auto;
}
.sculpture {
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
#scroll_to_top {
  position: fixed;
  width: 25px;
  height: 25px;
  bottom: 3%;
  right: 3%;
}
.vente-faite span {
  margin: 0 5%;
}
#scroll_to_top img {
  width: 25px;
}
</style>