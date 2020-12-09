<template>
  <div id="app" class="vueC-msgCode-input">
    <label for="msgCodeInput" class="codeList">
      <div v-for="(item,index) in codeLength" class="codeItme" :class="{'codeItmeActive':  msgCodeInput.length-1 === index && isFocus}">{{msgCodeInput.length === index && isFocus ?'|':msgCodeInput.split('')[index]}}</div>
    </label>
    <input :maxlength="codeLength" ref="msgCodeInput" class="msgCodeInput" @input="inputInput" @focus="inputFocus" @blur="inputBlur" v-model="msgCodeInput" name="msgCodeInput" id="msgCodeInput" type="number">
  </div>
</template>

<script>
  export default {
    name: 'index',
    props:{
      codeLength:{
        type : Number,
        default:6
      },
      initialFocus:{
        type : Boolean,
        default:true
      },
      inputSuccess:{
        type : Function,
        default : (codeMsg)=>{console.log(codeMsg);}
      }
    },
    data(){
      return {
        msgCodeInput:'',
        isFocus:false
      }
    },
    mounted(){
      this.isFocus = this.initialFocus
    },
    methods:{
      inputFocus(){
        this.isFocus = true
      },
      inputBlur(){
        this.isFocus = false
      },
      inputInput(e){
        if (this.msgCodeInput.length >= this.codeLength){
          this.msgCodeInput = this.msgCodeInput.slice(0,this.codeLength);
          this.isFocus = false;
          this.$refs['msgCodeInput'].blur();
          this.inputSuccess(this.msgCodeInput)
        }
      }
    },
    watch:{
      'isFocus': function (newValue,oldValue) {
        if (this.isFocus){
          this.$refs['msgCodeInput'].focus()
        } else {
          this.$refs['msgCodeInput'].blur()
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .vueC-msgCode-input{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .msgCodeInput{
      width: 0;
      height: 0;
      padding: 0;
      margin: 0;
      opacity: 0;
      position: relative;
      z-index: -999999999;
      overflow: hidden;
    }
    .codeList{
      display: flex;
      align-items: center;

      .codeItme{
        width: 30px;
        height: 30px;
        border: 1px solid rgba(0,0,0,.5);
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
      }

      .codeItmeActive{
        box-shadow: 0 0 5px 1px rgb(12, 179, 255);
        border: 1px solid rgb(12, 179, 255);
      }

    }


  }
</style>
