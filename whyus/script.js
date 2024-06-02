// const slogan = document.getElementById('slogan');
// const sloganText = slogan.textContent;
// slogan.textContent = '';

// let index = 0;
// function writeSlogan() {
//   if (index < sloganText.length) {
//     slogan.textContent += sloganText[index];
//     index++;
//     setTimeout(writeSlogan, 100);
//   }
// }

// writeSlogan();

const slogans = [
    "Unleash your creative spirit.",
    "Ignite your inspiration.",
    "Let words come alive.",
    "Craft your masterpiece."
  ];
  
  const slogan = document.getElementById('slogan');
  
  function getRandomSlogan() {
    return slogans[Math.floor(Math.random() * slogans.length)];
  }
  
  async function writeSlogan() {
    const sloganText = getRandomSlogan();
    let index = 0;
    while (index < sloganText.length) {
      slogan.textContent += sloganText[index];
      index++;
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
    while (index > 0) {
      slogan.textContent = slogan.textContent.slice(0, -1);
      index--;
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    await new Promise(resolve => setTimeout(resolve, 500));
    writeSlogan();
  }
  
  writeSlogan();

window.addEventListener('scroll', () => {
  const features = document.querySelectorAll('.feature');
  features.forEach((feature) => {
    const featureTop = feature.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (featureTop < windowHeight * 0.8) {
      feature.classList.add('visible');
    }
  });
});