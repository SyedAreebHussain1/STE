type GetItem = {
    label?: string;
    key?: string | number | null | undefined;
    icon?: string | null | undefined;
    children?: string;
  };
  
  type GetItemFunction = (
    label?: string,
    key?: string | number | null | undefined,
    icon?: string | null | undefined,
    children?: string
  ) => GetItem;
  
  export const getItem: GetItemFunction = (label, key, icon, children) => {
    return {
        label,
      key,
      icon,
      children,
    };
  };