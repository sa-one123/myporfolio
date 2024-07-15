const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center py-4">
        <div className="container mx-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Code Sa-one. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  