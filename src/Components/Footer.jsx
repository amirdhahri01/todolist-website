//To get the current year dynamically
const date = new Date();

const Footer = () => {
  return (
    <footer>
      <p>Copyright {date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
