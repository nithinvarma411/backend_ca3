import express from 'express';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Test the login process using postman or bruno at /login route");
})

app.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;

        if (!email) {
            return res.status(400).send({"message": "Email cannot be empty"});
        }

        if (!password) {
            return res.status(400).send({"message": "Password cannot be empty"});
        }
        
        const user = {email, password}
        return res.status(200).send({"message": "Login Successfull", user});
    } catch (error) {
        console.error("error during login", error);
        return res.status(500).send({"message": "Internal Server Error"})
    }
})

app.listen(5000, async (req, res) => {
    try {
        console.log("server running on port 5000");
    } catch (error) {
        console.error(error);
        return res.status(500).send({"message": "Internal Server Error"});
    }
})