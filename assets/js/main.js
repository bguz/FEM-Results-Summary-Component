async function insertJSONData() {
    const scores = document.querySelector('.summary__scores');
    const response = await fetch('./data.json');
    const data = await response.json();
    
    data.forEach(result => {
        scores.insertAdjacentHTML('beforeend', `
            <div class="summary__item summary--${result.category.toLowerCase()}">
                <div class="summary__category">
                    <img src="${result.icon}" alt="${result.category} icon"/>
                    <h3 class="summary__heading">${result.category}</h3>
                </div>
                <div class="summary__score">
                    <p class="summary__score-range">
                        <span class="summary__final-score">${result.score}</span> / 100
                    </p>
                </div>
            </div>
        `)
    })
}

insertJSONData();