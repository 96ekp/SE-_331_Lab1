//const { createApp, ref } = Vue;
// Adding the computation property
const { createApp, ref, computed } = Vue;

createApp({
  // const app = createApp({
  setup() {
    const product = ref("Boots");
    const onSale = ref(true); // link to quesiton 7 if ture On sale  otherwish empty

    // bind the product description
    const description = ref("A stylish pair of boots");

    // const image = ref("./assets/images/socks_green.jpg");
    const image = computed(() => {
      return variants.value[selectedVariant.value].image;
    });
    //  If inStock is true, "In Stock" display
    // IF inStock is false "Out of Stock" display
    // const inStock = ref(true);

    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity > 0;
    });
    const inventory = ref(5);

    //add the onSale attribute and
    // display the product details using a loop iteration:
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    // add onSale attribute and display the product
    // Question: 3

    // add variant with images
    const variants = ref([
      {
        id: 2234,
        color: "green",
        image: "./assets/images/socks_green.jpg",
        quantity: 50,
      },
      {
        id: 2235,
        color: "blue",
        image: "./assets/images/socks_blue.jpg",
        quantity: 0,
      },
    ]);

    // cart variable
    const cart = ref(0);

    // addToCart method
    function addToCart() {
      cart.value += 1;
    }

    // show the sizes of the socks in a single line
    // Question: 4
    const sizes = ref(["S", "M", "L"]);

    const updateImage = (imageUrl) => {
      image.value = imageUrl;
    };

    // Question: 5 add botton method

    // const toggleStockStatus = () => {
    //   inStock.value = !inStock.value;
    // };

    // Question: 7 add botton method
    const toggleStockStatus = () => {
      onSale.value = !onSale.value;
    };

    const brand = ref("SE 331");
    const productBrand = computed(() => {
      return `${product.value} - ${brand.value}`;
    });

    // add titel
    const title = computed(() => {
      return brand.value + " " + product.value;
    });

    //  method is used to update the selected variant index when a color circle is hovered over
    function updateVariant(index) {
      selectedVariant.value = index;
    }
    //  keep track of the currently selected variant.
    const selectedVariant = ref(0);

    //  boolean data and display the message
    // Question: 7
    // const saleMessage = computed(() => {
    //   if (onSale.value) {
    //     return `${brand.value} ${product.value} is on sale`;
    //   } else {
    //     return "Sold out ";
    //   }
    // });

    const saleMessage = computed(() => {
      if (onSale.value) {
        return `${productBrand.value} is on sale`;
      } else {
        return "Not on sale";
      }
    });

    return {
      // product,
      description,
      image,
      inStock,
      inventory,
      details,
      onSale,
      variants,
      sizes,
      cart,
      addToCart,
      updateImage,
      toggleStockStatus,
      // brand,
      productBrand,
      title,
      updateVariant,
      selectedVariant,
      saleMessage,
    };
  },
});
// .mount("#app");
app.component("product-display", productDisplay);
app.mount("#app");
