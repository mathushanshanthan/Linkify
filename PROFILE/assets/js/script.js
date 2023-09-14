  const overlay = document.querySelector('.overlay');
  const audio = document.querySelector('audio');
  const video = document.querySelector('video');
  let p = document.querySelector('#status'); 

  function handleOverlayClick() {
    overlay.classList.add('fade-out');
    audio.play();
    video.play();
    audio.volume = 0.1;
    video.volume = 0.1;

    // Отображаем текст в блоке #status
    p.style.display = 'block';

    let text = 'NEVER BACK DOWN, NEVER WHAT?';
    let cursor = document.createElement('span');
    cursor.innerHTML = '<span style="font-size: 15px; font-weight: 200; color: #fff;">|</span>';

    function typeAndErase(index) {
      let text1 = text.slice(0, index);
      p.innerHTML = text1 + cursor.innerHTML;

      if (index === text.length) {
        setTimeout(() => {
          eraseText(text.length);
        }, 3000); // Wait for 3 seconds before erasing
      } else if (index === 0) {
        setTimeout(() => {
          typeAndErase(1);
        }, 100); // Small delay before starting the typing animation again
      } else if (index > 0 && index < text.length) {
        setTimeout(() => {
          typeAndErase(index + 1);
        }, 100); // Delay for typing each character
      }
    }

    function eraseText(index) {
      let text1 = text.slice(0, index);
      p.innerHTML = text1 + cursor.innerHTML;

      if (index >= 0) {
        setTimeout(() => {
          eraseText(index - 1);
        }, 100); // Delay for erasing each character
      } else {
        p.innerHTML = ''; // Hide the text
        setTimeout(() => {
          typeAndErase(0);
          overlay.style.display = 'none'; 
        }, 500); // Wait for 0.5 seconds before starting the typing animation again
      }
    }

    typeAndErase(0); // Start the typing animation
    
  }
  
  overlay.addEventListener('click', handleOverlayClick);
