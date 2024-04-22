import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <div className="logo">
      <a href="/">
        <img
          alt="quick-bite logo"
          src="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/tz3u8sc0vyqzofdktkl0"
        />
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <div className="HeadPart">
      <Title />
      <div className="navlist">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const dataOfRestaurants = [
  {
    info: {
      id: "729805",
      name: "Thazhvaram Resto Cafe",
      cloudinaryImageId: "6a02842e1e49566521d762c6f10972f5",
      locality: "Kudilimukk",
      areaName: "Kakkanad",
      costForTwo: "₹300 for two",
      cuisines: [
        "Arabian",
        "Sweets",
        "South Indian",
        "Chinese",
        "Juices",
        "Seafood",
        "Beverages",
      ],
      avgRating: 3.9,
      parentId: "476707",
      avgRatingString: "3.9",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-23 03:54:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f0f5cb15-02bb-4232-a0a9-2f7930d0062a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/thazhvaram-resto-cafe-kudilimukk-kakkanad-kochi-729805",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "384506",
      name: "Biriyani Bash",
      cloudinaryImageId: "bjyb5ksnd47d8btzqvyg",
      locality: "Janatha Road",
      areaName: "Palarivattom",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani"],
      avgRating: 3.6,
      parentId: "242261",
      avgRatingString: "3.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-23 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f0f5cb15-02bb-4232-a0a9-2f7930d0062a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/biriyani-bash-janatha-road-palarivattom-kochi-384506",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "784444",
      name: "Bilal Cafe",
      cloudinaryImageId: "8e82f6e42f5e5bde0649f1f8f48209d8",
      locality: "Padamughal",
      areaName: "Edapally",
      costForTwo: "₹1000 for two",
      cuisines: ["Arabian"],
      avgRating: 4,
      parentId: "366829",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-29 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "ABOVE ₹159",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f0f5cb15-02bb-4232-a0a9-2f7930d0062a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bilal-cafe-padamughal-edapally-kochi-784444",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "326441",
      name: "Uris Arabic Tea And Cafe",
      cloudinaryImageId: "cdnpj2utbkix9if48dob",
      locality: "Deshabhimani Road",
      areaName: "Kaloor",
      costForTwo: "₹200 for two",
      cuisines: ["Arabian", "Juices", "Beverages", "Kebabs", "Grill"],
      avgRating: 4.1,
      parentId: "220233",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-23 08:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f0f5cb15-02bb-4232-a0a9-2f7930d0062a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/uris-arabic-tea-and-cafe-deshabhimani-road-kaloor-kochi-326441",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "221435",
      name: "Khyber Fast Food",
      cloudinaryImageId: "z0ct50ztx6jznexhffvi",
      locality: "Nethaji Nagar",
      areaName: "Edappally",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Chinese", "North Indian"],
      avgRating: 4.3,
      parentId: "20372",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-23 23:57:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f0f5cb15-02bb-4232-a0a9-2f7930d0062a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/khyber-fast-food-nethaji-nagar-edappally-kochi-221435",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  areaName,
  cuisines,
}) => {
  return (
    <div className="restaurant">
      <img
        alt="food"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h4>{name}</h4>
      <h5>
        Rating: {avgRating} location: {areaName}
      </h5>
      <h6>{cuisines.join(" ,")}</h6>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-data">
      {dataOfRestaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppComponent = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
