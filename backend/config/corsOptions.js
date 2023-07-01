import allowedOrigins from "./allowedOrigins.js"

const corsOptions = {
    origin: (origin, callback) => {
        console.log(allowedOrigins);
        console.log(origin);

        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            console.log("not allowed");
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
};

// Set the 'Access-Control-Allow-Origin' header to '*'
corsOptions.origin = '*';
export default corsOptions;
export { corsOptions };