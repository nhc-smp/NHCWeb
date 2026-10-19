// Native details elements work without JavaScript; search is an enhancement.
const search = document.getElementById('faq-search');
const categories = [...document.querySelectorAll('.faq-category')];
const results = document.getElementById('faq-results');
const empty = document.getElementById('faq-empty');
const topics = [...document.querySelectorAll('.faq-topics a')];

search.addEventListener('input', () => {
    const query = search.value.trim().toLocaleLowerCase();
    let matches = 0;

    categories.forEach((category, index) => {
        let categoryMatches = 0;
        const categoryName = category.querySelector('h2').textContent.toLocaleLowerCase();
        category.querySelectorAll('.faq-item').forEach((item) => {
            const visible = !query || `${categoryName} ${item.textContent.toLocaleLowerCase()}`.includes(query);
            item.hidden = !visible;
            if (visible) categoryMatches++;
        });
        category.hidden = categoryMatches === 0;
        topics[index].hidden = categoryMatches === 0;
        matches += categoryMatches;
    });

    empty.hidden = matches !== 0;
    results.textContent = query ? `${matches} matching question${matches === 1 ? '' : 's'}` : '';
});
