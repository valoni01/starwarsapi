//rough implementation of a simple handler.....
function HandleError(errorCode) {
  if (errorCode => 500) {
    return `Error: ${errorCode} SWAPI has minor issues.. Kindly try again`;
  } else {
    return "Network of server issue.. Ensure you are connected to the network and try again";
  }
}

export default HandleError;
