import { contractAddress } from '../utils/constant';

const Footer = () => {
  return (
    <div>
      <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
          <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
            <p className="text-white text-base text-center mx-2 ">
              Contract Address : {''}
              <a
                target="_blank"
                href="https://rinkeby.etherscan.io/address/0xc12bB3B5860D9a18f3c857bDbF2F8E662aB77824"
              >
                {contractAddress}
              </a>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-5">
          <p className="text-white text-sm text-center">
            © 2022 Copyright - Kevin Js
          </p>
          <p className="text-white text-sm text-center font-medium mt-2">
            kjsurtan@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
