const request = require("supertest")("https://dummyjson.com");
const expect = require("chai").expect;

describe("Test Dummy API", function(){ //test scenario
    //test cases
    it("Get All Products", async function(){
        const response = await request
        .get("/products")
        .send();

        expect(response.status).to.eql(200)
    })
    it("Add Product", async function(){
        const response = await request
        .post("/products/add")
        .set('Content-Type', 'application/json')
        .send({
            title: 'Laptop Baru'
        });

        expect(response.status).to.eql(200);
    })
})