function checkForAdblocker() {
  // Create an element that mimics an ad and inject it into the page
  document.body.insertAdjacentHTML(
    "beforeend",
    '<ins data-adBlockTest class="adsbygoogle ad-zone ad-space ad-unit textads banner-ads banner_ads" style="display: block !important; width:1px !important; height: 1px !important; visibility: hidden !important;"></ins>'
  );
  const testAd = document.querySelector("[data-adBlockTest]");

  // Check to see if the visitor is running an Ad Blocker
  if (testAd) {
    const testAdWidth = testAd.offsetWidth;
    if (testAdWidth == "1") {
      console.log("########################################");
      console.log("No adblocker detected, will run a Multivariate Promotion");
      triggerPromotions();
    } else if (testAdWidth == "0") {
      console.log("########################################");
      console.log(
        "Adblocker detected, won't run any of the Multivariate Promotions"
      );
      console.log(
        "Triggering Promotion #92919: 2023 EOY Test 0 of 2 – OTG_CONTROL AdBlocker - W2310WDEVR1"
      );
      console.log("########################################");
      window.triggerPromotion(92919);
    }
  }
}

function triggerPromotions() {
  // Define the promotions to pick from
  const promotions = ["control", "test"];

  // Randomly pick and run one promotion
  if (promotions) {
    const myPromotion =
      promotions[Math.floor(Math.random() * promotions.length)];
    if (myPromotion == "control") {
      console.log(
        "Triggering Promotion #92920: 2023 EOY 1 of 2 – OTG_CONTROL - W2310WDEVR1LBA"
      );
      console.log("########################################");
      window.triggerPromotion(92920);
      window.dataLayer.push({
        event: "promotion_seen",
        promotionName:
          "Promotion #92920: 2023 EOY 1 of 2 – OTG_CONTROL - W2310WDEVR1LBA",
      });
    } else if (myPromotion == "test") {
      console.log(
        "Triggering Promotion #92921: 2023 EOY 2 of 2 – MONTHLY_DEFAULT - W2310WDEVR1LBB"
      );
      window.triggerPromotion(92921);
    } else {
      console.log(
        "The promotion chosen is outside the array and nothing was triggered"
      );
      console.log("########################################");
    }
  }
}

checkForAdblocker();
