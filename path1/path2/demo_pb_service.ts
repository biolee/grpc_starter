// package: path1.path2
// file: path1/path2/demo.proto

import * as path1_path2_demo_pb from "../../path1/path2/demo_pb";
import * as path3_path4_demo_pb from "../../path3/path4/demo_pb";
import * as path1_path2_lib_pb from "../../path1/path2/lib_pb";
export class DemoService {
  static serviceName = "path1.path2.DemoService";
}
export namespace DemoService {
  export class Demo {
    static readonly methodName = "Demo";
    static readonly service = DemoService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = path1_path2_demo_pb.DemoReq;
    static readonly responseType = path1_path2_demo_pb.DemoResp;
  }
}
