require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const db = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json()); // To read post requests
app.use(express.urlencoded({ extended: true }));

/*  Read Operation */
app.get('/',async (req,res)=>{

    try{
        const results = await db.query("select * from c_and_r");

       
        res.status(200).json({
            status : "Success",
            results : results.rowCount,
            data : {
                list : results.rows,
            }
        });
        }
        catch(err){
            res.status(400).json({
                error : err
            });
        };
    });


/*  Create Operation */
app.post('/create',async (req,res)=>{
    try{
        console.log(req.body);
        const results = await db.query("INSERT INTO c_and_r (name,comment,rating) values($1,$2,$3) returning *", [req.body.name, req.body.comment, req.body.rating]);
        res.status(200).json({
            status : "Success",
        });
        }
        catch(err){
                console.log(err);
                res.status(400).json({
                error : err
            });
        };
});



/* Delete an user */
app.post("/delete", async (req,res)=>{
    console.log(req.body.name);
    try{
        const results = await db.query("DELETE FROM signup_tbl  where email = $1", [req.body.email]);
        res.status(200).json({
            status : "Success",
        });
        }
        catch(err){
            res.status(400).json({
                error : err
            });
        };
});
app.listen(5000,()=>{
    console.log(`Server Started on port 5000`);
});