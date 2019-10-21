<template>
<section>
        <v-layout
          column
          wrap
          class="my-12"
        >
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h2 class="headline">{{ listCafe.name }}</h2>
            </div>
          </v-flex>
          
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>

                <v-flex
                  xs12 md4
                  >
                  <v-card flat mx-auto elevation-20 dark class="py-5 outlined">
                    <v-card-text class="text-center">
                      <img :src="listCafe.image" width="150"/>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">{{ listCafe.name }}</div>
                    </v-card-title>
                        <v-divider></v-divider>

                    <section>
                        <v-card-text class="title text-left">Store Info</v-card-text>
                        <v-card-text class="px-4">
                            <div class="subtitle-2">Price Range
                                <span class="subtitle-2 float-right">
                                    {{ listCafe.price_range }}  
                                </span>
                            </div>

                            <div class="subtitle-2">Open hour
                                <span class="subtitle-2 float-right">
                                    {{ listCafe.open_hour}}
                                </span>
                            </div>
                            
                            <div class="subtitle-2">Close Hour
                                <span class="subtitle-2 float-right">
                                    {{ listCafe.close_hour}}  
                                </span>
                            </div>
                            
                            <div class="subtitle-2">Open day
                                <span class="subtitle-2 float-right">
                                    {{ listCafe.open_day }}  
                                </span>
                            </div>
                            
                            <div class="subtitle-2">Close day
                                <span class="subtitle-2 float-right">
                                    {{ listCafe.close_day }}  
                                </span>
                            </div>
                        </v-card-text>
                    </section>

                    <v-divider></v-divider>
                    <section>
                    <v-card-text class="title text-left">Review</v-card-text>
                            <v-rating 
                                class="text-center"
                                :length="5"
                                :value="listCafe.review"
                                background-color="grey lighten-1">
                            </v-rating>
                    </section>
                        <v-divider></v-divider>
                    <section>
                        <v-card-text class="title text-left">Amenities</v-card-text>
                        <v-card-text class="px-4">
                            <div class="subtitle-2">Parking is free
                                <span class="subtitle-2 float-right">
                                    {{ listCafe.amenities.free_park}}
                                </span>
                            </div>
                            
                            <div class="subtitle-2">Pets are allowed
                                <span class="subtitle-2 float-right">
                                    {{ listCafe.amenities.allow_pets}}  
                                </span>
                            </div>
                            
                            <div class="subtitle-2">Booking is allowed
                                <span class="subtitle-2 float-right">
                                    {{ listCafe.amenities.allow_booking }}  
                                </span>
                            </div>
                            
                            <div class="subtitle-2">Outside meal
                                <span class="subtitle-2 float-right">
                                    {{ listCafe.amenities.allow_food }}  
                                </span>
                            </div>
                            
                            <div class="subtitle-2">Disability-friendly
                                <span class="subtitle-2 float-right">
                                    {{ listCafe.amenities.allow_disability }}  
                                </span>
                            </div>
                        </v-card-text>
                    </section>


                  </v-card>
                </v-flex>

                <!-- detail page -->
                <v-flex
                  xs12 md8
                  >
                  <v-card flat class="transparent">
                    <v-card-text class="display-1 text-left">
                      Info
                    </v-card-text>
                    <v-card-text>
                        {{ listCafe.address }}  
                    </v-card-text>
                    <v-card-text>
                        {{ listCafe.description }}  
                    </v-card-text>
                  </v-card>

                  <v-divider></v-divider>

                  <v-card flat class="transparent">
                    <v-card-text class="display-1 text-left">
                      Popular Menu
                    </v-card-text>
                    <v-flex>
                        <v-card>
                            <v-card-text class="display-1 text-left">
                                Menu 1
                            </v-card-text>
                        </v-card>
                    </v-flex>
                  </v-card>

                  <v-divider></v-divider>

                  <v-card flat class="transparent">
                    <v-card-text class="display-1 text-left">
                      Location
                    </v-card-text>
                    <v-card-text>
                      {{ listCafe.address }}  
                      {{ listCafe.description }}  
                    </v-card-text>
                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
</template>
<script>
const dummyDetailCafe = {
        id:"1",
        name:"Wakrop Brewok",
        description: "Menikmati kopi di tempat yang nyaman menjadi poin plus. Karena itulah di cabang barunya. Warkop Brewok mencoba menghadirkan suasana senyaman mungkin. Berada di Jalan Terusan Candi Mendut No 37, cabang kedua Warkop Brewok ini mengusung tema backyard.",
        image: "/warkop1.jpeg",
        address: "Jalan Sukarno Hatta 5 - Malang",
        price_range: "10k-20k",
        open_hour: "5pm",
        close_hour: "11pm",
        open_day: "Mon-Fri",
        close_day: "Sat-Sun",
        review: "4.1",
        year_published: "2019",
        table_total: "25",
        type: "Cafe",
        contact:{
            email:"wakropbrewok@brewok.com",
            number:"+62 812 5902 0736",
        },
        amenities: {
            free_park:"No",
            allow_pets:"Yes",
            allow_booking:"Yes",
            allow_food:"No",
            allow_disability:"Yes",
        },
        lat:"",
        lng:""
    }

const currentTable = {
    table_total: "25",
    table_occupied: "13",
    table_booked: "1",
    table_unavailable:"0"
}
export default {
  data(){
    return {
      listCafe: dummyDetailCafe
    }
  }   
}
</script>