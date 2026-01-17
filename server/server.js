require("dotenv").config();
const express = require('express');
const cors = require('cors')
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router.js')
const serviceRoute = require('./router/service-router.js')
const adminRoute = require("./router/admin-router.js")
const wishlistRoute = require("./router/wishlist-router");
const cartRoute = require("./router/cart-router.js")


const connectDb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");


const corsOptions = {
    origin: [
        "http://localhost:5173",
        // "https://YOUR-NETLIFY-SITE.netlify.app"
        "https://stylekaart.netlify.app"
    ],
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",

};

app.use(cors(corsOptions));
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/form", contactRoute)
app.use("/api/data", serviceRoute)
app.use("/api/admin", adminRoute)
app.use("/api/wishlist", wishlistRoute);
app.use("/api/cart", cartRoute)

// bellow api is for fast working and not to sleep the server on render
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});


app.use(errorMiddleware)

const PORT = process.env.PORT || 7000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listen at port ${PORT}`);
    })
})

