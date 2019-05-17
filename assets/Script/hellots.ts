// import {grace} from "./proto"
let Player = require('./proto')
// import { decode } from "punycode";
const {ccclass,property} = cc._decorator

let ts = require('./longhudou')

// let test = require('./test')

@ccclass
export default class NewClass extends cc.Component{


    start(){
            console.log('onstart')

            // let a = test.grace.Player(


          let message = Player.grace.msg.Player.create({name:'蜡笔小新',id:123,enterTIme:321})
          let buffer = Player.grace.msg.Player.encode(message).finish()

          this.schedule(()=>{

                let decoded = Player.grace.msg.Player.decode(buffer)
    
                cc.log('--------->>>>>>',buffer)

                cc.log(decoded)
          },2,0)

       
    }

    
}
