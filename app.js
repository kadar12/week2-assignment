const thumbnailContainer = document.getElementById("thumbnail-container");
const displayImage = document.getElementById("display-image");

let imgIndex = 0;

const images = [
  {
    src: "https://cdn.pixabay.com/photo/2022/06/02/19/25/giraffes-7238815_1280.jpg",
    alt: "Kenya1  ",
  },
  {
    src: "https://www.kenyatourism.in/images/elephant-in-maasai-mara-kenya.jpg",
    alt: "Kenya2",
  },
  {
    src: "https://images8.alphacoders.com/375/thumb-1920-375752.jpg",
    alt: "Kenya3",
  },
  {
    src: "https://res.cloudinary.com/enchanting/q_70,f_auto,w_800,h_500,c_fill,g_face/hj-web/2020/10/085054-Kenya-Pixabay-Zebra-1883654.jpg",
    alt: "Kenya4",
  },

  {
    src: "https://cdn.pixabay.com/photo/2022/06/10/05/32/african-elephant-7253752_1280.jpg",
    alt: "Kenya5",
  },

  {
    src: "https://lp-cms-production.imgix.net/2022-09/Africa-Kenya-Buena-Vista-Images-GettyImages-1192906213-RFE.jpeg",
    alt: "Kenya5",
  },

  {
    src: "https://cdn.pixabay.com/photo/2023/08/05/16/25/elephants-8171393_1280.jpg",
    alt: "Kenya6",
  },

  {
    src: "https://www.abercrombiekent.co.uk/-/media/abercrombieandkent/images/page-header-images/africa/kenya/kenya__0000_kenya-masai-mara-lion.jpg?w=1920&h=940",
    alt: "Kenya7",
  },
];

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");

  img.src = images[i].src;
  img.alt = images[i].alt;

  img.addEventListener("click", function () {
    displayImage.src = images[i].src;
    displayImage.alt = images[i].alt;
    imgIndex = i;
  });

  thumbnailContainer.appendChild(img);
}

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "ArrowDown") {
    imgIndex++;
    if (imgIndex === images.length) {
      imgIndex = 0;
    }
    displayImage.src = images[imgIndex].src;
    displayImage.alt = images[imgIndex].alt;
  }
});

document.addEventListener("keyup", function (event) {
  console.log(event);
  if (event.key === "ArrowUp") {
    imgIndex--;
    if (imgIndex === images.length) {
      imgIndex = 0;
    }
  }

  displayImage.src = images[imgIndex].src;
  displayImage.alt = images[imgIndex].alt;
});
