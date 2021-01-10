import { Nullish } from '@testing-library/react';

const inElements = (text: string) => (content: string, node: Nullish<Element>): boolean => {
  if (!node) return false;

  const hasText = (el: Element) => el.textContent === text;

  const nodeHasText = hasText(node);
  const childrenDontHaveText = Array.from(node.children).every((child) => !hasText(child));

  return nodeHasText && childrenDontHaveText;
};

export default inElements;
