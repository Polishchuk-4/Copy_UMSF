function showList(subtitle) {
    const list = subtitle.nextElementSibling;
    const allLists = document.querySelectorAll('.menu-activity-page__row');
    const allSubtitle = document.querySelectorAll('.menu-activity-page__subtitle')

    for (let i = 0; i < allLists.length; i++) {
        if (allLists[i] !== list && allSubtitle[i] !== subtitle) {
            allLists[i].style.display = 'none';
            allSubtitle[i].classList.remove('menu-activity-page__subtitle--rotate', 'menu-activity-page__subtitle--border-radius');
        }
    }
    
    // allLists.forEach(function(item) {
    //     if (item !== list) {
    //         item.style.display = 'none';
    //     }
    // })
    // allSubtitle.forEach(function(item) {
    //     if (item !== subtitle) {
    //         item.classList.remove('menu-activity-page__subtitle--rotate', 'menu-activity-page__subtitle--border-radius');
    //     }
    // }); 

    if (list.style.display === 'block') {
        list.style.display = 'none';
        subtitle.classList.remove('menu-activity-page__subtitle--rotate', 'menu-activity-page__subtitle--border-radius');

    } else {
        list.style.display = 'block';
        subtitle.classList.add('menu-activity-page__subtitle--rotate', 'menu-activity-page__subtitle--border-radius');
    }
}