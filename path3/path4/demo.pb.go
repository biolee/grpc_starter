// Code generated by protoc-gen-go. DO NOT EDIT.
// source: path3/path4/demo.proto

/*
Package path4 is a generated protocol buffer package.

It is generated from these files:
	path3/path4/demo.proto

It has these top-level messages:
	MessageOne
*/
package path4

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type MessageOne struct {
	Name string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
}

func (m *MessageOne) Reset()                    { *m = MessageOne{} }
func (m *MessageOne) String() string            { return proto.CompactTextString(m) }
func (*MessageOne) ProtoMessage()               {}
func (*MessageOne) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *MessageOne) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func init() {
	proto.RegisterType((*MessageOne)(nil), "path3.MessageOne")
}

func init() { proto.RegisterFile("path3/path4/demo.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 141 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x2b, 0x48, 0x2c, 0xc9,
	0x30, 0xd6, 0x07, 0x91, 0x26, 0xfa, 0x29, 0xa9, 0xb9, 0xf9, 0x7a, 0x05, 0x45, 0xf9, 0x25, 0xf9,
	0x42, 0xac, 0x60, 0x71, 0x25, 0x05, 0x2e, 0x2e, 0xdf, 0xd4, 0xe2, 0xe2, 0xc4, 0xf4, 0x54, 0xff,
	0xbc, 0x54, 0x21, 0x21, 0x2e, 0x96, 0xbc, 0xc4, 0xdc, 0x54, 0x09, 0x46, 0x05, 0x46, 0x0d, 0xce,
	0x20, 0x30, 0xdb, 0x29, 0x90, 0x4b, 0x36, 0x39, 0x3f, 0x57, 0x2f, 0x3d, 0xb3, 0x24, 0xa3, 0x34,
	0x49, 0x2f, 0x29, 0x33, 0x3f, 0x27, 0x35, 0x55, 0x0f, 0xac, 0x19, 0x4c, 0x9a, 0x44, 0x19, 0x40,
	0xa5, 0x92, 0xf3, 0x73, 0xf5, 0x21, 0xd2, 0xfa, 0xe9, 0x45, 0x05, 0xc9, 0xf1, 0xc5, 0x25, 0x89,
	0x45, 0x25, 0xa9, 0x45, 0xfa, 0x48, 0x0e, 0xb0, 0x06, 0x93, 0x49, 0x6c, 0x60, 0x27, 0x18, 0x03,
	0x02, 0x00, 0x00, 0xff, 0xff, 0xc8, 0x3f, 0x10, 0x7f, 0x9c, 0x00, 0x00, 0x00,
}
