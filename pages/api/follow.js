import fs from "fs";

export default function handler(req, res) {
    var app = req.query.app;
    console.log(app);

    fs.readFile("./data/follow.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        var followData = JSON.parse(data);
        // var appData = followData[app];
        
        // res.status(200).json(followData[app]["title"]  +followData[app]["desc"]  + followData[app]["link"]);
        res.status(200).json(followData[app]);
        // res.status(200).send(appData);
})}