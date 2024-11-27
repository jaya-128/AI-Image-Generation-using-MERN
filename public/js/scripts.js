document.addEventListener('DOMContentLoaded', () => {
    const imageForm = document.querySelector('#image-form');
    const imageDisplay = document.querySelector('#image-display');
    const errorMessage = document.querySelector('.error');

    if (imageForm) {
        imageForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const prompt = imageForm.querySelector('input[name="prompt"]').value;

           
            errorMessage.textContent = '';

            try {
                
                const response = await axios.post('/generate-image', { prompt });

                if (response.data.imageUrl) {
                   
                    imageDisplay.src = response.data.imageUrl;
                    imageDisplay.hidden = false;
                }
            } catch (error) {
                console.error('Error generating image', error);
                errorMessage.textContent = 'Error generating image. Please try again.';
            }
        });
    }
});
