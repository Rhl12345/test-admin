import { PageRoutes } from "@/admin-pages/routes";
import { IHistoryRecord } from "@/components/Modal/ViewHistoryModal";
import { MenuItem } from "@/components/Sidebar/types";
import SvgIcon from "@/components/SvgIcons/SvgIcon";
import {
  IDropdownOption,
  IDropdownPositionOptions,
} from "@/types/common/common.type";
import { IGiftCardFormFields } from "@/types/gift-card/giftCard.type";
import { IDashboardCard } from "@/types/main-dashboard/mainDashboard.type";
import { ITierRangeType } from "@/types/product-tier/productTier.type";
import { STORE_TYPES } from "@/types/products-database/productDatabase.type";

export const MenuList: MenuItem[] = [
  {
    id: "1_dashboard",
    label: "Dashboard",
    icon: "SidebarNavDashboard",
    href: "/dashboard",
  },
  {
    id: "2_master-product-feed",
    label: "Master Product Feed",
    icon: "SidebarNavMasterProductFeed",
    subItems: [
      {
        id: "2_1_dashboard",
        label: "Dashboard",
        href: PageRoutes.MASTER_PRODUCT_FEED.DASHBOARD,
      },
      {
        id: "2_2_product-feed",
        label: "Product Feed",
        href: PageRoutes.MASTER_PRODUCT_FEED.PRODUCT_FEED.LIST,
      },
      {
        id: "2_3_core-product-feed",
        label: "Core Product Feed",
        href: PageRoutes.MASTER_PRODUCT_FEED.CORE_PRODUCT_FEED.LIST,
      },
      {
        id: "2_4_configurator",
        label: "Configurator",
        subItems: [
          {
            id: "2_4_1_vendor",
            label: "Vendor",
            href: PageRoutes.VENDOR.LIST,
          },
          {
            id: "2_4_2_brand",
            label: "Brand",
            href: PageRoutes.BRAND.LIST,
          },
          {
            id: "2_4_3_brand-name-formula",
            label: "Brand Name Formula",
            href: PageRoutes.FORMULA_BRAND_NAME.LIST,
          },
          {
            id: "2_4_4_colors",
            label: "Colors Facets",
            href: PageRoutes.COLORS.LIST,
          },
          {
            id: "2_4_5_dimensions",
            label: "Product Dimensions",
            href: PageRoutes.DIMENSIONS.LIST,
          },
          {
            id: "2_4_6_logo-location",
            label: "Logo Location",
            href: PageRoutes.LOGO_LOCATION.LIST,
          },
          {
            id: "2_4_7_size-chart",
            label: "Size Chart",
            href: PageRoutes.SIZE_CHART.LIST,
          },
          {
            id: "2_4_8_product-categories",
            label: "Product Categories",
            href: PageRoutes.PRODUCT_CATEGORY.LIST,
          },
          {
            id: "2_4_9_size-master",
            label: "Product Sizes",
            href: PageRoutes.SIZE_MASTER.LIST,
          },
          {
            id: "2_4_10_product-attributes",
            label: "Product Attributes",
            href: PageRoutes.PRODUCT_ATTRIBUTES.LIST,
          },
          {
            id: "2_4_11_discount-tables",
            label: "Discount Tables",
            href: PageRoutes.DISCOUNT_TABLES.LIST,
          },
          {
            id: "2_4_12_product-tags",
            label: "Product Tags",
            href: PageRoutes.PRODUCT_TAG_MASTER.LIST,
          },
          {
            id: "2_4_13_product-requirement",
            label: "Product Requirement",
            href: PageRoutes.PRODUCT_REQUIREMENT.LIST,
          },
          {
            id: "2_4_14_seo-requirement",
            label: "SEO Requirement",
            href: PageRoutes.SEO_REQUIREMENT.LIST,
          },
          {
            id: "2_4_15_product-tier",
            label: "Product Tiers",
            href: PageRoutes.PRODUCT_TIER.LIST,
          },
          {
            id: "2_4_16_payment-types",
            label: "Payment Types",
            href: PageRoutes.PAYMENT_TYPES.LIST,
          },
          {
            id: "2_4_17_shipping-carrier",
            label: "Shipping Carriers",
            href: PageRoutes.SHIPPING_CARRIERS.LIST,
          },
          {
            id: "2_4_18_shipping-method",
            label: "Shipping Methods",
            href: PageRoutes.SHIPPING_METHOD.LIST,
          },
          {
            id: "2_4_19_shipping-cost",
            label: "Shipping Costs",
            href: PageRoutes.SHIPPING_COST.LIST,
          },
          {
            id: "2_4_20_email-autoresponders",
            label: "Email Autoresponders",
            href: PageRoutes.EMAIL_TEMPLATE.LIST,
          },
          {
            id: "2_4_21_messages",
            label: "Messages",
            href: PageRoutes.MESSAGES.LIST,
          },
          {
            id: "2_4_22_news-letter",
            label: "News Letter",
            href: PageRoutes.NEWS_LETTER.LIST,
          },
          {
            id: "2_4_23_fix-charges",
            label: "Fix Charges",
            href: PageRoutes.FIX_CHARGES.LIST,
          },
          {
            id: "2_4_24_page-redirect",
            label: "Page Redirect",
            href: PageRoutes.PAGE_REDIRECT.LIST,
          },
          {
            id: "2_4_25_bc-sku-mapping",
            label: "BC SKU Mapping",
            href: PageRoutes.NAV_SKU_MAPPING.LIST,
          },
          {
            id: "2_4_26_group-description",
            label: "Group Description",
            href: PageRoutes.GROUP_DESCRIPTION.LIST,
          },
          {
            id: "2_4_27_thread-brand",
            label: "Thread Brand",
            href: PageRoutes.THREAD_BRAND.LIST,
          },
          {
            id: "2_4_28_thread-group-color-option",
            label: "Thread Group Color Option",
            href: PageRoutes.THREAD_GROUP_COLOR.LIST,
          },
        ],
      },
      {
        id: "2_5_setting",
        label: "Setting",
        subItems: [
          {
            id: "2_5_1_clear-cache",
            label: "Clear Cache",
            href: PageRoutes.MASTER_PRODUCT_FEED.CLEAR_CACHE,
          },
        ],
      },
    ],
  },
  {
    id: "3_content-management",
    label: "Content Management",
    icon: "SidebarNavContentManagement",
    subItems: [
      {
        id: "3_1_content-builder",
        label: "Content Builder",
        href: PageRoutes.CONTENT_MANAGEMENT.LIST,
      },
      {
        id: "3_2_story-category",
        label: "Story Category",
        href: PageRoutes.CONTENT_MANAGEMENT.STORY_CATEGORY,
      },
    ],
  },
  {
    id: "4_stores",
    label: "Stores",
    icon: "SidebarNavStores",
    subItems: [
      {
        id: "4_1_dashboard",
        label: "Dashboard",
        href: PageRoutes.STORE.DASHBOARD,
      },
      {
        id: "4_2_all-stores",
        label: "All Stores",
        subItems: [
          {
            id: "4_2_1_stores",
            label: "Stores",
            href: PageRoutes.STORE.LIST,
          },
        ],
      },
      {
        id: `4_3_${STORE_TYPES.ECOMMERCE}`,
        label: "Ecommerce",
        subItems: [
          {
            id: `4_3_1_${STORE_TYPES.ECOMMERCE}_corporate-gear`,
            label: "Corporate Gear",
            subItems: [
              {
                id: `4_3_1_1_${STORE_TYPES.ECOMMERCE}_corporate-gear_products`,
                label: "Products",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/corporate-gear/products`,
              },
              {
                id: `4_3_1_2_${STORE_TYPES.ECOMMERCE}_corporate-gear_brand-master`,
                label: "Brand Master",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/corporate-gear/brand-master`,
              },
              {
                id: `4_3_1_3_${STORE_TYPES.ECOMMERCE}_corporate-gear_category-master`,
                label: "Category Master",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/corporate-gear/category-master`,
              },
              {
                id: `4_3_1_4_${STORE_TYPES.ECOMMERCE}_corporate-gear_product-order`,
                label: "Product Order",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/corporate-gear/product-order`,
              },
              {
                id: `4_3_1_5_${STORE_TYPES.ECOMMERCE}_corporate-gear_gift-card`,
                label: "Gift Card",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/corporate-gear/gift-card`,
              },
              {
                id: `4_3_1_6_${STORE_TYPES.ECOMMERCE}_corporate-gear_category-order`,
                label: "Category Order",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/corporate-gear/category-order`,
              },
              {
                id: `4_3_1_7_${STORE_TYPES.ECOMMERCE}_corporate-gear_brand-order`,
                label: "Brand Order",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/corporate-gear/brand-order`,
              },
              {
                id: `4_3_1_8_${STORE_TYPES.ECOMMERCE}_corporate-gear_bundle`,
                label: "Bundle",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/corporate-gear/bundle`,
              },
            ],
          },
          {
            id: `4_3_2_${STORE_TYPES.ECOMMERCE}_game-day-gear`,
            label: "Game Day Gear",
            subItems: [
              {
                id: `4_3_2_1_${STORE_TYPES.ECOMMERCE}_game-day-gear_products`,
                label: "Products",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/game-day-gear/products`,
              },
              {
                id: `4_3_2_2_${STORE_TYPES.ECOMMERCE}_game-day-gear_brand-master`,
                label: "Brand Master",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/game-day-gear/brand-master`,
              },
              {
                id: `4_3_2_3_${STORE_TYPES.ECOMMERCE}_game-day-gear_category-master`,
                label: "Category Master",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/game-day-gear/category-master`,
              },
              {
                id: `4_3_2_4_${STORE_TYPES.ECOMMERCE}_game-day-gear_product-order`,
                label: "Product Order",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/game-day-gear/product-order`,
              },
              {
                id: `4_3_2_5_${STORE_TYPES.ECOMMERCE}_game-day-gear_gift-card`,
                label: "Gift Card",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/game-day-gear/gift-card`,
              },
              {
                id: `4_3_2_6_${STORE_TYPES.ECOMMERCE}_game-day-gear_category-order`,
                label: "Category Order",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/game-day-gear/category-order`,
              },
              {
                id: `4_3_2_7_${STORE_TYPES.ECOMMERCE}_game-day-gear_brand-order`,
                label: "Brand Order",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/game-day-gear/brand-order`,
              },
              {
                id: `4_3_2_8_${STORE_TYPES.ECOMMERCE}_game-day-gear_bundle`,
                label: "Bundle",
                href: `/admin/stores/${STORE_TYPES.ECOMMERCE}/game-day-gear/bundle`,
              },
            ],
          },
        ],
      },
      {
        id: `4_4_${STORE_TYPES.CORPORATE}`,
        label: "Corporate",
        subItems: [
          {
            id: `4_4_1_${STORE_TYPES.CORPORATE}_porsche`,
            label: "Porsche",
            subItems: [
              {
                id: `4_4_1_1_${STORE_TYPES.CORPORATE}_porsche_products`,
                label: "Products",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/porsche/products`,
              },
              {
                id: `4_4_1_2_${STORE_TYPES.CORPORATE}_porsche_brand-master`,
                label: "Brand Master",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/porsche/brand-master`,
              },
              {
                id: `4_4_1_3_${STORE_TYPES.CORPORATE}_porsche_category-master`,
                label: "Category Master",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/porsche/category-master`,
              },
              {
                id: `4_4_1_4_${STORE_TYPES.CORPORATE}_porsche_product-order`,
                label: "Product Order",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/porsche/product-order`,
              },
              {
                id: `4_4_1_5_${STORE_TYPES.CORPORATE}_porsche_gift-card`,
                label: "Gift Card",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/porsche/gift-card`,
              },
              {
                id: `4_4_1_6_${STORE_TYPES.CORPORATE}_porsche_category-order`,
                label: "Category Order",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/porsche/category-order`,
              },
              {
                id: `4_4_1_7_${STORE_TYPES.CORPORATE}_porsche_brand-order`,
                label: "Brand Order",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/porsche/brand-order`,
              },
              {
                id: `4_4_1_8_${STORE_TYPES.CORPORATE}_porsche_bundle`,
                label: "Bundle",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/porsche/bundle`,
              },
            ],
          },
          {
            id: `4_4_2_${STORE_TYPES.CORPORATE}_bacardi`,
            label: "Bacardi",
            subItems: [
              {
                id: `4_4_2_1_${STORE_TYPES.CORPORATE}_bacardi_products`,
                label: "Products",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/bacardi/products`,
              },
              {
                id: `4_4_2_2_${STORE_TYPES.CORPORATE}_bacardi_brand-master`,
                label: "Brand Master",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/bacardi/brand-master`,
              },
              {
                id: `4_4_2_3_${STORE_TYPES.CORPORATE}_bacardi_category-master`,
                label: "Category Master",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/bacardi/category-master`,
              },
              {
                id: `4_4_2_4_${STORE_TYPES.CORPORATE}_bacardi_product-order`,
                label: "Product Order",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/bacardi/product-order`,
              },
              {
                id: `4_4_2_5_${STORE_TYPES.CORPORATE}_bacardi_gift-card`,
                label: "Gift Card",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/bacardi/gift-card`,
              },
              {
                id: `4_4_2_6_${STORE_TYPES.CORPORATE}_bacardi_category-order`,
                label: "Category Order",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/bacardi/category-order`,
              },
              {
                id: `4_4_2_7_${STORE_TYPES.CORPORATE}_bacardi_brand-order`,
                label: "Brand Order",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/bacardi/brand-order`,
              },
              {
                id: `4_4_2_8_${STORE_TYPES.CORPORATE}_bacardi_bundle`,
                label: "Bundle",
                href: `/admin/stores/${STORE_TYPES.CORPORATE}/bacardi/bundle`,
              },
            ],
          },
        ],
      },
      {
        id: `4_5_${STORE_TYPES.STORE_BUILDER}`,
        label: "Store Builder",
        subItems: [
          {
            id: `4_5_1_${STORE_TYPES.STORE_BUILDER}_pk-stores`,
            label: "PK Stores",
            subItems: [
              {
                id: `4_5_1_1_${STORE_TYPES.STORE_BUILDER}_pk-stores_stores`,
                label: "Stores",
                href: `/admin/stores/${STORE_TYPES.STORE_BUILDER}/pk-stores/store`,
              },
              {
                id: `4_5_1_2_${STORE_TYPES.STORE_BUILDER}_pk-stores_brand-master`,
                label: "Brand Master",
                href: `/admin/stores/${STORE_TYPES.STORE_BUILDER}/pk-stores/brand-master`,
              },
              {
                id: `4_5_1_3_${STORE_TYPES.STORE_BUILDER}_pk-stores_products`,
                label: "Products",
                href: `/admin/stores/${STORE_TYPES.STORE_BUILDER}/pk-stores/products`,
              },
              {
                id: `4_5_1_4_${STORE_TYPES.STORE_BUILDER}_pk-stores_category-master`,
                label: "Category Master",
                href: `/admin/stores/${STORE_TYPES.STORE_BUILDER}/pk-stores/category-master`,
              },
              {
                id: `4_5_1_5_${STORE_TYPES.STORE_BUILDER}_pk-stores_category-order`,
                label: "Category Order",
                href: `/admin/stores/${STORE_TYPES.STORE_BUILDER}/pk-stores/category-order`,
              },
              {
                id: `4_5_1_6_${STORE_TYPES.STORE_BUILDER}_pk-stores_brand-order`,
                label: "Brand Order",
                href: `/admin/stores/${STORE_TYPES.STORE_BUILDER}/pk-stores/brand-order`,
              },
            ],
          },
          {
            id: `4_5_2_${STORE_TYPES.STORE_BUILDER}_cg-stores`,
            label: "CG Stores",
            subItems: [
              {
                id: `4_5_2_1_${STORE_TYPES.STORE_BUILDER}_cg-stores_stores`,
                label: "Stores",
                href: `/admin/stores/${STORE_TYPES.STORE_BUILDER}/cg-stores/store`,
              },
              {
                id: `4_5_2_2_${STORE_TYPES.STORE_BUILDER}_cg-stores_brand-master`,
                label: "Brand Master",
                href: `/admin/stores/${STORE_TYPES.STORE_BUILDER}/cg-stores/brand-master`,
              },
              {
                id: `4_5_2_3_${STORE_TYPES.STORE_BUILDER}_cg-stores_products`,
                label: "Products",
                href: `/admin/stores/${STORE_TYPES.STORE_BUILDER}/cg-stores/products`,
              },
              {
                id: `4_5_2_4_${STORE_TYPES.STORE_BUILDER}_cg-stores_category-master`,
                label: "Category Master",
                href: `/admin/stores/${STORE_TYPES.STORE_BUILDER}/cg-stores/category-master`,
              },
              {
                id: `4_5_2_5_${STORE_TYPES.STORE_BUILDER}_cg-stores_category-order`,
                label: "Category Order",
                href: `/admin/stores/${STORE_TYPES.STORE_BUILDER}/cg-stores/category-order`,
              },
              {
                id: `4_5_2_6_${STORE_TYPES.STORE_BUILDER}_cg-stores_brand-order`,
                label: "Brand Order",
                href: `/admin/stores/${STORE_TYPES.STORE_BUILDER}/cg-stores/brand-order`,
              },
            ],
          },
        ],
      },
      {
        id: `4_6_${STORE_TYPES.FORM_BUILDER}`,
        label: "Form Builder",
        subItems: [
          {
            id: `4_6_1_${STORE_TYPES.FORM_BUILDER}_pk-forms`,
            label: "PK Forms",
            subItems: [
              {
                id: `4_6_1_1_${STORE_TYPES.FORM_BUILDER}_pk-forms_forms`,
                label: "Forms",
                href: `/admin/stores/${STORE_TYPES.FORM_BUILDER}/pk-forms/store`,
              },
              {
                id: `4_6_1_2_${STORE_TYPES.FORM_BUILDER}_pk-forms_brand-master`,
                label: "Brand Master",
                href: `/admin/stores/${STORE_TYPES.FORM_BUILDER}/pk-forms/brand-master`,
              },
              {
                id: `4_6_1_3_${STORE_TYPES.FORM_BUILDER}_pk-forms_products`,
                label: "Products",
                href: `/admin/stores/${STORE_TYPES.FORM_BUILDER}/pk-forms/products`,
              },
              {
                id: `4_6_1_4_${STORE_TYPES.FORM_BUILDER}_pk-forms_category-master`,
                label: "Category Master",
                href: `/admin/stores/${STORE_TYPES.FORM_BUILDER}/pk-forms/category-master`,
              },
              {
                id: `4_6_1_5_${STORE_TYPES.FORM_BUILDER}_pk-forms_category-order`,
                label: "Category Order",
                href: `/admin/stores/${STORE_TYPES.FORM_BUILDER}/pk-forms/category-order`,
              },
              {
                id: `4_6_1_6_${STORE_TYPES.FORM_BUILDER}_pk-forms_brand-order`,
                label: "Brand Order",
                href: `/admin/stores/${STORE_TYPES.FORM_BUILDER}/pk-forms/brand-order`,
              },
            ],
          },
          {
            id: `4_6_2_${STORE_TYPES.FORM_BUILDER}_cg-forms`,
            label: "CG Forms",
            subItems: [
              {
                id: `4_6_2_1_${STORE_TYPES.FORM_BUILDER}_cg-forms_forms`,
                label: "Forms",
                href: `/admin/stores/${STORE_TYPES.FORM_BUILDER}/cg-forms/9/forms`,
              },
              {
                id: `4_6_2_2_${STORE_TYPES.FORM_BUILDER}_cg-forms_products`,
                label: "Products",
                href: `/admin/stores/${STORE_TYPES.FORM_BUILDER}/cg-forms/products`,
              },
              {
                id: `4_6_2_3_${STORE_TYPES.FORM_BUILDER}_cg-forms_category-master`,
                label: "Category Master",
                href: `/admin/stores/${STORE_TYPES.FORM_BUILDER}/cg-forms/category-master`,
              },
              {
                id: `4_6_2_4_${STORE_TYPES.FORM_BUILDER}_cg-forms_brand-master`,
                label: "Brand Master",
                href: `/admin/stores/${STORE_TYPES.FORM_BUILDER}/cg-forms/brand-master`,
              },
              {
                id: `4_6_2_5_${STORE_TYPES.FORM_BUILDER}_cg-forms_category-order`,
                label: "Category Order",
                href: `/admin/stores/${STORE_TYPES.FORM_BUILDER}/cg-forms/category-order`,
              },
              {
                id: `4_6_2_6_${STORE_TYPES.FORM_BUILDER}_cg-forms_brand-order`,
                label: "Brand Order",
                href: `/admin/stores/${STORE_TYPES.FORM_BUILDER}/cg-forms/brand-order`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "5_customers",
    label: "Customers",
    icon: "SidebarNavCustomers",
    subItems: [
      {
        id: "5_1_customer-dashboard",
        label: "Dashboard",
        href: PageRoutes.CUSTOMER.DASHBOARD,
      },
      {
        id: "5_2_customer",
        label: "Customers",
        href: PageRoutes.CUSTOMER.LIST,
      },
      {
        id: "5_3_company",
        label: "Company",
        href: PageRoutes.COMPANY.LIST,
      },
      {
        id: "5_4_consultation-request",
        label: "Consultation Request",
        href: PageRoutes.CUSTOMER.CONSULTATION_REQUEST_LIST,
      },
      {
        id: "5_5_contact-us",
        label: "Contact Us",
        href: PageRoutes.CONTACT_US.LIST,
      },
      {
        id: "5_6_abandoned-shopping-cart",
        label: "Abandoned Shopping Cart",
        href: PageRoutes.CUSTOMER.ABANDONED_SHOPPING_CART_LIST,
      },
      {
        id: "5_7_customer-application-list",
        label: "Customer Application List",
        href: PageRoutes.CUSTOMER_APPLICATION_LIST.LIST,
      },
      {
        id: "5_8_manage-bulk-tier",
        label: "Manage Bulk Tier",
        href: PageRoutes.MANAGE_BULK_TIER.LIST,
      },
      {
        id: "5_9_customer-gift-card",
        label: "Customer Gift Card",
        href: PageRoutes.GIFT_CARD.LIST,
      },
      {
        id: "5_10_special-request",
        label: "Special Request",
        href: PageRoutes.SPECIAL_REQUEST.LIST,
      },
      {
        id: "5_11_customer-quote-list",
        label: "Customer Quote List",
        href: PageRoutes.CUSTOMER.QUOTE_LIST,
      },
    ],
  },
  {
    id: "6_promotions",
    label: "Promotions",
    icon: "SidebarNavPromotions",
    subItems: [
      {
        id: "6_1_coupon-codes",
        label: "Coupon Codes",
        href: "/admin/promotions/couponcode",
      },
    ],
  },
  {
    id: "7_orders",
    label: "Orders",
    icon: "SidebarNavOrders",
    subItems: [
      {
        id: "7_1_order_dashboard",
        label: "Dashboard",
        href: PageRoutes.ORDERS.DASHBOARD,
      },
      {
        id: "7_2_order_list",
        label: "Order List",
        href: PageRoutes.ORDERS.LIST,
      },
      {
        id: "7_3_draft-phone-order",
        label: "Draft/Phone Order",
        href: PageRoutes.ORDERS.PHONE_ORDER,
      },
    ],
  },
  {
    id: "8_settings",
    label: "Settings",
    icon: "SidebarNavSettings",
    subItems: [
      {
        id: "8_1_dashboard",
        label: "Dashboard",
        href: PageRoutes.SETTINGS.DASHBOARD,
      },
      {
        id: "8_2_profile",
        label: "Profile",
        href: `${PageRoutes.PROFILE.MY_ACCOUNT}/74`,
      },
      {
        id: "8_3_roles",
        label: "Roles",
        href: PageRoutes.ROLES.LIST,
      },
      {
        id: "8_4_user",
        label: "User",
        href: "/admin/settings/users",
      },
      {
        id: "8_5_system-log",
        label: "System Log",
        href: PageRoutes.SYSTEM_LOG.LIST,
      },
      {
        id: "8_6_account-activity",
        label: "Account Activity",
        href: PageRoutes.ACCOUNT_ACTIVITY.LIST,
      },
    ],
  },
  {
    id: "9_configurator",
    label: "Configurator",
    icon: "SidebarNavConfigurator",
    subItems: [
      {
        id: "9_1_company-configuration",
        label: "Company Configuration",
        href: PageRoutes.COMPANY_CONFIGURATION.LIST,
      },
      {
        id: "9_2_modules",
        label: "Modules",
        href: PageRoutes.MODULES.LIST,
      },
      {
        id: "9_3_seo-configurator",
        label: "Seo Configuration",
        href: PageRoutes.SEO_CONFIGURATOR.CREATE_EDIT,
      },
      {
        id: "9_4_theme-configuration",
        label: "Theme Configuration",
        href: PageRoutes.THEME_CONFIGURATION.LIST,
      },
      {
        id: "9_5_third-party-service",
        label: "Third Party Services",
        href: PageRoutes.THIRD_PARTY_SERVICE.LIST,
      },
      {
        id: "9_6_account-settings",
        label: "Settings",
        href: PageRoutes.ACCOUNT_SETTINGS.LIST,
      },
      {
        id: "9_7_widget-module-mapping",
        label: "Widget Module Mapping",
        href: PageRoutes.WIDGET_MODULE.LIST,
      },
    ],
  },
  {
    id: "10_reports",
    label: "Reports",
    icon: "SidebarNavReports",
    href: "",
    subItems: [
      {
        id: "10_1_dashboard",
        label: "Dashboard",
        href: PageRoutes.REPORTS.LIST,
      },
      {
        id: "10_2_products",
        label: "Products",
        href: "",
        subItems: [
          {
            id: "10_2_1_item-sale-by-markets",
            label: "Item Sale By Markets",
            href: PageRoutes.REPORTS.ITEM_SALE_BY_MARKETS,
          },
          {
            id: "10_2_2_product-summary-report",
            label: "Product Summary Report",
            href: PageRoutes.REPORTS.PRODUCT_SUMMARY,
          },
          {
            id: "10_2_3_comparative-sales-report",
            label: "Comparative sales by time period",
            href: PageRoutes.REPORTS.COMPARATIVE_SALES_REPORT,
          },
          {
            id: "10_2_4_top-100-selling-products",
            label: "Top 100 selling products",
            href: PageRoutes.REPORTS.TOP_100_SELLING_PRODUCTS,
          },
          {
            id: "10_2_5_low-inventory-report",
            label: "Low Inventory Report",
            href: PageRoutes.REPORTS.LOW_INVENTORY,
          },
          {
            id: "10_2_6_brandwise-product-report",
            label: "Brandwise Product Report",
            href: PageRoutes.REPORTS.BRAND_WISE_PRODUCT_REPORT,
          },
          {
            id: "10_2_7_vendorwise-product-report",
            label: "Vendorwise Product Report",
            href: PageRoutes.REPORTS.VENDORWISE_PRODUCT_REPORT,
          },
          {
            id: "10_2_8_product-status-report",
            label: "Product Status Report",
            href: PageRoutes.REPORTS.PRODUCT_STATUS_REPORT,
          },
          {
            id: "10_2_9_product-listing-report",
            label: "Product Listing Report",
            href: PageRoutes.REPORTS.PRODUCT_LISTING_REPORT,
          },
          {
            id: "10_2_10_product-calculation-report",
            label: "Product Calculation Report",
            href: PageRoutes.REPORTS.PRODUCT_CALCULATION_REPORT,
          },
          {
            id: "10_2_11_master-product-inventory-report",
            label: "Master Product Inventory Report",
            href: PageRoutes.REPORTS.MASTER_PRODUCT_INVENTORY_REPORT,
          },
        ],
      },
      {
        id: "10_3_orders",
        label: "Orders",
        href: "",
        subItems: [
          {
            id: "10_3_1_order-beneficial-report",
            label: "Order beneficial report",
            href: PageRoutes.REPORTS.ORDER_BENEFICIAL_REPORT,
          },
          {
            id: "10_3_2_order-state-tax-report",
            label: "Order state tax report",
            href: PageRoutes.REPORTS.ORDER_STATE_TAX_REPORT,
          },
          {
            id: "10_3_3_order-number-sales-tax-report",
            label: "Order number sales tax report",
            href: PageRoutes.REPORTS.ORDER_NUMBER_SALE_TAX_REPORT,
          },
          {
            id: "10_3_4_order-statistics",
            label: "Order statistics",
            href: PageRoutes.REPORTS.ORDER_STATISTICS,
          },
        ],
      },
      {
        id: "10_4_inquiries",
        label: "Business Accounting Reports",
        href: "",
        subItems: [
          {
            id: "10_4_1_sales-summary-by-store",
            label: "Sales summary By Store (Received Orders)",
            href: PageRoutes.REPORTS.SALES_SUMMARY_BY_STORE,
          },
          {
            id: "10_4_2_revenue-summary",
            label: "Revenue Summary",
            href: PageRoutes.REPORTS.REVENUE_SUMMARY,
          },
          {
            id: "10_4_3_sales-summary-by-store-shipped-date",
            label: "Sales Summary By Store (Shipped Date)",
            href: PageRoutes.REPORTS.SALES_SUMMARY_BY_STORE_SHIPPED_DATE,
          },
          {
            id: "10_4_4_business-intelligence",
            label: "Business Intelligence",
            href: PageRoutes.REPORTS.BUSINESS_INTELLIGENCE,
          },
        ],
      },
      {
        id: "10_5_mail-log",
        label: "Custom",
        href: "",
        subItems: [
          {
            id: "10_5_1_mail-log",
            label: "Mail Log",
            href: PageRoutes.REPORTS.MAIL_LOG,
          },
          {
            id: "10_5_2_inquiries-list-report",
            label: "Inquiries List Report",
            href: PageRoutes.REPORTS.INQUIRIES_LIST_REPORT,
          },
        ],
      },
    ],
  },
];

export const REPORTING_TO_OPTIONS = [
  { value: "1", label: "Manager 1" },
  { value: "2", label: "Manager 2" },
];

export const STATUS_OPTIONS = [
  { value: "A", label: "Active" },
  { value: "I", label: "Inactive" },
];

export const THIRD_PART_SERVICE_OPTION = [
  { value: "1", label: "SAML" },
  { value: "2", label: "Coupa" },
  { value: "3", label: "Customer Lead" },
  // Add more options as needed
];

export const STORE_OPTIONS = [
  { value: "1", label: "Corporate Gear" },
  { value: "2", label: "Boston Beer" },
  { value: "3", label: "Uniti" },
  // Add more options as needed
];

export const categoryStatusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

export const coreProductFeedTabs = [
  { id: 1, label: "All", recordCount: 0 },
  { id: 2, label: "Active", recordCount: 0 },
  { id: 3, label: "Inactive", recordCount: 0 },
  { id: 4, label: "Draft", recordCount: 0 },

  { id: 5, label: "Discontinued", recordCount: 0 },
  { id: 6, label: "Synced with BC", recordCount: 0 },

  { id: 7, label: "Resync with BC", recordCount: 0 },
  { id: 8, label: "BC Sync Pending", recordCount: 0 },

  { id: 9, label: "Color Discontinue", recordCount: 0 },
];

export const WEBSITE_PAGE = "Website Page";
export const LANDING_PAGE = "Landing Page";
export const BLOG = "Blog";

export const inventoryFeedOptions: IDropdownOption[] = [
  {
    label: "Alpha Border",
    value: "alpha_border",
  },
  {
    label: "Charls River Apparel",
    value: "charls_river_apparel",
  },
  {
    label: "RepSpark",
    value: "repspark",
  },
  {
    label: "Sanmar",
    value: "sanmar",
  },
  {
    label: "S&S Activewear LLC",
    value: "ss_activewear_llc",
  },
  {
    label: "PCNA PromoStandards",
    value: "pcna_promostandards",
  },
  {
    label: "Hirsch PromoStandards",
    value: "hirsch_promostandards",
  },
  {
    label: "Knack BC",
    value: "knack_bc",
  },
  {
    label: "Perry Ellis International",
    value: "perry_ellis_international",
  },

  {
    label: "Gemline PromoStandards",
    value: "gemline_promostandards",
  },
];

export const parentCategoryOptions = [
  {
    value: "5",
    label: "Accessories",
  },
  {
    value: "32",
    label: "Accessories > Bags",
  },
  {
    value: "88",
    label: "Accessories > Bags > Backpacks",
  },
  {
    value: "383",
    label: "Accessories > Bags > Backpacks > PRIYA",
  },
  {
    value: "92",
    label: "Accessories > Bags > Cinch Bags",
  },
  {
    value: "93",
    label: "Accessories > Bags > Cooler Bags",
  },
  {
    value: "94",
    label: "Accessories > Bags > Duffel Bags",
  },
  {
    value: "376",
    label: "Accessories > Bags > Hip & Sling Bags",
  },
  {
    value: "384",
    label: "Accessories > Bags > Sample Landing page",
  },
  {
    value: "108",
    label: "Accessories > Bags > Tote Bags",
  },
  {
    value: "101",
    label: "Accessories > Bags > Travel Bags",
  },
  {
    value: "382",
    label: "Accessories > Bags > VB Express",
  },
  {
    value: "39",
    label: "Accessories > Drinkware",
  },
  {
    value: "374",
    label: "Accessories > Drinkware > Barware",
  },
  {
    value: "324",
    label: "Accessories > Drinkware > Bottles",
  },
  {
    value: "135",
    label: "Accessories > Drinkware > Can Coolers",
  },
  {
    value: "375",
    label: "Accessories > Drinkware > Gift Sets",
  },
  {
    value: "136",
    label: "Accessories > Drinkware > Mugs",
  },
  {
    value: "137",
    label: "Accessories > Drinkware > Tumblers",
  },
  {
    value: "346",
    label: "Accessories > Electronics",
  },
  {
    value: "351",
    label: "Accessories > Electronics > Headphones & Earbuds",
  },
  {
    value: "352",
    label: "Accessories > Electronics > Speakers",
  },
  {
    value: "368",
    label: "Accessories > Electronics > Tech Gifts",
  },
  {
    value: "320",
    label: "Accessories > Golf",
  },
  {
    value: "326",
    label: "Accessories > Golf > Golf Bags",
  },
  {
    value: "325",
    label: "Accessories > Golf > Golf Balls",
  },
  {
    value: "327",
    label: "Accessories > Golf > Golf Towels",
  },
  {
    value: "41",
    label: "Accessories > Headwear",
  },
  {
    value: "321",
    label: "Accessories > Headwear > Adjustable Hats",
  },
  {
    value: "146",
    label: "Accessories > Headwear > Beanies",
  },
  {
    value: "147",
    label: "Accessories > Headwear > Bucket Hats",
  },
  {
    value: "323",
    label: "Accessories > Headwear > Dad Hats",
  },
  {
    value: "322",
    label: "Accessories > Headwear > Fitted Hats",
  },
  {
    value: "348",
    label: "Accessories > Headwear > Golf Hats",
  },
  {
    value: "347",
    label: "Accessories > Headwear > Trucker Hats",
  },
  {
    value: "154",
    label: "Accessories > Headwear > Visors",
  },
  {
    value: "369",
    label: "Accessories > Luxury Gifts",
  },
  {
    value: "29",
    label: "Accessories > Miscellaneous",
  },
  {
    value: "343",
    label: "Accessories > Office",
  },
  {
    value: "350",
    label: "Accessories > Office > Notebooks & Journals",
  },
  {
    value: "349",
    label: "Accessories > Office > Pens",
  },
  {
    value: "345",
    label: "Accessories > Outdoor & Leisure",
  },
  {
    value: "390",
    label: "Accessories > Stationery",
  },
  {
    value: "401",
    label: "BM 4585",
  },
  {
    value: "378",
    label: "Discontinue",
  },
  {
    value: "379",
    label: "Hip & Sling Bags",
  },
  {
    value: "2",
    label: "Men",
  },
  {
    value: "34",
    label: "Men > Bottoms",
  },
  {
    value: "116",
    label: "Men > Bottoms > Pants",
  },
  {
    value: "117",
    label: "Men > Bottoms > Shorts",
  },
  {
    value: "57",
    label: "Men > Hoodies & Sweatshirts",
  },
  {
    value: "264",
    label: "Men > Hoodies & Sweatshirts > Hoodies",
  },
  {
    value: "318",
    label: "Men > Hoodies & Sweatshirts > Sweatshirts",
  },
  {
    value: "9",
    label: "Men > Jackets",
  },
  {
    value: "332",
    label: "Men > Jackets > Fleece",
  },
  {
    value: "354",
    label: "Men > Jackets > Lightweight",
  },
  {
    value: "355",
    label: "Men > Jackets > Outerwear",
  },
  {
    value: "336",
    label: "Men > Jackets > Puffer",
  },
  {
    value: "359",
    label: "Men > Jackets > Rain",
  },
  {
    value: "333",
    label: "Men > Jackets > Soft Shell",
  },
  {
    value: "353",
    label: "Men > Jackets > Track",
  },
  {
    value: "47",
    label: "Men > Jersey",
  },
  {
    value: "192",
    label: "Men > Jersey > Long Sleeve",
  },
  {
    value: "194",
    label: "Men > Jersey > Short Sleeve",
  },
  {
    value: "195",
    label: "Men > Jersey > Sleeveless",
  },
  {
    value: "10",
    label: "Men > Polos",
  },
  {
    value: "24",
    label: "Men > Polos > Long Sleeve",
  },
  {
    value: "26",
    label: "Men > Polos > Short Sleeve",
  },
  {
    value: "50",
    label: "Men > Quarter Zips & Pullovers",
  },
  {
    value: "371",
    label: "Men > Quarter Zips & Pullovers > 1-4 Zips",
  },
  {
    value: "370",
    label: "Men > Quarter Zips & Pullovers > Layers",
  },
  {
    value: "11",
    label: "Men > Shirts",
  },
  {
    value: "245",
    label: "Men > Shirts > Long Sleeve",
  },
  {
    value: "248",
    label: "Men > Shirts > Short Sleeve",
  },
  {
    value: "60",
    label: "Men > T-Shirt",
  },
  {
    value: "275",
    label: "Men > T-Shirt > Long Sleeve",
  },
  {
    value: "279",
    label: "Men > T-Shirt > Short Sleeve",
  },
  {
    value: "281",
    label: "Men > T-Shirt > Tank Tops",
  },
  {
    value: "63",
    label: "Men > Vests",
  },
  {
    value: "361",
    label: "Men > Vests > Fleece",
  },
  {
    value: "360",
    label: "Men > Vests > Golf",
  },
  {
    value: "362",
    label: "Men > Vests > Outerwear",
  },
  {
    value: "363",
    label: "Men > Vests > Puffer",
  },
  {
    value: "386",
    label: "newCategory",
  },
  {
    value: "385",
    label: "newCategory0014",
  },
  {
    value: "387",
    label: "newCategory0015",
  },
  {
    value: "381",
    label: "Other",
  },
  {
    value: "380",
    label: "Sale",
  },
  {
    value: "391",
    label: "tc",
  },
  {
    value: "396",
    label: "tc1",
  },
  {
    value: "402",
    label: "Test 11",
  },
  {
    value: "410",
    label: "Test 1234",
  },
  {
    value: "397",
    label: "Test C 1",
  },
  {
    value: "400",
    label: "Test C 2",
  },
  {
    value: "404",
    label: "Test Parent",
  },
  {
    value: "405",
    label: "Test Parent > Test Child 1",
  },
  {
    value: "3",
    label: "Women",
  },
  {
    value: "35",
    label: "Women > Bottoms",
  },
  {
    value: "122",
    label: "Women > Bottoms > Pants",
  },
  {
    value: "123",
    label: "Women > Bottoms > Shorts",
  },
  {
    value: "58",
    label: "Women > Hoodies & Sweatshirts",
  },
  {
    value: "316",
    label: "Women > Hoodies & Sweatshirts > Hoodies",
  },
  {
    value: "319",
    label: "Women > Hoodies & Sweatshirts > Sweatshirts",
  },
  {
    value: "14",
    label: "Women > Jackets",
  },
  {
    value: "338",
    label: "Women > Jackets > Fleece",
  },
  {
    value: "358",
    label: "Women > Jackets > Lightweight",
  },
  {
    value: "357",
    label: "Women > Jackets > Outerwear",
  },
  {
    value: "342",
    label: "Women > Jackets > Puffer",
  },
  {
    value: "340",
    label: "Women > Jackets > Rain",
  },
  {
    value: "339",
    label: "Women > Jackets > Soft Shell",
  },
  {
    value: "356",
    label: "Women > Jackets > Track",
  },
  {
    value: "48",
    label: "Women > Jersey",
  },
  {
    value: "200",
    label: "Women > Jersey > Long Sleeve",
  },
  {
    value: "203",
    label: "Women > Jersey > Short Sleeve",
  },
  {
    value: "204",
    label: "Women > Jersey > Sleeveless",
  },
  {
    value: "13",
    label: "Women > Polos",
  },
  {
    value: "221",
    label: "Women > Polos > Long Sleeve",
  },
  {
    value: "27",
    label: "Women > Polos > Short Sleeve",
  },
  {
    value: "224",
    label: "Women > Polos > Sleeveless",
  },
  {
    value: "51",
    label: "Women > Quarter Zips & Pullovers",
  },
  {
    value: "373",
    label: "Women > Quarter Zips & Pullovers > 1-4 Zips",
  },
  {
    value: "372",
    label: "Women > Quarter Zips & Pullovers > Layers",
  },
  {
    value: "53",
    label: "Women > Shirts",
  },
  {
    value: "250",
    label: "Women > Shirts > Long Sleeve",
  },
  {
    value: "251",
    label: "Women > Shirts > Short Sleeve",
  },
  {
    value: "61",
    label: "Women > T-Shirt",
  },
  {
    value: "288",
    label: "Women > T-Shirt > Long Sleeve",
  },
  {
    value: "291",
    label: "Women > T-Shirt > Short Sleeve",
  },
  {
    value: "293",
    label: "Women > T-Shirt > Tank Tops",
  },
  {
    value: "65",
    label: "Women > Vests",
  },
  {
    value: "365",
    label: "Women > Vests > Fleece",
  },
  {
    value: "364",
    label: "Women > Vests > Golf",
  },
  {
    value: "366",
    label: "Women > Vests > Outerwear",
  },
  {
    value: "367",
    label: "Women > Vests > Puffer",
  },
  {
    value: "8",
    label: "Youth",
  },
  {
    value: "36",
    label: "Youth > Bottomwear",
  },
  {
    value: "128",
    label: "Youth > Bottomwear > Pants",
  },
  {
    value: "129",
    label: "Youth > Bottomwear > Shorts",
  },
  {
    value: "43",
    label: "Youth > Headwear",
  },
  {
    value: "159",
    label: "Youth > Headwear > Flat Bill",
  },
  {
    value: "160",
    label: "Youth > Headwear > Mesh Back",
  },
  {
    value: "46",
    label: "Youth > Hoodies",
  },
  {
    value: "172",
    label: "Youth > Hoodies > Long Sleeve",
  },
  {
    value: "16",
    label: "Youth > Jackets",
  },
  {
    value: "21",
    label: "Youth > Jackets > Full Zip",
  },
  {
    value: "186",
    label: "Youth > Jackets > Quarter Zip",
  },
  {
    value: "187",
    label: "Youth > Jackets > Rain Jackets",
  },
  {
    value: "49",
    label: "Youth > Jersey",
  },
  {
    value: "206",
    label: "Youth > Jersey > Buttondown",
  },
  {
    value: "207",
    label: "Youth > Jersey > Full Sleeve",
  },
  {
    value: "208",
    label: "Youth > Jersey > Half Sleeve",
  },
  {
    value: "210",
    label: "Youth > Jersey > Quarter Zip",
  },
  {
    value: "211",
    label: "Youth > Jersey > Short Sleeve",
  },
  {
    value: "212",
    label: "Youth > Jersey > Sleeveless",
  },
  {
    value: "59",
    label: "Youth > Sweatshirts",
  },
  {
    value: "270",
    label: "Youth > Sweatshirts > Hooded",
  },
  {
    value: "62",
    label: "Youth > T-Shirt",
  },
  {
    value: "296",
    label: "Youth > T-Shirt > Full Sleeve",
  },
  {
    value: "298",
    label: "Youth > T-Shirt > Long Sleeve",
  },
  {
    value: "300",
    label: "Youth > T-Shirt > Short Sleeve",
  },
  {
    value: "301",
    label: "Youth > T-Shirt > Sleeveless",
  },
];

export const storeOptions: IDropdownOption[] = [
  { value: "drivingimpressions", label: "Driving Impressions" },
  { value: "bacardi-greygoose", label: "Bacardi-GREY GOOSE" },
  { value: "gamedaygear", label: "Gameday Gear" },
  { value: "corporategear", label: "Corporate Gear" },
  { value: "cyxtera", label: "Cyxtera" },
  { value: "boston-beer", label: "Boston Beer" },
  { value: "bacardi", label: "Bacardi" },
  { value: "corporate-gear", label: "Corporate Gear" },
];
export const storeWisePages: IDropdownOption[] = [
  { value: "all", label: "All Website Pages" },
  { value: "drivingimpressions", label: "Driving Impressions" },
  { value: "bacardi-greygoose", label: "Bacardi-GREY GOOSE" },
  { value: "gamedaygear", label: "Gameday Gear" },
  { value: "corporategear", label: "Corporate Gear" },
  { value: "cyxtera", label: "Cyxtera" },
  { value: "boston-beer", label: "Boston Beer" },
  { value: "bacardi", label: "Bacardi" },
  { value: "corporate-gear", label: "Corporate Gear" },
];

export const dashboardData: IDashboardCard[] = [
  {
    id: 1,
    title: "Master Product Feed",
    description: "PRODUCT MANAGEMENT",
    icon: (
      <SvgIcon
        name="SidebarNavMasterProductFeed"
        className="w-full h-full text-quaternary-dark dark:text-quaternary-light"
      />
    ),
  },
  {
    id: 2,
    title: "Content Management",
    description: "CONTENT MANAGEMENT",
    icon: (
      <SvgIcon
        name="Notes"
        className="w-full h-full text-quaternary-dark dark:text-quaternary-light"
      />
    ),
  },
  {
    id: 3,
    title: "Stores",
    description: "STORES MANAGEMENT",
    icon: (
      <SvgIcon
        name="SidebarNavStores"
        className="w-full h-full text-quaternary-dark dark:text-quaternary-light"
      />
    ),
  },
  {
    id: 4,
    title: "Store Builder",
    description: "STORE BUILDER MANAGEMENT",
    icon: (
      <SvgIcon
        name="building-07"
        className="w-full h-full text-quaternary-dark dark:text-quaternary-light"
      />
    ),
  },
  {
    id: 5,
    title: "Form Builder",
    description: "FORM BUILDER MANAGEMENT",
    icon: (
      <SvgIcon
        name="building-01"
        className="w-full h-full text-quaternary-dark dark:text-quaternary-light"
      />
    ),
  },
  {
    id: 6,
    title: "Promotions",
    description: "PROMOTIONS MANAGEMENT",
    icon: (
      <SvgIcon
        name="SidebarNavPromotions"
        className="w-full h-full text-quaternary-dark dark:text-quaternary-light"
      />
    ),
  },
  {
    id: 7,
    title: "Orders",
    description: "ORDERS MANAGEMENT",
    icon: (
      <SvgIcon
        name="SidebarNavOrders"
        className="w-full h-full text-quaternary-dark dark:text-quaternary-light"
      />
    ),
  },
  {
    id: 8,
    title: "Customers",
    description: "CUSTOMERS MANAGEMENT",
    icon: (
      <SvgIcon
        name="SidebarNavCustomers"
        className="w-full h-full text-quaternary-dark dark:text-quaternary-light"
      />
    ),
  },
];

export const widgets = [
  {
    id: "widget-1",
    imageUrl:
      "https://storagemedia.corporategear.com/storagemedia/common/chartimages/ProductStatusReport.png",
    title: "Product Status Report",
  },
  {
    id: "widget-2",
    imageUrl:
      "https://storagemedia.corporategear.com/storagemedia/common/chartimages/CustomerOrderReport.png",
    title: "Customer Order Report",
  },
  {
    id: "widget-3",
    imageUrl:
      "https://storagemedia.corporategear.com/storagemedia/common/chartimages/modulewiseuser.png",
    title: "Product Sync Status Report",
  },
  {
    id: "widget-4",
    imageUrl:
      "https://storagemedia.corporategear.com/storagemedia/common/chartimages/OrderByState.png",
    title: "Customer By State",
  },
  {
    id: "widget-5",
    imageUrl:
      "https://storagemedia.corporategear.com/storagemedia/common/chartimages/Top10Customer.png",
    title: "Top Customer By Profitability",
  },
];


export const MasterProductStatusTabs = [
  {
    id: 0,
    label: "All",
    value: "All",
    componentname: "All",
    filter: [],
  },
  {
    id: 1,
    label: "Active",
    value: "Active",
    componentname: "Active",
    filter: [
      {
        field: "recStatus",
        operator: 0,
        value: "A",
      },
    ],
  },
  {
    id: 2,
    label: "Inactive",
    value: "Inactive",
    componentname: "Inactive",
    filter: [
      {
        field: "recStatus",
        operator: 0,
        value: "I",
      },
    ],
  },
  {
    id: 3,
    label: " Draft",
    value: "Draft",
    componentname: "Draft",
    filter: [
      {
        field: "recStatus",
        operator: 0,
        value: "D",
      },
    ],
  },
  {
    id: 4,
    label: "Discontinued",
    value: "Discontinued",
    componentname: "Discontinued",
    filter: [
      {
        field: "isdiscontinue",
        operator: 0,
        value: "true",
      },
    ],
  },
  {
    id: 5,
    label: "Synced with BC",
    value: "Synced with NAV",
    componentname: "Synced with NAV",
    filter: [
      {
        field: "navSyncStatus",
        operator: 0,
        value: "S",
      },
    ],
  },
  {
    id: 6,
    label: "Resync with BC",
    value: "ResyncwithNAV",
    componentname: "Resync with NAV",
    filter: [
      {
        field: "isdiscontinue",
        operator: 0,
        value: "false",
      },
      {
        field: "recStatus",
        operator: 0,
        value: "A",
      },
      {
        field: "navSyncStatus",
        operator: 0,
        value: "R",
      },
    ],
  },
  {
    id: 7,
    label: "BC Sync Pending",
    value: "NAVSyncPending",
    componentname: "NAV Sync Pending",
    filter: [
      {
        field: "navSyncStatus",
        operator: 0,
        value: "P",
      },
    ],
  },
  {
    id: 7,
    label: "Color Discontinue",
    value: "AttributeDiscontinue",
    componentname: "Color Discontinue",
    filter: [
      {
        field: "isattributediscontinue",
        operator: 0,
        value: "true",
      },
    ],
  },
];

export const brandOptions: IDropdownOption[] = [
  { value: "brand1", label: "Brand 1" },
  { value: "brand2", label: "Brand 2" },
  { value: "brand3", label: "Brand 3" },
];

export const categoryOptions: IDropdownOption[] = [
  { value: "category1", label: "Category 1" },
  { value: "category2", label: "Category 2" },
  { value: "category3", label: "Category 3" },
];

export const productOptions: IDropdownOption[] = [
  { value: "product1", label: "Product 1" },
  { value: "product2", label: "Product 2" },
  { value: "product3", label: "Product 3" },
];

export const customerOptions: IDropdownOption[] = [
  { value: "customer1", label: "Customer 1" },
  { value: "customer2", label: "Customer 2" },
  { value: "customer3", label: "Customer 3" },
];

export const vendorOptions: IDropdownOption[] = [
  { value: "vendor1", label: "Vendor 1" },
  { value: "vendor2", label: "Vendor 2" },
  { value: "vendor3", label: "Vendor 3" },
];

export const productOrderBrandOptions: IDropdownOption[] = [
  { label: "Brand 1", value: "brand1" },
  { label: "Brand 2", value: "brand2" },
  { label: "Brand 3", value: "brand3" },
];

export const productOrderCategoryOptions: IDropdownOption[] = [
  { label: "Category 1", value: "category1" },
  { label: "Category 2", value: "category2" },
  { label: "Category 3", value: "category3" },
];

export const productType = {
  General: -3,
  GMC: -2,
  MC: -1,
  Bundle: 0,
  CorporateStore: 1,
  EcommerceStore: 2,
  StoreBuilder: 3,
  StoreBuilderStoreType: 4,
  FormBuilder: 5,
  FormBuilderForms: 6,
};

export const StoreTypeFilter = [
  {
    label: "Corporate Store",
    value: 1,
  },
  {
    label: "Ecommerce Store",
    value: 2,
  },
  {
    label: "Store Builder",
    value: 3,
  },
  {
    label: "Form Builder",
    value: 5,
  },
];

export const TierRange: ITierRangeType[] = [
  {
    id: 31,
    storeId: 8,
    tierName: "tier4",
    tierValue: 9,
    recStatus: "A",
    createdDate: "2025-01-28T00:38:14.7583757",
    createdBy: 72,
    modifiedDate: null,
    modifiedBy: null,
    rowVersion: "TN8gDTQ/3Qg=",
    location: "RI",
    ipAddress: "120.72.90.155",
    macAddress: "00-00-00-00-00-00",
  },
  {
    id: 13,
    storeId: 8,
    tierName: "PortFolio",
    tierValue: 7,
    recStatus: "A",
    createdDate: "2023-07-13T00:54:34.0533967",
    createdBy: 76,
    modifiedDate: null,
    modifiedBy: null,
    rowVersion: "6KdwuTuD2wg=",
    location: "RI",
    ipAddress: "127.0.0.0",
    macAddress: "00-00-00-00-00-00",
  },
  {
    id: 11,
    storeId: 8,
    tierName: "PRIYA",
    tierValue: 8,
    recStatus: "A",
    createdDate: "2023-06-28T11:12:57.4080385",
    createdBy: 70,
    modifiedDate: null,
    modifiedBy: null,
    rowVersion: "GA+RoMh32wg=",
    location: "RI",
    ipAddress: "127.0.0.0",
    macAddress: "00-00-00-00-00-00",
  },
  {
    id: 9,
    storeId: 8,
    tierName: "tier3",
    tierValue: 100,
    recStatus: "A",
    createdDate: "2023-06-08T11:15:47.7463662",
    createdBy: 15,
    modifiedDate: "2023-06-08T11:29:59.7717336",
    modifiedBy: 15,
    rowVersion: "SliusRNo2wg=",
    location: "RI",
    ipAddress: "127.0.0.0",
    macAddress: "00-00-00-00-00-00",
  },
  {
    id: 8,
    storeId: 8,
    tierName: "tier2",
    tierValue: 60,
    recStatus: "A",
    createdDate: "2023-06-08T11:15:40.4076276",
    createdBy: 15,
    modifiedDate: "2023-06-08T11:30:06.364791",
    modifiedBy: 15,
    rowVersion: "SF+ctRNo2wg=",
    location: "RI",
    ipAddress: "127.0.0.0",
    macAddress: "00-00-00-00-00-00",
  },
  {
    id: 7,
    storeId: 8,
    tierName: "tier1",
    tierValue: 10,
    recStatus: "A",
    createdDate: "2023-06-08T11:15:28.2305685",
    createdBy: 15,
    modifiedDate: null,
    modifiedBy: null,
    rowVersion: "1r4zqhFo2wg=",
    location: "RI",
    ipAddress: "127.0.0.0",
    macAddress: "00-00-00-00-00-00",
  },
];

export const formFields: IGiftCardFormFields[] = [
  {
    id: "recipientName",
    label: "Recipient Name",
    placeholder: "Enter Recipient Name",
    required: true,
  },
  {
    id: "emailTo",
    label: "Email To",
    placeholder: "Enter Email",
  },
  {
    id: "serialNumber",
    label: "Serial Number",
    placeholder: "Enter Serial Number",
    required: true,
  },
  {
    id: "orderNumber",
    label: "Order Number",
    placeholder: "Enter Order Number",
  },
  {
    id: "initialAmount",
    label: "Initial Amount",
    placeholder: "Enter Initial Amount",
    required: true,
  },
  {
    id: "balance",
    label: "Balance",
    placeholder: "Enter Balance",
  },
];

export const DUMMY_VIEW_HISTORY_DATA: IHistoryRecord[] = [
  {
    updatedDate: "2024-02-15T14:30:22.4867419",
    updatedBy: "John Smith",
    subRows: [
      {
        rowid: 70966,
        property: "ProductName",
        oldValue: "Classic T-Shirt",
        newValue: "Premium Classic T-Shirt",
      },
      {
        rowid: 70966,
        property: "Price",
        oldValue: "$19.99",
        newValue: "$24.99",
      },
    ],
  },
  {
    updatedDate: "2024-02-14T09:15:33.4867419",
    updatedBy: "Emma Wilson",
    subRows: [
      {
        rowid: 70967,
        property: "StockStatus",
        oldValue: "Out of Stock",
        newValue: "In Stock",
      },
    ],
  },
  {
    updatedDate: "2024-02-13T16:45:12.4867419",
    updatedBy: "Michael Chen",
    subRows: [],
  },
  {
    updatedDate: "2024-02-12T11:20:45.4867419",
    updatedBy: "Sarah Johnson",
    subRows: [
      {
        rowid: 70968,
        property: "Category",
        oldValue: "Casual Wear",
        newValue: "Premium Collection",
      },
    ],
  },
  {
    updatedDate: "2024-02-11T13:55:18.4867419",
    updatedBy: "David Brown",
    subRows: [],
  },
  {
    updatedDate: "2024-02-10T10:30:22.4867419",
    updatedBy: "Lisa Anderson",
    subRows: [
      {
        rowid: 70969,
        property: "Description",
        oldValue: "Basic description",
        newValue: "Detailed product description",
      },
    ],
  },
  {
    updatedDate: "2024-02-09T15:40:33.4867419",
    updatedBy: "James Wilson",
    subRows: [],
  },
  {
    updatedDate: "2024-02-08T12:25:45.4867419",
    updatedBy: "Rachel Martinez",
    subRows: [
      {
        rowid: 70970,
        property: "SKU",
        oldValue: "TSH001",
        newValue: "PTSH001",
      },
    ],
  },
  {
    updatedDate: "2024-02-07T09:15:22.4867419",
    updatedBy: "Thomas Lee",
    subRows: [
      {
        rowid: 70971,
        property: "Color",
        oldValue: "Blue",
        newValue: "Navy Blue",
      },
      {
        rowid: 70971,
        property: "Size",
        oldValue: "M",
        newValue: "M, L, XL",
      },
    ],
  },
  {
    updatedDate: "2024-02-06T14:50:33.4867419",
    updatedBy: "Amanda Clark",
    subRows: [],
  },
  {
    updatedDate: "2024-02-05T11:35:45.4867419",
    updatedBy: "Kevin Taylor",
    subRows: [
      {
        rowid: 70972,
        property: "Material",
        oldValue: "Cotton",
        newValue: "Premium Cotton Blend",
      },
    ],
  },
  {
    updatedDate: "2024-02-04T16:20:22.4867419",
    updatedBy: "Patricia White",
    subRows: [],
  },
  {
    updatedDate: "2024-02-03T13:05:33.4867419",
    updatedBy: "Robert Garcia",
    subRows: [
      {
        rowid: 70973,
        property: "Weight",
        oldValue: "0.2kg",
        newValue: "0.25kg",
      },
    ],
  },
  {
    updatedDate: "2024-02-02T10:45:45.4867419",
    updatedBy: "Jennifer Moore",
    subRows: [
      {
        rowid: 70974,
        property: "Manufacturer",
        oldValue: "TextileCo",
        newValue: "PremiumTextiles Inc",
      },
    ],
  },
  {
    updatedDate: "2024-02-01T15:30:22.4867419",
    updatedBy: "Christopher Lee",
    subRows: [],
  },
  {
    updatedDate: "2024-01-31T12:15:33.4867419",
    updatedBy: "Michelle Rodriguez",
    subRows: [
      {
        rowid: 70975,
        property: "Tags",
        oldValue: "casual,cotton",
        newValue: "premium,cotton,sustainable",
      },
    ],
  },
  {
    updatedDate: "2024-01-30T09:55:45.4867419",
    updatedBy: "Daniel Kim",
    subRows: [],
  },
  {
    updatedDate: "2024-01-29T14:40:22.4867419",
    updatedBy: "Elizabeth Turner",
    subRows: [
      {
        rowid: 70976,
        property: "Dimensions",
        oldValue: "30x40cm",
        newValue: "32x42cm",
      },
    ],
  },
  {
    updatedDate: "2024-01-28T11:25:33.4867419",
    updatedBy: "William Scott",
    subRows: [],
  },
  {
    updatedDate: "2024-01-27T16:10:45.4867419",
    updatedBy: "Nancy Adams",
    subRows: [
      {
        rowid: 70977,
        property: "ShippingClass",
        oldValue: "Standard",
        newValue: "Express",
      },
    ],
  },
  {
    updatedDate: "2024-01-26T13:55:22.4867419",
    updatedBy: "George Wilson",
    subRows: [
      {
        rowid: 70978,
        property: "Status",
        oldValue: "Draft",
        newValue: "Published",
      },
    ],
  },
  {
    updatedDate: "2024-01-25T10:40:33.4867419",
    updatedBy: "Sandra Martinez",
    subRows: [],
  },
  {
    updatedDate: "2024-01-24T15:25:45.4867419",
    updatedBy: "Joseph Brown",
    subRows: [
      {
        rowid: 70979,
        property: "Featured",
        oldValue: "No",
        newValue: "Yes",
      },
    ],
  },
  {
    updatedDate: "2024-01-23T12:10:22.4867419",
    updatedBy: "Margaret Thompson",
    subRows: [],
  },
  {
    updatedDate: "2024-01-22T09:55:33.4867419",
    updatedBy: "Richard Davis",
    subRows: [
      {
        rowid: 70980,
        property: "MetaTitle",
        oldValue: "T-Shirt",
        newValue: "Premium Cotton T-Shirt",
      },
    ],
  },
  {
    updatedDate: "2024-01-21T14:40:45.4867419",
    updatedBy: "Susan Miller",
    subRows: [],
  },
  {
    updatedDate: "2024-01-20T11:25:22.4867419",
    updatedBy: "Charles Wilson",
    subRows: [
      {
        rowid: 70981,
        property: "Availability",
        oldValue: "Backorder",
        newValue: "In Stock",
      },
    ],
  },
  {
    updatedDate: "2024-01-19T16:10:33.4867419",
    updatedBy: "Karen Jackson",
    subRows: [],
  },
  {
    updatedDate: "2024-01-18T13:55:45.4867419",
    updatedBy: "Edward Martin",
    subRows: [
      {
        rowid: 70982,
        property: "DiscountPrice",
        oldValue: "None",
        newValue: "15%",
      },
    ],
  },
  {
    updatedDate: "2024-01-17T10:40:22.4867419",
    updatedBy: "Betty Thomas",
    subRows: [
      {
        rowid: 70983,
        property: "MinimumOrder",
        oldValue: "1",
        newValue: "5",
      },
    ],
  },
];
export const messageOptions: IDropdownOption[] = [
  {
    label: "Digital Systems Ltd 100002",
    value: "2517003",
  },

  {
    label: "Digital Systems Ltd 100007",
    value: "2517008",
  },

  {
    label: "Digital Systems Ltd 100012",
    value: "2517013",
  },
];

export const messageKeyOptions: IDropdownOption[] = [
  { label: "24 On Tour", value: "1" },
  { label: "Bacardi", value: "2" },
  {
    label: "Bacardi Grey Goose",
    value: "3",
  },
];

export const recStatusOptions: IDropdownOption[] = [
  { label: "Active", value: "1" },
  { label: "Inactive", value: "2" },
];

export const pageRedirectOptions: IDropdownOption[] = [
  { label: "Digital Systems Ltd 100002", value: "2517003" },
  { label: "Digital Systems Ltd 100007", value: "2517008" },
  { label: "Digital Systems Ltd 100012", value: "2517013" },
];
export const LOGIN_TYPES = {
  DEFAULT: "default" ,
  SSO: "sso",
} as const;

export const fixChargesOptions: IDropdownOption[] = [
  { label: "24 On Tour", value: "24OnTour" },
  { label: "Bacardi", value: "bacardi" },
  { label: "Bacardi Grey Goose", value: "bacardi-grey-goose" },
  { label: "Boston Beer", value: "boston-beer" },
];

export const positionOptions: IDropdownPositionOptions[] = [
  { label: "Bottom Left", value: "Bottom Left" },
  { label: "Bottom Right", value: "Bottom Right" },
  { label: "Center", value: "Center" },
  { label: "Top Left", value: "Top Left" },
  { label: "Top Right", value: "Top Right" },
];

export const IconTypeForHeader = [
  { value: "fontawesome", name: "fontawesome", label: "Font Awesome Icon" },
  { value: "customimage", name: "fontawesome", label: "Upload Coustom Image" },
];

export const HeaderIconSetting = [
  {
    id: "fisth_icon",
    label: "1st Icon",
    title: "first_icon",
    components: [
      {
        name: "first_icon_option",
        options: IconTypeForHeader,
      },
    ],
  },
  {
    id: "fisth_icon",
    label: "2nd Icon",
    title: "second_icon",
    components: [
      {
        name: "second_icon_option",
        options: IconTypeForHeader,
      },
    ],
  },
  {
    id: "fisth_icon",
    label: "3rd Icon",
    title: "third_icon",
    components: [
      {
        name: "third_icon_option",
        options: IconTypeForHeader,
      },
    ],
  },
  {
    id: "fisth_icon",
    label: "4th Icon",
    title: "forth_icon",
    components: [
      {
        name: "forth_icon_option",
        options: IconTypeForHeader,
      },
    ],
  },
  {
    id: "fisth_icon",
    label: "5th Icon",
    title: "fisth_icon",
    components: [
      {
        name: "fifth_icon_option",
        options: IconTypeForHeader,
      },
    ],
  },
];

export const optionForHeaderIcon = [
  { label: "Cart", value: "shopping_cart" },
  { label: "Account", value: "person" },
  { label: "Wishlist", value: "favorite_border" },
  { label: "Search", value: "search" },
  { label: "Notification", value: "notifications_active" },
];

export const CmdBackgroundColor = [
  { label: "Primary", value: "primary" },
  { label: "Secondary", value: "secondary" },
  { label: "Tertiary ", value: "tertiary" },
  { label: "Quaternary", value: "quaternary" },
];

export const MoreOptions = [
  {
    label: "Manual Shipping",
    value: "manual_shipping",
    icon: <SvgIcon name="shippingIcon" />,
  },
  { label: "Review", value: "review", icon: <SvgIcon name="reviewIcon" /> },
  {
    label: "View Old Orders",
    value: "view_old_orders",
    icon: <SvgIcon name="EyeOpen" />,
  },
  {
    label: "Fraud",
    value: "fraud",
    icon: <SvgIcon name="fraudIcon" />,
  },
  { label: "Block IP", value: "block_ip", icon: <SvgIcon name="blockIp" /> },
  {
    label: "Cancel Order",
    value: "cancel_order",
    icon: <SvgIcon name="CrossIcon" />,
  },
];
export const shippingViaOptions = [
  {
    value: "fedex",
    label: "FEDEX",
  },
  {
    value: "priya",
    label: "PRIYA",
  },
  {
    value: "ups",
    label: "UPS",
  },
  {
    value: "usps",
    label: "USPS",
  },
];

export const BannerType = [
  { value: "none", label: "None" },
  { value: "type1", label: "Type 1" },
  { value: "type2", label: "Type 2" },
  { value: "type3", label: "Type 3" },
  { value: "type4", label: "Type 4" },
  { value: "type6", label: "Type 6" },
];

export const storeProductListProperty = [
  {
    id: "promotionalText1",
    label: "Promotional Text 1",
    components: [
      {
        Component: "CKEditor",
        name: "promotionalText1",
      },
    ],
  },
  {
    id: "BannerSection",
    label: "Banner Section",
    components: [
      {
        Component: "RadioButtonGroup",
        name: "bannertype",
        options: BannerType,
      },
    ],
  },
  {
    id: "promotionalText2",
    label: "Promotional Text 2",
    components: [
      {
        Component: "CKEditor",
        name: "promotionalText2",
      },
    ],
  },
  {
    id: "filters",
    label: "Filter",
    components: [
      {
        Component: "RadioButtonGroup",
        name: "filter",
        options: [
          { value: "none", label: "None" },
          { value: "floyout", label: "Floyout" },
          { value: "leftSide", label: "Left Side" },
        ],
      },
      {
        Component: "LeftRight",
        name: "floyout_alignment",
        title: "flyout Alignment",
        conditionalRender: "filter",
        conditionalValue: "floyout",
      },
    ],
  },
];

export const CustomizeLogoType = [
  { value: "type1", label: "Template 1" },
  { value: "type2", label: "Template 2" },
  { value: "type3", label: "Template 3" },
  { value: "type4", label: "Template 4" },
];

export const SEARCH_ORDER = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Customer",
    value: "customer",
  },
  {
    label: "Employee",
    value: "employee",
  },
];
