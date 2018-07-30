<template>
  <v-container>

          <div class='MessageList'>
            <Message v-for='message in messages' :message='message'/>
            <div class='Message' :class='modifiers'>
              <div class='Message__Author'>
               dfdfsfs
              </div>
              <div class='Message__Text'>
                messhdf
              </div>
              <div class='Message__Timestamp'>
                sdfsdf
              </div>
            </div>
            <MessageForm/>
            <Message v-for='message in messages' :message='message'/>
            <div class='Message' :class='modifiers'>
              <div class='Message__Author'>
                dfdfsfs
              </div>
              <div class='Message__Text'>
                messhdf
              </div>
              <div class='Message__Timestamp'>
                sdfsdf
              </div>
            </div>
            <MessageForm/>
            <Message v-for='message in messages' :message='message'/>
            <div class='Message' :class='modifiers'>
              <div class='Message__Author'>
                dfdfsfs
              </div>
              <div class='Message__Text'>
                messhdf
              </div>
              <div class='Message__Timestamp'>
                sdfsdf
              </div>
            </div>
            <Message/>
            <form class='MessageForm' >
              <input v-model='text'  style="color: goldenrod;" class='MessageForm__Text' placeholder='Type a message...'>
              <button class='MessageForm__Send'>&#10003;</button>
            </form>
          </div>
  </v-container>
</template>



<style>

  * {
    margin: 0px;
    padding: 0px;
  }
  #app {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    background-color: #1E1E1E;
    min-height: 100vh;
  }
  .MessageList {
    float: right;
    width: 400px;
    display: flex;
    flex-direction: column;
    background-color: #252526;
    padding: 10px;
    margin: 0px auto;
    min-height: 100vh;
  }
  .Message {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  }
  .Message--Mine {
    align-self: flex-end;
  }
  .Message--Mine .Message__Author {
    align-self: flex-end;
  }
  .Message--Mine .Message__Timestamp {
    align-self: flex-start;
  }
  .Message--Mine .Message__Text {
    background-color: #7518a0;
  }
  .Message--Error .Message__Text {
    background-color: #b7263c;
  }
  .Message__Author {
    font-weight: 700;
    padding: 5px;
    color: #FFFFFF;
  }
  .Message__Text {
    color: #FFFFFF;
    background-color: #306696;
    border-radius: 10px;
    padding: 10px 15px;
  }
  .Message__Timestamp {
    color: grey;
    font-size: 0.5em;
    padding: 4px;
    align-self: flex-end;
  }
  .MessageForm {
    align-self: flex-end;
    padding: 10px;

  }
  .MessageForm__Text {
    border-radius: 10px;
    height: 1.5em;
    border: 1px gold;
    padding: 5px 10px;
    font-size: 1em;
  }
  .MessageForm__Text:focus {
    outline: none;
    color: gold;
  }
  .MessageForm__Text::-webkit-input-placeholder {
    font-weight: 100;
  }
  .MessageForm__Send {
    outline: none;
    border: 0px;
    color: #FFFFFF;
    background-color: #7518a0;
    font-size: 1.5em;
    border-radius: 10px;
    padding: 5px 10px;
  }
  .MessageForm__Send:active {
    background-color: #306696;
  }
</style>
