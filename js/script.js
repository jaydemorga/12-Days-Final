// Select all the boxes
const boxes = document.querySelectorAll('.box');

// The surprise message element
const surpriseMessage = document.getElementById('surpriseMessage');

// Add an event listener to each box
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        // Display a surprise message when a box is clicked
        surpriseMessage.textContent = `You unlocked Surprise for Day ${index + 1}!`;
        
        // Optionally, change the background color of the box to indicate it was clicked
        box.style.backgroundColor = '#28e91e'; // Light green color after click

        // You can add more functionality to reveal surprises, like opening images or text
    });
});
