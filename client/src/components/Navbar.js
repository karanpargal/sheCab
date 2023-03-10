import React ,{ useState, useRef, useEffect} from "react";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";

const Navbar = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [driver, setDriver] = useState(false);
  const [customer, setCustomer] = useState(false);

  const setDriverWallet = () => {
    setDriver(true);
    connectWallet();
    document.getElementById("driver").innerHTML = "Connected as Driver";
  };
  
  const setCustomerWallet = () => {
    setCustomer(true);
    connectWallet();
    document.getElementById("customer").innerHTML = "Connected as Customer";
  };

  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const { chainId } = await web3Provider.getNetwork();
    console.log(chainId);
    if (chainId !== 80001) {
      window.alert("Change the network to mumbai");
      throw new Error("Change network to mumbai");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };
        

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "maticmum",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);


  return (
    <nav class="m-0 px-4 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 backdrop-blur-sm ">
      <div class="container flex flex-wrap items-center justify-between mx-auto my-0">
        <img src="./logo_shecab.png" className="h-20 self-center"></img>
        {/* <h1 class="self-center text-3xl font-semibold whitespace-nowrap ">
          SHE CAB
        </h1> */}

        <div class="flex space-x-4 md:order-2">
          <button
            id = "driver"
            type="button"
            onClick={setDriverWallet}
            class="text-Black  bg-white hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-2 text-center mr-3 md:mr-0"
          >
            Driver
          </button>
          <button
            type="button"
            id = "customer"
            onClick={setCustomerWallet}
            class="text-Black bg-white hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 text-center mr-3 md:mr-0"
          >
            Customer
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-3 px-5 mt-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:pt-2 md:text-sm md:font-medium md:border-0 ">
            <li>
              <a
                href="#"
                class="block py-2 text-lg pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                class="block py-2 pl-3 text-lg pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#future"
                class="block py-2 pl-3 text-lg pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Future Scope
              </a>
            </li>
            <li>
              <a
                href="#team"
                class="block py-2 pl-3 text-lg pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
