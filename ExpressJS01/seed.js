// node seed.js
const mongoose = require('mongoose');
const Product = require('./src/models/product');

async function seed() {
   await mongoose.connect('mongodb+srv://phatbee:Conheodatnhieutien1%24@potadoption.wtjtbjs.mongodb.net/CNPMMoi_BT04?retryWrites=true&w=majority&appName=PotAdoption', {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         ssl: true,
         tlsAllowInvalidCertificates: false,
       });  

    await Product.deleteMany({});
    const categories = ['skincare', 'makeup', 'fragrance'];
    const items = [];
    for (let i = 1; i <= 120; i++) {
        items.push({
            title: `Product ${i}`,
            description: `Miêu tả product ${i}`,
            price: Math.round(Math.random() * 100000) / 100,
            category: categories[i % categories.length],
            image: null
        });
    }
    await Product.insertMany(items);
    console.log('Seed finished');
    process.exit(0);
}

seed().catch(console.error);
