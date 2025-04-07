import {wishlistCookie} from '~/utils/wishlist-cookie';

export const getWishlist = async (request: Request): Promise<string[]> => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await wishlistCookie.parse(cookieHeader)) || [];
  return Array.isArray(cookie) ? (cookie as string[]) : [];
};

export const setWishlist = async (variantIds: string[]) => {
  return await wishlistCookie.serialize(variantIds);
};