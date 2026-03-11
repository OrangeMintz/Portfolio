function Footer() {
  return (
    <>
      <footer id="footer" className="footer position-relative light-background">
        <div className="container text-center">
          <div className="copyright">
            © <span>Copyright</span>{" "}
            <a
              className="px-1 !text-[#272852] font-bold"
              href="https://github.com/OrangeMintz"
              target="_blank"
              rel="noopener noreferrer"
            >
              OrangeMint{" "}
            </a>
            <span>All Rights Reserved</span>
          </div>

          <div className="credits">
            Developed by{" "}
            <a
              href="https://github.com/OrangeMintz"
              target="_blank"
              rel="noopener noreferrer"
            >
              OrangeMint
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
