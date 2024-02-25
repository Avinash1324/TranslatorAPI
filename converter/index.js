
const { translate } = require('free-translate');
const express = require("express");
async function translatedText(str, translateTo) {

    const translatedStr = await translate(str, translateTo)
    return translatedStr;
}
const app = express();
app.use(express.json());


app.post('/translator', async (req, resp) => {
    const { text } = req.body;
    
    const translatedstr = await translatedText(text, { from: 'en', to: 'fr' });
    let result = translatedstr;

    if (result) {
        
        console.log(result)
        resp.status(200).send({ translated: result });
    } else {
        resp.status(400).send({ error: "Invalid Text" });
    }
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
})





