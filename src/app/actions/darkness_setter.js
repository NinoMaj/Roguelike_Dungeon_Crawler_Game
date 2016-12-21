/* eslint linebreak-style: ["error", "windows"] */
export const darknessSetter = (options, newDarkness) => {
  // console.log('options:', options);
  // console.log('newDiff:', newDarkness);
  options.darkness = !newDarkness;
  return {
    type: 'DARKNESS_CHANGED',
    payload: options
  };
};
