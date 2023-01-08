import React, { useState, useRef, useEffect } from "react";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import { CAB_CONTRACT_ADDRESS, abi } from "../../constants";

const BookCab = () => {
  const [bookCab, setBookCab] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
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

  const bookSheCab = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const cabContract = new Contract(CAB_CONTRACT_ADDRESS, abi, signer);
      const address = await signer.getAddress();
      const tx1 = await cabContract.addCustomer(address);
      await tx1.wait();
      setBookCab(true);
      const tx = await cabContract.bookCab();
      await tx.wait();
      
    } catch (err) {
      console.error(err);
    }
  };

  const renderBooking = () => {
    if (bookCab) {
      return (
        <div>
          <h1 class="text-2xl ml-64 mt-2 font-bold ">
            Your Cab is booked!
          </h1>
          <p class="mt-6 text-lg leading-6 text-gray-500 sm:text-center">
            Your cab will arrive in 10 minutes. Please be ready at the pickup
            location.
          </p>
        </div>
      );
    }else{
    
      return (
        <div>
          <div>
            <label
              for="current_location"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Location
            </label>
            <input
              type="text"
              id="current_location"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Current Location"
              required
            />
          </div>
          <div className="mt-4">
            <label
              for="destination"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Destination
            </label>
            <input
              type="text"
              id="destination"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Destination"
              required
            />
          </div>
          <button
            onClick={bookSheCab}
            class="inline-block rounded-lg bg-white mt-4 px-4 py-1.5 text-base font-semibold leading-7 text-darkerIndigo shadow-sm hover:bg-blue-500 hover:ring-indigo-700 hover:text-white"
          >
            Get your ride!
            <span class="text-indigo-200" aria-hidden="true">
              &rarr;
            </span>
          </button>
        </div>
      );
    }

  };

  const cabBooked = () => {
    
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
    <div className="pt-20">
      <div class="relative px-6 lg:px-8">
        <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Book your SheCab
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Book your own cab or share with others to save money and reduce
                carbon footprint. All the drivers and passengers are{" "}
                <strong>female.</strong>
              </p>
              {renderBooking()}
              {cabBooked}
            </div>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fill-opacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9089FC"></stop>
                    <stop offset="1" stop-color="#FF80B5"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCab;
