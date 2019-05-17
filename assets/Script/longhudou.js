/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.msg = (function() {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    var msg = {};

    msg.MessagePackage = (function() {

        /**
         * Properties of a MessagePackage.
         * @memberof msg
         * @interface IMessagePackage
         * @property {Uint8Array|null} [messages] MessagePackage messages
         * @property {msg.MessagePackage.MessageType|null} [messagetype] MessagePackage messagetype
         */

        /**
         * Constructs a new MessagePackage.
         * @memberof msg
         * @classdesc Represents a MessagePackage.
         * @implements IMessagePackage
         * @constructor
         * @param {msg.IMessagePackage=} [properties] Properties to set
         */
        function MessagePackage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessagePackage messages.
         * @member {Uint8Array} messages
         * @memberof msg.MessagePackage
         * @instance
         */
        MessagePackage.prototype.messages = $util.newBuffer([]);

        /**
         * MessagePackage messagetype.
         * @member {msg.MessagePackage.MessageType} messagetype
         * @memberof msg.MessagePackage
         * @instance
         */
        MessagePackage.prototype.messagetype = 0;

        /**
         * Creates a new MessagePackage instance using the specified properties.
         * @function create
         * @memberof msg.MessagePackage
         * @static
         * @param {msg.IMessagePackage=} [properties] Properties to set
         * @returns {msg.MessagePackage} MessagePackage instance
         */
        MessagePackage.create = function create(properties) {
            return new MessagePackage(properties);
        };

        /**
         * Encodes the specified MessagePackage message. Does not implicitly {@link msg.MessagePackage.verify|verify} messages.
         * @function encode
         * @memberof msg.MessagePackage
         * @static
         * @param {msg.IMessagePackage} message MessagePackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessagePackage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.hasOwnProperty("messages"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.messages);
            if (message.messagetype != null && message.hasOwnProperty("messagetype"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.messagetype);
            return writer;
        };

        /**
         * Encodes the specified MessagePackage message, length delimited. Does not implicitly {@link msg.MessagePackage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MessagePackage
         * @static
         * @param {msg.IMessagePackage} message MessagePackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessagePackage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessagePackage message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MessagePackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MessagePackage} MessagePackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessagePackage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MessagePackage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messages = reader.bytes();
                    break;
                case 2:
                    message.messagetype = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        MessagePackage.testData = function testData(buff,callback){


                    var reader = new FileReader();
                    reader.readAsArrayBuffer(buff)
                    reader.onload = function (e){

                       var data = new Uint8Array(reader.result);

                            callback(buff);
                    }


        };

        MessagePackage.receiveData = function receiveData(data,callback){

                        var reader = new FileReader();
                          reader.readAsArrayBuffer(data);
                          reader.onload = function (e) {
                               var buf = new Uint8Array(reader.result);
                                
                               callback(buf)
                         }

        }


        MessagePackage.print = function print(){

                console.log('print is used');

                return 1;
            };

        /**
         * Decodes a MessagePackage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MessagePackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MessagePackage} MessagePackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessagePackage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessagePackage message.
         * @function verify
         * @memberof msg.MessagePackage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessagePackage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages"))
                if (!(message.messages && typeof message.messages.length === "number" || $util.isString(message.messages)))
                    return "messages: buffer expected";
            if (message.messagetype != null && message.hasOwnProperty("messagetype"))
                switch (message.messagetype) {
                default:
                    return "messagetype: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 7:
                case 8:
                    break;
                }
            return null;
        };

        /**
         * Creates a MessagePackage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MessagePackage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MessagePackage} MessagePackage
         */
        MessagePackage.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MessagePackage)
                return object;
            var message = new $root.msg.MessagePackage();
            if (object.messages != null)
                if (typeof object.messages === "string")
                    $util.base64.decode(object.messages, message.messages = $util.newBuffer($util.base64.length(object.messages)), 0);
                else if (object.messages.length)
                    message.messages = object.messages;
            switch (object.messagetype) {
            case "Default":
            case 0:
                message.messagetype = 0;
                break;
            case "RoomInfo":
            case 1:
                message.messagetype = 1;
                break;
            case "PlayerInfo":
            case 2:
                message.messagetype = 2;
                break;
            case "PrizeInfo":
            case 3:
                message.messagetype = 3;
                break;
            case "GameTime":
            case 4:
                message.messagetype = 4;
                break;
            case "PlayerPrize":
            case 5:
                message.messagetype = 5;
                break;
            case "Bulletin":
            case 7:
                message.messagetype = 7;
                break;
            case "ErrInfo":
            case 8:
                message.messagetype = 8;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a MessagePackage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MessagePackage
         * @static
         * @param {msg.MessagePackage} message MessagePackage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessagePackage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.messages = "";
                else {
                    object.messages = [];
                    if (options.bytes !== Array)
                        object.messages = $util.newBuffer(object.messages);
                }
                object.messagetype = options.enums === String ? "Default" : 0;
            }
            if (message.messages != null && message.hasOwnProperty("messages"))
                object.messages = options.bytes === String ? $util.base64.encode(message.messages, 0, message.messages.length) : options.bytes === Array ? Array.prototype.slice.call(message.messages) : message.messages;
            if (message.messagetype != null && message.hasOwnProperty("messagetype"))
                object.messagetype = options.enums === String ? $root.msg.MessagePackage.MessageType[message.messagetype] : message.messagetype;
            return object;
        };

        /**
         * Converts this MessagePackage to JSON.
         * @function toJSON
         * @memberof msg.MessagePackage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessagePackage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MessageType enum.
         * @name msg.MessagePackage.MessageType
         * @enum {string}
         * @property {number} Default=0 Default value
         * @property {number} RoomInfo=1 RoomInfo value
         * @property {number} PlayerInfo=2 PlayerInfo value
         * @property {number} PrizeInfo=3 PrizeInfo value
         * @property {number} GameTime=4 GameTime value
         * @property {number} PlayerPrize=5 PlayerPrize value
         * @property {number} Bulletin=7 Bulletin value
         * @property {number} ErrInfo=8 ErrInfo value
         */
        MessagePackage.MessageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Default"] = 0;
            values[valuesById[1] = "RoomInfo"] = 1;
            values[valuesById[2] = "PlayerInfo"] = 2;
            values[valuesById[3] = "PrizeInfo"] = 3;
            values[valuesById[4] = "GameTime"] = 4;
            values[valuesById[5] = "PlayerPrize"] = 5;
            values[valuesById[7] = "Bulletin"] = 7;
            values[valuesById[8] = "ErrInfo"] = 8;
            return values;
        })();

        return MessagePackage;
    })();

    msg.Room = (function() {

        /**
         * Properties of a Room.
         * @memberof msg
         * @interface IRoom
         * @property {number|null} [Id] Room Id
         * @property {string|null} [Serpent] Room Serpent
         * @property {string|null} [Tiger] Room Tiger
         * @property {Array.<msg.IPlayer>|null} [Players] Room Players
         */

        /**
         * Constructs a new Room.
         * @memberof msg
         * @classdesc Represents a Room.
         * @implements IRoom
         * @constructor
         * @param {msg.IRoom=} [properties] Properties to set
         */
        function Room(properties) {
            this.Players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Room Id.
         * @member {number} Id
         * @memberof msg.Room
         * @instance
         */
        Room.prototype.Id = 0;

        /**
         * Room Serpent.
         * @member {string} Serpent
         * @memberof msg.Room
         * @instance
         */
        Room.prototype.Serpent = "";

        /**
         * Room Tiger.
         * @member {string} Tiger
         * @memberof msg.Room
         * @instance
         */
        Room.prototype.Tiger = "";

        /**
         * Room Players.
         * @member {Array.<msg.IPlayer>} Players
         * @memberof msg.Room
         * @instance
         */
        Room.prototype.Players = $util.emptyArray;

        /**
         * Creates a new Room instance using the specified properties.
         * @function create
         * @memberof msg.Room
         * @static
         * @param {msg.IRoom=} [properties] Properties to set
         * @returns {msg.Room} Room instance
         */
        Room.create = function create(properties) {
            return new Room(properties);
        };

        /**
         * Encodes the specified Room message. Does not implicitly {@link msg.Room.verify|verify} messages.
         * @function encode
         * @memberof msg.Room
         * @static
         * @param {msg.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.Serpent != null && message.hasOwnProperty("Serpent"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Serpent);
            if (message.Tiger != null && message.hasOwnProperty("Tiger"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Tiger);
            if (message.Players != null && message.Players.length)
                for (var i = 0; i < message.Players.length; ++i)
                    $root.msg.Player.encode(message.Players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link msg.Room.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Room
         * @static
         * @param {msg.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Room();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.int32();
                    break;
                case 2:
                    message.Serpent = reader.string();
                    break;
                case 3:
                    message.Tiger = reader.string();
                    break;
                case 4:
                    if (!(message.Players && message.Players.length))
                        message.Players = [];
                    message.Players.push($root.msg.Player.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Room message.
         * @function verify
         * @memberof msg.Room
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Room.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isInteger(message.Id))
                    return "Id: integer expected";
            if (message.Serpent != null && message.hasOwnProperty("Serpent"))
                if (!$util.isString(message.Serpent))
                    return "Serpent: string expected";
            if (message.Tiger != null && message.hasOwnProperty("Tiger"))
                if (!$util.isString(message.Tiger))
                    return "Tiger: string expected";
            if (message.Players != null && message.hasOwnProperty("Players")) {
                if (!Array.isArray(message.Players))
                    return "Players: array expected";
                for (var i = 0; i < message.Players.length; ++i) {
                    var error = $root.msg.Player.verify(message.Players[i]);
                    if (error)
                        return "Players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Room message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Room
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Room} Room
         */
        Room.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Room)
                return object;
            var message = new $root.msg.Room();
            if (object.Id != null)
                message.Id = object.Id | 0;
            if (object.Serpent != null)
                message.Serpent = String(object.Serpent);
            if (object.Tiger != null)
                message.Tiger = String(object.Tiger);
            if (object.Players) {
                if (!Array.isArray(object.Players))
                    throw TypeError(".msg.Room.Players: array expected");
                message.Players = [];
                for (var i = 0; i < object.Players.length; ++i) {
                    if (typeof object.Players[i] !== "object")
                        throw TypeError(".msg.Room.Players: object expected");
                    message.Players[i] = $root.msg.Player.fromObject(object.Players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Room message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Room
         * @static
         * @param {msg.Room} message Room
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Room.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Players = [];
            if (options.defaults) {
                object.Id = 0;
                object.Serpent = "";
                object.Tiger = "";
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                object.Id = message.Id;
            if (message.Serpent != null && message.hasOwnProperty("Serpent"))
                object.Serpent = message.Serpent;
            if (message.Tiger != null && message.hasOwnProperty("Tiger"))
                object.Tiger = message.Tiger;
            if (message.Players && message.Players.length) {
                object.Players = [];
                for (var j = 0; j < message.Players.length; ++j)
                    object.Players[j] = $root.msg.Player.toObject(message.Players[j], options);
            }
            return object;
        };

        /**
         * Converts this Room to JSON.
         * @function toJSON
         * @memberof msg.Room
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Room.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Room;
    })();

    msg.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof msg
         * @interface IPlayer
         * @property {string|null} [Name] Player Name
         * @property {number|null} [Money] Player Money
         */

        /**
         * Constructs a new Player.
         * @memberof msg
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {msg.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player Name.
         * @member {string} Name
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.Name = "";

        /**
         * Player Money.
         * @member {number} Money
         * @memberof msg.Player
         * @instance
         */
        Player.prototype.Money = 0;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof msg.Player
         * @static
         * @param {msg.IPlayer=} [properties] Properties to set
         * @returns {msg.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link msg.Player.verify|verify} messages.
         * @function encode
         * @memberof msg.Player
         * @static
         * @param {msg.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Money);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link msg.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Player
         * @static
         * @param {msg.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.Money = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof msg.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money))
                    return "Money: integer expected";
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Player)
                return object;
            var message = new $root.msg.Player();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Money != null)
                message.Money = object.Money | 0;
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Player
         * @static
         * @param {msg.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Name = "";
                object.Money = 0;
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Money != null && message.hasOwnProperty("Money"))
                object.Money = message.Money;
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof msg.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    msg.Prize = (function() {

        /**
         * Properties of a Prize.
         * @memberof msg
         * @interface IPrize
         * @property {number|null} [Left] Prize Left
         * @property {number|null} [Right] Prize Right
         * @property {number|null} [Amid] Prize Amid
         */

        /**
         * Constructs a new Prize.
         * @memberof msg
         * @classdesc Represents a Prize.
         * @implements IPrize
         * @constructor
         * @param {msg.IPrize=} [properties] Properties to set
         */
        function Prize(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Prize Left.
         * @member {number} Left
         * @memberof msg.Prize
         * @instance
         */
        Prize.prototype.Left = 0;

        /**
         * Prize Right.
         * @member {number} Right
         * @memberof msg.Prize
         * @instance
         */
        Prize.prototype.Right = 0;

        /**
         * Prize Amid.
         * @member {number} Amid
         * @memberof msg.Prize
         * @instance
         */
        Prize.prototype.Amid = 0;

        /**
         * Creates a new Prize instance using the specified properties.
         * @function create
         * @memberof msg.Prize
         * @static
         * @param {msg.IPrize=} [properties] Properties to set
         * @returns {msg.Prize} Prize instance
         */
        Prize.create = function create(properties) {
            return new Prize(properties);
        };

        /**
         * Encodes the specified Prize message. Does not implicitly {@link msg.Prize.verify|verify} messages.
         * @function encode
         * @memberof msg.Prize
         * @static
         * @param {msg.IPrize} message Prize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Prize.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Left != null && message.hasOwnProperty("Left"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Left);
            if (message.Right != null && message.hasOwnProperty("Right"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Right);
            if (message.Amid != null && message.hasOwnProperty("Amid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Amid);
            return writer;
        };

        /**
         * Encodes the specified Prize message, length delimited. Does not implicitly {@link msg.Prize.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Prize
         * @static
         * @param {msg.IPrize} message Prize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Prize.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Prize message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Prize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Prize} Prize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Prize.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Prize();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Left = reader.int32();
                    break;
                case 2:
                    message.Right = reader.int32();
                    break;
                case 3:
                    message.Amid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Prize message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Prize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Prize} Prize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Prize.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Prize message.
         * @function verify
         * @memberof msg.Prize
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Prize.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Left != null && message.hasOwnProperty("Left"))
                if (!$util.isInteger(message.Left))
                    return "Left: integer expected";
            if (message.Right != null && message.hasOwnProperty("Right"))
                if (!$util.isInteger(message.Right))
                    return "Right: integer expected";
            if (message.Amid != null && message.hasOwnProperty("Amid"))
                if (!$util.isInteger(message.Amid))
                    return "Amid: integer expected";
            return null;
        };

        /**
         * Creates a Prize message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Prize
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Prize} Prize
         */
        Prize.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Prize)
                return object;
            var message = new $root.msg.Prize();
            if (object.Left != null)
                message.Left = object.Left | 0;
            if (object.Right != null)
                message.Right = object.Right | 0;
            if (object.Amid != null)
                message.Amid = object.Amid | 0;
            return message;
        };

        /**
         * Creates a plain object from a Prize message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Prize
         * @static
         * @param {msg.Prize} message Prize
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Prize.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Left = 0;
                object.Right = 0;
                object.Amid = 0;
            }
            if (message.Left != null && message.hasOwnProperty("Left"))
                object.Left = message.Left;
            if (message.Right != null && message.hasOwnProperty("Right"))
                object.Right = message.Right;
            if (message.Amid != null && message.hasOwnProperty("Amid"))
                object.Amid = message.Amid;
            return object;
        };

        /**
         * Converts this Prize to JSON.
         * @function toJSON
         * @memberof msg.Prize
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Prize.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Prize;
    })();

    msg.GameTime = (function() {

        /**
         * Properties of a GameTime.
         * @memberof msg
         * @interface IGameTime
         * @property {number|null} [time] GameTime time
         * @property {msg.GameTime.TimeType|null} [timeType] GameTime timeType
         */

        /**
         * Constructs a new GameTime.
         * @memberof msg
         * @classdesc Represents a GameTime.
         * @implements IGameTime
         * @constructor
         * @param {msg.IGameTime=} [properties] Properties to set
         */
        function GameTime(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameTime time.
         * @member {number} time
         * @memberof msg.GameTime
         * @instance
         */
        GameTime.prototype.time = 0;

        /**
         * GameTime timeType.
         * @member {msg.GameTime.TimeType} timeType
         * @memberof msg.GameTime
         * @instance
         */
        GameTime.prototype.timeType = 0;

        /**
         * Creates a new GameTime instance using the specified properties.
         * @function create
         * @memberof msg.GameTime
         * @static
         * @param {msg.IGameTime=} [properties] Properties to set
         * @returns {msg.GameTime} GameTime instance
         */
        GameTime.create = function create(properties) {
            return new GameTime(properties);
        };

        /**
         * Encodes the specified GameTime message. Does not implicitly {@link msg.GameTime.verify|verify} messages.
         * @function encode
         * @memberof msg.GameTime
         * @static
         * @param {msg.IGameTime} message GameTime message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameTime.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.time);
            if (message.timeType != null && message.hasOwnProperty("timeType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.timeType);
            return writer;
        };

        /**
         * Encodes the specified GameTime message, length delimited. Does not implicitly {@link msg.GameTime.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GameTime
         * @static
         * @param {msg.IGameTime} message GameTime message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameTime.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameTime message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GameTime
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GameTime} GameTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameTime.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GameTime();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time = reader.int32();
                    break;
                case 2:
                    message.timeType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameTime message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GameTime
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GameTime} GameTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameTime.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameTime message.
         * @function verify
         * @memberof msg.GameTime
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameTime.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            if (message.timeType != null && message.hasOwnProperty("timeType"))
                switch (message.timeType) {
                default:
                    return "timeType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a GameTime message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GameTime
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GameTime} GameTime
         */
        GameTime.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GameTime)
                return object;
            var message = new $root.msg.GameTime();
            if (object.time != null)
                message.time = object.time | 0;
            switch (object.timeType) {
            case "Default":
            case 0:
                message.timeType = 0;
                break;
            case "GameStar":
            case 1:
                message.timeType = 1;
                break;
            case "RoundEnd":
            case 2:
                message.timeType = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a GameTime message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GameTime
         * @static
         * @param {msg.GameTime} message GameTime
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameTime.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.time = 0;
                object.timeType = options.enums === String ? "Default" : 0;
            }
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.timeType != null && message.hasOwnProperty("timeType"))
                object.timeType = options.enums === String ? $root.msg.GameTime.TimeType[message.timeType] : message.timeType;
            return object;
        };

        /**
         * Converts this GameTime to JSON.
         * @function toJSON
         * @memberof msg.GameTime
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameTime.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * TimeType enum.
         * @name msg.GameTime.TimeType
         * @enum {string}
         * @property {number} Default=0 Default value
         * @property {number} GameStar=1 GameStar value
         * @property {number} RoundEnd=2 RoundEnd value
         */
        GameTime.TimeType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Default"] = 0;
            values[valuesById[1] = "GameStar"] = 1;
            values[valuesById[2] = "RoundEnd"] = 2;
            return values;
        })();

        return GameTime;
    })();

    msg.Bulletin = (function() {

        /**
         * Properties of a Bulletin.
         * @memberof msg
         * @interface IBulletin
         * @property {number|null} [Bull] Bulletin Bull
         * @property {msg.Bulletin.BullType|null} [bullType] Bulletin bullType
         */

        /**
         * Constructs a new Bulletin.
         * @memberof msg
         * @classdesc Represents a Bulletin.
         * @implements IBulletin
         * @constructor
         * @param {msg.IBulletin=} [properties] Properties to set
         */
        function Bulletin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bulletin Bull.
         * @member {number} Bull
         * @memberof msg.Bulletin
         * @instance
         */
        Bulletin.prototype.Bull = 0;

        /**
         * Bulletin bullType.
         * @member {msg.Bulletin.BullType} bullType
         * @memberof msg.Bulletin
         * @instance
         */
        Bulletin.prototype.bullType = 0;

        /**
         * Creates a new Bulletin instance using the specified properties.
         * @function create
         * @memberof msg.Bulletin
         * @static
         * @param {msg.IBulletin=} [properties] Properties to set
         * @returns {msg.Bulletin} Bulletin instance
         */
        Bulletin.create = function create(properties) {
            return new Bulletin(properties);
        };

        /**
         * Encodes the specified Bulletin message. Does not implicitly {@link msg.Bulletin.verify|verify} messages.
         * @function encode
         * @memberof msg.Bulletin
         * @static
         * @param {msg.IBulletin} message Bulletin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bulletin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Bull != null && message.hasOwnProperty("Bull"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Bull);
            if (message.bullType != null && message.hasOwnProperty("bullType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bullType);
            return writer;
        };

        /**
         * Encodes the specified Bulletin message, length delimited. Does not implicitly {@link msg.Bulletin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Bulletin
         * @static
         * @param {msg.IBulletin} message Bulletin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bulletin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bulletin message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Bulletin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Bulletin} Bulletin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bulletin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Bulletin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Bull = reader.int32();
                    break;
                case 2:
                    message.bullType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bulletin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Bulletin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Bulletin} Bulletin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bulletin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bulletin message.
         * @function verify
         * @memberof msg.Bulletin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bulletin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Bull != null && message.hasOwnProperty("Bull"))
                if (!$util.isInteger(message.Bull))
                    return "Bull: integer expected";
            if (message.bullType != null && message.hasOwnProperty("bullType"))
                switch (message.bullType) {
                default:
                    return "bullType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a Bulletin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Bulletin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Bulletin} Bulletin
         */
        Bulletin.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Bulletin)
                return object;
            var message = new $root.msg.Bulletin();
            if (object.Bull != null)
                message.Bull = object.Bull | 0;
            switch (object.bullType) {
            case "Default":
            case 0:
                message.bullType = 0;
                break;
            case "Banker":
            case 1:
                message.bullType = 1;
                break;
            case "Idle":
            case 2:
                message.bullType = 2;
                break;
            case "Mix":
            case 3:
                message.bullType = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Bulletin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Bulletin
         * @static
         * @param {msg.Bulletin} message Bulletin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bulletin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Bull = 0;
                object.bullType = options.enums === String ? "Default" : 0;
            }
            if (message.Bull != null && message.hasOwnProperty("Bull"))
                object.Bull = message.Bull;
            if (message.bullType != null && message.hasOwnProperty("bullType"))
                object.bullType = options.enums === String ? $root.msg.Bulletin.BullType[message.bullType] : message.bullType;
            return object;
        };

        /**
         * Converts this Bulletin to JSON.
         * @function toJSON
         * @memberof msg.Bulletin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bulletin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * BullType enum.
         * @name msg.Bulletin.BullType
         * @enum {string}
         * @property {number} Default=0 Default value
         * @property {number} Banker=1 Banker value
         * @property {number} Idle=2 Idle value
         * @property {number} Mix=3 Mix value
         */
        Bulletin.BullType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Default"] = 0;
            values[valuesById[1] = "Banker"] = 1;
            values[valuesById[2] = "Idle"] = 2;
            values[valuesById[3] = "Mix"] = 3;
            return values;
        })();

        return Bulletin;
    })();

    msg.ErrInfo = (function() {

        /**
         * Properties of an ErrInfo.
         * @memberof msg
         * @interface IErrInfo
         * @property {string|null} [ErrPlayer] ErrInfo ErrPlayer
         */

        /**
         * Constructs a new ErrInfo.
         * @memberof msg
         * @classdesc Represents an ErrInfo.
         * @implements IErrInfo
         * @constructor
         * @param {msg.IErrInfo=} [properties] Properties to set
         */
        function ErrInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrInfo ErrPlayer.
         * @member {string} ErrPlayer
         * @memberof msg.ErrInfo
         * @instance
         */
        ErrInfo.prototype.ErrPlayer = "";

        /**
         * Creates a new ErrInfo instance using the specified properties.
         * @function create
         * @memberof msg.ErrInfo
         * @static
         * @param {msg.IErrInfo=} [properties] Properties to set
         * @returns {msg.ErrInfo} ErrInfo instance
         */
        ErrInfo.create = function create(properties) {
            return new ErrInfo(properties);
        };

        /**
         * Encodes the specified ErrInfo message. Does not implicitly {@link msg.ErrInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.ErrInfo
         * @static
         * @param {msg.IErrInfo} message ErrInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ErrPlayer != null && message.hasOwnProperty("ErrPlayer"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ErrPlayer);
            return writer;
        };

        /**
         * Encodes the specified ErrInfo message, length delimited. Does not implicitly {@link msg.ErrInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ErrInfo
         * @static
         * @param {msg.IErrInfo} message ErrInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ErrInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ErrInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ErrInfo} ErrInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ErrInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ErrPlayer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ErrInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ErrInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ErrInfo} ErrInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ErrInfo message.
         * @function verify
         * @memberof msg.ErrInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ErrInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ErrPlayer != null && message.hasOwnProperty("ErrPlayer"))
                if (!$util.isString(message.ErrPlayer))
                    return "ErrPlayer: string expected";
            return null;
        };

        /**
         * Creates an ErrInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ErrInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ErrInfo} ErrInfo
         */
        ErrInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ErrInfo)
                return object;
            var message = new $root.msg.ErrInfo();
            if (object.ErrPlayer != null)
                message.ErrPlayer = String(object.ErrPlayer);
            return message;
        };

        /**
         * Creates a plain object from an ErrInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ErrInfo
         * @static
         * @param {msg.ErrInfo} message ErrInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ErrInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ErrPlayer = "";
            if (message.ErrPlayer != null && message.hasOwnProperty("ErrPlayer"))
                object.ErrPlayer = message.ErrPlayer;
            return object;
        };

        /**
         * Converts this ErrInfo to JSON.
         * @function toJSON
         * @memberof msg.ErrInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ErrInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ErrInfo;
    })();

    return msg;
})();

module.exports = $root;
