import { ICategory } from './category';
import { Tag } from './tag';

export interface Pet {
    id?: number;
    category?: ICategory;
    name?: string;
    photoUrls?: string[]
    tags?: Tag[];
    status?: 'available' | 'pending' | 'sold';
}