// package: path1.path2
// file: path1/path2/lib.proto

import * as jspb from "google-protobuf";

export class MessageTwo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageTwo.AsObject;
  static toObject(includeInstance: boolean, msg: MessageTwo): MessageTwo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageTwo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageTwo;
  static deserializeBinaryFromReader(message: MessageTwo, reader: jspb.BinaryReader): MessageTwo;
}

export namespace MessageTwo {
  export type AsObject = {
    name: string,
  }
}

