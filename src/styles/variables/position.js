import {width, height} from '$helpers/dimensions';

export const position = {
  fullScreenCenter: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWindowCenter: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};
