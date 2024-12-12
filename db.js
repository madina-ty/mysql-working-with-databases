const mysql = require('mysql2'); 
const pool = mysql.createPool({ 
    host: 'srv1.lapse.site', 
    user: 'lapse_itstep', 
    password: 'o3F[fAnOX[AyQ1+7', 
    database: 'lapse_itstep', 
    waitForConnections: true, 
    connectionLimit: 10, 
    queueLimit: 0       
}); 
module.exports = pool.promise();