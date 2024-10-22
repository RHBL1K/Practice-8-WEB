// Function to highlight words longer than 8 characters
function highlightLongWords() {
    const paragraph = document.getElementById('text');
    const words = paragraph.innerText.split(' ');

    paragraph.innerHTML = words.map(word => {
        if (word.length > 8) {
            return `<span class="highlight">${word}</span>`;
        }
        return word;
    }).join(' ');
}

// Function to add a link to the source
function addSourceLink() {
    const paragraph = document.getElementById('text');
    const sourceLink = document.createElement('a');
    sourceLink.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
    sourceLink.textContent = 'Source of the text';
    paragraph.after(sourceLink);
}

// Function to split sentences into separate lines
function splitSentences() {
    const paragraph = document.getElementById('text');
    const sentences = paragraph.innerHTML.split('. ').join('.<br><br>');
    paragraph.innerHTML = sentences;
}

// Function to count the number of words
function countWords() {
    const paragraph = document.getElementById('text');
    const words = paragraph.innerText.split(' ').length;
    const wordCountElement = document.getElementById('word-count');
    wordCountElement.textContent = `Word count: ${words}`;
}

// Function to replace "?" with thinking face and "!" with astonished face
function replacePunctuation() {
    const paragraph = document.getElementById('text');
    let text = paragraph.innerHTML;
    text = text.replace(/\?/g, '🤔');
    text = text.replace(/!/g, '😲');
    paragraph.innerHTML = text;
}

// Run all functions
highlightLongWords();
addSourceLink();
splitSentences();
countWords();
replacePunctuation();
