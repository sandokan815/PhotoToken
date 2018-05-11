import Web3 from 'web3';

const getWeb3 = new Promise(resolve => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', () => {
    let results;
    let { web3 } = window.web3;

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(web3.currentProvider);

      results = {
        web3,
      };

      console.log('Injected web3 detected.'); // no-console

      resolve(results);
    } else {
      // Fallback to localhost if no web3 injection. We've configured this to
      // use the development console's port by default.
      const provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');

      web3 = new Web3(provider);

      results = {
        web3,
      };

      console.log('No web3 instance injected, using Local web3.'); // no-console

      resolve(results);
    }
  });
});

export default getWeb3;
