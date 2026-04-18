function formatARS(number) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number);
}

function renderPrice(cookie) {
    if (cookie.price_temporal > 0) {
        return `
            <div class="card_price_wrapper">
                <p class="card_price_old">${formatARS(cookie.price)}</p>
                <p class="card_price card_price_discount">${formatARS(cookie.price_temporal)}</p>
            </div>
        `;
    }
    return `<p class="card_price">${formatARS(cookie.price)}</p>`;
}

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
            ${renderPrice(cookie)}
        </div>
        ${cookie.featured ? '<p class="chosen_tag">SEMANAL</p>' : ''}
    `;
    return card;
}

function renderCookies() {
    const section = document.getElementById('general_catalogo');
    section.innerHTML = '';

    const sorted = [
        ...cookies.filter(c => c.featured),
        ...cookies.filter(c => !c.featured)
    ];

    const featuredCount = cookies.filter(c => c.featured).length;
    if (featuredCount > 4) {
        console.warn(`⚠️ Tenés ${featuredCount} galletas con featured: true. El máximo recomendado es 4.`);
    }

    sorted.forEach(cookie => {
        section.appendChild(createCookieCard(cookie));
    });
}

renderCookies();