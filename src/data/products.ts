// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Используем единое изображение для всех курсов Excel
  return `/images/img_1.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем Excel изображения
  return [getProductImage(productId)];
};

// Helper function to get course video preview (10-second previews for catalog)
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/vid10sec/1 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 2) {
    return "/videos/vid10sec/2 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 3) {
    return "/videos/vid10sec/3 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 4) {
    return "/videos/vid10sec/4 Excel Data Visualization  Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 5) {
    return "/videos/vid10sec/5 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 6) {
    return "/videos/vid10sec/6 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 7) {
    return "/videos/vid10sec/7 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 8) {
    return "/videos/vid10sec/8 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 9) {
    return "/videos/vid10sec/9 Excel Data Visualization  Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 10) {
    return "/videos/vid10sec/10 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 11) {
    return "/videos/vid10sec/11 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses 1-5: 1 video each
  if (productId === 1) {
    return ["/videos/vid5min/1 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"];
  }
  if (productId === 2) {
    return ["/videos/vid5min/2 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"];
  }
  if (productId === 3) {
    return ["/videos/vid5min/3 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"];
  }
  if (productId === 4) {
    return ["/videos/vid5min/4 Excel Data Visualization  Advanced Demos Chris Dutton Skil_5min.mp4"];
  }
  if (productId === 5) {
    return ["/videos/vid5min/5 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"];
  }
  
  // Courses 6-8: 2 videos each
  if (productId === 6) {
    return [
      "/videos/vid5min/6 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/7 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  if (productId === 7) {
    return [
      "/videos/vid5min/8 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/9 Excel Data Visualization  Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  if (productId === 8) {
    return [
      "/videos/vid5min/10 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/11 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  
  // Courses 9-11: 3 videos each
  if (productId === 9) {
    return [
      "/videos/vid5min/12 Excel Data Visualization Advanced Demos Chris Dutton Skil (1)_5min.mp4",
      "/videos/vid5min/13 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/14 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  if (productId === 10) {
    return [
      "/videos/vid5min/1 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/2 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/3 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  if (productId === 11) {
    return [
      "/videos/vid5min/4 Excel Data Visualization  Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/5 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/6 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Setting Expectations & Course Overview",
    price: 6.99,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    videos: getProductVideos(1),
    description: "Introduction to advanced Excel charting with expectations for formulas, functions, and data visualization mastery.",
    detailedDescription: "Master the fundamentals of advanced Excel data visualization. Learn what to expect from advanced charts, understand the role of formulas in visualization, and set the foundation for your Excel charting journey. Perfect introduction for aspiring data visualization experts.",
    category: "Course Introduction",
    features: [
      "Course expectations overview",
      "Advanced chart prerequisites",
      "Formula integration basics",
      "Data visualization mindset",
      "Getting started roadmap"
    ],
    specifications: {
      "Duration": "2 minutes 12 seconds",
      "Level": "Complete Beginner",
      "Language": "English",
      "Focus": "Course Introduction",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Custom Image Overlay Charts",
    price: 9.99,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    videos: getProductVideos(2),
    description: "Master creative chart techniques using custom graphics and image overlays for unique visual impact.",
    detailedDescription: "Deep dive into advanced chart customization with comprehensive training on image overlay techniques, thermometer charts, and creative graphic integration. Learn to create charts that stand out with custom visual elements and professional creative effects.",
    category: "Creative Charts",
    features: [
      "Custom graphic integration",
      "Thermometer chart design",
      "Image overlay techniques",
      "Creative visual effects",
      "Professional graphic templates"
    ],
    specifications: {
      "Duration": "3 minutes 1 second",
      "Level": "Beginner",
      "Focus": "Creative Visualization",
      "Topics": "Image overlays, custom graphics, creativity",
      "Access": "8 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Binary Values & Date Range Highlighting",
    price: 19.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    videos: getProductVideos(3),
    description: "Learn advanced techniques for highlighting specific date ranges and periods within your charts using binary data series.",
    detailedDescription: "Master date range visualization with comprehensive training on binary value systems, promo period highlighting, and advanced chart combinations. Learn professional techniques for showcasing specific time periods, sales cycles, and promotional campaigns in your data visualizations.",
    category: "Date Visualization",
    features: [
      "Binary data series mastery",
      "Date range highlighting",
      "Promotional period visualization",
      "Combo chart techniques",
      "Timeline analysis methods"
    ],
    specifications: {
      "Duration": "4 minutes 41 seconds",
      "Level": "Beginner",
      "Focus": "Date Range Analysis",
      "Tools": "Binary series, combo charts, highlighting",
      "Access": "10 months",
      "Bonus": "Date visualization templates"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Dynamic Charts with OFFSET & Named Ranges",
    price: 29.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    videos: getProductVideos(4),
    description: "Master dynamic chart automation using OFFSET, COUNTA functions and Named Ranges - the foundation of truly interactive Excel visualizations.",
    detailedDescription: "Learn the essential OFFSET and COUNTA techniques that form the foundation of all dynamic chart systems. Master automatic chart updates, named range creation, and fluid data visualization through proven frameworks used by Excel automation experts worldwide.",
    category: "Dynamic Charts",
    features: [
      "OFFSET function mastery",
      "COUNTA automation principles",
      "Named ranges creation",
      "Automatic chart updates",
      "Dynamic data sourcing workflow"
    ],
    specifications: {
      "Duration": "3 minutes 34 seconds",
      "Level": "Intermediate",
      "Focus": "Automation, dynamic sourcing, functions",
      "Techniques": "OFFSET, COUNTA, named ranges",
      "Access": "8 months",
      "Bonus": "Dynamic chart templates"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Interactive Scroll & Zoom Charts with Form Controls",
    price: 39.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    videos: getProductVideos(5),
    description: "Master interactive chart functionality with scroll and zoom capabilities using Excel Form Controls and advanced OFFSET techniques.",
    detailedDescription: "Master the powerful interactive charting techniques with comprehensive training. This course includes detailed video modules covering form controls, scroll bar integration, zoom functionality, and advanced OFFSET applications for creating truly dynamic user experiences.",
    category: "Interactive Charts",
    features: [
      "Comprehensive video modules",
      "Form controls mastery",
      "Scroll bar implementation",
      "Zoom functionality techniques",
      "Advanced OFFSET applications",
      "Interactive user experiences"
    ],
    specifications: {
      "Duration": "8 minutes 15 seconds",
      "Videos": "Comprehensive modules",
      "Level": "Advanced",
      "Focus": "Interactivity, form controls, user experience",
      "Projects": "Interactive chart exercises",
      "Access": "10 months",
      "Bonus": "Interactive chart templates"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Animated Charts & Time-Based Visualizations",
    price: 49.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Learn advanced animation techniques for visualizing changes over time with dynamic area charts and interactive time controls.",
    detailedDescription: "Master animated chart creation with comprehensive training. This course includes detailed video modules covering time-based animations, overlapping area charts, political polarization visualizations, and advanced storytelling through animated data presentations.",
    category: "Animated Charts",
    features: [
      "Detailed video modules",
      "Animation techniques mastery",
      "Time-based visualization setup",
      "Overlapping area chart principles",
      "Data storytelling techniques",
      "Interactive timeline controls"
    ],
    specifications: {
      "Duration": "8 minutes 33 seconds",
      "Videos": "Detailed modules",
      "Level": "Intermediate",
      "Focus": "Animation, time series, storytelling",
      "Applications": "Political data, trend animation, time controls",
      "Access": "12 months",
      "Support": "Animation template library"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Dynamic Dashboards & Interactive Interfaces",
    price: 59.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Master professional dashboard creation with dynamic data integration, interactive user controls, and advanced formula systems.",
    detailedDescription: "Master advanced dashboard development with comprehensive training on dynamic data integration, interactive user interfaces, and professional dashboard frameworks. This course includes detailed video modules covering baseball analytics dashboards, SUMIFS functions, and advanced user interface design for business intelligence applications.",
    category: "Dynamic Dashboards",
    features: [
      "Comprehensive video modules",
      "Dashboard development mastery",
      "Interactive interface design",
      "SUMIFS function applications",
      "Baseball analytics framework",
      "Business intelligence layouts"
    ],
    specifications: {
      "Duration": "7 minutes 9 seconds",
      "Videos": "Detailed modules",
      "Level": "Intermediate",
      "Focus": "Dashboards, interactivity, business intelligence",
      "Applications": "Sports analytics, business dashboards, KPI tracking",
      "Access": "12 months",
      "Bonus": "Dashboard template library"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Advanced Chart Formatting & Value-Based Styling",
    price: 69.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Master advanced chart formatting techniques including value-based dynamic styling, quartile analysis, and professional chart polishing methods.",
    detailedDescription: "Master professional chart formatting with comprehensive training. This course includes detailed video modules covering value-based formatting, quartile breakdowns, dynamic series highlighting, conditional chart styling, and advanced visual hierarchy techniques for business presentations.",
    category: "Advanced Formatting",
    features: [
      "Detailed video modules",
      "Value-based formatting mastery",
      "Quartile analysis techniques",
      "Dynamic series highlighting",
      "Conditional styling methods",
      "Professional chart polishing"
    ],
    specifications: {
      "Duration": "13 minutes 56 seconds",
      "Videos": "Detailed modules",
      "Level": "Advanced",
      "Focus": "Formatting, conditional styling, visual hierarchy",
      "Techniques": "Value-based formatting, quartile analysis",
      "Access": "12 months",
      "Bonus": "Advanced formatting templates"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Specialized Chart Types: Gauge Charts & Pacing Visualizations",
    price: 79.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Master specialized chart creation including custom gauge charts, pacing visualizations, and advanced trigonometry-based chart combinations.",
    detailedDescription: "Master specialized chart creation with comprehensive advanced training. This premium course includes comprehensive video modules covering custom gauge chart construction, revenue pacing charts, doughnut-scatter combinations, trigonometry applications, and professional KPI visualization techniques.",
    category: "Specialized Charts",
    features: [
      "Comprehensive video modules",
      "Custom gauge chart mastery",
      "Pacing chart construction",
      "Trigonometry applications",
      "Doughnut-scatter combinations",
      "KPI visualization techniques"
    ],
    specifications: {
      "Duration": "18 minutes 43 seconds",
      "Videos": "Comprehensive modules",
      "Level": "Advanced",
      "Focus": "Gauge charts, pacing analysis, specialized visualizations",
      "Techniques": "Trigonometry, chart combinations, custom builds",
      "Access": "15 months",
      "Bonus": "Specialized chart templates"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Array Functions & Advanced Mathematical Visualization",
    price: 89.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Master advanced array functions and mathematical visualization techniques for creating percentage grids and complex data representations.",
    detailedDescription: "Master advanced mathematical visualization with comprehensive training on array functions, percentage grid construction, and complex data representation systems. This premium course includes detailed video modules covering MOD functions, ROW applications, array formula mastery, scatter plot matrices, and advanced percentage visualization techniques.",
    category: "Array Functions",
    features: [
      "Detailed video modules",
      "Array function mastery",
      "Percentage grid construction",
      "MOD and ROW applications",
      "Scatter plot matrices",
      "Mathematical visualization techniques"
    ],
    specifications: {
      "Duration": "16 minutes 57 seconds",
      "Videos": "Detailed modules",
      "Level": "Advanced",
      "Focus": "Array functions, mathematical visualization",
      "Techniques": "Array formulas, percentage grids, complex representations",
      "Access": "15 months",
      "Bonus": "Array function toolkit"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Complete Excel Data Visualization Mastery + Advanced Techniques",
    price: 99.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master all advanced Excel visualization techniques including custom overlays, dynamic dashboards, animation, interactive controls, and specialized chart mastery.",
    detailedDescription: "Achieve complete Excel visualization mastery with comprehensive training covering all advanced techniques. This premium course includes comprehensive video modules covering custom image overlays, binary date highlighting, OFFSET automation, interactive form controls, animated visualizations, dynamic dashboards, advanced formatting, gauge charts, pacing analysis, and array function applications used by data visualization experts worldwide.",
    category: "Complete Mastery",
    features: [
      "Comprehensive video modules",
      "Complete advanced visualization mastery",
      "All custom chart techniques covered",
      "Interactive dashboard development",
      "Animation and form control integration",
      "Specialized chart construction",
      "Mathematical visualization methods",
      "Professional Excel expertise"
    ],
    specifications: {
      "Duration": "15 minutes",
      "Videos": "Comprehensive modules",
      "Level": "Expert",
      "Coverage": "All advanced Excel visualization techniques",
      "Skills": "Complete chart mastery & advanced Excel expertise",
      "Access": "18 months",
      "Bonus": "Complete advanced visualization toolkit & templates"
    },
    inStock: true
  }
];