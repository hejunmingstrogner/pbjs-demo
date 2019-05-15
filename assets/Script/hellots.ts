import {grace} from "./proto"
import Player = grace.proto.msg.Player
// import { decode } from "punycode";
const {ccclass,property} = cc._decorator

@ccclass
export default class NewClass extends cc.Component{


    start(){
            console.log('onstart')

          let message = Player.create({name:'蜡笔小新',id:123,enterTIme:321})
          let buffer = Player.encode(message).finish()

          this.schedule(()=>{

                let decoded = Player.decode(buffer)
    
                cc.log('--------->>>>>>',buffer)

                cc.log(decoded)
          },2,0)

       
    }

    
}
