import { Product } from './types';
import MilkImg from '../../assets/milk.jpeg';
import BreadImg from '../../assets/bread.jpg';
import EggsImg from '../../assets/eggs.jpg';
import SugarImg from '../../assets/sugar.jpg';
import SaltImg from '../../assets/salt_.jpg';

export const productData:Product[]=[
  { id: '1', product: 'Milk',  img: MilkImg},
  { id: '2', product: 'Bread', img:BreadImg},
  { id: '3', product: 'Eggs', img:EggsImg},
  { id: '4', product: 'Sugar', img:SugarImg},
  { id: '5', product: 'Salt', img:SaltImg},
];