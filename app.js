const thumbnailContainer = document.getElementById("thumbnail-container");
const displayImage = document.getElementById("display-image");

let imgIndex = 0;

const images = [
  {
    src: "https://cdn.britannica.com/59/153459-050-BC7B5FD8/Herd-zebras-Kenya-Maasai-Mara-National-Reserve.jpg",
    alt: "Kenya1  ",
  },
  {
    src: "https://ik.imagekit.io/aventure/wp-content/uploads/Elephants-and-Kilimanjaro-for-AV.jpeg",
    alt: "Kenya2",
  },
  {
    src: "https://grownuptravel.co/wp-content/uploads/2024/01/randy-fath-osXl4JI3vcQ-unsplash-e1704195320116.jpg",
    alt: "Kenya3",
  },
  {
    src: "https://res.cloudinary.com/enchanting/q_70,f_auto,w_800,h_500,c_fill,g_face/hj-web/2020/10/085054-Kenya-Pixabay-Zebra-1883654.jpg",
    alt: "Kenya4",
  },

  {
    src: "https://www.coxandkings.co.uk/-/media/cox-and-kings/images/tours/destinations/africa/kenya/highlights-of-kenya/header.jpg?w=1920&h=940",
    alt: "Kenya5",
  },

  {
    src: "https://lp-cms-production.imgix.net/2022-09/Africa-Kenya-Buena-Vista-Images-GettyImages-1192906213-RFE.jpeg",
    alt: "Kenya5",
  },

  {
    src: "https://content.tui.co.uk/adamtui/2022_5/24_10/5f360450-9dbc-49ad-aaad-ae9f00a812ab/ACC_952036_shutterstock_1064604671WebOriginalCompressed.jpg?i10c=img.resize(width:1080);img.crop(width:1080%2Cheight:608)",
    alt: "Kenya6",
  },

  {
    src: "https://www.abercrombiekent.co.uk/-/media/abercrombieandkent/images/page-header-images/africa/kenya/kenya__0000_kenya-masai-mara-lion.jpg?w=1920&h=940",
    alt: "Kenya7",
  },
  {
    src: "https://i.natgeofe.com/n/6c119232-038e-4e6b-8e77-dd8b8641a625/mount-kenya_16x9.jpg?w=1200",
    alt: "kenya8",
  },
];

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");

  img.src = images[i].src;
  img.alt = images[i].alt;

  img.addEventListener("click", function () {
    displayImage.src = images[i].src;
    displayImage.alt = images[i].alt;
  });

  thumbnailContainer.appendChild(img);
}
