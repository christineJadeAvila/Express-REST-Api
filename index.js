const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const tshirts = [
    { 
        tshirt: "levis",
        size: "size 6"
    },
    
    { 
        tshirt: "levis",
        size: "size 4"
    },

    { 
        tshirt: "levis",
        size: "size 12"
    },
]

app.get('/tshirt', (req, res) => {
    tshirts.forEach(
        tshirt => (
            res.status(200).send(tshirts)
        )
    )
});

tshirts.forEach( tshirt => (console.log(tshirt)))



app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({
            message: 'We need logo!',
        })
    }

    res.send({
        tshirt: `Levis with your ${logo} and ID of ${id}`,
    })

})

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)