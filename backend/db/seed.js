import dotenv from "dotenv";
import dbService from "./mongo.js";

dotenv.config();

await dbService.initializeDb();
const db = await dbService.getDb();

const seedProductsDb = async () => {
  const seedProducts = [
    {
      id: 1,
      name: "Flores na Caixa 1",
      priceBefore: 79.89,
      price: 59.99,
      cover: ["assets/flores1.jpg"],
      textDetail: "Caixa com lírio, girassol e rosas. ",
    },
    {
      id: 2,
      name: "Flores na Caixa 2",
      priceBefore: 61.2,
      price: 50.99,
      cover: ["assets/flores2.jpg"],
      textDetail: "Rosas e flores do campo.",
    },
    {
      id: 3,
      name: "Flores na Caixa 3",
      priceBefore: 66.9,
      price: 52.9,
      cover: ["assets/flores3.jpg"],
      textDetail: "Rosas e gypsophila.",
    },
    {
      id: 4,
      name: "Flores na Caixa 4",
      priceBefore: 79.9,
      price: 62,
      cover: ["assets/flores4.jpg"],
      textDetail: "Flores diversas.",
    },
    {
      id: 5,
      name: "Flores na Caixa 5 ",
      priceBefore: 114.9,
      price: 92.3,
      cover: ["assets/flores5.jpg"],
      textDetail: "Rosas",
    },
    {
      id: 6,
      name: "Flores na Caixa 6",
      priceBefore: 79.9,
      price: 62.0,
      cover: ["assets/flores6.jpeg"],
      textDetail: "Flores do campo.",
    },
    {
      id: 7,
      name: "Flores na Caixa 7",
      priceBefore: 59.9,
      price: 48.79,
      cover: ["assets/flores7.jpg"],
      textDetail: "Margaridas e flores do campo.",
    },
    {
      id: 8,
      name: "Flores na Caixa 8",
      priceBefore: 78.0,
      price: 64.2,
      cover: ["assets/flores8.jpg"],
      textDetail: "Rosas e lírio.",
    },
    {
      id: 9,
      name: "Flores na Caixa 9",
      priceBefore: 70.9,
      price: 59.1,
      cover: ["assets/flores9.jpg"],
      textDetail: "Rosas e mini rosas.",
    },
    {
      id: 10,
      name: "Flores na Caixa 10",
      priceBefore: 90.8,
      price: 80.1,
      cover: ["assets/flores10.jpg"],
      textDetail: "Rosas e flores do campo.",
    },
    {
      id: 11,
      name: "Flores na Caixa 11",
      priceBefore: 78.9,
      price: 60.2,
      cover: ["assets/flores11.jpg"],
      textDetail: "Rosas",
    },
    {
      id: 12,
      name: "Flores na Caixa 12",
      priceBefore: 80.6,
      price: 62.95,
      cover: ["assets/flores12.jpg"],
      textDetail: "Rosas",
    },
  ];

  try {
    // CLEAR DB:
    console.log("\nClearing DB...");
    await db.collection("products").deleteMany();
    console.log("DB clean!\n");

    // SEED DB:
    console.log("Seeding DB...");
    await db.collection("products").insertMany(seedProducts);
    console.log("DB seeded!");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

await seedProductsDb();
