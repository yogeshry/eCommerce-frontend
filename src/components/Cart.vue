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
</template>

<script>
  export default {
    name: 'Detail',
    data () {
      return {
        items: [
          {id: 1, name: 'Iphone', model: '8 Plus', cost: 99000, description: 'This is Iphone 8 Plus', specifications: 'specs', order_quantity: 5, vat: 13, shipping: 50},
          {id: 2, name: 'Iphone', model: '10 Plus', cost: 10000, description: 'This is Iphone 10 Plus', specifications: 'specs', order_quantity: 1, vat: 13, shipping: 90}
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

  .title {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 0;
    text-transform: uppercase;
    font-size: 110%;
    font-weight: normal;
  }

  .continue {
    margin: 0 2px;
    font-size: 60%;
    color: rgba(255, 100, 145, 0.6);
    text-decoration: underline;
    cursor: pointer;
  }

  .items {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .cart {
    background: #fff;
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    color: #333a45;
    border-radius: 3px;
    padding: 30px;
  }
  .cart-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0 0;
    font-size: inherit;
    font-weight: normal;
    color: rgba(51, 58, 69, 0.8);
  }
  .cart-price {
    color: #333a45;
  }
  .cart-total {
    font-size: 130%;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 2px solid rgba(51, 58, 69, 0.1);
  }
  .item-preview {
    display: flex;
    align-items: center;
  }
  .item-thumbnail {
    margin-right: 20px;
    border-radius: 3px;
    height: 75px;
    width: 45px;
  }
  .item-title {
    margin: 0 0 10px 0;
    font-size: inherit;
  }
  .item-description {
    margin: 0;
    color: rgba(51, 58, 69, 0.6);
  }
  .item-quantity {
    max-width: 100px;
    padding: 8px 12px;
    font-size: inherit;
    color: rgba(51, 58, 69, 0.8);
    border: 2px solid rgba(51, 58, 69, 0.1);
    border-radius: 3px;
    text-align: center;
  }
  .item-price {
    margin-left: 20px;
  }
  .line-before-btn {
    padding: 15px 0;
    border-bottom: 2px solid rgba(51, 58, 69, 0.1);
  }
  .checkout-line {
    margin: 20px 0 0 0;
  }
</style>
