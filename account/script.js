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
});