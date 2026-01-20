const gallery = document.getElementById('gallery');
const folder = 'images/';

// Liste over billeder - tilføj flere efter behov
const billeder = [
    'George Washington.jpg',
    'Thomas Jefferson.jpg',
    'James Madison.jpg',
    'Andrew Jackson.jpg',
    'Abraham Lincoln.jpg',
    'Ulysses S Grant.jpg',
    'Theodore Roosevelt.jpg',
    'Woodrow Wilson.jpg',
    'Franklin D Roosevelt.jpg',
    'Harry S Truman.jpg',
    'Dwight D Eisenhower.jpg',
    'John F Kennedy.jpg',
    'Lyndon B Johnson.jpg',
    'Ronald Reagan.jpg',
    'Barack Obama.jpg',
    'Donald Trump.jpg',
    'Joe Biden.jpg'
];

billeder.forEach(file => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = folder + file;

    // Lav navnet pænere
    const name = file.split('.')[0];
    const navn = name.charAt(0).toUpperCase() + name.slice(1);
    const caption = document.createElement('div');
    caption.textContent = navn;

    card.appendChild(img);
    card.appendChild(caption);

    // Klik-event: skifter mellem "clicked" og normal
    card.addEventListener('click', () => {
        card.classList.toggle('clicked');  // <-- toggle skifter til/fra
    });

    gallery.appendChild(card);
});

