// import interfaces
import {
  ISTATS,
  ISERVICE,
  IGALLERY_IMG,
  ITESTIMONIAL,
} from '../interface/data.interface';

// stats data
export const STATS_DATA: ISTATS[] = [
  { iconUrl: 'icon', count: '1M+', label: 'label' },
  { iconUrl: 'icon', count: '1M+', label: 'label' },
  { iconUrl: 'icon', count: '1M+', label: 'label' },
  { iconUrl: 'icon', count: '1M+', label: 'label' },
];

// services
export const SERVICES: ISERVICE[] = [
  { imgUrl: 'img', title: 'title', description: 'description' },
  { imgUrl: 'img', title: 'title', description: 'description' },
  { imgUrl: 'img', title: 'title', description: 'description' },
];

// gallery images
export const GALLERY_IMGS: IGALLERY_IMG[] = [
  { id: '01', imgUrl: 'img' },
  { id: '01', imgUrl: 'img' },
  { id: '01', imgUrl: 'img' },
  { id: '01', imgUrl: 'img' },
  { id: '01', imgUrl: 'img' },
  { id: '01', imgUrl: 'img' },
];

// testimonials
export const TESTIMONIALS: ITESTIMONIAL[] = [
  {
    id: '01',
    imgUrl: 'img',
    name: 'name',
    review: 'review',
    description: 'description',
  },
  {
    id: '01',
    imgUrl: 'img',
    name: 'name',
    review: 'review',
    description: 'description',
  },
  {
    id: '01',
    imgUrl: 'img',
    name: 'name',
    review: 'review',
    description: 'description',
  },
];
