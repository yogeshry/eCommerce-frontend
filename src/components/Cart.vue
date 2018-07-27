<template>
  <v-container>
    <h1 class="title">
      Cart
          <span class="continue" >Continue shopping</span>
    </h1>
    <v-layout>
      <v-flex fill-height>

        <ul class="items">
          <li  class="item">
            <div class="item-preview">
              <img src="/static/iphone8.png" class="item-thumbnail">
              <div>
                <h2 class="item-title">{{items[0].name}}{{items[0].model}}</h2>
                <p class="item-description">{{items[1].description}}<br>shipping price ({{ items[0].shipping == 0 ? 'Free' : 'Rs.' + items[0].shipping }})</p>
              </div>
            </div>
            <div>
              <input class="item-quantity" type="number" min=0 v-model="items[0].order_quantity" >
              <span class="item-price">Rs.{{items[0].cost}}</span>
            </div>
          </li>
        </ul>
        <ul class="items">
          <li  class="item">
            <div class="item-preview">
              <img src="/static/iphone10.png" class="item-thumbnail">
              <div>
                <h2 class="item-title">{{items[1].name}}{{items[1].model}}</h2>
                <p class="item-description">{{items[1].description}}<br>shipping price ({{ items[1].shipping == 0 ? 'Free' : 'Rs.' + items[1].shipping }})</p>
              </div>
            </div>
            <div>
              <input class="item-quantity" type="number" min=0 v-model="items[1].order_quantity" >
              <span class="item-price">Rs.{{items[1].cost}}</span>
            </div>
          </li>
        </ul>
        <h3 class="cart-line">
          Subtotal
          <span class="cart-price">Rs.{{ subTotal }}</span>
        </h3>
        <h3 class="cart-line">
          VAT ({{ items[0].vat }}%)
          <span class="cart-price">Rs.{{VAT }}</span>
        </h3>
        <h3 class="cart-line">
          Shipping
          <span class="cart-price">{{ shipping == 0 ? 'Free' : 'Rs.' + shipping }}</span>
        </h3>
        <h3 class="cart-line">
          Total
          <span class="cart-price cart-total">Rs.{{ getTotal }}</span>
        </h3>
        <div class="line-before-btn"></div>
        <v-btn class="checkout-line">Checkout</v-btn>
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
          shipPrice = shipPrice + this.items[itm].shipping
        }
        return shipPrice
      },
      getTotal () {
        return this.subTotal + this.VAT + this.items[0].shipping
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    background: #fdca40;
    padding: 30px;
  }

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
