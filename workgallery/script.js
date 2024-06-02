document.addEventListener('DOMContentLoaded', function() {
    const bgContainer = document.querySelector('.bg-container');
    const fragment = document.getElementById('fragment');

    // 动态添加背景拼贴画元素
    for (let i = 0; i < 18; i++) {
        const bgItem = document.createElement('div');
        bgItem.classList.add('bg-item');
        const img = document.createElement('img');
        img.src = `background/${i + 1}.png`; // 假设背景图片命名为bg-1.jpg, bg-2.jpg...
        bgItem.appendChild(img);
        bgContainer.appendChild(bgItem);
        
        // 随机位置和旋转
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const angle = Math.random() * 360;
        bgItem.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
    }

    const slogans = [
        'Script your sparks.',
        'Design your dreams.',
        'Make some literary magic.',
        // ...添加更多标语
    ];
    
    let sloganIndex = 0;

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

    // 导航链接悬停效果
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px)';
            link.style.opacity = '0.6';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
            link.style.opacity = '1';
        });
    });

    // 标题悬停效果
    const title = document.querySelector('h1');
    title.addEventListener('mouseenter', () => {
        title.style.opacity = '0.8';
        title.style.textShadow = '0 0 20px rgba(0, 0, 0, 0.3)';
    });
    title.addEventListener('mouseleave', () => {
        title.style.opacity = '1';
        title.style.textShadow = 'none';
    });

    // 作品列表逐个显示
    const works = document.querySelectorAll('li');
    works.forEach((work, index) => {
        setTimeout(() => {
            work.classList.add('show');
        }, (index + 1) * 500);
    });

//     // 片段滚动加载
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 100) {
//             fragment.innerHTML = `
//                 <h2>About Me</h2>
//                 <p>I am a passionate web designer who loves creating beautiful and engaging websites.</p>
//             `;
//         }
//     });
// });

const heading = document.querySelector('h1');

heading.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) * 0.05;
    const y = (e.clientY - window.innerHeight / 2) * 0.05;

    heading.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});

heading.addEventListener('mouseout', () => {
    heading.style.transform = 'translate(0, 0) scale(1)';
});

// window.addEventListener('scroll', function() {
//     const parallax = document.querySelectorAll('.parallax');
//     let scrollPosition = window.pageYOffset;

//     parallax.forEach(function(element) {
//         let speed = element.getAttribute('data-speed') || 0.5;
//         element.style.backgroundPositionY = (scrollPosition * speed) + 'px';

//         let glassCard = element.querySelector('.glass-card');
//         let cardPosition = glassCard.getBoundingClientRect().top;
//         let windowHeight = window.innerHeight;

//         if (cardPosition < windowHeight * 0.8) {
//             glassCard.classList.add('show');
//         }
//     });
// });
window.addEventListener('scroll', function() {
    const glassCards = document.querySelectorAll('.glass-card');

    glassCards.forEach(function(card) {
        let cardPosition = card.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (cardPosition < windowHeight * 0.8) {
            card.classList.add('show');
        }
    });
});
});