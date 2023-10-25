import logo from '../../../assets/logo.svg'
const Footer = () => {
    return (
        <footer className='bg-base-200 px-5 lg:px-0'>
            <footer className="footer py-10 max-w-screen-xl mx-auto text-base-content">
                <div>
                    <img src={logo} alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <nav className='lg:pl-44'>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='lg:pl-44'>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='lg:pl-44'>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </footer>
    );
};

export default Footer;