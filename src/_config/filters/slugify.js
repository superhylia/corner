import slugify from 'slugify';

/** Converts string to a slug form. */
export const slugifyString = str => {
  const spaceSlashes = str.replace(/\//g, ' ');
  return slugify(spaceSlashes, {
    replacement: '-',
    remove: /[#,&,+()$~%.'":*¿?¡!<>{}]/g,
    lower: true
  });
};
