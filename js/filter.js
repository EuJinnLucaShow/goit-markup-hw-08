const refs = {
  filterButtonsList: document.querySelector('.filters'),
  galleryItems: document.querySelectorAll('.grid__item'),
};

let selectedFilter = null;

function onFilterClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveButton = document.querySelector('.filter__btn--active');
  currentActiveButton?.classList.remove('filter__btn--active');

  const nextActiveButton = event.target;
  nextActiveButton.classList.add('filter__btn--active');

  selectedFilter = nextActiveButton.dataset.value;

  selectedGalleryItems(selectedFilter);
}

function selectedGalleryItems(selectedFilter) {
  if (selectedFilter === 'all') {
    refs.galleryItems.forEach(item => {
      item.classList.remove('grid__item--hidden');
    });
    return;
  }

  refs.galleryItems.forEach(item => {
    if (item.dataset.tag !== selectedFilter) {
      item.classList.add('grid__item--hidden');

      return;
    }
    item.classList.remove('grid__item--hidden');
  });
}

refs.filterButtonsList.addEventListener('click', onFilterClick);