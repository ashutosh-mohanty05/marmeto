const themeToggle = document.getElementById('toggle-theme');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});

const mainImage = document.getElementById('main-image');

const colorOptions = document.querySelectorAll('.color-option');

colorOptions.forEach(colorOption => {
  colorOption.addEventListener('click', () => {
    const color = colorOption.getAttribute('data-color');
    updateImagesByColor(color);
  });
});

function updateImagesByColor(color) {
  const imageUrls = {
    red: ['/image/saree1.jpg', '/image/saree2.jpg', '/image/saree3.jpg'],
    green: ['/image/saree1-g.jpg', '/image/saree2-g.jpg', '/image/saree3-g.jpg'],
    yellow: ['/image/saree1-y.jpg', '/image/saree2-y.jpg', '/image/saree3-y.jpg']
  };

  mainImage.src = imageUrls[color][0];

  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.src = imageUrls[color][index % 3];
  });
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      const newSrc = thumbnail.src;
      mainImage.src = newSrc;
    });
  });

  colorOptions.forEach(option => option.classList.remove('selected'));
  colorOptions.forEach(option => {
    if (option.getAttribute('data-color') === color) {
      option.classList.add('selected');
    }
  });
}

const addToCartButton = document.getElementById('add-to-cart');
addToCartButton.addEventListener('click', () => {
  const selectedColor = document.querySelector('.color-option.selected').getAttribute('data-color');
  const selectedFabric = document.getElementById('fabric-select').value;
  const quantity = document.getElementById('quantity').value;

  const message = `Added to cart: 
  Color - ${selectedColor}
  Fabric - ${selectedFabric}
  Quantity - ${quantity}`;

  Swal.fire({
    title: 'Added to Cart!',
    text: message,
    icon: 'success',
    confirmButtonText: 'OK'
  });

  console.log(message);
});
