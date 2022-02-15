const cors = require('cors');


 const corsOptions = {
        origin:['http://localhost:3000', 'https://livestock-api.herokuapp.com'],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials:false,            //access-control-allow-credentials:true
        optionSuccessStatus:200
     };

module.exports = cors(corsOptions);