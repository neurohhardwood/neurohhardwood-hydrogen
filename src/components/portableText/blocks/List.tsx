export default function ListBlock(props: any) {
  const {children, type} = props;

  if (type === 'bullet') {
    return <ul>{children}</ul>;
  }

  if (type === 'number') {
    return <ol>{children}</ol>;
  }

  return null;
}
