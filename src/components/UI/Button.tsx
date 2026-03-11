type ButtonProps = {
  children: React.ReactNode;
};

export default function ({ children }: ButtonProps) {
  return <button>{children}</button>;
}
