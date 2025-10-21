const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const cli = new MongoClient(uri);

// async function run() {
//   await client.connect();
//   const adminDB = client.db("testdb").admin();
//   const listDataBases = await adminDB.listDatabases();
//   console.log(listDataBases);
//   return "OK";
// }

// run()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

async function main() {
  try {
    await cli.connect();
    const collection = cli.db("testdb").collection("users");

    const allDocuments = await collection.find({}).toArray();
    console.log("전체 document", allDocuments);

    await collection.insertOne({ name: "Nam", age: 30 });
    console.log("document inserted");

    const documents = await collection.find({ name: "Nam" }).toArray();
    console.log("찾은 document", documents);

    await collection.updateOne({ name: "Nam" }, { $set: { age: 31 } });
    console.log("document updated");

    const updateDocuments = await collection.find({ name: "Nam" }).toArray();
    console.log("업데이트된 document", updateDocuments);

    await collection.deleteOne({ name: "Nam" });
    console.log("document deleted");

    await cli.close();
  } catch (err) {}
}

main();
