const MongoClient = require("mongodb").MongoClient;
// const uri ="mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect(err => {
  if (err) {
    console.log(err);
    return;
  }
  let db = client.db("test").collection("admin");
  db.find({}).toArray((err, data) => {
    console.log(data);
    client.close();
  });
  //   console.log(db.find({}));
  // perform actions on the collection object
});
