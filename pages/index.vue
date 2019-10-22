
 <template>
    <v-content>
      <section>
        <v-parallax src="/hero-image.jpg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <v-img src="/vuetify.png" alt="Vuetify.js" height="200"/>
            <h1 class="white--text mb-2 display-1 text-center">Ngopi di Malang dimana ya ?</h1>
            <div class="subheading mb-4 text-center">Sistem Informasi Cafe di Malang</div>
            <v-btn
              class="mt-12"
              color="blue lighten-2"
              light
              large
              @click="handleList"
            >
              Cari disini
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

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
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <!-- <v-icon x-large class="blue--text text--lighten-2">mdi-palette</v-icon> -->
                      <img src="/warkop1.jpeg" width="150"/>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Warkop Brewok</div>
                    </v-card-title>
                    <v-card-text>
                      Menikmati kopi di tempat yang nyaman menjadi poin plus. Karena itulah di cabang barunya. Warkop Brewok mencoba menghadirkan suasana senyaman mungkin. Berada di Jalan Terusan Candi Mendut No 37, cabang kedua Warkop Brewok ini mengusung tema backyard.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <!-- <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon> -->
                      <img src="/warkop2.jpg" width="150"/>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Java Dancer</div>
                    </v-card-title>
                    <v-card-text>
                      Java Dancer adalah depot kopi lokal yang pertama kali dibuka di Malang, Jawa Timur, pada bulan Desember 2008. Lahir dari semangat murni dan rasa cinta akan kopi yang tinggi dari para pendirinya, Java Dancer menyajikan kopi Arabica yang diambil dari berbagai daerah penghasil kopi terbaik di Indonesia
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <!-- <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon> -->
                      <img src="/warkop3.JPG" width="150"/>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Coffee Belt</div>
                    </v-card-title>
                    <v-card-text>
                      Kedai kopi yang dikonsep untuk menikmati kopi Indonesia dengan rasa asli. Tidak hanya tempat ngopi biasa, tapi untuk merasakan kopi dengan berbagai jenisnya. Karena itu, tidak ada mesin pembuat kopi di sini. Yang tersedia beberapa alat pembuat kopi manual dari berbagai negara. Ada aeropress, pouriver, Vietnam Cafe Phin, dan Moka Pot
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="/paralax.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-4 text-center">Tidak menemukan cafe yang kamu cari ?</div>
            <em>Coba cari di list kami!</em>
            <v-btn
              class="mt-12"
              color="blue lighten-2"
              light
              large
              @click="handleList"
            >
              Cari cafe
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-12">
            <v-flex xs12 sm4>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Website ini untuk apa ?</div>
                </v-card-title>
                <v-card-text>
                  Lewat website ini, pengunjung bisa melihat status ketersediaan setiap cafe diseluruh Kota Malang. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Ingin cafemu terdaftar ?</div>
                </v-card-title>
                <v-card-text center>
                  Hubungi kami di
                </v-card-text>
                <v-list class="transparent">
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>+62 81 259 020736</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Malang, Indonesia</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>cafekuy@kuycafekuy.com</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

    </v-content>
 </template>
 <script>
   export default{
    data () {
      return {
        title: 'Cafe Malang'
      }
    },
    methods:{
      handleList: function() {
        this.$router.push("/list")
        console.log("List cliked")
      }
    }
  }
 </script>