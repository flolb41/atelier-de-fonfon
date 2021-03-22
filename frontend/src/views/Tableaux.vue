<template>
  <div class="tableaux container">
    <ul class="tableaux-list">
      <div class="card-container">
        <li class="card" v-for="item in tableaux" :key="item.id">
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
              <span class="prix-list">{{ item.price }},00 €</span>
            </div>
            <div v-else class="vente-faite">
              <span class="prix-vendu"
                ><s>{{ item.price }},00 €</s></span
              >
              <span class="vendu">Pièce déjà vendue</span>
            </div>
          </div>
        </li>
      </div>
      <div id="scroll_to_top">
        <a href="#top"
          ><font-awesome-icon
            :icon="['fas', 'chevron-circle-up']"
            size="3x"
            color="grey"
        /></a>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tableaux",
  data() {
    return {
      tableaux: [
        {
          id: 1,
          name: "Cabines de La Brée",
          taille: "66 cm x 51 cm",
          price: 350,
          img: "../img/tableaux/1.jpg",
          vendu: false
        },
        {
          id: 2,
          name: "Cabines d'Oléron",
          taille: "55 cm x 38 cm",
          price: 250,
          img: "../img/tableaux/2.jpg",
          vendu: false
        },
        {
          id: 3,
          name: "Récif Sauvage",
          taille: "55 cm x 38 cm",
          price: 240,
          img: "../img/tableaux/3.jpg",
          vendu: true
        },
        {
          id: 4,
          name: "Cabines sous la Lune",
          taille: "90 cm x 30 cm",
          price: 250,
          img: "../img/tableaux/4.jpg",
          vendu: false
        },
        {
          id: 5,
          name: "Dunes Oléron",
          taille: "75 cm x 25 cm",
          price: 150,
          img: "../img/tableaux/5.jpg",
          vendu: false
        },
        {
          id: 6,
          name: "Cabines Soleil Couchant",
          taille: "59 cm x 50 cm",
          price: 310,
          img: "../img/tableaux/6.jpg",
          vendu: false
        },
        {
          id: 7,
          name: "Dômes Blancs Evasion",
          taille: "37 cm x 44 cm",
          price: 190,
          img: "../img/tableaux/7.jpg",
          vendu: false
        },
        {
          id: 8,
          name: "Oléron Jour d'Orage",
          taille: "100 cm x 79 cm",
          price: 500,
          img: "../img/tableaux/8.jpg",
          vendu: true
        },
        {
          id: 9, 
          name: "Pêche au Carrelet Oléron",
          taille: "69 cm x 49 cm",
          price: 180,
          img: "../img/tableaux/9.jpg",
          vendu: false
        },
        {
          id: 10,
          name: "Douceur sous la Neige",
          taille: "89 cm x 116 cm",
          price: 470,
          img: "../img/tableaux/10.jpg", 
          vendu: false
        },
        {
          id: 11,
          name: "Phare de Tévennec", 
          taille: "73 cm x 50 cm",
          price: 230,
          img: "../img/tableaux/11.jpg",
          vendu: false
        },
        {
          id: 12,
          name: "Entier dans la Dune",
          taille: "50 cm x 30 cm",
          price: 220,
          img: "../img/tableaux/12.jpg",
          vendu: true
        },
        {
          id: 13,
          name: "Chaudron de Chardin",
          taille: "57 cm x 49 cm",
          price: 550,
          img: "../img/tableaux/13.jpg",
          vendu: true
        },
        {
          id: 14,
          name: "Gazelles",
          taille: "53 cm x 45 cm",
          price: 420,
          img: "../img/tableaux/14.jpg",
          vendu: false
        },
        {
          id: 15,
          name: "Oliviers",
          taille: "116 cm x 89 cm",
          price: 600,
          img: "../img/tableaux/15.jpg",
          vendu: false
        },
        {
          id: 16,
          name: "Hérons",
          taille: "100 cm x 80 cm",
          price: 580,
          img: "../img/tableaux/16.jpg",
          vendu: false
        },
        {
          id: 17,
          name: "Marais Poitevin",
          taille: "70 cm x 50 cm",
          price: 120,
          img: "../img/tableaux/17.jpg",
          vendu: false
        },
        {
          id: 18, 
          name: "Nature Triptique",
          taille: "0 m x 0 m",
          price: 600,
          img: "../img/tableaux/18.jpg",
          vendu: true
        },
        {
          id: 19, 
          name: "Vers Demain",
          taille: "71 cm x 50 cm",
          price: 270,
          img: "../img/tableaux/19.jpg",
          vendu: false
        }
      ],
    }
  }
};
</script>

<style lang="scss" scoped>
.tableaux-list {
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.tableaux-list img {
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
.tableaux-list li {
  margin: 7% auto;
}
.tableaux {
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