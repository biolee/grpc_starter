// package: path3.path4
// file: path3/path4/demo.proto

import * as jspb from "google-protobuf";

export class MessageOne extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageOne.AsObject;
  static toObject(includeInstance: boolean, msg: MessageOne): MessageOne.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageOne, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageOne;
  static deserializeBinaryFromReader(message: MessageOne, reader: jspb.BinaryReader): MessageOne;
}

export namespace MessageOne {
  export type AsObject = {
    name: string,
  }
}

