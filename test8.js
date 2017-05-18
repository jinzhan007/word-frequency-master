/**
 * Created by Admin on 2017/4/17.
 */
/*
"use strict"
var _=require("lodash")
var chai=require("chai")
var sinon=require("sinon")
var sinonChai=require("sinon-chai")
var expect=chai.expect
chai.use(sinonChai)

var main=require("./test.js")
*/
describe("fn", function () {
    it("testcase1", function () {
        expect("").toEqual(fn(""));
    });
    it("testcase2", function () {
        expect("��������Ͳ����ַ���").toEqual(fn(123));
    });
    it("testcase3", function () {
        expect("��������Ͳ����ַ���").toEqual(fn(12.3));
    });
    it("testcase4", function () {
        var testarry=new Array([1,"2"])
        expect("��������Ͳ����ַ���").toEqual(fn(testarry));
    });
    it("testcase5", function () {
        expect("�벻Ҫ������д").toEqual(fn("it's a Pig"));
    });
    it("testcase6", function () {
        expect("it 1\nis 1\na 1\npig 1\n").toEqual(fn("IT     IS A PIG"));
    });
    it("testcase7", function () {
        expect("������ַ��������Ƿ��ַ�").toEqual(fn("IT% IS A PIG"));
    });
    it("testcase8", function () {
        expect("������ַ��������Ƿ��ַ�").toEqual(fn("it is a pig,it is cute"));
    });
});