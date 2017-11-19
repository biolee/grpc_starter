# grpc_starter

假设有一个使用gRPC的项目有这几个proto文件`path3/path4/demo.proto`，`path1/path2/demo.proto`,`path1/path2/lib.proto`，目标语言是Go,Java,Python,Typescript/Javascript

# gRPC Protobuf package 最佳实践

## 准备
```bash
# General
# install protobuf,gRPC

## Go
go get -u github.com/golang/protobuf/{proto,protoc-gen-go}
go get -u google.golang.org/grpc

# Python
pip install protobuf grpcio grpcio grpcio-tools

# Java
## Compiling grpc java codegen
export GRPC_JAVA_SRC_ROOT="指定一个目录，保存gRPC java的代码"
git clone https://github.com/grpc/grpc-java.git ${GRPC_JAVA_SRC_ROOT}
cd ${GRPC_JAVA_SRC_ROOT}/compiler
../gradlew java_pluginExecutable
export PROTOC_GEN_GRPC_JAVA=${GRPC_JAVA_SRC_ROOT}/build/exe/java_plugin/protoc-gen-grpc-java

# Typescript
npm install -g grpc-tools
# 在项目根目录
yarn add google-protobuf @types/google-protobuf  grpc-web-client ts-protoc-gen
```

## proto package 声明

```proto
syntax = "proto3";

// message 的name space, 如果需要使用的message和当前package不同，需要加上message前要加package
package path3.path4;

// GO
// 目标文件将放入github.com/myname/myproj/path3/path4
// import此文件的proto，也将根据此生成引入path
option go_package = "package_path:package_name";
option go_package = "github.com/myname/myproj/path3/path4:path4";

// Java
// 目标文件将放入src/main/java/com/github/biolee/path3/path4/
// import此文件的proto，也将根据此生成引入path
option java_package = "com.github.biolee.path3.path4";

// Python,Javascript
// 生成的Python import 根据proto的import语句生成
import "path1/path2/lib.proto";

```
## compile

```bash
# go
## go的protoc一行命令只能compile一个package
protoc --go_out=. --go_out=plugins=grpc:. path1/path2/*.proto
protoc --go_out=. --go_out=plugins=grpc:. path3/path4/*.proto

# Python
python -m grpc_tools.protoc -I=. --python_out=. --grpc_python_out=. \
	path1/path2/*.proto path3/path4/*.proto

# Java
protoc -I=. \
	--plugin=protoc-gen-grpc-java=${PROTOC_GEN_GRPC_JAVA} \
	--java_out=src/main/java \
	--grpc-java_out=src/main/java \
	path1/path2/*.proto path3/path4/*.proto

# Typescript
protoc -I=. \
	--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
	--js_out=import_style=commonjs,binary:. \
	--ts_out=service=true:. \
	path1/path2/*.proto path3/path4/*.proto
```
