const Button = ({ text, action }: { text: string; action: () => void }) => {
  return (
    <button type="button" className="btn btn-success m-1 p-2" onClick={action}>
      {text}
    </button>
  );
};

export default Button;
