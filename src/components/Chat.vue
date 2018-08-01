<template>
  <v-container>

    <div class='MessageList'>
      <div class="nav">

        <div class="default-nav">
          <div class="main-nav"><div class="options"></div></div>
        </div>
      </div>
      <Message v-for='(message,i) in messages' :key=i :message='message'/>
      <MessageForm @messageSent='onMessageSent'/>
    </div>
  </v-container>
</template>

<script>
  import Message from './Message'
  import MessageForm from './MessageForm'

  export default {
    components: { Message, MessageForm },
    data () {
      return {
        messages: [{
          author: 'shop bot',
          text: 'Let us discuss something!',
          timestamp: new Date().toLocaleString()
        }]
      }
    },
    methods: {
      onMessageSent (message) {
        this.messages.push(message)
      }
    },
    updated () {
      this.$el.querySelector('form').scrollIntoView()
    }
  }
</script>

<style>
  .MessageList {
    border-radius: 15px;
    float: right;
    width: 370px;
    display: flex;
    flex-direction: column;
    background-color: #252526;
    padding: 10px;
    margin: 0px auto;
    min-height: 80vh;
  }
  .nav {
    position: static;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    z-index: 4;
  }
  .default-nav {
    height: 40px;
    width: 100%;
    position: static;
    left: 0;
    top: 0;
    z-index: 20;

    background-color: #808080;
    border-bottom: 3px solid #696969;
    color: white;

    -webkit-box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.1);
    -moz-box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.1);
    box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.1);
  }
  .main-nav {
    position: static;
    left: 0;
    width: 100%;
    height: 40px;
    top: 0;

    margin: 0;
    padding: 0;

    list-style: none;
  }
  .options {
    height: 32px;
    width: 32px;
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/104946/ic_more_vert_white_48dp.png);
    background-size: contain;
    margin: 16px;
    position: static;
    right: 0;
  }

</style>
