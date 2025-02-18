import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutCategories extends Struct.ComponentSchema {
  collectionName: 'components_layout_categories';
  info: {
    description: '';
    displayName: 'categories';
  };
  attributes: {
    bracelets: Schema.Attribute.Media<'images'>;
    charms: Schema.Attribute.Media<'images'>;
    earrings: Schema.Attribute.Media<'images'>;
    necklaces: Schema.Attribute.Media<'images'>;
    pendants: Schema.Attribute.Media<'images'>;
    rings: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutCategoriesHover extends Struct.ComponentSchema {
  collectionName: 'components_layout_categories_hovers';
  info: {
    displayName: 'categories_hover';
  };
  attributes: {
    bracelets: Schema.Attribute.Media<'images'>;
    charms: Schema.Attribute.Media<'images'>;
    earrings: Schema.Attribute.Media<'images'>;
    necklaces: Schema.Attribute.Media<'images'>;
    pendants: Schema.Attribute.Media<'images'>;
    rings: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutCategoryBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_category_banners';
  info: {
    displayName: 'Category_Banner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
  };
}

export interface LayoutFeed extends Struct.ComponentSchema {
  collectionName: 'components_layout_feeds';
  info: {
    description: '';
    displayName: 'Feed';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    path: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
    icon: '';
  };
  attributes: {
    amex: Schema.Attribute.Media<'images'>;
    paypal: Schema.Attribute.Media<'images'>;
    visa: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutGuide extends Struct.ComponentSchema {
  collectionName: 'components_layout_guides';
  info: {
    displayName: 'guide';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    bangles: Schema.Attribute.Media<'images'>;
    collection: Schema.Attribute.Media<'images', true>;
    earrings: Schema.Attribute.Media<'images'>;
    gifts: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Media<'images'>;
    pendants: Schema.Attribute.Media<'images'>;
    rings: Schema.Attribute.Media<'images'>;
    shopall: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutHero2 extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_2s';
  info: {
    displayName: 'hero_2';
  };
  attributes: {
    img_1: Schema.Attribute.Media<'images'>;
    img_2: Schema.Attribute.Media<'images'>;
    img_3: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutHomeProduct extends Struct.ComponentSchema {
  collectionName: 'components_layout_home_products';
  info: {
    description: '';
    displayName: 'home_product';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    price: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface LayoutImageVariant extends Struct.ComponentSchema {
  collectionName: 'components_layout_image_variants';
  info: {
    displayName: 'imageVariant';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metalColor: Schema.Attribute.Enumeration<
      ['common', 'Rose', 'White', 'Yellow']
    >;
  };
}

export interface LayoutPolicy extends Struct.ComponentSchema {
  collectionName: 'components_layout_policies';
  info: {
    displayName: 'policy';
  };
  attributes: {
    buyback: Schema.Attribute.Media<'images'>;
    insurance: Schema.Attribute.Media<'images'>;
    return: Schema.Attribute.Media<'images'>;
    shipping: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutSizes extends Struct.ComponentSchema {
  collectionName: 'components_layout_sizes';
  info: {
    displayName: 'Sizes';
  };
  attributes: {
    default_size: Schema.Attribute.String;
    size: Schema.Attribute.JSON;
    size_guide_label: Schema.Attribute.String;
    size_guide_link: Schema.Attribute.String;
  };
}

export interface LayoutSlider extends Struct.ComponentSchema {
  collectionName: 'components_layout_sliders';
  info: {
    description: '';
    displayName: 'Slider';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface LayoutUsp extends Struct.ComponentSchema {
  collectionName: 'components_layout_usps';
  info: {
    displayName: 'Usp';
  };
  attributes: {
    usp_1: Schema.Attribute.Media<'images'>;
    usp_2: Schema.Attribute.Media<'images'>;
    usp_3: Schema.Attribute.Media<'images'>;
    usp_4: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutWeight extends Struct.ComponentSchema {
  collectionName: 'components_layout_weights';
  info: {
    description: '';
    displayName: 'Weight';
  };
  attributes: {
    components_weight: Schema.Attribute.String;
    diamond_weight: Schema.Attribute.String;
    metal_weight: Schema.Attribute.String;
    SKU: Schema.Attribute.String;
    stone_weight: Schema.Attribute.String;
    total_weight: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.categories': LayoutCategories;
      'layout.categories-hover': LayoutCategoriesHover;
      'layout.category-banner': LayoutCategoryBanner;
      'layout.feed': LayoutFeed;
      'layout.footer': LayoutFooter;
      'layout.guide': LayoutGuide;
      'layout.header': LayoutHeader;
      'layout.hero-2': LayoutHero2;
      'layout.home-product': LayoutHomeProduct;
      'layout.image-variant': LayoutImageVariant;
      'layout.policy': LayoutPolicy;
      'layout.sizes': LayoutSizes;
      'layout.slider': LayoutSlider;
      'layout.usp': LayoutUsp;
      'layout.weight': LayoutWeight;
    }
  }
}
