document.addEventListener("DOMContentLoaded", function () {
  // Hide the loader when the DOM content is fully loaded
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }

 

  
});

function showPage(pageId) {
  const pageContent = travelData[pageId];
  if (pageContent) {
    // Update the page content dynamically
    const contentData = document.querySelector(".contentData");
    contentData.innerHTML = `
            <div class="mt-0">${pageContent.title}</div>
            <div>${pageContent.content}</div>
            <div>${pageContent.data1}</div>
            <div>${pageContent.data2}</div>
            <div>${pageContent.data3}</div>
            <div >${pageContent.data4}</div>
            <div>${pageContent.data5}</div>
            <div>${pageContent.data6}</div>
        `;
    scrollToTop();
    closeMenu();

   
  }
  // scrollToTop();
  
}
const navbar = document.getElementById("navbar");
const navLinks = document.querySelector("#navbar ul");
const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");

function openMenu() {
  navLinks.classList.toggle("show");
  hamburgerBtn.style.display = "none";
  closeBtn.style.display = "block";
}

function closeMenu() {
  navLinks.classList.remove("show");
  hamburgerBtn.style.display = "block";
  closeBtn.style.display = "none";
}
function showPackges(packId) {
  const packData = packagesData[packId];


  if (packData) {
    const contentData = document.querySelector(".contentData");
    contentData.innerHTML = `
      
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 pack1Trip">
                  <div class="bannerTrip d-grid align-bottom ">
                      <p style="padding: 8%;"></p>
                  </div>
              </div>
          </div>
      
      </div>
      <div class="container contentfixer">
          <div class="row md-mt-5 m-0 ">
              <div class="col-12 p-0">
                  <h5 class="NameTrip">${packData.title}</h5>
              </div>
              <div class="mobileView  justify-content-between p-0 ">
                  <div class="connector d-flex col-md-8 col-12 align-content-center ">
                      <p class="emailIDD loveRate"><i class="lni lni-envelope lixonsZ" onclick="shareContent()"></i> <span
                              class="logEmail" onclick="shareContent()">support@ladakhthrill.com</span></p>
                      <p class="contactDeal"><i class="lni lni-phone lixonsZ"></i>+91 99061 48198</p>
                  </div>
                  <div class=" d-flex mobile2 col-md-4 col-12  ">
                      <p class="loveRate">❤️ 248+</p>
                      <i class="lni lni-share" onclick="shareContent()"></i>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="container">
                  <div class="col-md-12 col-12 md-flex sm-grid ">
                      <hr>
                      <button class="overView" style="border-right: 1px solid grey;"
                          onclick="showNestedData('${packId}', 'overview')">Overview</button>
                      <button class="overView" style="border-right: 1px solid grey;"
                          onclick="showNestedData('${packId}', 'iternary')">Itinerary</button>
                      <button class="overView" style="border-right: 1px solid grey;"
                          onclick="showNestedData('${packId}', 'Gallery')">Travel Diaries</button>
                      <button class="overView" style="border-right: 1px solid grey;"
                          onclick="showNestedData('${packId}', 'FAQs')">FAQs</button>
                      <button class="overView" onclick="showNestedData('${packId}', 'maps')">Maps</button>
                      <hr>
                  </div>
              </div>
              <div class="contentData2"></div>
          </div>
          <div class="row mt-5 mb-3">
          <div class="col-md-12 col-12">
              <p class="popularPages">Recommendation To Explore</p>
          </div>
          <div class="col-md-3 col-sm-12 col-6 mt-3 ">
              <div class="card hotelView shadow ">
                  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="./assets/hideenValley/IMG-20240303-WA0028.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                          <img src="../assets/hideenValley/IMG-20240303-WA0025.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                          <img src="../assets/hideenValley/IMG-20240303-WA0015.jpg" class="d-block w-100" alt="...">
                        </div>
                      </div>
                    </div>
                  <div class="card-body ">
                    <p class="card-title stayNamer">Hidden Valley Homestay, Stakmo</p>
                    <p class="card-text"><i class="lni lni-star-fill"></i><i class="lni lni-star-fill"></i><i class="lni lni-star-fill"></i><i class="lni lni-star-fill"></i><i class="lni lni-star-fill"></i> <a href="https://www.google.com/travel/hotels/hidden%20valley%20homestay/entity/CgoI1v_UuuCovtlPEAE?q=hidden%20valley%20homestay&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4306835%2C4317915%2C4371335%2C4401769%2C4419364%2C4429192%2C4515404%2C4524134%2C4545890%2C4549823%2C4596364%2C4617195%2C4619746%2C4621105%2C4270859%2C4284970&gsas=1&client=ms-android-xiaomi-rvo2b&v=12.10.7.23.arm64&hl=en-IN&gl=in&ssta=1&rp=ENb_1LrgqL7ZTxDW_9S64Ki-2U84AkAASAHAAQI&ictx=1&ved=0CAAQ5JsGahcKEwjYzs2szLCEAxUAAAAAHQAAAAAQAw&utm_campaign=sharing&utm_medium=whatsapp&utm_source=htls&ts=CAEaIAoCGgASGhIUCgcI6A8QAhgWEgcI6A8QAhgXGAEyAhAAKgQKABoA" target="_blank" class="googleReview">Google review</a></p>
                    <a href="https://www.airbnb.co.in/rooms/32454697?source_impression_id=p3_1639556669_UCMRmcDz1R15SAhe" target="_blank" class="  packgeData">View on <i class="lni lni-airbnb" style="color: #FF385C;
                      ;"></i></a>
                  </div>
                </div>
          </div>
          <div class="col-md-3 col-sm-12 col-6 mt-3">
              <div class="card hotelView shadow ">
                  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="./assets/EcoLodge/IMG-20240306-WA0004.jpg" class="d-block w-100 " alt="..." height="222px">
                        </div>
                        <div class="carousel-item">
                          <img src="./assets/EcoLodge/IMG-20240306-WA0007.jpg" class="d-block w-100" alt="..." height="222px">
                        </div>
                        <div class="carousel-item">
                          <img src="./assets/EcoLodge/IMG-20240306-WA0003.jpg" class="d-block w-100" alt="..." height="222px">
                        </div>
                      </div>
                    </div>
                    <div class="card-body ">
                      <p class="card-title stayNamer"> Eco Lodge Leh, Stakmo</p>
                      <p class="card-text"><i class="lni lni-star-fill"></i><i class="lni lni-star-fill"></i><i class="lni lni-star-fill"></i><i class="lni lni-star-fill"></i><i class="lni lni-star-fill"></i> <a href="https://www.google.com/travel/search?q=Stakmo%20eco%20lodge%20Leh&g2lb=2502548%2C2503771%2C2503781%2C2504511%2C4258168%2C4284970%2C4291517%2C4814050%2C4874190%2C4893075%2C4965990%2C10208620%2C10209060%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72430562%2C72458066%2C72462234%2C72469155%2C72470440%2C72470899%2C72471280%2C72472051%2C72473738%2C72473841%2C72483525%2C72484083%2C72484736%2C72485656%2C72486593%2C72494250%2C72496942%2C72498532&hl=en-IN&gl=in&ssta=1&ts=CAEaKwopEicyJTB4MzhmZGVmZmVlNWYzZGQ2YjoweDVmNjdkZGEzOWY2NWIwNDU&qs=CAEyE0Nnb0l4ZUNXLTdtMDk3TmZFQUU4Ag&ap=ugEIb3ZlcnZpZXc&ictx=1" target="_blank" class="googleReview">Google review</a></p>
                      <a href="https://www.airbnb.co.in/rooms/32454697?source_impression_id=p3_1639556669_UCMRmcDz1R15SAhe" target="_blank" class="  packgeData">View on <i class="lni lni-airbnb" style="color: #FF385C;
                        ;"></i></a>
                    </div>
                </div>
          </div>
          <div class="col-md-3 col-sm-12 col-6 mt-3">
              <div class="card hotelView shadow ">
                  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="./Backup/IMG-20240116-WA0002.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                          <img src="./Backup/IMG-20240116-WA0002.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                          <img src="./Backup/IMG-20240116-WA0002.jpg" class="d-block w-100" alt="...">
                        </div>
                      </div>
                    </div>
                    <div class="card-body ">
                      <p class="card-title stayNamer">Sky Gazing, Stakmo.</p>
                      <p class="card-text"><i class="lni lni-star-fill"></i><i class="lni lni-star-fill"></i><i class="lni lni-star-fill"></i><i class="lni lni-star-fill"></i><i class="lni lni-star-fill"></i> <a href="https://www.google.com/travel/hotels/hidden%20valley%20homestay/entity/CgoI1v_UuuCovtlPEAE?q=hidden%20valley%20homestay&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4306835%2C4317915%2C4371335%2C4401769%2C4419364%2C4429192%2C4515404%2C4524134%2C4545890%2C4549823%2C4596364%2C4617195%2C4619746%2C4621105%2C4270859%2C4284970&gsas=1&client=ms-android-xiaomi-rvo2b&v=12.10.7.23.arm64&hl=en-IN&gl=in&ssta=1&rp=ENb_1LrgqL7ZTxDW_9S64Ki-2U84AkAASAHAAQI&ictx=1&ved=0CAAQ5JsGahcKEwjYzs2szLCEAxUAAAAAHQAAAAAQAw&utm_campaign=sharing&utm_medium=whatsapp&utm_source=htls&ts=CAEaIAoCGgASGhIUCgcI6A8QAhgWEgcI6A8QAhgXGAEyAhAAKgQKABoA" target="_blank" class="googleReview">Google review</a></p>
                      <a href="https://www.airbnb.co.in/rooms/32454697?source_impression_id=p3_1639556669_UCMRmcDz1R15SAhe" target="_blank" class="  packgeData">View on <i class="lni lni-airbnb" style="color: #FF385C;
                        ;"></i></a>
                    </div>
                </div>
          </div>
          <div class="col-md-3 col-sm-12 col-6 mt-3">
              <div class="card hotelView shadow ">
                  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="./Backup/IMG-20240116-WA0002.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                          <img src="./Backup/IMG-20240116-WA0002.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                          <img src="./Backup/IMG-20240116-WA0002.jpg" class="d-block w-100" alt="...">
                        </div>
                      </div>
                    </div>
                    <div class="card-body ">
                      <p class="card-title stayNamer mb-3">One Day Free Trekking in Ladakh</p>
                      
                      <a  class="  packgeData" onclick="showPackges('pack5')" style="cursor:pointer;">View more</a>
                    </div>
                </div>
          </div>
       </div>
      </div>
          `;
    scrollToTop();
  }
  if (packagesData.pack1===packData) {
    document.querySelector('.pack1Trip').style.backgroundImage = 'url(./assets/Nubra/nuPang.jpg)';
}
if (packagesData.pack3===packData) {
  document.querySelector('.pack1Trip').style.backgroundImage = 'url(./assets/Nubra/nubraScreen.jpg)';
}
if (packagesData.pack4===packData) {
  document.querySelector('.pack1Trip').style.backgroundImage = 'url(./assets/prateek-katyal-8wmEXx5QtgM-unsplash.jpg)';
}
if (packagesData.pack6===packData) {
  document.querySelector('.pack1Trip').style.backgroundImage = 'url(./assets/DSC_0035.jpg)';
}
if (packagesData.pack4===packData) {
  document.querySelector('.pack1Trip').style.backgroundImage = 'url(./assets/prateek-katyal-8wmEXx5QtgM-unsplash.jpg)';
}
if (packagesData.pack2===packData) {
  document.querySelector('.pack1Trip').style.backgroundImage = 'url(./assets/para.webp)';
}
  showNestedData(packId, "overview");
  
}

function showNestedData(packId, nestedKey) {
  const nestedData = packagesData[packId].packker[nestedKey];
  if (nestedData) {
    const contentData = document.querySelector(".contentData2");
    contentData.innerHTML = `
          <h2>${nestedKey.charAt(0).toUpperCase() + nestedKey.slice(1)}</h2>
          <div class="nested-data">
              <p>${nestedData}</p>
          </div>`;
    scrollToTop();
  }
}

showPage("home");

let currentIndex = 0;
const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card");

function nextSlide() {
  const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card");
  currentIndex = Math.min(currentIndex + 1, cards.length - 4);
  updateVisibility();
  
}

function prevSlide() {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateVisibility();
  
}

function updateVisibility() {
  const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card");
  const translateValue = currentIndex * -(270 + 24);
  cardContainer.style.transform = `translateX(${translateValue}px)`;
  
}

async function shareContent() {
  try {
    // Check if the Web Share API is supported
    if (navigator.share) {
      await navigator.share({
        title: "Ladakh Gateway Travel",
        text: "Discover the Best Great Tourism destinations, breathtaking views, and unique cultural experiences. Plan your adventure now!",
        url: "https://ladakhthrill.com",
      });
      console.log("Shared successfully");
    } else {
      // Fallback for browsers that do not support the Web Share API
      alert("Web Share API is not supported in this browser.");
    }
  } catch (error) {
    console.error("Error sharing:", error);
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
function submitForm() {
  if (validateForm()) {
    showSuccessPopup();
    sendFormData();
  }

  function sendFormData() {
    var formData = new FormData(document.getElementById("myForm"));
    var xhr = new XMLHttpRequest();
   
    xhr.open("POST", "connect.php", true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
       
        // You can add additional logic here based on the server response
      }
    };

    xhr.send(formData);
   
  }
}

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name === "" || email === "") {
    const failform = document.getElementById("fail-popup");
    failform.style.display = "block";
    setTimeout(function () {
      failform.style.display = "none";
    }, 3000);
    return false;
  }

  // Assuming you want to show the contact page if the form is valid
  showPage("contact");
  return true;
}

function showSuccessPopup() {
  var successPopup = document.getElementById("success-popup");
  successPopup.style.display = "flex";
  setTimeout(function () {
    successPopup.style.display = "none";
  }, 2000); // Hide popup after 2 seconds
}





window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-YN0GVJZQWX');