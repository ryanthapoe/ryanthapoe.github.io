// Mobile Navigation Toggle
// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // Animate hamburger menu
  const bars = navToggle.querySelectorAll('.bar');
  bars.forEach((bar, index) => {
    if (navMenu.classList.contains('active')) {
      if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
      if (index === 1) bar.style.opacity = '0';
      if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      bar.style.transform = 'none';
      bar.style.opacity = '1';
    }
  });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach((bar) => {
      bar.style.transform = 'none';
      bar.style.opacity = '1';
    });
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
  }
});

// Product data
const products = [
  {
    id: 1,
    title: 'KIMORA',
    code: 'K001',
    type: 'Kimono',
    price: 'Rp 299.000',
    image: 'assets/images/K001/K001_main.jpg',
    gallery: [
      'assets/images/K001/K001_main.jpg',
      'assets/images/K001/K001_1.jpg',
      'assets/images/K001/K001_2.jpg',
      'assets/images/K001/K001_3.jpg',
      'assets/images/K001/K001_4.jpg',
    ],
    baseMaterial: 'Semi Wool',
    combinationMaterial: 'Ulos Mangiring',
    finishing: 'Tricod, Puring',
    ulosMeaning:
      'Ulos Mangiring : Ulos ini memiliki corak atau ragi yang beriringan. Umumnya menandakan tentang suatu kesuburan dan kesepakatan terhadap anak yang baru lahir. Ditambah agar anak itu kelak dapat membimbing adik-adiknya sesuai dengan harapan dan tradisi keluarga Batak.',
    description:
      'Kimono Etnik - Sentuhan Budaya dengan Gaya Modern.\n\nTampil beda dengan koleksi kimono etnik kami! Memadukan keindahan motif tradisional ulos Batak dengan desain modern. Kimono ini cocok untuk segala suasana—baik santai maupun semi-formal\n\nKeunggulan Produk :\n• Motif Unik: Terinspirasi dari corak etnik khas Nusantara (Ulos Batak) menjadikan setiap kimono istimewa dan bernilai seni tinggi.\n• Bahan Berkualitas: Terbuat dari kain premium (semi wool) yang lembut ringan, adem, dan nyaman dipakai seharian.\n• Desain Fleksibel: Model dengan potongan elegan, cocok untuk segala bentuk tubuh.\n• Multifungsi: Bisa digunakan sebagai outer, dress santai, atau paduan busana formal.\n\nCocok untuk :\n• Acara resmi seperti pesta, pernikahan, atau sesi foto prewedding.\n\nPilihan Motif dan Warna :\n• Pilihan corak dan warna Ulos yang banyak dan bervariasi\n• Penggunaan kain kombinasi dengan warna cerah hingga netral yang memikat.',
    sizeChart: {
      S: { shoulder: 42, chest: 51, length: 69, sleeve: 59 },
      M: { shoulder: 44, chest: 53, length: 70, sleeve: 60 },
      L: { shoulder: 46, chest: 55, length: 71, sleeve: 61 },
      XL: { shoulder: 48, chest: 57, length: 72, sleeve: 62 },
      XXL: { shoulder: 50, chest: 59, length: 74, sleeve: 63 },
    },
  },
  {
    id: 2,
    title: 'Outer Jeges Uli',
    code: 'OJU001',
    type: 'Outer',
    price: 'Rp 349.000',
    image: 'assets/images/OJU001/OJU001_main.jpg',
    gallery: ['assets/images/OJU001/OJU001_main.jpg', 'assets/images/OJU001/OJU001_1.jpg', 'assets/images/OJU001/OJU001_2.jpg'],
    baseMaterial: 'Linen',
    combinationMaterial: 'Ulos Sadum Tarutung (Hande-Hande)',
    finishing: 'Tricod, Puring',
    ulosMeaning:
      'Ulos Sadum Hande-hande : Ulos sadum hande hande adalah selendang adat Batak yang memiliki makna untuk selalu bersuka cita dan bersemangat. Ulos ini dapat digunakan untuk berbagai acara, baik suka maupun duka',
    description:
      'Outer Etnik - Tampilkan pesona etnik dengan outer kami. Pakaian luaran yang memadukan keunikan kain tradisional khas Batak (Ulos) dan desain modern yang elegan serta dikombinasikan dengan bahan linen yang premium berwarna hitam sehingga menonjolkan kemewahan dari corak ulos. Kimono ini didesain khusus untuk Anda yang ingin tampil stylish sekaligus memperkenalkan kekayaan budaya lokal.\n\nKeunggulan Produk :\n• Material Berkualitas : Terbuat dari bahan tenun ulos premium (benang 100) dan dipadu dengan kain linen hitam yang berkualitas premiun serta difinishing dengan kain tricot dan puring sehingga memperkokoh outer ini.\n• Motif Khas Ulos: Menggunakan kain ulos asli dengan tenun premium yang menjadi simbol kebanggaan budaya Batak, dengan corak geometris dan warna yang elegan seperti hitam dan putih.\n• Desain Fleksibel: Potongan modern yang cocok dipadukan dengan outfit formal maupun kasual, memberikan kesan tradisional sekaligus modis.\n\nCocok untuk :\n• Acara santai seperti hangout, jalan-jalan, atau liburan.\n• Acara resmi seperti pesta, pernikahan, atau sesi foto prewedding.\n\nPilihan Motif dan Warna :\n• Pilihan corak dan warna Ulos yang banyak dan bervariasi\n• Penggunaan kain kombinasi dengan warna cerah hingga netral yang memikat.',
    sizeChart: {
      S: { shoulder: 38, chest: 50, length: 64, sleeve: 37 },
      M: { shoulder: 40, chest: 52, length: 66, sleeve: 38 },
      L: { shoulder: 43, chest: 55, length: 69, sleeve: 39 },
      XL: { shoulder: 47, chest: 58, length: 71, sleeve: 41 },
      XXL: { shoulder: 50, chest: 61, length: 73, sleeve: 43 },
    },
  },
  {
    id: 3,
    title: 'Outer Lopian',
    code: 'OL001',
    type: 'Outer',
    price: 'Rp 385.000',
    image: 'assets/images/OL001/OL001_main.jpg',
    gallery: [
      'assets/images/OL001/OL001_main.jpg',
      'assets/images/OL001/OL001_1.jpg',
      'assets/images/OL001/OL001_2.jpg',
      'assets/images/OL001/OL001_3.jpg',
      'assets/images/OL001/OL001_4.jpg',
    ],
    baseMaterial: 'Cotton Blend',
    combinationMaterial: 'Traditional Weave',
    finishing: 'Premium Stitching',
    description:
      'Contemporary Outer Wear - Discover the perfect blend of modern sophistication and traditional craftsmanship with our Outer Lopian collection. This versatile piece features premium materials and contemporary design elements that make it suitable for various occasions.\n\nKey Features:\n• Premium Materials: Crafted from high-quality cotton blend fabric that offers excellent breathability and comfort throughout the day.\n• Modern Design: Clean lines and contemporary silhouette that complements both casual and semi-formal outfits.\n• Versatile Styling: Perfect for layering over shirts, blouses, or dresses for a polished look.\n• Durable Construction: Reinforced seams and quality finishing ensure long-lasting wear.\n\nIdeal For:\n• Business casual environments\n• Weekend outings and social gatherings\n• Travel and vacation wear\n• Transitional weather styling\n\nSizing & Fit:\n• Regular fit with comfortable room for movement\n• Available in multiple sizes to ensure perfect fit',
    sizeChart: {
      S: { shoulder: 40, chest: 48, length: 66, sleeve: 58 },
      M: { shoulder: 42, chest: 50, length: 68, sleeve: 59 },
      L: { shoulder: 44, chest: 52, length: 70, sleeve: 60 },
      XL: { shoulder: 46, chest: 54, length: 72, sleeve: 61 },
      XXL: { shoulder: 48, chest: 56, length: 74, sleeve: 62 },
    },
  },
  {
    id: 4,
    title: 'Outer Lopian',
    code: 'OL002',
    type: 'Outer',
    price: 'Rp 395.000',
    image: 'assets/images/OL002/OL002_main.jpg',
    gallery: [
      'assets/images/OL002/OL002_main.jpg',
      'assets/images/OL002/OL002_1.jpg',
      'assets/images/OL002/OL002_2.jpg',
      'assets/images/OL002/OL002_3.jpg',
      'assets/images/OL002/OL002_4.jpg',
    ],
    baseMaterial: 'Premium Cotton',
    combinationMaterial: 'Textured Weave',
    finishing: 'Enhanced Details',
    description:
      'Enhanced Outer Collection - The upgraded version of our popular Outer Lopian series, featuring refined details and superior materials. This piece represents the evolution of contemporary fashion with enhanced comfort and style.\n\nAdvanced Features:\n• Superior Fabric: Made from premium cotton with enhanced texture and improved drape for a luxurious feel.\n• Refined Details: Carefully crafted finishing touches including premium buttons and reinforced stress points.\n• Enhanced Comfort: Improved fit and breathability for all-day comfort in various weather conditions.\n• Sophisticated Design: Elevated styling with subtle design elements that add visual interest.\n\nPerfect For:\n• Professional meetings and presentations\n• Special occasions and events\n• Fashion-forward everyday wear\n• Sophisticated casual styling\n\nCare Instructions:\n• Machine washable with gentle cycle\n• Hang dry for best results\n• Iron on medium heat if needed',
    sizeChart: {
      S: { shoulder: 41, chest: 49, length: 67, sleeve: 58 },
      M: { shoulder: 43, chest: 51, length: 69, sleeve: 59 },
      L: { shoulder: 45, chest: 53, length: 71, sleeve: 60 },
      XL: { shoulder: 47, chest: 55, length: 73, sleeve: 61 },
      XXL: { shoulder: 49, chest: 57, length: 75, sleeve: 62 },
    },
  },
  {
    id: 5,
    title: 'Kemeja Togam',
    code: 'S002',
    type: 'Shirt',
    price: 'Rp 285.000',
    image: 'assets/images/S002/S002_main.jpg',
    gallery: ['assets/images/S002/S002_main.jpg', 'assets/images/S002/S002_1.jpg', 'assets/images/S002/S002_2.jpg'],
    baseMaterial: 'Cotton Poplin',
    combinationMaterial: 'Fine Weave',
    finishing: 'Professional Grade',
    description:
      'Premium Formal Shirt - Elevate your professional wardrobe with our Kemeja Togam collection. This sophisticated shirt combines classic tailoring with modern comfort, making it an essential piece for the contemporary professional.\n\nProfessional Excellence:\n• Premium Cotton Poplin: High-quality fabric that maintains its crisp appearance throughout the day.\n• Classic Tailoring: Traditional shirt construction with modern fit adjustments for optimal comfort.\n• Versatile Styling: Suitable for both formal business settings and smart casual occasions.\n• Quality Construction: Reinforced collar and cuffs with premium button selection.\n\nDesign Features:\n• Clean, minimalist aesthetic\n• Comfortable collar design\n• Optimal sleeve length and fit\n• Wrinkle-resistant properties\n\nSuitable For:\n• Business meetings and conferences\n• Formal presentations\n• Professional networking events\n• Smart casual dining\n\nMaintenance:\n• Easy care fabric\n• Maintains shape after washing\n• Professional dry cleaning recommended for best results',
    sizeChart: {
      S: { shoulder: 38, chest: 46, length: 72, sleeve: 60 },
      M: { shoulder: 40, chest: 48, length: 74, sleeve: 61 },
      L: { shoulder: 42, chest: 50, length: 76, sleeve: 62 },
      XL: { shoulder: 44, chest: 52, length: 78, sleeve: 63 },
      XXL: { shoulder: 46, chest: 54, length: 80, sleeve: 64 },
    },
  },
  {
    id: 6,
    title: 'Kemeja Togam',
    code: 'S001',
    type: 'Shirt',
    price: 'Rp 275.000',
    image: 'assets/images/S001/S001_main.jpg',
    gallery: ['assets/images/S001/S001_main.jpg', 'assets/images/S001/S001_1.jpg', 'assets/images/S001/S001_2.jpg', 'assets/images/S001/S001_3.jpg'],
    baseMaterial: 'Cotton Blend',
    combinationMaterial: 'Classic Weave',
    finishing: 'Standard Premium',
    description:
      'Essential Formal Shirt - The foundation piece of any professional wardrobe. Our Kemeja Togam S-001 offers timeless design and reliable quality that makes it perfect for daily professional wear.\n\nCore Features:\n• Quality Cotton Blend: Comfortable fabric that balances durability with breathability.\n• Timeless Design: Classic shirt styling that never goes out of fashion.\n• Reliable Fit: Consistent sizing and comfortable cut for everyday wear.\n• Professional Appearance: Clean lines and proper proportions for business settings.\n\nEveryday Excellence:\n• Comfortable for extended wear\n• Easy to maintain and care for\n• Pairs well with suits and blazers\n• Suitable for various professional environments\n\nIdeal Applications:\n• Daily office wear\n• Business casual settings\n• Professional training sessions\n• Client meetings\n\nValue Proposition:\n• Excellent quality-to-price ratio\n• Durable construction for long-term use\n• Versatile styling options\n• Professional appearance guaranteed',
    sizeChart: {
      S: { shoulder: 37, chest: 45, length: 71, sleeve: 59 },
      M: { shoulder: 39, chest: 47, length: 73, sleeve: 60 },
      L: { shoulder: 41, chest: 49, length: 75, sleeve: 61 },
      XL: { shoulder: 43, chest: 51, length: 77, sleeve: 62 },
      XXL: { shoulder: 45, chest: 53, length: 79, sleeve: 63 },
    },
  },
];

// Function to get gallery images for a product
function getGalleryImages(product) {
  // Return the gallery array from the product object
  return product.gallery || [product.image];
}

// Function to create WhatsApp order message
function createWhatsAppMessage(product, selectedSize) {
  const message = `Hello! I would like to order:

Product: ${product.title}
Code: ${product.code}
Size: ${selectedSize}
Price: ${product.price}

Please confirm availability and provide payment details.

Thank you!`;

  return encodeURIComponent(message);
}

// Load products dynamically
function loadProducts() {
  const productsGrid = document.getElementById('products-grid');

  products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.style.animationDelay = `${index * 0.1}s`;

    productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        `;

    // Add click event for product interaction
    productCard.addEventListener('click', () => {
      showProductModal(product);
    });

    productsGrid.appendChild(productCard);
  });
}

// Product modal functionality
function showProductModal(product) {
  // Get gallery images
  const galleryImages = getGalleryImages(product);

  // Generate gallery HTML
  const galleryHTML = `
    <div class="product-gallery">
      <div class="main-image">
        <img id="main-product-image" src="${product.image}" alt="${product.title}">
      </div>
      <div class="gallery-thumbnails">
        ${galleryImages
          .map(
            (img, index) => `
          <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}">
            <img src="${img}" alt="${product.title} ${index + 1}" onerror="this.style.display='none'">
          </div>
        `,
          )
          .join('')}
      </div>
    </div>
  `;

  // Generate size chart HTML
  const sizeChartHTML = product.sizeChart
    ? `
        <div class="size-chart">
            <h4>Size Chart (cm)</h4>
            <table class="size-table">
                <thead>
                    <tr>
                        <th>Size</th>
                        ${Object.keys(product.sizeChart.S)
                          .map((key) => `<th>${key.charAt(0).toUpperCase() + key.slice(1)}</th>`)
                          .join('')}
                    </tr>
                </thead>
                <tbody>
                    ${Object.entries(product.sizeChart)
                      .map(
                        ([size, measurements]) => `
                        <tr>
                            <td><strong>${size}</strong></td>
                            ${Object.values(measurements)
                              .map((value) => `<td>${value}</td>`)
                              .join('')}
                        </tr>
                    `,
                      )
                      .join('')}
                </tbody>
            </table>
        </div>
    `
    : '';

  // Create modal overlay
  const modal = document.createElement('div');
  modal.className = 'product-modal';
  modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <div class="modal-image">
                    ${galleryHTML}
                </div>
                <div class="modal-basic-info">
                    <h2 class="product-name">${product.title}</h2>
                    <p class="product-code">Product Code: ${product.code}</p>
                    <p class="product-type">Type: ${product.type}</p>
                    <p class="modal-price">${product.price}</p>

                    <div class="material-info">
                        <div class="material-item">
                            <strong>Base Material:</strong> ${product.baseMaterial}
                        </div>
                        <div class="material-item">
                            <strong>Combination Material:</strong> ${product.combinationMaterial}
                        </div>
                        <div class="material-item">
                            <strong>Finishing:</strong> ${product.finishing}
                        </div>
                    </div>

                    <div class="size-selector">
                        <label>Select Size:</label>
                        <select id="size-select">
                            ${Object.keys(product.sizeChart || {})
                              .map((size) => `<option value="${size}" ${size === 'M' ? 'selected' : ''}>${size}</option>`)
                              .join('')}
                        </select>
                    </div>

                    <button class="order-whatsapp-btn" onclick="orderViaWhatsApp('${product.code}', '${product.title}', '${product.price}')">
                        <i class="fab fa-whatsapp"></i> Order via WhatsApp
                    </button>
                </div>
            </div>

            <div class="modal-details">
                <div class="tabs">
                    <button class="tab-btn active" data-tab="description">Description</button>
                    <button class="tab-btn" data-tab="size-chart">Size Chart</button>
                    ${product.ulosMeaning ? '<button class="tab-btn" data-tab="ulos-meaning">Ulos Meaning</button>' : ''}
                </div>

                <div class="tab-content">
                    <div class="tab-pane active" id="description">
                        <div class="description-content">
                            ${product.description
                              .split('\n')
                              .map((line) => (line.trim() ? `<p>${line}</p>` : ''))
                              .join('')}
                        </div>
                    </div>

                    <div class="tab-pane" id="size-chart">
                        ${sizeChartHTML}
                    </div>

                    ${
                      product.ulosMeaning
                        ? `
                        <div class="tab-pane" id="ulos-meaning">
                            <div class="ulos-meaning-content">
                                <h4>Cultural Significance</h4>
                                <p>${product.ulosMeaning}</p>
                            </div>
                        </div>
                    `
                        : ''
                    }
                </div>
            </div>
        </div>
    `;

  document.body.appendChild(modal);

  // Gallery functionality
  const thumbnails = modal.querySelectorAll('.thumbnail');
  const mainImage = modal.querySelector('#main-product-image');

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      // Remove active class from all thumbnails
      thumbnails.forEach((t) => t.classList.remove('active'));
      // Add active class to clicked thumbnail
      thumbnail.classList.add('active');
      // Update main image
      const newImageSrc = thumbnail.dataset.image;
      mainImage.src = newImageSrc;
    });
  });

  // Tab functionality
  const tabBtns = modal.querySelectorAll('.tab-btn');
  const tabPanes = modal.querySelectorAll('.tab-pane');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;

      // Remove active class from all tabs and panes
      tabBtns.forEach((b) => b.classList.remove('active'));
      tabPanes.forEach((p) => p.classList.remove('active'));

      // Add active class to clicked tab and corresponding pane
      btn.classList.add('active');
      modal.querySelector(`#${targetTab}`).classList.add('active');
    });
  });

  // Close modal functionality
  const closeBtn = modal.querySelector('.close-modal');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
}

// WhatsApp order function
function orderViaWhatsApp(productCode, productTitle, productPrice) {
  const sizeSelect = document.getElementById('size-select');
  const selectedSize = sizeSelect ? sizeSelect.value : 'M';

  const message = `Hello! I would like to order:

Product: ${productTitle}
Code: ${productCode}
Size: ${selectedSize}
Price: ${productPrice}

Please confirm availability and provide payment details.

Thank you!`;

  const whatsappNumber = '6285262366023'; // WhatsApp number without + sign
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');
}

// CTA Button functionality
document.querySelector('.cta-button').addEventListener('click', () => {
  document.querySelector('#products').scrollIntoView({
    behavior: 'smooth',
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadProducts();

  // Observe elements for scroll animations
  document.querySelectorAll('.product-card, .step, .about-content').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
});

// Add some interactive hover effects
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.custom-cursor');
  if (!cursor) {
    const newCursor = document.createElement('div');
    newCursor.className = 'custom-cursor';
    document.body.appendChild(newCursor);
  }
});
