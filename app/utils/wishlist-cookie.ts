import {createCookie} from '@shopify/remix-oxygen';

export const wishlistCookie = createCookie('wishlist', {
  path: '/',
  maxAge: 60 * 60 * 24 * 30,
  httpOnly: false,
  sameSite: 'lax',
});