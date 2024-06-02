const bgContainer = document.querySelector('.bg-container');
const bgItems = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png'
    , '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png'
    , '19.png', '20.png', '21.png', '22.png', '23.png', '24.png'
];

function createBgItem() {
    const bgItem = document.createElement('img');
    bgItem.className = 'bg-item';
    bgItem.src = `src/${bgItems[Math.floor(Math.random() * bgItems.length)]}`;
    bgItem.style.left = `${Math.random() * 100}%`;
    bgItem.style.top = `${Math.random() * 100}%`;
    bgItem.style.transform = `translate(-50%, -50%) scale(${Math.random()*0.05 + 0.05})`;
    
    // bgContainer.appendChild(bgItem);
    
    // setTimeout(() => bgItem.remove(), 10000);
    bgItem.style.opacity = 0;
    bgContainer.appendChild(bgItem);

    setTimeout(() => {
        bgItem.style.opacity = 1;
        setTimeout(() => {
            bgItem.style.opacity = 0;
            setTimeout(() => bgItem.remove(), 1000);
        }, 8000);
    }, 100);
}

setInterval(createBgItem, 1000);

// Add parallax effect to background items
document.addEventListener('mousemove', (e) => {
    bgContainer.querySelectorAll('.bg-item').forEach(bgItem => {
        const speed = Number(bgItem.dataset.speed);
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        bgItem.style.transform = `translate(${x}px, ${y}px) scale(${Math.random() + 0.5})`;
    });
});


const heading = document.querySelector('h1');

heading.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) * 0.05;
    const y = (e.clientY - window.innerHeight / 2) * 0.05;

    heading.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});

heading.addEventListener('mouseout', () => {
    heading.style.transform = 'translate(0, 0) scale(1)';
});

const slogans = [
    'Ars Longa, Vita Brevis.',
    'Carpe Diem.',
    'Ex Nihilo Nihil Fit.',
    'Cogito, Ergo Sum.',
    'Verba Volant, Scripta Manent.',
    'In Vino Veritas.',
    'Amor Vincit Omnia.',
    'Tempus Fugit.',
    'Memento Mori.',
    'Ad Astra Per Aspera.',
    'Acta Non Verba.',
    'Audentes Fortuna Iuvat.',
    'Dum Spiro, Spero.',
    'E Pluribus Unum.',
    'Festina Lente.',
    'Ignis Aurum Probat.',
    'In Omnia Paratus.',
    'Labor Omnia Vincit.',
    'Nulla Dies Sine Linea.',
    'Per Aspera Ad Astra.',
    'Sic Parvis Magna.',
    'Quam Bene Vivas Refert, Non Quam Diu.',
    'Scientia Potentia Est.'
    // ...添加更多标语
];

let sloganIndex = 0;

// function changeSlogan() {
//     heading.textContent = slogans[sloganIndex];
//     sloganIndex = (sloganIndex + 1) % slogans.length;
// }
// function changeSlogan() {
//     heading.style.opacity = 0;

//     setTimeout(() => {
//         heading.textContent = slogans[sloganIndex];
//         sloganIndex = (sloganIndex + 1) % slogans.length;
//         heading.style.opacity = 1;
//     }, 1000);
// }
function changeSlogan() {
    heading.style.opacity = 0;

    setTimeout(() => {
        heading.textContent = slogans[sloganIndex];
        sloganIndex = (sloganIndex + 1) % slogans.length;
        heading.style.opacity = 1;
        heading.style.backdropFilter = 'none'; // 移除旧的模糊效果
        // setTimeout(() => {
        //     heading.style.backdropFilter = 'blur(10px)'; // 重新应用模糊效果
        // }, 100);
    }, 1000);
}

setInterval(changeSlogan, 10000);

// 英语文学作品相关唯美意象、手法和经典作品词库
const keywords = [
    'To be, or not to be',
    'The green light',
    'The American Dream',
    'The Beast in the Jungle',
    'Stream of Consciousness',
    'Dramatic Monologue',
    'Epiphany',
    'Objective Correlative',
    'Intertextuality',
    'Pathetic Fallacy',
    'In Xanadu did Kubla Khan',
    'The Love Song of J. Alfred Prufrock',
    'The Waste Land',
    'Ulysses',
    'To the Lighthouse',
    'The Sound and the Fury',
    'Brave New World',
    'The Catcher in the Rye',
    '1984',
    'The Great Gatsby',
    'Pride and Prejudice',
    'Jane Eyre',
    'Wuthering Heights',
    'Heart of Darkness',
    'The Picture of Dorian Gray',
    'The Canterbury Tales',
    'Hamlet',
    'Macbeth',
    'Romeo and Juliet',
    'Othello'
  ];
  function getRandomKeyword() {
    const index = Math.floor(Math.random() * keywords.length);
    return keywords[index];
  }
  
  // 更新关键词显示
  function updateKeyword() {
    const keywordElement = document.getElementById('keyword');
    keywordElement.textContent = getRandomKeyword();
  }
  // 更新关键词列表显示
  function updateKeywordList() {
    const keywordList = document.getElementById('keywordList');
    keywordList.innerHTML = '';
  
    const count = Math.floor(Math.random() * 2) + 3;
    for (let i = 0; i < count; i++) {
      const keyword = getRandomKeyword();
      const listItem = document.createElement('li');
      listItem.textContent = keyword;
      keywordList.appendChild(listItem);
  
      // 添加动画延迟
      setTimeout(() => {
        listItem.classList.add('show');
      }, i * 200);
    }
  }
  
  // 在加载时更新关键词列表
  updateKeywordList();
//   // 在加载时更新关键词
//   updateKeyword();
  
  // 添加鼠标移动事件监听器
  document.addEventListener('mousemove', (event) => {
    const card = document.querySelector('.card');
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (mouseX - centerX) / 20;
    const offsetY = (mouseY - centerY) / 20; 
    card.style.transform = `perspective(800px) rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
  });
  
//   let timeoutId = null;

//   function handleMouseMove(event) {
//     const arrow = document.getElementById('arrow');
//     const card = document.querySelector('.card');
    
//     if (event.clientY > window.innerHeight - 100) {
//       arrow.style.display = 'none';
//       card.classList.add('show');
//       clearTimeout(timeoutId);
//     } else {
//       timeoutId = setTimeout(() => {
//         arrow.style.display = 'block';
//         card.classList.remove('show');
//       }, 500);
//     }
//   }
  
//   document.addEventListener('mousemove', handleMouseMove);
