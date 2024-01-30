import {
  View,
  Text,
  Image,
  ImageProps,
  ViewProps,
  TextProps,
} from "react-native";
import tailwind from "twrnc";

export const CardImage = ({
  source,
  style,
  resizeMode,
  position = "middle",
  ...props
}) => {
  const positions = {
    top: tailwind`rounded-t-xl`,
    middle: tailwind``,
    bottom: tailwind`rounded-b-xl`,
  };

  return (
    <Image
      {...props}
      source={source}
      style={[tailwind`w-358px ml-3 h-64 rounded-8`, positions[position], style]}
      resizeMode={resizeMode || "cover"}
    />
  );
};

export const CardContent = ({ children, style, ...props }) => {
  return (
    <View {...props} style={[tailwind`p-6`, style]}>
      {children}
    </View>
  );
};

export const CardTitle = ({ children, style, ...props }) => {
  return (
    <Text
      {...props}
      style={[
        tailwind`text-neutral-950 dark:text-neutral-50 text-lg font-bold`,
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export const CardSubtitle = ({ children, style, ...props }) => {
  return (
    <Text
      {...props}
      style={[
        tailwind`text-neutral-800 dark:text-neutral-200 text-sm font-bold`,
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export const CardText = ({ children, style, ...props }) => {
  return (
    <Text
      {...props}
      style={[tailwind`text-neutral-800 dark:text-neutral-200 text-sm`, style]}
    >
      {children}
    </Text>
  );
};

/**
 * React Native card component built with Tailwind CSS
 */
export const Card = ({ children, style, backgroundColor, ...props }) => {
  return (
    <View
      {...props}
      style={[
        tailwind`rounded-xl border border-black/20 dark:border-white/20`,
        { backgroundColor },
        style,
      ]}
    >
      {children}
    </View>
  );
};
