// import  from './test'
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import {msg} from './longhudou'

let msgpackage = msg.MessagePackage     // 0
let roommsg = msg.Room                  // 1
let playermsg = msg.PlayerInfo          // 2
let Prizemsg = msg.Prize                // 3
let GameTimemsg = msg.GameTime          // 4
// let PlayerPrizemsg = msg.            // 5
let bulletinmsg = msg.Bulletin          // 7
let errinfomsg = msg.ErrInfo            // 8    
// import Room = msg.msg.Room
// import MessagePackage = msg.msg.MessagePackage
// import Player = msg.Player
// import Prize = msg.Prize
// import GameTime = msg.GameTime
// import Bulletin = msg.Bulletin
// import ErrInfo = msg.ErrInfo
import { timingSafeEqual } from "crypto";
import { read } from "fs";
// let a = require('./test')
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    ws:WebSocket = null

    // LIFE-CYCLE CALLBACKS:
    
    // 这上方法里面需要初始化一个websocket
    onLoad () {

        this.ws = new WebSocket("ws://192.168.0.186:1111/game/LHD")
        this.ws.onopen = this.openWebsocket
        this.ws.onmessage = this.messageWebsocket
        this.ws.onclose = this.closeWebsocket
        this.ws.onerror = this.errorWebsocket
        // setTimeout(this.timeoutFun, 3);





        // this.ws.onmessage = (a: WebSocket, ev: MessageEvent)=>{


        // }
    }
    // 检查连接
    timeoutFun(){

        // if(this.ws.readyState == WebSocket.OPEN){

        //     console.log('websocket 已经连接')
        // }else{

        //     console.log('websocket 没有连接')
        // }

        if(this.ws == null){

            console.log('this.ws is null')
        }else{

            console.log('this.ws not null')
        }

    }

    start () {

    }

    // onopen 函数
    openWebsocket(this: WebSocket, ev: Event){

        console.log('open')

    }
    // onmessage 函数
    messageWebsocket(this: WebSocket, ev: MessageEvent){


                  msgpackage.receiveData(ev.data,(buf)=>{

                        NewClass.parseMessagePacket(buf)

                        // let pack = msgpackage.decode(buf)

                        //  if(pack.messagetype == 1){

                        //         let room = msg.Room.decode(pack.messages)

                        //         console.log('room: ' + room)
                        //  }


                        // cc.log('pack: ' + pack)
                  })


    }
    // onerror 函数
    errorWebsocket(this: WebSocket, ev: Event){

        console.log('error')

    } 
    // onclose 函数
    closeWebsocket(this: WebSocket, ev: CloseEvent){


        console.log('close')

    }

    // 解析消息的方法

     static  parseMessagePacket(buffer){

        let messagePacket = msgpackage.decode(buffer)

        switch (messagePacket.messagetype){
           
                case 1:
                   
                    let roompackeg = roommsg.decode(messagePacket.messages)
                    break;
                
                case 2:
                  
                    let msgplayinfo = playermsg.decode(messagePacket.messages)
                     break;
            
                case 3:

                    let msgprize = Prizemsg.decode(messagePacket.messages)
                    break;
                
                case 4:
                
                    let msggametime = GameTimemsg.decode(messagePacket.messages)

                    break;
            
                case 5:
            
                 //   let msgplayprize

                    break;
            
                case 7:
                 
                    let msgbulletin = bulletinmsg.decode(messagePacket.messages)

                    break;
                
                case 8:
                
                    let msgerror = errinfomsg.decode(messagePacket.messages)

                    break;
                }

        }


}
