export default function getCSSrootVariable(variableName: string) {
  if (typeof document === 'undefined') return 
  const root = document?.querySelector(":root");
  if (!root) return;
  const styles = getComputedStyle(root);
  return styles.getPropertyValue(variableName);
}
