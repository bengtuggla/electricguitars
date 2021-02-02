const instruments = [
  {
    id: 1,
    title: 'Fender Stratocaster',
    category: 'fender',
    year: '1969',
    image:
      'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVuZGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 2400,
    desc:
      'The Fender Stratocaster, originally known as the Strat, is a model of electric guitar designed from 1952 into 1954 by Leo Fender, Bill Carson, George Fullerton and Freddie Tavares. T',
  },
  {
    id: 2,
    title: 'Fender Telecaster',
    category: 'fender',
    year: '1974',
    image:
      '      https://images.unsplash.com/photo-1583679670198-85272e600ed2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZlbmRlciUyMHRlbGVjYXN0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',

    price: 2100,
    desc:
      "The Fender Telecaster, originally known as the Tele /ˈtɛli/, is the world's first commercially successful solid-body electric guitar. Its simple yet effective design and revolutionary sound broke ground and set trends in electric guitar manufacturing and popular music",
  },
  {
    id: 3,
    title: 'Fender Mustang',
    category: 'fender',
    year: '1966',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/1998FenderMustangVintageWhite.jpg/800px-1998FenderMustangVintageWhite.jpg',
    price: 3400,
    desc:
      "The Fender Mustang is a solid body electric guitar produced by the Fender Musical Instruments Corporation. It was introduced in 1964 as the basis of a major redesign of Fender's student models, the Musicmaster and Duo-Sonic. It was produced until 1982 and reissued in 1990.",
  },
  {
    id: 4,
    title: 'Gibson Les paul',
    category: 'gibson',
    year: '1959',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Gibson_LP_Classic.png/220px-Gibson_LP_Classic.png',
    price: 8400,
    desc:
      'The Gibson Les Paul is a solid body electric guitar that was first sold by the Gibson Guitar Corporation in 1952.The Les Paul was designed by Gibson president Ted McCarty, factory manager ',
  },
  {
    id: 5,
    title: 'Gibson ES-335',
    category: 'gibson',
    year: '1962',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/1960_Gibson_ES-335TD.jpg/220px-1960_Gibson_ES-335TD.jpg',
    price: 9400,
    desc:
      "The Gibson ES-335 is the world's first commercial semi-hollowbody electric guitar, sometimes known as semi-acoustic. Released by the Gibson Guitar Corporation as part of its ES (Electric Spanish) series in 1958,",
  },
  {
    id: 6,
    title: 'Gibson SG',
    category: 'gibson',
    year: '1962',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gibson_SG_Standard_%281984%29.jpg/240px-Gibson_SG_Standard_%281984%29.jpg',
    price: 7400,
    desc:
      'The Gibson SG is a solid-body electric guitar model introduced by Gibson in 1961 as the Gibson Les Paul SG.[1] It remains in production today in many variations of the initial design. The SG (where "SG" refers to Solid Guitar) Standard is Gibson\'s best-selling model of all time',
  },
  {
    id: 7,
    title: 'Gibson Firebird',
    category: 'gibson',
    year: '1964',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Firebirdv2008.jpg/250px-Firebirdv2008.jpg',
    price: 9900,
    desc:
      'The Gibson Firebird is a solid-body electric guitar manufactured by Gibson from 1963 to the present.',
  },
  {
    id: 8,
    title: 'Gibson Explorer',
    category: 'gibson',
    year: '1959',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Gibson_Explorer.jpg/180px-Gibson_Explorer.jpg',
    price: 7900,
    desc:
      'The Gibson Explorer is a type of electric guitar that made its debut in 1958. The Explorer offered a radical, "futuristic" body design, much like its siblings: the Flying V, which was released the same year, and the Moderne, which was designed in 1957 but not released until 1982.',
  },
  {
    id: 9,
    title: 'Gibson Melody Maker',
    category: 'gibson',
    year: '1969',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Gibson_Melody_Maker_%281960%29_-_Rory_Gallagher%27s_collection.jpg/120px-Gibson_Melody_Maker_%281960%29_-_Rory_Gallagher%27s_collection.jpg',
    price: 1400,
    desc:
      'The Gibson Melody Maker is an electric guitar made by Gibson Guitar Corporation. It has had many body shape variations since its conception in 1959.',
  },
  {
    id: 10,
    title: 'Gretsch 6120',
    category: 'gretch',
    year: '1959',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gretsch_6120_G-_Brand_1955_vintage.jpg/250px-Gretsch_6120_G-_Brand_1955_vintage.jpg',
    price: 5400,
    desc:
      'The Gretsch 6120 is a hollow body electric guitar with f-holes, manufactured by Gretsch and first appearing in the mid-1950s with the endorsement of Chet Atkins. It was quickly adopted by rockabilly artists Eddie Cochran, Duane Eddy, and later by Eric Clapton, Brian Setzer, Reverend Horton Heat, and many others.',
  },
  {
    id: 11,
    title: 'Gretsch Jupiter Thunderbird',
    category: 'gretch',
    year: '1962',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Billy_gibbons_finland_2010.jpg/250px-Billy_gibbons_finland_2010.jpg',
    price: 8400,
    desc:
      'The Gretsch G6199 "Billy-Bo" Jupiter is a reproduction of a guitar designed by Bo Diddley (1928–2008) in 1959 and produced by a former Gretsch employee. Diddley built his first guitar in 1945, it was trapezoid shaped since Diddley felt that the regular shaped Gibson L5 he was playing were hindering his live performances. ',
  },
];
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function () {
  getItems(instruments);
  getFilterButtons();
});

function getItems(instrumentItems) {
  let newMapArray = instrumentItems.map(function (items) {
    return `
        <!-- Single item article -->
        <article class="menu-item">
          <img class="photo" src="${items.image}" alt="${items.title}" />
          <div class="item-info">
            <header>
              <h4>${items.title}</h4>
              <h4 class="price">$${items.price}</h4>
            </header>
            <p class="item-text">
              ${items.desc}
            </p>
          </div>
        </article>
        <!-- END of Single item article -->`;
  });
  newMapArray = newMapArray.join('');
  sectionCenter.innerHTML = newMapArray;
}

function getFilterButtons() {
  const categories = instruments.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join('');

  // categoryBtns = categoryBtns.join(''); går lika bra
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const instrCategory = instruments.filter(function (item) {
        if (item.category === category) {
          return item;
        }
      });
      if (category === 'all') {
        getItems(instruments);
      } else {
        getItems(instrCategory);
      }
    });
  });
}
