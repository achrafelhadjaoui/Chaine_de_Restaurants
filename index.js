const express = require("express")
const path = require("path")
const routerRestoran = require("./Routing/restoranRouting")
const routerTeam = require("./Routing/teamsRouting")
const routerNewsletter = require("./Routing/newsletterRouting")
const routerhome = require("./Routing/homeRouting")
const routerCategorie = require("./Routing/categorieRouting")
const routerRepa = require("./Routing/repaRouting")

const app = express();

app.set("view engine", "ejs")
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));


app.use("/api", routerRestoran)
app.use("/api", routerTeam)
app.use("/api", routerNewsletter)
app.use("/api", routerhome)
app.use("/api", routerCategorie)
app.use("/api", routerRepa)


app.listen(8080, ()=>{
    console.log("server is listninig")
})