import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

interface WishlistContextType {
  wishlist: string[];
  toggleWishlistItem: (sku: string) => Promise<void>;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export const useWishlistContext = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlistContext must be a child of WishlistProvider!');
  }
  return context;
};

interface WishlistProviderProps extends PropsWithChildren {
  initialWishlist: string[];
}

export const WishlistProvider = ({
  initialWishlist,
  children,
}: WishlistProviderProps) => {
  const [wishlist, setWishlist] = useState<string[]>(initialWishlist);

  const toggleWishlistItem = async (sku: string) => {
    setWishlist((prev) =>
      prev.includes(sku)
        ? prev.filter((id) => id !== sku)
        : [...prev, ...[sku]],
    );

    const postParams = new FormData();
    postParams.set('variantId', sku);
    await fetch('/wishlist', {
      method: 'POST',
      body: postParams,
    });
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlistItem,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};