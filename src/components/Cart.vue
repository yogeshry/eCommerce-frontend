<template>
  <v-container>
  <v-layout>
  <v-card>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout row wrap>
        <v-flex
          v-for="card in cards"
          v-bind="{xs12: true }"
          :key="card.title"
        ><v-card>
          <v-layout>
          <v-flex xs2>
          <v-card>
            <v-card-media
              height="100"
            src="/static/iphone8.png"
            >
            </v-card-media>
          </v-card>
          </v-flex>
          <v-flex>
            <v-card-title>
                {{card.title}}
              <v-btn small fab depressed>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-title></v-flex>
              <v-flex xs2></v-flex>
              <v-flex>
              <v-layout>
              <v-flex xs2>
              <v-select
                :items="[1,2,3,4,5,6,7,8,9,10]"
                v-model="quantity"
                :rules="rules"
                label="quantity"
                @change=""
              type="number">
              </v-select>
              </v-flex>
              </v-layout>
              </v-flex>
            <v-flex xs1>
              <br><h3>
              Rs. {{card.cost}}
            </h3>
            </v-flex>
          </v-layout>
          </v-card>
        </v-flex>
        <v-flex></v-flex>
      </v-layout>
    </v-container>
    <v-layout>
    <v-flex></v-flex>
    <v-flex xs2>
    <h2>
    Total: Rs. total
  </h2>
    </v-flex>
    </v-layout>
  </v-card>
  </v-layout>
  <v-layout>
    <v-flex xs10>
    </v-flex>
    <v-flex>
      <v-btn>
        Checkout
      </v-btn>
    </v-flex>
  </v-layout>
  </v-container>
  <!--<v-container>-->
  <!--<h1 class="title">-->
  <!--Cart-->
  <!--<span class="continue" >Continue shopping</span>-->
  <!--</h1>-->
  <!--<v-layout>-->
  <!--<v-flex fill-height>-->
  <!--<ul class="items">-->
  <!--<li  class="item">-->
  <!--<div class="item-preview">-->
  <!--<img src="/static/iphone8.png" class="item-thumbnail">-->
  <!--<div>-->
  <!--<h2 class="item-title">{{items[0].name}}{{items[0].model}}</h2>-->
  <!--<p class="item-description">{{items[1].description}}<br>shipping price ({{ items[0].shipping == 0 ? 'Free' : 'Rs.' + items[0].shipping }})</p>-->
  <!--</div>-->
  <!--</div>-->
  <!--<v-layout>-->
  <!--<v-flex xs1>-->
  <!--</v-flex>-->
  <!--<v-flex>-->
  <!--<v-btn fab small depressed>-->
  <!--<v-icon>-->
  <!--mdi-delete-->
  <!--</v-icon>-->
  <!--</v-btn>-->
  <!--</v-flex>-->
  <!--</v-layout>-->
  <!--<div>-->
  <!--<input class="item-quantity" type="number" min=0 v-model="items[0].order_quantity" >-->
  <!--<span class="item-price">Rs.{{items[0].cost}}</span>-->
  <!--</div>-->
  <!--</li>-->
  <!--</ul>-->
  <!--<ul class="items">-->
  <!--<li  class="item">-->
  <!--<div class="item-preview">-->
  <!--<img src="/static/iphone10.png" class="item-thumbnail">-->
  <!--<div>-->
  <!--<h2 class="item-title">{{items[1].name}}{{items[1].model}}</h2>-->
  <!--<p class="item-description">{{items[1].description}}<br>shipping price ({{ items[1].shipping == 0 ? 'Free' : 'Rs.' + items[1].shipping }})</p>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div>-->
  <!--<input class="item-quantity" type="number" min=0 v-model="items[1].order_quantity" >-->
  <!--<span class="item-price">Rs.{{items[1].cost}}</span>-->
  <!--</div>-->
  <!--</li>-->
  <!--</ul>-->
  <!--<h3 class="cart-line">-->
  <!--Subtotal-->
  <!--<span class="cart-price">Rs.{{ subTotal }}</span>-->
  <!--</h3>-->
  <!--<h3 class="cart-line">-->
  <!--VAT ({{ items[0].vat }}%)-->
  <!--<span class="cart-price">Rs.{{VAT }}</span>-->
  <!--</h3>-->
  <!--<h3 class="cart-line">-->
  <!--Shipping-->
  <!--<span class="cart-price">{{ shipping == 0 ? 'Free' : 'Rs.' + shipping }}</span>-->
  <!--</h3>-->
  <!--<h3 class="cart-line">-->
  <!--Total-->
  <!--<span class="cart-price cart-total">Rs.{{ getTotal }}</span>-->
  <!--</h3>-->
  <!--<div class="line-before-btn"></div>-->
  <!--<v-btn class="checkout-line">Checkout</v-btn>-->
  <!--</v-flex>-->
  <!--</v-layout>-->

  <!--</v-container>-->
</template>

<script>
  export default {
    name: 'Detail',
    data () {
      return {
        items: [
          {
            id: 1,
            name: 'Iphone',
            model: '8 Plus',
            cost: 99000,
            description: 'This is Iphone 8 Plus',
            specifications: 'specs',
            order_quantity: 5,
            vat: 13,
            shipping: 50
          },
          {
            id: 2,
            name: 'Iphone',
            model: '10 Plus',
            cost: 10000,
            description: 'This is Iphone 10 Plus',
            specifications: 'specs',
            order_quantity: 1,
            vat: 13,
            shipping: 90
          }
        ],
        cards: [
          {title: 'Total Users', cost: 900},
          {title: 'Total Products', cost: 100},
          {title: 'Total Categories', cost: 200},
          {title: 'Total Users', cost: 500}
        ]
      }
    },
    computed: {
      subTotal () {
        let stotal = 0
        for (let itm in this.items) {
          stotal = stotal + this.items[itm].order_quantity * this.items[itm].cost
        }
        return stotal
      },
      VAT () {
        return this.items[0].vat * this.subTotal / 100
      },
      shipping () {
        let shipPrice = 0
        for (let itm in this.items) {
          if (this.items[itm].order_quantity === 0) {
            shipPrice = 0
          } else shipPrice = shipPrice + this.items[itm].shipping
        }
        return shipPrice
      },
      getTotal () {
        return this.subTotal + this.VAT + this.items[0].shipping
      }
    }
  }
</script>

<style scoped>

</style>
