export const scaleImage = (imageUrl: string, width?: number, height?: number) => {
  if (!imageUrl) {
    return '';
  }

  let url = imageUrl;

  url = url.replaceAll(',bo_30px_solid_white', '');

  url = width ? url.replace(',w_1440', `,w_${width}`) : url.replace(',w_1440', '');
  url = height ? url.replace(',h_1440', `,h_${height}`) : url.replace(',h_1440', '');

  return url.replaceAll('.jpg', '.webp');
};
