const request = require("supertest")("https://dummyjson.com");
const expect = require("chai").expect;
const randomEmail = require("../helper/randomEmail")

function generateRandomName() {
  const randomString = Math.random().toString(36).sunstring(2, 10);
  const randomName = "NamaUser" + randomString 
  return randomName;
}

var email = randomEmail();
var token = {};

describe("Test Kasir Aja API", function () { //test scenario
  //test cases
  it("Verify Successfully Registered to KasirAja", async function () {
    const response = await request.get("/products")
    .send();

    expect(response.status).to.eql(200);
  });
  it("Add Product", async function () {
    const response = await request
      .post("/products/add")
      .set("Content-Type", "application/json")
      .send({
        title: "Laptop Baru",
      });

    expect(response.status).to.eql(200);
  });
});