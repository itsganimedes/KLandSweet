const items = ['🍪','🍪','🍪','💜','💗','🍪','💜','🍪','💗','💜','🍪','💗','🍪','💗','💜','🍪','💗'];
const bg = document.getElementById('floatingBg');

items.forEach((emoji, i) => {
    const el = document.createElement('div');
    el.className = 'floating-item';
    el.textContent = emoji;

    const isLeft = i % 2 === 0;
    const left = isLeft
        ? 2 + (i * 3.5) % 16        // entre 2% y 18%
        : 82 + (i * 3.5) % 16;      // entre 82% y 98%

    const top = 5 + (i * 25) % 85;
    const dur = 4 + (i * 1.3) % 5;
    const delay = -(i * 0.8);
    const size = 20 + (i * 7) % 20;

    el.style.cssText = `left:${left}%;top:${top}%;animation-duration:${dur}s;animation-delay:${delay}s;font-size:${size}px;`;
    bg.appendChild(el);
});