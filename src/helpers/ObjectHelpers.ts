export const ObjectHelpers = {
  extractPropertyNameFromSelector: (selector: string) => {
    const selectorParts = selector.split(".");

    if (selectorParts && selectorParts.length > 0) {
      return selectorParts[selectorParts.length - 1];
    }

    throw Error("Model selector is not correct.");
  },
};
