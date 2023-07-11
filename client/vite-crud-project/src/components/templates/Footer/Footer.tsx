import { StyledContent, StyledFooter, StyledFooterContent } from './styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledFooterContent>
        <StyledContent>
          &copy; {currentYear} Visos teisės saugomos
        </StyledContent>
      </StyledFooterContent>
    </StyledFooter>
  );
};

export default Footer;
