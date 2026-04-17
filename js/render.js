function createCookieCard(cookie) {
    const card = document.createElement('div');
    card.className = 'cookie_card';

    card.innerHTML = `
        <div class="img" style="background-image: url('${cookie.img}');"></div>
        <div class="cookie_card_info">
        <p class="group_tag">${cookie.group}</p>
        <div>
            <p class="card_title">${cookie.title}</p>
            <p class="desc">${cookie.desc}</p>
        </div>
        <p class="card_price">${cookie.price}</p>
        </div>
        ${cookie.featured ? '<p class="chosen_tag">SEMANAL</p>' : ''}
    `;

    return card;
}

function renderCookies() {
    const section = document.getElementById('general_catalogo');
    section.innerHTML = '';

    // Featured primero, luego el resto
    const sorted = [
        ...cookies.filter(c => c.featured),
        ...cookies.filter(c => !c.featured)
    ];

    // Máximo 4 featured (aviso en consola si hay más)
    const featuredCount = cookies.filter(c => c.featured).length;
    if (featuredCount > 4) {
        console.warn(`⚠️ Tenés ${featuredCount} galletas con featured: true. El máximo recomendado es 4.`);
    }

    sorted.forEach(cookie => {
        section.appendChild(createCookieCard(cookie));
    });
}

renderCookies();