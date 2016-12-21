/* eslint linebreak-style: ["error", "windows"] */
export const diffSetter = (options, newDiff) => {
  // console.log('options:', options);
  // console.log('newDiff:', newDiff);
  options.diff = newDiff;
  return {
    type: 'DIFF_CHANGE',
    payload: options
  };
};
