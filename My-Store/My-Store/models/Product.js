class Product {
    constructor(
      id,
      categoryIds,
      title,
      imageUrl,
      description,
      size,
      delivery,
      finalPrice
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.imageUrl = imageUrl;
      this.description = description;
      this.size = size;
      this.delivery = delivery;
      this.finalPrice = finalPrice;
    }
  }
export default Product;