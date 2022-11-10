// import { internal_resolveProps as resolveProps } from '@mui/utils';

function resolveProps(defaultProps, props) {
  const output = { ...props };

  Object.keys(defaultProps).forEach((propName) => {
    if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    } else if (
        propName === 'TransitionProps' &&
        props.TransitionProps
      ) {
        output.TransitionProps = { ...defaultProps.TransitionProps, ...props.TransitionProps };
      }
  });

  return output;
}

export default function getThemeProps(params) {
  const { theme, name, props } = params;

  if (
    !theme ||
    !theme.components ||
    !theme.components[name] ||
    !theme.components[name].defaultProps
  ) {
    return props;
  }

  return resolveProps(theme.components[name].defaultProps, props);
}
