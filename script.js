// Call API on form submit
document.querySelector('form').addEventListener('submit', generateStory) 

// Highlight words in generated story
function highlightWords(text) {
  // highlight words logic
}

async function generateStory(event) {

  event.preventDefault()

  // Get words from input
  let words = document.querySelector('#words').value
  
  // Call API 
  let story = await fetch(`https://api.anthropic.com/v1/generations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer API_KEY'
    },
    body: JSON.stringify({
      prompt: `Here is a cute short story using these words: ${words}.`, 
      max_tokens: 64
    })
  })
  .then(response => response.json())
  .then(data => data.text)

  // Display story and highlight words
  document.querySelector('#story').innerHTML = highlightWords(story)

}