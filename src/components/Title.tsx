type TitleProps = {
  title: string;
};
const Title: React.FC<TitleProps> = ({ title }) => {
  return <h2 className="text-center my-4 text-4xl font-semibold">{title}</h2>;
};

export default Title;
