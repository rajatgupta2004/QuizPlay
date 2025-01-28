const express=require('express');
const cors = require('cors')
const { GoogleGenerativeAI } = require('@google/generative-ai'); // Assuming DeepSeek is a module you have installed
const app = express();
const db=require('./db');
const bodyParser=require('body-parser');
app.use(cors());
app.use(bodyParser.json());
const PORT=process.env.PORT||3000;

app.get('/',(req,res)=>{   
    res.send('Hello World');
}   );

app.listen(3000,()=>{
    console.log('connected to server 3000');
});


const genAIAPI_KEY = "AIzaSyBGXjOL-mzMD8k1E1aPmzlqYiOD23P8_Do";
const genAI = new GoogleGenerativeAI(genAIAPI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post('/data', async (req, res) => {
    const videoData = req.body;
    let allQuizData = [];

    for (const video of videoData.body) {
        const prompt = `Generate a quiz with 5 different mcq questions in format ( data = { questions:[], options:[], answers:[] } ) according to this text: ${JSON.stringify(video)}`;
        
        try {
            const result = await model.generateContent(prompt);
            const responseText = result.response.text();
            allQuizData.push(responseText);

            console.log(responseText);
        } catch (error) {
            console.error("Error generating quiz for video:", video.id, error);
        }
    }
    console.log(allQuizData);
    res.json({
        result: allQuizData
    });
});