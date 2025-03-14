// stats data interface
export interface ISTATS {
  iconUrl: string;
  count: string;
  label: string;
}

// services interface
export interface ISERVICE {
  imgUrl: string;
  title: string;
  description: string;
}

// gallery image interface
export interface IGALLERY_IMG {
  id: string;
  imgUrl: string;
}

// testimonial interface
export interface ITESTIMONIAL {
  id: string;
  imgUrl: string;
  name: string;
  review: string;
  description: string;
}
