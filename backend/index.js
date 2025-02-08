const express=require('express');
const cors = require('cors')
const { GoogleGenerativeAI } = require('@google/generative-ai'); // Assuming DeepSeek is a module you have installed
const app = express();
const db=require('./db');
const bodyParser=require('body-parser');
const User = require('./user');
app.use(cors());
app.use(bodyParser.json());
const PORT=process.env.PORT||3000;

app.get('/',(req,res)=>{   
    res.send('Hello World');
});

app.post('/signup',async(req,res)=>{
    try{
        const data=req.body
        const existingUser = await User.findOne({ email: data.email });
        if (existingUser) {
            return res.status(400).json({ error: 'User with the same email already exists' });
        }
        
        const newUser=new User(data);
        const response=await newUser.save()
        console.log("data saved")
        const payload={
            _id:response._id,
            name:response.name
        }
        console.log(JSON.stringify(payload))
        const token=generateToken(payload);
        console.log("Token is :", token);
        res.status(200).json({response:response,token:token})
    }catch(err){
        console.log(err)
        res.status(500).json({err:"data not saved"})
    }
  })

app.post('/signin',async(req,res)=>{
    try{
        const {username,password}=req.body;
        if(!username||!password){
            return res.status(400).json({error:'username and password are required' });
        }
        const user=await User.findOne({username:username})
        if(!user||!(await user.comparePassword(password))){
            return res.status(401).json({error:"invalid data"})
        }
        const payload={
            _id:user._id,
            username:user.username
        }
        const token=generateToken(payload)
        res.json(token);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }       
})



// Function to clean and convert the raw data into the desired format
function cleanQuizData(rawData) {
    return rawData.map((item, index) => {
        // Extract the JSON string from between the ```json markers
        const jsonString = item.replace(/```json\n|\n```/g, '');
        
      // Parse the cleaned-up JSON
      const parsedData = JSON.parse(jsonString);
  
      // Format it into the desired structure
      return {
          id: (index + 1).toString(), // You can adjust the ID logic as needed
          videoId: (index + 1).toString(), // Adjust this as per your video ID logic
          questions: parsedData.data.questions.map((questionText, qIndex) => ({
              id: (qIndex + 1).toString(),
              text: questionText,
              options: parsedData.data.options[qIndex],
              correctAnswer: parsedData.data.answers[qIndex],
            })),
        };
    });
  }
  
  // Clean and format the quiz data
  
  

  const genAIAPI_KEY = "YOUR_GEMINI_API_KEY";
  const genAI = new GoogleGenerativeAI(genAIAPI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  app.post('/data', async (req, res) => {
      const videoData = req.body;
      let allQuizData = [];
      
      for (const video of videoData.body) {
          const prompt = `Generate a quiz with 5 different mcq questions in format ( data = { questions:[], options:[], answers:[] } ) in object format according to this text: ${JSON.stringify(video)}`;
          
          try {
              const result = await model.generateContent(prompt);
              const responseText = result.response.text();
              // console.log(result.response);
              allQuizData.push(responseText);
              
              console.log(responseText);
            } catch (error) {
                console.error("Error generating quiz for video:", video.id, error);
            }
        }
        const formattedQuizData = cleanQuizData(allQuizData);
    console.log(formattedQuizData);
    res.json({
        result: formattedQuizData
    });
});
app.listen(3000,()=>{
    console.log('connected to server 3000');
});