$(function () {
  var galleryContainer = $('#gallery_container')
  var navContainer = $('#nav_container')

  //  Initial Page Load Data Update
  galleryContainer.find('h1')[0].innerText = data[0].heading
  galleryContainer.find('p')[0].innerText = data[0].subHeading
  galleryContainer.find('img').attr('src', data[0].image)

  //  Navigation Items Image Setting
  for (var i = 0; i < 4; i++) {
    var eachChild =  $(document.createElement('div'))
    eachChild.addClass('galleryItem')
    var img = $(document.createElement('img'))
    $(img).attr('src',data[i].image)
    $(eachChild).attr('data-count', (i + 1))
    if (i === 0) {
      eachChild.addClass('active')
    }
    eachChild.append(img)
    navContainer.append(eachChild)
  }

  //  Updating image and corresponding data on each navigation item click
  navContainer.find('div').on('click', function () {
    navContainer.find('div').removeClass('active')
    $(this).addClass('active')
    var count = this.dataset.count
    galleryContainer.fadeOut('500', function () {
      let content = data[count - 1]
      galleryContainer.find('h1')[0].innerText = content.heading
      galleryContainer.find('p')[0].innerText = content.subHeading
      galleryContainer.find('img').attr('src', content.image)
      galleryContainer.fadeIn('500');
    });
  })
})

//  Dummy Data
var data = [
  {
    image: '../images/1.jpeg',
    heading: 'Lorem ipsum dolor sit',
    subHeading: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia'
  },
  {
    image: '../images/2.jpeg',
    heading: 'Sed ut perspiciatis unde',
    subHeading: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,'
  },
  {
    image: '../images/3.jpeg',
    heading: 'But I must explain',
    subHeading: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un'
  },
  {
    image: '../images/4.jpeg',
    heading: 'Li Europan lingues es',
    subHeading: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and'
  },
  {
    image: '../images/5.jpeg',
    heading: 'Far far away, behind',
    subHeading: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.'
  },
  {
    image: '../images/6.jpeg',
    heading: 'A wonderful serenity has',
    subHeading: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by'
  }
]
