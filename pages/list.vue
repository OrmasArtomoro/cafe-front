<template>
<section>
        <v-layout
          column
          wrap
          class="my-12"
          align-center
        >
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h2 class="headline">Cafe populer di Malang</h2>
              <span class="subheading">
                Cari cafe favoritmu disini!
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center @click="handleViewDetail">
                <v-flex 
                  v-for="(item, index) in listCafe"
                  v-bind:key="index"
                  xs12 md4
                  >
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <img :src="item.image" width="150"/>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">{{ item.name }}</div>
                    </v-card-title>
                    <v-card-text>
                      <span class="elipsis">{{ item.text }}</span>
                    </v-card-text>
                    <v-progress-linear
                      background-opacity="0.5"
                      height="10px"
                      rounded
                      :value="(item.tables.table_occupied + item.tables.table_booked) / (item.tables.table_total - item.tables.table_unavailable) * 100"
                      color="light-green"
                    ></v-progress-linear>
                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
</template>
<script>
const dummyCafe = [
    {
        id:"1",
        name:"Wakrop Brewok",
        text: "Menikmati kopi di tempat yang nyaman menjadi poin plus. Karena itulah di cabang barunya. Warkop Brewok mencoba menghadirkan suasana senyaman mungkin. Berada di Jalan Terusan Candi Mendut No 37, cabang kedua Warkop Brewok ini mengusung tema backyard.",
        image: "/warkop1.jpeg",
        tables: {
          table_total: 25,
          table_occupied: 1,
          table_booked: 9,
          table_unavailable:0
        }
    },
]
export default {
  data(){
    return {
      listCafe: dummyCafe
    }
  },
  methods:{
    handleViewDetail: function() {
      console.log("View detail")
      this.$router.push("/detail")
    }
  }
}
</script>
<style scoped>
.elipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.align-right{
  float: right;
}
</style>