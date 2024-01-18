interface IProps {
  charsLimit?: number;
  isCollapsed: boolean;
  children: string;
  toggleTextState: () => void;
}
const ExpandableText = ({
  charsLimit = 20,
  isCollapsed,
  children,
  toggleTextState,
}: IProps) => {
  if (children.length <= charsLimit) return <div>{children}</div>;
  const text = isCollapsed ? children.slice(0, charsLimit) : children;
  return (
    <>
      <div>{isCollapsed ? `${text}...` : text}</div>
      <button onClick={toggleTextState}>
        {isCollapsed ? "Show more..." : "Show less"}
      </button>
    </>
  );
};

export default ExpandableText;
