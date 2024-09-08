import SectionContainer from "../containers/SectionContainer";

const Footer = () => {
  return (
    <footer className="bg-blue-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 text-sm w-full py-8 mx-auto">
      <SectionContainer className="container flex justify-center items-center md:justify-between flex-col md:flex-row text-sm font-normal md:font-semibold">
        <p className="tracking-wide">© 2024 Starter Template</p>

        <ul className="flex gap-4">
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
