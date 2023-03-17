// Connect to MetaMask and get the token balance
window.addEventListener("load", async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    try {
      // Request account access
      await window.ethereum.enable()
      // Get the contract instance
      const contractAddress = "0x123456789abcdef"
      const contractAbi = [
        /* ABI definition */
      ]
      const tokenContract = new window.web3.eth.Contract(
        contractAbi,
        contractAddress
      )
      // Get the token balance for the connected account
      const accounts = await window.web3.eth.getAccounts()
      const balance = await tokenContract.methods.balanceOf(accounts[0]).call()
      // Update the balance display
      const balanceDisplay = document.getElementById("balance")
      balanceDisplay.innerHTML = `Your token balance is ${balance}`
    } catch (error) {
      console.error(error)
    }
  } else {
    console.error("Please install MetaMask!")
  }
})

// Handle the "Connect to MetaMask" button click
const connectBtn = document.getElementById("connect-btn")
connectBtn.addEventListener("click", async () => {
  try {
    // Request account access
    await window.ethereum.enable()
    // Refresh the page to update the balance display
    location.reload()
  } catch (error) {
    console.error(error)
  }
})
