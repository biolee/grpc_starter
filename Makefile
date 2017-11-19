proto:ts go py java

# source local locate
# ${CODE_ROOT}/src/github.com/biolee/grpc_starter

## go的protoc一行命令只能compile一个package
go:
	protoc --go_out=plugins=grpc:${CODE_ROOT}/src \
		path3/path4/*.proto
	protoc --go_out=plugins=grpc:${CODE_ROOT}/src  \
		path1/path2/*.proto

py:
	python -m grpc_tools.protoc -I=. --python_out=. --grpc_python_out=. \
		path1/path2/*.proto path3/path4/*.proto

java:
	protoc -I=. \
		--plugin=protoc-gen-grpc-java=${PROTOC_GEN_GRPC_JAVA} \
		--java_out=src/main/java \
		--grpc-java_out=src/main/java \
		path1/path2/*.proto path3/path4/*.proto

ts:
	protoc -I=. \
		--plugin=protoc-gen-ts=node_modules/.bin/protoc-gen-ts \
		--js_out=import_style=commonjs,binary:. \
		--ts_out=service=true:. \
		path1/path2/*.proto path3/path4/*.proto

