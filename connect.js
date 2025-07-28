const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'workshop_pos_db2', // Database Name
    'workshop_pos_db2', // Username
    'BZ6w1ihT0jmR4r8a4W6OAHLXvdbhhJCS', // Password (สำคัญมาก: ควรเป็น Environment Variable)
    {
        host: 'dpg-d23mt6u3jp1c73a3ocj0-a.oregon-postgres.render.com', // External Hostname ของ Render
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,           // บังคับใช้ SSL (จำเป็นสำหรับ Render)
                rejectUnauthorized: false // อนุญาตการเชื่อมต่อแม้ว่า Certificate จะไม่ได้รับการรับรองโดยตรง (จำเป็นสำหรับ Render)
            }
        }
    }
);

module.exports = sequelize;
