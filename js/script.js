document.addEventListener('DOMContentLoaded', () => {
    // Define the links for each day
    const surprises = {
        day1: 'html/imageCircle.html',
        day2: 'surprise2.html',
        day3: 'surprise3.html',
        day4: 'surprise4.html',
        day5: 'surprise5.html',
        day6: 'surprise6.html',
        day7: 'surprise7.html',
        day8: 'surprise8.html',
        day9: 'surprise9.html',
        day10: 'surprise10.html',
        day11: 'surprise11.html',
        day12: 'surprise12.html',
    };
  
    // Get all boxes
    const boxes = document.querySelectorAll('.box');
    const surpriseMessage = document.getElementById('surpriseMessage');
  
    // Add event listener for each box
    boxes.forEach(box => {
        let isClicking = false;  // Flag to check if a click is already in progress
  
        box.addEventListener('click', () => {
            if (isClicking) return;  // Prevent clicking multiple times in quick succession
            isClicking = true;
  
            const day = box.id; // Get the ID of the clicked box
            const link = surprises[day]; // Get the corresponding link
  
            // Update the message with the surprise link
            surpriseMessage.innerHTML = `Click <a href="${link}">here</a> to reveal your surprise for ${box.textContent}!`;
  
            // Add a class to gray out the clicked box
            box.classList.add('clicked');
  
            // Wait for a bit (e.g., 1 second) before allowing another click
            setTimeout(() => {
                isClicking = false;
            }, 1000);  // Adjust the time as needed
        });
    });
  });
  