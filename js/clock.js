function getNextMonday() {
    const now = new Date();
    const d = new Date(now);
    const day = d.getDay();
    const daysUntil = day === 0 ? 1 : (8 - day) % 7 || 7;
    d.setDate(d.getDate() + daysUntil);
    d.setHours(0, 0, 0, 0);
    return d;
}

function getPrevMonday(next) {
    const d = new Date(next);
    d.setDate(d.getDate() - 7);
    return d;
}

function pad(n) { return String(n).padStart(2, '0'); }

function tick() {
    const now = new Date();
    const target = getNextMonday();
    const prev = getPrevMonday(target);
    const total = target - prev;
    const remaining = target - now;

    if (remaining <= 0) { tick(); return; }

    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const mins = Math.floor((remaining % 3600000) / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);

    document.getElementById('cd-days').textContent = pad(days);
    document.getElementById('cd-hours').textContent = pad(hours);
    document.getElementById('cd-mins').textContent = pad(mins);
    document.getElementById('cd-secs').textContent = pad(secs);

    const elapsed = total - remaining;
    const pct = Math.round((elapsed / total) * 100);
    document.getElementById('cd-bar').style.width = pct + '%';
    document.getElementById('cd-bar-pct-left').textContent = pct + '% transcurrido';

    const opts = { weekday: 'long', day: 'numeric', month: 'short' };
    document.getElementById('cd-date-target').textContent =
        target.toLocaleDateString('es-AR', opts);
}

tick();
setInterval(tick, 1000);