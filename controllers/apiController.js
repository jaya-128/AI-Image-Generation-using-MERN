const axios = require('axios');

// OpenAI DALL·E Image Generation
exports.generateImage = async (req, res) => {
    const { prompt } = req.body;  // The text description for generating the image

    try {
        // Replace `openai_endpoint` with your OpenAI API endpoint
        const response = await axios.post(
            'https://api.openai.com/v1/images/generations',  // OpenAI's Image generation endpoint
            {
                prompt: prompt,    // The text prompt
                n: 1,              // Number of images to generate
                size: "1024x1024"  // Image size (can be 256x256, 512x512, or 1024x1024)
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,  // Use your OpenAI API key
                    'Content-Type': 'application/json'
                }
            }
        );
        res.json(response.data);  // Return the generated image data
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error generating image' });
    }
};


exports.generateImageDeepAI = async (req, res) => {
    const { prompt } = req.body;

    try {
       
        const response = await axios.post(
            'https://api.deepai.org/api/text2img',
            { text: prompt },  
            {
                headers: {
                    'Api-Key': process.env.DEEP_AI_API_KEY  
                }
            }
        );
        res.json(response.data);  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error generating image' });
    }
};
