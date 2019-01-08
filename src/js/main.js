const   loadMoreBtn = document.querySelector('.articles-2_btn'),
        articlesContent = document.querySelector('.articles-3');

loadMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();

    DLAnimate.show(articlesContent, {
        name: 'articles-3',
    });

});