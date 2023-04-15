const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://emoisei1:EfuaUvG2t6mvKYEw@cluster0.qoz7dm6.mongodb.net/test"
);

const start = async () => {
  let projectsDB;
  try {
    await client.connect();

    const projects = client.db().collection("projects");

    const proj = await projects.find().toArray();
    console.log(proj);
  } catch (e) {
    console.log(1111);
    console.log(e);
  } finally {
    await client.close();
  }
  return projectsDB;
};

const projectsFromDB = start().then((res) => console.log(res));

export default projectsFromDB;
