let chai = require('chai');
let chaiHttp = require('chai-http');
import app from "../index.js";

// Configure chai
chai.use(chaiHttp);
chai.should();

var test_id;

describe("Test", () => {
    describe("GET /", () => {
        //Test to get all contacts record
        it("should get all contacts record", (done) => {
            try {
                chai.request(app)
                    .get('/api/contacts')
                    .end((err, res) => {
                        res.should.have.status(200);
                        done();
                    });
            } catch (done) {}
            
        });
    });

    describe("POST /", () => {
        //Test to post a contact record
        it("should post a contacts record", (done) => {
            try {
                chai.request(app)
                    .post('/api/contacts/add')
                    .send({name : "testPerson"})
                    .end((err, res) => {
                        //console.log(res);
                        res.should.have.status(200);
                        test_id = res.body.data._id;
                        
                        done();
                    });
            } catch (done) { }

        });
    });

    describe("PUT /", () => {
        //Test to update a contact record
        it("should update a contact record", (done) => {
            try {
                chai.request(app)
                    .put('/api/contacts/update/' + test_id)
                    .send({ name: "updatedPerson" })
                    .end((err, res) => {
                        res.should.have.status(200);
                        done();
                    });
            } catch (done) { }

        });
    });

    describe("DELETE /", () => {
        //Test to delete a contact record
        it("should delete a contact record", (done) => {
            try {
                chai.request(app)
                    .delete('/api/contacts/delete/' + test_id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        done();
                    });
            } catch (done) { }

        });
    });
});