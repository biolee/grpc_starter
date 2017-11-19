// package: path1.path2
// file: path1/path2/demo.proto

import * as jspb from "google-protobuf";
import * as path3_path4_demo_pb from "../../path3/path4/demo_pb";
import * as path1_path2_lib_pb from "../../path1/path2/lib_pb";

export class DemoReq extends jspb.Message {
  hasMessageOne(): boolean;
  clearMessageOne(): void;
  getMessageOne(): path3_path4_demo_pb.MessageOne | undefined;
  setMessageOne(value?: path3_path4_demo_pb.MessageOne): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DemoReq.AsObject;
  static toObject(includeInstance: boolean, msg: DemoReq): DemoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DemoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DemoReq;
  static deserializeBinaryFromReader(message: DemoReq, reader: jspb.BinaryReader): DemoReq;
}

export namespace DemoReq {
  export type AsObject = {
    messageOne?: path3_path4_demo_pb.MessageOne.AsObject,
  }
}

export class DemoResp extends jspb.Message {
  hasMessageOne(): boolean;
  clearMessageOne(): void;
  getMessageOne(): path1_path2_lib_pb.MessageTwo | undefined;
  setMessageOne(value?: path1_path2_lib_pb.MessageTwo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DemoResp.AsObject;
  static toObject(includeInstance: boolean, msg: DemoResp): DemoResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DemoResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DemoResp;
  static deserializeBinaryFromReader(message: DemoResp, reader: jspb.BinaryReader): DemoResp;
}

export namespace DemoResp {
  export type AsObject = {
    messageOne?: path1_path2_lib_pb.MessageTwo.AsObject,
  }
}

