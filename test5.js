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
});