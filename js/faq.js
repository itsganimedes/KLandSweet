document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const faqAnswer = button.nextElementSibling;

        faqItem.classList.toggle('active');

        if (faqItem.classList.contains('active')) {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        } else {
            // Si se cierra, volvemos a 0
            faqAnswer.style.maxHeight = "0";
        }
    });
});